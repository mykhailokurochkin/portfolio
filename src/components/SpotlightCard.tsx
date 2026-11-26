"use client";

import { useRef, useState, type ReactNode } from "react";

type AccentColor = "sky" | "emerald" | "violet" | "amber" | "zinc";

const ACCENT_RGBA: Record<AccentColor, string> = {
  sky: "rgba(56, 189, 248, 0.14)",
  emerald: "rgba(16, 185, 129, 0.14)",
  violet: "rgba(139, 92, 246, 0.16)",
  amber: "rgba(245, 158, 11, 0.14)",
  zinc: "rgba(255, 255, 255, 0.08)",
};

interface SpotlightCardProps {
  children: ReactNode;
  accent?: AccentColor;
  className?: string;
}

export function SpotlightCard({
  children,
  accent = "sky",
  className = "",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111116]/90 backdrop-blur-sm transition-colors duration-300 hover:border-white/[0.15] ${className}`}
    >
      {/* Mouse-tracking spotlight glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, ${ACCENT_RGBA[accent]}, transparent 65%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
