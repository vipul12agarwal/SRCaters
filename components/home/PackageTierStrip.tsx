"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/locale/LocaleProvider";
import { home, packages as packagesCopy, t } from "@/lib/copy";
import { GALLERY } from "@/lib/gallery";

const TIER_BG = [GALLERY.main[10], GALLERY.wedding[4], GALLERY.main[13]] as const;

const TIER_LABELS = [home.tierSilver, home.tierGold, home.tierPlatinum] as const;

export function PackageTierStrip() {
  const { locale } = useLocale();

  return (
    <section
      className="border-b border-[var(--gold-soft)] bg-[var(--surface)] py-16 md:py-20"
      aria-labelledby="menus-teaser-title"
    >
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="section-eyebrow">{locale === "hi" ? "मेनू" : "Menus"}</p>
        <h2
          id="menus-teaser-title"
          className={`mx-auto mt-3 max-w-3xl text-3xl font-semibold text-[var(--brand-deep)] md:text-4xl ${
            locale === "en"
              ? "font-[family-name:var(--font-display)]"
              : "font-[family-name:var(--font-dev)]"
          }`}
        >
          {t(home.sectionMenusTeaser, locale)}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">{t(home.menusTeaserLead, locale)}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packagesCopy.tiers.map((tier, idx) => (
            <article
              key={idx}
              className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-xl border border-[var(--gold-soft)] text-left shadow-md"
            >
              <div className="absolute inset-0">
                <Image
                  src={TIER_BG[idx] ?? GALLERY.main[0]}
                  alt=""
                  fill
                  className="object-cover opacity-45 motion-safe:transition motion-safe:duration-700 motion-safe:group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/92 to-white/55" />
              </div>
              <div className="relative mt-auto p-6 pt-28">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
                  {t(TIER_LABELS[idx], locale)}
                </p>
                <h3
                  className={`mt-2 text-xl font-semibold text-[var(--brand-deep)] ${
                    locale === "en"
                      ? "font-[family-name:var(--font-display)]"
                      : "font-[family-name:var(--font-dev)]"
                  }`}
                >
                  {t(tier.name, locale)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{t(tier.blurb, locale)}</p>
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/packages"
          className="mt-10 inline-flex rounded-md border border-[var(--gold-bright)] px-8 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gold-bright)] hover:bg-[var(--gold-bright)]/10"
        >
          {t(home.viewMenus, locale)} →
        </Link>
      </div>
    </section>
  );
}
