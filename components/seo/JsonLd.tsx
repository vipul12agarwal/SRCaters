import { PHONE_DIGITS } from "@/lib/contact";
import { siteUrl } from "@/lib/site";

const schema = {
  "@context": "https://schema.org",
  "@type": "CateringService",
  name: "Sheela Raman Caters",
  description:
    "Wedding and event catering serving Agra, Mathura, Aligarh and nearby areas in Uttar Pradesh.",
  url: siteUrl,
  telephone: PHONE_DIGITS.map((d) => `+91${d}`),
  areaServed: [
    { "@type": "City", name: "Agra" },
    { "@type": "City", name: "Mathura" },
    { "@type": "City", name: "Aligarh" },
    { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
  ],
  servesCuisine: "Indian vegetarian",
} as const;

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
