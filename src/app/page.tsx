import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  MapPin,
  ShieldCheck,
  Sparkles,
  WifiOff,
} from "lucide-react";
import { CopyEmailLink } from "@/components/CopyEmailLink";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import {
  EXPERIENCE,
  FEATURED_PROJECTS,
  OTHER_PROJECTS,
  PROFILE,
  STACK_ROWS,
} from "@/data/portfolio";

const STACK_ACCENTS: Record<string, string> = {
  Frontend: "border-sky-500/25 bg-sky-500/[0.08] text-sky-300",
  Backend: "border-emerald-500/25 bg-emerald-500/[0.08] text-emerald-300",
  "AI & LLMs": "border-violet-500/25 bg-violet-500/[0.08] text-violet-300",
  "Infra & QA": "border-amber-500/25 bg-amber-500/[0.08] text-amber-300",
};

const HIGHLIGHTS = [
  { value: "-35%", label: "API latency cut at Inforce", color: "text-sky-400" },
  { value: "95+", label: "Lighthouse on E-Commerce", color: "text-emerald-400" },
  { value: "10+", label: "Shipped web & AI products", color: "text-violet-400" },
];

export default function HomePage() {
  const [mathTutor, liftory, dotapilot] = FEATURED_PROJECTS;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090D] text-zinc-100">
      {/* Living ambient background lights */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div className="bg-dot-matrix absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_80%)]" />
        <div className="animate-ambient-slow absolute -top-32 left-[8%] h-[420px] w-[420px] rounded-full bg-sky-500/[0.09] blur-[120px]" />
        <div className="animate-ambient-reverse absolute top-[18%] right-[4%] h-[380px] w-[380px] rounded-full bg-violet-500/[0.09] blur-[120px]" />
        <div className="animate-ambient-slow absolute bottom-[10%] left-[25%] h-[340px] w-[340px] rounded-full bg-emerald-500/[0.06] blur-[120px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        {/* BENTO HERO */}
        <section className="grid gap-4 lg:grid-cols-12">
          {/* Main Identity Card */}
          <SpotlightCard
            accent="sky"
            className="p-6 sm:p-8 lg:col-span-8"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24">
                <div
                  aria-hidden="true"
                  className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-500/50 via-violet-500/40 to-emerald-400/50 blur-sm"
                />
                <div className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-white/15">
                  <Image
                    src="/avatar.jpg"
                    alt={PROFILE.name}
                    fill
                    priority
                    sizes="96px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  {PROFILE.status}
                </div>

                <h1 className="mt-2.5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {PROFILE.name}
                </h1>
                <p className="mt-0.5 text-sm font-medium bg-gradient-to-r from-sky-300 via-zinc-200 to-violet-300 bg-clip-text text-transparent">
                  {PROFILE.role}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-[15px] leading-relaxed text-zinc-300">
              {PROFILE.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Single clean link row */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/[0.07] pt-5 text-sm">
              <CopyEmailLink />
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-0.5 text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-sky-300 hover:decoration-sky-400/60"
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-0.5 text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-violet-300 hover:decoration-violet-400/60"
              >
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </SpotlightCard>

          {/* Right Bento Column: Metrics + Location/Focus */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
            <SpotlightCard accent="violet" className="p-5 sm:p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Impact Snapshot
              </p>
              <div className="mt-4 space-y-3.5">
                {HIGHLIGHTS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-baseline justify-between gap-3"
                  >
                    <span
                      className={`font-mono text-xl font-semibold tracking-tight ${stat.color}`}
                    >
                      {stat.value}
                    </span>
                    <span className="text-right text-xs text-zinc-400">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>

            <SpotlightCard accent="emerald" className="flex flex-col justify-between p-5 sm:p-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    Based in
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-zinc-300">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                    {PROFILE.location}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Open to <span className="text-zinc-200">MVPs</span>,{" "}
                  <span className="text-zinc-200">fast e-commerce</span>, and{" "}
                  <span className="text-zinc-200">AI integrations</span>.
                </p>
              </div>
              <p className="mt-4 font-mono text-[11px] text-zinc-500">
                TypeScript · Next.js · NestJS · Postgres · LLMs
              </p>
            </SpotlightCard>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="mt-16 sm:mt-20">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-sky-400/90">
                  Selected Work
                </p>
                <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-white">
                  Featured Projects
                </h2>
              </div>
              <span className="hidden font-mono text-xs text-zinc-500 sm:inline">
                01 — 03
              </span>
            </div>
          </Reveal>

          {/* 1. AI Math Tutor (Wide Hero Card) */}
          <Reveal delay={60} className="mt-6">
            <SpotlightCard accent="sky" className="p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full border border-sky-500/25 bg-sky-500/10 px-2.5 py-0.5 font-mono text-[11px] text-sky-300">
                      AI Systems · Neuro-Symbolic
                    </span>
                    <div className="flex items-center gap-4 text-xs">
                      {mathTutor.liveUrl && (
                        <a
                          href={mathTutor.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-0.5 font-medium text-sky-300 underline decoration-sky-500/40 underline-offset-4 transition-colors hover:text-sky-200"
                        >
                          Live Demo
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {mathTutor.githubUrl && (
                        <a
                          href={mathTutor.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-0.5 text-zinc-400 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-100"
                        >
                          Code
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {mathTutor.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-300/90">
                    {mathTutor.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {mathTutor.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated Neuro-Symbolic Pipeline Preview */}
                <div className="lg:col-span-5">
                  <div className="rounded-xl border border-sky-500/20 bg-[#0A0C12] p-4">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
                      <span className="font-mono text-[11px] text-zinc-400">
                        LangGraph Pipeline
                      </span>
                      <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                        <ShieldCheck className="h-3 w-3" />
                        0 Hallucinations
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
                      {["normalize", "CAS verify", "FSM", "Socratic LLM", "guardrail"].map(
                        (step, i) => (
                          <span key={step} className="inline-flex items-center gap-1.5">
                            <span
                              className={`rounded px-2 py-1 ${
                                i === 1 || i === 4
                                  ? "animate-node-pulse border border-sky-400/40 bg-sky-500/15 text-sky-200"
                                  : "border border-white/[0.07] bg-white/[0.03] text-zinc-400"
                              }`}
                            >
                              {step}
                            </span>
                            {i < 4 && <span className="text-zinc-600">→</span>}
                          </span>
                        )
                      )}
                    </div>

                    <div className="mt-3.5 space-y-2 rounded-lg border border-white/[0.06] bg-black/40 p-3 font-mono text-[11px]">
                      <div className="flex items-center justify-between text-zinc-400">
                        <span>3(x + 4) = 2x + 19</span>
                        <span className="text-[10px] text-zinc-500">input</span>
                      </div>
                      <div className="flex items-center justify-between text-amber-300">
                        <span>3x + 4 = 2x + 19</span>
                        <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-[9px]">
                          DISTRIBUTIVE_ERR
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-zinc-400">
                        L1 Hint: multiply <span className="font-mono text-zinc-200">3</span> by both terms in{" "}
                        <span className="font-mono text-zinc-200">(x + 4)</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* 2 & 3: Liftory + DotaPilot Side-by-Side */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {/* Liftory */}
            <Reveal delay={120}>
              <SpotlightCard
                accent="emerald"
                className="flex h-full flex-col justify-between p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300">
                      Full-Stack PWA
                    </span>
                    <div className="flex items-center gap-3 text-xs">
                      {liftory.liveUrl && (
                        <a
                          href={liftory.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-0.5 font-medium text-emerald-300 underline decoration-emerald-500/40 underline-offset-4 transition-colors hover:text-emerald-200"
                        >
                          Live Demo
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {liftory.githubUrl && (
                        <a
                          href={liftory.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-0.5 text-zinc-400 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-100"
                        >
                          Code
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Mini visual strip */}
                  <div className="mt-4 rounded-xl border border-emerald-500/20 bg-[#0A0F0D] p-3.5">
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="inline-flex items-center gap-1.5 text-zinc-300">
                        <WifiOff className="h-3.5 w-3.5 text-emerald-400" />
                        IndexedDB Outbox
                      </span>
                      <span className="inline-flex items-center gap-1 text-emerald-300">
                        <CheckCircle2 className="h-3 w-3" />
                        Synced · Neon
                      </span>
                    </div>
                    <div className="mt-2.5 grid grid-cols-3 gap-2 font-mono text-[10px]">
                      <div className="rounded-md bg-white/[0.04] px-2 py-1.5 text-zinc-300">
                        Set 1 · 80kg
                      </div>
                      <div className="rounded-md bg-white/[0.04] px-2 py-1.5 text-zinc-300">
                        Set 2 · 85kg
                      </div>
                      <div className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1.5 text-emerald-200">
                        Set 3 · 85kg
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                    {liftory.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {liftory.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {liftory.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>

            {/* DotaPilot */}
            <Reveal delay={180}>
              <SpotlightCard
                accent="violet"
                className="flex h-full flex-col justify-between p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-violet-500/25 bg-violet-500/10 px-2.5 py-0.5 font-mono text-[11px] text-violet-300">
                      Systems · Real-Time AI
                    </span>
                    {dotapilot.githubUrl && (
                      <a
                        href={dotapilot.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-0.5 text-xs font-medium text-violet-300 underline decoration-violet-500/40 underline-offset-4 transition-colors hover:text-violet-200"
                      >
                        Source Code
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Mini visual strip */}
                  <div className="mt-4 rounded-xl border border-violet-500/20 bg-[#0D0A14] p-3.5">
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="inline-flex items-center gap-1.5 text-zinc-300">
                        <Cpu className="h-3.5 w-3.5 text-violet-400" />
                        macOS Micro-Dock
                      </span>
                      <span className="text-violet-300">0.0% CPU · GSI</span>
                    </div>
                    <div className="mt-2.5 flex items-center justify-between rounded-md border border-violet-500/20 bg-violet-500/[0.08] px-2.5 py-1.5 text-[11px]">
                      <span className="inline-flex items-center gap-1.5 text-violet-200">
                        <Sparkles className="h-3 w-3 text-violet-300" />
                        Gemini Tavern Macro Advice
                      </span>
                      <span className="font-mono text-[10px] text-amber-300">
                        19:42
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                    {dotapilot.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {dotapilot.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {dotapilot.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE + STACK (2-COLUMN BENTO SPLIT) */}
        <section className="mt-16 grid gap-6 sm:mt-20 lg:grid-cols-12">
          {/* Experience Column */}
          <Reveal className="lg:col-span-7">
            <SpotlightCard accent="zinc" className="h-full p-6 sm:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-400/90">
                Experience
              </p>
              <h2 className="mt-1.5 text-xl font-semibold tracking-tight text-white">
                Where I&apos;ve Built
              </h2>

              <div className="mt-6 space-y-6 border-l border-white/[0.08] pl-5">
                {EXPERIENCE.map((item, idx) => (
                  <div key={`${item.company}-${item.period}`} className="relative">
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-[#111116] ${
                        idx === 0 ? "bg-emerald-400" : "bg-zinc-600"
                      }`}
                    />
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-sm font-semibold text-zinc-100">
                        {item.company}{" "}
                        <span className="font-normal text-zinc-400">
                          · {item.role}
                        </span>
                      </h3>
                      <span className="font-mono text-[11px] text-zinc-500">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Stack Column */}
          <Reveal delay={100} className="lg:col-span-5">
            <SpotlightCard accent="amber" className="h-full p-6 sm:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber-400/90">
                Toolbox
              </p>
              <h2 className="mt-1.5 text-xl font-semibold tracking-tight text-white">
                Tech Stack
              </h2>

              <div className="mt-6 space-y-5">
                {STACK_ROWS.map((row) => (
                  <div key={row.category}>
                    <span
                      className={`inline-block rounded-md border px-2 py-0.5 font-mono text-[11px] ${
                        STACK_ACCENTS[row.category] ??
                        "border-zinc-700 bg-zinc-800 text-zinc-300"
                      }`}
                    >
                      {row.category}
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {row.items}
                    </p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        </section>

        {/* MORE PROJECTS (2-COLUMN GRID) */}
        <section className="mt-16 sm:mt-20">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-400/90">
                  Archive
                </p>
                <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-white">
                  More Deployed &amp; Open-Source Work
                </h2>
              </div>
              <span className="hidden font-mono text-xs text-zinc-500 sm:inline">
                {OTHER_PROJECTS.length} projects
              </span>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
            {OTHER_PROJECTS.map((project, idx) => (
              <Reveal key={project.title} delay={(idx % 4) * 50}>
                <SpotlightCard
                  accent={
                    idx % 3 === 0 ? "sky" : idx % 3 === 1 ? "violet" : "emerald"
                  }
                  className="flex h-full flex-col justify-between p-5"
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-[15px] font-semibold text-zinc-100">
                        {project.title}
                      </h3>
                      <div className="flex shrink-0 items-center gap-3 text-xs">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-0.5 text-zinc-200 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-sky-300 hover:decoration-sky-400/60"
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
                            className="inline-flex items-center gap-0.5 text-zinc-400 underline decoration-zinc-800 underline-offset-4 transition-colors hover:text-zinc-100"
                          >
                            Code
                            <ArrowUpRight className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      {project.description}
                    </p>
                  </div>

                  <p className="mt-3.5 font-mono text-[11px] text-zinc-500">
                    {project.stack.join(" · ")}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 flex flex-col gap-3 border-t border-white/[0.08] pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {PROFILE.name} · {PROFILE.location}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${PROFILE.email}`}
              className="transition-colors hover:text-zinc-200"
            >
              {PROFILE.email}
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
    </div>
  );
}
