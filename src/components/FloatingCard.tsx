"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AccentColor = "sky" | "emerald" | "violet" | "amber" | "cyan" | "zinc";

const ACCENT_GLOW: Record<AccentColor, string> = {
  sky: "rgba(56, 189, 248, 0.18)",
  emerald: "rgba(16, 185, 129, 0.18)",
  violet: "rgba(139, 92, 246, 0.20)",
  amber: "rgba(245, 158, 11, 0.16)",
  cyan: "rgba(34, 211, 238, 0.18)",
  zinc: "rgba(255, 255, 255, 0.09)",
};

const ACCENT_SHADOW: Record<AccentColor, string> = {
  sky: "0 26px 52px -24px rgba(56, 189, 248, 0.22), 0 18px 36px -18px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.11)",
  emerald:
    "0 26px 52px -24px rgba(16, 185, 129, 0.20), 0 18px 36px -18px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.11)",
  violet:
    "0 26px 52px -24px rgba(139, 92, 246, 0.24), 0 18px 36px -18px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.11)",
  amber:
    "0 26px 52px -24px rgba(245, 158, 11, 0.18), 0 18px 36px -18px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.11)",
  cyan: "0 26px 52px -24px rgba(34, 211, 238, 0.20), 0 18px 36px -18px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.11)",
  zinc: "0 22px 44px -20px rgba(0, 0, 0, 0.82), inset 0 1px 0 0 rgba(255, 255, 255, 0.10)",
};

// Deterministic pseudo-random generator so each card gets unique organic frequencies & phases
function seeded(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453123;
  return x - Math.floor(x);
}

interface FloatingCardProps {
  children: ReactNode;
  accent?: AccentColor;
  floatVariant?: 1 | 2 | 3 | 4;
  floatDelay?: number;
  className?: string;
}

export function FloatingCard({
  children,
  accent = "sky",
  floatVariant = 1,
  floatDelay = 0,
  className = "",
}: FloatingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);

  const hoverState = useRef({
    targetRx: 0,
    targetRy: 0,
    currentRx: 0,
    currentRy: 0,
    targetGlowX: 50,
    targetGlowY: 50,
    currentGlowX: 50,
    currentGlowY: 50,
    targetOpacity: 0,
    currentOpacity: 0,
  });

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Build a unique seed per card from variant + delay + DOM position
    const rect = el.getBoundingClientRect();
    const baseSeed =
      floatVariant * 19.37 +
      Math.abs(floatDelay) * 7.13 +
      (rect.left % 97) * 0.17 +
      (rect.top % 89) * 0.23;

    // Unique irrational-ratio frequencies for smooth, non-repeating 4-way zero-gravity drift
    const fx1 = 0.42 + seeded(baseSeed + 1) * 0.24;
    const fx2 = 0.21 + seeded(baseSeed + 2) * 0.16;
    const fy1 = 0.48 + seeded(baseSeed + 3) * 0.26;
    const fy2 = 0.24 + seeded(baseSeed + 4) * 0.17;

    const px1 = seeded(baseSeed + 5) * Math.PI * 2;
    const px2 = seeded(baseSeed + 6) * Math.PI * 2;
    const py1 = seeded(baseSeed + 7) * Math.PI * 2;
    const py2 = seeded(baseSeed + 8) * Math.PI * 2;

    // Smooth 4-direction amplitudes (up, down, left, right)
    const ampX = 5.5 + seeded(baseSeed + 9) * 3.5; // ~5.5–9px left/right
    const ampY = 6.5 + seeded(baseSeed + 10) * 3.5; // ~6.5–10px up/down

    let isInView = true;
    let rafId = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
      },
      { rootMargin: "120px" }
    );
    observer.observe(el);

    const startTime = performance.now();

    const tick = (now: number) => {
      if (isInView) {
        const s = hoverState.current;
        const ease = 0.065;

        s.currentRx += (s.targetRx - s.currentRx) * ease;
        s.currentRy += (s.targetRy - s.currentRy) * ease;
        s.currentGlowX += (s.targetGlowX - s.currentGlowX) * ease;
        s.currentGlowY += (s.targetGlowY - s.currentGlowY) * ease;
        s.currentOpacity += (s.targetOpacity - s.currentOpacity) * 0.09;

        let dx = 0;
        let dy = 0;

        if (!prefersReducedMotion) {
          const t = (now - startTime) * 0.001;
          dx =
            Math.sin(t * fx1 + px1) * ampX * 0.72 +
            Math.cos(t * fx2 + px2) * ampX * 0.28;
          dy =
            Math.cos(t * fy1 + py1) * ampY * 0.72 +
            Math.sin(t * fy2 + py2) * ampY * 0.28;
        }

        el.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(
          2
        )}px, 0) perspective(1000px) rotateX(${s.currentRx.toFixed(
          3
        )}deg) rotateY(${s.currentRy.toFixed(3)}deg)`;

        if (glowRef.current) {
          if (s.currentOpacity > 0.004) {
            glowRef.current.style.opacity = s.currentOpacity.toFixed(3);
            glowRef.current.style.background = `radial-gradient(460px circle at ${s.currentGlowX.toFixed(
              1
            )}% ${s.currentGlowY.toFixed(1)}%, ${ACCENT_GLOW[accent]}, transparent 64%)`;
          } else if (glowRef.current.style.opacity !== "0") {
            glowRef.current.style.opacity = "0";
          }
        }

        if (sheenRef.current) {
          if (s.currentOpacity > 0.004) {
            const angle = 115 + (s.currentGlowX - 50) * 0.4;
            sheenRef.current.style.opacity = (s.currentOpacity * 0.5).toFixed(3);
            sheenRef.current.style.background = `linear-gradient(${angle.toFixed(
              1
            )}deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)`;
          } else if (sheenRef.current.style.opacity !== "0") {
            sheenRef.current.style.opacity = "0";
          }
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [accent, floatVariant, floatDelay]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    hoverState.current.targetRy = (px - 0.5) * 6;
    hoverState.current.targetRx = (0.5 - py) * 6;
    hoverState.current.targetGlowX = px * 100;
    hoverState.current.targetGlowY = py * 100;
    hoverState.current.targetOpacity = 1;
  };

  const handleMouseLeave = () => {
    hoverState.current.targetRx = 0;
    hoverState.current.targetRy = 0;
    hoverState.current.targetOpacity = 0;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        boxShadow: ACCENT_SHADOW[accent],
        transform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.10] bg-gradient-to-b from-[#131622]/95 to-[#0D0F17]/95 transition-[border-color] duration-500 ease-out hover:border-white/[0.20] will-change-transform"
    >
      {/* Top specular glass highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      {/* Smooth lerped cursor spotlight */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0"
      />

      {/* Dynamic glass specular sheen */}
      <div
        ref={sheenRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0"
      />

      <div className={`relative z-10 h-full ${className}`}>{children}</div>
    </div>
  );
}
