import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [featuredArticle] = articles;

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

        {/* Category Sections */}
        <section className="container pb-24 space-y-20">
          {/* Money Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">Money</h3>
                <p className="text-muted-foreground">Business, investment, markets, and the economics of creativity</p>
              </div>
              <Link href="/money">
                <Button variant="ghost" className="text-accent">View All →</Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.filter(a => a.category === 'Money').slice(0, 3).length > 0 ? (
                articles.filter(a => a.category === 'Money').slice(0, 3).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))
              ) : (
                <div className="col-span-3 py-12 text-center">
                  <p className="text-muted-foreground">Coming soon: Essays on business, investment, and markets.</p>
                </div>
              )}
            </div>
          </div>

          {/* Meaning Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">Meaning</h3>
                <p className="text-muted-foreground">Culture, art, philosophy, religion, and geopolitics</p>
              </div>
              <Link href="/meaning">
                <Button variant="ghost" className="text-accent">View All →</Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.filter(a => a.category === 'Meaning').slice(0, 3).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Music Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">Music</h3>
                <p className="text-muted-foreground">From tech gadgets to album reviews to musical history</p>
              </div>
              <Link href="/music">
                <Button variant="ghost" className="text-accent">View All →</Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.filter(a => a.category === 'Music').slice(0, 3).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

