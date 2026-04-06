"use client";

import { useEffect, useState } from "react";

type Project = {
  id: string;
  badge: string;
  name: string;
  year: number;
  weeks: number;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
};

const projects: Project[] = [
  {
    id: "ecommerce-analytics",
    badge: "E-commerce",
    name: "E-commerce Analytics Platform",
    year: 2022,
    weeks: 12,
    challenge:
      "A major Singapore marketplace needed a real-time insights dashboard processing thousands of daily transactions.",
    solution:
      "Built a reactive analytics platform using React and optimised database queries for real-time reporting.",
    results: [
      "Real-time analytics across key metrics",
      "3k+ daily transactions processed smoothly",
      "Sub-second responsive query times",
      "99.9% uptime on core dashboards",
    ],
    stack: ["React", "TypeScript", "Storybook", "Node.js"],
  },
  {
    id: "vehicle-rental",
    badge: "Automotive",
    name: "Vehicle Rental Platform Enhancement",
    year: 2025,
    weeks: 16,
    challenge:
      "A vehicle rental company's custom system managing cars, vans, and HGVs needed modernisation and new booking features.",
    solution:
      "Enhanced the IRIS system with a modern JavaScript frontend and optimised booking algorithms.",
    results: [
      "40% increase in completed bookings",
      "Real-time fleet availability",
      "Fully mobile-responsive flows",
      "Automated invoicing pipeline",
    ],
    stack: ["Node.js", "PostgreSQL", "Docker", "Playwright"],
  },
  {
    id: "onboarding-crm",
    badge: "Hospitality",
    name: "Automated Onboarding CRM",
    year: 2024,
    weeks: 8,
    challenge:
      "A national inn management company needed to reduce landlord onboarding time from weeks to days.",
    solution:
      "Rapid development of a custom CRM using the TALL stack with automated document processing.",
    results: [
      "95% reduction in onboarding time",
      "Automated compliance checks",
      "Digital contract management",
      "Real-time status tracking",
    ],
    stack: ["Laravel", "Livewire", "Alpine.js", "Tailwind", "Filament"],
  },
  {
    id: "nft-polkadot",
    badge: "Web3",
    name: "NFT marketplace on Polkadot",
    year: 2022,
    weeks: 12,
    challenge:
      "The Polkadot ecosystem needed an NFT marketplace for creators and collectors with a smooth UX.",
    solution:
      "Developed an NFT marketplace on the Polkadot network with wallet integration and listing flows.",
    results: [
      "Strong community engagement growth",
      "Expanded holder participation",
      "Stable listing and trade flows",
      "Ongoing feature iteration with feedback",
    ],
    stack: ["Vue.js", "TypeScript", "Vue 3", "Tailwind CSS"],
  },
];

function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-title-${project.id}`}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close project details"
        onClick={onClose}
      />

      <div
        className="relative max-h-[min(90vh,880px)] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-800/80 bg-[#0b1120] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Starry background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.35), transparent),
              radial-gradient(1px 1px at 60% 70%, rgba(147,197,253,0.4), transparent),
              radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.25), transparent),
              radial-gradient(1px 1px at 40% 80%, rgba(125,211,252,0.35), transparent),
              radial-gradient(1px 1px at 10% 90%, rgba(255,255,255,0.2), transparent)
            `,
            backgroundSize: "100% 100%",
          }}
        />

        <div className="relative px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300">
                {project.badge}
              </span>
              <h2
                id={`project-title-${project.id}`}
                className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                {project.name}
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                {project.year} · {project.weeks} weeks
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
            >
              Close
            </button>
          </div>

          <div className="mt-10 space-y-8">
            <section>
              <h3 className="text-sm font-semibold text-white">Challenge</h3>
              <div className="mt-3 rounded-xl border border-slate-800/90 border-l-4 border-l-sky-500 bg-slate-900/70 px-4 py-4 text-sm leading-relaxed text-slate-100">
                {project.challenge}
              </div>
            </section>

            <section>
              <h3 className="text-sm font-semibold text-white">Solution</h3>
              <div className="mt-3 rounded-xl border border-emerald-900/50 border-l-4 border-l-emerald-500 bg-emerald-950/35 px-4 py-4 text-sm leading-relaxed text-slate-100">
                {project.solution}
              </div>
            </section>

            <section>
              <h3 className="text-sm font-semibold text-white">Results</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {project.results.map((line) => (
                  <div
                    key={line}
                    className="flex gap-3 rounded-xl border border-emerald-900/40 bg-emerald-950/25 px-3 py-3"
                  >
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                    <p className="text-xs leading-snug text-slate-200">{line}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-sm font-semibold text-white">
                Technology Stack
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700/80 bg-slate-900/90 px-3 py-1.5 text-xs font-medium text-slate-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortfolioTeaser() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400/90">
          Portfolio
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Selected work
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Case studies with context, approach, and outcomes—click a project for
          the full story.
        </p>

        <ul className="mt-12 space-y-4">
          {projects.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => setActive(p)}
                className="flex w-full flex-col justify-between gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-5 text-left transition hover:border-cyan-500/25 hover:bg-white/[0.04] sm:flex-row sm:items-center"
              >
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {p.badge}
                  </span>
                  <span className="mt-1 block font-medium text-white">
                    {p.name}
                  </span>
                </div>
                <span className="text-sm text-zinc-500">
                  {p.year} · {p.weeks} weeks ·{" "}
                  <span className="text-cyan-400/90">View details</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ProjectDetailModal
        project={active}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
