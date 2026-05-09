"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/locale/LocaleProvider";
import { home, nav, t } from "@/lib/copy";
import { homeCuisines } from "@/lib/copy-home";
import { GALLERY } from "@/lib/gallery";

/** Thumbnails for `homeCuisines` (order matches list): main-20, main-11, main-07, main-10, main-13, main-15. */
const CUISINE_IMAGES = [
  GALLERY.main[17],
  GALLERY.main[9],
  GALLERY.main[6],
  GALLERY.main[8],
  GALLERY.main[11],
  GALLERY.main[12],
] as const;

export function CuisinesGrid() {
  const { locale } = useLocale();

  return (
    <section
      id="cuisines"
      className="scroll-mt-28 border-b border-[var(--gold-soft)] bg-[var(--surface)] py-16 md:py-20"
      aria-labelledby="cuisines-title"
    >
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="section-eyebrow">{t(home.cuisinesEyebrow, locale)}</p>
        <h2
          id="cuisines-title"
          className={`mx-auto mt-3 max-w-3xl text-3xl font-semibold text-[var(--brand-deep)] md:text-4xl ${
            locale === "en"
              ? "font-[family-name:var(--font-display)]"
              : "font-[family-name:var(--font-dev)]"
          }`}
        >
          {t(home.cuisinesTitle, locale)}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">{t(home.cuisinesLead, locale)}</p>

        <ul className="mt-12 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {homeCuisines.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-col overflow-hidden rounded-xl border border-[var(--gold-soft)] bg-[var(--surface-muted)] shadow-sm sm:flex-row"
            >
              <div className="relative h-44 w-full shrink-0 bg-black/[0.06] sm:h-48 sm:w-48 md:h-52 md:w-52">
                <Image
                  src={CUISINE_IMAGES[idx] ?? GALLERY.main[1]}
                  alt={t(item.title, locale)}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 100vw, 208px"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-4">
                <h3
                  className={`text-base font-semibold text-[var(--brand-deep)] md:text-lg ${
                    locale === "en"
                      ? "font-[family-name:var(--font-display)]"
                      : "font-[family-name:var(--font-dev)]"
                  }`}
                >
                  {t(item.title, locale)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{t(item.blurb, locale)}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/packages"
            className="rounded-md bg-[var(--gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink)] shadow hover:brightness-110"
          >
            {t(nav.menus, locale)}
          </Link>
          <Link
            href="/gallery"
            className="rounded-md border border-[var(--gold-bright)] bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gold-bright)] hover:bg-[var(--gold-bright)]/10"
          >
            {t(nav.gallery, locale)}
          </Link>
        </div>
      </div>
    </section>
  );
}
