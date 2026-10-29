import { PlanningShell, PlanningClose } from "../_components/planning";
import { pageMetadata } from "../_lib/search";

export const metadata = pageMetadata(
  "Life Insurance, Annuities & Retirement Solutions | Covarum",
  "Explore life insurance, annuities and retirement planning with Covarum. Review existing policies and get clear on your next step. Additional insurance services available.",
  "/solutions",
);

const priorities = [
  { title: "Life Insurance", description: "Explore protection for the people and responsibilities that depend on you. Start with your goals, your budget and the coverage you already own.", href: "/solutions/life-insurance", label: "Explore Life Insurance" },
  { title: "Annuities & Retirement Income", description: "Understand how an annuity works, where it might fit and the tradeoffs to consider - including costs, guarantees and access to your savings.", href: "/solutions/annuities", label: "Explore Annuities" },
];
const additional = [
  { title: "Mortgage Protection", description: "Explore how life insurance could help your beneficiaries manage a mortgage and other obligations.", href: "/solutions/mortgage-protection", label: "Explore Mortgage Protection" },
  { title: "Business Protection", description: "Discuss protection needs involving business ownership, key people and financial responsibilities.", href: "/contact", label: "Discuss Your Business" },
  { title: "Disability & Income Protection", description: "Ask about coverage for income you depend on if illness or injury keeps you from working.", href: "/contact", label: "Ask About Income Protection" },
  { title: "Long-Term Care", description: "Talk through future care needs and the coverage options available for your situation.", href: "/contact", label: "Discuss Care Planning" },
  { title: "Health Insurance", description: "Get help understanding health coverage options for your household or work situation.", href: "/contact", label: "Ask About Health Coverage" },
  { title: "Medicare", description: "Bring your coverage questions and discuss the options available for your circumstances and location.", href: "/contact", label: "Ask a Medicare Question" },
];

export default function SolutionsPage() {
  return <PlanningShell>
    <section className="hero"><div className="hero-glow" /><div className="container" style={{ padding: "64px 0" }}>
      <div className="section-heading"><div className="eyebrow">Protection and planning for real life</div><h1 className="hero-title">Protect your people.<br />Plan for what&apos;s next.</h1><p>Life insurance, annuities and retirement planning lead the conversation. We start with what matters to you - not with a product picked out.</p></div>
    </div></section>
    <section className="section"><div className="container services-grid services-grid-two">
      {priorities.map((item) => <article className="service-card" key={item.href}><h2>{item.title}</h2><p>{item.description}</p><a className="planning-text-link" href={item.href}>{item.label} <span aria-hidden="true">↗</span></a></article>)}
    </div></section>
    <section className="section"><div className="container"><div className="planning-feature"><div><div className="panel-label">The bigger retirement picture</div><h2>Income, timing and the decisions ahead.</h2><p>Explore retirement planning with Tara and Glenn, including the questions to consider before a Roth conversion.</p><a className="planning-text-link" href="/roth-conversions">Explore Roth Conversion Planning <span aria-hidden="true">↗</span></a></div><a className="planning-text-link" href="/retirement-planning">Explore Retirement Planning <span aria-hidden="true">↗</span></a></div></div></section>
    <section className="section"><div className="container narrow"><div className="section-heading"><div className="panel-label">Already have coverage?</div><h2>Understand it before you change it.</h2><p>A policy review starts with what you own, what it costs and whether it still fits. A review does not automatically mean replacement. Sometimes the right decision is to keep what you have.</p><a className="planning-text-link" href="/contact">Request a Policy Review <span aria-hidden="true">↗</span></a></div></div></section>
    <section className="section" id="additional-services"><div className="container">
      <div className="section-heading"><div className="panel-label">Additional services</div><h2>There&apos;s room for the rest of your questions, too.</h2><p>Services and product availability are confirmed for your state and situation.</p></div>
      <div className="services-grid">{additional.map((item) => <article className="service-card" key={item.title}><h3>{item.title}</h3><p>{item.description}</p><a className="planning-text-link" href={item.href}>{item.label} <span aria-hidden="true">↗</span></a></article>)}</div>
    </div></section>
    <section className="section"><div className="container narrow"><p className="planning-helper">Insurance products and services are offered only where appropriately licensed and available. Glenn Eckstut collaborates with Tara as a financial advisor outside Covarum; see the retirement planning page for his firm affiliations and disclosures.</p></div></section>
    <PlanningClose title="Start with the question you have." topic="solutions">You don&apos;t need a product picked out. Tell us what you&apos;re trying to protect or plan for, and we&apos;ll talk through the next step.</PlanningClose>
  </PlanningShell>;
}
