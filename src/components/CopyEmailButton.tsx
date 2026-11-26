"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { SITE_CONFIG } from "@/data/portfolio";

interface CopyEmailButtonProps {
  variant?: "default" | "subtle";
  label?: string;
  className?: string;
}

export function CopyEmailButton({
  variant = "default",
  label = "Copy Email",
  className = "",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${SITE_CONFIG.email}`;
    }
  };

  const baseStyles =
    variant === "default"
      ? "inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800/90 hover:text-white cursor-pointer"
      : "inline-flex items-center gap-1.5 rounded-md border border-zinc-800/80 bg-zinc-900/50 px-2.5 py-1 text-xs font-mono text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200 cursor-pointer";

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`${baseStyles} ${className}`}
      aria-label={`Copy ${SITE_CONFIG.email}`}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-emerald-400">Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5 text-zinc-400" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
