"use client";

import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { DockerIcon, LaravelIcon, MySQLIcon, NodeIcon, PHPIcon, PostgreSQLIcon, ReactIcon, TailwindIcon, TypescriptIcon } from "./svg";
import { ArrowTopRightIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { Badge } from "./basic/badge";
import { Typography } from "./basic/typography";
import { Button } from "./basic/button";

type Project = {
  id: string;
  badge: string;
  name: string;
  year: number;
  weeks: number;
  image: {
    src: string;
    alt: string;
  };
  url?: string;
  challenge: string;
  solution: string;
  results: string[];
  stack: {tech: string, icon: ReactElement | null}[];
};

const projects: Project[] = [
  {
    id: "ecommerce",
    badge: "E-commerce",
    name: "Vinchase - The Best Online Store in Europe",
    year: 2022,
    weeks: 12,
    image: {
      src: "/projects/ecommerce.png",
      alt: "Service detail modal UI screenshot",
    },
    challenge:
      "A major Singapore marketplace needed a real-time insights dashboard processing thousands of daily transactions.",
    solution:
      "",
    results: [
      "Real-time analytics across key metrics",
      "3k+ daily transactions processed smoothly",
      "Sub-second responsive query times",
      "99.9% uptime on core dashboards",
    ],
    stack: [
      {tech: "React", icon: <ReactIcon/>},
      {tech: "TypeScript", icon: <TypescriptIcon/>},      
      {tech: "Node.js", icon: <NodeIcon/>}      
    ],
  },
  {
    id: "real-estate-agency",
    badge: "Real Estate",
    name: "Cooper Brouard | Trusted Estate Agents in Guernsey",
    year: 2025,
    weeks: 16,
    url: "https://www.cooperbrouard.com/",
    image: {
      src: "/projects/real_estate_agency.png",
      alt: "Project case study UI screenshot",
    },
    challenge:
      "A vehicle rental company's custom system managing cars, vans, and HGVs needed modernisation and new booking features.",
    solution:
      "Cooper Brouard is Guernsey’s leading estate agency, offering expert guidance in residential sales, property lettings, and open market transactions. With a reputation built on integrity, local knowledge, and exceptional service, the company has been connecting clients with the perfect homes for over two decades. Specializing in both Open Market and Local Market properties, Cooper Brouard provides tailored solutions to meet the diverse needs of buyers, sellers, and landlords. Their deep understanding of Guernsey’s property laws and neighborhoods ensures clients receive accurate, up-to-date advice every step of the way.",
    results: [
      "40% increase in completed bookings",
      "Real-time fleet availability",
      "Fully mobile-responsive flows",
      "Automated invoicing pipeline",
    ],
    stack: [
      {tech: "Node.js", icon: <NodeIcon/>},
      {tech: "PostgreSQL", icon: <PostgreSQLIcon/>},
      {tech: "Docker", icon: <DockerIcon/>},      
    ],
  },
  {
    id: "yoga_studio_landing",
    badge: "Landing Page",
    name: "Luxury Dubai Yoga Studio - Webflow Web Application",
    year: 2024,
    weeks: 8,
    image: {
      src: "/projects/yoga_studio_landing.png",
      alt: "Project case study UI screenshot",
    },
    url: "https://www.samsaratribe.com/",
    challenge:
      "A national inn management company needed to reduce landlord onboarding time from weeks to days.",
    solution:
      "The Samsara Tribe website is dedicated to a yoga community hub that combines ancient yoga wisdom with modern holistic practices. It offers a range of yoga classes, membership plans with unlimited class access, and an app for easy booking and management of classes. The site also highlights their team of passionate yoga instructors and promotes wellness through community engagement. Our team designed this website in Figma including the style guide and developed it on Webflow, integrating third-party tools for class bookings and management to enhance functionality and user experience",
    results: [
      "95% reduction in onboarding time",
      "Automated compliance checks",
      "Digital contract management",
      "Real-time status tracking",
    ],
    stack: [
      {tech: "PHP", icon: <PHPIcon/>},
      {tech: "Laravel", icon: <LaravelIcon/>},
      {tech: "Tailwind", icon: <TailwindIcon/>},
      {tech: "MySQL", icon: <MySQLIcon/>},      
    
    ],
  },
  {
    id: "brand-landing-page",
    badge: "Landing Page",
    name: "Luxury Coffee Brand B2C/B2B on Webflow",
    year: 2021,
    weeks: 12,
    url: "https://www.flyingpumas.com/",
    image: {
      src: "/projects/flyingpumas.png",
      alt: "Project case study UI screenshot",
    },
    challenge:
      "The Polkadot ecosystem needed an NFT marketplace for creators and collectors with a smooth UX.",
    solution:
      "The Flying Pumas website showcases their specialty coffee business located in the Volcan region of Panama, emphasizing a harmonious blend of premium coffee production with environmental sustainability. The website, designed on Figma and developed on Webflow, features dynamic scroll animations and parallax effects to enhance user engagement. It integrates HubSpot for efficient lead generation and sampler request, supporting the company's outreach and customer relationship management. This setup provides an immersive online experience that aligns with their commitment to quality and ecological responsibility.",
    results: [
      "Strong community engagement growth",
      "Expanded holder participation",
      "Stable listing and trade flows",
      "Ongoing feature iteration with feedback",
    ],
    stack: [
      {tech: "Javascript", icon: null},
      {tech: "HTML", icon: null},
      {tech: "CSS", icon: null},
      {tech: "Python", icon: null},
      {tech: "PostgreSQL", icon: null},      
    ],
  },
];

function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-title-${project.id}`}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close project details"
        onClick={onClose}
      />

      <div
        className="relative max-h-[min(90vh,880px)] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-800/80 bg-[#0b1120] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Starry background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.35), transparent),
              radial-gradient(1px 1px at 60% 70%, rgba(147,197,253,0.4), transparent),
              radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.25), transparent),
              radial-gradient(1px 1px at 40% 80%, rgba(125,211,252,0.35), transparent),
              radial-gradient(1px 1px at 10% 90%, rgba(255,255,255,0.2), transparent)
            `,
            backgroundSize: "100% 100%",
          }}
        />

        <div className="relative px-6 py-8 sm:px-10 sm:py-10">
          <div className="absolute right-0 top-0 pt-8 pr-6">
            <Button                
                variant="secondary"
                onClick={onClose}                
                className="w-full text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                Close
              </Button>
          </div>
          
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300">
                {project.badge}
              </span>
              <h2
                id={`project-title-${project.id}`}
                className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                {project.name}
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                {project.year} · {project.weeks} weeks
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              {project.url ? (
                <Button className="px-8 text-sm font-semibold bg-primary">
                  <a href={project.url} target="_blank">View live</a>
                </Button>
              ) : null}
              
            </div>
          </div>

          <div className="mt-10 space-y-8">
            {project.image ? (
              <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-black/20">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 768px, (min-width: 640px) 80vw, 100vw"
                    priority
                  />
                </div>
              </div>
            ) : null}

            {/* <section>
              <h3 className="text-sm font-semibold text-white">Challenge</h3>
              <div className="mt-3 rounded-xl border border-slate-800/90 border-l-4 border-l-sky-500 bg-slate-900/70 px-4 py-4 text-sm leading-relaxed text-slate-100">
                {project.challenge}
              </div>
            </section> */}

            <section>
              <h3 className="text-sm font-semibold text-white">Description</h3>
              <div className="mt-3 rounded-xl border border-emerald-900/50 border-l-4 border-l-emerald-500 bg-emerald-950/35 px-4 py-4 text-sm leading-relaxed text-slate-100">
                {project.solution}
              </div>
            </section>

            {/* <section>
              <h3 className="text-sm font-semibold text-white">Results</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {project.results.map((line) => (
                  <div
                    key={line}
                    className="flex gap-3 rounded-xl border border-emerald-900/40 bg-emerald-950/25 px-3 py-3"
                  >
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                    <p className="text-xs leading-snug text-slate-200">{line}</p>
                  </div>
                ))}
              </div>
            </section> */}

            <section>
              <h3 className="text-sm font-semibold text-white">
                Technology Stack
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <Badge
                      key={s.tech}
                      icon={s.icon}
                      className="rounded-full border bg-muted/60 text-muted-foreground border border-border px-2.5 py-1"
                    >
                      {s.tech}
                    </Badge>
                  ))}
                </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortfolioTeaser() {
  const [active, setActive] = useState<Project | null>(null);

  const onCardKeyDown = (e: React.KeyboardEvent, p: Project) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(p);
    }
  };

  return (
    <section id="portfolio" className="border-t border-white/5 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto pb-2 w-full flex flex-col">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400/90">
          Portfolio
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Selected work
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Case studies with context, approach, and outcomes—click a project for
          the full story.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              onClick={() => setActive(p)}
              onKeyDown={(e) => onCardKeyDown(e, p)}
              role="button"
              tabIndex={0}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] text-left transition hover:border-cyan-500/25 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            >
              {/* card header section   */}
              <div className="p-6 relative overflow-clip bg-gradient-to-b transition-colors duration-300 from-card to-transparent group-hover:from-(--project-color)">
                <div className="transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="overflow-hidden rounded-md border border-border bg-card shadow-sm">
                    <div className="flex items-center gap-1.5 border-b border-border bg-muted/50 px-2 py-1"> 
                    <div className="flex gap-1"> 
                      <div className="size-1.5 rounded-full bg-muted-foreground/30 transition-colors group-hover:bg-[#FF5F57]"></div> 
                      <div className="size-1.5 rounded-full bg-muted-foreground/30 transition-colors group-hover:bg-[#FEBC2E]"></div> 
                      <div className="size-1.5 rounded-full bg-muted-foreground/30 transition-colors group-hover:bg-[#28C840]"></div> 
                      </div> 
                      <div className="mx-4 flex-1 truncate rounded bg-background/80 px-2 py-px text-center text-[10px] leading-tight text-muted-foreground"> https://guildfy.app </div>
                    </div>

                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img src={p.image.src} alt={p.image.alt} className=""></img>
                    </div>
                  </div>
                </div>
                
              </div>

               {/* card content section   */}
              <div className="flex-1 px-6 pb-6 pt-2 flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-2">
                      {p.year}
                    </p>                 
                  
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Badge
                      key={s.tech}
                      icon={s.icon}
                      className="rounded-full border bg-muted/60 text-muted-foreground border border-border px-2.5 py-1"
                    >
                      {s.tech}
                    </Badge>
                  ))}
                </div>
                
                <Typography variant="p" className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                  {p.solution}
                </Typography>
                <div className="flex items-center gap-1 text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                  <span>
                    View details
                  </span>
                  <ArrowTopRightIcon/>
                  
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={active}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
