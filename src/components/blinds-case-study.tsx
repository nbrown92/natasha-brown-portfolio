import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/data/caseStudies";

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

/* ---------- content ---------- */

const decision =
  "What should Lowe's prioritize to reduce friction, increase customer confidence, and improve the path from category exploration to configuration and purchase?";

const researchStrategy = [
  {
    n: "01",
    title: "Journey diagnosis",
    body: "Where were customers losing confidence across inspiration, selection, configuration, and purchase?",
  },
  {
    n: "02",
    title: "Opportunity sizing",
    body: "Which pain points were most common, most severe, and most likely to influence roadmap priority?",
  },
  {
    n: "03",
    title: "Concept & flow validation",
    body: "Which experience changes helped customers move forward with more confidence?",
  },
];

const insights = [
  {
    insight: "Customers needed decision support before they were ready to configure.",
    why: "Shoppers were not just looking for products. They were trying to understand which type of blind or shade fit their room, light-control needs, privacy expectations, and installation comfort.",
    implication:
      "The experience needed to support education and comparison earlier in the journey, not only customization on the product detail page.",
  },
  {
    insight: "Measurement and mount type created confidence gaps.",
    why: "Customers hesitated when they were unsure whether they were choosing the right mount type or entering measurements correctly.",
    implication:
      "Guidance around measurement, mount type, and customization needed to be clearer and easier to access at the moments where customers were making those decisions.",
  },
  {
    insight: "The list page was not helping customers narrow choices.",
    why: "Customers needed clearer filtering, comparison, and category-level education before selecting a product.",
    implication:
      "The category experience needed to help customers understand the assortment and narrow options before they reached configuration.",
  },
  {
    insight: "The configurator carried too much of the burden.",
    why: "By the time customers reached configuration, they still had unresolved questions that should have been answered earlier in the journey.",
    implication:
      "The buying journey needed to be more connected across category pages, list pages, product pages, and configuration.",
  },
];

const journey = [
  { phase: "Explore", gap: "Unsure which blind or shade type fits the room." },
  { phase: "Compare", gap: "Hard to narrow options and grasp the assortment." },
  { phase: "Measure", gap: "Uncertain how to measure correctly." },
  { phase: "Configure", gap: "Mount type and customization create hesitation." },
  { phase: "Purchase", gap: "Lingering questions slow the move to checkout." },
  { phase: "Install", gap: "Worry about installing it correctly." },
];

const opportunities = [
  { name: "Measurement guidance", pain: "High", value: "High" },
  { name: "Mount type education", pain: "High", value: "High" },
  { name: "Product comparison", pain: "High", value: "Medium" },
  { name: "Configurator clarity", pain: "Medium", value: "High" },
  { name: "Filter / list page improvements", pain: "Medium", value: "Medium" },
  { name: "Installation confidence", pain: "Medium", value: "Medium" },
];

const recommendations = [
  {
    title: "Guide earlier",
    body: "Help customers understand options before they configure.",
  },
  {
    title: "Reduce configuration anxiety",
    body: "Make measurement, mount type, and customization decisions clearer.",
  },
  {
    title: "Connect the category journey",
    body: "Align list pages, product pages, configurator, and support content.",
  },
];

const leadership = [
  "Reframed the project from a page-level optimization effort into a category journey strategy focused on customer confidence, decision support, and conversion friction.",
  "Built a research roadmap that sequenced discovery, opportunity sizing, and usability evaluation so the team could move from broad ambiguity to prioritized action.",
  "Synthesized customer behavior, survey data, and usability findings into a clear opportunity framework for product, design, category, and merchandising stakeholders.",
  "Helped partners identify which experience gaps needed near-term fixes versus longer-term strategic investment.",
];

const process = [
  {
    n: "01",
    title: "Diagnose the journey",
    body: "Mapped the end-to-end Blinds & Shades buying journey to identify where customers needed more education, comparison, or confidence.",
  },
  {
    n: "02",
    title: "Size the opportunities",
    body: "Used survey data and behavioral patterns to prioritize pain points based on customer frequency, severity, and business relevance.",
  },
  {
    n: "03",
    title: "Evaluate experience solutions",
    body: "Tested critical moments in the shopping and configuration flow to understand which changes helped customers move forward.",
  },
  {
    n: "04",
    title: "Align the roadmap",
    body: "Translated findings into prioritized recommendations for near-term improvements and longer-term category experience strategy.",
  },
];

const shapedExperience = [
  "Surfaced products on the list page so shoppers could understand the full assortment without hitting dead ends.",
  "Improved configurator clarity to reduce friction during customization.",
  "Prioritized guidance around the decision points that created the most hesitation, including product type, mount type, and measurement confidence.",
  "Created a shared roadmap that helped product, design, category, and merchandising teams align on where to invest next.",
];

