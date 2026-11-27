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

  const state = useRef({
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
    rafId: 0,
    active: false,
  });

  useEffect(() => {
    const s = state.current;
    return () => {
      if (s.rafId) cancelAnimationFrame(s.rafId);
    };
  }, []);

  const tick = () => {
    const s = state.current;
    const ease = 0.065;

    s.currentRx += (s.targetRx - s.currentRx) * ease;
    s.currentRy += (s.targetRy - s.currentRy) * ease;
    s.currentGlowX += (s.targetGlowX - s.currentGlowX) * ease;
    s.currentGlowY += (s.targetGlowY - s.currentGlowY) * ease;
    s.currentOpacity += (s.targetOpacity - s.currentOpacity) * 0.1;

    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(${s.currentRx.toFixed(
        3
      )}deg) rotateY(${s.currentRy.toFixed(3)}deg) translateZ(0)`;
    }

    if (glowRef.current) {
      glowRef.current.style.opacity = s.currentOpacity.toFixed(3);
      glowRef.current.style.background = `radial-gradient(460px circle at ${s.currentGlowX.toFixed(
        1
      )}% ${s.currentGlowY.toFixed(1)}%, ${ACCENT_GLOW[accent]}, transparent 64%)`;
    }

    if (sheenRef.current) {
      const angle = 115 + (s.currentGlowX - 50) * 0.4;
      sheenRef.current.style.opacity = (s.currentOpacity * 0.5).toFixed(3);
      sheenRef.current.style.background = `linear-gradient(${angle.toFixed(
        1
      )}deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)`;
    }

    const settled =
      !s.active &&
      Math.abs(s.currentRx) < 0.01 &&
      Math.abs(s.currentRy) < 0.01 &&
      s.currentOpacity < 0.005;

    if (!settled) {
      s.rafId = requestAnimationFrame(tick);
    } else {
      s.rafId = 0;
      if (cardRef.current) {
        cardRef.current.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";
      }
      if (glowRef.current) glowRef.current.style.opacity = "0";
      if (sheenRef.current) sheenRef.current.style.opacity = "0";
    }
  };

  const ensureLoop = () => {
    if (!state.current.rafId) {
      state.current.rafId = requestAnimationFrame(tick);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    state.current.targetRy = (px - 0.5) * 6;
    state.current.targetRx = (0.5 - py) * 6;
    state.current.targetGlowX = px * 100;
    state.current.targetGlowY = py * 100;
    state.current.targetOpacity = 1;
    state.current.active = true;
    ensureLoop();
  };

  const handleMouseLeave = () => {
    state.current.targetRx = 0;
    state.current.targetRy = 0;
    state.current.targetOpacity = 0;
    state.current.active = false;
    ensureLoop();
  };

  const floatClass =
    floatVariant === 1
      ? "animate-float-1"
      : floatVariant === 2
        ? "animate-float-2"
        : floatVariant === 3
          ? "animate-float-3"
          : "animate-float-4";

  return (
    <div
      className={`${floatClass} relative h-full`}
      style={{
        animationDelay: `${floatDelay}s`,
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          boxShadow: ACCENT_SHADOW[accent],
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.10] bg-gradient-to-b from-[#131622]/95 to-[#0D0F17]/95 transition-[border-color] duration-500 ease-out hover:border-white/[0.20]"
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
    </div>
  );
}
