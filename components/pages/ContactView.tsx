"use client";

import { useLocale } from "@/components/locale/LocaleProvider";
import { contact, home, t } from "@/lib/copy";
import { displayHeadingClass } from "@/lib/display-heading";
import { formatPhoneDisplay, PHONE_DIGITS, telHref } from "@/lib/contact";
import { whatsappHref } from "@/lib/whatsapp";

export function ContactView() {
  const { locale } = useLocale();
  const wa = whatsappHref(home.waPreset[locale]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
          Sheela Raman Caters
        </p>
        <h1
          className={`mt-2 text-3xl font-semibold text-[var(--brand-deep)] md:text-4xl ${displayHeadingClass(locale)}`}
        >
          {t(contact.title, locale)}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
          {t(contact.lead, locale)}
        </p>
      </header>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <section className="rounded-3xl border border-[var(--ring)] bg-[var(--surface)] p-8 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--gold)]">
            {t(contact.phones, locale)}
          </h2>
          <ul className="mt-4 space-y-3">
            {PHONE_DIGITS.map((digits) => (
              <li key={digits}>
                <a
                  href={telHref(digits)}
                  className="rounded text-lg font-semibold text-[var(--brand-deep)] underline-offset-4 hover:underline"
                >
                  {formatPhoneDisplay(digits)}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[var(--muted)]">{t(contact.hours, locale)}</p>
        </section>

        <section className="rounded-3xl border border-[var(--ring)] bg-[var(--panel-invert)] p-8 text-[var(--foreground)] shadow-md">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--gold-bright)]">
            WhatsApp
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--cream)]/90">
            {locale === "hi"
              ? "तेज़ जवाब के लिए व्हाट्सएप पर संदेश छोड़ें।"
              : "WhatsApp is usually the fastest way to reach us."}
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
          >
            {t(contact.waCta, locale)}
          </a>
        </section>
      </div>

      <section className="mt-10 rounded-3xl border border-dashed border-[var(--gold)] bg-[var(--surface-muted)]/60 px-6 py-8 md:px-10">
        <h2 className="font-[family-name:var(--font-dev)] text-xl font-semibold text-[var(--brand-deep)]">
          {t(contact.areasTitle, locale)}
        </h2>
        <p className="mt-3 max-w-3xl text-[var(--muted)]">{t(contact.areasBody, locale)}</p>
      </section>
    </div>
  );
}
