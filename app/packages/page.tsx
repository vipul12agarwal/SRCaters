import type { Metadata } from "next";
import { PackagesView } from "@/components/pages/PackagesView";

export const metadata: Metadata = {
  title: "Menus",
  description:
    "Sample catering tiers for weddings and celebrations in Uttar Pradesh. Custom menus for your rituals.",
  alternates: { canonical: "/packages/" },
};

export default function Page() {
  return <PackagesView />;
}
