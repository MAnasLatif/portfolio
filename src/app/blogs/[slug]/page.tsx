import TbArrowLeft from "@mal-icons/react/tb/TbArrowLeft";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown, { type Components } from "react-markdown";

import { articles } from "@/lib/portfolio-content";

import { loadArticleMarkdown } from "../_content/load-article-markdown";

const articleDateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeZone: "UTC",
});

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const markdownComponents = {
  h2: ({ children }) => (
    <h2 className="mt-16 text-2xl font-black leading-tight text-white first:mt-0 sm:mt-20 sm:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-12 text-xl font-bold leading-tight text-white/90 sm:text-2xl">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-6 text-base leading-8 text-white/58 first:mt-0 sm:text-lg sm:leading-9">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-white/90">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="font-medium text-white/75">{children}</em>
  ),
  ul: ({ children }) => (
    <ul className="mt-6 space-y-3 border-l border-white/15 pl-6 text-base leading-8 text-white/58 sm:text-lg">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-6 list-decimal space-y-3 border-l border-white/15 pl-10 text-base leading-8 text-white/58 marker:font-mono marker:text-white/30 sm:text-lg">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-12 border-l-2 border-white/45 bg-white/4 px-6 py-5 text-xl font-medium leading-8 text-white/78 sm:px-8 sm:text-2xl sm:leading-9">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="mx-auto my-16 w-1/2 border-white/30" />,
  code: ({ children }) => (
    <code className="border border-white/12 bg-white/7 px-1.5 py-0.5 font-mono text-[0.88em] text-white/80">
      {children}
    </code>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-medium text-white underline decoration-white/35 underline-offset-4 transition-colors hover:decoration-white"
    >
      {children}
    </a>
  ),
} satisfies Components;

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
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      publishedTime: `${article.publishedAt}T00:00:00Z`,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const markdown = await loadArticleMarkdown(article.slug);
  const wordCount = markdown
    .replace(/[`*_>#\-[\]()]/g, " ")
    .trim()
    .split(/\s+/u).length;

  return (
    <main className="relative z-10 px-3 pb-12 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
      <article className="mx-auto max-w-6xl border border-white/10 bg-[#0a0d13]/92 shadow-2xl shadow-black/25 backdrop-blur-sm">
        <header className="mx-auto max-w-5xl px-5 pb-12 pt-10 sm:px-10 sm:pb-16 sm:pt-14 lg:px-14">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-white"
          >
            <TbArrowLeft size={14} />
            All writing
          </Link>
          <p className="mt-10 font-mono text-[9px] uppercase tracking-[0.24em] text-white/32">
            {article.category}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl">
            {article.title}
          </h1>
          <p className="mt-8 max-w-4xl border-l border-white/22 pl-5 text-lg leading-8 text-white/52 sm:text-xl sm:leading-9">
            {article.summary}
          </p>
          <div className="mt-10 flex flex-col gap-6 border-b border-white/12 pb-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/manaslatif.jpeg"
                alt="M. Anas Latif"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover grayscale"
              />
              <div>
                <p className="text-sm font-bold text-white/80">M. Anas Latif</p>
                <time
                  dateTime={article.publishedAt}
                  className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.2em] text-white/30"
                >
                  {articleDateFormatter.format(
                    new Date(`${article.publishedAt}T00:00:00Z`),
                  )}
                </time>
              </div>
            </div>
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/30">
              {article.readTime} read <span aria-hidden="true">·</span>{" "}
              {wordCount.toLocaleString("en-US")} words
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-5 pb-20 sm:px-10 sm:pb-28 lg:px-14">
          <Markdown components={markdownComponents}>{markdown}</Markdown>
        </div>
      </article>
    </main>
  );
}
