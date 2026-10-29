import assert from "node:assert/strict";
import test from "node:test";
import { bookingUrl, resolveAttribution } from "../app/_lib/booking-attribution.ts";

for (const [host, source] of [
  ["chatgpt.com", "chatgpt.com"], ["chat.openai.com", "chatgpt.com"],
  ["claude.ai", "claude.ai"], ["claude.com", "claude.ai"],
  ["www.perplexity.ai", "perplexity.ai"], ["gemini.google.com", "gemini.google.com"],
  ["copilot.microsoft.com", "copilot.microsoft.com"],
]) {
  test(`${host} referral survives internal navigation and reaches booking`, () => {
    const entry = resolveAttribution("", `https://${host}/example`, null);
    assert.deepEqual(entry, { utm_source: source, utm_medium: "referral" });
    const next = resolveAttribution("", "https://www.covarum.com/questions", JSON.stringify(entry));
    const url = new URL(bookingUrl("https://calendly.com/tara-covarum/30min", next, "questions", "covarum-website"));
    assert.equal(url.searchParams.get("utm_source"), source);
    assert.equal(url.searchParams.get("utm_content"), "questions");
    assert.equal(url.searchParams.get("utm_campaign"), "covarum-website");
  });
}

test("unrelated, lookalike, missing and non-web referrers are not called AI", () => {
  for (const referrer of ["", "invalid", "https://bing.com/search", "https://google.com/search", "https://claude.ai.example.org", "https://notperplexity.ai", "https://chatgpt.com@evil.example", "ftp://claude.ai/file"]) {
    assert.deepEqual(resolveAttribution("", referrer, null), {});
  }
});
test("new tagged campaign replaces stored campaign and overrides inferred AI", () => {
  assert.deepEqual(resolveAttribution("?utm_source=newsletter", "https://claude.ai", JSON.stringify({ utm_source: "chatgpt.com", utm_campaign: "old" })), { utm_source: "newsletter" });
});
test("personal query parameters are not forwarded", () => {
  const values = resolveAttribution("?email=private@example.org&name=Someone", "https://claude.ai", "{broken");
  const url = new URL(bookingUrl("https://calendly.com/tara-covarum/30min", values, "questions"));
  assert.equal(url.searchParams.get("email"), null);
  assert.equal(url.searchParams.get("name"), null);
  assert.equal(url.searchParams.get("utm_source"), "claude.ai");
});
test("existing query settings and explicit content are preserved", () => {
  const url = new URL(bookingUrl("https://calendly.com/tara-covarum/30min?hide_gdpr_banner=1", { utm_content: "original" }, "questions"));
  assert.equal(url.searchParams.get("hide_gdpr_banner"), "1");
  assert.equal(url.searchParams.get("utm_content"), "original");
});
test("stored values are limited to known strings and bounded in length", () => {
  assert.deepEqual(resolveAttribution("", "", JSON.stringify({utm_source: 7, other:"hidden", utm_content:" x "})), {utm_content:"x"});
  assert.equal(resolveAttribution(`?utm_source=${"x".repeat(500)}`, "", null).utm_source.length, 200);
});
