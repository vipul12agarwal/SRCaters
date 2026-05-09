"use client";

import Image from "next/image";
import type { KeyboardEvent } from "react";
import { useState } from "react";
import { useLocale } from "@/components/locale/LocaleProvider";
import { galleryPage, t, type Bilingual } from "@/lib/copy";
import { displayHeadingClass } from "@/lib/display-heading";
import { GALLERY } from "@/lib/gallery";

type Tab = "main" | "wedding" | "smallHome";

const TAB_ORDER: Tab[] = ["main", "wedding", "smallHome"];

const PANELS: { id: Tab; paths: readonly string[] }[] = [
  { id: "main", paths: GALLERY.main },
  { id: "wedding", paths: GALLERY.wedding },
  { id: "smallHome", paths: GALLERY.smallHome },
];

export function GalleryView() {
  const { locale } = useLocale();
  const [tab, setTab] = useState<Tab>("main");

  const tabs: { id: Tab; label: Bilingual }[] = [
    { id: "main", label: galleryPage.tabMain },
    { id: "wedding", label: galleryPage.tabWedding },
    { id: "smallHome", label: galleryPage.tabHome },
  ];

  const altPrefix = t(galleryPage.title, locale);

  function focusTabAt(index: number) {
    const id = TAB_ORDER[index];
    setTab(id);
    queueMicrotask(() =>
      document.getElementById(`gallery-tab-${id}`)?.focus(),
    );
  }

  function onTabListKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const i = TAB_ORDER.indexOf(tab);
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusTabAt((i + 1) % TAB_ORDER.length);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusTabAt((i - 1 + TAB_ORDER.length) % TAB_ORDER.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTabAt(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTabAt(TAB_ORDER.length - 1);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
          Sheela Raman Caters
        </p>
        <h1
          className={`mt-2 text-3xl font-semibold text-[var(--brand-deep)] md:text-4xl ${displayHeadingClass(locale)}`}
        >
          {altPrefix}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
          {t(galleryPage.lead, locale)}
        </p>
      </header>

      <div
        className="mt-10 flex flex-wrap gap-2 rounded-full border border-[var(--ring)] bg-[var(--surface-muted)] p-1"
        role="tablist"
        aria-label={locale === "hi" ? "गैलरी श्रेणी" : "Gallery categories"}
        onKeyDown={onTabListKeyDown}
      >
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            id={`gallery-tab-${id}`}
            type="button"
            role="tab"
            aria-selected={tab === id}
            aria-controls={`gallery-panel-${id}`}
            tabIndex={tab === id ? 0 : -1}
            onClick={() => setTab(id)}
            className={`rounded-full px-4 py-2.5 text-sm font-semibold outline-offset-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold-bright)] md:px-5 ${
              tab === id
                ? "bg-[var(--surface)] text-[var(--brand-deep)] shadow-sm"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {t(label, locale)}
          </button>
        ))}
      </div>

      {PANELS.map(({ id, paths }) => (
        <div
          key={id}
          id={`gallery-panel-${id}`}
          role="tabpanel"
          aria-labelledby={`gallery-tab-${id}`}
          hidden={tab !== id}
          className="mt-10"
        >
          <GalleryGrid paths={paths} altPrefix={altPrefix} />
        </div>
      ))}
    </div>
  );
}

function GalleryGrid({
  paths,
  altPrefix,
}: {
  paths: readonly string[];
  altPrefix: string;
}) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {paths.map((src, i) => (
        <figure
          key={src}
          className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-[var(--ring)] bg-[var(--surface)] shadow-sm"
        >
          <div className="relative w-full">
            <Image
              src={src}
              alt={`${altPrefix} — ${i + 1}`}
              width={900}
              height={1200}
              className="h-auto w-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </figure>
      ))}
    </div>
  );
}
