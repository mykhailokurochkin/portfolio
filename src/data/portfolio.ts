export type ProjectCategory = "Full-Stack" | "Frontend" | "Backend";

export interface FeaturedProject {
  id: "ai-math-tutor" | "liftory" | "dotapilot";
  title: string;
  tagline: string;
  category: string;
  year: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  repoNote?: string;
  featuredWide?: boolean;
}

export interface ArchiveProject {
  title: string;
  year: string;
  category: ProjectCategory;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  summary: string;
  bullets: string[];
  stack: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface StackGroup {
  label: string;
  items: string[];
}

export const SITE_CONFIG = {
  name: "Mykhailo Kurochkin",
  shortName: "MK",
  role: "Full-Stack & AI Engineer",
  headline: "Building fast web products & reliable AI systems.",
  subheadline:
    "Full-Stack Engineer specializing in TypeScript, Next.js, Node.js/NestJS, PostgreSQL, and practical LLM workflows. I ship end-to-end web apps, high-converting e-commerce, and deterministic AI tooling from architecture to production.",
  availability: "Available for freelance & full-stack roles",
  location: "Ukraine · Remote",
  email: "kurochkinmy@gmail.com",
  github: "https://github.com/mykhailokurochkin",
  linkedin: "https://linkedin.com/in/mykhailo-kurochkin",
  signals: [
    "Next.js / React",
    "Node.js / NestJS",
    "PostgreSQL / Supabase",
    "LangGraph / LLMs",
    "TypeScript",
  ],
} as const;

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "ai-math-tutor",
    title: "AI Math Tutor",
    tagline: "Neuro-Symbolic Algebra Tutor with Zero Math Hallucinations",
    category: "AI Systems · Monorepo",
    year: "2026",
    featuredWide: true,
    description:
      "An interactive algebra tutor that pairs deterministic Computer Algebra System (CAS) verification with a LangGraph state machine. Every student step is verified symbolically before the LLM responds, preventing premature answer leaks and math hallucinations.",
    highlights: [
      "Compiled LangGraph StateGraph pipeline: normalize → symbolic CAS verify → pedagogical FSM → Socratic LLM → leakage guardrail.",
      "Classifies specific reasoning errors (distributive property, sign flip, isolation) and escalates hints across 3 Socratic levels (L1–L3).",
      "Shared zero-DOM tutor harness package built for web and future mobile clients, with an interactive Reviewer Trace Inspector.",
    ],
    stack: [
      "Next.js 15",
      "TypeScript",
      "LangGraph",
      "CortexJS CAS",
      "Groq",
      "KaTeX",
      "Vitest",
    ],
    liveUrl: "https://ai-math-tutor-sable.vercel.app",
    githubUrl: "https://github.com/mykhailokurochkin/ai-math-tutor",
  },
  {
    id: "liftory",
    title: "Liftory",
    tagline: "Offline-First Strength Training PWA for iPhone & Mac",
    category: "Full-Stack Product",
    year: "2026",
    description:
      "A personal workout journal engineered for zero-friction logging in the gym—even without signal. Uses an IndexedDB outbox queue for instant offline mutations that sync seamlessly to PostgreSQL once reconnected.",
    highlights: [
      "Offline-first architecture with IndexedDB persistence, outbox reconciliation, and optimistic UI.",
      "Full-stack Turborepo monorepo combining Next.js App Router, NestJS / serverless handlers, Drizzle ORM, and Neon Postgres.",
      "Protected with Better Auth and covered by Vitest unit suites plus Playwright end-to-end tests.",
    ],
    stack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "IndexedDB",
      "Better Auth",
      "Playwright",
    ],
    liveUrl: "https://liftory-app.vercel.app",
    repoNote: "Private Repo · Case Study",
  },
  {
    id: "dotapilot",
    title: "DotaPilot",
    tagline: "Real-Time AI Coach & Native macOS HUD Overlay for Dota 2",
    category: "Systems · Real-Time AI",
    year: "2026",
    description:
      "A 100% VAC-safe real-time match assistant built on Valve's official Game State Integration (GSI) HTTP protocol. Streams match telemetry to a stealth native macOS micro-dock overlay and generates macro advice during respawn.",
    highlights: [
      "Native Objective-C (Cocoa + WebKit) click-through micro-dock overlay (370×450px) running at ~0% CPU on Apple Silicon.",
      "Autonomous local match timer synced via Server-Sent Events (SSE) with instant pause detection and objective toasts.",
      "Tavern Mode automatically surfaces Gemini AI itemization and map-control guidance while the hero is respawning.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Objective-C",
      "Cocoa / WebKit",
      "Valve GSI",
      "SSE",
      "Gemini API",
    ],
    githubUrl: "https://github.com/mykhailokurochkin/dotapilot",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Full-Stack & AI Engineer",
    company: "Inforce",
    period: "Apr 2026 — Present",
    type: "Full-time",
    summary:
      "Building full-stack web applications, internal LLM evaluation dashboards, and diagnostic pipelines for frontier coding models.",
    bullets: [
      "Built and maintained full-stack applications and internal trace-inspection tooling with React, TypeScript, Node.js, and NestJS.",
      "Engineered diagnostic pipelines and penalty rubrics to audit multi-step LLM reasoning trajectories and isolate logic or dependency hallucinations.",
      "Optimized backend APIs and PostgreSQL queries, cutting server response times by 35%, and led technical discovery demos that helped close 3 corporate contracts.",
    ],
    stack: ["React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "LLM Evaluation"],
  },
  {
    role: "Full-Stack Engineer",
    company: "Freelance E-Commerce",
    period: "Feb 2026 — Mar 2026",
    type: "Contract",
    summary:
      "Architected and launched a fast building materials e-commerce platform from scratch with a focus on SEO and mobile conversion.",
    bullets: [
      "Built the storefront and catalog filtering experience using Next.js, TypeScript, and Tailwind CSS, achieving 95+ Google Lighthouse scores.",
      "Integrated secure payment processing and advanced product filtering, lifting mobile conversion rates by 20%.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Payments", "SEO"],
  },
  {
    role: "Full-Stack Developer",
    company: "Coding House",
    period: "Nov 2025 — Jan 2026",
    type: "Full-time",
    summary:
      "Developed multi-tenant web applications on React, Node.js, and Supabase with automated CI/CD and backup infrastructure.",
    bullets: [
      "Designed PostgreSQL schemas and granular Supabase Row-Level Security (RLS) policies with Realtime updates.",
      "Automated release workflows via GitHub Actions, cutting deployment time by 40%, and set up automated AWS S3 backups for databases and media.",
    ],
    stack: ["React", "Node.js", "Supabase", "PostgreSQL", "GitHub Actions", "AWS S3"],
  },
  {
    role: "Lead Frontend & Full-Stack Developer",
    company: "Snippetly & Independent Freelance",
    period: "Aug 2024 — Nov 2025",
    type: "Remote / Freelance",
    summary:
      "Led frontend architecture for Snippetly (Sep–Nov 2025) and delivered end-to-end web apps and automation tools for independent clients.",
    bullets: [
      "Owned frontend architecture, state management, and testing workflows (Jest, Cypress) for a remote code-sharing product.",
      "Delivered custom landing pages, full-stack web apps, and API integrations using React, Next.js, Node.js, Express, and PostgreSQL.",
    ],
    stack: ["React", "Next.js", "Redux", "Express", "PostgreSQL", "Cypress"],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "mvp",
    number: "01",
    title: "Full-Stack Web Apps & MVPs",
    description:
      "End-to-end product engineering from database schema and auth to a polished React / Next.js interface—ready for real users.",
    deliverables: [
      "Next.js / React + TypeScript",
      "Node.js / NestJS / PostgreSQL",
      "Auth, roles & clean APIs",
    ],
  },
  {
    id: "ecommerce",
    number: "02",
    title: "High-Speed E-Commerce & Storefronts",
    description:
      "Fast, SEO-friendly storefronts and landing pages built for conversion, smooth filtering, and 95+ Lighthouse performance.",
    deliverables: [
      "SSR / ISR & technical SEO",
      "Payment gateway integration",
      "Mobile-first checkout UX",
    ],
  },
  {
    id: "ai",
    number: "03",
    title: "AI Features & Reliable LLM Systems",
    description:
      "Practical AI integrations that actually behave in production—structured outputs, state machines, guardrails, and evaluation.",
    deliverables: [
      "LangGraph / OpenAI / Gemini / Groq",
      "Deterministic checks & guardrails",
      "Streaming UI & trace inspection",
    ],
  },
  {
    id: "infra",
    number: "04",
    title: "Backend, Security & Deployment",
    description:
      "Database architecture, Supabase RLS, automated CI/CD pipelines, and performance tuning for existing codebases.",
    deliverables: [
      "PostgreSQL / Supabase RLS",
      "Docker, GitHub Actions & AWS S3",
      "Query & API latency optimization",
    ],
  },
];

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  {
    title: "Questify",
    year: "2026",
    category: "Full-Stack",
    description:
      "Full-stack quiz builder supporting boolean, input, and multi-choice questions with Zod validation and Prisma.",
    stack: ["Next.js", "NestJS", "Prisma", "Tailwind"],
    liveUrl: "https://questify-nu-five.vercel.app",
    githubUrl: "https://github.com/mykhailokurochkin/questify",
  },
  {
    title: "Cartly",
    year: "2026",
    category: "Frontend",
    description:
      "High-performance Next.js 15 checkout experience with ISR, real-time promo codes, Zod validation, and error boundaries.",
    stack: ["Next.js 15", "TypeScript", "Zod", "Tailwind"],
    liveUrl: "https://cartly-app-delta.vercel.app",
    githubUrl: "https://github.com/mykhailokurochkin/cartly-app",
  },
  {
    title: "BookMe",
    year: "2025",
    category: "Full-Stack",
    description:
      "Meeting room booking system featuring JWT refresh-token authentication and admin/user role-based access control.",
    stack: ["React", "Express", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/mykhailokurochkin/bookme",
  },
  {
    title: "NeoWallet",
    year: "2026",
    category: "Frontend",
    description:
      "Mobile-first wallet interface with smart transaction grouping, card limit visualization, and seasonal daily points.",
    stack: ["Next.js", "TypeScript", "Tailwind v4"],
    liveUrl: "https://neowallet-roan.vercel.app",
    githubUrl: "https://github.com/mykhailokurochkin/neowallet",
  },
  {
    title: "Book Directory API",
    year: "2026",
    category: "Backend",
    description:
      "Production-style REST API with strict Zod schemas, Helmet security headers, rate limiting, mappers, and Prisma migrations.",
    stack: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/mykhailokurochkin/book-directory-api",
  },
  {
    title: "TimeWise",
    year: "2025",
    category: "Full-Stack",
    description:
      "Interactive calendar and event scheduler with priority organization, search, and authentication.",
    stack: ["Next.js", "TypeScript", "Prisma"],
    githubUrl: "https://github.com/mykhailokurochkin/timewise",
  },
  {
    title: "Handset Hub",
    year: "2025",
    category: "Frontend",
    description:
      "Responsive SPA phone catalog with filtering, sorting, cart/favorites state, and modular component architecture.",
    stack: ["React", "TypeScript", "SCSS"],
    liveUrl: "https://handset-hub.vercel.app",
    githubUrl: "https://github.com/mykhailokurochkin/handset-hub",
  },
  {
    title: "Monblan Project",
    year: "2026",
    category: "Frontend",
    description:
      "Responsive social feed dashboard with instant Grid/List switching and custom Flatpickr date-range filtering.",
    stack: ["Vanilla JS", "HTML5", "CSS3", "Vite"],
    liveUrl: "https://monoblanproject.vercel.app",
    githubUrl: "https://github.com/mykhailokurochkin/monoblanproject",
  },
];

export const STACK_GROUPS: StackGroup[] = [
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "TanStack Query",
      "HTML5 / CSS3",
    ],
  },
  {
    label: "Backend & Data",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "PostgreSQL",
      "Supabase (RLS & Realtime)",
      "Drizzle / Prisma",
      "REST / SSE",
    ],
  },
  {
    label: "AI & LLM Systems",
    items: [
      "LangGraph",
      "OpenAI / Anthropic / Gemini / Groq",
      "LLM Evaluation & Diagnostics",
      "Structured Outputs",
      "Symbolic Verification",
      "Prompt Engineering",
    ],
  },
  {
    label: "Cloud, DevOps & Testing",
    items: [
      "Vercel",
      "Docker",
      "GitHub Actions",
      "AWS S3",
      "Vitest / Jest",
      "Playwright / Cypress",
      "Git / Linux",
    ],
  },
];
