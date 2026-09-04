import type { Metadata } from "next";

import { ArticleList } from "./_components/article-list";

export const metadata: Metadata = {
  title: "Blogs | M. Anas Latif",
  description:
    "Original notes by M. Anas Latif on product engineering, AI systems, and developer experience.",
};

export default function BlogsPage() {
  return (
    <main className="relative z-10 mx-auto max-w-300 px-5 pb-24 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-32">
      <header className="relative overflow-hidden pb-10 sm:pb-12">
        <p className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-white/35">
          <span className="h-px w-5 bg-white/30" /> Writing / 001
        </p>
        <h1 className="mt-5 text-5xl font-black leading-none text-white sm:text-6xl">
          Blog
        </h1>
        <p className="mt-4 max-w-2xl border-l border-white/25 pl-4 text-sm leading-6 text-white/48">
          Original writing about product boundaries, dependable AI workflows,
          and developer experience.
        </p>
        <span className="pointer-events-none absolute -right-7 -top-10 -z-10 hidden text-[10rem] font-black lowercase leading-none text-white/3 md:block">
          blog
        </span>
      </header>

      <section aria-labelledby="all-articles">
        <h2 id="all-articles" className="sr-only">
          All articles
        </h2>
        <ArticleList />
      </section>
    </main>
  );
}
