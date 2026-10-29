import Image from "next/image";
import { AdvisorDisclosure, ConversationButton, PlanningClose, PlanningShell } from "../_components/planning";
import { PlanningFaqs, PlanningSchema } from "../_components/search-schema";
import { retirementFaqs } from "../_lib/planning-faqs";
import { pageMetadata } from "../_lib/search";

export const metadata = pageMetadata(
  "Retirement Planning & Roth Conversion Decisions | Covarum",
  "Retirement with clarity: connect income, Roth conversions, Social Security and withdrawal decisions. Start with Tara Wallace and collaborating advisor Glenn Eckstut.",
  "/retirement-planning",
);
const topics = [
  ["Retirement income", "Understanding how savings, Social Security, pensions, and other income sources may work together."],
  ["Roth conversions", "Exploring whether converting some retirement savings belongs in the plan."],
  ["Withdrawal decisions", "Considering which accounts to draw from, when, and how those decisions affect the broader picture."],
  ["Social Security and Medicare", "Understanding how benefit timing and income-related considerations connect with retirement decisions."],
  ["Family and survivor needs", "Considering how income and financial responsibilities may change for a surviving spouse or other family members."],
  ["Protection and coordination", "Connecting retirement questions with insurance needs and conversations involving your tax and legal professionals."],
];
const steps = [
  ["Start with your questions.", "Share what is changing, what you are considering, and where you would like more clarity."],
  ["Identify what needs a closer look.", "Discuss whether the next step is a focused question, a Roth-conversion analysis, or a broader planning conversation."],
  ["Understand the scope.", "Before moving forward, clarify the work involved, who will provide it, and any applicable fees."],
];
export default function RetirementPlanningPage() {
  return <PlanningShell>
    <PlanningSchema path="/retirement-planning" name="Retirement Planning" faqs={retirementFaqs} />
    <section className="hero planning-hero"><div className="hero-glow" /><div className="container planning-hero-grid">
      <div><div className="eyebrow">Retirement Planning</div><h1 className="hero-title">Retirement with clarity.</h1><div className="hero-copy"><p>Retirement brings a different set of questions. How will your savings become income? What role do taxes play? What changes when work slows down—and what needs to stay protected?</p><p>Start with the decisions in front of you and a conversation about how they fit together.</p></div><div className="planning-actions"><ConversationButton /><a href="/roth-conversions" className="planning-text-link">Explore Roth Conversions <span aria-hidden="true">↗</span></a></div></div>
      <aside className="planning-start-note" aria-label="Where to begin"><span className="panel-label">A place to begin</span><p className="planning-note-title">Your next chapter.<br />Your questions first.</p><p>A focused question is enough to start.</p><ul><li>Income and withdrawals</li><li>Roth-conversion decisions</li><li>The people you want to protect</li></ul></aside>
    </div></section>
    <section className="section planning-topics" aria-labelledby="topics-heading"><div className="container">
      <div className="planning-section-intro"><span className="panel-label">The broader picture</span><h2 id="topics-heading">The decisions are connected. Your planning should be, too.</h2><p>A question about one account can lead to a conversation about income, taxes, timing, or the people who depend on you. Looking at those connections helps put individual decisions in context.</p></div>
      <div className="planning-topic-grid">{topics.map(([title, copy], i) => <article className="planning-topic" key={title}><span className="planning-index" aria-hidden="true">0{i + 1}</span><h3>{title}</h3><p>{copy}</p>{title === "Roth conversions" ? <a className="planning-text-link" href="/roth-conversions">Explore the tradeoffs <span aria-hidden="true">→</span></a> : null}</article>)}</div><p className="planning-helper">These are topics we may discuss. The next step and scope depend on your questions and circumstances.</p>
    </div></section>
    <section className="section planning-feature-section"><div className="container"><div className="planning-feature"><div><span className="panel-label">A closer look</span><h2>Wondering whether a Roth conversion makes sense?</h2><p>It is a useful question to ask in the context of your income, savings, and retirement timeline. The starting point is understanding the tradeoffs and whether a conversion fits your circumstances.</p></div><a href="/roth-conversions" className="header-cta">Explore Roth Conversions <span aria-hidden="true">↗</span></a></div></div></section>
    <section className="section" aria-labelledby="people-heading"><div className="container">
      <div className="planning-section-intro"><span className="panel-label">Personal guidance</span><h2 id="people-heading">A conversation with Tara and Glenn.</h2><p>Tara Wallace, founder of Covarum, works with financial advisor Glenn Eckstut on retirement-planning opportunities. Their collaboration brings together Tara’s focus on personal guidance and protection planning with Glenn’s focus on retirement planning and Roth-conversion analysis.</p></div>
      <div className="planning-people"><article className="planning-person planning-person-tara">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/tara-wallace-headshot_v2.webp" alt="Tara Wallace" width="180" height="220" loading="lazy" />
        <div><h3>Tara Wallace</h3><p className="planning-role">Financial Strategist | Founder, Covarum</p><p>Your starting point for the conversation.</p><a href="/about" className="planning-text-link">Meet Tara <span aria-hidden="true">→</span></a></div></article><article id="glenn-eckstut" className="planning-person planning-person-glenn"><Image src="/glenn-eckstut-headshot.jpg" alt="Glenn Eckstut" width={154} height={200} sizes="(max-width: 640px) 106px, 154px" /><div><span className="panel-label">Collaborating professional</span><h3>Glenn Eckstut</h3><p className="planning-role">Financial Advisor</p><p>Glenn Eckstut is a financial advisor whose background includes wealth management and retirement planning at Wells Fargo and KeyBank. His approach emphasizes helping people understand their options and make informed decisions about their financial future. He collaborates with Tara Wallace on retirement-planning opportunities, including Roth-conversion analysis.</p></div></article></div>
      <AdvisorDisclosure />
    </div></section>
    <section className="section planning-process" aria-labelledby="process-heading"><div className="container"><div className="planning-section-intro"><span className="panel-label">The first step</span><h2 id="process-heading">How the conversation starts.</h2></div><ol className="planning-steps">{steps.map(([title, copy], i) => <li key={title}><span className="planning-step-number" aria-hidden="true">0{i + 1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol></div></section>
    <section className="section" aria-labelledby="retirement-faq-heading"><div className="container planning-editorial"><div><span className="panel-label">Common questions</span><h2 id="retirement-faq-heading">A clearer place to start.</h2></div><PlanningFaqs faqs={retirementFaqs} /></div></section>
    <PlanningClose title="You do not need every answer before you start.">Whether retirement is approaching or already underway, start with the questions that matter to you.</PlanningClose>
  </PlanningShell>;
}
