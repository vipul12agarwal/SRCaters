"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { HERO_MAIN_EVENT_CLIPS } from "@/lib/hero-clips";

const FADE_MS = 520;

type HeroClipRotatorProps = {
  posterSrc: string;
  alt: string;
};

export function HeroClipRotator({ posterSrc, alt }: HeroClipRotatorProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [clipIndex, setClipIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const advance = useCallback(() => {
    setFadeIn(false);
    window.setTimeout(() => {
      setClipIndex((i) => (i + 1) % HERO_MAIN_EVENT_CLIPS.length);
      setFadeIn(true);
    }, FADE_MS);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    if (!fadeIn) return;
    const v = videoRef.current;
    if (!v) return;
    v.load();
    const p = v.play();
    void p?.catch(() => {});
  }, [clipIndex, fadeIn, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const v = videoRef.current;
    if (!v) return;
    const onEnded = () => advance();
    v.addEventListener("ended", onEnded);
    return () => v.removeEventListener("ended", onEnded);
  }, [advance, reducedMotion]);

  if (reducedMotion) {
    return (
      <Image src={posterSrc} alt={alt} fill priority className="object-cover" sizes="100vw" />
    );
  }

  return (
    <>
      <div
        className={[
          "absolute inset-0 transition-opacity duration-500 ease-in-out motion-reduce:transition-none",
          fadeIn ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_MAIN_EVENT_CLIPS[clipIndex]}
          poster={posterSrc}
          muted
          playsInline
          preload="auto"
          aria-label={alt}
        />
      </div>
      {/* Dark shim over moving video for depth + text contrast */}
      <div
        className="pointer-events-none absolute inset-0 bg-black/[0.252]"
        aria-hidden
      />
    </>
  );
}
