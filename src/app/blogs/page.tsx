import TbArrowRight from "@mal-icons/react/tb/TbArrowRight";
import type { Metadata } from "next";
import Link from "next/link";

import { articles } from "@/lib/portfolio-content";

import { PageIntro } from "../_components/page-intro";

export const metadata: Metadata = {
  title: "Blogs | M. Anas Latif",
  description:
    "Original notes by M. Anas Latif on product engineering, AI systems, and developer experience.",
};

export default function BlogsPage() {
  return (
    <main className="relative z-10">
      <PageIntro
        index="04"
        eyebrow="Field notes"
        title="Blogs"
        description="Original writing about the decisions around software: product boundaries, dependable AI workflows, and developer experience."
      />

      <section className="mx-auto max-w-360 px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <h2 className="sr-only">All articles</h2>
        <div className="border-t border-white/12">
          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/blogs/${article.slug}`}
              className="group grid gap-7 border-b border-white/12 py-10 lg:grid-cols-[100px_1fr_180px] lg:items-center"
            >
              <span className="font-mono text-xs text-white/25">
                0{index + 1}
              </span>
              <span>
                <span className="block max-w-3xl text-3xl font-bold leading-tight text-white/82 transition-colors group-hover:text-white sm:text-4xl">
                  {article.title}
                </span>
                <span className="mt-4 block max-w-2xl leading-7 text-white/42">
                  {article.summary}
                </span>
              </span>
              <span className="flex justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/30 lg:block lg:text-right">
                <span>{article.category}</span>
                <span className="ml-3 inline-flex items-center justify-end gap-2">
                  {article.readTime}
                  <TbArrowRight size={13} />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
