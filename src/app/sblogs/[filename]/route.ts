import { articles } from "@/lib/portfolio-content";

import { loadArticleMarkdown } from "../../blogs/_content/load-article-markdown";

type RawArticleRouteProps = {
  params: Promise<{ filename: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ filename: `${article.slug}.md` }));
}

export async function GET(_request: Request, { params }: RawArticleRouteProps) {
  const { filename } = await params;
  const article = articles.find(({ slug }) => `${slug}.md` === filename);

  if (!article) {
    return new Response("Markdown article not found.\n", { status: 404 });
  }

  const markdown = await loadArticleMarkdown(article.slug);

  return new Response(markdown, {
    headers: {
      "Content-Disposition": `inline; filename="${filename}"`,
      "Content-Type": "text/plain; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
