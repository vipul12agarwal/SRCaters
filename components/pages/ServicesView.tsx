"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale/LocaleProvider";
import { contact, nav, services as servicesCopy, t } from "@/lib/copy";
import { displayHeadingClass } from "@/lib/display-heading";

export function ServicesView() {
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
          {t(servicesCopy.title, locale)}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
          {t(servicesCopy.lead, locale)}
        </p>
      </header>

      <ul className="mt-12 space-y-6">
        {servicesCopy.items.map((item, idx) => (
          <li
            key={idx}
            className="flex gap-6 rounded-3xl border border-[var(--ring)] bg-[var(--surface)] p-6 shadow-sm md:p-8"
          >
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--gold-bright)]/20 font-[family-name:var(--font-dev)] text-xl font-bold text-[var(--brand-deep)] md:flex">
              {idx + 1}
            </span>
            <div>
              <h2 className="font-[family-name:var(--font-dev)] text-xl font-semibold text-[var(--brand-deep)]">
                {t(item.title, locale)}
              </h2>
              <p className="mt-2 text-[var(--muted)]">{t(item.body, locale)}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          href="/gallery"
          className="rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--ink)] hover:brightness-110"
        >
          {t(nav.gallery, locale)}
        </Link>
        <Link
          href="/packages"
          className="rounded-full border border-[var(--gold-bright)] px-6 py-3 text-sm font-semibold text-[var(--gold-bright)] hover:bg-[var(--gold-bright)]/10"
        >
          {t(nav.menus, locale)}
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-transparent px-6 py-3 text-sm font-semibold text-[var(--gold-bright)] underline-offset-4 hover:underline"
        >
          {t(contact.title, locale)}
        </Link>
      </div>
    </div>
  );
}
