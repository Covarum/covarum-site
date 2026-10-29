import type { Metadata } from "next";
import { AdvisorDisclosure, ConversationButton, PlanningClose, PlanningShell } from "../_components/planning";
import RothVideo from "../_components/roth-video";
export const metadata: Metadata = {
  title: "Roth Conversions | Covarum",
  description: "Would a Roth conversion make sense for you? Explore the tradeoffs, hear Glenn Eckstut explain the considerations, and start a conversation with Tara at Covarum.",
  alternates: { canonical: "https://www.covarum.com/roth-conversions" },
};
const questions = [
  "Does converting fit my current and expected future tax situation?",
  "Would it make sense to consider conversions over more than one year?",
  "How would I pay the associated taxes?",
  "How could the decision affect retirement income and other income-related costs?",
  "How does it fit with my spouse’s needs and plans for beneficiaries?",
];
const faqs = [
  ["Is a Roth conversion right for everyone?", "No. The current tax cost, your expected future income, how you will pay the taxes, and when you may need the money all deserve attention. A conversion does not automatically reduce lifetime taxes."],
  ["Do I need to convert an entire account?", "No. You can convert part or all of a traditional IRA to a Roth IRA. The untaxed portion converted is generally included in taxable income for that year. The amount and timing should be considered with your tax professional."],
  ["Can I start with a Roth-conversion question?", "Yes. Start with the question you have. The conversation can stay focused on that decision or explore other retirement questions when they are relevant to you."],
  ["What happens after the first conversation?", "Start with Tara to discuss your questions and identify what deserves a closer look. Before proceeding, discuss the appropriate next step, who will provide the work, its scope, and any applicable fees."],
];
export default function RothConversionsPage() {
  return <PlanningShell>
    <section className="hero planning-hero planning-roth-hero"><div className="hero-glow" /><div className="container planning-roth-intro"><div className="eyebrow">Roth Conversions</div><h1 className="hero-title">Would a Roth conversion make sense for you?</h1><p className="hero-copy">The answer starts with your circumstances: your income today, your retirement timeline, and how you expect to use your savings. A focused analysis can help you understand the tradeoffs before making a decision.</p><div className="planning-actions"><ConversationButton /><a href="#glenn-video" className="planning-text-link">Watch Glenn’s Video <span aria-hidden="true">↓</span></a></div><p className="planning-hero-footnote">A focused question. A thoughtful next step.</p></div></section>
    <section className="section" aria-labelledby="tradeoffs-heading"><div className="container planning-editorial"><div><span className="panel-label">Understanding the decision</span><h2 id="tradeoffs-heading">Start with the tradeoffs.</h2></div><div><p>A Roth conversion moves money from a traditional IRA into a Roth IRA. Amounts that have not already been taxed generally become taxable income in the year of conversion. Future qualified Roth IRA withdrawals are tax-free when the required holding period and other qualifying conditions are met; other withdrawals may involve taxes or additional tax. Whether the current cost is worthwhile depends on your circumstances.</p><p className="planning-source">Learn more: <a href="https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras">IRS IRA FAQs</a> and <a href="https://www.irs.gov/publications/p590b">IRS guidance on Roth IRA distributions</a>.</p></div></div></section>
    <section className="section planning-questions-section" aria-labelledby="questions-heading"><div className="container planning-editorial"><div><span className="panel-label">Before deciding</span><h2 id="questions-heading">Questions worth examining.</h2><p>Start with how a conversion could fit your life, income, and plans.</p></div><ul className="planning-questions">{questions.map((question) => <li key={question}>{question}</li>)}</ul></div></section>
    <section id="glenn-video" className="section planning-video-section" aria-labelledby="video-heading"><div className="container"><div className="planning-section-intro"><span className="panel-label">Perspective from Glenn</span><h2 id="video-heading">Hear Glenn explain the considerations.</h2><p className="planning-video-byline">Glenn Eckstut, Financial Advisor</p><p>In this video, Glenn discusses conversion amounts and timing, paying the tax bill, Medicare and Social Security considerations, and how a conversion connects with retirement income and a surviving spouse’s needs.</p></div><RothVideo /><AdvisorDisclosure /></div></section>
    <section className="section planning-feature-section"><div className="container"><div className="planning-feature"><div><span className="panel-label">The broader picture</span><h2>One decision within your retirement plan.</h2><p>A Roth-conversion question can also raise questions about withdrawals, Social Security, future income, and family needs. The conversation can stay focused on a conversion or expand when other decisions deserve attention.</p></div><a href="/retirement-planning" className="header-cta">Explore Retirement Planning <span aria-hidden="true">↗</span></a></div></div></section>
    <section className="section" aria-labelledby="faq-heading"><div className="container planning-editorial"><div><span className="panel-label">Common questions</span><h2 id="faq-heading">A little more clarity.</h2></div><div className="planning-faqs">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}<p className="planning-source">For conversion mechanics, see the <a href="https://www.irs.gov/instructions/i8606">IRS instructions for Form 8606</a>.</p></div></div></section>
    <PlanningClose title="Let’s talk through the question.">Start with a conversation about what you are considering and what information would help you make a more informed decision.</PlanningClose>
  </PlanningShell>;
}
