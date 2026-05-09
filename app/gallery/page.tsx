import type { Metadata } from "next";
import { GalleryView } from "@/components/pages/GalleryView";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of Sheela Raman Caters: signature setups, a full wedding service, and intimate home gatherings.",
  alternates: { canonical: "/gallery/" },
};

export default function Page() {
  return <GalleryView />;
}
