import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Sparkles,
  Terminal,
  WifiOff,
} from "lucide-react";
import { CopyEmailLink } from "@/components/CopyEmailLink";
import { CursorGlow } from "@/components/CursorGlow";
import { FloatingCard } from "@/components/FloatingCard";
import { Reveal } from "@/components/Reveal";
import {
  EXPERIENCE,
  FEATURED_PROJECTS,
  OTHER_PROJECTS,
  PROFILE,
  STACK_ROWS,
} from "@/data/portfolio";

const STACK_STYLES: Record<string, { badge: string; chip: string }> = {
  Frontend: {
    badge: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    chip: "border-sky-500/15 bg-sky-500/[0.05] text-zinc-200 hover:border-sky-400/35",
  },
  Backend: {
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    chip: "border-emerald-500/15 bg-emerald-500/[0.05] text-zinc-200 hover:border-emerald-400/35",
  },
  "AI & LLMs": {
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    chip: "border-violet-500/15 bg-violet-500/[0.05] text-zinc-200 hover:border-violet-400/35",
  },
  "Infra & QA": {
    badge: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    chip: "border-amber-500/15 bg-amber-500/[0.05] text-zinc-200 hover:border-amber-400/35",
  },
};

const HIGHLIGHTS = [
  { value: "-35%", label: "API latency", color: "text-sky-300" },
  { value: "95+", label: "Lighthouse", color: "text-emerald-300" },
  { value: "10+", label: "Shipped apps", color: "text-violet-300" },
];

