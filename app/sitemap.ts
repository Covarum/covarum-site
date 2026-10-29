import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "", "/solutions", "/about", "/contact", "/join-covarum",
    "/solutions/life-insurance", "/solutions/annuities", "/solutions/mortgage-protection",
    "/retirement-planning", "/roth-conversions",
  ];
  return paths.map((path) => ({ url: `https://www.covarum.com${path}` }));
}
