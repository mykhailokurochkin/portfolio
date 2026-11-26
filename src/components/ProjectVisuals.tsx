import {
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  WifiOff,
  RefreshCw,
  Cpu,
  Clock,
  Sparkles,
} from "lucide-react";

export function AiMathTutorVisual() {
  const nodes = [
    { label: "normalize", active: false },
    { label: "CAS verify", active: true },
    { label: "FSM", active: false },
    { label: "Socratic LLM", active: false },
    { label: "guardrail", active: true },
  ];

  return (
    <div className="relative flex h-full min-h-[250px] flex-col justify-between overflow-hidden rounded-xl border border-zinc-800/80 bg-[#0C0C0F] p-4 sm:p-5">
      {/* Subtle top ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl"
      />

      {/* Top bar */}
      <div className="flex items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="font-mono text-[11px] text-zinc-400">
            LangGraph Harness Inspector
          </span>
        </div>
        <span className="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400 ring-1 ring-emerald-500/20">
          CAS VERIFIED
        </span>
      </div>

      {/* Pipeline strip */}
      <div className="my-4 flex flex-wrap items-center gap-1.5">
        {nodes.map((node, idx) => (
          <div key={node.label} className="flex items-center gap-1.5">
            <span
              className={`rounded-md px-2 py-1 font-mono text-[10px] sm:text-[11px] ${
                node.active
                  ? "border border-sky-500/30 bg-sky-500/10 text-sky-300"
                  : "border border-zinc-800 bg-zinc-900/90 text-zinc-400"
              }`}
            >
              {node.label}
            </span>
            {idx < nodes.length - 1 && (
              <span className="font-mono text-[10px] text-zinc-600">→</span>
            )}
          </div>
        ))}
      </div>

      {/* Equation verification trace */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between rounded-lg border border-zinc-800/80 bg-zinc-950/80 px-3 py-2">
          <span className="font-mono text-xs text-zinc-300">
            3(x + 4) = 2x + 19
          </span>
          <span className="font-mono text-[10px] text-zinc-500">Problem</span>
        </div>

        <div className="rounded-lg border border-amber-500/25 bg-amber-500/[0.05] px-3 py-2.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-amber-400" />
              <span className="font-mono text-xs text-zinc-200">
                3x + 4 = 2x + 19
              </span>
            </div>
            <span className="rounded bg-amber-500/15 px-1.5 py-0.5 font-mono text-[10px] text-amber-300">
              DISTRIBUTIVE_PROPERTY
            </span>
          </div>
          <p className="mt-1.5 text-[11px] leading-relaxed text-zinc-400">
            L1 Hint: Check how{" "}
            <span className="font-mono text-zinc-200">3</span> distributes
            across both terms inside{" "}
            <span className="font-mono text-zinc-200">(x + 4)</span>.
          </p>
        </div>

        <div className="flex items-center justify-between pt-1 font-mono text-[10px] text-zinc-500">
          <span className="inline-flex items-center gap-1 text-emerald-400/90">
            <ShieldCheck className="h-3 w-3" />
            Leakage Gate: PASS
          </span>
          <span>Root withheld · Groq sub-second</span>
        </div>
      </div>
    </div>
  );
}

export function LiftoryVisual() {
  const sets = [
    { set: "01", weight: "80 kg", reps: "6 reps", done: true },
    { set: "02", weight: "85 kg", reps: "5 reps", done: true },
    { set: "03", weight: "85 kg", reps: "5 reps", done: false },
  ];

  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-800/80 bg-[#0C0C0F] p-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-10 h-36 w-36 rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
        <div className="flex items-center gap-2">
          <WifiOff className="h-3.5 w-3.5 text-zinc-400" />
          <span className="font-mono text-[11px] text-zinc-300">
            Offline Outbox
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400 ring-1 ring-emerald-500/20">
          <RefreshCw className="h-2.5 w-2.5" />
          Synced · Neon
        </span>
      </div>

      <div className="mt-3">
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-xs font-medium text-zinc-200">
            Incline Bench Press
          </span>
          <span className="font-mono text-[10px] text-zinc-500">
            Push Day · A
          </span>
        </div>

        <div className="space-y-1.5">
          {sets.map((s) => (
            <div
              key={s.set}
              className={`flex items-center justify-between rounded-md border px-2.5 py-1.5 font-mono text-[11px] ${
                s.done
                  ? "border-zinc-800/80 bg-zinc-900/60 text-zinc-300"
                  : "border-zinc-800/50 bg-zinc-950/60 text-zinc-500"
              }`}
            >
              <span className="text-zinc-500">#{s.set}</span>
              <span>{s.weight}</span>
              <span>{s.reps}</span>
              <CheckCircle2
                className={`h-3.5 w-3.5 ${
                  s.done ? "text-emerald-400" : "text-zinc-700"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DotaPilotVisual() {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-800/80 bg-[#0C0C0F] p-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-10 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
        <div className="flex items-center gap-2">
          <Cpu className="h-3.5 w-3.5 text-indigo-400" />
          <span className="font-mono text-[11px] text-zinc-300">
            macOS Micro-Dock
          </span>
        </div>
        <span className="rounded bg-zinc-800/80 px-2 py-0.5 font-mono text-[10px] text-zinc-300">
          0.0% CPU · GSI
        </span>
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between rounded-md border border-zinc-800/80 bg-zinc-900/70 px-2.5 py-1.5">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-zinc-300">
            <Clock className="h-3 w-3 text-sky-400" />
            19:42
          </span>
          <span className="rounded bg-amber-500/15 px-1.5 py-0.5 font-mono text-[10px] text-amber-300">
            Tormentor in 0:18
          </span>
        </div>

        <div className="rounded-md border border-indigo-500/25 bg-indigo-500/[0.06] p-2.5">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-indigo-300">
            <Sparkles className="h-3 w-3" />
            Tavern Macro Advice · Gemini
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-zinc-400">
            Prioritize BKB before next Rosh fight; smoke top triangle on
            respawn.
          </p>
        </div>
      </div>
    </div>
  );
}
