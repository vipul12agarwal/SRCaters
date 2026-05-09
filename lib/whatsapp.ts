import { WHATSAPP_E164 } from "@/lib/contact";

export function whatsappHref(body: string): string {
  const q = encodeURIComponent(body.trim());
  return `https://wa.me/${WHATSAPP_E164}?text=${q}`;
}
