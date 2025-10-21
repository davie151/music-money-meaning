import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export default function Home() {
  const [featuredArticle, ...otherArticles] = articles;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30">
          <div className="container py-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
              Music, Money & Meaning
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Essays exploring the intersection of music, economics, philosophy, and the human condition. Where art meets commerce, and sound meets significance.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="container py-16">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Featured Essay
          </h3>
          <ArticleCard article={featuredArticle} featured />
        </section>

        {/* Recent Articles Grid */}
        <section className="container pb-24">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Recent Essays
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

