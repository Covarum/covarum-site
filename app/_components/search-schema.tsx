import type { PlanningFaq } from "../_lib/planning-faqs";
import { businessDescription } from "../_lib/discovery-content";
import { GLENN_ID, ORGANIZATION_ID, SITE_URL, TARA_ID, WEBSITE_ID } from "../_lib/search";

function JsonLd({ value }: { value: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }} />;
}

export function SiteIdentity() {
  return <JsonLd value={{
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": ORGANIZATION_ID, name: "Covarum", description: businessDescription, url: SITE_URL, logo: `${SITE_URL}/optimized-logo.png`, founder: { "@id": TARA_ID }, sameAs: ["https://www.linkedin.com/company/covarum"] },
      { "@type": "Person", "@id": TARA_ID, name: "Tara Wallace", url: `${SITE_URL}/about`, jobTitle: "Financial Strategist | Founder, Covarum", worksFor: { "@id": ORGANIZATION_ID } },
      { "@type": "WebSite", "@id": WEBSITE_ID, name: "Covarum", url: SITE_URL, inLanguage: "en-US", publisher: { "@id": ORGANIZATION_ID } },
    ],
  }} />;
}

export function PlanningSchema({ path, name, faqs }: { path: string; name: string; faqs: PlanningFaq[] }) {
  const url = `${SITE_URL}${path}`;
  return <JsonLd value={{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["WebPage", "FAQPage"], "@id": `${url}#webpage`, url, name, inLanguage: "en-US",
        isPartOf: { "@id": WEBSITE_ID }, publisher: { "@id": ORGANIZATION_ID },
        mentions: [{ "@id": TARA_ID }, { "@id": GLENN_ID }],
        mainEntity: faqs.map(({ id, question, answer }) => ({
          "@type": "Question", "@id": `${url}#${id}`, name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      // Glenn is an outside collaborating professional, not an employee of Covarum.
      { "@type": "Person", "@id": GLENN_ID, name: "Glenn Eckstut", jobTitle: "Financial Advisor", url: GLENN_ID },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name, item: url },
      ] },
    ],
  }} />;
}

export function PlanningFaqs({ faqs }: { faqs: PlanningFaq[] }) {
  return <div className="planning-faqs">{faqs.map(({ id, question, answer, source }) => (
    <details key={id} id={id}><summary>{question}</summary><p>{answer}</p>
      {source ? <p className="planning-source"><a href={source.url}>{source.label}</a></p> : null}
    </details>
  ))}</div>;
}
