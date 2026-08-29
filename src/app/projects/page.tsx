import TbExternalLink from "@mal-icons/react/tb/TbExternalLink";
import type { Metadata } from "next";

import { projects } from "@/lib/portfolio-content";

import { PageIntro } from "../_components/page-intro";

export const metadata: Metadata = {
  title: "Projects | M. Anas Latif",
  description:
    "Selected open-source software, interface systems, AI tools, and developer infrastructure by M. Anas Latif.",
};

export default function ProjectsPage() {
  return (
    <main className="relative z-10">
      <PageIntro
        index="07"
        eyebrow="Selected work"
        title="Projects"
        description="Public work across application engineering, design systems, AI workflows, and developer infrastructure."
      >
        <div className="mt-12 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/38">
          <span className="border border-white/14 px-3 py-2">6 selected</span>
          <span className="border border-white/14 px-3 py-2">Open source</span>
          <span className="border border-white/14 px-3 py-2">
            GitHub verified
          </span>
        </div>
      </PageIntro>

      <section className="mx-auto max-w-360 px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <h2 className="sr-only">Open-source projects</h2>
        <div className="grid border-t border-white/12 lg:grid-cols-2">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-112 flex-col border-b border-white/12 py-9 lg:odd:border-r lg:odd:pr-10 lg:even:pl-10"
            >
              <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                <span>
                  0{index + 1} / {project.eyebrow}
                </span>
                <span className="inline-flex items-center gap-2 transition-transform group-hover:translate-x-1">
                  View
                  <TbExternalLink size={14} />
                </span>
              </div>
              <div className="my-auto py-14">
                <h3 className="max-w-xl text-4xl font-black uppercase leading-[0.95] text-white/88 transition-colors group-hover:text-white sm:text-5xl">
                  {project.name}
                </h3>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/44">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-white/14 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/45"
                  >
                    {technology}
                  </span>
                ))}
                {project.stars > 0 ? (
                  <span className="ml-auto font-mono text-[10px] text-white/30">
                    {project.stars} {project.stars === 1 ? "star" : "stars"}
                  </span>
                ) : null}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
