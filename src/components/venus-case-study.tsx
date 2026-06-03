import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/data/caseStudies";

function InlineArt({ src }: { src: string }) {
  return (
    <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden border border-navy-100">
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 900px"
        className="object-cover"
      />
    </div>
  );
}

/* ---------- shared bits ---------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
      {children}
    </p>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
      <span className="text-navy-700 font-light leading-relaxed">
        {children}
      </span>
    </li>
  );
}

function SnapshotItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-2">
        {label}
      </h3>
      <p className="text-navy-700 font-light text-sm leading-relaxed">{value}</p>
    </div>
  );
}

function PlainList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((it) => (
        <li
          key={it}
          className="text-sm text-navy-600 font-light flex items-start gap-2.5"
        >
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
          {it}
        </li>
      ))}
    </ul>
  );
}

/* ---------- content ---------- */

const decision =
  "Should Venus continue investing in an exfoliating razor as the basis for a new premium tier, and if so, what benefit language, design cues, and success criteria would make the proposition credible?";

const researchOutputs = [
  "Unmet-needs framework",
  "Premium proposition feedback",
  "Benefit comprehension and appeal signals",
  "9-week in-use performance read",
  "Recommendation on whether to continue under current success criteria",
];

const contribution = [
  "Connected early premium proposition appeal to a deeper in-use validation plan so the team could evaluate whether the benefit was real, believable, and worth the price.",
  "Identified a gap between the exfoliating-bar technology and the desired and perceived benefit from actual product usage.",
  "Recommended not continuing the program under its current success criteria, protecting the business from investing behind a benefit that did not yet deliver superiority.",
  "Helped the team redefine the benefit space around 'texture-less' skin and upgrade how the brand thought about smoothness for the premium-minded consumer.",
  "Demonstrated that the strongest research contribution is sometimes helping a team stop, pivot, or reframe before launch.",
];

const strategy = [
  {
    n: "01",
    title: "Define the premium opportunity",
    body: "Aligned the research around the business question: could an exfoliating razor create a new standard of superiority and justify a premium price tier?",
  },
  {
    n: "02",
    title: "Explore unmet needs and benefit language",
    body: "Used metaphorical elicitation and virtual interviews to understand the target user's desired shaving experience, emotional expectations, and language around smoothness, exfoliation, and premium care.",
  },
  {
    n: "03",
    title: "Test the holistic proposition",
    body: "Evaluated razor, accessories, packaging, and benefit articulation to understand whether the premium concept felt desirable, credible, sustainable, and worth more.",
  },
  {
    n: "04",
    title: "Validate real-world performance",
    body: "Used a 9-week at-home split-body diary study to test whether the product experience delivered against the exfoliation promise in actual use.",
  },
];

const ladder = [
  {
    label: "Exploratory signal",
    items: [
      "6 metaphorical elicitation interviews",
      "Desired experience and unmet-needs exploration",
    ],
  },
  {
    label: "Proposition signal",
    items: [
      "17 in-depth interviews",
      "Holistic proposition prototypes",
      "Razor, accessories, packaging, and messaging",
    ],
  },
  {
    label: "Performance signal",
    items: [
      "30 participants",
      "9-week at-home split-body diary study",
      "Handle and exfoliating bar evaluation",
    ],
  },
  {
    label: "Decision signal",
    items: [
      "Strong early premium appeal",
      "Weak benefit superiority in use",
      "Recommendation not to continue under current criteria",
    ],
  },
];

const promiseReality = [
  {
    label: "Premium promise",
    tone: "neutral" as const,
    items: [
      "Sophisticated design",
      "Elevated unboxing",
      "Sustainable cues",
      "Exfoliating benefit",
      "Higher price potential",
    ],
  },
  {
    label: "In-use reality",
    tone: "neutral" as const,
    items: [
      "Benefit was not consistently felt",
      "Bar pattern was relatively unimportant",
      "Performance was not superior to the best current cartridge",
      "Exfoliation expectations did not match real usage routines",
    ],
  },
  {
    label: "Strategic recommendation",
    tone: "accent" as const,
    items: [
      "Do not continue under current success criteria",
      "Reframe the benefit space",
      "Explore 'texture-less' skin and credible premium smoothness cues",
      "Revisit success criteria and category-relative performance",
    ],
  },
];

