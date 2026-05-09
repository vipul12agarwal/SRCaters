"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale/LocaleProvider";
import { contact, footer, home, nav, t } from "@/lib/copy";
import { formatPhoneDisplay, PHONE_DIGITS, telHref } from "@/lib/contact";
import { whatsappHref } from "@/lib/whatsapp";

const MAPS_QUERY =
  "https://www.google.com/maps/search/?api=1&query=Agra%2C+Uttar+Pradesh";

export function SiteFooter() {
  const { locale } = useLocale();
  const wa = whatsappHref(home.waPreset[locale]);

  return (
    <footer className="mt-auto bg-[var(--footer-bg)] text-[var(--footer-text)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-[family-name:var(--font-dev)] text-lg font-semibold text-[var(--gold-bright)]">
            Sheela Raman Caters
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--footer-text)]/80">
            {locale === "hi"
              ? "आगरा, मथुरा, अलीगढ़ और आसपास — शादी व समारोह केटरिंग।"
              : "Agra, Mathura, Aligarh & nearby — wedding & event catering."}
          </p>
          <p className="mt-4 text-xs text-[var(--footer-text)]/65">{t(footer.rights, locale)}</p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-bright)]">
            {locale === "hi" ? "संपर्क" : "Contact details"}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {PHONE_DIGITS.map((p) => (
              <li key={p}>
                <a
                  href={telHref(p)}
                  className="rounded-sm text-[var(--footer-text)] hover:text-[var(--gold-bright)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold-bright)]"
                >
                  {formatPhoneDisplay(p)}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs uppercase tracking-wider text-[var(--footer-text)]/65">
            {locale === "hi" ? "क्षेत्र सेवा" : "Service area"}
          </p>
          <p className="mt-1 text-sm text-[var(--footer-text)]/80">{t(contact.areasBody, locale)}</p>
          <a
            href={MAPS_QUERY}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-sm text-xs font-semibold uppercase tracking-wide text-[var(--gold-bright)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold-bright)]"
          >
            {locale === "hi" ? "मानचित्र पर देखें" : "View on maps"} →
          </a>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-bright)]">
            {locale === "hi" ? "त्वरित लिंक" : "Quick links"}
          </p>
          <ul className="mt-4 space-y-2 text-base">
            {(
              [
                ["/", "home"],
                ["/#about", "about"],
                ["/services", "services"],
                ["/#cuisines", "cuisinesNav"],
                ["/packages", "menus"],
                ["/gallery", "gallery"],
                ["/contact", "contact"],
              ] as const
            ).map(([href, key]) => (
              <li key={`${href}-${key}`}>
                <Link
                  href={href}
                  className="rounded-sm font-bold text-[var(--footer-text)] hover:text-[var(--gold-bright)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold-bright)]"
                >
                  {t(nav[key], locale)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-bright)]">
            {t(footer.startPlanning, locale)}
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 w-full items-center justify-center rounded-full bg-[#25D366] px-4 py-2.5 text-center text-sm font-semibold text-white hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold-bright)]"
              >
                {t(home.ctaPrimary, locale)}
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="inline-flex min-h-10 w-full items-center justify-center rounded-full border border-[var(--gold-bright)]/50 bg-transparent px-4 py-2.5 text-center font-semibold text-[var(--footer-text)] hover:border-[var(--gold-bright)] hover:bg-[var(--gold-bright)]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold-bright)]"
              >
                {t(nav.contact, locale)}
              </Link>
            </li>
            <li>
              <Link
                href="/packages"
                className="block rounded-sm font-medium text-[var(--gold-bright)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold-bright)]"
              >
                {t(nav.menus, locale)} →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
