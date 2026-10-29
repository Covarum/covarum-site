import type { Metadata } from "next";

export const SITE_URL = "https://www.covarum.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const TARA_ID = `${SITE_URL}/about#tara-wallace`;
export const GLENN_ID = `${SITE_URL}/retirement-planning#glenn-eckstut`;

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", siteName: "Covarum", title, description, url, locale: "en_US" },
    twitter: { card: "summary", title, description },
  };
}
