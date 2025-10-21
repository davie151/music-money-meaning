import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About</h1>
            
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p className="text-xl">
                <strong>Music, Money & Meaning</strong> is a platform for essays exploring the intersection 
                of economics, culture, and sound. We examine how value is created, meaning is constructed, 
                and art is sustained in the modern world.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Our Three Pillars</h2>
              
              <div className="space-y-8 border-l-2 border-accent pl-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Money</h3>
                  <p>
                    Essays on business, investment, markets, and the economics of creativity. We explore 
                    how financial systems shape artistic production, how value is measured and created, 
                    and the pragmatic realities of sustaining creative work in commercial contexts.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">Meaning</h3>
                  <p>
                    Reflections on culture, art, philosophy, religion, and geopolitics. We examine the 
                    human condition, the construction of significance, and the cultural forces that shape 
                    our understanding of the world and our place within it. From the habits of genius to 
                    the paradoxes of freedom, we investigate questions of purpose and value.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">Music</h3>
                  <p>
                    From the latest tech gadgets to album reviews to musical history. We investigate sound 
                    as art, technology, commerce, and cultural force—examining both the mechanics of music 
                    production and the deeper resonances of musical expression. Music is where our three 
                    pillars converge most clearly.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-4">Our Approach</h2>

              <p>
                We value depth over immediacy. Rather than chasing trends or reacting to news cycles, 
                we focus on essays that examine underlying structures, persistent tensions, and enduring 
                questions. Our writing combines critical analysis with philosophical inquiry, economic 
                literacy with aesthetic appreciation.
              </p>

              <p>
                This is a space for serious inquiry into the systems that sustain us, the meanings we 
                construct, and the sounds that move us. We believe these domains are not separate but 
                deeply intertwined—that understanding any one requires examining the others.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Contributing</h2>

              <p>
                We welcome submissions from writers exploring the intersections of money, meaning, and 
                music. Whether you're examining market structures, philosophical questions, or the 
                evolution of sound, we're interested in essays that think deeply and write clearly.
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

