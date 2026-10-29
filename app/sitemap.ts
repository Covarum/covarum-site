import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/solutions", "/about", "/contact", "/join-covarum", "/solutions/life-insurance", "/solutions/mortgage-protection", "/retirement-planning", "/roth-conversions"].map((path) => ({ url: `https://www.covarum.com${path}` }));
}
