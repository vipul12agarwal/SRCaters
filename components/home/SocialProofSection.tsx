"use client";

import { useLocale } from "@/components/locale/LocaleProvider";
import { home, t } from "@/lib/copy";
import { homeSocialProof } from "@/lib/copy-home";

function StarRow({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5 text-[var(--gold-bright)]" aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= Math.round(value) ? "opacity-100" : "opacity-25"}>
          ★
        </span>
      ))}
    </div>
  );
}

export function SocialProofSection() {
  const { locale } = useLocale();

  const titleFont =
    locale === "en"
      ? "font-[family-name:var(--font-display)]"
      : "font-[family-name:var(--font-dev)]";

  return (
    <section
      className="border-t border-[var(--gold-soft)] bg-[var(--surface-muted)] py-16 md:py-20"
      aria-labelledby="social-proof-title"
    >
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="section-eyebrow">{t(home.testimonialsEyebrow, locale)}</p>
        <h2
          id="social-proof-title"
          className={`mt-3 text-3xl font-semibold text-[var(--brand-deep)] md:text-4xl ${titleFont}`}
        >
          {t(home.sectionSocialProof, locale)}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--muted)]">
          {t(home.socialProofLead, locale)}
        </p>

        <ul className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
          {homeSocialProof.map((item, idx) => (
            <li key={idx}>
              <blockquote className="flex h-full flex-col rounded-xl border border-[var(--gold-soft)] bg-[var(--surface)] p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <StarRow value={item.rating} />
                  <span className="text-sm font-semibold tabular-nums text-[var(--brand-deep)]">
                    {item.rating.toFixed(1)}
                    <span className="font-normal text-[var(--muted)]">/5</span>
                  </span>
                </div>
                <p className={`mt-4 flex-1 text-base italic leading-relaxed text-[var(--foreground)] ${titleFont}`}>
                  {"\u201c"}
                  {t(item.text, locale)}
                  {"\u201d"}
                </p>
                <footer className={`mt-4 border-t border-[var(--gold-soft)]/50 pt-4 text-sm font-medium text-[var(--muted)] ${titleFont}`}>
                  — {t(item.author, locale)}
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
