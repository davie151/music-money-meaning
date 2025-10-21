import { Link } from "wouter";
import type { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <Link href={`/article/${article.id}`}>
        <article className="group cursor-pointer border border-border hover:border-accent transition-colors">
          {article.imageUrl && (
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-xs text-muted-foreground">{article.date}</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
              {article.title}
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {article.excerpt}
            </p>
            <p className="text-sm font-medium">By {article.author}</p>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/article/${article.id}`}>
      <article className="group cursor-pointer border border-border hover:border-accent transition-colors h-full flex flex-col">
        {article.imageUrl && (
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-muted-foreground">{article.date}</span>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
            {article.excerpt}
          </p>
          <p className="text-sm font-medium">By {article.author}</p>
        </div>
      </article>
    </Link>
  );
}

