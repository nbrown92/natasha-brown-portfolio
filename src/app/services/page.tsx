import Link from "next/link";
import type { Metadata } from "next";
import {
  services,
  engagements,
  engagementProcess,
  credibilityPoints,
  faqs,
} from "@/data/services";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services | Natasha Brown, UX Research & Consumer Insights",
  description:
    "Senior UX research and consumer insights consulting for teams making high-stakes product decisions. Discovery and opportunity framing, usability and conversion research, research strategy, synthesis and executive storytelling, and fractional research advisory.",
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white border-b border-navy-100 py-16 md:py-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold-100/50 blur-3xl"
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Consulting & Advisory
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy-900 max-w-3xl leading-[1.1]">
            De-risk your biggest product decisions with senior research
          </h1>
          <p className="mt-6 text-lg font-light text-navy-500 max-w-2xl leading-relaxed">
            I partner with product, design, and innovation teams who need
            clarity before they commit, framing the right opportunities,
            surfacing product and conversion risk, and turning customer signal
            into executive-ready direction. Scoped to your timeline, sized to
            the decision.
          </p>
          <p className="mt-4 text-lg font-light text-navy-500 max-w-2xl leading-relaxed">
            Also open to senior, lead, staff, principal, and research leadership
            roles where this kind of decision-oriented research is needed full
            time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-navy-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors"
            >
              Start a Conversation
            </Link>
            <Link
              href="/portfolio"
              className="border border-navy-300 text-navy-700 font-semibold px-6 py-3 rounded-lg hover:bg-navy-50 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* What I help teams with */}
      <section className="py-16 md:py-20">
        <div data-reveal className="max-w-6xl mx-auto px-6">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900">
            What I help teams with
          </h2>
          <p className="mt-4 text-lg font-light text-navy-500 max-w-3xl leading-relaxed">
            Every engagement is built around a decision you are trying to make,
            not a method I want to run.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-navy-100 rounded-xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-navy-900/5 hover:border-navy-200"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gold-50 text-gold-600 mb-5">
                  <Icon name={service.icon} className="w-6 h-6" />
                </span>
                <h3 className="text-lg font-bold text-navy-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-navy-500 font-light leading-relaxed text-[15px]">
                  {service.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="bg-sand-50 py-16 md:py-20">
        <div data-reveal className="max-w-6xl mx-auto px-6">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Engagement Models
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900">
            Ways to work together
          </h2>
          <p className="mt-4 text-lg font-light text-navy-500 max-w-3xl leading-relaxed">
            From a focused sprint to ongoing advisory, each engagement is scoped
            to the decision in front of you.
          </p>
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            {engagements.map((eng) => (
              <div
                key={eng.title}
                className="bg-white border border-navy-100 rounded-2xl p-8 flex flex-col"
              >
                <h3 className="text-xl font-bold text-navy-900">{eng.title}</h3>
                <p className="text-gold-600 font-medium mt-1 mb-6">
                  {eng.tagline}
                </p>
                <dl className="space-y-4 text-sm flex-1">
                  <EngagementRow label="Best for" value={eng.bestFor} />
                  <EngagementRow
                    label="Decisions it supports"
                    value={eng.decisions}
                  />
                  <EngagementRow label="What is included" value={eng.includes} />
                  <EngagementRow label="Typical outputs" value={eng.outputs} />
                  <EngagementRow label="Timeline" value={eng.timeline} />
                  <EngagementRow
                    label="When it is not the right fit"
                    value={eng.notFit}
                  />
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-navy-500 font-light">
            Pricing is scoped per engagement. Contact me for scope, timeline, and
            availability.
          </p>
        </div>
      </section>

      {/* Choose this if you need */}
      <section className="py-16 md:py-20">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Find your fit
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900 mb-10">
            Choose this if you need...
          </h2>
          <div className="divide-y divide-navy-100 border-y border-navy-100">
            {engagements.map((eng) => (
              <div
                key={eng.title}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5"
              >
                <p className="text-navy-700 font-light leading-relaxed sm:flex-1">
                  {eng.selfSelect}
                </p>
                <span className="text-navy-900 font-semibold shrink-0">
                  {eng.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How engagements work */}
      <section className="bg-sand-50 py-16 md:py-20">
        <div data-reveal className="max-w-6xl mx-auto px-6">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900">
            How engagements work
          </h2>
          <p className="mt-4 text-lg font-light text-navy-500 max-w-3xl leading-relaxed">
            From first conversation to decision-ready recommendations, the path
            is simple and transparent.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementProcess.map((s) => (
              <div key={s.step}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-navy-100 text-gold-600">
                    <Icon name={s.icon} className="w-6 h-6" />
                  </span>
                  <span className="text-3xl font-extrabold text-navy-200">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-navy-500 font-light leading-relaxed text-[15px]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why teams bring me in */}
      <section className="bg-gold-50 py-16 md:py-20">
        <div data-reveal className="max-w-5xl mx-auto px-6">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Why Teams Bring Me In
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900 mb-10">
            A senior research partner, not an extra pair of hands
          </h2>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-5">
            {credibilityPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                <span className="text-navy-700 font-light leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <Link
            href="/portfolio"
            className="mt-10 inline-flex items-center font-semibold text-gold-600 hover:text-gold-700 transition-colors"
          >
            See how this plays out in my case studies &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div data-reveal className="max-w-3xl mx-auto px-6">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900 mb-10">
            Common questions
          </h2>
          <div className="divide-y divide-navy-100 border-y border-navy-100">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-navy-900">
                  {faq.question}
                  <span className="ml-4 text-navy-400 transition-transform group-open:rotate-45 shrink-0 text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-navy-500 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-50 py-16 md:py-20 border-t border-navy-100">
        <div data-reveal className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900 mb-4">
            Have a decision coming up?
          </h2>
          <p className="text-navy-500 font-light text-lg mb-6">
            Tell me what you are trying to decide and I will recommend the right
            engagement, or tell you honestly if I am not the right fit.
          </p>
          <p className="text-sm text-navy-500 font-light mb-8 max-w-xl mx-auto">
            The most useful inquiries include the decision you are trying to
            make, your ideal timeline, and whether you already have participants,
            data, designs, or research questions available.
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

function EngagementRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-semibold text-navy-900">{label}</dt>
      <dd className="text-navy-500 font-light leading-relaxed mt-0.5">
        {value}
      </dd>
    </div>
  );
}
