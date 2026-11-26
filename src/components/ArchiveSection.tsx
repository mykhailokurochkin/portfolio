"use client";

import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { ARCHIVE_PROJECTS, type ProjectCategory } from "@/data/portfolio";

const FILTERS: Array<"All" | ProjectCategory> = [
  "All",
  "Full-Stack",
  "Frontend",
  "Backend",
];

export function ArchiveSection() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>(
    "All"
  );

  const filtered =
    activeFilter === "All"
      ? ARCHIVE_PROJECTS
      : ARCHIVE_PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section id="archive" className="scroll-mt-24 py-20 sm:py-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Archive
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
            More Deployed &amp; Open-Source Work
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
            Smaller production demos, full-stack apps, and backend services
            deployed on Vercel and published on GitHub.
          </p>
        </div>

        {/* Filter pills */}
        <div
          className="inline-flex flex-wrap gap-1.5 rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-1"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {FILTERS.map((filter) => {
            const active = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-md px-3 py-1.5 font-mono text-xs transition-colors cursor-pointer ${
                  active
                    ? "bg-zinc-800 text-zinc-100"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Table / rows */}
      <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800/80 bg-[#111114]/70">
        <div className="divide-y divide-zinc-800/70">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col gap-4 px-5 py-4 transition-colors hover:bg-zinc-900/60 sm:flex-row sm:items-center sm:justify-between sm:px-6"
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs text-zinc-500">
                    {project.year}
                  </span>
                  <h3 className="text-sm font-semibold text-zinc-100 transition-colors group-hover:text-white sm:text-base">
                    {project.title}
                  </h3>
                  <span className="rounded border border-zinc-800 bg-zinc-900/90 px-2 py-0.5 font-mono text-[10px] text-zinc-400">
                    {project.category}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-zinc-500"
                    >
                      {tech}
                      {tech !== project.stack[project.stack.length - 1] && (
                        <span className="ml-1.5 text-zinc-700">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
                  >
                    Live
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800/80 bg-transparent px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200"
                >
                  <Github className="h-3.5 w-3.5" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
