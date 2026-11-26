import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CopyEmailLink } from "@/components/CopyEmailLink";
import {
  EXPERIENCE,
  FEATURED_PROJECTS,
  OTHER_PROJECTS,
  PROFILE,
  STACK_ROWS,
} from "@/data/portfolio";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[660px] px-6 py-16 sm:py-24">
      {/* HEADER / INTRO */}
      <header>
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-white/15">
            <Image
              src="/avatar.jpg"
              alt={PROFILE.name}
              fill
              priority
              sizes="64px"
              className="object-cover object-center"
            />
          </div>

          <div>
            <h1 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
              {PROFILE.name}
            </h1>
            <p className="text-sm text-zinc-400">{PROFILE.role}</p>
            <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{PROFILE.status}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-zinc-300">
          {PROFILE.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {/* Clean link row — zero button clutter */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <CopyEmailLink />
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-0.5 text-zinc-400 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-100 hover:decoration-zinc-400"
          >
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-0.5 text-zinc-400 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-100 hover:decoration-zinc-400"
          >
            LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* SELECTED WORK */}
      <section className="mt-16 border-t border-zinc-800/80 pt-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
          Selected Work
        </h2>

        <div className="mt-6 space-y-8">
          {FEATURED_PROJECTS.map((project) => (
            <article key={project.title} className="group">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[15px] font-medium text-zinc-100">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3.5 text-xs">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-0.5 text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-white hover:decoration-zinc-400"
                    >
                      Live
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-0.5 text-zinc-400 underline decoration-zinc-800 underline-offset-4 transition-colors hover:text-zinc-100 hover:decoration-zinc-500"
                    >
                      Code
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                  {project.privateRepo && (
                    <span className="font-mono text-[11px] text-zinc-500">
                      Private repo
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <p className="mt-2.5 font-mono text-xs text-zinc-500">
                {project.stack.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mt-16 border-t border-zinc-800/80 pt-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
          Experience
        </h2>

        <div className="mt-6 space-y-7">
          {EXPERIENCE.map((item) => (
            <div key={`${item.company}-${item.period}`}>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-[15px] font-medium text-zinc-100">
                  {item.company}{" "}
                  <span className="font-normal text-zinc-400">
                    · {item.role}
                  </span>
                </h3>
                <span className="font-mono text-xs text-zinc-500">
                  {item.period}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section className="mt-16 border-t border-zinc-800/80 pt-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
          More Projects
        </h2>

        <ul className="mt-5 divide-y divide-zinc-800/60">
          {OTHER_PROJECTS.map((project) => (
            <li
              key={project.title}
              className="flex flex-col gap-2 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div className="min-w-0">
                <span className="text-sm font-medium text-zinc-200">
                  {project.title}
                </span>
                <span className="mx-2 text-zinc-600">—</span>
                <span className="text-sm text-zinc-400">
                  {project.description}
                </span>
              </div>

              <div className="flex shrink-0 items-center gap-3 text-xs">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-0.5 text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-white hover:decoration-zinc-400"
                  >
                    Live
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-0.5 text-zinc-500 underline decoration-zinc-800 underline-offset-4 transition-colors hover:text-zinc-200 hover:decoration-zinc-500"
                  >
                    Code
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* STACK */}
      <section className="mt-16 border-t border-zinc-800/80 pt-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
          Stack
        </h2>

        <dl className="mt-5 space-y-3 text-sm">
          {STACK_ROWS.map((row) => (
            <div
              key={row.category}
              className="grid grid-cols-1 gap-1 sm:grid-cols-[110px_1fr] sm:gap-4"
            >
              <dt className="font-mono text-xs text-zinc-500 sm:pt-0.5">
                {row.category}
              </dt>
              <dd className="text-zinc-300">{row.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 flex flex-col gap-2 border-t border-zinc-800/80 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {PROFILE.name} · {PROFILE.location}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="transition-colors hover:text-zinc-200"
          >
            Email
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-zinc-200"
          >
            GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-zinc-200"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
