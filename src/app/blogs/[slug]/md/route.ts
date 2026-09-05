import { articles } from "@/lib/portfolio-content";

import { loadArticleMarkdown } from "../../_content/load-article-markdown";

type RawArticleRouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function GET(_request: Request, { params }: RawArticleRouteProps) {
  const { slug } = await params;
  const article = articles.find((candidate) => candidate.slug === slug);

  if (!article) {
    return new Response("Markdown article not found.\n", { status: 404 });
  }

  const markdown = await loadArticleMarkdown(article.slug);

  return new Response(markdown, {
    headers: {
      "Content-Disposition": `inline; filename="${article.slug}.md"`,
      "Content-Type": "text/plain; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
