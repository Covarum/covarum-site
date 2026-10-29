export const ATTRIBUTION_KEY = "covarum.attribution.v1";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
type UtmKey = typeof UTM_KEYS[number];
export type Attribution = Partial<Record<UtmKey, string>>;

function clean(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim().slice(0, 200) : undefined;
}

export function resolveAttribution(search: string, referrer: string, stored: string | null): Attribution {
  const current: Attribution = {};
  const params = new URLSearchParams(search);
  for (const key of UTM_KEYS) {
    const value = clean(params.get(key));
    if (value) current[key] = value;
  }
  // A new explicitly tagged arrival replaces the prior campaign as a unit.
  if (Object.keys(current).length > 0) return current;
  try {
    const parsed: unknown = JSON.parse(stored || "null");
    if (parsed && typeof parsed === "object") {
      for (const key of UTM_KEYS) {
        const value = clean((parsed as Record<string, unknown>)[key]);
        if (value) current[key] = value;
      }
    }
  } catch { /* Invalid or unavailable session storage must not block booking. */ }
  if (Object.keys(current).length > 0) return current;
  try {
    const host = new URL(referrer).hostname;
    if (host === "chatgpt.com" || host === "chat.openai.com") {
      return { utm_source: "chatgpt.com", utm_medium: "referral" };
    }
  } catch { /* Direct visits need no inferred referrer. */ }
  return current;
}

export function bookingUrl(base: string, attribution: Attribution, topic: string, campaign = "covarum-retirement"): string {
  const url = new URL(base);
  url.searchParams.set("utm_campaign", campaign);
  url.searchParams.set("utm_content", topic);
  for (const key of UTM_KEYS) {
    const value = clean(attribution[key]);
    if (value) url.searchParams.set(key, value);
  }
  return url.toString();
}
