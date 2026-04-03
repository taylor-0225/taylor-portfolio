const groups = [
  {
    title: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Go",
      "SQL",
    ],
  },
  {
    title: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Fastify",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Docker",
      "AWS",
      "Kubernetes",
      "CI/CD",
      "Terraform",
    ],
  },
  {
    title: "Testing & quality",
    items: ["Playwright", "Vitest", "ESLint", "Prettier"],
  },
];

export function TechStack() {
  return (
    <section
      id="stack"
      className="border-t border-white/5 bg-[#05060a] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400/90">
          Technology stack
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Modern tools, proven technologies
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Continuous learning—from fundamentals to what ships best in production
          today.
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item}>
                    <span className="inline-flex rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          <span className="text-cyan-400/80">View full stack</span> — customise
          this list to match your real experience.
        </p>
      </div>
    </section>
  );
}
