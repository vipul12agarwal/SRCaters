"use client";

import { useLocale } from "@/components/locale/LocaleProvider";
import type { Locale } from "@/lib/locale";

export function LangToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className="inline-flex rounded-full border border-[var(--gold-soft)] bg-[var(--surface-muted)] p-0.5 text-xs font-medium shadow-inner"
      role="group"
      aria-label={locale === "hi" ? "भाषा चुनें" : "Choose language"}
    >
      {(["en", "hi"] as const satisfies Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={locale === code}
          onClick={() => setLocale(code)}
          className={`min-h-9 rounded-full px-3 py-2 text-xs font-medium transition outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold-bright)] ${
            locale === code
              ? "bg-[var(--surface)] text-[var(--foreground)] shadow-sm"
              : "text-[var(--muted)] hover:text-[var(--foreground)]"
          }`}
        >
          {code === "hi" ? "हिंदी" : "English"}
        </button>
      ))}
    </div>
  );
}
