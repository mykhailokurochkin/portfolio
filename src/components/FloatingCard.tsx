"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AccentColor = "sky" | "emerald" | "violet" | "amber" | "cyan" | "zinc";

const ACCENT_GLOW: Record<AccentColor, string> = {
  sky: "rgba(56, 189, 248, 0.20)",
  emerald: "rgba(16, 185, 129, 0.20)",
  violet: "rgba(139, 92, 246, 0.22)",
  amber: "rgba(245, 158, 11, 0.18)",
  cyan: "rgba(34, 211, 238, 0.20)",
  zinc: "rgba(255, 255, 255, 0.11)",
};

const ACCENT_SHADOW_COLOR: Record<AccentColor, string> = {
  sky: "rgba(56, 189, 248, 0.28)",
  emerald: "rgba(16, 185, 129, 0.26)",
  violet: "rgba(139, 92, 246, 0.30)",
  amber: "rgba(245, 158, 11, 0.24)",
  cyan: "rgba(34, 211, 238, 0.26)",
  zinc: "rgba(0, 0, 0, 0.65)",
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
    const ease = 0.08;

    s.currentRx += (s.targetRx - s.currentRx) * ease;
    s.currentRy += (s.targetRy - s.currentRy) * ease;
    s.currentGlowX += (s.targetGlowX - s.currentGlowX) * ease;
    s.currentGlowY += (s.targetGlowY - s.currentGlowY) * ease;
    s.currentOpacity += (s.targetOpacity - s.currentOpacity) * 0.1;

    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(${s.currentRx.toFixed(
        3
      )}deg) rotateY(${s.currentRy.toFixed(3)}deg)`;
    }

    if (glowRef.current) {
      glowRef.current.style.opacity = s.currentOpacity.toFixed(3);
      glowRef.current.style.background = `radial-gradient(480px circle at ${s.currentGlowX.toFixed(
        1
      )}% ${s.currentGlowY.toFixed(1)}%, ${ACCENT_GLOW[accent]}, transparent 64%)`;
    }

    if (sheenRef.current) {
      const angle = 115 + (s.currentGlowX - 50) * 0.45;
      sheenRef.current.style.opacity = (s.currentOpacity * 0.55).toFixed(3);
      sheenRef.current.style.background = `linear-gradient(${angle.toFixed(
        1
      )}deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)`;
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
          "perspective(1000px) rotateX(0deg) rotateY(0deg)";
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

    // Expressive yet silky 3D perspective tilt (±5.5deg max)
    state.current.targetRy = (px - 0.5) * 11;
    state.current.targetRx = (0.5 - py) * 11;
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

  const shadowClass =
    floatVariant === 1
      ? "animate-shadow-1"
      : floatVariant === 2
        ? "animate-shadow-2"
        : floatVariant === 3
          ? "animate-shadow-3"
          : "animate-shadow-4";

  return (
    <div className="relative h-full">
      {/* Ground levitation shadow that breathes opposite to the floating card */}
      <div
        aria-hidden="true"
        style={{
          animationDelay: `${floatDelay}s`,
          background: `radial-gradient(ellipse at center, ${ACCENT_SHADOW_COLOR[accent]} 0%, rgba(0,0,0,0.55) 45%, transparent 75%)`,
        }}
        className={`${shadowClass} pointer-events-none absolute -bottom-5 left-[8%] right-[8%] h-10 rounded-full blur-2xl`}
      />

      <div
        className={`${floatClass} relative h-full will-change-transform`}
        style={{ animationDelay: `${floatDelay}s` }}
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.10] bg-[#10121A]/75 shadow-[0_28px_60px_-24px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-[border-color] duration-500 ease-out hover:border-white/[0.20] will-change-transform"
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

          {/* Apply caller layout classes directly to inner content wrapper */}
          <div className={`relative z-10 h-full ${className}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}
