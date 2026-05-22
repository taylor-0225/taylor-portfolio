import Link from "next/link";
import { Button } from "./basic/button";

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
            <Button>
              <a href="mailto:solomon226@hotmail.com">
                Start a conversation
              </a>              
            </Button>                          
            
            <Button variant="secondary">
              <a href="#services">
                  Learn about services
              </a>            
            </Button>
            
          </div>
        </div>
      </div>
    </section>
  );
}
