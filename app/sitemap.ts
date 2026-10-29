import type { MetadataRoute } from "next";
import { SITE_URL } from "./_lib/search";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "", "/solutions", "/questions", "/about", "/contact", "/join-covarum",
    "/solutions/life-insurance", "/solutions/annuities", "/solutions/mortgage-protection",
    "/retirement-planning", "/roth-conversions",
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
