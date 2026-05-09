<!-- BEGIN:nextjs-agent-rules -->
# Next.js in this repo

This template targets **Next.js 16** (App Router). APIs differ from older majors — prefer local types and `next` package exports over memorised patterns. See deprecation notices in Next release notes when upgrading.

<!-- END:nextjs-agent-rules -->

# Sheela Raman Caters — reviewer guide

Static marketing site for a bilingual (hi/en) wedding catering business (Uttar Pradesh). **Default UI language:** English; Hindi available via toggle (choice saved in `localStorage`).

## Commands

| Command | Purpose |
|--------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server |
| `npm run lint` | ESLint |
| `npm run build` | Production build + **static export** → `out/` |

## Architecture

- **`app/`** — Routes, `layout.tsx` metadata, `globals.css` theme tokens.
- **`components/chrome/`** — Shell: header, footer, skip link, `FloatingContactBar` (call + WhatsApp), `BackgroundMusic` (no UI).
- **`components/home/`** — Homepage-only blocks: occasions grid, package teaser strip, social-proof quotes (`OccasionsGrid`, `PackageTierStrip`, `SocialProofSection`).
- **`lib/copy-home.ts`** — Homepage structured content arrays (`homeOccasions`, `homeSocialProof`) consumed by `components/home/*`.
- **`components/locale/`** — `LocaleProvider` (localStorage + `document.documentElement.lang`), language toggle.
- **`components/pages/`** — Client views composed into route files under `app/*/page.tsx`.
- **`components/seo/`** — JSON-LD (`CateringService`) built from `lib/contact.ts` + `lib/site.ts`.
- **`lib/copy.ts`** — All user-facing hi/en strings (`t()` helper pattern).
- **`lib/contact.ts`** — Single source for phone digits, `tel:`/`wa.me` helpers.
- **`lib/gallery.ts`** — Paths under `public/gallery/` (counts must match copied JPEGs).
- **`public/videos/`** — Hero clip (`main-event.mp4`); starts at **24s** via `MainEventVideo` (`components/media/MainEventVideo.tsx`).

## Conventions

1. **Static hosting**: `next.config.ts` sets `output: "export"` and `images.unoptimized: true`. Deploy the **`out/`** directory.
2. **Environment**: `NEXT_PUBLIC_SITE_URL` (see `lib/site.ts`) drives `metadataBase` and SEO URLs. Update `public/robots.txt` and `public/sitemap.xml` to match the live domain.
3. **Accessibility**: Skip link → `#main-content`; gallery uses `role="tablist"` with arrow keys; `:focus-visible` outlines in `globals.css`; reduced-motion respected for scroll + FAB scaling.
4. **Security**: External links use `rel="noopener noreferrer"`; JSON-LD is `JSON.stringify` of a static object only (no user input).
5. **Locale hydration**: `LocaleProvider` reads `localStorage` inside `queueMicrotask` to satisfy `react-hooks/set-state-in-effect` lint while avoiding synchronous `setState` in `useEffect`.

## Related docs

- `CLAUDE.md` — Points here for tooling context.
