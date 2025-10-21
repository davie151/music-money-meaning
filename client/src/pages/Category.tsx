import { useRoute, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const categoryDescriptions = {
  Money: "Essays on business, investment, markets, and the economics of creativity.",
  Meaning: "Reflections on culture, art, philosophy, religion, and geopolitics.",
  Music: "From the latest tech gadgets to album reviews to musical history."
};

export default function Category() {
  const [, params] = useRoute("/:category");
  const categoryName = params?.category 
    ? params.category.charAt(0).toUpperCase() + params.category.slice(1)
    : "";

  const categoryArticles = articles.filter(
    (article) => article.category === categoryName
  );

  const description = categoryDescriptions[categoryName as keyof typeof categoryDescriptions] || "";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-16">
          {/* Back Button */}
          <Link href="/">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          {/* Category Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{categoryName}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {description}
            </p>
          </div>

          {/* Articles Grid */}
          {categoryArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                No articles in this category yet.
              </p>
              <p className="text-muted-foreground">
                Check back soon for new content.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

