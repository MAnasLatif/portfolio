import type { Metadata } from "next";

import { PageIntro } from "../_components/page-intro";

export const metadata: Metadata = {
  title: "Utilities | M. Anas Latif",
  description:
    "The technologies and working systems used across M. Anas Latif's public projects.",
};

const utilityGroups = [
  {
    title: "Application development",
    description: "Core technologies for typed, full-stack product work.",
    items: ["TypeScript", "React", "Next.js", "Node.js", "Python"],
  },
  {
    title: "Systems & delivery",
    description:
      "Tools that make environments reproducible and work reviewable.",
    items: ["Docker", "Docker Compose", "Git", "GitHub Actions", "GHCR"],
  },
  {
    title: "Interfaces & design",
    description:
      "Building blocks for coherent, accessible product experiences.",
    items: ["Mantine", "Design systems", "UX workflows", "Accessibility"],
  },
  {
    title: "AI workflows",
    description:
      "Explicit structures for assistants that need to do real work.",
    items: ["Agent skills", "Tool routing", "Evidence gathering", "Validation"],
  },
] as const;

export default function UtilitiesPage() {
  return (
    <main className="relative z-10">
      <PageIntro
        index="03"
        eyebrow="Working toolkit"
        title="Utilities"
        description="Technologies and practices evidenced across my public projects, organized by the job they help accomplish."
      />

      <section className="mx-auto max-w-360 px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <h2 className="sr-only">Technology groups</h2>
        <div className="border-t border-white/12">
          {utilityGroups.map((group, groupIndex) => (
            <article
              key={group.title}
              className="grid gap-8 border-b border-white/12 py-10 lg:grid-cols-[0.65fr_1.35fr]"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/25">
                  0{groupIndex + 1}
                </p>
                <h3 className="mt-5 text-2xl font-bold text-white/85">
                  {group.title}
                </h3>
                <p className="mt-3 max-w-sm leading-7 text-white/40">
                  {group.description}
                </p>
              </div>
              <ul className="grid gap-px bg-white/10 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex min-h-24 items-end justify-between bg-[#03050a] p-5 font-semibold text-white/72"
                  >
                    {item}
                    <span
                      className="size-1 border border-white/35"
                      aria-hidden="true"
                    />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
