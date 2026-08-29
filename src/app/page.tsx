import LuArrowRight from "@mal-icons/react/lu/LuArrowRight";
import LuExternalLink from "@mal-icons/react/lu/LuExternalLink";
import Link from "next/link";

import {
  articles,
  principles,
  projects,
  skills,
} from "@/lib/portfolio-content";

import { HeroHeader } from "./_components/hero-header";
import { SectionHeading } from "./_components/section-heading";

export default function HomePage() {
  return (
    <main>
      <HeroHeader />

      <section className="relative z-10 mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          index="01"
          eyebrow="Technical range"
          title="Skills & technologies"
          description="A product-minded toolkit for moving from an ambiguous problem to a maintainable digital product."
        />
        <div className="mt-14 grid gap-px border-y border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, skillIndex) => (
            <article
              key={skill.name}
              className="bg-[#03050a] px-0 py-8 sm:px-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
                {String(skillIndex + 1).padStart(2, "0")} / {skill.name}
              </p>
              <ul className="mt-7 space-y-3">
                {skill.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="flex items-center justify-between border-b border-white/7 pb-3 text-lg font-semibold text-white/74 last:border-0"
                  >
                    {technology}
                    <span className="size-1 bg-white/25" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-[#080a0f]/88 text-white backdrop-blur-sm">
        <div className="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-8 border-t border-white/12 pt-8 lg:grid-cols-[0.55fr_1.45fr]">
            <div className="flex items-start gap-4 font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
              <span>02</span>
              <span>Selected work</span>
            </div>
            <div>
              <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] sm:text-6xl">
                Open-source projects
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/48">
                Current experiments and reusable systems across product
                software, agent workflows, interfaces, and developer
                infrastructure.
              </p>
            </div>
          </div>

          <div className="mt-14 grid border-t border-white/12 md:grid-cols-2">
            {projects.slice(0, 4).map((project, index) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group min-h-80 border-b border-white/12 py-8 md:odd:border-r md:odd:pr-8 md:even:pl-8"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                  <span>
                    0{index + 1} / {project.eyebrow}
                  </span>
                  <LuExternalLink
                    className="transition-transform group-hover:translate-x-1"
                    size={14}
                  />
                </div>
                <h3 className="mt-12 text-3xl font-black uppercase leading-none sm:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-5 max-w-xl leading-7 text-white/45">
                  {project.description}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="border border-white/14 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/55"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
          <div className="mt-10 flex justify-end">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border-b border-white/60 pb-1 text-sm font-bold uppercase tracking-[0.12em] text-white/70"
            >
              View all projects
              <LuArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          index="03"
          eyebrow="Field notes"
          title="Writing in progress"
          description="Original notes on building software that is useful, understandable, and resilient after launch."
        />
        <div className="mt-14 border-t border-white/10">
          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/blogs/${article.slug}`}
              className="group grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[80px_1fr_auto] sm:items-center"
            >
              <span className="font-mono text-xs text-white/25">
                0{index + 1}
              </span>
              <span>
                <span className="block text-xl font-bold text-white/82 transition-colors group-hover:text-white sm:text-2xl">
                  {article.title}
                </span>
                <span className="mt-2 block max-w-2xl text-sm leading-6 text-white/40">
                  {article.summary}
                </span>
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/28">
                {article.readTime}
                <LuArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-end">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 border-b border-white/60 pb-1 text-sm font-bold uppercase tracking-[0.12em] text-white/70"
          >
            Read all notes
            <LuArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-[#080a0f]/85">
        <div className="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <SectionHeading
            index="04"
            eyebrow="Working principles"
            title="Ideas worth keeping close"
            description="A small set of operating beliefs collected from building, reviewing, and maintaining software."
          />
          <div className="mt-14 grid gap-px bg-white/10 lg:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="min-h-72 bg-[#080a0f] p-8"
              >
                <p className="font-mono text-[10px] text-white/25">
                  {principle.number}
                </p>
                <h3 className="mt-16 text-2xl font-bold leading-tight text-white/85">
                  {principle.title}
                </h3>
                <p className="mt-4 leading-7 text-white/42">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
