import type { MetadataRoute } from "next";
import { SITE_URL } from "./_lib/search";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "", "/solutions", "/questions", "/about", "/contact", "/join-covarum",
    "/solutions/life-insurance", "/solutions/annuities", "/solutions/mortgage-protection",
    "/retirement-planning", "/roth-conversions",
    "/clarity/index.html",
    "/clarity/guides/retirement-income-gap.html", "/clarity/guides/life-insurance-needs.html",
    "/clarity/guides/life-insurance-policy-review.html", "/clarity/guides/disability-income-gap.html",
    "/clarity/guides/choosing-financial-help.html",
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
