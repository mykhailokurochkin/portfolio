import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Lock,
  Mail,
  MapPin,
} from "lucide-react";
import { ArchiveSection } from "@/components/ArchiveSection";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { Navbar } from "@/components/Navbar";
import {
  AiMathTutorVisual,
  DotaPilotVisual,
  LiftoryVisual,
} from "@/components/ProjectVisuals";
import {
  EXPERIENCE,
  FEATURED_PROJECTS,
  SERVICES,
  SITE_CONFIG,
  STACK_GROUPS,
} from "@/data/portfolio";

export default function HomePage() {
  const leadProject = FEATURED_PROJECTS[0];
  const secondaryProjects = FEATURED_PROJECTS.slice(1);

  return (
    <div className="relative min-h-screen bg-[#09090B] text-zinc-100">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-zinc-800/70">
          <div
            aria-hidden="true"
            className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[540px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[110px]"
          />

          <div className="relative mx-auto max-w-5xl px-5 pt-20 pb-20 sm:px-8 sm:pt-28 sm:pb-24">
            {/* Availability & Location */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.07] px-3 py-1 font-mono text-xs text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {SITE_CONFIG.availability}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500">
                <MapPin className="h-3.5 w-3.5" />
                {SITE_CONFIG.location}
              </span>
            </div>

            {/* Name & Headline */}
            <div className="mt-8 max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-400">
                {SITE_CONFIG.name} · {SITE_CONFIG.role}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                {SITE_CONFIG.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                {SITE_CONFIG.subheadline}
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
              >
                View Selected Work
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800/90 hover:text-white"
              >
                <Mail className="h-4 w-4 text-zinc-400" />
                Get in Touch
              </a>

              <CopyEmailButton />

              <div className="ml-0 flex items-center gap-2 sm:ml-2">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800/80 bg-zinc-900/40 text-zinc-400 transition-colors hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800/80 bg-zinc-900/40 text-zinc-400 transition-colors hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Signal strip */}
            <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-zinc-800/70 pt-6">
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                Core focus
              </span>
              {SITE_CONFIG.signals.map((signal) => (
                <span
                  key={signal}
                  className="font-mono text-xs text-zinc-300"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* MAIN CONTENT CONTAINER */}
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          {/* SELECTED WORK */}
          <section id="work" className="scroll-mt-24 py-20 sm:py-24">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Selected Work
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                  Featured Engineering Projects
                </h2>
              </div>
              <a
                href="#archive"
                className="inline-flex items-center gap-1 font-mono text-xs text-zinc-400 transition-colors hover:text-zinc-100"
              >
                All deployed projects
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Lead Wide Card: AI Math Tutor */}
            <article className="mt-10 overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#111114] p-6 transition-colors hover:border-zinc-700/80 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-zinc-500">
                    <span className="text-sky-400">{leadProject.category}</span>
                    <span>·</span>
                    <span>{leadProject.year}</span>
                  </div>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    {leadProject.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-zinc-300">
                    {leadProject.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    {leadProject.description}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                    {leadProject.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-400" />
                        <span className="leading-relaxed text-zinc-300/90">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {leadProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    {leadProject.liveUrl && (
                      <a
                        href={leadProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 px-3.5 py-2 text-xs font-medium text-zinc-950 transition-colors hover:bg-white"
                      >
                        Live Demo
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {leadProject.githubUrl && (
                      <a
                        href={leadProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 px-3.5 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <AiMathTutorVisual />
                </div>
              </div>
            </article>

            {/* Secondary 2-Column Cards: Liftory & DotaPilot */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {secondaryProjects.map((project) => (
                <article
                  key={project.id}
                  className="flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-[#111114] p-6 transition-colors hover:border-zinc-700/80"
                >
                  <div>
                    <div className="mb-5">
                      {project.id === "liftory" ? (
                        <LiftoryVisual />
                      ) : (
                        <DotaPilotVisual />
                      )}
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
                      <span className="text-zinc-300">{project.category}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="mt-2.5 text-xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-zinc-300">
                      {project.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {project.description}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                          <span className="leading-relaxed text-zinc-300/90">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-zinc-800/70">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 px-3.5 py-2 text-xs font-medium text-zinc-950 transition-colors hover:bg-white"
                        >
                          Live Demo
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 px-3.5 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Source Code
                        </a>
                      )}
                      {project.repoNote && (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-zinc-500">
                          <Lock className="h-3 w-3" />
                          {project.repoNote}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section
            id="experience"
            className="scroll-mt-24 border-t border-zinc-800/70 py-20 sm:py-24"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Experience
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
              Commercial &amp; Client Track Record
            </h2>

            <div className="mt-10 space-y-8 border-l border-zinc-800/80 pl-6 sm:pl-8">
              {EXPERIENCE.map((item) => (
                <div key={`${item.company}-${item.period}`} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border border-zinc-600 bg-[#09090B] sm:-left-[37px]"
                  />

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-zinc-100 sm:text-lg">
                        {item.role}{" "}
                        <span className="font-normal text-zinc-400">
                          — {item.company}
                        </span>
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
                      <span>{item.period}</span>
                      <span>·</span>
                      <span>{item.type}</span>
                    </div>
                  </div>

                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
                    {item.summary}
                  </p>

                  <ul className="mt-3 space-y-1.5 text-sm text-zinc-300/90">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-zinc-800/80 bg-zinc-900/60 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FREELANCE SERVICES */}
          <section
            id="services"
            className="scroll-mt-24 border-t border-zinc-800/70 py-20 sm:py-24"
          >
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                Freelance &amp; Consulting
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                How I Can Help Your Team
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Available for end-to-end product builds, contract engineering,
                and AI feature integrations.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-[#111114]/80 p-6 transition-colors hover:border-zinc-700/80"
                >
                  <div>
                    <span className="font-mono text-xs text-zinc-500">
                      {service.number}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-zinc-100 sm:text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {service.description}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-1.5 border-t border-zinc-800/70 pt-4">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 font-mono text-xs text-zinc-300"
                      >
                        <span className="h-1 w-1 rounded-full bg-emerald-400/80" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ARCHIVE */}
          <div className="border-t border-zinc-800/70">
            <ArchiveSection />
          </div>

          {/* TECH STACK */}
          <section
            id="stack"
            className="scroll-mt-24 border-t border-zinc-800/70 py-20 sm:py-24"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Toolbox
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
              Technical Stack
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STACK_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="rounded-xl border border-zinc-800/80 bg-[#111114]/70 p-5"
                >
                  <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    {group.label}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-zinc-200">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section
            id="contact"
            className="scroll-mt-24 border-t border-zinc-800/70 py-20 sm:py-24"
          >
            <div className="rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-[#131318] to-[#0E0E11] p-7 sm:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-xl">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
                    Let&apos;s Work Together
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Have a product, MVP, or AI feature to ship?
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                    I&apos;m open to freelance projects, technical contracts,
                    and full-stack engineering roles. Send a short brief and
                    I&apos;ll reply quickly.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
                  >
                    <Mail className="h-4 w-4" />
                    {SITE_CONFIG.email}
                  </a>
                  <CopyEmailButton />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800/80 pt-6">
                <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-400">
                  <a
                    href={SITE_CONFIG.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={SITE_CONFIG.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>

                <p className="font-mono text-xs text-zinc-500">
                  Press <span className="text-zinc-300">⌘K</span> anywhere to
                  navigate
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-zinc-800/70">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 py-8 font-mono text-xs text-zinc-500 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
