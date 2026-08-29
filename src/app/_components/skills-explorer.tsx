"use client";

import { useState } from "react";

import { skills, type TechnologyName } from "@/lib/portfolio-content";

import { TechnologyIcon } from "./technology-icon";

type SkillName = (typeof skills)[number]["name"];
type SkillFilter = "All" | SkillName;

const allTechnologies = Array.from(
  new Set(skills.flatMap((skill) => skill.technologies)),
);

const filters: ReadonlyArray<{
  name: SkillFilter;
  count: number;
}> = [
  { name: "All", count: allTechnologies.length },
  ...skills.map((skill) => ({
    name: skill.name,
    count: new Set(skill.technologies).size,
  })),
];

export function SkillsExplorer() {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>("All");
  const technologies: readonly TechnologyName[] =
    activeFilter === "All"
      ? allTechnologies
      : (skills.find((skill) => skill.name === activeFilter)?.technologies ??
        []);

  return (
    <div className="mt-8">
      <div
        className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible"
        role="tablist"
        aria-label="Technology categories"
      >
        {filters.map((filter) => {
          const isActive = filter.name === activeFilter;

          return (
            <button
              key={filter.name}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="technology-panel"
              onClick={() => setActiveFilter(filter.name)}
              className={`shrink-0 border px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.12em] transition-colors ${
                isActive
                  ? "border-white bg-white text-[#080a0f]"
                  : "border-white/14 bg-[#080a0f]/72 text-white/45 hover:border-white/35 hover:text-white/80"
              }`}
            >
              {filter.name}
              <span className="ml-2 opacity-55">{filter.count}</span>
            </button>
          );
        })}
      </div>

      <ul
        id="technology-panel"
        className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        role="tabpanel"
      >
        {technologies.map((technology) => (
          <li
            key={technology}
            className="flex min-h-14 items-center gap-3 border border-white/12 bg-[#080a0f]/78 px-4 py-3 text-sm font-semibold text-white/70 backdrop-blur-sm"
          >
            <span className="grid size-8 shrink-0 place-items-center bg-white/7">
              <TechnologyIcon name={technology} />
            </span>
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
}
