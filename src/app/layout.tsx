import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mykhailo Kurochkin — Full-Stack & AI Engineer",
  description:
    "Portfolio of Mykhailo Kurochkin, a Full-Stack & AI Engineer building production web apps, high-speed e-commerce, and deterministic AI systems with Next.js, TypeScript, Node.js/NestJS, and PostgreSQL.",
  keywords: [
    "Mykhailo Kurochkin",
    "Full-Stack Engineer",
    "AI Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Supabase",
    "LangGraph",
    "Freelance Developer",
  ],
  authors: [{ name: "Mykhailo Kurochkin" }],
  openGraph: {
    title: "Mykhailo Kurochkin — Full-Stack & AI Engineer",
    description:
      "End-to-end web applications, high-speed e-commerce, and deterministic AI systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mykhailo Kurochkin — Full-Stack & AI Engineer",
    description:
      "End-to-end web applications, high-speed e-commerce, and deterministic AI systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#09090B] text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
