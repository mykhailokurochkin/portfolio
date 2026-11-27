"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export function CopyEmailLink() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="relative inline-grid items-center text-sm text-zinc-300 transition-colors duration-300 hover:text-zinc-100 cursor-pointer"
      title="Click to copy email"
      aria-live="polite"
    >
      <span
        className={`col-start-1 row-start-1 underline decoration-zinc-700 underline-offset-4 transition-all duration-300 ease-out hover:decoration-zinc-400 ${
          copied
            ? "-translate-y-1 opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100"
        }`}
      >
        {PROFILE.email}
      </span>

      <span
        aria-hidden={!copied}
        className={`col-start-1 row-start-1 inline-flex items-center gap-1.5 text-emerald-400 transition-all duration-300 ease-out ${
          copied
            ? "translate-y-0 opacity-100"
            : "translate-y-1 opacity-0 pointer-events-none"
        }`}
      >
        <Check className="h-3.5 w-3.5 shrink-0" />
        <span>Copied email</span>
      </span>
    </button>
  );
}
