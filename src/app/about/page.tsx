import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Natasha Brown, UX Research & Consumer Insights Leader",
  description:
    "Natasha Brown is a senior UX research and consumer insights leader with 10 years across Lowe's Digital and Procter & Gamble. From a Chemical Engineering foundation to consumer product innovation and digital UX research leadership, she turns messy customer signals into clear product direction and business impact.",
};

const coreCapabilities = [
  "Mixed-methods research",
  "Discovery and generative research",
  "Evaluative usability testing",
  "Survey design and analysis",
  "Behavioral and quantitative analysis",
  "Information architecture",
  "A/B testing partnership",
  "Executive storytelling",
  "Research roadmapping",
  "Research operations and enablement",
  "AI-assisted synthesis",
  "Cross-functional facilitation",
  "Mentorship and team coaching",
];

const qualitativeMethods = [
  "In-Depth Interviews",
  "Usability Testing",
  "Card Sorting",
  "Journey Mapping",
  "Persona Development",
  "Affinity Mapping",
  "Contextual Inquiry",
];

const quantitativeMethods = [
  "Surveys",
  "Tree Testing",
  "A/B Testing",
  "Heat Maps",
  "Preference Testing",
  "Max-Diff",
  "Latent Dirichlet Allocation (LDA)",
  "Data Visualization",
];

const platforms = [
  "Qualtrics",
  "Maze",
  "UserTesting",
  "dscout",
  "SurveyMonkey",
  "Medallia",
  "aytm",
  "Alida",
  "Microsoft Forms",
  "respondent.io",
];

const leadershipEdge = [
  {
    title: "I operate well in ambiguity",
    body: "I am at my best in under-defined problem spaces, where the question itself is not clear yet. I bring structure to the fog and a credible path to a decision.",
  },
  {
    title: "I translate messy signals into clear direction",
    body: "Interviews, behavior, surveys, analytics, support data, competitive context. I triangulate conflicting inputs into one defensible point of view leaders can act on.",
  },
  {
    title: "I bridge consumer insight, digital product, and business strategy",
    body: "Physical products at P&G, digital experiences at Lowe's. I connect what customers need to what the business must prioritize, in language product and leadership both understand.",
  },
  {
    title: "I help teams make better decisions, not just gather more data",
    body: "Research only matters if it changes what a team does. I design every engagement around the decision it needs to inform.",
  },
];

const approach = [
  {
    step: "01",
    title: "Frame the decision",
    description:
      "I start with the decision you are trying to make, not the method. A sharply framed question is already half the answer, and it keeps research honest about what it actually needs to prove.",
  },
  {
    step: "02",
    title: "Design for signal",
    description:
      "I choose methods for the clearest signal on that specific question, balancing depth with speed. The goal is confidence, not coverage.",
  },
  {
    step: "03",
    title: "Deliver for action",
    description:
      "I structure findings around what to do next: a clear point of view, prioritized recommendations, and executive-ready storytelling. No 80-page decks that gather dust.",
  },
];

const scaleResearch = [
  {
    title: "Build reusable research standards",
    body: "I create templates, planning rituals, and synthesis structures that help teams ask sharper questions, align earlier, and make insights easier to reuse.",
  },
  {
    title: "Enable teams to use insight better",
    body: "I've mentored researchers, coached cross-functional partners, and helped teams move from one-off findings to shared decision frameworks.",
  },
  {
    title: "Turn scattered signals into roadmap direction",
    body: "I connect interviews, surveys, analytics, support data, and customer feedback into clear priorities that product, design, and business leaders can act on.",
  },
  {
    title: "Raise the quality of product decisions",
    body: "I help teams clarify what needs to be learned, what risk needs to be reduced, and what evidence is strong enough to support a product bet.",
  },
];

function PillRow({
  items,
  variant = "method",
}: {
  items: string[];
  variant?: "core" | "method" | "platform";
}) {
  const styles = {
    core: "bg-white border border-navy-300 text-navy-900 font-semibold px-4 py-2 text-sm shadow-sm",
    method: "bg-white border border-navy-200 text-navy-700 font-medium px-3.5 py-1.5 text-sm",
    platform: "bg-navy-100/60 text-navy-500 font-medium px-3 py-1 text-xs",
  };
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <span key={item} className={`rounded-full ${styles[variant]}`}>
          {item}
        </span>
      ))}
    </div>
  );
}

// Curved-down divider: the top section's color sweeps down into the section below.
function Curve({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ backgroundColor: bottom }}
      className="relative -mt-px"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="block w-full h-14 md:h-20"
      >
        <path d="M0,0 H1200 V18 C800,124 400,124 0,18 Z" fill={top} />
      </svg>
    </div>
  );
}

