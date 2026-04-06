"use client";

import { useState } from "react";

type Service = {
  id: string;
  title: string;
  body: string;
  tagline: string;
  bullets: string[];
  timeline: string;
  idealFor: string;
  technologies: string[];
};

const services: Service[] = [
  {
    id: "legacy-modernisation",
    title: "Legacy modernisation",
    body: "Evolve aging systems with clearer architectures. Migrations, refactors, and cloud-ready paths while preserving business rules.",
    tagline:
      "Transform ageing infrastructure into modern, maintainable solutions that scale with your business.",
    bullets: [
      "PHP 4/5 to modern frameworks and runtimes",
      "Database optimisation and restructuring",
      "API development and integration",
      "Zero-downtime style deployment strategies",
      "Performance and reliability improvements",
    ],
    timeline: "8–16 weeks typical (project dependent)",
    idealFor:
      "Products or internal systems built 5+ years ago that are hard to change safely.",
    technologies: ["Laravel", "Next.js", "Node.js", "PostgreSQL", "MySQL"],
  },
  {
    id: "greenfield-development",
    title: "Greenfield development",
    body: "New products with React, Next.js, Node, and cloud primitives—structured for scale, testing, and long-term maintenance.",
    tagline:
      "Design and build new applications from first sketch to first users with a calm, practical approach.",
    bullets: [
      "Product-friendly technical discovery",
      "Component-driven UI with accessible patterns",
      "API and data modelling for future features",
      "CI/CD, environments, and observability from day one",
      "Knowledge transfer so your team can run it",
    ],
    timeline: "6–12 weeks for first meaningful release",
    idealFor:
      "Teams starting something new that still want strong foundations, not throwaway code.",
    technologies: ["React", "Next.js", "Tailwind", "Node.js", "PostgreSQL"],
  },
  {
    id: "technical-consulting",
    title: "Technical consulting",
    body: "Architecture reviews, stack choices, code quality, and mentoring so your team ships with confidence.",
    tagline:
      "Independent, hands-on guidance on the decisions that are hard to change later.",
    bullets: [
      "Architecture and codebase reviews",
      "Stack and tooling selection",
      "Performance investigations and hard bug hunts",
      "Pairing and mentoring with your team",
      "Roadmapping and technical strategy input",
    ],
    timeline: "From 1–2 day deep dives to ongoing engagements",
    idealFor:
      "Leads and founders who want a second set of senior eyes on critical systems.",
    technologies: ["System design", "Review", "Workshops"],
  },
  {
    id: "microservices-data",
    title: "Microservices & data",
    body: "Smaller services, clearer boundaries, and data flows—from APIs and events to pipelines and observability.",
    tagline:
      "Untangle monoliths into services and data flows that match how your business actually works.",
    bullets: [
      "Service boundaries and domain modelling",
      "Event-driven and message-based integrations",
      "Data pipelines, ETL, and reporting feeds",
      "Resilience, retries, and back-pressure handling",
      "Dashboards, logging, and tracing",
    ],
    timeline: "Varies by system size; usually phased over multiple releases",
    idealFor: "Teams hitting the limits of a single codebase or database.",
    technologies: [
      "Node.js",
      "Kafka / queues",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    id: "code-data-migrations",
    title: "Code & data migrations",
    body: "Planned moves between platforms and databases with validation, rollback thinking, and minimal downtime.",
    tagline:
      "Move critical workloads without surprises, with rehearsed plans and clear checkpoints.",
    bullets: [
      "Audit of current systems and data",
      "Migration plan and rehearsal runs",
      "Data validation and reconciliation",
      "Roll-forward and rollback paths",
      "Cutover support and post-move checks",
    ],
    timeline:
      "Typically 4–10 weeks depending on data size and risk profile",
    idealFor:
      "Organisations changing databases, hosting, or major frameworks.",
    technologies: ["PostgreSQL", "MySQL", "ETL tooling", "Cloud platforms"],
  },
];

function ServiceModal({
  service,
  onClose,
}: {
  service: Service | null;
  onClose: () => void;
}) {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8 sm:px-6"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#050814] shadow-2xl">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative border-b border-white/10 bg-white/[0.02] px-6 py-4 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/90">
            {service.title}
          </p>
          <h2 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
            {service.tagline}
          </h2>
        </div>

        <div className="relative grid gap-8 px-6 py-6 sm:px-8 sm:py-7 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
          <div>
            <ul className="space-y-3 text-sm text-zinc-200">
              {service.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-emerald-400" />
                  <span className="leading-relaxed text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 text-sm">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                Typical timeline
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-100">
                {service.timeline}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                Ideal for
              </p>
              <p className="mt-2 text-sm text-zinc-100">{service.idealFor}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                Technologies
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-between border-t border-white/10 bg-[#050814]/95 px-6 py-3 sm:px-8">
          <p className="text-xs text-zinc-500">
            Have questions about whether this fits your situation? Let&apos;s talk it
            through.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-zinc-100 transition hover:bg-white/[0.08]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section
      id="services"
      className="border-t border-white/5 bg-[#05060a] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400/90">
          What I do
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Comprehensive software solutions
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-400">
          From modernising long-lived systems to shipping new experiences—end
          to end, with clarity and care.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.id}
              className="group flex flex-col rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition hover:border-cyan-500/20 hover:from-white/[0.06]"
            >
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {s.body}
              </p>
              <button
                type="button"
                onClick={() => setActive(s)}
                className="mt-6 inline-flex items-center text-sm font-medium text-cyan-400/90 opacity-80 transition hover:opacity-100"
              >
                Learn more ↗
              </button>
            </article>
          ))}
        </div>
      </div>

      <ServiceModal service={active} onClose={() => setActive(null)} />
    </section>
  );
}