export default function HomePage() {
  const [mathTutor, liftory, dotapilot] = FEATURED_PROJECTS;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07080D] text-zinc-100">
      {/* Living aurora & spatial dot field */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div className="bg-spatial-dots absolute inset-0 opacity-45 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_85%)]" />
        <div className="animate-aurora-1 absolute -top-40 left-[6%] h-[520px] w-[520px] rounded-full bg-sky-500/[0.11] blur-[140px]" />
        <div className="animate-aurora-2 absolute top-[14%] right-[4%] h-[480px] w-[480px] rounded-full bg-violet-500/[0.11] blur-[140px]" />
        <div className="animate-aurora-1 absolute bottom-[6%] left-[28%] h-[420px] w-[420px] rounded-full bg-emerald-500/[0.08] blur-[140px]" />
      </div>

      {/* Smooth lerped cursor ambient glow */}
      <CursorGlow />

      <main className="relative z-10 mx-auto max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        {/* TOP SPATIAL HERO CONSTELLATION */}
        <section className="grid gap-6 lg:grid-cols-12">
          {/* Identity Panel */}
          <Reveal className="lg:col-span-7">
            <FloatingCard
              accent="sky"
              floatVariant={1}
              floatDelay={0}
              className="flex flex-col justify-between p-7 sm:p-9"
            >
              <div>
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
                    <div
                      aria-hidden="true"
                      className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-sky-500/60 via-violet-500/50 to-emerald-400/60 blur-md opacity-80"
                    />
                    <div className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-white/20">
                      <Image
                        src="/avatar.jpg"
                        alt={PROFILE.name}
                        fill
                        priority
                        sizes="112px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="inline-flex items-center rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-0.5 text-xs text-emerald-300">
                      {PROFILE.status}
                    </div>
                    <h1 className="mt-2.5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      {PROFILE.name}
                    </h1>
                    <p className="mt-1 bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-sm font-medium text-transparent sm:text-base">
                      {PROFILE.role}
                    </p>
                  </div>
                </div>

                <div className="mt-7 space-y-3 text-[15px] leading-relaxed text-zinc-300">
                  {PROFILE.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/[0.08] pt-5 text-sm">
                <CopyEmailLink />
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-0.5 text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors duration-300 hover:text-sky-300 hover:decoration-sky-400/60"
                >
                  GitHub
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-0.5 text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors duration-300 hover:text-violet-300 hover:decoration-violet-400/60"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </FloatingCard>
          </Reveal>

          {/* Right Spatial Column: Code Identity Card + Impact Strip */}
          <div className="grid gap-6 lg:col-span-5">
            <Reveal delay={100}>
              <FloatingCard
                accent="violet"
                floatVariant={2}
                floatDelay={-2.2}
                className="p-6 sm:p-7"
              >
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                    <Terminal className="h-3.5 w-3.5 text-violet-400" />
                    <span>engineer.ts</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  </div>
                </div>

                <pre className="mt-4 overflow-x-auto font-mono text-xs leading-6 text-zinc-300 sm:text-[13px]">
                  <code>
                    <span className="text-violet-400">export const</span>{" "}
                    <span className="text-sky-300">engineer</span>{" "}
                    <span className="text-zinc-500">=</span> {"{\n"}
                    {"  "}
                    <span className="text-zinc-400">location:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;Ukraine · Remote&quot;
                    </span>
                    ,{"\n"}
                    {"  "}
                    <span className="text-zinc-400">current:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;Full-Stack &amp; AI @ Inforce&quot;
                    </span>
                    ,{"\n"}
                    {"  "}
                    <span className="text-zinc-400">builds:</span> [
                    <span className="text-amber-300">&quot;Web Apps&quot;</span>,{" "}
                    <span className="text-amber-300">
                      &quot;E-Commerce&quot;
                    </span>
                    ,{" "}
                    <span className="text-amber-300">
                      &quot;AI Systems&quot;
                    </span>
                    ],{"\n"}
                    {"  "}
                    <span className="text-zinc-400">stack:</span> [
                    <span className="text-sky-300">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-sky-300">&quot;NestJS&quot;</span>,{" "}
                    <span className="text-sky-300">&quot;Postgres&quot;</span>,{" "}
                    <span className="text-sky-300">&quot;LangGraph&quot;</span>]
                    {"\n"}
                    {"};"}
                  </code>
                </pre>
              </FloatingCard>
            </Reveal>

            <Reveal delay={180}>
              <div className="grid grid-cols-3 gap-4">
                {HIGHLIGHTS.map((stat, idx) => (
                  <FloatingCard
                    key={stat.label}
                    accent={
                      idx === 0 ? "sky" : idx === 1 ? "emerald" : "violet"
                    }
                    floatVariant={((idx % 4) + 1) as 1 | 2 | 3 | 4}
                    floatDelay={-1.4 * (idx + 1)}
                    className="flex flex-col items-center justify-center gap-1.5 px-3 py-5 text-center"
                  >
                    <span
                      className={`block font-mono text-2xl font-semibold leading-none tracking-tight sm:text-3xl ${stat.color}`}
                    >
                      {stat.value}
                    </span>
                    <span className="block text-[11px] leading-tight text-zinc-400 sm:text-xs">
                      {stat.label}
                    </span>
                  </FloatingCard>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* SELECTED WORK — WIDE 3-COLUMN FLOATING GALLERY */}
        <section className="mt-20 sm:mt-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400/90">
              Selected Work
            </p>
            <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Featured Projects
            </h2>
          </Reveal>

          <div className="mt-7 grid gap-6 lg:grid-cols-3">
            {/* 1. AI Math Tutor */}
            <Reveal delay={60}>
              <FloatingCard
                accent="sky"
                floatVariant={1}
                floatDelay={-0.6}
                className="flex flex-col justify-between p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 font-mono text-[11px] text-sky-300">
                      AI Systems
                    </span>
                    <div className="flex items-center gap-3 text-xs">
                      {mathTutor.liveUrl && (
                        <a
                          href={mathTutor.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-0.5 font-medium text-sky-300 underline decoration-sky-500/40 underline-offset-4 transition-colors duration-300 hover:text-sky-200"
                        >
                          Live
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {mathTutor.githubUrl && (
                        <a
                          href={mathTutor.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-0.5 text-zinc-400 underline decoration-zinc-700 underline-offset-4 transition-colors duration-300 hover:text-zinc-100"
                        >
                          Code
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Pipeline Visual */}
                  <div className="mt-5 rounded-2xl border border-sky-500/20 bg-[#080B12]/90 p-3.5">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                      <span className="font-mono text-[10px] text-zinc-400">
                        LangGraph Harness
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-300">
                        <ShieldCheck className="h-3 w-3" />
                        CAS Verified
                      </span>
                    </div>
                    <div className="mt-2.5 flex flex-wrap items-center gap-1 font-mono text-[10px]">
                      {["normalize", "CAS", "FSM", "LLM", "guard"].map(
                        (node, i) => (
                          <span key={node} className="inline-flex items-center gap-1">
                            <span
                              className={`rounded px-1.5 py-0.5 ${
                                i === 1 || i === 4
                                  ? "animate-node-breathe border border-sky-400/40 bg-sky-500/15 text-sky-200"
                                  : "border border-white/[0.07] bg-white/[0.03] text-zinc-400"
                              }`}
                            >
                              {node}
                            </span>
                            {i < 4 && <span className="text-zinc-600">→</span>}
                          </span>
                        )
                      )}
                    </div>
                    <div className="mt-2.5 flex items-center justify-between rounded-lg bg-black/40 px-2.5 py-1.5 font-mono text-[10px]">
                      <span className="text-amber-300">3x + 4 = 2x + 19</span>
                      <span className="text-zinc-500">L1 Hint</span>
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                    {mathTutor.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {mathTutor.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/[0.07] pt-4">
                  {mathTutor.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </FloatingCard>
            </Reveal>

            {/* 2. Liftory */}
            <Reveal delay={140}>
              <FloatingCard
                accent="emerald"
                floatVariant={2}
                floatDelay={-2.8}
                className="flex flex-col justify-between p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300">
                      Full-Stack PWA
                    </span>
                    <div className="flex items-center gap-3 text-xs">
                      {liftory.liveUrl && (
                        <a
                          href={liftory.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-0.5 font-medium text-emerald-300 underline decoration-emerald-500/40 underline-offset-4 transition-colors duration-300 hover:text-emerald-200"
                        >
                          Live
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {liftory.githubUrl && (
                        <a
                          href={liftory.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-0.5 text-zinc-400 underline decoration-zinc-700 underline-offset-4 transition-colors duration-300 hover:text-zinc-100"
                        >
                          Code
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Offline Sync Visual */}
                  <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-[#08100C]/90 p-3.5">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 font-mono text-[10px]">
                      <span className="inline-flex items-center gap-1.5 text-zinc-300">
                        <WifiOff className="h-3 w-3 text-emerald-400" />
                        IndexedDB Outbox
                      </span>
                      <span className="inline-flex items-center gap-1 text-emerald-300">
                        <CheckCircle2 className="h-3 w-3" />
                        Synced · Neon
                      </span>
                    </div>
                    <div className="mt-2.5 grid grid-cols-3 gap-1.5 font-mono text-[10px]">
                      <div className="rounded-lg bg-white/[0.04] px-2 py-1.5 text-center text-zinc-300">
                        80kg × 6
                      </div>
                      <div className="rounded-lg bg-white/[0.04] px-2 py-1.5 text-center text-zinc-300">
                        85kg × 5
                      </div>
                      <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2 py-1.5 text-center text-emerald-200">
                        85kg × 5
                      </div>
                    </div>
                    <div className="mt-2.5 flex items-center justify-between font-mono text-[10px] text-zinc-500">
                      <span>Offline-first mutations</span>
                      <span className="text-emerald-400/80">Turborepo</span>
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                    {liftory.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {liftory.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/[0.07] pt-4">
                  {liftory.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </FloatingCard>
            </Reveal>

            {/* 3. DotaPilot */}
            <Reveal delay={220}>
              <FloatingCard
                accent="violet"
                floatVariant={3}
                floatDelay={-5.1}
                className="flex flex-col justify-between p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 font-mono text-[11px] text-violet-300">
                      Systems · Real-Time AI
                    </span>
                    {dotapilot.githubUrl && (
                      <a
                        href={dotapilot.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-0.5 text-xs font-medium text-violet-300 underline decoration-violet-500/40 underline-offset-4 transition-colors duration-300 hover:text-violet-200"
                      >
                        Code
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>

                  {/* macOS Overlay Visual */}
                  <div className="mt-5 rounded-2xl border border-violet-500/20 bg-[#0D0916]/90 p-3.5">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 font-mono text-[10px]">
                      <span className="inline-flex items-center gap-1.5 text-zinc-300">
                        <Cpu className="h-3 w-3 text-violet-400" />
                        macOS Micro-Dock
                      </span>
                      <span className="text-violet-300">0.0% CPU · GSI</span>
                    </div>
                    <div className="mt-2.5 flex items-center justify-between rounded-lg border border-violet-500/25 bg-violet-500/10 px-2.5 py-1.5 text-[11px]">
                      <span className="inline-flex items-center gap-1.5 text-violet-200">
                        <Sparkles className="h-3 w-3 text-violet-300" />
                        Gemini Tavern Macro
                      </span>
                      <span className="font-mono text-[10px] text-amber-300">
                        19:42
                      </span>
                    </div>
                    <div className="mt-2.5 flex items-center justify-between font-mono text-[10px] text-zinc-500">
                      <span>Cocoa + WebKit HUD</span>
                      <span className="text-violet-400/80">VAC-Safe SSE</span>
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                    {dotapilot.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {dotapilot.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/[0.07] pt-4">
                  {dotapilot.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </FloatingCard>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE + TECH STACK (WIDE 2-COLUMN SPATIAL ROW) */}
        <section className="mt-20 grid gap-6 sm:mt-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <FloatingCard
              accent="cyan"
              floatVariant={4}
              floatDelay={-1.5}
              className="p-7 sm:p-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/90">
                Experience
              </p>
              <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-white">
                Where I&apos;ve Built
              </h2>

              <div className="mt-7 space-y-6 border-l border-white/[0.09] pl-6">
                {EXPERIENCE.map((item, idx) => (
                  <div key={`${item.company}-${item.period}`} className="relative">
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-[#101118] ${
                        idx === 0 ? "bg-cyan-400" : "bg-zinc-600"
                      }`}
                    />
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-[15px] font-semibold text-zinc-100">
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
            </FloatingCard>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <FloatingCard
              accent="amber"
              floatVariant={2}
              floatDelay={-3.9}
              className="p-7 sm:p-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400/90">
                Toolbox
              </p>
              <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-white">
                Tech Stack
              </h2>

              <div className="mt-7 space-y-5">
                {STACK_ROWS.map((row) => {
                  const style = STACK_STYLES[row.category] ?? {
                    badge: "border-zinc-700 bg-zinc-800 text-zinc-300",
                    chip: "border-white/10 bg-white/5 text-zinc-200",
                  };
                  const chips = row.items.split(", ");
                  return (
                    <div key={row.category}>
                      <span
                        className={`inline-block rounded-md border px-2 py-0.5 font-mono text-[11px] ${style.badge}`}
                      >
                        {row.category}
                      </span>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {chips.map((chip) => (
                          <span
                            key={chip}
                            className={`rounded-lg border px-2.5 py-1 text-xs transition-colors duration-300 ${style.chip}`}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </FloatingCard>
          </Reveal>
        </section>

        {/* MORE PROJECTS — WIDE 4-COLUMN FLOATING GRID */}
        <section className="mt-20 sm:mt-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400/90">
              Archive
            </p>
            <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              More Deployed &amp; Open-Source Work
            </h2>
          </Reveal>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OTHER_PROJECTS.map((project, idx) => (
              <Reveal key={project.title} delay={(idx % 4) * 70}>
                <FloatingCard
                  accent={
                    idx % 4 === 0
                      ? "sky"
                      : idx % 4 === 1
                        ? "violet"
                        : idx % 4 === 2
                          ? "emerald"
                          : "amber"
                  }
                  floatVariant={((idx % 4) + 1) as 1 | 2 | 3 | 4}
                  floatDelay={-1.1 * idx}
                  className="flex flex-col justify-between p-5"
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-[15px] font-semibold text-zinc-100">
                        {project.title}
                      </h3>
                      <div className="flex shrink-0 items-center gap-2.5 text-xs">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-0.5 text-zinc-200 underline decoration-zinc-700 underline-offset-4 transition-colors duration-300 hover:text-sky-300 hover:decoration-sky-400/60"
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
                            className="inline-flex items-center gap-0.5 text-zinc-400 underline decoration-zinc-800 underline-offset-4 transition-colors duration-300 hover:text-zinc-100"
                          >
                            Code
                            <ArrowUpRight className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {project.description}
                    </p>
                  </div>

                  <p className="mt-4 border-t border-white/[0.06] pt-3 font-mono text-[11px] text-zinc-500">
                    {project.stack.join(" · ")}
                  </p>
                </FloatingCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-24 flex flex-col gap-3 border-t border-white/[0.08] pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {PROFILE.name} · {PROFILE.location}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${PROFILE.email}`}
              className="transition-colors duration-300 hover:text-zinc-200"
            >
              {PROFILE.email}
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:text-zinc-200"
            >
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:text-zinc-200"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
