import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Music Essays</h1>
            
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                Music Essays is a platform dedicated to thoughtful, in-depth writing about music across all genres, traditions, and historical periods. We believe that music deserves serious critical attention—not just reviews and news, but sustained engagement with the ideas, contexts, and cultural significance that make music meaningful.
              </p>

              <p>
                Our contributors come from diverse backgrounds: musicologists, critics, journalists, musicians, and passionate listeners. What unites them is a commitment to rigorous thinking and clear writing about music's role in culture and society.
              </p>

              <p>
                We publish essays that explore music from multiple perspectives: historical analysis, cultural criticism, aesthetic theory, social context, and personal reflection. Our goal is not to tell you what to think about music, but to provide frameworks for deeper understanding and appreciation.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Our Approach</h2>

              <p>
                We value substance over speed. Rather than chasing the latest releases or trending topics, we focus on essays that will remain relevant and insightful long after publication. We believe the best music writing combines scholarly rigor with accessible prose, making complex ideas engaging for general readers.
              </p>

              <p>
                Music Essays is an independent publication. We are not affiliated with record labels, streaming services, or other commercial music entities. Our editorial decisions are guided solely by the quality and significance of the writing.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Contributing</h2>

              <p>
                We welcome submissions from writers at all career stages. If you have an idea for an essay about music—whether it's a deep dive into a specific artist, genre analysis, historical research, or cultural criticism—we'd love to hear from you.
              </p>

              <p className="text-muted-foreground text-base mt-12 pt-8 border-t border-border">
                For submission inquiries and editorial questions, please reach out through our contact channels.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

