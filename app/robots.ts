import type { MetadataRoute } from "next";
import { SITE_URL } from "./_lib/search";

export default function robots(): MetadataRoute.Robots {
  // Search/retrieval agents are explicit; the existing wildcard policy is unchanged.
  // Search visibility does not require granting separate model-training permission.
  const searchAgents = ["OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Googlebot", "bingbot"];
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...searchAgents.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
