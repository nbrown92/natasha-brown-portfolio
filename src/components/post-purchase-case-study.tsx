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
  "Where should Lowe's invest across the post-purchase journey to reduce churn risk, lower avoidable service contacts, and improve customers' confidence after purchase?";

const workstreams = [
  "Order confirmation and status visibility",
  "Order history and order details IA",
  "Item-level support information",
  "Online exchange / issue resolution North Star",
];

const coreOutputs = [
  "Churn driver synthesis",
  "Prioritized problem statements",
  "IA and content priorities",
  "Research-informed design recommendations",
  "Future-state exchange concept validation",
];

const leadership = [
  "Reframed post-purchase from a transactional order-management flow into a strategic retention and trust-building opportunity.",
  "Designed a mixed-methods research strategy that connected Medallia feedback, churn survey data, interviews, card sorting, and usability testing into one decision narrative.",
  "Led problem definition across UX, Product, Fulfillment, Content, and Engineering so teams could align on the highest-impact customer problems.",
  "Translated research into roadmap priorities across order confirmation, order history, order details, item-level support, and online exchanges.",
  "Used executive storytelling to connect customer friction to churn risk, service contact reduction, and revenue protection.",
];

const researchStrategy = [
  {
    n: "01",
    title: "Diagnose the business risk",
    body: "Used Medallia journey analytics and churn signals to identify which parts of the post-purchase journey were most connected to dissatisfaction and customer loss.",
  },
  {
    n: "02",
    title: "Understand the customer experience",
    body: "Used interviews and survey data to understand what customers needed after purchase, where they felt confused, and why they turned to customer service or competitors.",
  },
  {
    n: "03",
    title: "Prioritize the problems worth solving",
    body: "Led synthesis and problem-definition work to turn scattered insights into two core customer problems: customers did not have the information they needed, and customers did not have a clear way to fix issues.",
  },
  {
    n: "04",
    title: "Validate direction and reduce design risk",
    body: "Used card sorting and usability testing to refine IA, content hierarchy, order-management flows, and future-state exchange concepts before deeper investment.",
  },
];

const evidence = [
  {
    label: "Customer signals",
    items: [
      "Medallia feedback",
      "Churn survey data",
      "Interviews",
      "Card sorting",
      "Usability testing",
    ],
  },
  {
    label: "Synthesized into",
    items: [
      "Churn drivers",
      "Customer jobs",
      "Problem statements",
      "IA priorities",
      "Design risks",
    ],
  },
  {
    label: "Informed decisions across",
    items: [
      "Order confirmation",
      "Order history",
      "Order details",
      "Item details",
      "Online exchanges",
    ],
  },
];

const journey = [
  { phase: "Confirmation", q: "Do I know my order was received and what happens next?" },
  { phase: "Order history", q: "Can I quickly find the order I need?" },
  { phase: "Order details", q: "Can I understand status, fulfillment, and available actions?" },
  { phase: "Item details", q: "Can I find information specific to what I bought?" },
  { phase: "Issue resolution", q: "Can I fix a problem without calling support?" },
  { phase: "Repurchase", q: "Do I trust this retailer enough to come back?" },
];

const insights = [
  {
    insight: "Post-purchase friction was a churn risk, not just a support issue.",
    why: "Customer frustration after purchase could weaken trust, increase support reliance, and reduce the likelihood of future shopping.",
    implication:
      "Post-purchase needed to be treated as a retention experience, not just a place to display order information.",
  },
  {
    insight: "Customers did not have the information they needed at the moment they needed it.",
    why: "Customers wanted clarity on order status, next steps, item-specific information, fulfillment details, and support options.",
    implication:
      "Order confirmation, order history, and order details needed clearer hierarchy, more relevant content, and easier access to item-level information.",
  },
  {
    insight: "Customers did not have a clear way to fix order issues.",
    why: "When the only visible path was a return or a customer service contact, customers lacked confidence that Lowe's could help resolve their issue.",
    implication:
      "The experience needed clearer self-service resolution paths, including a broader 'Fix an Issue' entry point beyond returns.",
  },
  {
    insight: "Different customers needed different post-purchase pathways.",
    why: "DIY and Pro customers had different needs across order visibility, fulfillment, support, and repurchasing.",
    implication:
      "IA and content priorities needed to account for distinct customer jobs instead of assuming one universal order-management flow.",
  },
];

