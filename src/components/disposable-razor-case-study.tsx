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

/* ---------- content ---------- */

const decision =
  "Which handle design cues should the team prioritize to improve shelf appeal, perceived value, comfort, and in-use control while staying within cost and manufacturing constraints?";

const researchOutputs = [
  "Product attribute framework",
  "FMOT and SMOT design guidance",
  "Prototype ranking and usability feedback",
  "Handle design recommendation",
  "Molding assessment recommendation",
];

const contribution = [
  "Built a foundational understanding of disposable razor users, including what drove appeal before purchase and confidence during use.",
  "Translated consumer perception into concrete handle design guidance around value cues, shape, grip, comfort, and control.",
  "Helped the team avoid unnecessary cost increases by identifying design changes that could improve the experience without overcomplicating the product.",
  "Informed prototype selection and gave the molding team a clearer consumer-backed direction to assess.",
  "Contributed to a product learning plan designed to help Venus compete more effectively against Bic Soleil.",
];

const strategy = [
  {
    n: "01",
    title: "Define the constraints",
    body: "Aligned the research plan around launch timing, handle-only design scope, North America as the lead design market, global execution needs, and financial constraints.",
  },
  {
    n: "02",
    title: "Understand what drives appeal",
    body: "Used literature review, perceptual mapping, and interviews to identify which visual and tactile cues shaped the first moment of truth and early product preference.",
  },
  {
    n: "03",
    title: "Translate perception into design criteria",
    body: "Connected consumer language to product attributes such as shape, handle curvature, elastomer placement, weight, grip, and perceived control.",
  },
  {
    n: "04",
    title: "Iterate toward a winning direction",
    body: "Used prototype ranking and usability testing across two design rounds to refine form, elastomer placement, and handling before recommending a direction for molding assessment.",
  },
];

const fmot = {
  question: "Does this look worth buying?",
  cues: ["Value", "Shape", "Comfort", "Visual completeness", "Shelf appeal"],
  guidance: [
    "Avoid cutouts that reduce perceived value.",
    "Use curved forms and a more substantial handle.",
    "Signal comfort through visible grip and soft-touch cues.",
  ],
};

const smot = {
  question: "Does this feel secure, comfortable, and controlled?",
  cues: ["Grip", "Weight", "Shape", "Comfort", "Control"],
  guidance: [
    "Support finger anchoring.",
    "Use a larger circumference where appropriate.",
    "Place elastomer where it improves grip and confidence.",
  ],
};

const insights = [
  {
    insight: "Value had to be communicated before use.",
    why: "In a price-sensitive disposable category, shoppers needed visual cues that made the product feel worth the price before they ever touched it.",
    implication:
      "Avoid design details that lowered perceived value, such as cutouts that could signal less material or collect grime. Use form, finish, and visual completeness to support value perception.",
  },
  {
    insight: "Comfort and control were distinct but connected needs.",
    why: "Consumers wanted the razor to feel comfortable in hand, but they also needed the handle to communicate control during shaving.",
    implication:
      "Prioritize handle shape, curvature, and grip cues that create both comfort and a sense of secure handling.",
  },
  {
    insight: "Elastomer placement mattered more than simply adding soft material.",
    why: "Elastomer needed to support finger anchoring and prevent slippage, not just appear as a comfort feature.",
    implication:
      "Place elastomer where fingers naturally anchor, especially along the lower handle and key grip zones.",
  },
  {
    insight: "The team could improve the experience without reinventing everything.",
    why: "Given financial and manufacturing constraints, the team needed to focus on design changes that could create consumer-perceived improvement without unnecessary complexity.",
    implication:
      "Use an existing handle design as the starting point and apply targeted changes to form, thickness, curvature, and grip.",
  },
];

const discoverDetails = [
  "12 participants",
  "1:1 interviews",
  "90 minutes each",
  "Razor stimuli with different handle variables",
  "Sorting and ranking with and without touching",
  "Qualitative discussion to understand the reasoning behind choices",
];

const exploreDetails = [
  "20 participants per design round",
  "1:1 sessions, 30 minutes each",
  "First round focused on form",
  "Second round focused on elastomer placement",
  "6 form prototypes plus 3 controls",
  "6 elastomer positioning prototypes plus 4 controls",
];

