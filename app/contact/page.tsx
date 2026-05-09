import type { Metadata } from "next";
import { ContactView } from "@/components/pages/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call or WhatsApp Sheela Raman Caters: +91 98374 49338 / +91 82678 94077. Serving Agra, Mathura, Aligarh.",
  alternates: { canonical: "/contact/" },
};

export default function Page() {
  return <ContactView />;
}
