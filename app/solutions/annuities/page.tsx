import { PlanningShell, PlanningClose, ConversationButton } from "../../_components/planning";
import { ORGANIZATION_ID, SITE_URL, pageMetadata } from "../../_lib/search";

export const metadata = pageMetadata(
  "Annuities & Retirement Income | Covarum",
  "Understand annuity options, retirement income, fees, withdrawal restrictions and insurer-backed guarantees. Review an existing contract or start with your questions.",
  "/solutions/annuities",
);

const questions = [
  { question: "What is an annuity?", answer: "An annuity is a contract with an insurance company. Depending on the contract, it can help accumulate money for later, provide income now or in the future, or do both. Benefits, costs and access to your money vary by product." },
  { question: "How do fixed and fixed indexed annuities differ?", answer: "A fixed annuity credits interest under its stated rate terms. A fixed indexed annuity links some interest credits to an index, subject to contract rules such as caps or participation rates. You do not own the index, and credited interest is not the same as the index's return. Review the rate period, renewal terms and withdrawal rules." },
  { question: "Can I access my money?", answer: "Access depends on the contract. Some deferred annuities permit limited withdrawals without a surrender charge. Other withdrawals may trigger surrender charges, adjustments or taxes, and may reduce benefits. Some income choices exchange access to a lump sum for payments. Keep emergency savings and near-term spending needs in the conversation." },
  { question: "What does guaranteed actually mean?", answer: "A guarantee is a promise by the issuing insurer, subject to contract terms and the insurer's financial strength and claims-paying ability. It may apply to a rate, a value or an income payment. It does not make every part of the contract risk-free. Annuities are not FDIC-insured bank deposits." },
  { question: "Does a review mean replacing my annuity?", answer: "No. Start with the contract you already own. A replacement can create costs, start a new surrender period or give up valuable existing benefits. Compare both contracts and potential tax consequences before deciding. Keeping the current contract may be the better choice." },
  { question: "Is an annuity right for everyone?", answer: "No. Consider your income needs, time horizon, other assets, costs and need for liquidity, along with other ways to meet the same goal. A headline rate, bonus or income illustration is not enough to make the decision." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/solutions/annuities#service`,
  name: "Annuity and retirement income conversations",
  url: `${SITE_URL}/solutions/annuities`,
  description: "Review annuity options, existing contracts, costs, guarantees and access to savings in the context of retirement income needs.",
  provider: { "@id": ORGANIZATION_ID },
};

export default function AnnuitiesPage() {
  return <PlanningShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="hero"><div className="hero-glow" /><div className="container" style={{ padding: "64px 0" }}><div className="section-heading">
      <div className="eyebrow">Annuities &amp; retirement income</div>
      <h1 className="hero-title">Your retirement income deserves a clear plan.</h1>
      <p>Considering an annuity - or trying to understand one you already own? Start with what you need your money to do. Then look at the benefits, costs and tradeoffs.</p>
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
    <section className="section"><div className="container narrow"><div className="section-heading"><h2>Bring the contract. Bring your questions.</h2><p>A recent statement, the contract and any benefit riders help make a review useful. We look at the existing terms before discussing a change.</p><a className="planning-text-link" href="/retirement-planning">Explore the Broader Retirement Picture <span aria-hidden="true">↗</span></a></div>
      <div className="planning-disclosure"><p>Insurance products and services are offered only where appropriately licensed and available. Product types, eligibility and terms vary by state and insurer. Guarantees depend on the issuing insurer's financial strength and claims-paying ability. Information is educational, not individualized investment, tax or legal advice. Consult your tax and legal professionals about your circumstances.</p><p>Independent educational resources: <a href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/annuities">Investor.gov: Annuities</a> and <a href="https://content.naic.org/insurance-topics/annuities">NAIC: Annuities</a>.</p></div>
    </div></section>
    <PlanningClose title="Understand the commitment before you make it." topic="annuities">Start with Tara to discuss your retirement income questions or an annuity you already own.</PlanningClose>
  </PlanningShell>;
}
