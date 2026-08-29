import LuArrowLeft from "@mal-icons/react/lu/LuArrowLeft";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { articles } from "@/lib/portfolio-content";

import { articleContent } from "../_content/articles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return {};

  return {
    title: `${article.title} | M. Anas Latif`,
    description: article.summary,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const content = articleContent[article.slug];

  return (
    <main className="relative z-10">
      <article>
        <header className="mx-auto max-w-5xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:pb-24">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-white"
          >
            <LuArrowLeft size={14} />
            All writing
          </Link>
          <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
            {article.category} / {article.readTime} read
          </p>
          <h1 className="mt-8 text-4xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            {article.title}
          </h1>
          <p className="mt-8 max-w-3xl border-l border-white/20 pl-5 text-lg leading-8 text-white/48">
            {article.summary}
          </p>
        </header>

        <div className="mx-auto max-w-5xl px-5 pb-24 sm:px-8 lg:pb-32">
          {content.sections.map((section, index) => (
            <section
              key={section.heading}
              className="grid gap-6 border-t border-white/12 py-10 lg:grid-cols-[80px_1fr] lg:py-14"
            >
              <span className="font-mono text-xs text-white/25">
                0{index + 1}
              </span>
              <div>
                <h2 className="max-w-3xl text-2xl font-bold leading-tight text-white/85 sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-7 max-w-3xl space-y-6 text-base leading-8 text-white/48 sm:text-lg sm:leading-9">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
