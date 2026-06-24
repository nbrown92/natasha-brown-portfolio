import Link from "next/link";
import type { Metadata } from "next";
import { PortfolioExplorer } from "@/components/portfolio";

export const metadata: Metadata = {
  title: "Case Studies | Natasha Brown, UX Research & Consumer Insights Leader",
  description:
    "Selected UX research and consumer insights work across retail e-commerce and consumer product innovation at Lowe's Digital and Procter & Gamble. How research reduced product risk, clarified priorities, and shaped roadmap, design, and business decisions.",
};

export default function Work() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white border-b border-navy-100 py-14 md:py-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold-100/50 blur-3xl"
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Case Studies
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-900 max-w-4xl leading-[1.05]">
            Research that turns customer signal into product momentum
          </h1>
          <p className="mt-4 text-lg font-light text-navy-500 max-w-3xl leading-relaxed">
            Selected work showing how I&apos;ve helped teams reduce product
            risk, clarify what to build, and translate customer behavior into
            roadmap, design, and business decisions across retail e-commerce and
            consumer products.
          </p>
        </div>
      </section>

      {/* Case studies explorer */}
      <section className="bg-sand-50 py-12 md:py-16">
        <div data-reveal className="max-w-6xl mx-auto px-6">
          <PortfolioExplorer />
          <p className="mt-10 text-sm text-navy-500 font-light max-w-3xl">
            Some work is anonymized or summarized due to confidentiality.
            Projected figures reflect modeled business impact used to prioritize
            initiatives. Deeper examples are available in interviews or
            consulting discussions.
          </p>
        </div>
      </section>

      {/* Consulting bridge */}
      <section className="bg-navy-50 py-20 md:py-24 border-t border-navy-100">
        <div data-reveal className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900 mb-4">
            Need this kind of clarity for your team?
          </h2>
          <p className="text-navy-500 font-light text-lg mb-8">
            I support teams that need to understand customer behavior, de-risk a
            product direction, evaluate an experience, or turn messy signals
            into executive-ready recommendations.
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
    </>
  );
}
