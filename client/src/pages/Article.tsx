import { useRoute, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2 } from "lucide-react";
import { toast } from "sonner";

export default function Article() {
  const [, params] = useRoute("/article/:id");
  const article = articles.find((a) => a.id === params?.id);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: url,
        });
      } catch (err) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
      } catch (err) {
        toast.error("Failed to copy link");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <article className="container py-12">
          {/* Back Button */}
          <Link href="/">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Essays
            </Button>
          </Link>

          {/* Article Header */}
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-sm text-muted-foreground">{article.date}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center justify-between mb-8 pb-8 border-b border-border">
              <p className="text-lg font-medium">By {article.author}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="gap-2"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            {/* Featured Image */}
            {article.imageUrl && (
              <div className="mb-12 aspect-[16/9] overflow-hidden border border-border">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Author Info */}
            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Written by <span className="font-medium text-foreground">{article.author}</span>
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

