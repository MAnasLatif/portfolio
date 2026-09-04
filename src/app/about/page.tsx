import TbArrowUpRight from "@mal-icons/react/tb/TbArrowUpRight";
import TbMapPin from "@mal-icons/react/tb/TbMapPin";
import type { Metadata } from "next";

import { PageIntro } from "../_components/page-intro";

export const metadata: Metadata = {
  title: "About | M. Anas Latif",
  description:
    "About M. Anas Latif, a software engineer, product builder, and UX designer in Pakistan.",
};

const story = [
  {
    title: "Engineering with the whole product in view",
    text: "My work sits between software engineering, product thinking, and experience design. I care about the code that makes a feature possible, the interface that makes it understandable, and the operating choices that keep it useful after launch.",
  },
  {
    title: "From interfaces to systems",
    text: "The MERN stack is part of my foundation, but the interesting work rarely stops at a framework. My public projects now include component systems, command-line tools, containerized development environments, password software, and practical AI assistants.",
  },
  {
    title: "Open work as a practice",
    text: "I use projects to turn recurring problems into reusable tools. Sharing the work creates a useful standard: the setup, boundaries, and documentation need to make sense to someone who was not in the room when they were designed.",
  },
] as const;

const focusAreas = [
  "Product-focused web applications",
  "Reusable React systems",
  "Developer tools and environments",
  "Bounded AI agent workflows",
] as const;

const experience = [
  {
    company: "Upvave",
    companyUrl: "https://www.linkedin.com/company/99958486/",
    role: "Technical Project Manager",
    employment: "Full-time",
    period: "Oct 2025 — Present",
    location: "Vienna, Austria · Remote",
    summary:
      "Leading product architecture, engineering delivery, and production operations for multi-tenant SaaS products serving businesses across Europe.",
    highlights: [
      "Led Salma from architecture and MVP planning through production launch for salon operations in Austria and Germany.",
      "Architected multi-location booking, role-based access, realtime collaboration, notifications, analytics, and an AI booking assistant with contextual memory.",
      "Managed engineering planning, code review, cloud infrastructure, delivery pipelines, scalability, security, and production monitoring.",
    ],
    projects: [
      { label: "Salma AI", href: "https://salma.hairdressing.school/en" },
      { label: "Label Bricks", href: "https://labelbricks.com/" },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "Redis",
      "Socket.IO",
      "OpenAI",
    ],
  },
  {
    company: "ward.studio",
    companyUrl: "https://www.linkedin.com/company/12993594/",
    role: "Full Stack Engineer and DevOps",
    employment: "Contract",
    period: "Apr 2024 — Oct 2025",
    location: "New York, United States · Remote",
    summary:
      "Led Composit, an AI-assisted creative collaboration platform, from product planning and architecture through production delivery.",
    highlights: [
      "Built realtime artboard generation, editing, review, and role-based collaboration workflows for artists and reviewers.",
      "Designed production AWS infrastructure with Docker, automated CI/CD, monitoring, and scalable cloud services.",
    ],
    projects: [{ label: "Composit", href: "https://composit.work/" }],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "AWS",
      "Docker",
    ],
  },
  {
    company: "The Crimson Market",
    companyUrl: "https://www.linkedin.com/company/108111161/",
    role: "Full Stack Engineer",
    employment: "Full-time",
    period: "Apr 2022 — Apr 2024",
    location: "Australia · Remote",
    summary:
      "Built and delivered four full-stack web applications from architecture to production, spanning backend systems, responsive interfaces, and business workflows.",
    highlights: [
      "Designed databases, authentication, APIs, and scalable backend services across the application portfolio.",
      "Developed performance-focused React experiences for desktop and mobile while maintaining production-quality delivery practices.",
    ],
    projects: [
      {
        label: "The Crimson Market",
        href: "https://www.thecrimsonmarket.com/",
      },
    ],
    technologies: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL"],
  },
] as const;

