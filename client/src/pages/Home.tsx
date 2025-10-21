import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export default function Home() {
  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Three-Panel Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 h-[70vh] md:h-[80vh]">
          {/* Money Panel */}
          <Link href="/money">
            <div className="relative group cursor-pointer overflow-hidden h-full">
              <img 
                src="/money-hero.jpeg" 
                alt="Money" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Money</h2>
                <p className="text-lg md:text-xl text-center max-w-md opacity-90">
                  Business, investment, markets
                </p>
              </div>
            </div>
          </Link>

          {/* Meaning Panel */}
          <Link href="/meaning">
            <div className="relative group cursor-pointer overflow-hidden h-full">
              <img 
                src="/meaning-hero.jpeg" 
                alt="Meaning" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Meaning</h2>
                <p className="text-lg md:text-xl text-center max-w-md opacity-90">
                  Culture, art, philosophy
                </p>
              </div>
            </div>
          </Link>

          {/* Music Panel */}
          <Link href="/music">
            <div className="relative group cursor-pointer overflow-hidden h-full">
              <img 
                src="/music-hero.jpeg" 
                alt="Music" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Music</h2>
                <p className="text-lg md:text-xl text-center max-w-md opacity-90">
                  Reviews, history, technology
                </p>
              </div>
            </div>
          </Link>
        </section>

        {/* Featured Article */}
        <section className="container py-16 border-t border-border">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Featured Essay
          </h3>
          <ArticleCard article={featuredArticle} featured />
        </section>

        {/* Recent Articles by Category */}
        <section className="container pb-24 space-y-16">
          {/* Money Section */}
          {articles.filter(a => a.category === 'Money').length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
                <h3 className="text-2xl font-bold">Latest in Money</h3>
                <Link href="/money" className="text-accent hover:underline text-sm font-medium">
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.filter(a => a.category === 'Money').slice(0, 3).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          )}

          {/* Meaning Section */}
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <h3 className="text-2xl font-bold">Latest in Meaning</h3>
              <Link href="/meaning" className="text-accent hover:underline text-sm font-medium">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.filter(a => a.category === 'Meaning').slice(0, 3).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Music Section */}
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <h3 className="text-2xl font-bold">Latest in Music</h3>
              <Link href="/music" className="text-accent hover:underline text-sm font-medium">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

