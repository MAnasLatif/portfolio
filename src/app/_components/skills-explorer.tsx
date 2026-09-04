"use client";

import { useState } from "react";

import {
  favoriteTechnologies,
  skills,
  type TechnologyName,
} from "@/lib/portfolio-content";

import { TechnologyIcon } from "./technology-icon";

type SkillName = (typeof skills)[number]["name"];
type SkillFilter = "Favorite" | "All" | SkillName;

const allTechnologies = Array.from(
  new Set(skills.flatMap((skill) => skill.technologies)),
);

const filters: ReadonlyArray<{
  name: SkillFilter;
  count: number;
}> = [
  { name: "Favorite", count: favoriteTechnologies.length },
  { name: "All", count: allTechnologies.length },
  ...skills.map((skill) => ({
    name: skill.name,
    count: new Set(skill.technologies).size,
  })),
];

type SkillsExplorerProps = {
  variant?: "filterable" | "categorized";
};

export function SkillsExplorer({
  variant = "filterable",
}: SkillsExplorerProps) {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>("Favorite");
  const technologies: readonly TechnologyName[] =
    activeFilter === "Favorite"
      ? favoriteTechnologies
      : activeFilter === "All"
        ? allTechnologies
        : (skills.find((skill) => skill.name === activeFilter)?.technologies ??
          []);

  if (variant === "categorized") {
    return (
      <div className="mt-10">
        {skills.map((skill, index) => (
          <section
            key={skill.name}
            aria-labelledby={`skill-category-${index}`}
            className="grid gap-6 py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10"
          >
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/22">
                {String(index + 1).padStart(2, "0")} /{" "}
                {skill.technologies.length}
              </p>
              <h3
                id={`skill-category-${index}`}
                className="mt-3 text-lg font-bold leading-tight text-white/78"
              >
                {skill.name}
              </h3>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {skill.technologies.map((technology) => (
                <li
                  key={technology}
                  className="group relative flex min-h-14 items-center gap-3 overflow-hidden border border-white/12 bg-[#080a0f]/78 px-4 py-3 text-sm font-semibold text-white/70 backdrop-blur-sm transition-[border-color,background-color,color] before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-white before:transition-[width] hover:border-white/35 hover:bg-[#11141a]/92 hover:text-white hover:before:w-1"
                >
                  <span className="grid size-8 shrink-0 place-items-center bg-white/7 transition-colors group-hover:bg-white group-hover:[&_svg]:text-[#080a0f]">
                    <TechnologyIcon name={technology} />
                  </span>
                  <span className="min-w-0 wrap-break-word">{technology}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    );
  }

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
            className="group relative flex min-h-14 items-center gap-3 overflow-hidden border border-white/12 bg-[#080a0f]/78 px-4 py-3 text-sm font-semibold text-white/70 backdrop-blur-sm transition-[border-color,background-color,color] before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-white before:transition-[width] hover:border-white/35 hover:bg-[#11141a]/92 hover:text-white hover:before:w-1"
          >
            <span className="grid size-8 shrink-0 place-items-center bg-white/7 transition-colors group-hover:bg-white group-hover:[&_svg]:text-[#080a0f]">
              <TechnologyIcon name={technology} />
            </span>
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
}
