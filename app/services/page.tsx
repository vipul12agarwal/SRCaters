import type { Metadata } from "next";
import { ServicesView } from "@/components/pages/ServicesView";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wedding and event catering for Agra, Mathura, Aligarh — menus, live counters, Jain-friendly options.",
  alternates: { canonical: "/services/" },
};

export default function Page() {
  return <ServicesView />;
}
