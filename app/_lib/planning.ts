import { INTRO_CALL_URL } from "../ctaLinks";
// Existing production Tara client calendar; kept distinct from recruiting.
// Do not introduce unverified intake-field mappings or new CRM automations.
export const clientInquiryUrl = INTRO_CALL_URL;
export const videoSources = {
  roth: { id: "NHlWC5sGiXc", url: "https://www.youtube.com/watch?v=NHlWC5sGiXc", title: "Roth Conversion Mistakes That Can Create Unexpected Costs", author: "Glenn Eckstut" },
  // Topic verified from the source title; intentionally not featured in this build.
  annuities: "https://www.youtube.com/watch?v=iq3tBCPSMfg",
  // Reference only. Never use Glenn's separate marketing funnel as a Covarum CTA.
  newerReference: "https://go.geinsuranceforlife.com/schedule",
};
