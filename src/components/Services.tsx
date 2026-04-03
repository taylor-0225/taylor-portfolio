const services = [
  {
    title: "Legacy modernisation",
    body: "Evolve aging systems with clearer architectures. Migrations, refactors, and cloud-ready paths while preserving business rules.",
  },
  {
    title: "Greenfield development",
    body: "New products with React, Next.js, Node, and cloud primitives—structured for scale, testing, and long-term maintenance.",
  },
  {
    title: "Technical consulting",
    body: "Architecture reviews, stack choices, code quality, and mentoring so your team ships with confidence.",
  },
  {
    title: "Microservices & data",
    body: "Smaller services, clearer boundaries, and data flows—from APIs and events to pipelines and observability.",
  },
  {
    title: "Code & data migrations",
    body: "Planned moves between platforms and databases with validation, rollback thinking, and minimal downtime.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-white/5 bg-[#05060a] py-20 sm:py-28">
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
              key={s.title}
              className="group flex flex-col rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition hover:border-cyan-500/20 hover:from-white/[0.06]"
            >
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {s.body}
              </p>
              <span className="mt-6 text-sm font-medium text-cyan-400/90 opacity-80 transition group-hover:opacity-100">
                Learn more →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
