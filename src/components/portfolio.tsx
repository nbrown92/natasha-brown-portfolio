import Link from "next/link";
import Image from "next/image";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";

function CardImage({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-navy-100 ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-navy-400 text-xs font-semibold uppercase tracking-widest">
            Image
          </span>
        </div>
      )}
    </div>
  );
}

type CardCopy = {
  challenge: string;
  leadership: string;
  direction: string;
  impact: string;
};

const studyCard: Record<string, CardCopy> = {
  "post-purchase-friction": {
    challenge:
      "Post-purchase friction was creating churn risk, service dependency, and missed retention opportunities.",
    leadership:
      "Co-led a 3.5-month mixed-methods initiative across journey analytics, interviews, surveys, IA, and usability testing.",
    direction:
      "Reframed order management as a retention strategy and shaped roadmap priorities across confirmation, order history, order details, and exchanges.",
    impact:
      "$14M saved sales revenue and self-service improvements tied to a 12% reduction in avoidable service calls.",
  },
  "blinds-category-experience": {
    challenge:
      "Lowe's wanted to lead Blinds & Shades, but shoppers lacked the confidence to move from browsing to configuration and purchase.",
    leadership:
      "Led foundational research across journey mapping, surveys, and iterative usability testing to diagnose friction and size opportunities.",
    direction:
      "Shaped the Q3 roadmap and prioritized list-page, comparison, and configurator improvements over isolated fixes.",
    impact: "+5% add-to-cart rate lift.",
  },
  "disposable-razor-innovation": {
    challenge:
      "Venus needed a disposable razor that could compete with the category leader on shelf appeal, value, and in-use control, within tight cost limits.",
    leadership:
      "Led consumer research using perceptual mapping, in-depth interviews, and two rounds of prototype usability testing.",
    direction:
      "Translated consumer perception into handle design guidance and directed the winning prototype into molding assessment.",
    impact:
      "De-risked tooling and avoided an unnecessary cost increase before investment.",
  },
  "venus-premium-benefit": {
    challenge:
      "Venus wanted to justify a premium price tier with a new exfoliating benefit, but it was unproven in real use.",
    leadership:
      "Led 1.5 years of research across metaphorical elicitation, proposition testing, surveys, and a 9-week in-use diary study.",
    direction:
      "Recommended not continuing under current success criteria and reframed the benefit space toward credible premium smoothness.",
    impact:
      "Protected a 1.5-year, $150K program from scaling an unproven premium claim.",
  },
};

export function PortfolioExplorer() {
  return (
    <div className="space-y-8">
      {caseStudies.map((s) => (
        <CaseStudyCard key={s.slug} study={s} />
      ))}
    </div>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/portfolio/${study.slug}`}
      className="group flex flex-col md:flex-row gap-8 rounded-2xl border border-navy-100 bg-white p-6 md:p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-900/5 hover:border-navy-200"
    >
      <CardImage
        src={study.image}
        alt={study.title}
        className="w-full md:w-60 lg:w-72 shrink-0 h-48 md:h-auto rounded-xl"
      />
      <div className="flex-1">
        <span className="text-xs font-semibold text-gold-600 uppercase tracking-widest">
          {study.category}
        </span>
        <h3 className="mt-3 text-xl md:text-2xl font-bold tracking-tight text-navy-900 group-hover:text-gold-600 transition-colors leading-snug">
          {study.title}
        </h3>
        <p className="mt-1.5 text-sm text-navy-400 font-medium">
          {study.detail?.role ?? "UX Researcher"} · {study.client}
        </p>
        <div className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
              Challenge
            </p>
            <p className="text-sm text-navy-500 font-light leading-relaxed">
              {studyCard[study.slug]?.challenge}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
              Research leadership
            </p>
            <p className="text-sm text-navy-500 font-light leading-relaxed">
              {studyCard[study.slug]?.leadership}
            </p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
              Product direction
            </p>
            <p className="text-sm text-navy-500 font-light leading-relaxed">
              {studyCard[study.slug]?.direction}
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-lg bg-gold-50 border border-gold-200 px-4 py-3">
          <p className="text-xs font-semibold text-gold-700 uppercase tracking-wider mb-1">
            Business impact
          </p>
          <p className="text-sm text-navy-700 font-medium leading-relaxed">
            {studyCard[study.slug]?.impact}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {study.methods.map((m) => (
            <span
              key={m}
              className="text-xs font-medium bg-navy-50 text-navy-600 px-3 py-1 rounded-full"
            >
              {m}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center font-semibold text-gold-600 group-hover:text-gold-700 transition-colors">
          Read case study
          <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}
