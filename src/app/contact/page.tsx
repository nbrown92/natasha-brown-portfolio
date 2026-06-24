"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "w-full border border-navy-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent";
const labelClass = "block text-sm font-semibold text-navy-800";
const helperClass = "text-xs text-navy-400 font-light mt-0.5 mb-1.5";

// Set NEXT_PUBLIC_FORMSPREE_ID in .env.local to your Formspree form ID.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    // If no Formspree ID is configured yet, fall back to a local confirmation
    // so the form still works in development.
    if (!FORMSPREE_ID) {
      setSubmitted(true);
      return;
    }

    const form = e.currentTarget;
    setSubmitting(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setError(
          data?.errors?.[0]?.message ??
            "Something went wrong sending your message. Please email me directly at natashabrown.ux@gmail.com.",
        );
      }
    } catch {
      setError(
        "Something went wrong sending your message. Please email me directly at natashabrown.ux@gmail.com.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="relative bg-white border-b border-navy-100 py-20 md:py-28 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold-100/50 blur-3xl"
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy-900 max-w-3xl leading-[1.1]">
            Let&apos;s talk about your role, team, or next product decision
          </h1>
          <p className="mt-6 text-lg font-light text-navy-500 max-w-2xl leading-relaxed">
            I work with a focused number of teams at a time, whether that means
            joining one as a senior research leader or partnering on a specific,
            high-stakes decision. Tell me what you&apos;re working on and
            I&apos;ll personally respond within one business day.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div data-reveal className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="bg-gold-50 rounded-2xl p-12 text-center">
                  <h2 className="text-2xl font-bold tracking-tight text-navy-900 mb-3">
                    Thank you, I&apos;ll be in touch.
                  </h2>
                  <p className="text-navy-600 font-light">
                    Your message has been received. I read every inquiry
                    personally and will respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="hidden"
                    name="_subject"
                    value="New inquiry from natashabrown.com"
                  />
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={`${inputClass} mt-1.5`}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={`${inputClass} mt-1.5`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company or team
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className={`${inputClass} mt-1.5`}
                    />
                  </div>

                  <div>
                    <label htmlFor="reason" className={labelClass}>
                      I&apos;m reaching out about
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      required
                      className={`${inputClass} bg-white mt-1.5`}
                    >
                      <option value="">Select one...</option>
                      <option value="hiring">Hiring conversation</option>
                      <option value="consulting">
                        Consulting or advisory project
                      </option>
                      <option value="speaking">Speaking / workshop</option>
                      <option value="general">General inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="needs" className={labelClass}>
                      The decision or challenge you&apos;re working on
                    </label>
                    <p className={helperClass}>
                      What are you trying to decide, learn, or move forward? A
                      few sentences is plenty to start. If you can, include the
                      stakeholders involved and the outcome you&apos;re hoping
                      for.
                    </p>
                    <textarea
                      id="needs"
                      name="needs"
                      rows={5}
                      required
                      className={`${inputClass} resize-vertical`}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="timeline" className={labelClass}>
                        Timeline
                      </label>
                      <p className={helperClass}>
                        When you&apos;d like to start or need answers by.
                      </p>
                      <input
                        type="text"
                        id="timeline"
                        name="timeline"
                        placeholder="e.g. starting in 3 weeks"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className={labelClass}>
                        Budget range{" "}
                        <span className="font-normal text-navy-400">
                          (optional)
                        </span>
                      </label>
                      <p className={helperClass}>
                        Helps me recommend the right scope. A range is fine.
                      </p>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="materials" className={labelClass}>
                      Link to role, brief, or materials{" "}
                      <span className="font-normal text-navy-400">
                        (optional)
                      </span>
                    </label>
                    <p className={helperClass}>
                      Job description, project brief, designs, or data, if you
                      have them.
                    </p>
                    <input
                      type="url"
                      id="materials"
                      name="materials"
                      placeholder="https://"
                      className={inputClass}
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="text-sm text-red-600 font-light leading-relaxed"
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-navy-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-navy-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Start the Conversation"}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-8">
              <SidebarCard
                variant="gold"
                title="For hiring teams"
                intro="If you're hiring for a senior or leadership research role, it helps to share:"
                items={[
                  "The role, level, and team",
                  "A link to the job description",
                  "Whether it's full-time, contract, or fractional",
                  "Your ideal timeline",
                ]}
                outro="I'm best matched to senior, strategic, decision-oriented research leadership."
              />

              <SidebarCard
                variant="bordered"
                title="For consulting & advisory"
                intro="I'm best suited to strategic, decision-oriented research. A strong inquiry usually includes:"
                items={[
                  "The decision you're trying to make",
                  "Your timeline and any key dates",
                  "Who the stakeholders are",
                  "What you already have (participants, data, designs, questions)",
                  "The outcome you're hoping for",
                ]}
                outro="The more context you share, the faster I can tell you whether and how I can help."
              />

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-1">
                    Response time
                  </h3>
                  <p className="text-sm text-navy-600 font-light">
                    I read every message personally and reply within one
                    business day.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-1">
                    Prefer email or LinkedIn?
                  </h3>
                  <p className="text-sm text-navy-600 font-light">
                    <a
                      href="mailto:natashabrown.ux@gmail.com"
                      className="hover:text-navy-900 transition-colors"
                    >
                      natashabrown.ux@gmail.com
                    </a>
                  </p>
                  <p className="text-sm text-navy-600 font-light">
                    <a
                      href="https://www.linkedin.com/in/natasha-brown-ux/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-navy-900 transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SidebarCard({
  variant,
  title,
  intro,
  items,
  outro,
}: {
  variant: "gold" | "bordered";
  title: string;
  intro: string;
  items: string[];
  outro: string;
}) {
  const [open, setOpen] = useState(false);
  const wrap =
    variant === "gold" ? "bg-gold-50" : "border border-navy-100";

  return (
    <div className={`${wrap} rounded-2xl p-6`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between text-left md:cursor-default"
      >
        <h3 className="text-lg font-bold text-navy-900">{title}</h3>
        <span
          className={`md:hidden text-navy-400 text-xl leading-none transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div className={`${open ? "block" : "hidden"} md:block mt-3`}>
        <p className="text-sm text-navy-600 font-light leading-relaxed mb-3">
          {intro}
        </p>
        <ul className="space-y-2 text-sm text-navy-600 font-light">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-navy-600 font-light leading-relaxed mt-3">
          {outro}
        </p>
      </div>
    </div>
  );
}
