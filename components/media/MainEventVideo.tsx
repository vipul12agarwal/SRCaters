"use client";

import Link from "next/link";

const VIDEO_SRC = "/videos/main-event.mp4";

export type MainEventVideoProps = {
  eyebrow: string;
  galleryHref: string;
  galleryLabel: string;
  posterSrc: string;
};

export function MainEventVideo({
  eyebrow,
  galleryHref,
  galleryLabel,
  posterSrc,
}: MainEventVideoProps) {
  return (
    <section
      className="border-b border-[var(--gold-soft)] bg-[var(--surface-muted)] py-16 md:py-20"
      aria-labelledby="main-event-video-eyebrow"
    >
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p
          id="main-event-video-eyebrow"
          className="section-eyebrow text-[1.75rem] leading-tight sm:text-[2rem] md:text-[2.25rem]"
        >
          {eyebrow}
        </p>

        <div className="mx-auto mt-10 w-full overflow-hidden rounded-xl border border-[var(--gold-soft)] bg-black shadow-2xl shadow-black/15 ring-1 ring-black/5">
          <video
            className="aspect-video w-full object-contain"
            controls
            playsInline
            preload="metadata"
            poster={posterSrc}
            src={VIDEO_SRC}
          >
            Video playback is not supported in this browser.
          </video>
        </div>

        <Link
          href={galleryHref}
          className="mt-8 inline-flex rounded-md bg-[var(--gold)] px-8 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink)] hover:brightness-110"
        >
          {galleryLabel} →
        </Link>
      </div>
    </section>
  );
}