const guidance = [
  {
    title: "Start from a proven handle form",
    body: "Use a current handle design as a baseline, then apply targeted improvements instead of starting from scratch.",
  },
  {
    title: "Signal value through complete, sturdy form",
    body: "Avoid visual cues that imply cheapness or reduced material. Use a more complete handle shape to strengthen perceived value.",
  },
  {
    title: "Create a stronger sense of control",
    body: "Prioritize curvature, thickness, and grip zones that make the handle feel secure and controlled during use.",
  },
  {
    title: "Place elastomer where it works hardest",
    body: "Use elastomer for finger anchoring and anti-slip confidence, not simply as a decorative comfort cue.",
  },
];

const impact = [
  {
    title: "Created a consumer-backed innovation direction",
    body: "Developed a clearer understanding of disposable razor users and the product attributes needed to compete against Bic Soleil.",
  },
  {
    title: "Reduced design and tooling risk",
    body: "Helped the team focus on targeted handle design changes before moving a winning direction into molding assessment.",
  },
  {
    title: "Protected cost discipline",
    body: "Identified experience improvements that could increase perceived value and control without unnecessary product complexity or cost escalation.",
  },
  {
    title: "Translated perception into product criteria",
    body: "Connected consumer language around comfort, control, and value to specific design requirements for form, grip, elastomer placement, and handle feel.",
  },
];

const reflection = [
  "Be disciplined about stimuli volume so participants can give high-quality feedback without fatigue.",
  "Build in analysis time early, especially when combining rankings, perceptual maps, and qualitative interviews.",
  "Revisit research questions after each learning phase so the plan can adapt as stronger signals emerge.",
  "Balance rigor with speed when product teams are working toward manufacturing and launch milestones.",
];

function CueChips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((c) => (
        <span
          key={c}
          className="text-xs font-medium bg-navy-50 text-navy-600 px-3 py-1 rounded-full"
        >
          {c}
        </span>
      ))}
    </div>
  );
}

