import TbArrowRight from "@mal-icons/react/tb/TbArrowRight";
import Link from "next/link";

import { articles, projects, skills } from "@/lib/portfolio-content";

import { ContactForm } from "./_components/contact-form";
import { HeroHeader } from "./_components/hero-header";
import { ProductPerspective } from "./_components/product-perspective";
import { SkillsExplorer } from "./_components/skills-explorer";
import { TechnologyMarquee } from "./_components/technology-marquee";

const skillsByTechnologyCount = [...skills].sort(
  (firstSkill, secondSkill) =>
    secondSkill.technologies.length - firstSkill.technologies.length,
);

const technologyCount = new Set(skills.flatMap((skill) => skill.technologies))
  .size;

export default function HomePage() {
  return (
    <main>
      <HeroHeader />

      <ProductPerspective />

      <section className="relative z-10 mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-10 border-b border-white/12 pb-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
              <span className="h-px w-5 bg-white/30" />
              Technical expertise
            </p>
            <h2 className="mt-4 text-4xl font-black leading-none text-white sm:text-6xl">
              Skills &amp; Technologies
            </h2>
            <p className="mt-5 max-w-2xl border-l border-white/25 pl-4 text-base leading-7 text-white/48">
              A product-minded toolkit for moving from an ambiguous problem to a
              maintainable digital product.
            </p>
          </div>

          <div className="relative min-w-64 text-left lg:text-right">
            <span className="absolute -right-2 -top-14 -z-10 font-mono text-[9rem] font-bold leading-none text-white/3">
              01
            </span>
            <div className="flex items-end gap-3 lg:justify-end">
              <strong className="text-6xl font-black leading-none text-white sm:text-7xl">
                {technologyCount}
              </strong>
              <span className="pb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                Technologies
              </span>
            </div>
            <p className="mt-3 max-w-sm font-mono text-[9px] uppercase leading-5 tracking-[0.15em] text-white/25 lg:ml-auto">
              {skillsByTechnologyCount
                .slice(0, 4)
                .map((skill) => `${skill.name} (${skill.technologies.length})`)
                .join(" · ")}
            </p>
          </div>
        </div>

        <TechnologyMarquee />

        <SkillsExplorer />
      </section>

      <section className="relative z-10 border-y border-white/10 bg-[#080a0f]/88 text-white backdrop-blur-sm">
        <div className="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-10 border-b border-white/12 pb-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
                <span className="h-px w-5 bg-white/30" />
                Selected work
              </p>
              <h2 className="mt-4 text-4xl font-black leading-none text-white sm:text-6xl">
                Featured Projects
              </h2>
              <p className="mt-5 max-w-2xl border-l border-white/25 pl-4 text-base leading-7 text-white/48">
                A temporary set of demo projects. Real case studies and project
                details will replace these entries soon.
              </p>
            </div>

            <div className="relative min-w-56 text-left lg:text-right">
              <span className="absolute -right-2 -top-14 -z-10 font-mono text-[9rem] font-bold leading-none text-white/3">
                02
              </span>
              <div className="flex items-end gap-3 lg:justify-end">
                <strong className="text-6xl font-black leading-none text-white sm:text-7xl">
                  {projects.length}
                </strong>
                <span className="pb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                  Projects
                </span>
              </div>
              <Link
                href="/projects"
                className="mt-4 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-white"
              >
                View all
                <TbArrowRight size={13} />
              </Link>
            </div>
          </div>

          <div>
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="grid gap-5 border-b border-white/12 py-8 sm:grid-cols-[44px_minmax(0,1fr)_auto] sm:items-center sm:gap-4"
              >
                <span className="font-mono text-[10px] text-white/20">
                  0{index + 1}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-xl font-bold text-white/88 sm:text-2xl">
                      {project.name}
                    </h3>
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/25">
                      {project.eyebrow}
                    </span>
                  </div>
                  <p className="mt-2 max-w-4xl text-sm leading-6 text-white/40">
                    {project.description}
                  </p>
                  <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white/25">
                    {project.technologies.join(" · ")}
                  </p>
                </div>
                <span className="justify-self-start font-mono text-[9px] uppercase tracking-[0.16em] text-white/25 sm:justify-self-end">
                  {project.status}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-10 border-b border-white/12 pb-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
              <span className="h-px w-5 bg-white/30" />
              Latest writing
            </p>
            <h2 className="mt-4 text-4xl font-black leading-none text-white sm:text-6xl">
              Featured Articles
            </h2>
            <p className="mt-5 max-w-2xl border-l border-white/25 pl-4 text-base leading-7 text-white/48">
              Thoughts on product engineering, dependable AI workflows, and
              developer experience.
            </p>
          </div>

          <div className="relative min-w-56 text-left lg:text-right">
            <span className="absolute -right-2 -top-14 -z-10 font-mono text-[9rem] font-bold leading-none text-white/3">
              03
            </span>
            <div className="flex items-end gap-3 lg:justify-end">
              <strong className="text-6xl font-black leading-none text-white sm:text-7xl">
                {articles.length}
              </strong>
              <span className="pb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                Articles
              </span>
            </div>
            <Link
              href="/blogs"
              className="mt-4 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-white"
            >
              View all
              <TbArrowRight size={13} />
            </Link>
          </div>
        </div>

        <div>
          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/blogs/${article.slug}`}
              className="group grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[44px_minmax(0,1fr)_auto] sm:items-center sm:gap-4"
            >
              <span className="font-mono text-[10px] text-white/20">
                0{index + 1}
              </span>
              <span>
                <span className="block text-xl font-bold text-white/88 transition-colors group-hover:text-white sm:text-2xl">
                  {article.title}
                </span>
                <span className="mt-2 block max-w-4xl text-sm leading-6 text-white/40">
                  {article.summary}
                </span>
                <span className="mt-3 block font-mono text-[9px] uppercase tracking-[0.14em] text-white/25 sm:hidden">
                  {article.category} · {article.readTime}
                </span>
              </span>
              <span className="hidden items-center gap-5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/25 sm:inline-flex">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
                <TbArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 border-y border-white/10 bg-[#080a0f]/85"
      >
        <div className="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
                <span className="h-px w-5 bg-white/30" />
                Let&apos;s work together
              </p>
              <h2 className="mt-4 text-4xl font-black leading-none text-white sm:text-6xl">
                Get in Touch
              </h2>
              <p className="mt-5 max-w-2xl border-l border-white/25 pl-4 text-base leading-7 text-white/48">
                Have a project in mind or want to talk through an idea? Send a
                message and start the conversation.
              </p>
            </div>

            <div className="relative min-w-72 text-left lg:text-right">
              <span className="absolute -right-2 -top-14 -z-10 font-mono text-[9rem] font-bold leading-none text-white/3">
                04
              </span>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                Reach me directly
              </p>
              <a
                href="mailto:m.anaslatif.dev@gmail.com"
                className="mt-2 block text-sm font-bold text-white/80 transition-colors hover:text-white"
              >
                m.anaslatif.dev@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5 pb-10 font-mono text-[9px] uppercase tracking-[0.24em] text-white/22">
            <span className="h-px flex-1 bg-white/12" />
            Send a message
            <span className="h-px flex-1 bg-white/12" />
          </div>

          <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
            <ContactForm />

            <aside aria-label="Contact details">
              <dl className="border-t border-white/15">
                <div className="flex items-center justify-between gap-6 border-b border-white/15 py-4">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/28">
                    Email
                  </dt>
                  <dd className="text-right text-sm font-semibold text-white/72">
                    m.anaslatif.dev@gmail.com
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-white/15 py-4">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/28">
                    Location
                  </dt>
                  <dd className="text-right text-sm font-semibold text-white/72">
                    Pakistan
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-white/15 py-4">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/28">
                    Preferred
                  </dt>
                  <dd className="text-right text-sm font-semibold text-white/72">
                    Email / LinkedIn
                  </dd>
                </div>
              </dl>
              <p className="mt-12 max-w-sm text-5xl font-black uppercase leading-[0.88] text-white/5 sm:text-6xl">
                Let&apos;s build together
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
