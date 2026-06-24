import Link from "next/link";
import Image from "next/image";

const credibility = [
  { stat: "10 yrs", label: "UX research + consumer insights" },
  { stat: "$50M+", label: "innovation portfolio influenced" },
  { stat: "300+", label: "associates enabled" },
  { stat: "Startup to enterprise", label: "scale research" },
];

const highlights = [
  {
    metric: "10 Years",
    label: "Research leadership",
    copy: "Across retail e-commerce, mobile experiences, home improvement, grooming, fabric care, and global consumer products.",
  },
  {
    metric: "$50M+",
    label: "Innovation portfolio influenced",
    copy: "Consumer research shaping Venus product innovation and launch strategy at Procter & Gamble.",
  },
  {
    metric: "3,000+",
    label: "Customer signals analyzed",
    copy: "Python and AI-assisted workflows to surface churn themes and prioritize opportunities at scale.",
  },
  {
    metric: "300+",
    label: "Associates enabled",
    copy: "Scaled insight through standards, workshops, and a research newsletter.",
  },
];

const seniorOperations = [
  {
    title: "Set the research agenda, not just the study plan",
    body: "I translate ambiguous business questions into research strategy that clarifies what is worth building, what to de-risk first, and where the real opportunity sits, so teams invest in the right problems.",
  },
  {
    title: "Influence product strategy and executive decisions",
    body: "I bring research into the room where roadmap and prioritization decisions get made, partnering with Product, Design, Engineering, and leadership, including making the case for what not to build.",
  },
  {
    title: "Turn conflicting signals into a clear point of view",
    body: "I triangulate interviews, behavior, surveys, analytics, support data, and competitive context into a defensible narrative, then tell it in a way executives can act on.",
  },
  {
    title: "Build research systems that outlast any single study",
    body: "I stand up the standards, repositories, enablement, and AI-assisted workflows that scale research quality across teams and raise the decision quality of the whole organization.",
  },
];

const decisionProblems = [
  "Where is our experience quietly losing customers, and what will it cost us if we do not fix it?",
  "We have ten things we could build. Which one actually moves the metric?",
  "Is this a real, durable customer need, or are we about to build something nobody wants?",
  "Our data says one thing and our customers say another. What is actually true?",
  "How do we move into a new problem space we have never researched before?",
  "How do we make customer insight something the whole team uses, not just one deck?",
];

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
  gold50: "#f2f7f4",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white border-b border-navy-100 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold-100/50 blur-3xl"
        />
        <div className="relative max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-[1.2fr_0.85fr] gap-10 md:gap-12 items-stretch">
          <div className="flex flex-col justify-center">
            <p className="text-gold-600 font-semibold text-xs md:text-sm uppercase tracking-[0.15em] mb-4">
              UX Research • Consumer Insights • Product Strategy
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-navy-900">
              Research that turns customer behavior into product strategy.
            </h1>
            <p className="mt-5 text-lg font-light text-navy-500 leading-relaxed">
              I&apos;m a senior UX research and consumer insights leader who
              has de-risked product bets across physical products, software,
              and digital commerce. I turn messy customer signals into clear
              decisions that help teams move faster, build with confidence,
              and influence business outcomes.
            </p>
            <p className="mt-4 text-base font-light text-navy-400 leading-relaxed">
              Open to senior through director-level opportunities across UX
              Research, Consumer Insights, and insight-led Product Strategy
              roles.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="bg-navy-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors"
              >
                View case studies
              </Link>
              <Link
                href="/about"
                className="border border-navy-300 text-navy-700 font-semibold px-6 py-3 rounded-lg hover:bg-navy-50 transition-colors"
              >
                About me
              </Link>
            </div>
          </div>
          <div className="relative w-full min-h-[420px] md:min-h-0 rounded-2xl overflow-hidden bg-gold-100">
            <Image
              src="/natasha-brown.png"
              alt="Natasha Brown, senior UX research and consumer insights leader"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="bg-navy-50">
        <div data-reveal className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {credibility.map((c) => (
            <div key={c.stat} className="text-center md:text-left">
              <span className="text-xl font-extrabold tracking-tight text-navy-900">
                {c.stat}
              </span>
              <span className="block md:inline md:ml-2 text-sm font-light text-navy-500">
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Formerly logos */}
      <section className="bg-navy-50 border-b border-navy-100">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <span className="text-sm text-navy-400 font-light">Experience across</span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 grayscale opacity-60">
            <Image src="/logos/lowes_logo.svg" alt="Lowe's" width={80} height={28} />
            <Image src="/logos/pg_logo.svg" alt="Procter & Gamble" width={60} height={28} />
            <Image src="/logos/Venus_logo.svg" alt="Venus" width={70} height={28} />
            <Image src="/logos/bounce_logo.svg" alt="Bounce" width={70} height={28} />
            <Image src="/logos/downy_logo.svg" alt="Downy" width={70} height={28} />
          </div>
        </div>
      </section>

      {/* How I operate at senior levels */}
      <section className="bg-white py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-6xl mx-auto px-6">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900">
            How I operate at senior levels
          </h2>
          <p className="mt-4 text-lg font-light text-navy-500 max-w-3xl leading-relaxed">
            Senior research leadership is less about running studies and more
            about shaping which questions get asked, which bets get made, and
            how the organization learns. Here is how I operate.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-navy-100 border border-navy-100 rounded-2xl overflow-hidden">
            {seniorOperations.map((item, i) => (
              <div key={item.title} className="bg-white p-8">
                <span className="text-sm font-semibold text-gold-600">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-bold text-navy-900 mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-navy-500 font-light leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Curve top={C.white} bottom={C.sand50} />

      {/* Selected decision problems I solve */}
      <section className="bg-sand-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-6xl mx-auto px-6">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Where I add value
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900">
            Selected decision problems I solve
          </h2>
          <p className="mt-4 text-lg font-light text-navy-500 max-w-3xl leading-relaxed">
            Teams bring me in when the decision is high-stakes and the signal is
            messy. A few of the questions I help answer:
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {decisionProblems.map((q) => (
              <div
                key={q}
                className="bg-white border border-navy-100 rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-navy-900/5 hover:border-navy-200"
              >
                <p className="text-lg font-medium text-navy-900 leading-snug">
                  &ldquo;{q}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Curve top={C.sand50} bottom={C.gold50} />

      {/* Impact at a glance */}
      <section className="bg-gold-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-6xl mx-auto px-6">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Career Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900">
            Impact at a glance
          </h2>
          <p className="mt-4 text-lg font-light text-navy-500 max-w-3xl leading-relaxed">
            Research is only valuable when it changes what teams do. A snapshot
            of the business impact, research scale, and organizational influence
            behind that work.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item) => (
              <div
                key={item.metric}
                className="bg-white border border-navy-100 rounded-2xl p-7 border-t-4 border-t-gold-400"
              >
                <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900">
                  {item.metric}
                </p>
                <p className="mt-1 font-semibold text-navy-800">{item.label}</p>
                <p className="mt-3 text-sm text-navy-500 font-light leading-relaxed">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