function PhaseDetails({ items }: { items: string[] }) {
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

/* ---------- page ---------- */

export function DisposableRazorCaseStudy({ study }: { study: CaseStudy }) {
  const d = study.detail!;
  return (
    <article>
      {/* Strategic summary */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6 space-y-5">
          <p className="text-xl text-navy-700 font-light leading-relaxed border-l-4 border-gold-400 pl-6">
            This program set out to reimagine the Venus disposable razor for a
            competitive mid-tier segment where price, value perception, and
            in-use control heavily influenced choice.
          </p>
          <p className="text-lg text-navy-600 font-light leading-relaxed pl-6">
            As the User &amp; Products Researcher, I led consumer research to
            understand what drove appeal before purchase and confidence during
            use, then translated those signals into handle design guidance the
            team could use to refine prototypes, avoid unnecessary cost, and move
            a winning direction toward molding assessment.
          </p>
        </div>
      </section>

      {/* Project snapshot */}
      <section className="bg-sand-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SnapshotItem label="Role" value={d.role} />
            <SnapshotItem label="Timeline" value="6 months" />
            <SnapshotItem label="Budget" value="$90K" />
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
              value="Mid-tier women's disposable razor innovation"
            />
            <SnapshotItem
              label="Business objective"
              value="Develop a competitive proposition to beat Bic Soleil and support a step change in sustainability."
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
        </div>
      </section>

      {/* Why this mattered */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <SectionLabel>Why this mattered</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-6">
            Winning in a price-sensitive, high-competition category
          </h2>
          <div className="space-y-5 text-navy-600 font-light leading-relaxed text-lg">
            <p>
              Disposable razors are a highly competitive, price-sensitive
              category. To win against the category leader, the team needed more
              than a visually appealing handle. The product had to communicate
              value at shelf, feel comfortable and controlled in hand, and
              support a more sustainable refillable cartridge behavior without
              introducing friction into the grooming routine.
            </p>
            <p>
              The research needed to connect consumer perception, physical
              handling, and design feasibility so the team could make sharper
              tradeoffs before investing in tooling.
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
            From broad category understanding to handle design decisions
          </h2>
          <p className="text-navy-500 font-light leading-relaxed max-w-3xl mb-10">
            I structured the research to move from broad category understanding
            to specific handle design decisions.
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

      {/* Two moments of truth */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>The framework</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
            Designing for two moments of truth
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-navy-100 bg-white p-8">
              <p className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-2">
                First moment of truth · before purchase
              </p>
              <p className="text-lg font-bold text-navy-900 mb-5">
                &ldquo;{fmot.question}&rdquo;
              </p>
              <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-2">
                Key cues
              </p>
              <CueChips items={fmot.cues} />
              <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mt-5 mb-2">
                Design guidance
              </p>
              <ul className="space-y-2.5">
                {fmot.guidance.map((g) => (
                  <Bullet key={g}>{g}</Bullet>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-white p-8">
              <p className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-2">
                Second moment of truth · during use
              </p>
              <p className="text-lg font-bold text-navy-900 mb-5">
                &ldquo;{smot.question}&rdquo;
              </p>
              <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-2">
                Key cues
              </p>
              <CueChips items={smot.cues} />
              <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mt-5 mb-2">
                Design guidance
              </p>
              <ul className="space-y-2.5">
                {smot.guidance.map((g) => (
                  <Bullet key={g}>{g}</Bullet>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Discover phase */}
      <section className="bg-sand-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div>
            <SectionLabel>Discover phase</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-6">
              Identifying the cues that drive appeal and control
            </h2>
            <p className="text-navy-600 font-light leading-relaxed text-lg mb-6">
              In the discovery phase, I used perceptual mapping and 12 in-depth
              interviews to understand how women grouped, ranked, and described
              different razor handles before and after touching them. This helped
              the team separate what drove visual appeal from what drove in-hand
              confidence.
            </p>
            <div className="rounded-2xl border border-gold-200 bg-gold-50 p-6">
              <p className="text-xs font-semibold text-gold-700 uppercase tracking-widest mb-2">
                Key output
              </p>
              <p className="text-navy-700 font-light leading-relaxed">
                An attribute framework that translated consumer language into
                design guidance for value, shape, comfort, grip, and control.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-white p-7">
            <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-4">
              Study setup
            </h3>
            <PhaseDetails items={discoverDetails} />
          </div>
        </div>
        <div data-reveal className="max-w-5xl mx-auto px-6 mt-8">
          <Image
            src="/covers/dispo-razor-discovery.jpg"
            alt="Discovery research findings for the disposable razor handle"
            width={1667}
            height={837}
            sizes="(max-width: 768px) 100vw, 1000px"
            className="w-full h-auto rounded-2xl border border-navy-100"
          />
        </div>
      </section>

      {/* What we learned */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>What we learned</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
            Four insights that shaped the design direction
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
                      Design implication
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

      {/* Explore phase */}
      <section className="bg-sand-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div>
            <SectionLabel>Explore phase</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-6">
              Narrowing prototype direction through consumer feedback
            </h2>
            <p className="text-navy-600 font-light leading-relaxed text-lg mb-6">
              After discovery, the team created low-fidelity prototypes based on
              the strongest consumer signals. I then supported two rounds of
              prototype evaluation to understand which forms, grip placements, and
              handle cues best delivered appeal, comfort, and control.
            </p>
            <div className="rounded-2xl border border-gold-200 bg-gold-50 p-6">
              <p className="text-xs font-semibold text-gold-700 uppercase tracking-widest mb-2">
                Recommendation
              </p>
              <p className="text-navy-700 font-light leading-relaxed">
                Pass the winning design to the molding team for assessment and
                sample tooling.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-white p-7">
            <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-4">
              Study setup
            </h3>
            <PhaseDetails items={exploreDetails} />
          </div>
        </div>
      </section>

      {/* Design guidance */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>The output</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
            Design guidance delivered to the team
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {guidance.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-navy-100 bg-white p-7 border-t-4 border-t-gold-400"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {g.title}
                </h3>
                <p className="text-sm text-navy-500 font-light leading-relaxed">
                  {g.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Image
              src="/covers/dispo-recs.jpg"
              alt="Comparison of stronger versus weaker handle grip and elastomer placement"
              width={1672}
              height={941}
              sizes="(max-width: 768px) 100vw, 1000px"
              className="w-full h-auto rounded-2xl border border-navy-100"
            />
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
              Although this was earlier-career work, it remains important to my
              portfolio because it shows the foundation of how I approach
              research: clarify the decision, understand the customer context,
              translate behavior and perception into product criteria, and help
              teams make better tradeoffs.
            </p>
            <p>
              This case also shows the range of my research background. Before
              leading digital UX research across e-commerce journeys, I was
              trained in consumer product innovation, where research had to
              connect what people say, what they feel, what they choose, and what
              a team can realistically build.
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
