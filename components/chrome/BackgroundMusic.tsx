"use client";

import { useCallback, useEffect, useRef } from "react";

const SRC = "/audio/background.mp3";
const VOLUME = 0.01;
const MAX_PLAY_SECONDS = 60;

/**
 * Background music only — no UI. Starts after first user gesture (browser policy) or mount attempt.
 */
export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const applyVolume = useCallback(() => {
    const el = audioRef.current;
    if (el) el.volume = VOLUME;
  }, []);

  const play = useCallback(async () => {
    const el = audioRef.current;
    if (!el) return;
    applyVolume();
    try {
      await el.play();
    } catch {
      /* autoplay blocked until gesture */
    }
  }, [applyVolume]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onTimeUpdate = () => {
      if (el.currentTime >= MAX_PLAY_SECONDS) {
        el.pause();
        el.currentTime = 0;
      }
    };

    const onEnded = () => {
      el.currentTime = 0;
    };

    el.addEventListener("timeupdate", onTimeUpdate);
    el.addEventListener("ended", onEnded);
    return () => {
      el.removeEventListener("timeupdate", onTimeUpdate);
      el.removeEventListener("ended", onEnded);
    };
  }, []);

  useEffect(() => {
    applyVolume();

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    queueMicrotask(() => {
      void play();
    });

    const onFirstPointer = () => {
      queueMicrotask(() => {
        void play();
      });
      document.removeEventListener("pointerdown", onFirstPointer);
    };
    document.addEventListener("pointerdown", onFirstPointer, { passive: true });

    return () => document.removeEventListener("pointerdown", onFirstPointer);
  }, [applyVolume, play]);

  return <audio ref={audioRef} src={SRC} preload="metadata" playsInline />;
}
