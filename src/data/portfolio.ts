export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  privateRepo?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
}

export interface StackRow {
  category: string;
  items: string;
}

export const PROFILE = {
  name: "Mykhailo Kurochkin",
  role: "Full-Stack & AI Engineer",
  status: "Available for freelance & full-stack work",
  location: "Ukraine · Remote",
  email: "kurochkinmy@gmail.com",
  github: "https://github.com/mykhailokurochkin",
  linkedin: "https://linkedin.com/in/mykhailo-kurochkin",
  bio: [
    "I build end-to-end web applications, fast e-commerce storefronts, and reliable AI systems with TypeScript, Next.js, Node.js/NestJS, and PostgreSQL.",
    "Currently at Inforce working on full-stack web apps and LLM reasoning diagnostics. Open to freelance projects—from MVPs and storefronts to production AI integrations.",
  ],
} as const;

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    title: "AI Math Tutor",
    year: "2026",
    description:
      "Neuro-symbolic algebra tutor combining a compiled LangGraph state machine with deterministic CortexJS symbolic verification. Checks every student step mathematically before the LLM responds, escalating Socratic hints across 3 levels without leaking answers.",
    stack: ["Next.js 15", "LangGraph", "CortexJS CAS", "Groq", "KaTeX", "TypeScript"],
    liveUrl: "https://ai-math-tutor-sable.vercel.app",
    githubUrl: "https://github.com/mykhailokurochkin/ai-math-tutor",
  },
  {
    title: "Liftory",
    year: "2026",
    description:
      "Offline-first strength training PWA for iPhone and Mac. Uses an IndexedDB outbox queue for instant offline workout logging that syncs to PostgreSQL/Neon when back online, built in a Turborepo monorepo with Better Auth and Playwright E2E tests.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Drizzle", "IndexedDB", "Playwright"],
    liveUrl: "https://liftory-app.vercel.app",
    githubUrl: "https://github.com/mykhailokurochkin/liftory",
  },
  {
    title: "DotaPilot",
    year: "2026",
    description:
      "VAC-safe real-time AI match coach for Dota 2 powered by Valve Game State Integration (GSI). Streams live match state via SSE to a native macOS Cocoa/WebKit micro-dock overlay (~0% CPU) and surfaces Gemini macro advice during respawn.",
    stack: ["TypeScript", "Node.js", "Objective-C", "Cocoa/WebKit", "Valve GSI", "Gemini"],
    githubUrl: "https://github.com/mykhailokurochkin/dotapilot",
  },
];

export const OTHER_PROJECTS: ProjectItem[] = [
  {
    title: "Questify",
    year: "2026",
    description: "Full-stack quiz builder with boolean, input, and multi-choice questions.",
    stack: ["Next.js", "NestJS", "Prisma"],
    liveUrl: "https://questify-nu-five.vercel.app",
    githubUrl: "https://github.com/mykhailokurochkin/questify",
  },
  {
    title: "Cartly",
    year: "2026",
    description: "Next.js 15 checkout flow with ISR, real-time promo codes, and Zod validation.",
    stack: ["Next.js 15", "TypeScript", "Zod"],
    liveUrl: "https://cartly-app-delta.vercel.app",
    githubUrl: "https://github.com/mykhailokurochkin/cartly-app",
  },
  {
    title: "BookMe",
    year: "2025",
    description: "Meeting room booking platform with JWT refresh tokens and role-based access.",
    stack: ["React", "Express", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/mykhailokurochkin/bookme",
  },
  {
    title: "NeoWallet",
    year: "2026",
    description: "Mobile-first wallet interface with smart transaction grouping and card limits.",
    stack: ["Next.js", "TypeScript", "Tailwind v4"],
    liveUrl: "https://neowallet-roan.vercel.app",
    githubUrl: "https://github.com/mykhailokurochkin/neowallet",
  },
  {
    title: "Book Directory API",
    year: "2026",
    description: "REST API with Zod validation, Helmet headers, rate limiting, and Prisma.",
    stack: ["Node.js", "Express", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/mykhailokurochkin/book-directory-api",
  },
  {
    title: "TimeWise",
    year: "2025",
    description: "Calendar and event scheduler with priority organization and search.",
    stack: ["Next.js", "TypeScript", "Prisma"],
    githubUrl: "https://github.com/mykhailokurochkin/timewise",
  },
  {
    title: "Handset Hub",
    year: "2025",
    description: "Responsive phone catalog SPA with filtering, sorting, cart, and favorites.",
    stack: ["React", "TypeScript", "SCSS"],
    liveUrl: "https://handset-hub.vercel.app",
    githubUrl: "https://github.com/mykhailokurochkin/handset-hub",
  },
  {
    title: "Monblan Project",
    year: "2026",
    description: "Responsive social feed dashboard with Grid/List toggle and date filtering.",
    stack: ["JavaScript", "Vite", "Flatpickr"],
    liveUrl: "https://monoblanproject.vercel.app",
    githubUrl: "https://github.com/mykhailokurochkin/monoblanproject",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Inforce",
    role: "Full-Stack & AI Engineer",
    period: "Apr 2026 — Present",
    summary:
      "Building React/NestJS web apps and diagnostic systems to audit multi-step LLM reasoning trajectories. Cut backend API latency by 35% and led technical demos that helped close 3 corporate contracts.",
  },
  {
    company: "Freelance E-Commerce",
    role: "Full-Stack Engineer",
    period: "Feb 2026 — Mar 2026",
    summary:
      "Built a building materials e-commerce platform from scratch with Next.js, TypeScript, and Tailwind CSS. Reached 95+ Lighthouse scores and lifted mobile conversion by 20% via payments and fast filtering.",
  },
  {
    company: "Coding House",
    role: "Full-Stack Developer",
    period: "Nov 2025 — Jan 2026",
    summary:
      "Built multi-tenant React/Node.js apps on Supabase with PostgreSQL Row-Level Security (RLS) and Realtime. Cut deployment time by 40% with GitHub Actions and automated AWS S3 backups.",
  },
  {
    company: "Snippetly & Independent Freelance",
    role: "Lead Frontend / Full-Stack",
    period: "Aug 2024 — Nov 2025",
    summary:
      "Led frontend architecture for Snippetly (Sep–Nov 2025) and delivered full-stack web apps, APIs, and custom sites for independent clients.",
  },
];

export const STACK_ROWS: StackRow[] = [
  {
    category: "Frontend",
    items: "TypeScript, React, Next.js, Tailwind CSS, Redux, TanStack Query",
  },
  {
    category: "Backend",
    items: "Node.js, NestJS, Express, PostgreSQL, Supabase (RLS & Realtime), Drizzle, Prisma",
  },
  {
    category: "AI & LLMs",
    items: "LangGraph, OpenAI, Anthropic, Gemini, Groq, LLM Evaluation & Guardrails",
  },
  {
    category: "Infra & QA",
    items: "Vercel, Docker, GitHub Actions, AWS S3, Vitest, Jest, Playwright, Cypress",
  },
];
