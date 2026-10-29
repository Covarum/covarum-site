# Retirement with Clarity

The goal is qualified retirement conversations, with Roth conversion decisions as the starting point. Keep the positioning broader than New Jersey. Describe availability only where the professionals involved can actually provide the requested service.

Tara is the first contact at Covarum. Glenn is a collaborating financial advisor outside Covarum. Keep that relationship consistent across the site, profiles, and booking copy.

## What this change prepares

- A descriptive homepage title and description, plus canonical and sharing metadata for the two planning pages.
- An explicit OAI-SearchBot allowance and a link to the existing sitemap. A missing robots.txt was not itself a crawl block.
- Questions and answers about conversion amounts, timing, Medicare premiums, income limits, RMDs, and when converting may be a poor fit. IRS and Social Security links support the technical explanations.
- Structured organization, person, website, page, and FAQ information. The FAQ markup uses the same answer text visitors see. This does not guarantee citations or rich results.
- “Book a Retirement Conversation” buttons that use Tara’s existing Calendly event (currently a 20-minute introductory conversation). No promise of a free analysis or joint attendance.
- UTM values carried from the entry page through the current tab into the shared header and client-booking buttons. Retirement pages use a retirement campaign default; other pages use a general website campaign default. Existing inbound campaign values take priority. Recruiting links keep their separate destination.
- Only five marketing fields are retained in session storage. No new analytics service, CRM automation, or completed-booking measurement is configured.

The retirement discovery update was published on October 29, 2026. Desktop and 390-pixel phone-width browser checks passed for the retirement and Roth pages. The follow-up booking-link coverage change has passed the production build and eight attribution tests.

Google Search Console submission and full analytics setup still require signed-in account access. Do not report either as completed until their provider confirms it.

## Content to build next

| Prospect question | Destination | Useful follow-up |
| --- | --- | --- |
| How much should I convert to a Roth IRA? | /roth-conversions#conversion-amount | An original, clearly hypothetical comparison of no conversion, one conversion, and conversions over several years. |
| Can a Roth conversion increase Medicare premiums? | /roth-conversions#medicare-premiums | A plain-language explanation of income timing, with current SSA sources. |
| Should I convert before Social Security or RMDs? | /roth-conversions#conversion-timing | A worked timeline reviewed by the professional responsible for the analysis. |
| How will my savings become retirement income? | /retirement-planning | A guide connecting withdrawals, benefits, income needs, and survivor needs. |

Use Glenn’s verified videos as source material, with readable explanations on Covarum. Do not invent a transcript, client result, professional credential, review, or tax-savings claim.

## After deployment

1. Check the actual production responses: both pages, canonical tags, robots.txt, sitemap, JSON-LD, and desktop/mobile booking links. Confirm the host allows verified OAI-SearchBot traffic; a user-agent-only request does not verify the published IP ranges or firewall behavior.
2. Submit the existing sitemap in the verified Google Search Console and Bing Webmaster Tools properties. Request indexing for the two planning pages. This has not been submitted by this change.
3. Keep public Covarum and professional profiles consistent. Link relevant video descriptions and authorized event/partner pages to the appropriate Covarum page. Make external edits only where authorized.
4. Verify which UTM fields appear in Calendly’s booking records or exports. Add a completed-booking integration if needed. A calendar click is not a booked meeting.
5. Report visits referred by ChatGPT, visits to planning pages, booking clicks, completed bookings, and qualified meetings separately. Establish a baseline before setting conversion targets.

For a repeatable visibility check, record the exact prompt, date, search setting, cited URL, and any Covarum mention for the four questions above. A result in one conversation does not establish general visibility or a ranking.

## Validation

Run `node --test tests/booking-attribution.test.mjs` with Node 22.18+ or Node 24, followed by the normal Next.js production build. Inspect the rendered HTML to verify that each structured FAQ answer matches the visible answer and that Glenn is not marked as a Covarum employee.

## Sources

- OpenAI crawler controls: https://developers.openai.com/api/docs/bots
- IRS conversion and contribution rules: https://www.irs.gov/taxtopics/tc309
- IRS conversion guidance: https://www.irs.gov/publications/p590a
- Social Security income used for IRMAA: https://secure.ssa.gov/POMS.nsf/lnx/0601101010

## IndexNow

A public ownership-verification text file is hosted at the domain root for IndexNow URL submissions to Bing and other participating search engines. This does not submit URLs to Google or prove that any page has been indexed. Verify the live file before submitting and record the actual HTTP response.
