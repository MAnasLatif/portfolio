import TbBrandGithub from "@mal-icons/react/tb/TbBrandGithub";
import TbLink from "@mal-icons/react/tb/TbLink";
import type { Metadata } from "next";

import { projects } from "@/lib/portfolio-content";

export const metadata: Metadata = {
  title: "Projects | M. Anas Latif",
  description:
    "Selected product software, interface systems, AI tools, and developer infrastructure by M. Anas Latif.",
};

const previewStyles = [
  {
    shell: "bg-[#d7ff3f] text-[#0b1305]",
    accent: "bg-[#0b1305]",
    muted: "bg-[#0b1305]/16",
  },
  {
    shell: "bg-[#e8e6df] text-[#12141a]",
    accent: "bg-[#2368ff]",
    muted: "bg-[#12141a]/12",
  },
  {
    shell: "bg-[#e95b36] text-[#180b07]",
    accent: "bg-[#180b07]",
    muted: "bg-[#180b07]/15",
  },
] as const;

function ProjectPreview({ index, name }: { index: number; name: string }) {
  const style = previewStyles[index % previewStyles.length];

  return (
    <div
      className={`relative isolate h-full min-h-52 overflow-hidden ${style.shell}`}
      aria-hidden="true"
    >
      <span className="absolute right-5 top-4 font-mono text-[9px] font-bold uppercase tracking-[0.22em] opacity-55">
        Demo / 0{index + 1}
      </span>
      <div className="absolute inset-x-6 bottom-6 top-12 border border-current/25 bg-white/8 p-4 shadow-2xl sm:inset-x-9 sm:bottom-8">
        <div className="flex items-center justify-between border-b border-current/20 pb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em]">
            {name}
          </span>
          <span className={`h-2 w-2 ${style.accent}`} />
        </div>
        <div className="mt-4 grid grid-cols-[0.65fr_1.35fr] gap-3">
          <div className="space-y-2">
            <div className={`h-2 w-4/5 ${style.muted}`} />
            <div className={`h-2 w-full ${style.muted}`} />
            <div className={`h-2 w-3/5 ${style.muted}`} />
          </div>
          <div className="grid grid-cols-3 items-end gap-2 border-l border-current/20 pl-3">
            <div className={`h-8 ${style.muted}`} />
            <div className={`h-14 ${style.accent}`} />
            <div className={`h-10 ${style.muted}`} />
          </div>
        </div>
      </div>
      <span className="absolute -bottom-5 -left-1 text-[5rem] font-black uppercase leading-none opacity-7">
        {index === 0 ? "Build" : index === 1 ? "Think" : "Run"}
      </span>
    </div>
  );
}

function ProjectDetails({ index }: { index: number }) {
  const project = projects[index];

  return (
    <div className="flex flex-col p-6 sm:p-7">
      <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-white/28">
        {index === 0 ? "Featured project" : project.eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
        {project.name}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-white/48">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="border border-white/14 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-white/42"
          >
            {technology}
          </span>
        ))}
      </div>
      <div className="-mx-6 -mb-6 mt-5 flex min-h-13 items-center gap-7 border-t border-white/12 bg-white/5 px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/38 sm:-mx-7 sm:-mb-7 sm:px-7">
        <span className="inline-flex items-center gap-2">
          <TbBrandGithub size={17} /> Code
        </span>
        <span className="inline-flex items-center gap-2">
          <TbLink size={17} /> Preview
        </span>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="relative z-10 mx-auto max-w-360 px-5 pb-24 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-32">
      <header className="relative overflow-hidden pb-12 sm:pb-16">
        <p className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-white/35">
          <span className="h-px w-5 bg-white/30" /> Projects / 001
        </p>
        <h1 className="mt-5 text-5xl font-black leading-none text-white sm:text-7xl">
          Projects
        </h1>
        <p className="mt-5 max-w-2xl border-l border-white/25 pl-4 text-sm leading-6 text-white/48 sm:text-base">
          Demo explorations across product engineering, AI workflows, and
          operations. Real case studies and working previews will replace them
          as they become available.
        </p>
        <span className="pointer-events-none absolute -right-5 -top-7 -z-10 hidden text-[10rem] font-black leading-none text-white/3 md:block">
          Work
        </span>
      </header>
      <section aria-labelledby="featured-project">
        <h2 id="featured-project" className="sr-only">
          Featured project
        </h2>
        <article className="grid overflow-hidden border border-white/16 bg-[#0a0d12]/88 lg:grid-cols-[1.25fr_0.75fr]">
          <ProjectDetails index={0} />
          <ProjectPreview index={0} name={projects[0].name} />
        </article>
      </section>
      <section
        aria-labelledby="more-projects"
        className="mt-3 grid gap-3 md:grid-cols-2"
      >
        <h2 id="more-projects" className="sr-only">
          More projects
        </h2>
        {projects.slice(1).map((project, offset) => {
          const index = offset + 1;
          return (
            <article
              key={project.name}
              className="overflow-hidden border border-white/16 bg-[#0a0d12]/88"
            >
              <div className="h-56 sm:h-64">
                <ProjectPreview index={index} name={project.name} />
              </div>
              <ProjectDetails index={index} />
            </article>
          );
        })}
      </section>
    </main>
  );
}
