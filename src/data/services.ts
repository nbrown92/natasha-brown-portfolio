import type { IconName } from "@/components/icons";

export interface Service {
  title: string;
  body: string;
  icon: IconName;
}

export const services: Service[] = [
  {
    icon: "search",
    title: "Discovery & Opportunity Framing",
    body: "Know which problems are worth solving. I clarify customer needs and frame the opportunities worth investing in, so you enter a problem space with confidence instead of assumptions.",
  },
  {
    icon: "cursor",
    title: "Usability & Conversion Research",
    body: "Find and fix what is costing you conversions. I pinpoint where customers hesitate, get confused, or drop off in your product or purchase flow, then prioritize the changes that move the metric.",
  },
  {
    icon: "chart",
    title: "Consumer & Customer Insights",
    body: "Understand what your customers actually value. I uncover the behaviors, motivations, and unmet needs behind the data, so product, brand, and innovation decisions reflect real customers, not internal guesses.",
  },
  {
    icon: "route",
    title: "Research Strategy & Roadmapping",
    body: "Invest your research where it matters. I build decision-focused research roadmaps and learning agendas that connect what you need to know to the decisions already on your roadmap.",
  },
  {
    icon: "file",
    title: "Synthesis & Executive Storytelling",
    body: "Turn messy inputs into a decision leaders can make. I translate complex qualitative and quantitative signal into a clear narrative, prioritized recommendations, and product implications your executives can act on.",
  },
  {
    icon: "settings",
    title: "Research Systems & Enablement",
    body: "Make customer insight a team capability. I build the templates, repositories, standards, and AI-assisted workflows that help your team use research well, beyond any single study.",
  },
];

export interface Engagement {
  title: string;
  tagline: string;
  bestFor: string;
  decisions: string;
  includes: string;
  outputs: string;
  timeline: string;
  notFit: string;
  selfSelect: string;
}

export const engagements: Engagement[] = [
  {
    title: "Research Sprint",
    tagline: "Fast customer evidence before a near-term decision.",
    bestFor:
      "Teams that need a clear, defensible answer before a product, design, or roadmap decision in the coming weeks.",
    decisions:
      "Which direction to take, whether a concept holds up, and where the biggest risks are hiding.",
    includes:
      "Research plan, participant criteria, discussion guide, interviews or usability sessions, synthesis, and prioritized recommendations.",
    outputs:
      "Prioritized findings, clear recommendations, and a decision-ready readout.",
    timeline: "2 to 4 weeks",
    notFit:
      "Not ideal for open-ended exploration of a brand-new space. Start with a Discovery Partnership.",
    selfSelect: "a clear answer before a decision in the next few weeks",
  },
  {
    title: "Discovery Partnership",
    tagline: "Frame the right opportunities before you solution.",
    bestFor:
      "Teams entering a new problem space, or unsure what customers actually need before committing to a direction.",
    decisions:
      "Where the real opportunity sits, which problems are worth solving, and what belongs on the roadmap.",
    includes:
      "Stakeholder alignment, research roadmap, customer interviews, journey and theme synthesis, opportunity areas, and product implications.",
    outputs:
      "Opportunity landscape, prioritized problem statements, journey themes, and clear product direction.",
    timeline: "4 to 8 weeks",
    notFit:
      "Not for validating a design that is nearly final. Use a Usability & Conversion Review.",
    selfSelect: "to understand a new problem space before building",
  },
  {
    title: "Usability & Conversion Review",
    tagline: "Find what is costing you conversions, and fix it.",
    bestFor:
      "Teams improving a product flow, purchase journey, app experience, onboarding, or support path.",
    decisions:
      "What to change, what to prioritize, and where friction is hurting conversion or retention.",
    includes:
      "Experience audit, usability testing, friction analysis, and prioritized recommendations with opportunity sizing where possible.",
    outputs:
      "Friction map, prioritized fixes, and recommendations tied to business impact.",
    timeline: "2 to 5 weeks",
    notFit:
      "Not for understanding a brand-new audience or need. Start with a Discovery Partnership.",
    selfSelect: "to fix friction hurting conversion or retention",
  },
  {
    title: "Fractional Research Advisory",
    tagline: "Senior research leadership, on a part-time basis.",
    bestFor:
      "Teams that need stronger research systems, clearer storytelling, or a senior research voice without a full-time hire.",
    decisions:
      "How to build a research practice, how to prioritize a research portfolio, and how to raise decision quality across teams.",
    includes:
      "Research templates, repository structure, synthesis standards, stakeholder workshops, roadmap input, and team coaching.",
    outputs:
      "A research operating model, reusable standards and templates, and an enabled team.",
    timeline: "Ongoing, typically monthly",
    notFit:
      "Not for one-off tactical studies. Choose a Sprint or Review instead.",
    selfSelect: "senior research leadership without a full-time hire",
  },
];

