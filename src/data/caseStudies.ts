export interface OutcomeMetric {
  metric: string;
  label: string;
  desc: string;
}

export interface ProblemStatement {
  title: string;
  body: string;
}

export interface ExperienceGroup {
  area: string;
  points: string[];
}

export interface CaseStudyDetail {
  intro: string;
  timeline: string;
  role: string;
  team: string;
  stakeholders: string[];
  diagnosticMethods: string[];
  leadership: string[];
  leadershipHeading?: string;
  researchGoals: string[];
  metricsEyebrow?: string;
  metricsHeading?: string;
  metrics?: OutcomeMetric[];
  process: string[];
  processNote: string;
  framingEyebrow?: string;
  framingHeading?: string;
  framingInsights?: string[];
  problemsHeading?: string;
  problems?: ProblemStatement[];
  prioritizationHeading?: string;
  prioritizationImpact?: string[];
  finalExperienceEyebrow?: string;
  finalExperienceHeading?: string;
  finalExperience?: ExperienceGroup[];
  nextPhase?: {
    title: string;
    approach: string;
    outcome: string;
    improvements: string[];
  };
  reflection?: string[];
  confidentialityNote: string;
}

export interface CardMetric {
  value: string;
  label: string;
}

export interface CaseStudyTldr {
  roleLine: string;
  decision: string;
  result: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  outcomeTitle: string;
  cardRole: string;
  primaryMetric: CardMetric;
  secondaryMetric?: CardMetric;
  tldr?: CaseStudyTldr;
  client: string;
  category: string;
  image?: string;
  imageAlt?: string;
  bannerImage?: string;
  bannerPosition?: string;
  summary: string;
  challenge: string;
  approach: string;
  methods: string[];
  outcomes: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  detail?: CaseStudyDetail;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "post-purchase-friction",
    title:
      "Transforming Lowe's post-purchase UX to reduce churn risk and protect revenue",
    outcomeTitle: "Cutting churn risk in Lowe's post-purchase UX",
    cardRole: "Sr. UX Researcher, Co-Lead",
    primaryMetric: { value: "$14M", label: "saved sales revenue" },
    secondaryMetric: { value: "-12%", label: "avoidable service calls" },
    tldr: {
      roleLine: "Sr. UX Researcher, Co-Lead · Lowe's Digital",
      decision: "Post-purchase friction was driving churn risk and avoidable service cost; the question was whether order management should be reframed as a retention strategy.",
      result: "Reframing it as retention protected ~$14M in sales revenue and cut avoidable service calls 12%.",
    },
    client: "Lowe's Digital",
    category: "Retail E-commerce / Post-Purchase",
    image: "/covers/pp-cover.jpg",
    imageAlt: "Lowe's order management experience on mobile",
    bannerImage: "/covers/pp-banner.jpg",
    bannerPosition: "center 58%",
    summary:
      "Led mixed-methods research across journey analytics, interviews, surveys, and usability testing to diagnose post-purchase friction driving churn. Defined the problems worth solving, drove cross-functional alignment, and shaped a redesigned order experience and a North Star for online exchanges.",
    challenge:
      "Over half of online customers abandon Lowe's within 12 months, a critical signal of post-purchase friction impacting retention, loyalty, and revenue. Fulfillment, customer service, and communication were the top drivers of churn, and Lowe's was losing customers to competitors who better met post-purchase expectations.",
    approach:
      "As Sr. UX Researcher and project co-lead, I defined the research strategy and ran a mixed-methods program across journey analytics (Medallia), in-depth interviews, quantitative surveys, card sorting for IA clarity, and usability testing. I translated ambiguous signals into clear problem statements, aligned cross-functional teams, and led executive storytelling that elevated post-purchase as a strategic focus area.",
    methods: [
      "Mixed Methods",
      "Journey Analytics",
      "Usability Testing",
      "Retention Strategy",
    ],
    outcomes: [
      "Defined the highest-impact post-purchase problems worth solving across DIY and Pro customers",
      "Shaped a redesigned order experience and a new Item Details sub-page grounded in research",
      "Aligned design, product, and engineering on a North Star for online exchanges",
    ],
    detail: {
      intro:
        "Managing orders post-purchase is a critical, yet often overlooked, touchpoint for driving customer retention and loyalty. Through my leadership in this initiative, Lowe's recognized the post-purchase experience as both a risk and an opportunity: the first chance to re-engage customers and the last to build trust. My research surfaced clear pathways to improve loyalty, reduce costly service contacts, and protect long-term revenue.",
      timeline: "3.5 months · 2024 to 2025",
      role: "Sr. UX Researcher, Project Co-Lead",
      team: "Lead Designer, 3 Mid-Level Designers, 2 Content Strategists",
      stakeholders: [
        "4 Bottom-Funnel Product Managers",
        "Fulfillment Product Manager",
        "Engineering Leadership",
      ],
      diagnosticMethods: [
        "Journey Analytics (Medallia)",
        "In-Depth Interviews",
        "Quantitative Surveys",
        "Card Sorting for IA Clarity",
        "Usability Testing",
      ],
      leadership: [
        "Defined research strategy to align cross-functional teams",
        "Led problem definition and executive storytelling",
        "Drove decisions impacting roadmap and design priorities",
        "Reduced churn risk through targeted improvements to communication, order visibility, and service recovery",
        "Elevated post-purchase as a strategic focus area for leadership",
      ],
      researchGoals: [
        "Identify friction points in the post-purchase experience that contribute to customer churn",
        "Prioritize content and architecture needs for an improved experience",
        "Evaluate and refine design solutions to make repurchasing more seamless and intuitive",
      ],
      metricsEyebrow: "Anticipated outcomes & metrics",
      metricsHeading: "The projected business case",
      metrics: [
        {
          metric: "+12 pts",
          label: "NPS",
          desc: "Improve long-term customer retention.",
        },
        {
          metric: "-1200 bps",
          label: "Call volume",
          desc: "Reduce post-purchase friction and support costs.",
        },
        {
          metric: "+$14M",
          label: "Saved sale revenue",
          desc: "Prevent lost revenue through better engagement.",
        },
        {
          metric: "+$15M",
          label: "Reorder revenue",
          desc: "Boost customer lifetime value through smarter experiences.",
        },
      ],
      process: ["Discover", "Define", "Develop", "Deliver"],
      processNote:
        "From problem framing through research (Nov '24) to readiness for execution and roadmap alignment (Feb '25), I used a double-diamond approach to translate ambiguity into aligned product direction.",
      framingHeading:
        "Using research to diagnose churn risk and drive alignment",
      framingInsights: [
        "Fulfillment, customer service, and communication were top drivers of churn.",
        "Lowe's was losing customers to competitors who better met post-purchase expectations.",
      ],
      problemsHeading:
        "The problems worth solving to reduce churn and improve retention",
      problems: [
        {
          title: "Customers don't have the information they need",
          body: "DIY customers don't feel fully informed about their orders, next steps, or item-specific support options, leaving them confused and helpless. This leads to increased support calls and reduced customer loyalty.",
        },
        {
          title: "Customers don't have a clear way to fix issues",
          body: "DIY customers struggle to resolve order issues due to limited self-service options and a lack of clear resolution paths, which causes frustration and uncertainty on next steps, further increasing reliance on support channels.",
        },
      ],
      prioritizationHeading: "Research-led prioritization",
      prioritizationImpact: [
        "Established IA priorities aligned to distinct customer needs (DIY vs. Pro)",
        "Identified gaps in entry points and flows to address customer needs",
        "Drove alignment across design and product teams on critical experience gaps",
      ],
      finalExperience: [
        {
          area: "Order status & confirmation",
          points: [
            "Created consistency between the order confirmation email and page so customers can reference the same information any time they need to.",
            "Communicated reassurance that their order is being taken care of.",
            "Surfaced easy access to order-modification entry points at the right fulfillment stage to reduce the need to call customer service.",
            "Simplified the page name based on quantitative survey results.",
            "Deprioritized the 'Buy It Again' component while orders are still in progress, keeping the primary job of checking order status first.",
            "Created a clear distinction between multiple fulfillments in one order.",
            "Removed total price and loyalty points on order-level cards to match customer priorities for this page.",
          ],
        },
        {
          area: "Order details & a new Item Details sub-page",
          points: [
            "Restructured the Order Details page and added dynamic CTAs that react to customer needs pre- and post-fulfillment.",
            "Tailored common-question information at the bottom of the page to reduce the need for customer service.",
            "Added a new Item Details sub-page, the biggest addition, in response to users not being able to find the product info they needed: item-specific details, protection plan info and claims entry points, configured item details, return policies, and downloadable user manuals.",
          ],
        },
      ],
      nextPhase: {
        title: "Shaping the next phase: a North Star for online exchanges",
        approach:
          "To address the second customer and business problem, I led a research strategy focused on defining a future-state solution for online exchanges, an area where no existing experience existed. Leveraging competitive analysis and Baymard's industry guidelines, I provided direction to design and product teams on aligning future concepts with customer needs and expectations, guiding strategic decisions to reduce reliance on support channels while improving self-service pathways.",
        outcome:
          "I used unmoderated usability testing to gather rapid, directional feedback, enabling us to align quickly on a North Star concept to drive stakeholder buy-in and inform enterprise-level planning.",
        improvements: [
          "Introduced a 'Fix an Issue' CTA that captures customers who don't strictly want a return, letting the business save the sale with flexible support solutions.",
          "Used customer-friendly language for selecting possible issues.",
          "Recommended solutions based on the issue selected so customers are aware of all their options.",
          "Communicated clearly what to expect when completing an exchange online.",
          "Provided clear, easy-to-reference confirmation, next steps, and tracking for initiated exchanges.",
        ],
      },
      confidentialityNote:
        "This work is summarized and anonymized due to confidentiality. Results were measured by the product team after the experience updates shipped. Happy to walk through deeper specifics in an interview.",
    },
  },
  {
    slug: "blinds-category-experience",
    title:
      "Leading UX strategy to elevate the Blinds & Shades category experience",
    outcomeTitle: "Lifting conversion in Lowe's Blinds & Shades experience",
    cardRole: "Sr. UX Researcher",
    primaryMetric: { value: "+5%", label: "add-to-cart rate" },
    secondaryMetric: { value: "+18 bps", label: "likelihood to recommend" },
    tldr: {
      roleLine: "Sr. UX Researcher · Lowe's Digital",
      decision: "The Blinds & Shades category was underperforming on conversion and confidence; the question was which experience gaps to prioritize on the Q3 roadmap.",
      result: "Prioritizing the right gaps lifted add-to-cart rate 5% and likelihood to recommend 18 bps.",
    },
    client: "Lowe's Digital",
    category: "Retail E-commerce / Category Experience",
    image: "/covers/lowes-blinds-cover.jpg",
    imageAlt: "Lowe's Blinds and Shades category page",
    bannerImage: "/covers/lowes-blinds-banner.jpg",
    summary:
      "Led foundational, agile research to elevate Lowe's Blinds & Shades category experience: mapping the buying journey, prioritizing opportunities with survey data, and iterating on list and configurator designs. The work shaped the Q3 roadmap and influenced CX investment across the business.",
    challenge:
      "Define a research strategy to support Lowe's ambition to lead in the Blinds & Shades category by uncovering key customer barriers and opportunities to increase confidence, drive conversion, and streamline the omni-channel experience.",
    approach:
      "I led agile, iterative research across journey mapping, quantitative surveys, and usability testing to surface breakdowns in the buying flow, prioritize the highest-impact opportunities at scale, and optimize the list and configurator experiences.",
    methods: [
      "Journey Mapping",
      "Conversion Optimization",
      "Usability Testing",
      "Category Strategy",
    ],
    outcomes: [
      "Shaped the Q3 roadmap by uncovering high-friction gaps and aligning the org on what mattered most to users",
      "Drove a measurable lift in add-to-cart rate and likelihood to recommend across touched flows",
      "Championed a category-specific UX research strategy later scaled by other teams",
    ],
    detail: {
      intro:
        "I led foundational research that kicked off a new strategic workstream in appliance and home décor, categories critical to Lowe's seasonal revenue. The goal was to improve the buying journey from the customer's lens, using agile, iterative research to identify key breakdowns in experience and inform product strategy. Insights from this work laid the groundwork for cross-team prioritization and influenced broader CX investments across the business.",
      timeline: "2 months · 2023",
      role: "Sr. UX Researcher",
      team: "Sr. Designer, Content Strategist, Sr. Product Manager",
      stakeholders: ["Category Management Leads", "Merchants"],
      diagnosticMethods: [
        "Journey Mapping to surface breakdowns in buying flows",
        "Quantitative Surveys to prioritize opportunities at scale",
        "Iterative Usability Testing to optimize solutions",
      ],
      leadership: [
        "Championed a category-specific UX research strategy, later scaled by other research and design teams.",
        "Informed cross-functional decision-making, influencing product, content, and category teams.",
        "Elevated UX as a strategic priority across product and merchandising functions.",
      ],
      researchGoals: [
        "Uncover the key customer barriers in the Blinds & Shades buying journey.",
        "Identify opportunities to increase shopping confidence.",
        "Prioritize the experience improvements most likely to drive conversion.",
        "Streamline the omni-channel experience across online and in-store.",
      ],
      metricsEyebrow: "Outcomes & metrics",
      metricsHeading: "Measured impact",
      metrics: [
        {
          metric: "+5%",
          label: "Add-to-cart rate",
          desc: "Across the flows we touched: list, product detail, and configurator.",
        },
        {
          metric: "+18 bps",
          label: "Likelihood to recommend",
          desc: "A lift in customer sentiment across the category experience.",
        },
      ],
      process: ["Discovery", "Explore", "Test"],
      processNote:
        "Run from February to April 2023, this research shaped our Q3 roadmap by uncovering high-friction gaps in the experience and aligning the org on what mattered most to users.",
      prioritizationHeading:
        "Driving enterprise alignment through strategic research",
      prioritizationImpact: [
        "Selected high-impact questions that informed the redesign of the list and configurator pages.",
        "Benchmarked best practices using Baymard's e-commerce guidelines.",
        "Created a synthesis snapshot used in stakeholder readouts to influence the short-term roadmap.",
        "Co-created a journey map with the design team, highlighting friction points in exploration and the configurator.",
      ],
      finalExperience: [
        {
          area: "How my research shaped the final experience",
          points: [
            "Surfaced all products on the list page, so shoppers can see the full assortment in one place without hitting dead ends.",
            "Improved the configurator to reduce friction when customizing blinds and shades.",
          ],
        },
      ],
      confidentialityNote:
        "This work is summarized and anonymized due to confidentiality. Some visuals are omitted. Happy to walk through deeper specifics in an interview.",
    },
  },
  {
    slug: "disposable-razor-innovation",
    title: "Reimagining the disposable razor to compete with a category leader",
    outcomeTitle: "De-risking tooling for a Venus disposable razor redesign",
    cardRole: "User & Products Researcher",
    primaryMetric: { value: "De-risked", label: "tooling before investment" },
    tldr: {
      roleLine: "User & Products Researcher · Procter & Gamble",
      decision: "Venus needed to beat Bic Soleil for the first time; the question was whether changing only the handle design could shift purchase intent without retooling the blades.",
      result: "Consumer-driven handle direction de-risked tooling investment and built a pipeline for competitive advantage.",
    },
    client: "Procter & Gamble",
    category: "Consumer Products / Innovation",
    image: "/covers/dispo-card.jpg",
    imageAlt: "Venus disposable razor handle prototypes",
    bannerImage: "/covers/dispo-banner.jpg",
    bannerPosition: "center top",
    summary:
      "Led consumer research to reimagine the Venus disposable razor, uncovering the product attributes that drive appeal before and during use. Used perceptual mapping, in-depth interviews, and iterative usability testing to guide handle design and build a pipeline to beat the category leader, Bic Soleil.",
    challenge:
      "Develop a holistic proposition to beat the key disposable razor competitor in tier (Bic Soleil), and use the program to make a step change in sustainability.",
    approach:
      "I aligned the research plan and ran a mixed qualitative and quantitative program: perceptual mapping with in-depth interviews in Discover, then iterative usability testing on low-fidelity prototypes in Explore, to identify the handle design attributes that would shift purchase intent without changing the blades.",
    methods: [
      "Perceptual Mapping",
      "In-Depth Interviews",
      "Usability Testing",
      "CPG Innovation",
    ],
    outcomes: [
      "Enabled a pipeline for competitive advantage with a product learning plan to beat Bic Soleil for the first time",
      "Led consumer-driven docking design recommendations that improved experience and avoided unnecessary cost",
      "Uncovered the disposable user's need for a sense of control and the attributes that satisfy it at both moments of truth",
    ],
    detail: {
      intro:
        "This program set out to reimagine the Venus disposable razor: developing a holistic proposition to beat the key in-tier competitor, Bic Soleil, while making a step change in sustainability. I led the consumer research that defined what drives appeal before and during use, and translated it into design direction the team could build on.",
      timeline: "6 months · $90K budget",
      role: "User & Products Researcher",
      team: "Senior Brand Manager, Brand Analytics & Insights, Project Manager, Industrial Designer, Product Designer, Program Manager",
      stakeholders: [
        "Marketing VP",
        "Brand Director",
        "R&D VP",
        "Product Supply VP",
      ],
      diagnosticMethods: [
        "Literature Review",
        "Perceptual Mapping",
        "In-Depth Interviews",
        "Prototype Ranking",
        "Usability Testing",
      ],
      leadershipHeading: "Leadership and business impact",
      leadership: [
        "Enabled a pipeline for competitive advantage by developing a fundamental understanding of disposable-user needs, via a product learning plan to beat the Bic Soleil competitor for the first time.",
        "Led consumer-driven recommendations on docking design, resulting in an improved experience and avoiding an unnecessary cost increase.",
        "Uncovered the disposable user's specific need for a sense of control, and the product attributes required to meet that perception at both the first and second moments of truth.",
      ],
      researchGoals: [
        "How to improve the rating at the first moment of truth to drive purchase intent.",
        "How to introduce the task of exchanging cartridges without causing frustration in her grooming routine.",
        "Whether product usage rating could improve by changing only the handle design, not the blades.",
        "How to increase value perception to maintain a 115x price index versus competition.",
      ],
      process: ["Discover", "Explore", "Test", "Listen"],
      processNote:
        "Across a Discover phase (12 ninety-minute interviews pairing perceptual mapping with in-depth interviews) and an Explore phase (20 thirty-minute sessions per design round on low-fidelity prototypes), I moved from understanding what drives appeal to validating specific handle designs with consumers.",
      framingEyebrow: "Discover phase",
      framingHeading: "What drives appeal before and during use",
      framingInsights: [
        "Recommendation: use a current handle design as a starting point and apply findings to the new design.",
        "Defined what she wants at the first moment of truth (on shelf) versus the second moment of truth (in use).",
      ],
      finalExperienceEyebrow: "Explore phase",
      finalExperienceHeading: "Iterating prototypes toward a winning design",
      finalExperience: [
        {
          area: "Two design iteration rounds",
          points: [
            "First iteration focused on form; the second focused on elastomer placement, tested with 20 interviews per design round against low-fidelity controls.",
            "Recommendation: pass the winning design to the molding team for assessment and to build a sample tool.",
          ],
        },
      ],
      reflection: [
        "Avoid overwhelming the user, and yourself, with too much stimuli.",
        "Factor in enough time for transcribing data.",
        "Revisit research questions after new findings.",
      ],
      confidentialityNote:
        "This work is summarized and anonymized due to confidentiality. Some visuals are omitted. Happy to walk through deeper specifics in an interview.",
    },
  },
  {
    slug: "venus-premium-benefit",
    title: "Testing whether a premium razor benefit could survive real use",
    outcomeTitle: "Protecting a $150K program from an unproven premium claim",
    cardRole: "User & Products Researcher",
    primaryMetric: { value: "$150K", label: "program protected" },
    secondaryMetric: { value: "1.5 yrs", label: "of research led" },
    tldr: {
      roleLine: "User & Products Researcher · Procter & Gamble",
      decision: "Venus wanted to justify a $25-$30 premium price tier on a new exfoliation benefit; the question was whether the benefit could survive real-world use.",
      result: "The benefit failed the performance test, and the recommendation to stop protected a $150K program from investing behind an unproven claim.",
    },
    client: "Procter & Gamble",
    category: "Consumer Products / Innovation",
    image: "/covers/venus-exfoliating-razor-mock.jpg",
    imageAlt: "Venus premium exfoliating razor concept",
    bannerImage: "/covers/premium-razor-banner.jpg",
    bannerPosition: "center top",
    summary:
      "Led 1.5 years of consumer research to define a new premium benefit for Venus and justify a higher price tier. Used metaphorical elicitation, in-depth interviews, surveys, and a 9-week diary study to pressure-test the proposition, ultimately recommending against launch when the benefit failed to deliver superior results.",
    challenge:
      "Establish a new standard of superiority and a new price tier ($25 to $30) in the women's wet-shave category and become market leader, while understanding the appeal of a new exfoliating job-to-be-done.",
    approach:
      "I aligned scope and the research plan, then ran a multi-method program: metaphorical elicitation and virtual interviews to uncover unmet needs, in-depth interviews and surveys on holistic-proposition prototypes, and a 9-week at-home split-body diary study to test real performance against expectations.",
    methods: [
      "Metaphorical Elicitation",
      "Concept Testing",
      "Diary Study",
      "Survey",
    ],
    outcomes: [
      "Drove cross-functional strategy to close the gap between benefit technology and perceived benefit from real usage",
      "Made the recommendation not to continue the program under its current success criteria, protecting investment",
      "Defined new concepts around 'texture-less' skin to upgrade how the team thinks about 'smooth' for premium consumers",
    ],
    detail: {
      intro:
        "This 1.5-year program set out to define a new standard of superiority for Venus and justify a premium price tier in women's wet shave, anchored on a new exfoliating job-to-be-done. I led the consumer research that tested whether the benefit was real, whether it could be communicated, and whether it justified the price, and made the call when the evidence said no.",
      timeline: "1.5 years · $150K budget",
      role: "User & Products Researcher",
      team: "Senior Brand Manager, Brand Analytics & Insights, Project Manager, Finance Manager, Industrial Designer, Product Designer, Program Manager",
      stakeholders: ["Marketing VP", "Brand Director", "R&D VP"],
      diagnosticMethods: [
        "Metaphorical Elicitation",
        "Virtual & In-Depth Interviews",
        "Survey",
        "Diary Study",
      ],
      leadershipHeading: "Leadership and business impact",
      leadership: [
        "Drove cross-functional strategy to close the gap between the benefit-bar technology and the desired and perceived benefits from actual product usage.",
        "Made the recommendation not to continue the program under its current success criteria, protecting the business from investing behind an unproven benefit.",
        "Defined new concepts and articulation around 'texture-less' skin to upgrade how the team thinks about 'smooth' for the premium-minded consumer.",
      ],
      researchGoals: [
        "Can we achieve a better shave experience to warrant the price point?",
        "Can we communicate this new benefit smartly and intrinsically?",
        "Is an exfoliating razor able to meet the target user's unmet needs?",
        "How do we elevate the overall design and holistic proposition to compel users to spend more?",
      ],
      process: ["Discover", "Explore", "Test", "Listen"],
      processNote:
        "Across an Explore phase using metaphorical elicitation (6 sixty-minute virtual interviews) and prototype testing (17 forty-five-minute interviews with surveys), and a Test phase using a 9-week at-home split-body diary study (30 participants, with 5 users weekly), I moved from unmet-needs discovery to a real-world performance test of the exfoliation benefit.",
      framingEyebrow: "Early signal",
      framingHeading: "The proposition showed strong initial promise",
      framingInsights: [
        "Our premium user welcomed a sophisticated design upgrade and, unprompted, said the handle would last forever.",
        "The packaging felt high-end and sustainable, like opening a present, and the holistic proposition could command a price in the $40 range.",
      ],
      finalExperienceEyebrow: "The test that changed the recommendation",
      finalExperienceHeading: "What the diary study revealed",
      finalExperience: [
        {
          area: "The reality gap",
          points: [
            "The specific exfoliation bar pattern was relatively unimportant to users.",
            "Performance was not superior to our best-designed cartridge.",
            "There was a clear gap between the performance users expected and what they experienced.",
          ],
        },
        {
          area: "In users' words",
          points: [
            "I always looked at them as two separate things. It's nice somebody put them together.",
            "I don't exfoliate every time I shave. You're only supposed to exfoliate two to three times a week.",
            "It didn't feel like it was exfoliating. You know what exfoliating feels like; this didn't feel like that.",
          ],
        },
      ],
      reflection: [
        "Relative category rating is more relevant than overall rating for success criteria.",
        "Ensure recruit criteria are inclusive to get a truly representative base.",
        "Get to usability testing sooner rather than later.",
      ],
      confidentialityNote:
        "This work is summarized and anonymized due to confidentiality. Some visuals are omitted. Happy to walk through deeper specifics in an interview.",
    },
  },
];
