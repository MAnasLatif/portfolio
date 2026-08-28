import type { Metadata } from "next";

import { projects } from "@/lib/portfolio-content";

import { PageIntro } from "../_components/page-intro";

export const metadata: Metadata = {
  title: "Stats | M. Anas Latif",
  description: "A public snapshot of M. Anas Latif's GitHub work.",
};

const headlineStats = [
  { value: "9", label: "Public repositories" },
  { value: "12", label: "GitHub followers" },
  { value: "4", label: "Following" },
  { value: "2022", label: "Building in public since" },
] as const;

const languages = [
  { label: "TypeScript", repositories: 5, width: "71%" },
  { label: "Python", repositories: 1, width: "14%" },
  { label: "Shell", repositories: 1, width: "14%" },
] as const;

export default function StatsPage() {
  const visibleStars = projects.reduce(
    (total, project) => total + project.stars,
    0,
  );

  return (
    <main className="relative z-10">
      <PageIntro
        index="02"
        eyebrow="Public signal"
        title="Statistics"
        description="A compact view of the public GitHub profile. Numbers are a snapshot, not a substitute for the work itself."
      />

      <section className="mx-auto max-w-360 px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <h2 className="sr-only">GitHub profile statistics</h2>
        <dl className="grid border-t border-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {headlineStats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-white/12 py-8 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <dd className="text-5xl font-black text-white sm:text-6xl">
                {stat.value}
              </dd>
              <dt className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-white text-[#080a0f]">
        <div className="mx-auto grid max-w-360 gap-16 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-32">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-black/42">
              Repository languages
            </p>
            <h2 className="mt-8 text-4xl font-black uppercase leading-none sm:text-5xl">
              Primary technology
            </h2>
            <div className="mt-12 space-y-8">
              {languages.map((language) => (
                <div key={language.label}>
                  <div className="flex justify-between text-sm font-semibold">
                    <span>{language.label}</span>
                    <span>{language.repositories} repos</span>
                  </div>
                  <div className="mt-3 h-1 bg-black/12">
                    <div
                      className="h-full bg-black"
                      style={{ width: language.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-black/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-black/42">
              Selected repository signal
            </p>
            <div className="mt-8 grid gap-px bg-black/15 sm:grid-cols-2">
              <div className="bg-white p-7">
                <p className="text-5xl font-black">{visibleStars}</p>
                <p className="mt-3 text-sm text-black/50">
                  Stars across featured repositories
                </p>
              </div>
              <div className="bg-white p-7">
                <p className="text-5xl font-black">3</p>
                <p className="mt-3 text-sm text-black/50">
                  Forks on the AI assistant
                </p>
              </div>
              <div className="bg-white p-7 sm:col-span-2">
                <p className="text-xl font-bold">TypeScript leads the work.</p>
                <p className="mt-3 max-w-lg leading-7 text-black/50">
                  Five public repositories name TypeScript as their primary
                  language, spanning interfaces, tools, and infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className="mx-auto max-w-360 px-5 py-8 font-mono text-[10px] uppercase tracking-[0.18em] text-white/25 sm:px-8 lg:px-12">
        Public GitHub snapshot / Values may change as the work evolves
      </p>
    </main>
  );
}
