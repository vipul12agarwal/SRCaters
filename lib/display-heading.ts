import type { Locale } from "@/lib/locale";

/** Section / page titles: Latin display vs Devanagari body face. */
export function displayHeadingClass(locale: Locale) {
  return locale === "en"
    ? "font-[family-name:var(--font-display)]"
    : "font-[family-name:var(--font-dev)]";
}
