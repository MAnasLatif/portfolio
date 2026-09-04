import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";

import type { articles } from "@/lib/portfolio-content";

type ArticleSlug = (typeof articles)[number]["slug"];

export function loadArticleMarkdown(slug: ArticleSlug) {
  return readFile(
    path.join(process.cwd(), "src", "app", "blogs", "_content", `${slug}.md`),
    "utf8",
  );
}
