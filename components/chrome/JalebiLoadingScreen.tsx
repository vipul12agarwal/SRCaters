"use client";

import { useEffect, useState } from "react";

type Phase = "show" | "exit" | "gone";

const DISPLAY_MS = 2600;
const FADE_MS = 450;

function Bubble({ delayMs, leftPct }: { delayMs: number; leftPct: number }) {
  return (
    <span
      className="pointer-events-none absolute bottom-[32%] h-2 w-2 rounded-full bg-[rgba(255,230,180,0.55)] shadow-[0_0_6px_rgba(255,220,150,0.6)]"
      style={{
        left: `${leftPct}%`,
        animation: `jalebi-bubble-rise 2.4s ease-in-out ${delayMs}ms infinite`,
      }}
    />
  );
}

/** Stacked arcs suggesting a sizzling jalebi coil in hot oil */
function JalebiCoil({ className }: { className?: string }) {
  const rings = [0, 1, 2, 3, 4, 5];
  return (
    <div
      className={[
        "relative h-[5.5rem] w-[220px] sm:h-[6.5rem] sm:w-[260px]",
        "[animation:jalebi-coil-float_2.8s_ease-in-out_infinite]",
        className ?? "",
      ].join(" ")}
      aria-hidden
    >
      {rings.map((i) => (
        <div
          key={i}
          className="absolute left-1/2 top-[58%] rounded-full border-[3px] border-b-transparent border-l-[#e8952a] border-r-transparent border-t-[#f4b042] opacity-[0.92]"
          style={{
            width: 18 + i * 16,
            height: 18 + i * 16,
            marginLeft: -(9 + i * 8),
            marginTop: -(9 + i * 8),
            transform: `rotate(${-12 + i * 32}deg)`,
            boxShadow:
              i > 2 ? "inset 0 0 8px rgba(180,80,20,0.25), 0 1px 0 rgba(255,255,255,0.2)" : undefined,
          }}
        />
      ))}
    </div>
  );
}

/** First visit to the app shell: kadhai + jalebi imagery, then fade out. */
export function JalebiLoadingScreen() {
  const [phase, setPhase] = useState<Phase>("show");

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("gone");
      return;
    }

    const tExit = window.setTimeout(() => setPhase("exit"), DISPLAY_MS);
    const tGone = window.setTimeout(() => setPhase("gone"), DISPLAY_MS + FADE_MS);

    return () => {
      window.clearTimeout(tExit);
      window.clearTimeout(tGone);
    };
  }, []);

  if (phase === "gone") return null;

  const exiting = phase === "exit";

  return (
    <div
      className={[
        "jalebi-loading-root fixed inset-0 z-[200] flex flex-col items-center justify-center px-6",
        "bg-[radial-gradient(ellipse_120%_80%_at_50%_20%,#4a1810_0%,#2a0c08_45%,#160604_100%)]",
        "transition-opacity duration-[450ms] ease-out",
        exiting ? "pointer-events-none opacity-0" : "opacity-100",
      ].join(" ")}
      role="status"
      aria-live="polite"
      aria-busy={!exiting}
      aria-label="Loading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_55%,rgba(180,90,30,0.12),transparent_60%)]" />

      <div className="relative z-[1] flex w-full max-w-md flex-col items-center">
        <div className="relative w-full max-w-[320px]">
          {/* Kadhai rim */}
          <div
            className="relative mx-auto aspect-[1.45/1] w-[88%] rounded-[50%] border-[6px] border-[#5c3d1e] shadow-[inset_0_14px_40px_rgba(0,0,0,0.55),0_8px_24px_rgba(0,0,0,0.45)]"
            style={{
              background: "linear-gradient(175deg, #6b4420 0%, #3d2814 55%, #2a1a0e 100%)",
            }}
            aria-hidden
          >
            {/* Hot oil surface */}
            <div className="absolute inset-[10%] rounded-[50%] bg-[#3d2412] shadow-[inset_0_8px_28px_rgba(0,0,0,0.7)]">
              <div
                className="absolute inset-[4%] rounded-[50%]"
                style={{
                  background:
                    "radial-gradient(ellipse 85% 65% at 50% 42%, #c97812 0%, #a45c0c 35%, #7a4208 65%, #3d2206 100%)",
                  animation: "jalebi-oil-shimmer 2.2s ease-in-out infinite",
                }}
              />
              <div
                className="pointer-events-none absolute inset-[6%] rounded-[50%] opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 48% 38%, rgba(255,245,200,0.35) 0%, transparent 70%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center pt-2">
                <JalebiCoil />
              </div>
              <Bubble delayMs={0} leftPct={28} />
              <Bubble delayMs={400} leftPct={44} />
              <Bubble delayMs={800} leftPct={58} />
              <Bubble delayMs={200} leftPct={72} />
            </div>
          </div>
          {/* Rim highlight */}
          <div
            className="pointer-events-none absolute -inset-1 -z-10 rounded-[50%] bg-[radial-gradient(ellipse_at_50%_0%,rgba(184,148,72,0.25),transparent_55%)]"
            aria-hidden
          />
        </div>

        <div className="mt-10 h-1 w-48 overflow-hidden rounded-full bg-[rgba(0,0,0,0.35)] shadow-inner">
          <div className="h-full w-[45%] rounded-full bg-[linear-gradient(90deg,var(--gold),var(--gold-bright),var(--gold))] opacity-90 shadow-[0_0_12px_rgba(184,148,72,0.5)] [animation:jalebi-bar-scan_1.25s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