const problems = [
  {
    title: "Customers don't have the information they need.",
    body: "Customers lacked clear, timely, item-specific information about their orders, next steps, fulfillment status, support options, and post-purchase actions. This created confusion, avoidable support contacts, and reduced confidence after purchase.",
  },
  {
    title: "Customers don't have a clear way to fix issues.",
    body: "When something went wrong, customers struggled to understand their options. Limited self-service paths and return-centered flows made issue resolution feel unclear, increasing frustration and reliance on support channels.",
  },
];

const priorities = [
  {
    n: "Priority 1",
    title: "Reassure customers immediately after purchase",
    focus:
      "Order confirmation, next steps, fulfillment expectations, communication consistency.",
  },
  {
    n: "Priority 2",
    title: "Help customers find and understand their orders",
    focus:
      "Order history IA, status clarity, fulfillment distinctions, and item-level details.",
  },
  {
    n: "Priority 3",
    title: "Give customers a clearer path to resolve issues",
    focus:
      "Dynamic CTAs, self-service support, common questions, returns, exchanges, and 'Fix an Issue' pathways.",
  },
];

const metrics = [
  {
    metric: "-12%",
    label: "Call volume",
    desc: "Reduction in avoidable service contacts through clearer information and self-service paths.",
  },
  {
    metric: "+$14M",
    label: "Saved sale revenue",
    desc: "Revenue protected by reducing friction after purchase.",
  },
];

const outcomes = [
  {
    title: "Order confirmation became a reassurance moment.",
    points: [
      "Created consistency between the confirmation email and confirmation page.",
      "Surfaced essential order information above the fold.",
      "Added clearer next steps and fulfillment expectations.",
      "Made delivery instructions and order modification entry points easier to access.",
    ],
  },
  {
    title: "Order history became easier to scan and act on.",
    points: [
      "Simplified the page name based on quantitative survey results.",
      "Prioritized the primary job of checking order status before repurchase prompts.",
      "Created clearer distinctions between multiple fulfillments in one order.",
      "Removed lower-priority information from order cards to better match customer needs.",
    ],
  },
  {
    title: "Order details became more action-oriented.",
    points: [
      "Added dynamic CTAs based on pre- and post-fulfillment needs.",
      "Tailored common questions to reduce avoidable customer service contacts.",
      "Created an Item Details sub-page for product-specific post-purchase information.",
    ],
  },
  {
    title: "Item details gave customers a place for product-specific support.",
    points: [
      "Added access to protection plan information and claims entry points.",
      "Included configured item details, return policies, and downloadable manuals.",
      "Helped customers find support information tied to the specific item they purchased.",
    ],
  },
];

const exchangeRecs = [
  "Broaden the entry point from 'Start a Return' to 'Fix an Issue'.",
  "Use customer-friendly language for issue selection.",
  "Recommend solutions based on the issue selected.",
  "Clearly explain what happens during an exchange.",
  "Provide confirmation, next steps, and tracking after initiation.",
];

/* ---------- page ---------- */

