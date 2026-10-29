import assert from "node:assert/strict";
import test from "node:test";
import { bookingUrl, resolveAttribution } from "../app/_lib/booking-attribution.ts";

const calendar = "https://calendly.com/tara-covarum/30min";

test("ChatGPT arrival survives a homepage-to-planning-page visit", () => {
  const arrival = resolveAttribution("?utm_source=chatgpt.com&utm_campaign=retirement", "", null);
  const nextPage = resolveAttribution("", "https://chatgpt.com/c/example", JSON.stringify(arrival));
  const url = new URL(bookingUrl(calendar, nextPage, "roth-conversions"));
  assert.equal(url.origin + url.pathname, calendar);
  assert.equal(url.searchParams.get("utm_source"), "chatgpt.com");
  assert.equal(url.searchParams.get("utm_campaign"), "retirement");
  assert.equal(url.searchParams.get("utm_content"), "roth-conversions");
});

test("a newly tagged campaign replaces all previous campaign values", () => {
  const result = resolveAttribution("?utm_source=linkedin", "", JSON.stringify({ utm_source: "chatgpt.com", utm_medium: "referral", utm_campaign: "old" }));
  assert.deepEqual(result, { utm_source: "linkedin" });
});

test("explicit campaign values take priority over a referring hostname", () => {
  assert.deepEqual(resolveAttribution("?utm_source=newsletter&utm_medium=email", "https://chatgpt.com/", null), { utm_source: "newsletter", utm_medium: "email" });
});

test("only recognized ChatGPT hosts are inferred", () => {
  assert.equal(resolveAttribution("", "https://chatgpt.com/", null).utm_source, "chatgpt.com");
  assert.equal(resolveAttribution("", "https://chat.openai.com/", null).utm_source, "chatgpt.com");
  assert.deepEqual(resolveAttribution("", "https://chatgpt.com.example.org/", null), {});
});

test("invalid storage and unrelated parameters do not break or contaminate booking", () => {
  const result = resolveAttribution("?email=private@example.org&name=Someone", "invalid URL", "{bad json");
  const url = new URL(bookingUrl(calendar, result, "retirement-planning"));
  assert.equal(url.origin + url.pathname, calendar);
  assert.equal(url.searchParams.get("email"), null);
  assert.equal(url.searchParams.get("name"), null);
  assert.equal(url.searchParams.get("utm_campaign"), "covarum-retirement");
});

test("only known string UTM values survive storage and values are bounded", () => {
  assert.deepEqual(resolveAttribution("", "", JSON.stringify({ utm_source: 7, other: "hidden", utm_content: " x " })), { utm_content: "x" });
  const result = resolveAttribution(`?utm_source=${"a".repeat(500)}`, "", null);
  assert.equal(result.utm_source.length, 200);
});

test("booking preserves existing calendar settings and incoming campaign content", () => {
  const url = new URL(bookingUrl(`${calendar}?hide_gdpr_banner=1`, { utm_content: "original-content", utm_term: "Roth conversion" }, "roth-conversions"));
  assert.equal(url.searchParams.get("hide_gdpr_banner"), "1");
  assert.equal(url.searchParams.get("utm_content"), "original-content");
  assert.equal(url.searchParams.get("utm_term"), "Roth conversion");
});

test("general website booking links preserve source without labeling every visit retirement", () => {
  const url = new URL(bookingUrl(calendar, { utm_source: "chatgpt.com" }, "home", "covarum-website"));
  assert.equal(url.searchParams.get("utm_source"), "chatgpt.com");
  assert.equal(url.searchParams.get("utm_campaign"), "covarum-website");
  assert.equal(url.searchParams.get("utm_content"), "home");
});
