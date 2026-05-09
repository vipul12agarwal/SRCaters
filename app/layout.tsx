import type { Metadata, Viewport } from "next";
import { DM_Sans, Noto_Serif_Devanagari, Playfair_Display } from "next/font/google";
import { HashScroll } from "@/components/chrome/HashScroll";
import { SiteFooter } from "@/components/chrome/SiteFooter";
import { SiteHeader } from "@/components/chrome/SiteHeader";
import { SkipLink } from "@/components/chrome/SkipLink";
import { BackgroundMusic } from "@/components/chrome/BackgroundMusic";
import { FloatingContactBar } from "@/components/chrome/FloatingContactBar";
import { JalebiLoadingScreen } from "@/components/chrome/JalebiLoadingScreen";
import { LocaleProvider } from "@/components/locale/LocaleProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const devanagari = Noto_Serif_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "600", "700"],
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#550000",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Sheela Raman Caters | Wedding & Event Catering — Agra, Mathura, Aligarh",
    template: "%s | Sheela Raman Caters",
  },
  description:
    "Wedding & event catering in Agra, Mathura, Aligarh & nearby. Sheela Raman Caters — bilingual Hindi–English site. Live counters, thali & customised menus.",
  keywords: [
    "wedding catering Agra",
    "vegetarian caterers Mathura",
    "pure veg catering Aligarh",
    "शादी केटरिंग आगरा",
    "शाकाहारी केटर्स मथुरा",
    "Sheela Raman Caters",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["hi_IN"],
    title: "Sheela Raman Caters | Wedding & Event Catering — Agra, Mathura, Aligarh",
    description:
      "Wedding & event catering across Uttar Pradesh. Bilingual Hindi–English site.",
    url: siteUrl,
    siteName: "Sheela Raman Caters",
    images: [`${siteUrl}/brand/logo.png`],
  },
  icons: {
    icon: [{ url: "/brand/logo.png", type: "image/png" }],
    apple: [{ url: "/brand/logo.png", type: "image/png" }],
  },
  verification: {
    google: "0A3Jzxq_spqLFCDQ-HGUT8sKUxjo3EQ90qSbKzVt0K8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${display.variable} ${dmSans.variable} ${devanagari.variable} flex min-h-full flex-col antialiased`}
      >
        <JsonLd />
        <LocaleProvider>
          <HashScroll />
          <SkipLink label="Skip to main content · मुख्य विषय पर जाएँ" />
          <JalebiLoadingScreen />
          <SiteHeader />
          <main
            id="main-content"
            tabIndex={-1}
            className="flex-1 pb-28 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-bright)] sm:pb-24 md:pb-28"
          >
            {children}
          </main>
          <SiteFooter />
          <BackgroundMusic />
          <FloatingContactBar />
        </LocaleProvider>
      </body>
    </html>
  );
}