export function PostPurchaseCaseStudy({ study }: { study: CaseStudy }) {
  const d = study.detail!;
  return (
    <article>
      {/* Strategic summary */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6 space-y-5">
          <p className="text-xl text-navy-700 font-light leading-relaxed border-l-4 border-gold-400 pl-6">
            Post-purchase is where customer trust is either reinforced or lost.
            For Lowe&apos;s, order management, fulfillment visibility, and issue
            resolution were not just support moments, they were retention
            moments tied to churn risk, service costs, and long-term revenue.
          </p>
          <p className="text-lg text-navy-600 font-light leading-relaxed pl-6">
            I co-led a 3.5-month research initiative to diagnose the customer and
            business drivers behind post-purchase friction, align cross-functional
            teams on the problems worth solving, and shape roadmap priorities
            across order confirmation, order history, order details, and
            future-state online exchanges.
          </p>
        </div>
      </section>

      {/* Project snapshot */}
      <section className="bg-sand-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SnapshotItem label="Role" value={d.role} />
            <SnapshotItem label="Timeline" value={d.timeline} />
            <SnapshotItem label="Team" value={d.team} />
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

          <div className="mt-10 pt-8 border-t border-navy-200 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-3">
                Workstreams
              </h3>
              <ul className="space-y-2.5">
                {workstreams.map((w) => (
                  <Bullet key={w}>{w}</Bullet>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-3">
                Core outputs
              </h3>
              <ul className="space-y-2.5">
                {coreOutputs.map((o) => (
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
            An overlooked, high-leverage moment in the journey
          </h2>
          <div className="space-y-5 text-navy-600 font-light leading-relaxed text-lg">
            <p>
              Post-purchase was an overlooked but high-leverage part of the
              customer journey. Customers were not only checking order status,
              they were looking for reassurance, clarity, and a path to resolve
              issues when something went wrong.
            </p>
            <p>
              When customers could not find the right information or fix order
              problems on their own, the experience created avoidable service
              contacts, frustration, and risk of future churn. This made
              post-purchase a strategic opportunity to protect trust, reduce
              operational burden, and support repeat purchase.
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
            Moving from broad churn signals to specific product decisions
          </h2>
          <p className="text-navy-500 font-light leading-relaxed max-w-3xl mb-10">
            I structured the research plan so each phase answered a distinct
            question the team needed resolved before it could act.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
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

      {/* Evidence to decision framework */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>The research logic</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
            From customer signals to product direction
          </h2>
          <div className="grid md:grid-cols-3 gap-4 items-stretch">
            {evidence.map((col, i) => (
              <div key={col.label} className="flex items-stretch">
                <div className="flex-1 rounded-2xl border border-navy-100 bg-white p-6">
                  <p className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-4">
                    {col.label}
                  </p>
                  <ul className="space-y-2">
                    {col.items.map((it) => (
                      <li
                        key={it}
                        className="text-sm text-navy-700 font-light flex items-start gap-2.5"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < evidence.length - 1 && (
                  <span className="hidden md:flex items-center text-gold-500 px-1">
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey map */}
      <section className="bg-sand-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>The post-purchase journey</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
            The questions customers needed answered at each step
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <p className="text-sm text-navy-500 font-light leading-relaxed">
                  &ldquo;{j.q}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we learned */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>What we learned</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
            Four insights that reframed post-purchase
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

      {/* The problems worth solving */}
      <section className="bg-navy-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <SectionLabel>Problem definition</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-4">
            The problems worth solving
          </h2>
          <p className="text-navy-500 font-light leading-relaxed max-w-3xl mb-10">
            The research helped the team move from a broad churn problem to two
            actionable experience problems that could guide roadmap, IA, and
            design priorities.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <div
                key={p.title}
                className="bg-white border border-navy-100 rounded-2xl p-7"
              >
                <span className="text-sm font-semibold text-gold-600">
                  Problem 0{i + 1}
                </span>
                <h3 className="text-lg font-bold text-navy-900 mt-2 mb-3">
                  {p.title}
                </h3>
                <p className="text-navy-500 font-light leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prioritization */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>Prioritization</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-4">
            Turning insights into roadmap priorities
          </h2>
          <p className="text-navy-500 font-light leading-relaxed max-w-3xl mb-10">
            The research created a shared prioritization framework for UX,
            Product, Fulfillment, Content, and Engineering. Instead of treating
            post-purchase as a single page redesign, the team aligned around the
            customer jobs that needed to be supported across the journey.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {priorities.map((p) => (
              <div
                key={p.n}
                className="rounded-2xl border border-navy-100 bg-white p-7 border-t-4 border-t-gold-400"
              >
                <span className="text-sm font-semibold text-gold-600">
                  {p.n}
                </span>
                <h3 className="text-lg font-bold text-navy-900 mt-2 mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-navy-500 font-light leading-relaxed">
                  <span className="font-semibold text-navy-800">Focus. </span>
                  {p.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business impact */}
      <section className="bg-gold-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>Business impact</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-4">
            Measured results after the experience updates
          </h2>
          <p className="text-navy-500 font-light leading-relaxed max-w-3xl mb-10">
            Measured by the product team after the post-purchase experience
            updates shipped, the work improved clarity, self-service resolution,
            and retention.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="bg-white border border-navy-100 rounded-2xl p-6 border-t-4 border-t-gold-400"
              >
                <p className="text-3xl font-extrabold tracking-tight text-navy-900">
                  {m.metric}
                </p>
                <p className="mt-1 font-semibold text-navy-800">{m.label}</p>
                <p className="mt-2 text-sm text-navy-500 font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the research shaped the experience */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>The outcome</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
            How the research shaped the customer experience
          </h2>
          <div className="mb-10">
            <Image
              src="/covers/pp-solutions.jpg"
              alt="Research-informed redesign of the Lowe's post-purchase experience"
              width={1672}
              height={941}
              sizes="(max-width: 768px) 100vw, 900px"
              className="w-full h-auto rounded-2xl border border-navy-100"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-navy-100 bg-white p-7"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-4 leading-snug">
                  {o.title}
                </h3>
                <ul className="space-y-2.5">
                  {o.points.map((pt) => (
                    <Bullet key={pt}>{pt}</Bullet>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* North Star for online exchanges */}
      <section className="bg-navy-50 py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <SectionLabel>Extending the strategy</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-6">
            A North Star for online exchanges
          </h2>
          <div className="space-y-5 text-navy-600 font-light leading-relaxed text-lg max-w-3xl mb-10">
            <p>
              Once the team aligned on the need for clearer post-purchase
              information, the next strategic question became how Lowe&apos;s
              should help customers resolve issues without defaulting to support
              calls or returns.
            </p>
            <p>
              I led research for a future-state online exchange concept in an
              area where no mature self-service experience existed. Using
              competitive analysis, Baymard guidance, and unmoderated usability
              testing, I helped the team evaluate a North Star direction for
              flexible issue resolution.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exchangeRecs.map((r) => (
              <div
                key={r}
                className="rounded-xl border border-navy-100 bg-white p-5"
              >
                <p className="text-sm text-navy-700 font-light leading-relaxed">
                  {r}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership reflection */}
      <section className="py-14 md:py-[4.5rem]">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <SectionLabel>Leadership</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-6">
            What this case demonstrates about my leadership
          </h2>
          <div className="space-y-5 text-navy-700 font-light leading-relaxed text-lg">
            <p>
              This case shows how I operate when the problem is bigger than a
              single flow. I connected customer churn signals to product
              strategy, translated messy feedback into clear problem statements,
              and helped cross-functional teams align on where to invest.
            </p>
            <p>
              The value was not only the research output. It was the decision
              clarity created across Product, Design, Content, Fulfillment, and
              Engineering, helping the organization see post-purchase as a
              strategic lever for retention, trust, and revenue protection.
            </p>
          </div>
        </div>
      </section>

      {/* Consulting bridge */}
      <section className="bg-sand-50 py-14 md:py-[4.5rem] border-y border-navy-100">
        <div data-reveal className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-4">
            Need clarity on a high-friction customer journey?
          </h2>
          <p className="text-navy-500 font-light text-lg mb-8">
            I support teams that need to diagnose customer friction, prioritize
            the problems worth solving, and translate research into
            roadmap-ready recommendations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-navy-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-navy-700 transition-colors"
            >
              Contact
            </Link>
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
