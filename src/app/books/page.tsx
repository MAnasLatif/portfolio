import TbExternalLink from "@mal-icons/react/tb/TbExternalLink";
import type { Metadata } from "next";

import { PageIntro } from "../_components/page-intro";

export const metadata: Metadata = {
  title: "Books & References | M. Anas Latif",
  description:
    "A transparent reference shelf for the technologies represented in M. Anas Latif's work.",
};

const references = [
  {
    title: "React documentation",
    category: "Interfaces",
    href: "https://react.dev/",
  },
  {
    title: "Next.js documentation",
    category: "Applications",
    href: "https://nextjs.org/docs",
  },
  {
    title: "TypeScript handbook",
    category: "Language",
    href: "https://www.typescriptlang.org/docs/handbook/intro.html",
  },
  {
    title: "Node.js documentation",
    category: "Runtime",
    href: "https://nodejs.org/docs/latest/api/",
  },
  {
    title: "Docker manuals",
    category: "Infrastructure",
    href: "https://docs.docker.com/manuals/",
  },
  {
    title: "WAI-ARIA practices",
    category: "Accessibility",
    href: "https://www.w3.org/WAI/ARIA/apg/",
  },
] as const;

export default function BooksPage() {
  return (
    <main className="relative z-10">
      <PageIntro
        index="05"
        eyebrow="Reference shelf"
        title="Books & references"
        description="No verified personal reading list is publicly available yet. This page instead links the primary technical references behind the work shown here."
      />

      <section className="mx-auto max-w-360 px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="grid gap-10 border-t border-white/12 py-10 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
              Public reference index
            </h2>
            <p className="mt-5 max-w-sm leading-7 text-white/42">
              Direct sources are more useful than a made-up bookshelf. This
              collection can grow when reading notes are ready to publish.
            </p>
          </div>
          <ol className="grid border-t border-white/10 sm:grid-cols-2">
            {references.map((reference, index) => (
              <li
                key={reference.title}
                className="border-b border-white/10 sm:odd:border-r"
              >
                <a
                  href={reference.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-44 flex-col justify-between p-6"
                >
                  <span className="flex justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/25">
                    <span>0{index + 1}</span>
                    <span>{reference.category}</span>
                  </span>
                  <span className="flex items-end justify-between text-xl font-bold text-white/72 transition-colors group-hover:text-white">
                    {reference.title}
                    <TbExternalLink className="shrink-0" size={18} />
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
