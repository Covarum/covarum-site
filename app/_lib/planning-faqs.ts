export type PlanningFaq = {
  id: string;
  question: string;
  answer: string;
  source?: { label: string; url: string };
};

export const rothFaqs: PlanningFaq[] = [
  {
    id: "conversion-amount",
    question: "How much should I convert to a Roth IRA?",
    answer: "There is no single amount that works for everyone. Compare the tax cost of converting now with the income you expect later, including Social Security and required withdrawals. Consider Medicare premiums, how you will pay the taxes, and whether spreading conversions across several years makes sense. A conversion does not automatically reduce lifetime taxes.",
  },
  {
    id: "conversion-timing",
    question: "Should I consider a Roth conversion before Social Security or RMDs begin?",
    answer: "Years with lower taxable income can be worth examining, including the period after work slows down and before other retirement income begins. That is a reason to compare scenarios, rather than a reason to automatically convert. Your spending needs, future income, and current tax cost still matter.",
  },
  {
    id: "medicare-premiums",
    question: "Can a Roth conversion increase my Medicare premiums?",
    answer: "Yes. The taxable portion of a conversion can increase the income used to determine Medicare Part B and Part D income-related surcharges, known as IRMAA. Social Security generally uses tax information from two years earlier. Include that possible cost when comparing conversion amounts and years.",
    source: { label: "Social Security: income used for IRMAA", url: "https://secure.ssa.gov/POMS.nsf/lnx/0601101010" },
  },
  {
    id: "partial-conversion",
    question: "Do I need to convert my entire IRA?",
    answer: "No. You can convert part or all of a traditional IRA to a Roth IRA. The untaxed portion converted is generally included in taxable income for that year. The amount and timing should be considered with your tax professional.",
    source: { label: "IRS: converting a traditional IRA", url: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras" },
  },
  {
    id: "conversion-income-limits",
    question: "Can I convert if I earn too much to contribute to a Roth IRA?",
    answer: "A Roth conversion and a regular Roth IRA contribution have different rules. The income limits for regular Roth IRA contributions do not prevent a traditional-to-Roth IRA conversion. A conversion can still create a tax bill, so eligibility alone does not tell you whether it makes sense.",
    source: { label: "IRS: Roth IRA contributions and conversions", url: "https://www.irs.gov/taxtopics/tc309" },
  },
  {
    id: "required-distributions",
    question: "Can I convert my required minimum distribution to a Roth IRA?",
    answer: "No. An amount required to be distributed from your traditional IRA for the year cannot be converted to a Roth IRA. If an RMD is due, satisfy it before converting other eligible IRA funds, and coordinate the amounts with your tax professional and account custodian.",
    source: { label: "IRS Publication 590-A: conversions", url: "https://www.irs.gov/publications/p590a" },
  },
  {
    id: "when-conversion-may-not-fit",
    question: "When might a Roth conversion be a poor fit?",
    answer: "A conversion may be less attractive if its current tax cost is high relative to the taxes you expect later, if you need the money soon, or if paying the tax bill strains your cash reserves. Income-related costs and Roth withdrawal rules also deserve a closer look. Compare converting with leaving the money where it is.",
  },
  {
    id: "getting-help",
    question: "How do I start a Roth conversion conversation with Covarum?",
    answer: "Book a conversation with Tara Wallace at Covarum. Tara works with collaborating financial advisor Glenn Eckstut on retirement-planning opportunities, including Roth-conversion analysis. The first step is to discuss your question and what needs a closer look. Before proceeding, clarify who will provide the work, its scope, and any applicable fees.",
  },
];

export const retirementFaqs: PlanningFaq[] = [
  {
    id: "when-to-start",
    question: "When should I start planning for retirement income?",
    answer: "Start when you are weighing a retirement date, wondering how your savings will cover spending, or facing a decision about income or withdrawals. You can also revisit the plan after retiring. A focused question is enough to begin the conversation.",
  },
  {
    id: "retirement-topics",
    question: "What retirement decisions can I discuss with Covarum?",
    answer: "Start with retirement income, Roth conversions, withdrawal decisions, Social Security and Medicare considerations, or family and survivor needs. Tara Wallace works with financial advisor Glenn Eckstut on retirement-planning opportunities. The appropriate next step depends on your circumstances and the scope of work you agree to.",
  },
  {
    id: "roth-in-retirement",
    question: "How do Roth conversions fit into retirement planning?",
    answer: "A conversion changes when you pay tax on eligible retirement savings. Looking at it alongside spending, other income, future withdrawals, and family needs helps put the decision in context. Converting is one possibility to examine; leaving the money where it is belongs in the comparison too.",
  },
  {
    id: "first-retirement-conversation",
    question: "Who will I speak with first, and what happens next?",
    answer: "Start with Tara at Covarum to discuss your questions and priorities. From there, identify whether a focused question, a Roth-conversion analysis, or a broader retirement conversation is the appropriate next step. Clarify who will provide the work, what it includes, and any applicable fees before moving forward.",
  },
];
