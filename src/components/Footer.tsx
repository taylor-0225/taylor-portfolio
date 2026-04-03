import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Taylor. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-zinc-400">
          <Link href="#" className="hover:text-white">
            LinkedIn
          </Link>
          <Link href="#" className="hover:text-white">
            GitHub
          </Link>
          <Link href="mailto:hello@example.com" className="hover:text-white">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
