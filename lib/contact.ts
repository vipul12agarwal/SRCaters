/** Canonical business phone numbers (India, 10 digits, no country code). */
export const PHONE_DIGITS = ["9837449338", "8267894077"] as const;

/** WhatsApp Business primary number for wa.me links (country code + number, no +). */
export const WHATSAPP_E164 = "919837449338" as const;

export function telHref(digits: string): string {
  return `tel:+91${digits}`;
}

export function formatPhoneDisplay(digits: string): string {
  const d = digits.replace(/\D/g, "");
  if (d.length !== 10) return digits;
  return `+91 ${d.slice(0, 5)} ${d.slice(5)}`;
}
