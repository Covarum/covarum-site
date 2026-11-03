import { PlanningShell, PlanningClose, ConversationButton } from "../../_components/planning";
import { ORGANIZATION_ID, SITE_URL, pageMetadata } from "../../_lib/search";

export const metadata = pageMetadata(
  "Annuities in Retirement Income Planning | Covarum",
  "Learn where annuities may fit within retirement income planning. Understand costs, withdrawal restrictions, long-term commitments and insurer-backed guarantees before deciding.",
  "/solutions/annuities",
);

const questions = [
  { question: "What is an annuity?", answer: "An annuity is a contract with an insurance company. Depending on the contract, it can help accumulate money for later, provide income now or in the future, or do both. Benefits, costs and access to your money vary by product." },
  { question: "How do fixed and fixed indexed annuities differ?", answer: "A fixed annuity credits interest under its stated rate terms. A fixed indexed annuity links some interest credits to an index, subject to contract rules such as caps or participation rates. You do not own the index, and credited interest is not the same as the index's return. Review the rate period, renewal terms and withdrawal rules." },
  { question: "Can I access my money?", answer: "Access depends on the contract. Some deferred annuities permit limited withdrawals without a surrender charge. Other withdrawals may trigger surrender charges, adjustments or taxes, and may reduce benefits. Some income choices exchange access to a lump sum for payments. Keep emergency savings and near-term spending needs in the conversation." },
  { question: "What does guaranteed actually mean?", answer: "A guarantee is a promise by the issuing insurer, subject to contract terms and the insurer's financial strength and claims-paying ability. It may apply to a rate, a value or an income payment. It does not make every part of the contract risk-free. Annuities are not FDIC-insured bank deposits." },
  { question: "What if I already own an annuity?", answer: "Understand your contract's income features, costs, surrender period and access to savings. Exiting or replacing an existing annuity can involve surrender charges, taxes or lost benefits. Keeping it may be appropriate; consider it within your overall retirement income needs." },
  { question: "Is an annuity right for everyone?", answer: "No. Consider your income needs, time horizon, other assets, costs and need for liquidity, along with other ways to meet the same goal. A headline rate, bonus or income illustration is not enough to make the decision." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/solutions/annuities#service`,
  name: "Annuities as a retirement income option",
  url: `${SITE_URL}/solutions/annuities`,
  description: "Explore where annuities may fit within a broader retirement income plan, including costs, insurer-backed guarantees and liquidity tradeoffs.",
  provider: { "@id": ORGANIZATION_ID },
};

export default function AnnuitiesPage() {
  return <PlanningShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="hero"><div className="hero-glow" /><div className="container" style={{ padding: "64px 0" }}><div className="section-heading">
      <div className="eyebrow">Annuities within retirement planning</div>
      <h1 className="hero-title">Your retirement income deserves a clear plan.</h1>
      <p>Annuities are one possible retirement-income tool, not the starting point for everyone. Start with the income you need and the flexibility you want before considering a long-term commitment.</p>
      <div className="cta-action"><ConversationButton topic="annuities" /></div>
    </div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><div className="panel-label">Before the product conversation</div><h2>Three questions worth answering first.</h2></div>
      <div className="services-grid">
        <article className="service-card"><h3>What income do you need?</h3><p>Consider your spending, other income sources and when you want payments to begin.</p></article>
        <article className="service-card"><h3>What needs to stay accessible?</h3><p>Keep emergency reserves, upcoming purchases and changing plans in view.</p></article>
        <article className="service-card"><h3>What would you give up?</h3><p>Review withdrawal restrictions, costs, limits on growth and conditions attached to benefits.</p></article>
      </div>
    </div></section>
    <section className="section"><div className="container narrow"><div className="section-heading"><h2>Annuity questions, answered clearly.</h2></div>
      {questions.map(({ question, answer }) => <article className="service-card" key={question} style={{ marginBottom: "20px" }}><h3>{question}</h3><p>{answer}</p></article>)}
    </div></section>
    <section className="section"><div className="container narrow"><div className="section-heading"><h2>Already have an annuity?</h2><p>Understand its income features, surrender rules and benefits within your broader retirement picture. Changing or replacing the contract is not automatically the right move.</p><a className="planning-text-link" href="/retirement-planning">Explore the Broader Retirement Picture <span aria-hidden="true">↗</span></a></div>
      <div className="planning-disclosure"><p>Insurance products and services are offered only where appropriately licensed and available. Product types, eligibility and terms vary by state and insurer. Guarantees depend on the issuing insurer's financial strength and claims-paying ability. Information is educational, not individualized investment, tax or legal advice. Consult your tax and legal professionals about your circumstances.</p><p>Independent educational resources: <a href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/annuities">Investor.gov: Annuities</a> and <a href="https://content.naic.org/insurance-topics/annuities">NAIC: Annuities</a>.</p></div>
    </div></section>
    <PlanningClose title="Start with your retirement income goals." topic="retirement-planning">Start with Tara to discuss income needs and whether an annuity may be appropriate as part of your plan.</PlanningClose>
  </PlanningShell>;
}
