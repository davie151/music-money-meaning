import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Music, Money & Meaning</h1>
            
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                Music, Money & Meaning is a platform dedicated to exploring the complex relationships between music, economics, and the human search for significance. We examine how commercial forces shape artistic expression, how musicians navigate the tension between art and commerce, and how music creates meaning in an increasingly commodified world.
              </p>

              <p>
                Our essays investigate the paradoxes of the music industry: the democratization of music production alongside the concentration of wealth, the promise of creative freedom within algorithmic constraints, and the pursuit of artistic authenticity in market-driven contexts. We believe these tensions are not obstacles to understanding music but central to its contemporary significance.
              </p>

              <p>
                Beyond industry analysis, we explore philosophical questions about music's role in modern life. How does music help us construct identity and meaning? What happens when achievement culture colonizes artistic practice? How do economic systems shape not just what music gets made, but how we listen and what we value?
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Our Approach</h2>

              <p>
                We value depth over immediacy. Rather than reacting to industry news or reviewing the latest releases, we focus on essays that examine underlying structures, persistent tensions, and enduring questions. Our writing combines critical analysis with philosophical inquiry, economic literacy with aesthetic appreciation.
              </p>

              <p>
                Music, Money & Meaning is an independent publication. We are not affiliated with record labels, streaming services, management companies, or other commercial music entities. Our editorial stance recognizes that while we write about commercial systems, we strive to maintain critical distance from them.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Contributing</h2>

              <p>
                We welcome submissions from writers at all career stages. If you have an idea for an essay exploring the intersections of music, economics, philosophy, or culture—whether examining industry structures, artistic labor, the meaning-making power of music, or the contradictions of creative life under capitalism—we'd love to hear from you.
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

