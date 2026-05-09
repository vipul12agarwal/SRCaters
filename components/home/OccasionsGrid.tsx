"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale/LocaleProvider";
import { home, nav, t } from "@/lib/copy";
import { homeOccasions } from "@/lib/copy-home";

export function OccasionsGrid() {
  const { locale } = useLocale();
  const displayHeading =
    locale === "en"
      ? "font-[family-name:var(--font-display)]"
      : "font-[family-name:var(--font-dev)]";

  return (
    <section
      className="scroll-mt-28 border-b border-[var(--gold-soft)] bg-[var(--surface-muted)] py-16 md:py-20"
      aria-labelledby="occasions-title"
    >
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="section-eyebrow">{locale === "hi" ? "सेवाएँ" : "Services"}</p>
        <h2
          id="occasions-title"
          className={`mx-auto mt-3 max-w-3xl text-3xl font-semibold text-[var(--brand-deep)] md:text-4xl ${displayHeading}`}
        >
          {t(home.sectionOccasions, locale)}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">{t(home.occasionsLead, locale)}</p>
        <div className="mt-4 flex justify-center">
          <Link
            href="/services"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-card)] underline-offset-4 hover:underline"
          >
            {t(nav.services, locale)} →
          </Link>
        </div>

        <ul className="mt-12 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {homeOccasions.map((item, idx) => (
            <li
              key={idx}
              className="flex h-full flex-col rounded-xl border border-[var(--gold-soft)] bg-[var(--surface)] p-6 shadow-sm ring-1 ring-black/5 transition hover:border-[var(--gold)] hover:shadow-md md:p-7"
            >
              <div className="h-1 w-12 shrink-0 bg-[var(--gold)]" />
              <h3 className={`mt-5 text-lg font-semibold text-[var(--brand-deep)] md:text-xl ${displayHeading}`}>
                {t(item.title, locale)}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">{t(item.blurb, locale)}</p>
              <Link
                href="/gallery"
                className="mt-5 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-bright)] underline-offset-4 hover:underline"
              >
                {t(nav.gallery, locale)} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
