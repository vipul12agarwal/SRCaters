"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LangToggle } from "@/components/locale/LangToggle";
import { useLocale } from "@/components/locale/LocaleProvider";
import { BRAND_LOGO_SRC } from "@/lib/brand";
import { brand, nav, t } from "@/lib/copy";

const links = [
  { href: "/", key: "home" as const },
  { href: "/#about", key: "about" as const },
  { href: "/services", key: "services" as const },
  { href: "/#cuisines", key: "cuisinesNav" as const },
  { href: "/packages", key: "menus" as const },
  { href: "/gallery", key: "gallery" as const },
  { href: "/contact", key: "contact" as const },
];

function navItemActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);

  const menuLabel = open
    ? locale === "hi"
      ? "मेनू बंद करें"
      : "Close menu"
    : locale === "hi"
      ? "मेनू खोलें"
      : "Open menu";

  const mobileNavLabel =
    locale === "hi" ? "मोबाइल नेविगेशन" : "Mobile navigation";

  const headingFont =
    locale === "en"
      ? "font-[family-name:var(--font-display)]"
      : "font-[family-name:var(--font-dev)]";

  const logoAlt =
    locale === "hi"
      ? "शीला रमण केटर्स — लोगो"
      : "Sheela Raman Caters logo";

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkBase =
    "rounded-md border-b-2 px-2.5 py-2.5 text-base font-bold uppercase tracking-[0.1em] outline-offset-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold-bright)]";

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--gold-soft)] bg-[var(--surface)]/95 shadow-sm shadow-black/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 md:gap-4 md:py-3">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 rounded-md outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold-bright)]"
        >
          <span className="relative h-[4.2rem] w-[4.2rem] shrink-0 overflow-hidden rounded-full border border-[var(--gold-bright)]/35 bg-[var(--surface-muted)] shadow-sm md:h-[5.4rem] md:w-[5.4rem]">
            <Image
              src={BRAND_LOGO_SRC}
              alt={logoAlt}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 68px, 86px"
            />
          </span>
          <div className="min-w-0 leading-tight">
            <span
              className={`${headingFont} block truncate text-[1.35rem] font-semibold tracking-wide text-[var(--brand-deep)] md:text-[1.5rem]`}
            >
              {t(brand.name, locale)}
            </span>
            <span className="hidden text-[11px] font-medium text-[var(--muted)] sm:block">
              {locale === "hi" ? "शादी व समारोह केटरिंग" : "Wedding & event catering"}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {links.map(({ href, key }) => {
            const active = navItemActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`${linkBase} ${
                  active
                    ? "border-[var(--gold-bright)] text-[var(--brand-deep)]"
                    : "border-transparent text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--brand-deep)]"
                }`}
              >
                {t(nav[key], locale)}
              </Link>
            );
          })}
          <div className="ml-3 border-l border-[var(--gold-soft)] pl-3">
            <LangToggle />
          </div>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle />
          <button
            type="button"
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-md border border-[var(--ring)] bg-[var(--surface-muted)] text-[var(--brand-deep)] outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold-bright)]"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={menuLabel}
            onClick={() => setOpen((o) => !o)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M5 7h14M5 12h14M5 17h14" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="max-h-[min(70vh,24rem)] overflow-y-auto border-t border-[var(--gold-soft)] bg-[var(--surface)] px-4 pb-4 lg:hidden"
          aria-label={mobileNavLabel}
        >
          <div className="flex flex-col pt-2">
            {links.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className="min-h-[3.25rem] rounded-md px-3 py-3.5 text-base font-bold uppercase tracking-wide text-[var(--brand-deep)] hover:bg-[var(--gold-bright)]/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold-bright)]"
                onClick={() => setOpen(false)}
              >
                {t(nav[key], locale)}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
