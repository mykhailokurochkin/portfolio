"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AccentColor = "sky" | "emerald" | "violet" | "amber" | "cyan" | "zinc";

const ACCENT_GLOW: Record<AccentColor, string> = {
  sky: "rgba(56, 189, 248, 0.16)",
  emerald: "rgba(16, 185, 129, 0.16)",
  violet: "rgba(139, 92, 246, 0.18)",
  amber: "rgba(245, 158, 11, 0.15)",
  cyan: "rgba(34, 211, 238, 0.15)",
  zinc: "rgba(255, 255, 255, 0.09)",
};

const ACCENT_SHADOW: Record<AccentColor, string> = {
  sky: "0 24px 60px -28px rgba(56, 189, 248, 0.22), 0 12px 32px -16px rgba(0, 0, 0, 0.7)",
  emerald:
    "0 24px 60px -28px rgba(16, 185, 129, 0.20), 0 12px 32px -16px rgba(0, 0, 0, 0.7)",
  violet:
    "0 24px 60px -28px rgba(139, 92, 246, 0.24), 0 12px 32px -16px rgba(0, 0, 0, 0.7)",
  amber:
    "0 24px 60px -28px rgba(245, 158, 11, 0.18), 0 12px 32px -16px rgba(0, 0, 0, 0.7)",
  cyan: "0 24px 60px -28px rgba(34, 211, 238, 0.20), 0 12px 32px -16px rgba(0, 0, 0, 0.7)",
  zinc: "0 20px 50px -24px rgba(0, 0, 0, 0.75)",
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
    const ease = 0.085;

    s.currentRx += (s.targetRx - s.currentRx) * ease;
    s.currentRy += (s.targetRy - s.currentRy) * ease;
    s.currentGlowX += (s.targetGlowX - s.currentGlowX) * ease;
    s.currentGlowY += (s.targetGlowY - s.currentGlowY) * ease;
    s.currentOpacity += (s.targetOpacity - s.currentOpacity) * 0.1;

    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1100px) rotateX(${s.currentRx.toFixed(
        3
      )}deg) rotateY(${s.currentRy.toFixed(3)}deg)`;
    }

    if (glowRef.current) {
      glowRef.current.style.opacity = s.currentOpacity.toFixed(3);
      glowRef.current.style.background = `radial-gradient(460px circle at ${s.currentGlowX.toFixed(
        1
      )}% ${s.currentGlowY.toFixed(1)}%, ${ACCENT_GLOW[accent]}, transparent 64%)`;
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
          "perspective(1100px) rotateX(0deg) rotateY(0deg)";
      }
      if (glowRef.current) {
        glowRef.current.style.opacity = "0";
      }
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

    // Gentle, natural 3D tilt (±2.8deg max)
    state.current.targetRy = (px - 0.5) * 5.6;
    state.current.targetRx = (0.5 - py) * 5.6;
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
      className={`${floatClass} h-full will-change-transform`}
      style={{ animationDelay: `${floatDelay}s` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ boxShadow: ACCENT_SHADOW[accent] }}
        className={`group relative h-full overflow-hidden rounded-3xl border border-white/[0.09] bg-[#101118]/75 backdrop-blur-xl transition-[border-color] duration-500 ease-out hover:border-white/[0.18] will-change-transform ${className}`}
      >
        {/* Top specular glass highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />

        {/* Smooth lerped cursor spotlight */}
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0"
        />

        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  );
}
