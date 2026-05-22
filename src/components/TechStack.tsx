import { Badge } from "./basic/badge";
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { AWSIcon, BashIcon, DockerIcon, ExpressIcon, GCPIcon, GitIcon, GitLabIcon, LinuxIcon, MongoDBIcon, MySQLIcon, NestIcon, NextIcon, NodeIcon, NuxtIcon, PostgreSQLIcon, ReactIcon, ReactNativeIcon, RedisIcon, TailwindIcon, TypescriptIcon, VueIcon } from "./svg";

const groups = [
  {key: "Git", icon: <GitIcon/>},
  {key: "MongoDB", icon: <MongoDBIcon/>},
  {key: "React Native", icon: <ReactNativeIcon/>},
  {key: "Vue.js", icon: <VueIcon/>},
  {key: "Linux", icon: <LinuxIcon/>},
  {key: "Nuxt.js", icon: <NuxtIcon/>},
  {key: "Redis", icon: <RedisIcon/>},
  {key: "GitHub", icon: <GitHubLogoIcon/>},
  {key: "Node.js", icon: <NodeIcon/>},
  {key: "PostgreSQL", icon: <PostgreSQLIcon/>},
  {key: "Tailwind CSS", icon: <TailwindIcon/>},
  {key: "GitLab", icon: <GitLabIcon/>},
  {key: "MySQL", icon: <MySQLIcon/>},
  {key: "Nest.js", icon: <NestIcon/>},
  {key: "React", icon: <ReactIcon/>},
  {key: "Bash", icon: <BashIcon/>},
  {key: "Express.js", icon: <ExpressIcon/>},
  {key: "Next.js", icon: <NextIcon/>},
  {key: "Docker", icon: <DockerIcon/>},
  {key: "TypeScript", icon: <TypescriptIcon/>},
  {key: "AWS", icon: <AWSIcon/>},
  {key: "GCP", icon: <GCPIcon/>}
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

        <div className="mt-14 flex flex-wrap gap-2">
          {groups.map((g) => (
            <Badge 
              key={g.key}
              variant="secondary"
              className="gap-1.5 px-3 py-1.5 text-sm rounded-full bg-muted/60 text-muted-foreground border border-border" 
              icon={g.icon}
            >{g.key}</Badge>
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
