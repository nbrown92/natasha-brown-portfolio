import { caseStudies, type CaseStudy } from "@/data/caseStudies";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlindsCaseStudy } from "@/components/blinds-case-study";
import { PostPurchaseCaseStudy } from "@/components/post-purchase-case-study";
import { DisposableRazorCaseStudy } from "@/components/disposable-razor-case-study";
import { VenusCaseStudy } from "@/components/venus-case-study";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return { title: "Not Found" };
  return {
    title: `${study.title} | Natasha Brown`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <>
      <section className="bg-white border-b border-navy-100 py-20 md:py-28">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <Link
            href="/portfolio"
            className="text-navy-400 text-sm hover:text-navy-700 transition-colors mb-6 inline-block"
          >
            &larr; All Work
          </Link>
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-4">
            {study.client} &middot; {study.category}
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-navy-900 leading-[1.1]">
            {study.title}
          </h1>
          {(study.bannerImage ?? study.image) && (
            <div className="relative mt-10 w-full h-56 md:h-80 rounded-2xl overflow-hidden border border-navy-100">
              <Image
                src={study.bannerImage ?? study.image ?? ""}
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
                style={{ objectPosition: study.bannerPosition ?? "center" }}
              />
            </div>
          )}
        </div>
      </section>

      {/* TL;DR summary */}
      {study.tldr && (
        <section className="bg-sand-50 border-b border-navy-100">
          <div className="max-w-4xl mx-auto px-6 py-10 md:py-12">
            <div className="border-l-[3px] border-gold-400 pl-6 space-y-3">
              <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-1">
                TL;DR
              </p>
              <p className="text-sm font-semibold text-navy-500 tracking-wide">
                {study.tldr.roleLine}
              </p>
              <p className="text-navy-700 font-light leading-relaxed text-[17px]">
                {study.tldr.decision}
              </p>
              <p className="text-navy-900 font-semibold leading-relaxed text-[17px]">
                {study.tldr.result}
              </p>
              {(study.primaryMetric || study.secondaryMetric) && (
                <div className="flex items-baseline gap-6 pt-1">
                  <div>
                    <span className="text-2xl font-extrabold tracking-tight text-gold-600">
                      {study.primaryMetric.value}
                    </span>
                    <span className="ml-2 text-sm text-navy-500 font-medium">
                      {study.primaryMetric.label}
                    </span>
                  </div>
                  {study.secondaryMetric && (
                    <>
                      <div className="w-px h-5 bg-navy-200" />
                      <div>
                        <span className="text-2xl font-extrabold tracking-tight text-gold-600">
                          {study.secondaryMetric.value}
                        </span>
                        <span className="ml-2 text-sm text-navy-500 font-medium">
                          {study.secondaryMetric.label}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {study.slug === "post-purchase-friction" ? (
        <PostPurchaseCaseStudy study={study} />
      ) : study.slug === "blinds-category-experience" ? (
        <BlindsCaseStudy study={study} />
      ) : study.slug === "disposable-razor-innovation" ? (
        <DisposableRazorCaseStudy study={study} />
      ) : study.slug === "venus-premium-benefit" ? (
        <VenusCaseStudy study={study} />
      ) : study.detail ? (
        <RichCaseStudy study={study} />
      ) : (
        <SimpleCaseStudy study={study} />
      )}
    </>
  );
}

/* ---------- Rich, fully native case study ---------- */

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

function RichCaseStudy({ study }: { study: CaseStudy }) {
  const d = study.detail!;
  return (
    <article>
      {/* Intro */}
      <section className="py-16 md:py-20">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <p className="text-xl text-navy-700 font-light leading-relaxed border-l-4 border-gold-400 pl-6">
            {d.intro}
          </p>
        </div>
      </section>

      {/* Snapshot */}
      <section className="bg-sand-50 py-16 md:py-20">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-2">
                Role
              </h3>
              <p className="text-navy-800 font-medium">{d.role}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-2">
                Timeline
              </h3>
              <p className="text-navy-800 font-medium">{d.timeline}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-2">
                Team
              </h3>
              <p className="text-navy-700 font-light text-sm leading-relaxed">
                {d.team}
              </p>
            </div>
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

      {/* Leadership & impact */}
      <section className="py-16 md:py-20">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <SectionLabel>My leadership & impact</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-8">
            {d.leadershipHeading ?? "How I led the work"}
          </h2>
          <ul className="space-y-4">
            {d.leadership.map((l) => (
              <Bullet key={l}>{l}</Bullet>
            ))}
          </ul>
        </div>
      </section>

      {/* Challenge + goals */}
      <section className="bg-navy-50 py-16 md:py-20">
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

      {/* Metrics (optional) */}
      {d.metrics && d.metrics.length > 0 && (
        <section className="py-16 md:py-20">
          <div data-reveal className="max-w-5xl mx-auto px-6">
            <SectionLabel>{d.metricsEyebrow ?? "Outcomes & metrics"}</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
              {d.metricsHeading ?? "Measured impact"}
            </h2>
            <div
              className={`grid sm:grid-cols-2 gap-6 ${
                d.metrics.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-2"
              }`}
            >
              {d.metrics.map((o) => (
                <div
                  key={o.label}
                  className="bg-white border border-navy-100 rounded-2xl p-6 border-t-4 border-t-gold-400"
                >
                  <p className="text-3xl font-extrabold tracking-tight text-navy-900">
                    {o.metric}
                  </p>
                  <p className="mt-1 font-semibold text-navy-800">{o.label}</p>
                  <p className="mt-2 text-sm text-navy-500 font-light leading-relaxed">
                    {o.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="bg-sand-50 py-16 md:py-20">
        <div data-reveal className="max-w-4xl mx-auto px-6">
          <SectionLabel>Strategic research process</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-8">
            From discovery to direction
          </h2>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {d.process.map((phase, i) => (
              <span key={phase} className="flex items-center gap-3">
                <span className="bg-white border border-navy-200 text-navy-800 font-semibold px-5 py-2 rounded-full">
                  {phase}
                </span>
                {i < d.process.length - 1 && (
                  <span className="text-gold-500">&rarr;</span>
                )}
              </span>
            ))}
          </div>
          <p className="text-navy-700 font-light leading-relaxed">
            {d.processNote}
          </p>
        </div>
      </section>

      {/* Framing the problem (optional) */}
      {d.framingInsights && d.framingInsights.length > 0 && (
        <section className="py-16 md:py-20">
          <div data-reveal className="max-w-4xl mx-auto px-6">
            <SectionLabel>{d.framingEyebrow ?? "Framing the problem"}</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-8">
              {d.framingHeading ?? "What the research surfaced"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {d.framingInsights.map((insight) => (
                <div
                  key={insight}
                  className="bg-gold-50 rounded-2xl p-6 border-l-4 border-gold-400"
                >
                  <p className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-2">
                    Key insight
                  </p>
                  <p className="text-navy-800 font-medium leading-relaxed">
                    {insight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Problems to solve (optional) */}
      {d.problems && d.problems.length > 0 && (
        <section className="bg-navy-50 py-16 md:py-20">
          <div data-reveal className="max-w-4xl mx-auto px-6">
            <SectionLabel>Defining the right problems</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-8">
              {d.problemsHeading ?? "The problems worth solving"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {d.problems.map((p, i) => (
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
      )}

      {/* Prioritization / alignment (optional) */}
      {d.prioritizationImpact && d.prioritizationImpact.length > 0 && (
        <section className="py-16 md:py-20">
          <div data-reveal className="max-w-4xl mx-auto px-6">
            <SectionLabel>Prioritization & alignment</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-8">
              {d.prioritizationHeading ?? "Research-led prioritization"}
            </h2>
            <ul className="space-y-3">
              {d.prioritizationImpact.map((p) => (
                <Bullet key={p}>{p}</Bullet>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Final experience (optional) */}
      {d.finalExperience && d.finalExperience.length > 0 && (
        <section className="bg-sand-50 py-16 md:py-20">
          <div data-reveal className="max-w-4xl mx-auto px-6">
            <SectionLabel>{d.finalExperienceEyebrow ?? "The outcome"}</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-10">
              {d.finalExperienceHeading ??
                "How my research shaped the final customer experience"}
            </h2>
            <div className="space-y-10">
              {d.finalExperience.map((group) => (
                <div key={group.area}>
                  <h3 className="text-lg font-bold text-navy-900 mb-4">
                    {group.area}
                  </h3>
                  <ul className="space-y-3">
                    {group.points.map((pt) => (
                      <Bullet key={pt}>{pt}</Bullet>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next phase (optional) */}
      {d.nextPhase && (
        <section className="bg-gold-50 py-16 md:py-20">
          <div data-reveal className="max-w-4xl mx-auto px-6">
            <SectionLabel>The next phase</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-6">
              {d.nextPhase.title}
            </h2>
            <p className="text-navy-700 font-light leading-relaxed mb-4">
              <span className="font-semibold text-navy-900">
                Research approach.{" "}
              </span>
              {d.nextPhase.approach}
            </p>
            <p className="text-navy-700 font-light leading-relaxed mb-8">
              <span className="font-semibold text-navy-900">Outcome. </span>
              {d.nextPhase.outcome}
            </p>
            <ul className="space-y-3">
              {d.nextPhase.improvements.map((imp) => (
                <Bullet key={imp}>{imp}</Bullet>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Reflection (optional) */}
      {d.reflection && d.reflection.length > 0 && (
        <section className="py-16 md:py-20">
          <div data-reveal className="max-w-4xl mx-auto px-6">
            <SectionLabel>Reflection</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 mb-8">
              What I would carry forward
            </h2>
            <ul className="space-y-3">
              {d.reflection.map((r) => (
                <Bullet key={r}>{r}</Bullet>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Confidentiality + nav */}
      <section className="py-16 md:py-20">
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

/* ---------- Simple layout for summary-level case studies ---------- */

function SimpleCaseStudy({ study }: { study: CaseStudy }) {
  return (
    <article className="py-16 md:py-24">
      <div data-reveal className="max-w-4xl mx-auto px-6">
        <p className="text-xl text-navy-700 font-light leading-relaxed mb-16 border-l-4 border-gold-400 pl-6">
          {study.summary}
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-navy-900 mb-4">
            The Challenge
          </h2>
          <p className="text-navy-600 font-light leading-relaxed">
            {study.challenge}
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-navy-900 mb-4">
            The Approach
          </h2>
          <p className="text-navy-600 font-light leading-relaxed mb-6">
            {study.approach}
          </p>
          <div className="flex flex-wrap gap-2">
            {study.methods.map((method) => (
              <span
                key={method}
                className="text-sm font-medium bg-navy-50 text-navy-700 px-4 py-2 rounded-full"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gold-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-navy-900 mb-6">
            Outcomes
          </h2>
          <ul className="space-y-4">
            {study.outcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-gold-500 shrink-0" />
                <span className="text-navy-700 font-light leading-relaxed">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {study.testimonial && (
          <blockquote className="border-l-4 border-navy-900 pl-6 mb-16">
            <p className="text-xl font-light text-navy-800 italic mb-3">
              &ldquo;{study.testimonial.quote}&rdquo;
            </p>
            <cite className="text-sm text-navy-500 not-italic">
              {study.testimonial.author}, {study.testimonial.role}
            </cite>
          </blockquote>
        )}

        <p className="text-sm text-navy-500 font-light mb-16">
          Some details are anonymized or summarized due to confidentiality.
          Happy to walk through deeper specifics in an interview or consulting
          discussion.
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
    </article>
  );
}
