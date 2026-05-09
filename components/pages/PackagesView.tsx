"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale/LocaleProvider";
import { BUSINESS_MENU_SECTIONS } from "@/lib/business-menu";
import { nav, packages as packagesCopy, t } from "@/lib/copy";
import { displayHeadingClass } from "@/lib/display-heading";

export function PackagesView() {
  const { locale } = useLocale();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
          Sheela Raman Caters
        </p>
        <h1
          className={`mt-2 text-3xl font-semibold text-[var(--brand-deep)] md:text-4xl ${displayHeadingClass(locale)}`}
        >
          {t(packagesCopy.title, locale)}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
          {t(packagesCopy.lead, locale)}
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {packagesCopy.tiers.map((tier, idx) => (
          <article
            key={idx}
            className="flex flex-col rounded-3xl border border-[var(--ring)] bg-[var(--surface)] p-6 shadow-sm"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--gold)]">
              {locale === "hi" ? "स्तर" : "Tier"} {idx + 1}
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-dev)] text-xl font-semibold text-[var(--brand-deep)]">
              {t(tier.name, locale)}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
              {t(tier.blurb, locale)}
            </p>
          </article>
        ))}
      </div>

      <section
        className="mt-16"
        aria-labelledby="menu-catalog-heading"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
          {t(packagesCopy.menuCatalogEyebrow, locale)}
        </p>
        <h2
          id="menu-catalog-heading"
          className={`mt-2 text-2xl font-semibold text-[var(--brand-deep)] md:text-3xl ${displayHeadingClass(locale)}`}
        >
          {t(packagesCopy.menuCatalogTitle, locale)}
        </h2>
        <p className="mt-3 max-w-3xl text-[var(--muted)]">
          {t(packagesCopy.menuCatalogLead, locale)}
        </p>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {BUSINESS_MENU_SECTIONS.map((section) => (
            <details
              key={section.title.en}
              className="group rounded-2xl border border-[var(--ring)] bg-[var(--surface)] px-5 py-1 shadow-sm open:pb-4 open:pt-3"
            >
              <summary className="cursor-pointer select-none py-3 font-semibold text-[var(--brand-deep)] marker:text-[var(--gold)] group-open:border-b group-open:border-[var(--ring)]">
                {t(section.title, locale)}
                <span className="ml-2 text-xs font-normal text-[var(--muted)]">
                  ({section.items.length})
                </span>
              </summary>
              <ul className="mt-3 max-h-[min(40vh,22rem)] list-inside list-disc space-y-1 overflow-y-auto pr-1 text-sm leading-relaxed text-[var(--muted)]">
                {section.items.map((item) => (
                  <li key={item.en}>{t(item, locale)}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <p className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[var(--gold-soft)] bg-[var(--surface-muted)] px-6 py-5 text-center text-sm leading-relaxed text-[var(--muted)]">
        {t(packagesCopy.note, locale)}
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          href="/contact"
          className="rounded-full bg-[var(--gold)] px-8 py-3 text-sm font-semibold text-[var(--ink)] hover:brightness-110"
        >
          {t(nav.contact, locale)}
        </Link>
        <Link
          href="/gallery"
          className="rounded-full border border-[var(--gold-bright)] px-8 py-3 text-sm font-semibold text-[var(--gold-bright)] hover:bg-[var(--gold-bright)]/10"
        >
          {t(nav.gallery, locale)}
        </Link>
      </div>
    </div>
  );
}
