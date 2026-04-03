import Link from "next/link";

export function CTA() {
  return (
    <section id="contact" className="border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-[#0a1628] to-violet-900/20 px-8 py-14 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-violet-500/15 blur-3xl" />
          <h2 className="relative max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Ready to level up your product?
          </h2>
          <p className="relative mt-4 max-w-xl text-zinc-300">
            Whether you are modernising a core system or starting something new,
            I would love to hear what you are building.
          </p>
          <div className="relative mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="mailto:hello@example.com"
              className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-500 px-8 text-sm font-semibold text-[#07080c] shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
            >
              Start a conversation
            </Link>
            <Link
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Learn about services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