const insights = [
  {
    insight: "The premium world was compelling.",
    why: "Participants responded to the sophisticated design, packaging, and unboxing experience. The proposition felt elevated, high-end, and more sustainable.",
    implication:
      "The team had permission to pursue a more premium design language, but the product benefit still needed to earn the price.",
  },
  {
    insight: "Concept appeal did not guarantee benefit credibility.",
    why: "Consumers liked the idea of combining shaving and exfoliation, but liking the idea was different from believing the product delivered exfoliation in use.",
    implication:
      "The team needed to validate the physical benefit experience, not just the proposition and packaging.",
  },
  {
    insight: "The exfoliation benefit was not strong enough in real use.",
    why: "Participants did not consistently feel the exfoliation experience, and some questioned whether exfoliation should happen every time they shaved.",
    implication:
      "The current product design and benefit articulation did not meet the success criteria for a premium superiority claim.",
  },
  {
    insight: "The stronger opportunity was redefining smoothness.",
    why: "The research surfaced a more nuanced premium consumer desire: not just hair removal, but skin that feels even, refined, and texture-less.",
    implication:
      "The team had an opportunity to evolve the benefit space and language beyond traditional smoothness or exfoliation claims.",
  },
];

const exploreDetailsA = [
  "6 virtual 1:1 interviews, 60 minutes each",
  "Metaphorical elicitation with collage homework",
  "Participants reflected on current vs. ideal shaving experience",
  "Recruited women 18 to 40 who wet shaved with 5-blade refillable razors and spent on other hair-removal methods",
];

const exploreDetailsB = [
  "17 1:1 interviews, 45 minutes each",
  "Holistic proposition prototypes: razor, accessories, packaging, and working product concepts",
  "Included acceptors of a newly launched product to understand cannibalization risk",
];

const testDetails = [
  "30 participants over 9 weeks total",
  "2 weeks focused on handle, 7 weeks focused on the exfoliation bar",
  "Weekly 1:1 check-ins with 5 users, 25-minute sessions",
  "Bar patterns selected from a previous online survey",
  "Split-body shave to compare performance",
];

const testFindings = [
  "The specific exfoliation bar pattern was relatively unimportant.",
  "Performance was not superior to the best-designed existing cartridge.",
  "There was a gap between expected exfoliation and experienced exfoliation.",
  "Users saw shaving and exfoliating as two separate rituals.",
  "Some users did not believe exfoliation should happen every time they shaved.",
];

const recommendations = [
  {
    title: "Do not continue under current success criteria",
    body: "The benefit did not deliver clear enough superiority in real use to justify the intended premium claim.",
  },
  {
    title: "Revisit the success metrics",
    body: "Relative category performance mattered more than overall liking, because the product had to outperform strong existing shave experiences.",
  },
  {
    title: "Reframe the benefit language",
    body: "Move from a literal exfoliation claim toward a more consumer-relevant articulation of smooth, even, texture-less skin.",
  },
  {
    title: "Validate performance sooner",
    body: "Bring real-use testing earlier when a proposition depends on a physical benefit customers must feel.",
  },
];

const impact = [
  {
    title: "Protected investment quality",
    body: "Recommended against continuing under the current success criteria, helping the team avoid investing behind a premium benefit that did not yet deliver clear superiority.",
  },
  {
    title: "Separated concept appeal from product truth",
    body: "Showed that an elevated proposition and packaging system could create excitement, but real-world performance needed to carry the premium claim.",
  },
  {
    title: "Reframed the benefit space",
    body: "Helped define a more consumer-relevant articulation around texture-less skin and upgraded smoothness for the premium-minded consumer.",
  },
  {
    title: "Improved future research discipline",
    body: "Clarified the need for category-relative success metrics, more inclusive recruit criteria, and earlier in-use testing when evaluating physical product benefits.",
  },
];

const reflection = [
  "Use category-relative performance metrics when the business goal is superiority, trade-up, or premium pricing.",
  "Pressure-test recruit criteria early so the participant base reflects the full target market, not only the easiest-to-reach users.",
  "Bring in-use testing earlier when the value proposition depends on a physical benefit customers need to feel.",
  "Distinguish between proposition appeal, message comprehension, and actual product performance.",
  "Treat a 'no' recommendation as a strategic outcome when it protects the business from weak product-market fit.",
];

