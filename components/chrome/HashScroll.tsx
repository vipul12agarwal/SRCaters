"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash() {
  if (typeof window === "undefined") return;
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return;
  const id = decodeURIComponent(raw);
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Next.js client navigations to `/#section` often omit scrolling. Also handles
 * hash-only changes while staying on the same path.
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToHash();
    const t = window.setTimeout(scrollToHash, 0);
    const t2 = window.setTimeout(scrollToHash, 120);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => scrollToHash();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
