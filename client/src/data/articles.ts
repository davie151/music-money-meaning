export interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
}

export const articles: Article[] = [
  {
    id: "7",
    title: "The Habits of Genius: Curiosity",
    author: "David Steinberg",
    date: "September 1, 2025",
    category: "Philosophy",
    excerpt: "Curiosity is not passive, but aggressive inquiry, the refusal to accept surfaces. The curious mind treats every answer as a doorway to ten new questions.",
    content: `To me curiosity is not passive, but aggressive inquiry, the refusal to accept surfaces. The curious mind treats every answer as a doorway to ten new questions. It is intellectual trespass, enacted daily.

True curiosity is uncomfortable. It demands you abandon the warmth of certainty for the cold of not-knowing. Children ask "why" until adults grow weary; genius never stops asking. It sees the familiar as foreign, the ordinary as encrypted. Where others see a falling apple, curiosity sees a planet pulling.

**Historical Examples**

Leonardo da Vinci's notebooks held 13,000 pages of questions—from "Why does the eye see a thing more clearly in dreams?" to detailed sketches of unborn children he obtained through dealings with grave robbers. His curiosity was amoral in its hunger.

Barbara McClintock spent six decades studying corn genetics in scientific exile. She spoke of "listening" to what each plant wanted to tell her, developing such intimacy with maize chromosomes that she could identify each one by sight. When her jumping genes theory was finally accepted, she was 81. "I knew I was right," she said. The Nobel committee agreed, forty years late.

In 1847, Ignaz Semmelweis noticed that maternity wards staffed by doctors had three times the mortality rate of those run by midwives. His curiosity was specific: why? He discovered doctors performed autopsies before delivering babies—without washing their hands. His solution dropped mortality from 18% to 1%. His reward? Colleagues had him institutionalized. He died in an asylum, beaten by guards. Curiosity can be fatal to its bearer.`,
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80"
  },
  {
    id: "8",
    title: "The Habits of Genius: Passion",
    author: "David Steinberg",
    date: "September 1, 2025",
    category: "Philosophy",
    excerpt: "Passion is compulsion, not enthusiasm. It is the difference between interest and possession. The passionate do not choose their subject—they are colonized by it.",
    content: `Passion is compulsion, not enthusiasm. It is the difference between interest and possession. The passionate do not choose their subject—they are colonized by it. This is not the passion of motivational posters. This is closer to illness than to inspiration.

Passion is fundamentally unreasonable. It makes you forget to eat, ruins relationships, empties bank accounts. It is not sustainable or balanced—those are words for hobbies. Real passion is a kind of productive madness, a beneficial obsession that happens to create rather than destroy. The passionate person is not admirable so much as afflicted. The work is not a choice but a metabolic necessity.

**Historical Examples**

Vincent van Gogh produced over 2,100 artworks in a decade—sometimes three paintings in a single day. He sold one painting in his lifetime. He ate his paints when he couldn't afford food, writing to his brother: "The chrome yellow tastes of joy." His passion literally consumed him.

Marie Curie carried radioactive isotopes in her pockets, loving their pretty glow. Her laboratory notebooks are still radioactive 100 years later—they'll remain so for another 1,500 years. She died from her passion, her bone marrow destroyed by the very elements she discovered. When offered a lucrative patent for radium extraction, she refused: "Radium belongs to all humanity."

Gregor Mendel bred 29,000 pea plants over eight years in monastery obscurity, hand-pollinating each one with a paintbrush, tracking seven characteristics through multiple generations. His fellow monks thought him mad. He presented his findings to forty scientists—none understood. He died unknown, his papers burned by his successor. Sixteen years after his death, three scientists independently rediscovered his work. The entire field of genetics was hiding in one man's garden, waiting.`,
    imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"
  },
  {
    id: "9",
    title: "The Habits of Genius: Imagination",
    author: "David Steinberg",
    date: "September 1, 2025",
    category: "Philosophy",
    excerpt: "Imagination is not daydreaming. It is active construction. The imaginative mind builds complete worlds, then reverse-engineers them into existence.",
    content: `Imagination does not escape reality—it is the discipline to see what is not yet allowed and to live in that unseen world until the existing one concedes. It is an act of rebellion against the tyranny of the real.

Imagination is not daydreaming. It is romanticized as such, but I see it as active construction. The imaginative mind builds complete worlds, then reverse-engineers them into existence. It sees not what is, but what must become. This requires a kind of stubborn faith: holding the imagined thing so clearly that others begin to see it too. Imagination is contagious unreality that gradually infects the actual.

**Historical Examples**

Einstein's thought experiments were children's games with universe-breaking consequences. At 16, he imagined chasing a light beam. This juvenile fantasy unraveled Newton's cosmos. Later, he imagined falling in an elevator, feeling weightless—and realized gravity and acceleration were identical. He never performed these experiments. He didn't need to. "Imagination is more important than knowledge," he said, "for knowledge is limited to all we now know and understand, while imagination embraces the entire world."

Nikola Tesla claimed he could test inventions entirely in his mind, running virtual machines for weeks, then mentally disassembling them to check for wear. "Before I put a sketch on paper, the whole idea is worked out mentally. I change the construction, make improvements, and even operate the device in my mind." His alternating current system was debugged in imagination before metal was touched.

Elias Howe struggled for years to design a working sewing machine. One night, he dreamed he was captured by cannibals who threatened to kill him unless he invented one. In the dream, he noticed their spears had holes near the tips. He woke at 4 AM and rushed to his workshop—the eye of the needle needed to be at the point, not the base. The solution came from a nightmare about dancing cannibals. Imagination doesn't discriminate in its sources.`,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    id: "10",
    title: "The Habits of Genius: Childlike Perspective",
    author: "David Steinberg",
    date: "September 1, 2025",
    category: "Philosophy",
    excerpt: "The adult learns categories; the child sees without them. Genius reclaims that vision, stripping away convention to expose what is raw.",
    content: `The adult learns categories; the child sees without them. Genius reclaims that vision, stripping away convention to expose what is raw. This is why genius appears naïve: it chooses the eye that is untrained, and therefore unblinded.

The childlike perspective is not innocence but a cultivated ignorance of impossibility. Children don't know what can't be done, so they attempt everything. Adults learn limitations; genius unlearns them. This requires a deliberate forgetting, a strategic amnesia about how things "should" work. The childlike mind asks forbidden questions because it doesn't know they're forbidden. It combines things that don't belong together because no one told it they were separate.

**Historical Examples**

Pablo Picasso spent his youth mastering classical technique, then his adulthood destroying it. "It took me four years to paint like Raphael, but a lifetime to paint like a child." His late works look primitive, almost clumsy—this was decades of unlearning. He drew bulls by reducing them, stroke by stroke, until only three lines remained. The simplicity was harder than the complexity.

Richard Feynman taught himself to see without naming. He'd look at a flower and forget the word "flower," seeing only colors and shapes. He played bongos for ballet dancers, picked locks at Los Alamos for fun, drew nude models while working on quantum mechanics. When asked about his Nobel Prize, he said: "I do not like honors. I've already got the prize: the pleasure of finding things out."

Mathematician Srinivasa Ramanujan had almost no formal training. He rediscovered centuries of Western mathematics alone, creating his own notation. When Hardy, the British mathematician, received Ramanujan's first letter, he nearly dismissed it as the work of a crank—the notation was all wrong. Then he realized: Ramanujan had independently derived theorems that took Europe 300 years to develop. His childlike approach, uncontaminated by convention, led him to truths by paths no trained mathematician would take. "An equation means nothing to me," he said, "unless it expresses a thought of God."`,
    imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80"
  },
  {
    id: "0",
    title: "The Paradox of Freedom: Questions & No Answers",
    author: "Peter Lake",
    date: "October 21, 2025",
    category: "Philosophy",
    excerpt: "Will freedom ultimately feel like an interlude between different states? An exploration of how freedom itself can create new forms of coercion, and what this means for achievement culture in modern life.",
    content: `Will freedom ultimately feel like an interlude between different states? These questions may be irrelevant given our lifespan, but they're worth asking. Freedom is hard to define in absolute terms—perhaps it's easier to define by its opposite. Freedom becomes the transition from constraint to liberation, a feeling of having moved from captivity to possibility. This sidesteps the definition altogether.

The question then becomes: once you've been in this state of freedom for a prolonged period, what happens next? Are you perpetually free simply because of the absence of what used to be? Left to our own devices, might another form of coercion creep up—different from the last because it has its birth in this new free state? What is that coercion? What might it look like? Should we watch for it?

There are technical definitions of freedom I won't address here. I'm thinking more freely about how it becomes natural for us to create institutions as we settle into this new state. Is it possible we create new forms of coercion that are the product of being free? What might that look like today? It's an interesting thought experiment.

In certain parts of elite society—though we don't really know how elite it is—there's no longer a clear master. The existing bureaucracies and biases were masters. Often cruel masters. Social norms could be bad, though sometimes good. I wonder: is it possible that technology and modern life are key elements of what it means to be free today? Freedom used to be about literal physical restraints on movement or speech. But what happens when we're left to our own devices? Complete freedom can lead to internal chaos.

I'm reminded of an old saying: a kite that performs well needs to be tied down, otherwise it vanishes in the chaos of the wind. Might total freedom gradually erode even useful constraints, to the point that we fly away completely?

**The Culture of Achievement**

There's a natural desire for achievement. What's unusual about today is that human achievement is more broadly accessible than ever before. We live in a culture of achievement. It's considered positive and good that achievement and its rewards—accolades, financial benefits, status—are not confined to aristocracy. While there's much work to do, the freedom to achieve is more accessible now than at any other moment in recorded history. Achievement is viewed not just positively but as a human right. We must always improve ourselves through learning, developing our minds, and being inspired by other achievers.

Where did that come from? It's a rather new concept, because the ability to even try is new. Previously there was a more basic system of master and slave, powerful and powerless. The scope of achievement was so narrow that ambition was ignored.

As I reflect on this, I think I'm a typical example of this current state of thought. Yet from an outside perspective, it's a bit sad. Why am I always trying to get better? Why do we have to be better? Why do we have to be so good?

The duty to live well, to think of family and community—perhaps these are being coerced inside of people, restrained so the goal is never lost. The worst part: there is no master to force me. I have a master embedded in my mind that's dissatisfied with achievement and equally self-critical of not achieving.

Not achieving is lazy. A failure. It carries no social benefits. Yet those things that matter at the time of death—love, family, relationships—are only appreciated when time is scarce. In the meantime, the typical person is both master and slave. Their need to accumulate capital, a necessity at first, becomes unquestionable. Any desire to stop accumulating or achieving is viewed internally as a failure.

**The Invisible Master**

This is a root cause worth thinking about. We're in a particular moment where freedom itself creates compulsion. It brings its own problems. If our master becomes unreasonable and ruins our lives, we revolt. What is the nature of this revolution if the master has no physical form but is rather a taught concept in our own minds?

When somebody says "you can do this" or "I believe in you, you can do that," it creates an insatiable desire. It becomes uncontrolled as it increasingly loses connection to rationality.

There's a master that evolved within us from social norms. Some come with positive social value and personal gratification, such as sacrifices made for friends or family. But if we're told we can do anything, there's no limit and no satisfactory endpoint. It becomes a bottomless pit.

Being free means being free from constraints. But now freedom itself leads to a new everlasting attitude: we can be anything, do anything, and our social status is based on our achievements. The paradox emerges: could total freedom—total capability to try anything—lead to a new constraint? Are we unable to simply live as good family members, good community members, good humans?

Rejecting achievement becomes an excuse, we tell ourselves. It's not okay to reject it. Failure is something to overcome. Don't give up.

The master is there: the master is us. The master tells us it's not okay. How do we manage this master? How do we destroy it?

**The Revolution Within**

Perhaps it begins with depression, lack of humanity, lack of meaning—talked about so much because it's real. But then it becomes normalized, almost boring to say. The lack of humanity becomes so acute that revolution becomes equivalent to suicide.

The data shows increased depression, burnout, and unhappiness. I'm usually skeptical about such data—maybe we're just measuring differently. But there's something to it. Even my own anecdotes support it. The burnout and unhappiness I've experienced came from trying because I can, because I'm free.

Yet to be free, shouldn't all the things I try—the anxieties, the difficulties—have some value? At what point does it normalize? If it never normalizes and my whole life becomes achievement-focused, it will naturally turn on me and lead to depression.

Are these signs that freedom is leading to pathology?`,
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
  },
  {
    id: "1",
    title: "The Resonance of Silence: John Cage and the Art of Listening",
    author: "Elena Martinez",
    date: "October 18, 2025",
    category: "Classical",
    excerpt: "An exploration of how John Cage's 4'33\" redefined our understanding of music, silence, and the act of listening itself.",
    content: `John Cage's infamous composition 4'33\" stands as one of the most provocative works in twentieth-century music. Premiered in 1952, the piece consists of three movements during which the performer does not play their instrument. What emerges is not silence, but rather the ambient sounds of the environment—the rustling of programs, coughs from the audience, the hum of ventilation systems.

Cage challenged the fundamental assumption that music must be intentionally produced sound. Instead, he proposed that music exists in the act of listening itself. The piece forces us to confront our expectations and preconceptions about what constitutes a musical experience.

In our contemporary moment, saturated with constant audio stimulation, Cage's work feels more relevant than ever. It asks us to pause, to truly listen, and to find music in the world around us. The piece is not about silence—it's about attention, presence, and the radical act of simply being aware.

The legacy of 4'33\" extends far beyond the concert hall. It influenced generations of experimental composers, sound artists, and musicians across genres. From ambient music to field recordings, from minimalism to noise music, Cage's ideas about sound and silence continue to reverberate through contemporary musical practice.`,
    imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80"
  },
  {
    id: "2",
    title: "Afrobeat's Global Revolution: From Lagos to the World",
    author: "Kwame Osei",
    date: "October 15, 2025",
    category: "World Music",
    excerpt: "Tracing the evolution of Afrobeat from Fela Kuti's political anthems to its contemporary global influence.",
    content: `Afrobeat emerged in the late 1960s and early 1970s as a revolutionary fusion of West African musical traditions, jazz, funk, and highlife. At its center was Fela Kuti, the Nigerian multi-instrumentalist, composer, and political activist who used music as a weapon against corruption and oppression.

Fela's Afrobeat was characterized by extended instrumental sections, complex polyrhythmic percussion, jazz-influenced horn arrangements, and politically charged lyrics sung in Nigerian Pidgin English. Songs often stretched beyond twenty minutes, creating hypnotic grooves that were simultaneously danceable and intellectually engaging.

But Afrobeat was never just about the music. Fela's compound in Lagos, the Kalakuta Republic, became a symbol of resistance. His music directly challenged the Nigerian military government, resulting in multiple arrests, beatings, and the destruction of his home. The music and the politics were inseparable.

Today, Afrobeat's influence is undeniable. Artists like Burna Boy, Wizkid, and Tiwa Savage have brought African sounds to global audiences, while Western artists increasingly incorporate Afrobeat rhythms and production techniques. The genre has evolved, blending with hip-hop, R&B, and electronic music, but its core spirit—the fusion of infectious rhythm with social consciousness—remains intact.

The global rise of Afrobeat represents more than musical influence. It signals a shift in cultural power, a recognition that African artists are not merely recipients of Western musical trends but innovators shaping the future of popular music worldwide.`,
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
  },
  {
    id: "3",
    title: "The Synthesizer's Soul: Electronic Music and Human Expression",
    author: "Sarah Chen",
    date: "October 12, 2025",
    category: "Electronic",
    excerpt: "How electronic instruments, often dismissed as cold and mechanical, became vehicles for profound emotional expression.",
    content: `There's a persistent myth that electronic music is somehow less human than acoustic music. Critics have long argued that synthesizers and drum machines produce sterile, emotionless sounds compared to the warmth of traditional instruments. This perspective fundamentally misunderstands both the nature of electronic music and the essence of musical expression.

The synthesizer is an instrument like any other—a tool for human creativity. What makes music emotionally resonant is not the mechanism of sound production but the intention, skill, and vision of the artist wielding it. From Wendy Carlos's groundbreaking "Switched-On Bach" to Kraftwerk's robotic meditations on modern life, from Detroit techno's futuristic soul to Aphex Twin's digital surrealism, electronic music has consistently demonstrated profound emotional depth.

Consider the work of artists like Burial, whose ghostly, sample-based productions evoke urban loneliness and nocturnal melancholy with devastating effectiveness. Or Arca's visceral, often abrasive electronic compositions that feel intensely personal and emotionally raw. These artists use electronic tools not to escape human emotion but to explore it in new ways.

The synthesizer's ability to create entirely new sounds—timbres that have never existed in nature—offers unique expressive possibilities. It allows musicians to externalize internal emotional states that might be impossible to capture with conventional instruments. The "coldness" critics perceive is often a deliberate aesthetic choice, a way of exploring alienation, technology's impact on human experience, or the sublime beauty of the mechanical.

As we move further into the twenty-first century, the distinction between electronic and acoustic music becomes increasingly meaningless. Most contemporary music production involves both. The question is not whether electronic music can be emotionally expressive—it demonstrably can—but rather how we can continue to push these tools in new and meaningful directions.`,
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80"
  },
  {
    id: "4",
    title: "Jazz at the Margins: The Forgotten Women of Bebop",
    author: "Marcus Williams",
    date: "October 8, 2025",
    category: "Jazz",
    excerpt: "Recovering the stories of female instrumentalists who shaped bebop but were written out of jazz history.",
    content: `The standard narrative of bebop's development focuses almost exclusively on male innovators: Charlie Parker, Dizzy Gillespie, Thelonious Monk, Bud Powell. This history is not wrong, but it is incomplete. Women were present in bebop's formative years, contributing as instrumentalists, composers, and bandleaders, yet their stories have been systematically marginalized or erased.

Mary Lou Williams stands as perhaps the most prominent example. A brilliant pianist and arranger, Williams was deeply involved in bebop's development, mentoring younger musicians and writing arrangements for major bandleaders. Her apartment became a gathering place for bebop innovators, and her compositions influenced the genre's evolution. Yet she is rarely mentioned in the same breath as her male contemporaries.

Pianist Beryl Booker led her own trio in the 1940s and 1950s, performing at major venues and recording prolifically. Trumpeter Clora Bryant navigated the male-dominated bebop scene with remarkable skill and persistence. Saxophonist Vi Redd brought fierce energy to her performances. These women and others faced not only the general challenges of being jazz musicians but also explicit gender discrimination that limited their opportunities and recognition.

The erasure of women from bebop history reflects broader patterns in jazz historiography and music criticism. Women were often relegated to vocal roles, with female instrumentalists viewed as novelties rather than serious artists. When they did achieve recognition, it was frequently qualified or diminished.

Recovering these stories matters not just for historical accuracy but for understanding bebop itself. The genre developed in a richer, more diverse context than the standard narrative suggests. Recognizing women's contributions complicates and enriches our understanding of this pivotal moment in jazz history, revealing a more complete picture of the music's evolution and the social dynamics that shaped it.`,
    imageUrl: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80"
  },
  {
    id: "5",
    title: "Punk's Paradox: Authenticity and Commodification",
    author: "Jamie Rodriguez",
    date: "October 5, 2025",
    category: "Rock",
    excerpt: "Examining the tension between punk's anti-establishment ethos and its inevitable absorption into mainstream culture.",
    content: `Punk rock emerged in the mid-1970s as a rejection of mainstream rock's perceived bloat and pretension. With its DIY ethos, aggressive simplicity, and anti-establishment politics, punk positioned itself as authentic expression against commercial artifice. Yet from its inception, punk has been entangled with the very commercial forces it claimed to oppose.

The Sex Pistols, often cited as punk's quintessential band, were essentially a manufactured group, assembled by boutique owner Malcolm McLaren as a marketing vehicle. Their outrageous behavior and confrontational style were as much calculated provocation as genuine rebellion. This doesn't diminish their music's impact, but it complicates the narrative of punk as pure, unmediated authenticity.

This tension between authenticity and commodification has defined punk throughout its history. Independent labels and DIY distribution networks emerged as alternatives to major label control, yet successful punk bands inevitably faced pressure to sign with larger labels for wider distribution. Punk fashion, initially a form of subcultural identity, was quickly appropriated by mainstream fashion designers.

The paradox deepens in punk's relationship with its own history. A movement that rejected tradition and celebrated creative destruction has developed its own rigid orthodoxies about what constitutes "real" punk. Debates about authenticity—who's punk enough, who's sold out—have become central to punk discourse, often overshadowing the music itself.

Perhaps the most honest approach is to acknowledge punk's contradictions rather than resolve them. Punk's power lies not in its purity but in its productive tensions—between structure and chaos, between individual expression and collective identity, between rejection of the mainstream and desire for impact. These contradictions don't undermine punk; they are punk, reflecting the complex realities of making oppositional culture within capitalist society.`,
    imageUrl: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&q=80"
  },
  {
    id: "6",
    title: "Sampling as Scholarship: Hip-Hop's Archival Practice",
    author: "Dr. Aisha Thompson",
    date: "October 1, 2025",
    category: "Hip-Hop",
    excerpt: "How hip-hop producers function as musical historians, preserving and recontextualizing forgotten recordings.",
    content: `Hip-hop production is often discussed in terms of creativity and innovation, but it also functions as a form of musical scholarship. Producers digging through crates of vinyl, searching for obscure breaks and forgotten melodies, are engaging in archival practice—preserving, cataloging, and recontextualizing musical history.

The practice of sampling emerged from practical and economic constraints. Early hip-hop DJs and producers lacked access to live musicians and expensive studio equipment, so they worked with what was available: turntables and records. But this limitation became an aesthetic strength, developing into a sophisticated art form with its own techniques, ethics, and cultural significance.

Producers like DJ Shadow, Madlib, and J Dilla have built careers on deep musical excavation, uncovering obscure recordings from around the world and giving them new life in contemporary contexts. Their work preserves musical traditions that might otherwise be forgotten, introducing new audiences to jazz, soul, funk, and international music from past decades.

This archival function extends beyond mere preservation. Sampling recontextualizes source material, creating new meanings through juxtaposition and transformation. A drum break from a 1970s funk record takes on different significance when looped and placed under contemporary rap vocals. The original recording is honored but also critiqued, reinterpreted, and made relevant to new contexts.

The legal battles over sampling have often obscured its cultural and scholarly value. Copyright law treats samples as theft, but this framework fails to recognize sampling as a legitimate form of musical citation, akin to quotation in written scholarship. Hip-hop producers are not simply stealing; they are engaging in a complex dialogue with musical history, one that enriches both the source material and the new work.

As physical media becomes obsolete and streaming services dominate music consumption, hip-hop's archival function becomes even more important. Producers continue to preserve musical memory, ensuring that the past remains audible and relevant in the present.`,
    imageUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&q=80"
  }
];

