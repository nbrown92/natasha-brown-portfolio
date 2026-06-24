import Link from "next/link";
import Image from "next/image";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";

export function PortfolioExplorer() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {caseStudies.map((s) => (
        <CaseStudyCard key={s.slug} study={s} />
      ))}
    </div>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const tags = study.methods.slice(0, 2);

  return (
    <Link
      href={`/portfolio/${study.slug}`}
      className="group flex flex-row rounded-2xl border border-navy-100 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] hover:border-navy-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
    >
      {/* Image — portrait left column */}
      <div className="relative w-32 md:w-40 shrink-0 overflow-hidden rounded-l-2xl bg-navy-100">
        {study.image ? (
          <Image
            src={study.image}
            alt={study.imageAlt ?? study.outcomeTitle}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            sizes="160px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-navy-400 text-xs font-semibold uppercase tracking-widest text-center px-2">
              {study.outcomeTitle}
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-4 py-4 min-w-0">
        <h3 className="text-base font-bold leading-snug tracking-tight text-navy-900 group-hover:text-gold-600 transition-colors">
          {study.outcomeTitle}
        </h3>
        <p className="mt-1 text-xs text-navy-400 font-medium">
          {study.cardRole} · {study.client}
        </p>

        {/* Metric block */}
        <div className="mt-3 border-t border-b border-navy-100 py-3">
          <div className={`flex items-baseline ${study.secondaryMetric ? "gap-4" : ""}`}>
            <div className={study.secondaryMetric ? "flex-1" : ""}>
              <span className="block text-xl font-extrabold tracking-tight text-gold-600">
                {study.primaryMetric.value}
              </span>
              <span className="block text-[11px] text-navy-500 font-medium mt-0.5">
                {study.primaryMetric.label}
              </span>
            </div>
            {study.secondaryMetric && (
              <>
                <div className="w-px self-stretch bg-navy-100" />
                <div className="flex-1">
                  <span className="block text-xl font-extrabold tracking-tight text-gold-600">
                    {study.secondaryMetric.value}
                  </span>
                  <span className="block text-[11px] text-navy-500 font-medium mt-0.5">
                    {study.secondaryMetric.label}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex gap-1.5 flex-wrap">
            {tags.map((t) => (
              <span
                key={t}
                className="text-[11px] font-medium bg-navy-50 text-navy-600 px-2.5 py-0.5 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center text-xs font-semibold text-gold-600 group-hover:text-gold-700 transition-colors whitespace-nowrap">
            Read case study
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
