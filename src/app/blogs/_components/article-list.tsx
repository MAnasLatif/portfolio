"use client";

import TbArrowRight from "@mal-icons/react/tb/TbArrowRight";
import TbSearch from "@mal-icons/react/tb/TbSearch";
import Link from "next/link";
import { useDeferredValue, useState } from "react";

import { articles } from "@/lib/portfolio-content";

const articleDateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeZone: "UTC",
});

export function ArticleList() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLocaleLowerCase());
  const filteredArticles = deferredQuery
    ? articles.filter((article) =>
        [article.title, article.summary, article.category].some((value) =>
          value.toLocaleLowerCase().includes(deferredQuery),
        ),
      )
    : articles;

  return (
    <>
      <label className="relative block max-w-xl" htmlFor="article-search">
        <span className="sr-only">Search articles</span>
        <TbSearch
          size={14}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
        />
        <input
          id="article-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles..."
          className="h-11 w-full border border-white/14 bg-white/5 pl-11 pr-4 font-mono text-xs text-white outline-none transition-colors placeholder:text-white/25 focus:border-white/35"
        />
      </label>

      <div className="mt-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.3em] text-white/32">
        <p aria-live="polite">
          {filteredArticles.length}{" "}
          {filteredArticles.length === 1 ? "article" : "articles"}
        </p>
        <p>Field notes</p>
      </div>

      <div className="mt-4 border border-white/14 bg-[#090c10]/72">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/blogs/${article.slug}`}
              className="group grid gap-4 border-b border-white/12 px-4 py-6 last:border-b-0 sm:grid-cols-[34px_minmax(0,1fr)_20px] sm:px-5"
            >
              <span className="pt-0.5 font-mono text-[9px] text-white/22">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="block text-base font-bold leading-6 text-white/88 transition-colors group-hover:text-white">
                  {article.title}
                </span>
                <span className="mt-2 block max-w-4xl text-xs leading-5 text-white/40">
                  {article.summary}
                </span>
                <span className="mt-4 flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/28">
                  <span>{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={article.publishedAt}>
                    {articleDateFormatter.format(
                      new Date(`${article.publishedAt}T00:00:00Z`),
                    )}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime} read</span>
                </span>
              </span>
              <TbArrowRight
                size={14}
                className="self-center text-white/22 transition-[color,transform] group-hover:translate-x-1 group-hover:text-white/60"
              />
            </Link>
          ))
        ) : (
          <div className="px-5 py-12 text-center">
            <p className="text-sm font-bold text-white/65">No articles found</p>
            <p className="mt-2 text-xs text-white/35">
              Try another title, topic, or category.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
