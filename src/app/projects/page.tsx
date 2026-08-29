import type { Metadata } from "next";

import { projects } from "@/lib/portfolio-content";

import { PageIntro } from "../_components/page-intro";

export const metadata: Metadata = {
  title: "Projects | M. Anas Latif",
  description:
    "Selected product software, interface systems, AI tools, and developer infrastructure by M. Anas Latif.",
};

export default function ProjectsPage() {
  return (
    <main className="relative z-10">
      <PageIntro
        index="02"
        eyebrow="Selected work"
        title="Projects"
        description="Demo project entries across application engineering, AI workflows, and product operations. Real case studies will be added soon."
      >
        <div className="mt-12 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/38">
          <span className="border border-white/14 px-3 py-2">
            {projects.length} demos
          </span>
          <span className="border border-white/14 px-3 py-2">
            Case studies coming soon
          </span>
        </div>
      </PageIntro>

      <section className="mx-auto max-w-360 px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <h2 className="sr-only">Demo projects</h2>
        <div className="border-t border-white/12">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="grid gap-6 border-b border-white/12 py-10 sm:grid-cols-[56px_minmax(0,1fr)_auto] sm:items-start"
            >
              <span className="font-mono text-[10px] text-white/20">
                0{index + 1}
              </span>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/28">
                  {project.eyebrow}
                </p>
                <h3 className="mt-3 text-3xl font-black leading-none text-white/88 sm:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-5 max-w-3xl text-base leading-7 text-white/44">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-white/14 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/45"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/25 sm:pt-1">
                {project.status}
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
