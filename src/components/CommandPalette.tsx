"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Hash,
  Linkedin,
  Mail,
  Search,
  X,
} from "lucide-react";
import {
  ARCHIVE_PROJECTS,
  FEATURED_PROJECTS,
  SITE_CONFIG,
} from "@/data/portfolio";

interface CommandItem {
  id: string;
  group: "Navigation" | "Projects" | "Contact";
  label: string;
  hint?: string;
  icon: "section" | "link" | "copy" | "github" | "linkedin" | "mail";
  action: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const items: CommandItem[] = useMemo(() => {
    const jumpTo = (hash: string) => {
      onClose();
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    };

    const openUrl = (url: string) => {
      onClose();
      window.open(url, "_blank", "noopener,noreferrer");
    };

    const navItems: CommandItem[] = [
      {
        id: "nav-work",
        group: "Navigation",
        label: "Selected Work",
        hint: "Section",
        icon: "section",
        action: () => jumpTo("#work"),
      },
      {
        id: "nav-experience",
        group: "Navigation",
        label: "Experience",
        hint: "Section",
        icon: "section",
        action: () => jumpTo("#experience"),
      },
      {
        id: "nav-services",
        group: "Navigation",
        label: "Freelance Services",
        hint: "Section",
        icon: "section",
        action: () => jumpTo("#services"),
      },
      {
        id: "nav-archive",
        group: "Navigation",
        label: "Project Archive",
        hint: "Section",
        icon: "section",
        action: () => jumpTo("#archive"),
      },
      {
        id: "nav-stack",
        group: "Navigation",
        label: "Tech Stack",
        hint: "Section",
        icon: "section",
        action: () => jumpTo("#stack"),
      },
      {
        id: "nav-contact",
        group: "Navigation",
        label: "Contact",
        hint: "Section",
        icon: "section",
        action: () => jumpTo("#contact"),
      },
    ];

    const projectItems: CommandItem[] = [
      ...FEATURED_PROJECTS.map((p) => ({
        id: `proj-${p.id}`,
        group: "Projects" as const,
        label: p.title,
        hint: p.liveUrl ? "Live Demo" : "GitHub",
        icon: "link" as const,
        action: () => openUrl(p.liveUrl ?? p.githubUrl ?? SITE_CONFIG.github),
      })),
      ...ARCHIVE_PROJECTS.map((p) => ({
        id: `arch-${p.title}`,
        group: "Projects" as const,
        label: p.title,
        hint: p.liveUrl ? "Live Demo" : "GitHub",
        icon: "link" as const,
        action: () => openUrl(p.liveUrl ?? p.githubUrl),
      })),
    ];

    const contactItems: CommandItem[] = [
      {
        id: "contact-copy",
        group: "Contact",
        label: `Copy Email (${SITE_CONFIG.email})`,
        hint: "Clipboard",
        icon: "copy",
        action: async () => {
          try {
            await navigator.clipboard.writeText(SITE_CONFIG.email);
            setCopiedEmail(true);
            setTimeout(() => {
              setCopiedEmail(false);
              onClose();
            }, 900);
          } catch {
            window.location.href = `mailto:${SITE_CONFIG.email}`;
            onClose();
          }
        },
      },
      {
        id: "contact-email",
        group: "Contact",
        label: "Send Email",
        hint: SITE_CONFIG.email,
        icon: "mail",
        action: () => {
          onClose();
          window.location.href = `mailto:${SITE_CONFIG.email}`;
        },
      },
      {
        id: "contact-github",
        group: "Contact",
        label: "Open GitHub",
        hint: "github.com/mykhailokurochkin",
        icon: "github",
        action: () => openUrl(SITE_CONFIG.github),
      },
      {
        id: "contact-linkedin",
        group: "Contact",
        label: "Open LinkedIn",
        hint: "linkedin.com/in/mykhailo-kurochkin",
        icon: "linkedin",
        action: () => openUrl(SITE_CONFIG.linkedin),
      },
    ];

    return [...navItems, ...projectItems, ...contactItems];
  }, [onClose]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q) ||
        item.hint?.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filtered.length > 0 ? (prev + 1) % filtered.length : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filtered.length > 0
            ? (prev - 1 + filtered.length) % filtered.length
            : 0
        );
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        filtered[selectedIndex].action();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, selectedIndex, onClose]);

  if (!open) return null;

  const renderIcon = (icon: CommandItem["icon"]) => {
    switch (icon) {
      case "section":
        return <Hash className="h-3.5 w-3.5 text-zinc-500" />;
      case "copy":
        return copiedEmail ? (
          <Check className="h-3.5 w-3.5 text-emerald-400" />
        ) : (
          <Copy className="h-3.5 w-3.5 text-zinc-500" />
        );
      case "github":
        return <Github className="h-3.5 w-3.5 text-zinc-500" />;
      case "linkedin":
        return <Linkedin className="h-3.5 w-3.5 text-zinc-500" />;
      case "mail":
        return <Mail className="h-3.5 w-3.5 text-zinc-500" />;
      default:
        return <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-[14vh] backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-xl border border-zinc-800 bg-[#111114] shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-zinc-800/80 px-4 py-3">
          <Search className="h-4 w-4 text-zinc-500" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to section, open a project, or copy email..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close command palette"
            className="rounded p-1 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-200 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-zinc-500">
              No matching commands.
            </p>
          ) : (
            <ul className="space-y-0.5">
              {filtered.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setSelectedIndex(idx)}
                      onClick={item.action}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-zinc-800/90 text-white"
                          : "text-zinc-300 hover:bg-zinc-800/50"
                      }`}
                    >
                      <span className="flex items-center gap-2.5 truncate">
                        {renderIcon(item.icon)}
                        <span className="truncate">{item.label}</span>
                      </span>
                      {item.hint && (
                        <span className="ml-3 shrink-0 font-mono text-[11px] text-zinc-500">
                          {item.hint}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-zinc-800/80 px-4 py-2 font-mono text-[11px] text-zinc-500">
          <span>↑↓ navigate · ↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
