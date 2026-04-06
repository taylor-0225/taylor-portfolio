"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ROTATING = [" Innovation", " Excellence", " Solutions"];
const typeWriteSpeed = 100;

export function Hero() {
  const [b, setB] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const t = setInterval(() => {setB((n) => (n + 1) % ROTATING.length); setDisplayText('')} , 3200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let i = 0;
    console.log('txt', ROTATING[b])
    const typeWriter = () => {
      if ( i < ROTATING[b].length ) {
        setDisplayText(prevTxt => prevTxt + ROTATING[b].charAt(i));
        console.log(i, ROTATING[b].charAt(i))
        setTimeout(typeWriter, typeWriteSpeed)
      }
      i++;
    }

    typeWriter()
  }, [b])

  
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-violet-600/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-widest text-zinc-400">
          Enterprise software &amp; full-stack development
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          Engineering{" "}
          <span className="relative inline-block min-h-[1.15em] text-cyan-400">
            <span key={displayText} className="inline-block">
              {displayText}
            </span>
            <span
              className="ml-0.5 inline-block font-light text-cyan-300/90"
              style={{ opacity: showCursor ? 1 : 0 }}
            >
              |
            </span>
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          Transform legacy systems and build modern solutions with focused
          technical expertise. From APIs to interfaces, I deliver reliable
          software that moves your product forward.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="#services"
            className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-500 px-8 text-sm font-semibold text-[#07080c] shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
          >
            Explore services
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10"
          >
            View portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