const C = {
  white: "#ffffff",
  navy50: "#f8f9fa",
  sand50: "#faf8f4",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white border-b border-navy-100 pt-10 md:pt-12 pb-16 md:pb-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold-100/40 blur-3xl"
        />
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div>
            <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-navy-900 max-w-2xl">
              Research should change what teams do, not just what they know.
            </h1>
          </div>
          <div className="relative justify-self-center">
            <div className="absolute -inset-2 bg-gold-100 rounded-2xl" />
            <Image
              src="/about-me-image.jpg"
              alt="Natasha Brown"
              width={340}
              height={420}
              className="relative rounded-2xl object-cover w-[260px] md:w-[320px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* Bio / narrative arc */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-3xl mx-auto px-6 space-y-6 text-navy-700">
          <p className="text-xl font-light leading-relaxed">
            I&apos;m Natasha Brown, a senior UX research and consumer insights
            leader with 10 years turning customer behavior into product
            direction and business impact, across retail e-commerce, mobile and
            digital experiences, and global consumer products.
          </p>
          <p className="font-light leading-relaxed">
            I&apos;ve led research across complex cross-functional initiatives,
            mentored researchers, built reusable research standards, and helped
            teams turn scattered customer signals into clearer roadmap
            decisions.
          </p>
          <p className="font-light leading-relaxed">
            My path started with a B.S. in Chemical Engineering from the
            University of Florida, where I learned to think in systems, test
            hypotheses, and trust evidence over assumption. That mindset carried
            into Procter &amp; Gamble, where I owned consumer
            research for physical product innovation across Venus and Bounce,
            connecting how people actually live and use products to design
            choices, claims, and launch strategy. At Lowe&apos;s Digital, I
            brought that same rigor to digital product, leading UX research
            across e-commerce, post-purchase, and category experiences.
          </p>
          <p className="font-light leading-relaxed">
            The throughline is the same whether the product is physical or
            digital: I turn messy customer signals into clear, defensible
            direction. Senior research leadership, to me, is less about running
            studies and more about framing the right questions, influencing
            cross-functional partners and executives, and building the systems,
            standards, and AI-assisted workflows that help an organization use
            insight well beyond any single study.
          </p>
        </div>
      </section>

      <Curve top={C.white} bottom={C.navy50} />

      {/* Leadership edge */}
      <section className="bg-navy-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-6xl mx-auto px-6">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
            What sets my work apart
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900 mb-12">
            A research leader, not just a researcher
          </h2>
          <div className="grid sm:grid-cols-2 gap-px bg-navy-100 border border-navy-100 rounded-2xl overflow-hidden">
            {[...leadershipEdge, ...scaleResearch].map((item) => (
              <div key={item.title} className="bg-navy-50 p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-navy-600 font-light leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Curve top={C.navy50} bottom={C.white} />

      {/* Approach */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-6xl mx-auto px-6">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
            How I work
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900 mb-12">
            My approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {approach.map((item) => (
              <div key={item.step} className="relative">
                <span className="text-5xl font-extrabold text-navy-200">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-3 text-navy-900">
                  {item.title}
                </h3>
                <p className="text-navy-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Curve top={C.white} bottom={C.sand50} />

      {/* Capabilities & toolkit */}
      <section className="bg-sand-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-6xl mx-auto px-6">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Capabilities & toolkit
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900">
            Methods in service of decisions
          </h2>
          <p className="mt-4 text-lg font-light text-navy-500 max-w-3xl leading-relaxed">
            I match methods to the decision at hand, not the other way around.
            Here is the range I draw on, applied to the right problem at the
            right time.
          </p>

          <div className="mt-12 space-y-10">
            <div>
              <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4">
                Core capabilities
              </h3>
              <PillRow items={coreCapabilities} variant="core" />
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-1">
                  Qualitative
                </h3>
                <p className="text-sm text-navy-500 font-light mb-4">
                  To uncover root problems, needs, and motivations
                </p>
                <PillRow items={qualitativeMethods} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-1">
                  Quantitative
                </h3>
                <p className="text-sm text-navy-500 font-light mb-4">
                  To validate, measure behavior, and quantify opportunity
                </p>
                <PillRow items={quantitativeMethods} />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4">
                Platforms
              </h3>
              <PillRow items={platforms} variant="platform" />
            </div>
          </div>
        </div>
      </section>

      <Curve top={C.sand50} bottom={C.white} />

      {/* Beyond the work */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-3xl mx-auto px-6">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Beyond the work
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 mb-6">
            What keeps me curious
          </h2>
          <div className="space-y-5 text-navy-700 font-light leading-relaxed text-lg">
            <p>
              I am endlessly curious about why people do what they do, a trait
              that shows up everywhere from the products I study to the
              conversations I strike up. The engineer in me still loves a hard
              problem; the researcher in me loves the human story underneath it.
            </p>
            <p>
              Outside of work, I am a lover of travel and exploring different
              cultures through their food. I am also passionate about fitness,
              health, and well-being, the habits that keep me curious, grounded,
              and at my best.
            </p>
            <p>
              I care about building research cultures that are both rigorous and
              human, mentoring the next generation of researchers, and doing
              work that respects the customer and the business in equal measure.
            </p>
          </div>
        </div>
      </section>

      <Curve top={C.white} bottom={C.navy50} />

      {/* CTA */}
      <section className="bg-navy-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-navy-900">
            Let&apos;s build with confidence
          </h2>
          <p className="text-navy-500 font-light text-lg mb-8">
            Whether you&apos;re hiring for a senior research role or need a
            research partner for a high-stakes decision, I&apos;d love to hear
            what you&apos;re working on.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-navy-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-navy-700 transition-colors"
            >
              Start a Conversation
            </Link>
            <Link
              href="/portfolio"
              className="border border-navy-300 text-navy-700 font-semibold px-8 py-3 rounded-lg hover:bg-white transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
