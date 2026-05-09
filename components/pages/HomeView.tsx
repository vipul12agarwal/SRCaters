"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroClipRotator } from "@/components/home/HeroClipRotator";
import { CuisinesGrid } from "@/components/home/CuisinesGrid";
import { OccasionsGrid } from "@/components/home/OccasionsGrid";
import { PackageTierStrip } from "@/components/home/PackageTierStrip";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { MainEventVideo } from "@/components/media/MainEventVideo";
import { useLocale } from "@/components/locale/LocaleProvider";
import {
  brand,
  home,
  nav,
  t,
} from "@/lib/copy";
import { GALLERY } from "@/lib/gallery";
import { whatsappHref } from "@/lib/whatsapp";

export function HomeView() {
  const { locale } = useLocale();

  const wa = whatsappHref(home.waPreset[locale]);

  const displayHeading =
    locale === "en"
      ? "font-[family-name:var(--font-display)]"
      : "font-[family-name:var(--font-dev)]";

  return (
    <div>
      {/* Hero — full-width banner like classic catering sites */}
      <section className="relative flex min-h-[72vh] items-center justify-center md:min-h-[78vh]">
        <div className="absolute inset-0">
          <HeroClipRotator
            posterSrc={GALLERY.wedding[3]}
            alt={`Sheela Raman Caters — ${t(home.heroEyebrow, locale)}`}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/54 via-black/43 to-black/70" aria-hidden />

        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--gold-bright)]">
            {t(home.heroEyebrow, locale)}
          </p>
          <h1
            className={`mt-5 text-3xl font-semibold leading-tight md:text-5xl md:leading-tight ${displayHeading}`}
          >
            {t(home.heroTitle, locale)}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/95 md:text-lg">
            {t(home.heroLead, locale)}
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-[var(--gold-soft)] bg-[var(--surface-muted)] py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-3">
          <Stat label={t(home.statsScaleLabel, locale)} value={t(home.trustGuests, locale)} />
          <Stat label={locale === "hi" ? "रसोई" : "Kitchen"} value={t(home.trustVeg, locale)} />
          <Stat label={locale === "hi" ? "क्षेत्र" : "Areas"} value={t(home.trustAreas, locale)} />
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-28 border-b border-[var(--gold-soft)] bg-[var(--surface)] py-16 md:py-20"
        aria-labelledby="about-title"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
          <div className="w-full max-w-full">
            {/* Intrinsic size of main-20.jpeg; update if the asset changes. */}
            <Image
              src={GALLERY.main[17]}
              alt={locale === "hi" ? "केटरिंग सेटअप" : "Catering setup"}
              width={2015}
              height={1170}
              className="h-auto w-full rounded-xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="section-eyebrow text-left">{t(home.aboutEyebrow, locale)}</p>
            <h2
              id="about-title"
              className={`mt-3 text-3xl font-semibold text-[var(--brand-deep)] md:text-4xl ${displayHeading}`}
            >
              {t(home.aboutTitle, locale)}
            </h2>
            <p className="mt-6 leading-relaxed text-[var(--muted)]">{t(home.aboutLead, locale)}</p>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">{t(home.aboutBody, locale)}</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink)] outline-offset-2 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold-bright)]"
            >
              {t(nav.contact, locale)} →
            </Link>
          </div>
        </div>
      </section>

      <OccasionsGrid />

      <MainEventVideo
        eyebrow={t(home.recentEyebrow, locale)}
        galleryHref="/gallery"
        galleryLabel={t(home.videoGalleryCta, locale)}
        posterSrc={GALLERY.main[0]}
      />

      <PackageTierStrip />

      {/* Custom menus band — similar intent to Raas “customisable menu” */}
      <section className="border-b border-[var(--gold-soft)] bg-[var(--panel-invert)] py-14 text-[var(--foreground)] md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--gold-bright)]">
            {t(home.customMenusEyebrow, locale)}
          </p>
          <h2 className={`mt-4 text-2xl font-semibold text-[var(--brand-deep)] md:text-3xl ${displayHeading}`}>
            {t(home.customMenusTitle, locale)}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[var(--cream)]/95 md:text-base">
            {t(home.customMenusLead, locale)}
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--gold)] px-8 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink)] outline-offset-2 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold-bright)]"
          >
            {t(home.ctaPrimary, locale)}
          </a>
        </div>
      </section>

      <CuisinesGrid />

      {/* Gallery — recent snaps */}
      <section className="border-b border-[var(--gold-soft)] bg-[var(--surface-muted)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="section-eyebrow">{t(home.galleryEyebrow, locale)}</p>
          <h2 className={`mt-3 text-3xl font-semibold text-[var(--brand-deep)] md:text-4xl ${displayHeading}`}>
            {t(home.sectionGallery, locale)}
          </h2>
          <Link
            href="/gallery"
            className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-bright)] underline-offset-4 hover:underline"
          >
            {t(home.viewGallery, locale)} →
          </Link>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <GalleryTeaser src={GALLERY.main[1]} caption={t(home.galleryTeaserMain, locale)} />
            <GalleryTeaser src={GALLERY.wedding[0]} caption={t(home.galleryTeaserWedding, locale)} />
            <GalleryTeaser src={GALLERY.smallHome[0]} caption={t(home.galleryTeaserHome, locale)} />
            <GalleryTeaser src={GALLERY.main[14]} caption={t(home.gallerySnapMore, locale)} />
          </div>
        </div>
      </section>

      <SocialProofSection />

      {/* Thanks + final CTA */}
      <section className="border-b border-[var(--gold-soft)] bg-[var(--surface)] py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className={`text-2xl font-semibold text-[var(--brand-deep)] md:text-3xl ${displayHeading}`}>
            {t(home.thanksTitle, locale)}
          </h2>
          <p className="mt-4 text-[var(--muted)]">{t(home.thanksLead, locale)}</p>
          <p className="mt-6 text-sm font-medium text-[var(--brand-deep)]">{t(brand.tagline, locale)}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-xl bg-[var(--panel-invert)] px-6 py-12 text-center text-[var(--foreground)] md:px-16 md:py-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--gold-bright)]">
            {locale === "hi" ? "अगला कदम" : "Next step"}
          </p>
          <p className={`mx-auto mt-4 max-w-2xl text-xl font-semibold text-[var(--brand-deep)] md:text-2xl ${displayHeading}`}>
            {locale === "hi"
              ? "तारीख, मेहमानों की संख्या और शहर का नाम भेजें — हम जल्दी जवाब देंगे।"
              : "Send your date, guest count, and city — we reply promptly."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--gold)] px-8 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink)] outline-offset-2 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold-bright)]"
            >
              {t(home.ctaPrimary, locale)}
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-[var(--gold-bright)]/80 px-8 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gold-bright)] outline-offset-2 transition hover:bg-[var(--gold-bright)]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold-bright)]"
            >
              {t(nav.contact, locale)}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[var(--gold-soft)] bg-[var(--surface-muted)] px-5 py-5 text-center shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{label}</p>
      <p className="mt-2 text-base font-semibold leading-snug text-[var(--brand-deep)] md:text-lg">{value}</p>
    </div>
  );
}

function GalleryTeaser({ src, caption }: { src: string; caption: string }) {
  return (
    <Link
      href="/gallery"
      className="group block rounded-xl outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold-bright)]"
    >
      <figure className="h-full overflow-hidden rounded-xl border border-[var(--gold-soft)] bg-[var(--surface)] shadow-md transition-shadow duration-200 group-hover:border-[var(--gold)] group-hover:shadow-lg">
        <div className="relative aspect-square w-full">
          <Image src={src} alt={caption} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
        </div>
        <figcaption className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-wide text-[var(--brand-deep)] group-hover:text-[var(--gold-bright)]">
          {caption}
        </figcaption>
      </figure>
    </Link>
  );
}
