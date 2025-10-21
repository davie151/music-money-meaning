import { useRoute, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
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

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleDownloadPDF = () => {
    toast.info("Generating PDF...");
    
    // Create a printable version
    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${article.title}</title>
          <style>
            body {
              font-family: Georgia, serif;
              max-width: 800px;
              margin: 0 auto;
              padding: 40px;
              line-height: 1.6;
            }
            h1 {
              font-size: 32px;
              margin-bottom: 10px;
            }
            .meta {
              color: #666;
              margin-bottom: 30px;
              font-size: 14px;
            }
            p {
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <h1>${article.title}</h1>
          <div class="meta">
            <strong>${article.category}</strong> | ${article.date} | By ${article.author}
          </div>
          ${article.content.split('\n\n').map(p => `<p>${p}</p>`).join('\n')}
        </body>
      </html>
    `;

    // Open print dialog
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
        toast.success("PDF ready! Use your browser's print dialog to save as PDF.");
      }, 250);
    } else {
      toast.error("Please allow pop-ups to download PDF");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Floating Share Buttons */}
      <ShareButtons 
        title={article.title}
        url={currentUrl}
        variant="floating"
      />
      
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

            {/* Share and Download Section */}
            <div className="mt-16 pt-8 border-t border-border">
              <ShareButtons 
                title={article.title}
                url={currentUrl}
                variant="inline"
                showDownload={true}
                onDownloadPDF={handleDownloadPDF}
              />
            </div>

            {/* Author Info */}
            <div className="mt-8 pt-8 border-t border-border">
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

