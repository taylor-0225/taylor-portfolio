const projects = [
  {
    name: "Design system & app shell",
    detail: "React · TypeScript · Storybook",
  },
  {
    name: "API platform migration",
    detail: "Node · PostgreSQL · Docker",
  },
  {
    name: "Marketing site rebuild",
    detail: "Next.js · Tailwind · CMS",
  },
];

export function PortfolioTeaser() {
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
          Replace these placeholders with case studies, screenshots, and links
          to live work.
        </p>

        <ul className="mt-12 space-y-4">
          {projects.map((p) => (
            <li
              key={p.name}
              className="flex flex-col justify-between gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-5 sm:flex-row sm:items-center"
            >
              <span className="font-medium text-white">{p.name}</span>
              <span className="text-sm text-zinc-500">{p.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
