import Link from "next/link";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#stack", label: "Technology" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <div className="hidden md:block fixed z-[99999] right-0 left-0 top-0 px-6 transition-transform duration-300">
      <header className="w-full flex justify-between items-center mx-auto py-3 px-7 top-2.5 max-w-[768px] bg-muted/50 backdrop-blur-md rounded-full border border-border shadow-lg mt-6">
      
        <Link
          href="/"
          className="font-mono text-base font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Taylor<span className="text-cyan-400">.</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white-400 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-white/10 px-3 py-1.5 text-sm text-zinc-300 [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 top-full z-10 mt-2 min-w-[10rem] rounded-xl border border-white/10 bg-[#0c0e14] py-2 shadow-xl">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-zinc-400 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
        {/* <Link
          href="#contact"
          className="rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-medium text-cyan-300 ring-1 ring-cyan-500/30 transition hover:bg-cyan-500/25"
        >
          Let&apos;s talk
        </Link> */}
      
    </header>
    </div>
    
  );
}