const education = [
  {
    institution: "University of Management and Technology",
    institutionUrl: "https://www.linkedin.com/school/673280/",
    qualification: "Bachelor's degree, Software Engineering",
    period: "Oct 2021 — Jul 2025",
    detail:
      "Software engineering studies spanning application development, system design, databases, and collaborative product delivery.",
  },
  {
    institution: "Punjab Group of Colleges",
    institutionUrl: "https://www.linkedin.com/school/2795170/",
    qualification: "Intermediate, Computer Science",
    period: "Sep 2018 — Aug 2021",
    detail:
      "Computer science foundation with early programming work in C and core science coursework.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="relative z-10">
      <PageIntro
        index="01"
        eyebrow="Profile"
        title="About me"
        description="I am M. Anas Latif, a software engineer and UX designer in Pakistan building digital products and developer systems."
      />

      <section className="mx-auto grid max-w-360 gap-14 px-5 pb-24 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12 lg:pb-32">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/30">
            Current coordinates
          </p>
          <dl className="mt-7 border-t border-white/10">
            {[
              ["Based in", "Pakistan"],
              ["Current role", "Technical Project Manager"],
              ["Building with", "MALDev.net"],
              ["Public work", "9 repositories"],
            ].map(([term, detail]) => (
              <div
                key={term}
                className="grid grid-cols-2 border-b border-white/10 py-4 text-sm"
              >
                <dt className="text-white/35">{term}</dt>
                <dd className="text-right font-semibold text-white/70">
                  {detail}
                </dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className="border-t border-white/12">
          {story.map((chapter, index) => (
            <article
              key={chapter.title}
              className="grid gap-5 border-b border-white/12 py-10 sm:grid-cols-[64px_1fr]"
            >
              <span className="font-mono text-xs text-white/25">
                0{index + 1}
              </span>
              <div>
                <h2 className="max-w-2xl text-2xl font-bold leading-tight text-white/88 sm:text-3xl">
                  {chapter.title}
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-white/48">
                  {chapter.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="relative bg-[#03050a]/85">
        <section className="relative mx-auto max-w-360 px-5 pb-24 pt-8 sm:px-8 lg:px-12 lg:pb-32">
          <div className="border-t border-white/12 pt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/32">
              02 / Experience map
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-none text-white sm:text-5xl">
              Building products from architecture to operation.
            </h2>

            <ol className="relative mt-14 space-y-14 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-white/16 lg:mt-20 lg:grid lg:grid-cols-[minmax(0,1fr)_112px_minmax(0,1fr)] lg:items-start lg:gap-y-14 lg:space-y-0 lg:before:hidden">
              <svg
                className="pointer-events-none absolute inset-y-0 left-1/2 hidden h-full w-28 -translate-x-1/2 text-white/25 lg:block"
                viewBox="0 0 112 1000"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M56 0 C56 45 18 50 18 98 C18 165 94 185 94 257 C94 410 18 520 18 690 C18 850 56 900 56 1000"
                  stroke="currentColor"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <circle cx="18" cy="98" r="4" fill="currentColor" />
                <circle cx="94" cy="257" r="4" fill="currentColor" />
                <circle cx="18" cy="690" r="4" fill="currentColor" />
              </svg>
              {experience.map((position, index) => (
                <li
                  key={`${position.company}-${position.role}`}
                  className={`relative pl-10 lg:pl-0 ${
                    index === 0
                      ? "lg:col-start-1 lg:row-start-1 lg:pr-10"
                      : index === 1
                        ? "lg:col-start-3 lg:row-start-1 lg:mt-44 lg:pl-10"
                        : "lg:col-start-1 lg:row-start-2 lg:pr-10"
                  }`}
                >
                  <span className="absolute left-4 top-6 h-2 w-2 -translate-x-1/2 bg-white/65 lg:hidden" />

                  <article className="border-t border-white/12 pt-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <a
                          href={position.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white/35 transition-colors hover:text-white"
                        >
                          {position.company} <TbArrowUpRight size={12} />
                        </a>
                        <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {position.employment}
                        </p>
                      </div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/28">
                        <p>{position.period}</p>
                        <p className="mt-2 inline-flex items-center gap-1.5 leading-5">
                          <TbMapPin size={12} /> {position.location}
                        </p>
                      </div>
                    </div>
                    <h3 className="mt-5 text-2xl font-black leading-tight text-white sm:text-3xl">
                      {position.role}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-white/52">
                      {position.summary}
                    </p>
                    <ul className="mt-6 space-y-3 border-l border-white/15 pl-5 text-sm leading-6 text-white/42">
                      {position.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {position.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="border border-white/14 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-white/38"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                      {position.projects.map((project) => (
                        <a
                          key={project.label}
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/55 transition-colors hover:text-white"
                        >
                          {project.label} <TbArrowUpRight size={13} />
                        </a>
                      ))}
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative mx-auto max-w-360 px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
          <div className="border-t border-white/12 pt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/32">
              03 / Education map
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-none text-white sm:text-5xl">
              Foundations in software engineering and computer science.
            </h2>

            <ol className="relative mt-14 space-y-14 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-white/16 lg:mt-20 lg:grid lg:grid-cols-[minmax(0,1fr)_112px_minmax(0,1fr)] lg:items-start lg:space-y-0 lg:before:hidden">
              <svg
                className="pointer-events-none absolute inset-y-0 left-1/2 hidden h-full w-28 -translate-x-1/2 text-white/25 lg:block"
                viewBox="0 0 112 1000"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M56 0 C56 105 18 125 18 234 C18 410 94 470 94 655 C94 820 56 875 56 1000"
                  stroke="currentColor"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <circle cx="18" cy="234" r="4" fill="currentColor" />
                <circle cx="94" cy="655" r="4" fill="currentColor" />
              </svg>
              {education.map((record, index) => (
                <li
                  key={record.institution}
                  className={`relative pl-10 lg:row-start-1 lg:pl-0 ${
                    index === 0
                      ? "lg:col-start-1 lg:pr-10"
                      : "lg:col-start-3 lg:mt-32 lg:pl-10"
                  }`}
                >
                  <span className="absolute left-4 top-6 h-2 w-2 -translate-x-1/2 bg-white/65 lg:hidden" />
                  <article className="border-t border-white/12 pt-6">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/28">
                      {String(index + 1).padStart(2, "0")} / {record.period}
                    </p>
                    <a
                      href={record.institutionUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-xl font-bold text-white/88 transition-colors hover:text-white sm:text-2xl"
                    >
                      {record.institution} <TbArrowUpRight size={15} />
                    </a>
                    <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/32">
                      {record.qualification}
                    </p>
                    <p className="mt-4 max-w-3xl text-sm leading-6 text-white/42">
                      {record.detail}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>

      <section className="bg-white text-[#080a0f]">
        <div className="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-black/42">
            Current focus
          </p>
          <h2 className="mt-8 max-w-4xl text-4xl font-black uppercase leading-[0.95] sm:text-6xl">
            Building the connective tissue between product and engineering.
          </h2>
          <ol className="mt-14 grid border-t border-black/15 md:grid-cols-2">
            {focusAreas.map((area, index) => (
              <li
                key={area}
                className="flex min-h-40 items-end justify-between border-b border-black/15 py-7 md:odd:border-r md:odd:pr-7 md:even:pl-7"
              >
                <span className="max-w-xs text-xl font-bold">{area}</span>
                <span className="font-mono text-[10px] text-black/35">
                  0{index + 1}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