function PainBadge({ level }: { level: string }) {
  const high = level === "High";
  return (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
        high ? "bg-gold-100 text-gold-700" : "bg-navy-100 text-navy-600"
      }`}
    >
      {level}
    </span>
  );
}

/* ---------- page ---------- */

export function BlindsCaseStudy({ study }: { study: CaseStudy }) {
  const d = study.detail!;
  return (
    <article>
      {/* Intro / strategic summary */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6 space-y-5">
          <p className="text-xl text-navy-700 font-light leading-relaxed border-l-4 border-gold-400 pl-6">
            Lowe&apos;s Blinds &amp; Shades experience sat at the intersection of
            inspiration, measurement, customization, and confidence, but
            customers struggled to understand their options, configure products
            correctly, and move from browsing to purchase.
          </p>
          <p className="text-lg text-navy-600 font-light leading-relaxed pl-6">
            I led foundational research to diagnose where the journey was
            breaking down, identify the highest-impact opportunities across the
            buying flow, and align category, product, design, and merchandising
            partners around a clearer experience strategy.
          </p>
        </div>
      </section>

      {/* Project snapshot */}
      <section className="bg-sand-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SnapshotItem label="Role" value={d.role} />
            <SnapshotItem label="Timeline" value={d.timeline} />
            <SnapshotItem label="Partners" value={d.team} />
            <div>
              <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-2">
                Stakeholders
              </h3>
              <ul className="text-navy-700 font-light text-sm space-y-1">
                {d.stakeholders.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-navy-200">
            <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-3">
              Methods utilized to diagnose & prioritize
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
        </div>
      </section>

      {/* Decision supported callout */}
      <section className="py-14 md:py-[4.5rem]">
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

      {/* Why this mattered */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <SectionLabel>Why this mattered</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-6">
            A high-consideration category built on many decisions
          </h2>
          <div className="space-y-5 text-navy-600 font-light leading-relaxed text-lg">
            <p>
              Blinds &amp; Shades is a high-consideration category where
              customers need to make several decisions before they can
              confidently purchase: style, mount type, measurements, light
              control, material, color, customization, and installation.
            </p>
            <p>
              The business needed to know where experience improvements would
              create the most confidence and reduce friction before investing in
              a redesigned category journey.
            </p>
          </div>
        </div>
      </section>

      {/* The challenge */}
      <section className="bg-navy-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <SectionLabel>The challenge</SectionLabel>
            <p className="text-navy-700 font-light leading-relaxed">
              {study.challenge}
            </p>
          </div>
          <div>
            <SectionLabel>Research goals</SectionLabel>
            <ul className="space-y-3">
              {d.researchGoals.map((g) => (
                <Bullet key={g}>{g}</Bullet>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* My research strategy */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>My research strategy</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-4">
            A learning agenda built around three levels of decision-making
          </h2>
          <p className="text-navy-500 font-light leading-relaxed max-w-3xl mb-10">
            Rather than running studies in isolation, I designed the plan so each
            phase answered a distinct question the team needed resolved before it
            could act.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {researchStrategy.map((r) => (
              <div
                key={r.n}
                className="rounded-2xl border border-navy-100 bg-white p-7"
              >
                <span className="text-sm font-semibold text-gold-600">
                  {r.n}
                </span>
                <h3 className="text-lg font-bold text-navy-900 mt-2 mb-2">
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

      {/* What we learned */}
      <section className="bg-sand-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>What we learned</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
            Four insights that reframed the problem
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
                      Experience implication
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

      {/* Opportunity framework: journey + prioritization */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>Opportunity framework</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
            Mapping confidence gaps across the buying journey
          </h2>

          {/* Journey map */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {journey.map((j, i) => (
              <div
                key={j.phase}
                className="rounded-xl border border-navy-100 bg-white p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-gold-600">
                    0{i + 1}
                  </span>
                  <span className="text-sm font-bold text-navy-900">
                    {j.phase}
                  </span>
                </div>
                <p className="text-xs text-navy-500 font-light leading-relaxed">
                  {j.gap}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <Image
              src="/covers/blinds-journey-map.jpg"
              alt="Blinds & Shades customer journey map"
              width={6600}
              height={4270}
              sizes="(max-width: 768px) 100vw, 500px"
              className="w-full h-auto rounded-2xl border border-navy-100"
            />
            <Image
              src="/covers/blinds-custom-jm.jpg"
              alt="Co-created journey map highlighting friction points across the buying experience"
              width={2068}
              height={1356}
              sizes="(max-width: 768px) 100vw, 500px"
              className="w-full h-auto rounded-2xl border border-navy-100"
            />
          </div>

          {/* Prioritization */}
          <h3 className="text-lg font-bold text-navy-900 mt-14 mb-2">
            Prioritizing opportunities
          </h3>
          <p className="text-navy-500 font-light leading-relaxed max-w-3xl mb-6">
            I scored opportunities by customer pain severity and business and
            conversion opportunity to focus the roadmap on what mattered most.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {opportunities.map((o) => (
              <div
                key={o.name}
                className="rounded-xl border border-navy-100 bg-white p-5"
              >
                <p className="font-semibold text-navy-900 mb-3">{o.name}</p>
                <div className="flex items-center gap-4 text-sm text-navy-500 font-light">
                  <span className="flex items-center gap-1.5">
                    Pain <PainBadge level={o.pain} />
                  </span>
                  <span className="flex items-center gap-1.5">
                    Opportunity <PainBadge level={o.value} />
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Image
              src="/covers/blinds-priorities.jpg"
              alt="Prioritization of Blinds & Shades opportunities by pain severity and business value"
              width={2192}
              height={988}
              sizes="(max-width: 768px) 100vw, 1000px"
              className="w-full h-auto rounded-2xl border border-navy-100"
            />
          </div>
        </div>
      </section>

      {/* How I led the work */}
      <section className="bg-navy-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <SectionLabel>My leadership & impact</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-8">
            How I led the work
          </h2>
          <ul className="space-y-4">
            {leadership.map((l) => (
              <Bullet key={l}>{l}</Bullet>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>The approach</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
            From ambiguity to prioritized direction
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.n}>
                <span className="text-4xl font-extrabold text-navy-200">
                  {p.n}
                </span>
                <h3 className="text-lg font-bold text-navy-900 mt-3 mb-2">
                  {p.title}
                </h3>
                <p className="text-navy-500 font-light leading-relaxed text-[15px]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="bg-sand-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>Recommendations</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
            What I told the team to do next
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recommendations.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-navy-100 bg-white p-7 border-t-4 border-t-gold-400"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {r.title}
                </h3>
                <p className="text-navy-500 font-light leading-relaxed">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-gold-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>Impact</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-4">
            Measurable lift and lasting alignment
          </h2>
          <p className="text-navy-500 font-light leading-relaxed max-w-3xl mb-10">
            Research-informed experience updates were associated with the
            following results.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-navy-100 rounded-2xl p-6 border-t-4 border-t-gold-400">
              <p className="text-3xl font-extrabold tracking-tight text-navy-900">
                +5%
              </p>
              <p className="mt-1 font-semibold text-navy-800">Add-to-cart rate</p>
              <p className="mt-2 text-sm text-navy-500 font-light leading-relaxed">
                Associated lift across the flows we touched: list, product
                detail, and configurator.
              </p>
            </div>
            <div className="bg-white border border-navy-100 rounded-2xl p-6 border-t-4 border-t-gold-400">
              <p className="text-xl font-extrabold tracking-tight text-navy-900">
                Roadmap alignment
              </p>
              <p className="mt-2 text-sm text-navy-500 font-light leading-relaxed">
                Created a shared opportunity framework that helped product,
                design, category, and merchandising teams align on where to
                invest next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How the research shaped the experience */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <SectionLabel>The outcome</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-6">
            From isolated fixes to a connected category journey
          </h2>
          <p className="text-navy-600 font-light leading-relaxed text-lg mb-8">
            The research helped the team shift from isolated page improvements to
            a more connected category journey strategy.
          </p>
          <div className="mb-10">
            <Image
              src="/covers/blinds-solutions.jpg"
              alt="Research-informed solutions for the Blinds & Shades experience"
              width={1672}
              height={941}
              sizes="(max-width: 768px) 100vw, 800px"
              className="w-full h-auto rounded-2xl border border-navy-100"
            />
          </div>
          <ul className="space-y-4">
            {shapedExperience.map((s) => (
              <Bullet key={s}>{s}</Bullet>
            ))}
          </ul>
        </div>
      </section>

      {/* Leadership reflection */}
      <section className="bg-navy-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <SectionLabel>Leadership</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-6">
            What this case demonstrates about my leadership
          </h2>
          <div className="space-y-5 text-navy-700 font-light leading-relaxed text-lg">
            <p>
              This work demonstrates how I operate in ambiguous product spaces: I
              clarify the decision, design a research plan around the risk,
              triangulate multiple customer signals, and turn findings into a
              roadmap teams can act on.
            </p>
            <p>
              The value was not just the research output. It was the alignment
              created across teams that needed to make coordinated decisions
              about a complex, high-consideration customer journey.
            </p>
          </div>
        </div>
      </section>

      {/* Confidentiality + nav */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <p className="text-sm text-navy-500 font-light mb-12">
            {d.confidentialityNote}
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
