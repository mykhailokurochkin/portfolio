"use client";

import { useEffect, useState } from "react";
import { Command, Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/portfolio";
import { CommandPalette } from "./CommandPalette";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#archive", label: "Archive" },
];

export function Navbar() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-[#09090B]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          <a
            href="#"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-zinc-100 transition-colors hover:text-white"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-700/80 bg-zinc-900 font-mono text-xs font-semibold text-zinc-100">
              {SITE_CONFIG.shortName}
            </span>
            <span className="hidden sm:inline">{SITE_CONFIG.name}</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              aria-label="Open command palette"
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/70 px-2.5 py-1.5 font-mono text-xs text-zinc-400 transition-colors hover:border-zinc-700 hover:bg-zinc-800/80 hover:text-zinc-200 cursor-pointer"
            >
              <Command className="h-3 w-3" />
              <span>K</span>
            </button>

            <a
              href="#contact"
              className="hidden rounded-lg bg-zinc-100 px-3.5 py-1.5 text-xs font-medium text-zinc-950 transition-colors hover:bg-white sm:inline-flex"
            >
              Contact
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/70 p-2 text-zinc-400 transition-colors hover:text-zinc-100 md:hidden cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-zinc-800/80 bg-[#09090B] px-5 py-4 md:hidden">
            <nav className="flex flex-col gap-3" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-1 inline-flex w-fit rounded-lg bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-950"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
      />
    </>
  );
}
