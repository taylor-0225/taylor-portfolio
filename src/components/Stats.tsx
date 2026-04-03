const stats = [
  { value: "10+", label: "Years experience" },
  { value: "40+", label: "Technologies" },
  { value: "100%", label: "Commitment" },
];

export function Stats() {
  return (
    <section className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400/90">
          Why work with me
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Built on experience, driven by craft
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-8 text-center sm:text-left"
            >
              <p className="text-4xl font-semibold tabular-nums text-cyan-400 sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-400">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Delivery you can trust
            </h3>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              Clear communication, predictable milestones, and code that your
              team can own. I focus on outcomes—performance, reliability, and
              maintainability—not just tickets closed.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              Full-stack perspective
            </h3>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              From databases and APIs to polished UIs, I connect the layers so
              features work as a system. Fewer hand-offs, fewer surprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