export const researchStrengths: string[] = [
  "Mixed-methods research",
  "Discovery and generative research",
  "Evaluative usability testing",
  "Customer journey research",
  "Survey design and analysis",
  "Concept and claims testing",
  "Behavioral and quantitative analysis",
  "Information architecture",
  "A/B testing partnership",
  "Research roadmapping",
  "Executive storytelling",
  "Research operations and enablement",
  "AI-assisted synthesis",
  "Cross-functional facilitation",
  "Mentorship and team coaching",
];

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
  icon: IconName;
}

export const engagementProcess: ProcessStep[] = [
  {
    step: "01",
    icon: "chat",
    title: "Intro call",
    body: "We talk through the decision you are facing, your timeline, and what you already have. No charge, no obligation.",
  },
  {
    step: "02",
    icon: "file",
    title: "Scoped proposal",
    body: "I send a focused proposal with approach, deliverables, timeline, and investment, sized to the decision rather than padded.",
  },
  {
    step: "03",
    icon: "search",
    title: "Research & synthesis",
    body: "I run the work, keep you in the loop, and synthesize the signal into a defensible point of view.",
  },
  {
    step: "04",
    icon: "chart",
    title: "Decision-ready readout",
    body: "You get prioritized recommendations and executive-ready storytelling, plus a working session to align on next steps.",
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Do you work hourly or fixed-scope?",
    answer:
      "Most engagements are fixed-scope, priced to the decision rather than the hours, so you know the investment and deliverables up front. Fractional and advisory work is typically a monthly retainer.",
  },
  {
    question: "Can you sign an NDA?",
    answer:
      "Yes. I work with sensitive product, customer, and business information regularly and am happy to sign your NDA before we get into specifics.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes, alongside enterprise and mid-size teams. The right engagement scales to your stage. Startups often start with a Research Sprint or Discovery Partnership to de-risk a near-term decision.",
  },
  {
    question: "What if I am not sure which engagement I need?",
    answer:
      "That is what the intro call is for. Tell me the decision you are trying to make and I will recommend the right fit, or tell you honestly if research is not what you need right now.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "It depends on current commitments, but sprints and reviews can often begin within one to two weeks of a signed scope. Reach out with your timeline and I will be straight about availability.",
  },
  {
    question: "Are you available for full-time roles?",
    answer:
      "Yes. Alongside consulting, I am open to senior and leadership research roles. If you are hiring, the work and impact on this site speak to that, and I am glad to talk.",
  },
];

export const credibilityPoints: string[] = [
  "9+ years leading research across enterprise retail e-commerce and global consumer products at Lowe's Digital and Procter & Gamble.",
  "Senior judgment on which research is worth doing, so you spend on the decisions that matter, not busywork.",
  "Decision-focused outputs, not 80-page decks that gather dust. You get a clear point of view your team can act on.",
  "Mixed-methods depth, from discovery and usability to surveys, behavioral analysis, and AI-assisted synthesis.",
  "Executive-ready storytelling that drives stakeholder buy-in and informs enterprise-level planning.",
  "Discreet and confidential. Sensitive work is handled with care and anonymized where needed.",
];
