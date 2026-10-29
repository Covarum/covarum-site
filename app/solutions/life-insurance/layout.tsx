import type { ReactNode } from "react";
import { ORGANIZATION_ID, SITE_URL, pageMetadata } from "../../_lib/search";

export const metadata = pageMetadata(
  "Life Insurance Planning | Covarum",
  "Clear, strategic life insurance planning for families, professionals, and business owners. Protect what matters with Covarum.",
  "/solutions/life-insurance",
);

export default function LifeInsuranceLayout({ children }: { children: ReactNode }) {
  const url = `${SITE_URL}/solutions/life-insurance`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", "@id": `${url}#service`, name: "Life insurance planning", serviceType: "Life insurance planning and policy reviews", url, provider: { "@id": ORGANIZATION_ID } },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` }, { "@type": "ListItem", position: 3, name: "Life Insurance", item: url }] },
  ] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />{children}</>;
}
