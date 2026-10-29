import { PlanningShell } from "../_components/planning";
import BookingLink from "../_components/booking-link";
import { clientInquiryUrl } from "../_lib/planning";
import { businessDescription, discoveryQuestions } from "../_lib/discovery-content";
import { ORGANIZATION_ID, SITE_URL, WEBSITE_ID, pageMetadata } from "../_lib/search";

export const metadata = pageMetadata(
  "Life Insurance, Annuity & Retirement Questions | Covarum",
  "Answers about life insurance coverage, existing-policy reviews, annuity tradeoffs and retirement planning. Get clarity before choosing a product with Covarum.",
  "/questions",
);

export default function QuestionsPage() {
  const url = `${SITE_URL}/questions`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "FAQPage", "@id": `${url}#webpage`, url, name: "Life Insurance, Annuity and Retirement Questions", inLanguage: "en-US", isPartOf: { "@id": WEBSITE_ID }, publisher: { "@id": ORGANIZATION_ID }, mainEntity: discoveryQuestions.map(({ id, question, answer }) => ({ "@type": "Question", "@id": `${url}#${id}`, name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Questions", item: url }] },
    ],
  };
  return <PlanningShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="hero"><div className="hero-glow" /><div className="container" style={{ padding: "64px 0" }}><div className="section-heading">
      <div className="eyebrow">Life insurance. Annuities. Retirement planning.</div>
      <h1 className="hero-title">Good questions.<br />Clearer answers.</h1>
      <p>{businessDescription}</p><p>You do not need a product picked out to start.</p>
      <div className="cta-action"><BookingLink base={clientInquiryUrl} topic="questions">Start the Conversation</BookingLink></div>
    </div></div></section>
    <section className="section" aria-labelledby="questions-heading"><div className="container narrow">
      <div className="section-heading"><h2 id="questions-heading">Start with what is on your mind.</h2></div>
      <nav aria-label="Question topics" className="footer-links" style={{ margin: "24px 0 36px", justifyContent: "center" }}><a href="#life-insurance-amount">Life insurance</a><a href="#existing-policy-review">Policy reviews</a><a href="#annuity-retirement-income">Annuities</a><a href="#retirement-roth-planning">Retirement</a><a href="#first-conversation">Getting started</a></nav>
      {discoveryQuestions.map(({ id, question, answer, href, linkLabel, source }) => <article id={id} key={id} className="service-card" style={{ marginBottom: "24px", scrollMarginTop: "180px" }}>
        <h3>{question}</h3><p>{answer}</p><p><a className="planning-text-link" href={href}>{linkLabel} <span aria-hidden="true">↗</span></a></p>
        {source ? <p className="planning-source"><a href={source.url}>{source.label}</a></p> : null}
      </article>)}
      <div className="planning-disclosure"><p>Educational information, not individualized investment, tax or legal advice. Insurance products and services are offered only where appropriately licensed and available. Eligibility, underwriting and contract terms vary. See the <a href="/retirement-planning">retirement planning page</a> for Glenn Eckstut's separate firm affiliations and disclosures.</p><p><a href="/about">Meet Tara Wallace</a> · <a href="/roth-conversions">Explore Roth conversions</a> · <a href="https://www.linkedin.com/company/covarum">Covarum on LinkedIn</a></p></div>
    </div></section>
    <section className="section section-bottom"><div className="container"><div className="cta-box"><h2>Still have a question? That is a good place to start.</h2><p>Start with Tara to discuss what you are trying to protect or plan for.</p><div className="cta-action"><BookingLink base={clientInquiryUrl} topic="questions">Start the Conversation</BookingLink></div></div></div></section>
  </PlanningShell>;
}