/* ---------- page ---------- */

export function VenusCaseStudy({ study }: { study: CaseStudy }) {
  const d = study.detail!;
  return (
    <article>
      {/* Strategic summary */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6 space-y-5">
          <p className="text-xl text-navy-700 font-light leading-relaxed border-l-4 border-gold-400 pl-6">
            This 1.5-year innovation program explored whether Venus could
            establish a new premium tier in women&apos;s wet shave through an
            exfoliating razor benefit.
          </p>
          <p className="text-lg text-navy-600 font-light leading-relaxed pl-6">
            As the User &amp; Products Researcher, I led consumer research across
            metaphorical elicitation, proposition testing, surveys, and a 9-week
            at-home diary study to understand whether the benefit was desirable,
            believable, and strong enough in use to justify a higher price point.
            The research revealed a critical gap between early proposition appeal
            and actual product performance, leading me to recommend that the
            program not continue under its current success criteria.
          </p>
        </div>
      </section>

      {/* Project snapshot */}
      <section className="bg-sand-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SnapshotItem label="Role" value={d.role} />
            <SnapshotItem label="Timeline" value="1.5 years" />
            <SnapshotItem label="Budget" value="$150K" />
            <SnapshotItem label="Team" value={d.team} />
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-2">
                Stakeholders
              </h3>
              <p className="text-navy-700 font-light text-sm leading-relaxed">
                {d.stakeholders.join(", ")}
              </p>
            </div>
            <SnapshotItem
              label="Product context"
              value="Premium women's wet-shave innovation"
            />
            <SnapshotItem
              label="Business objective"
              value="Establish a new standard of superiority and justify a $25 to $30 premium price tier."
            />
          </div>

          <div className="mt-10 pt-8 border-t border-navy-200 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-3">
                Methods
              </h3>
              <div className="flex flex-wrap gap-2">
                {d.diagnosticMethods.map((m) => (
                  <span
                    key={m}
                    className="text-sm font-medium bg-white border border-navy-200 text-navy-700 px-4 py-2 rounded-full"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-3">
                Research outputs
              </h3>
              <ul className="space-y-2.5">
                {researchOutputs.map((o) => (
                  <Bullet key={o}>{o}</Bullet>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-gold-200 bg-gold-50 p-6">
            <p className="text-xs font-semibold text-gold-700 uppercase tracking-widest mb-2">
              Key recommendation
            </p>
            <p className="text-navy-800 font-medium leading-relaxed">
              Do not continue the program under the current success criteria
              without resolving the gap between expected exfoliation benefit and
              actual in-use performance.
            </p>
          </div>
        </div>
      </section>

      {/* Why this mattered */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <SectionLabel>Why this mattered</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-6">
            A premium claim has to survive real use
          </h2>
          <div className="space-y-5 text-navy-600 font-light leading-relaxed text-lg">
            <p>
              Premium innovation requires more than strong concept appeal. To
              justify a new price tier, the product experience has to deliver a
              benefit customers can recognize, value, and describe after real
              use.
            </p>
            <p>
              For Venus, the exfoliating benefit had the potential to create a
              new standard of superiority, attract new users, and trade up
              current users. But the business risk was significant: if the
              benefit felt unclear, unnecessary, or inferior to the best existing
              cartridge, the team could invest behind a premium proposition that
              would not hold up in market.
            </p>
          </div>
        </div>
      </section>

      {/* Decision supported */}
      <section className="pb-12 md:pb-16">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-gold-200 bg-gold-50 p-8 md:p-10">
            <p className="text-xs font-semibold text-gold-700 uppercase tracking-widest mb-3">
              Decision supported
            </p>
            <p className="text-xl md:text-2xl font-semibold text-navy-900 leading-snug">
              {decision}
            </p>
          </div>
        </div>
      </section>

      {/* Research strategy */}
      <section className="bg-navy-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>My research strategy</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-4">
            From unmet needs to real-world benefit validation
          </h2>
          <p className="text-navy-500 font-light leading-relaxed max-w-3xl mb-10">
            I structured the research to move from unmet-needs exploration to
            real-world benefit validation.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {strategy.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-navy-100 bg-white p-7"
              >
                <span className="text-sm font-semibold text-gold-600">
                  {s.n}
                </span>
                <h3 className="text-lg font-bold text-navy-900 mt-2 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-navy-500 font-light leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic tension */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <SectionLabel>The strategic tension</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-6">
            Strong appeal, weaker proof
          </h2>
          <div className="space-y-5 text-navy-600 font-light leading-relaxed text-lg">
            <p>
              Early proposition research showed strong promise. Premium users
              responded positively to the sophisticated design, packaging, and
              elevated unboxing experience. Some participants described the
              handle as high quality and long-lasting, and the holistic
              proposition suggested the potential to command a higher price
              point.
            </p>
            <p>
              But the critical question was not whether the idea sounded premium.
              It was whether the product experience could deliver a noticeable
              exfoliation benefit in real use. The diary study revealed that the
              benefit did not consistently meet expectations, and performance was
              not superior to the best-designed existing cartridge.
            </p>
          </div>
        </div>
      </section>

      {/* Research evidence ladder */}
      <section className="bg-sand-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>The research logic</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
            The research evidence ladder
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ladder.map((step, i) => (
              <div
                key={step.label}
                className="rounded-2xl border border-navy-100 bg-white p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-semibold text-gold-600">
                    0{i + 1}
                  </span>
                  <span className="text-sm font-bold text-navy-900">
                    {step.label}
                  </span>
                </div>
                <PlainList items={step.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore phase */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>Explore phase</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-6">
            Testing the premium promise
          </h2>
          <p className="text-navy-600 font-light leading-relaxed text-lg max-w-3xl mb-10">
            In the explore phase, I used metaphorical elicitation, virtual
            interviews, and proposition research to understand what
            premium-minded women wanted from the shaving experience and whether
            Venus could credibly stretch into a more elevated benefit space.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-navy-100 bg-white p-7">
              <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-4">
                Unmet-needs exploration
              </h3>
              <PlainList items={exploreDetailsA} />
            </div>
            <div className="rounded-2xl border border-navy-100 bg-white p-7">
              <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-4">
                Holistic proposition testing
              </h3>
              <PlainList items={exploreDetailsB} />
            </div>
          </div>
          <div className="mt-6">
            <InlineArt src="/covers/premium-razor-metilicstudy.jpg" />
          </div>
          <div className="mt-6 rounded-2xl border border-gold-200 bg-gold-50 p-6">
            <p className="text-xs font-semibold text-gold-700 uppercase tracking-widest mb-2">
              Key output
            </p>
            <p className="text-navy-700 font-light leading-relaxed">
              Early evidence suggested the premium design world was appealing,
              but the benefit needed real-use validation.
            </p>
          </div>
        </div>
      </section>

      {/* What we learned */}
      <section className="bg-navy-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>What we learned</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
            Four insights that shaped the recommendation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {insights.map((ins, i) => (
              <div
                key={ins.insight}
                className="rounded-2xl border border-navy-100 bg-white p-7"
              >
                <span className="text-sm font-semibold text-gold-600">
                  Insight 0{i + 1}
                </span>
                <h3 className="text-lg font-bold text-navy-900 mt-2 mb-4 leading-snug">
                  {ins.insight}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                      Why it mattered
                    </p>
                    <p className="text-sm text-navy-500 font-light leading-relaxed">
                      {ins.why}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                      Product implication
                    </p>
                    <p className="text-sm text-navy-500 font-light leading-relaxed">
                      {ins.implication}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test phase */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div>
            <SectionLabel>Test phase</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-6">
              Where the evidence changed the recommendation
            </h2>
            <p className="text-navy-600 font-light leading-relaxed text-lg mb-6">
              To separate proposition appeal from product truth, I led a 9-week
              at-home split-body diary study with 30 participants. This allowed
              the team to observe whether the exfoliation benefit held up over
              repeated real-world use, not just in concept exposure or short-
              session feedback.
            </p>
            <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-3">
              What the diary study revealed
            </h3>
            <ul className="space-y-3">
              {testFindings.map((f) => (
                <Bullet key={f}>{f}</Bullet>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-white p-7">
            <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-4">
              Study setup
            </h3>
            <PlainList items={testDetails} />
          </div>
        </div>
        <div data-reveal className="max-w-5xl mx-auto px-6 mt-8">
          <InlineArt src="/covers/premium-razor-diary-study.jpg" />
        </div>
      </section>

      {/* Promise vs reality framework */}
      <section className="bg-sand-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>The framework</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
            From premium promise to product truth
          </h2>
          <div className="grid md:grid-cols-3 gap-4 items-stretch">
            {promiseReality.map((col, i) => (
              <div key={col.label} className="flex items-stretch">
                <div
                  className={`flex-1 rounded-2xl p-6 ${
                    col.tone === "accent"
                      ? "bg-gold-50 border border-gold-200"
                      : "bg-white border border-navy-100"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-widest mb-4 ${
                      col.tone === "accent" ? "text-gold-700" : "text-gold-600"
                    }`}
                  >
                    {col.label}
                  </p>
                  <PlainList items={col.items} />
                </div>
                {i < promiseReality.length - 1 && (
                  <span className="hidden md:flex items-center text-gold-500 px-1">
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The recommendation */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>The recommendation</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-6">
            A disciplined call backed by evidence
          </h2>
          <div className="space-y-5 text-navy-600 font-light leading-relaxed text-lg max-w-3xl mb-10">
            <p>
              Based on the diary study evidence, I recommended that the program
              not continue under its current success criteria. The product
              experience did not yet deliver a strong enough exfoliation benefit
              to support the premium superiority claim.
            </p>
            <p>
              Rather than forcing the proposition forward, the research
              redirected the team toward a more credible benefit space: premium
              smoothness defined less by exfoliation mechanics and more by the
              feeling of refined, even, texture-less skin.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {recommendations.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-navy-100 bg-white p-7 border-t-4 border-t-gold-400"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-navy-500 font-light leading-relaxed">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research contribution */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <SectionLabel>Research contribution</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-8">
            How I contributed
          </h2>
          <ul className="space-y-4">
            {contribution.map((c) => (
              <Bullet key={c}>{c}</Bullet>
            ))}
          </ul>
        </div>
      </section>

      {/* Business and product impact */}
      <section className="bg-gold-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>Impact</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
            Business and product impact
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {impact.map((im) => (
              <div
                key={im.title}
                className="bg-white border border-navy-100 rounded-2xl p-7"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {im.title}
                </h3>
                <p className="text-sm text-navy-500 font-light leading-relaxed">
                  {im.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What this case demonstrates today */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <SectionLabel>Why it belongs here</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-6">
            What this case demonstrates today
          </h2>
          <div className="space-y-5 text-navy-700 font-light leading-relaxed text-lg">
            <p>
              This case remains important to my portfolio because it shows that
              my research judgment is not limited to validating ideas. I am
              comfortable using evidence to challenge momentum, protect
              investment quality, and help teams make disciplined product
              decisions.
            </p>
            <p>
              It also shows how my consumer products background strengthens my UX
              research practice today. I learned to evaluate not only what people
              say they want, but whether a product experience actually delivers
              the promised value in context.
            </p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="bg-navy-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <SectionLabel>Reflection</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-8">
            What I would carry forward
          </h2>
          <ul className="space-y-4">
            {reflection.map((r) => (
              <Bullet key={r}>{r}</Bullet>
            ))}
          </ul>
        </div>
      </section>

      {/* Confidentiality + nav */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <p className="text-sm text-navy-500 font-light mb-12">
            This work is summarized and anonymized due to confidentiality. Some
            visuals are omitted or abstracted, and I&apos;m happy to walk through
            deeper specifics in an interview.
          </p>
          <div className="border-t border-navy-100 pt-8 flex justify-between items-center">
            <Link
              href="/portfolio"
              className="text-navy-600 hover:text-navy-900 text-sm font-medium transition-colors"
            >
              &larr; All Work
            </Link>
            <Link
              href="/contact"
              className="bg-navy-900 text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-navy-700 transition-colors"
            >
              Discuss a Project
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
