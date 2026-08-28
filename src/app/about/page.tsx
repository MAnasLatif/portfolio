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
    text: "I use open-source projects to turn recurring problems into reusable tools. Publishing the work creates a useful standard: the setup, boundaries, and documentation need to make sense to someone who was not in the room when they were designed.",
  },
] as const;

const focusAreas = [
  "Product-focused web applications",
  "Reusable React systems",
  "Developer tools and environments",
  "Bounded AI agent workflows",
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
              ["Building with", "MALDev.net"],
              ["Public work", "9 repositories"],
              ["Availability", "Open to work"],
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
