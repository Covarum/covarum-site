import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life Insurance Planning | Covarum",
  description:
    "Clear, strategic life insurance planning for families, professionals, and business owners. Protect what matters with Covarum.",
};

const quickTake = [
  "Protect income, family, and obligations",
  "Cover mortgage, debt, and future costs",
  "Create stability while you're building",
  "Add long-term strategy when it makes sense",
];

const protectionPoints = [
  "Who depends on you",
  "What would need to continue",
  "What could become a burden",
];

const whyCoverage = [
  {
    title: "Income protection",
    description: "Replace income so your household can continue.",
  },
  {
    title: "Debt + obligations",
    description: "Mortgage, loans, future costs don't disappear.",
  },
  {
    title: "Family stability",
    description: "Give your family time, space, and options.",
  },
  {
    title: "Business continuity",
    description: "Protect partners, employees, and agreements.",
  },
  {
    title: "Long-term strategy",
    description: "In the right cases, support legacy and planning.",
  },
];

const commonMistakes = [
  "They rely only on work coverage",
  "They guess on coverage amount",
  "They buy based on price, not strategy",
  "They never revisit it as life changes",
];

const termFit = ["Families", "Income protection", "Mortgage coverage"];
const permanentFit = ["Long-term planning", "Business owners", "Legacy goals"];
const childPolicyFit = [
  "Lock in insurability",
  "Create long-term flexibility",
  "Provide optionality later in life",
];
const layeredFit = ["Term for now", "Permanent for long-term"];

const examplePoints = [
  "$1.5M term coverage for income protection",
  "Smaller permanent policy for long-term flexibility",
  "Coverage structured so the surviving spouse has time, not pressure",
];

const processSteps = [
  {
    step: "1. Understand your situation",
    detail: "Family, income, debt, goals",
  },
  {
    step: "2. Define the real risk",
    detail: "What actually needs protection",
  },
  {
    step: "3. Design the structure",
    detail: "Term, permanent, or both",
  },
  {
    step: "4. Build intentionally",
    detail: "Coverage, ownership, beneficiaries",
  },
  {
    step: "5. Revisit over time",
    detail: "Life changes, so should your plan",
  },
];

const faqItems = [
  {
    question: "How much do I need?",
    answer:
      "Enough to replace income, cover debt, and protect your family's lifestyle.",
  },
  {
    question: "Term or permanent?",
    answer: "Depends on what you're trying to solve.",
  },
  {
    question: "Work policy enough?",
    answer: "Usually not. It's limited and not portable.",
  },
  {
    question: "Can it help with estate/business planning?",
    answer: "Yes, in the right structure.",
  },
];

export default function LifeInsurancePage() {
  return (
    <main className="site-shell insurance-page">
      <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="header-brand header-brand-site">
            <img
              src="/optimized-logo.png"
              alt="Covarum"
              className="header-logo header-logo-site"
            />
          </a>

          <nav className="nav">
            <a href="/">Home</a>
            <a href="/solutions" aria-current="page">
              Solutions
            </a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          <a
            href="https://go.covarum.com/start-625573"
            target="_blank"
            rel="noopener noreferrer"
            className="header-cta"
          >
            Start the Conversation
          </a>
        </div>
      </header>

      <section className="hero solution-hero">
        <div className="hero-glow" />
        <div className="container insurance-hero-grid">
          <div className="insurance-hero-copy">
            <div className="eyebrow">Life Insurance Planning</div>
            <h1 className="hero-title">
              What happens if you didn't walk through the door yesterday?
            </h1>
            <p className="insurance-lead">
              It's a hard question. But it's the right place to start.
            </p>
            <p className="hero-copy insurance-hero-body">
              Life insurance is about making sure your family, your plans, and
              everything you've built can continue without disruption.
            </p>

            <div className="hero-actions insurance-hero-actions">
              <a
                href="https://go.covarum.com/start-625573"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Schedule Your Complimentary Conversation
              </a>

              <a
                href="https://go.covarum.com/start-625573"
                target="_blank"
                rel="noopener noreferrer"
                className="header-cta hero-secondary-cta"
              >
                Review Your Coverage
              </a>
            </div>

            <p className="insurance-trust-line">
              Trusted by families, professionals, and business owners navigating
              complex financial decisions.
            </p>
          </div>

          <aside className="panel insurance-hero-panel">
            <div className="panel-inner">
              <div className="panel-label">Quick Take (60 seconds)</div>
              <div className="insurance-list">
                {quickTake.map((item) => (
                  <div key={item} className="insurance-list-item">
                    <span className="dot" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="insurance-emphasis">
                If someone depends on you, or your income supports the life
                you're building, you likely need coverage in place.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container insurance-section-stack">
          <div className="section-heading insurance-heading-left">
            <div className="panel-label">What are you protecting?</div>
            <h2>Start with what would need to continue.</h2>
            <p className="insurance-section-intro">
              Before policies, we look at:
            </p>
          </div>

          <div className="service-card insurance-card-slim">
            <div className="insurance-list insurance-list-large">
              {protectionPoints.map((item) => (
                <div key={item} className="insurance-list-item">
                  <span className="dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="insurance-closing-line">
              That answer drives everything else.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="panel-label">Why people get coverage</div>
            <h2>Most life insurance decisions are really about continuity.</h2>
          </div>

          <div className="services-grid insurance-services-grid">
            {whyCoverage.map((item) => (
              <article key={item.title} className="service-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container insurance-two-column">
          <div className="service-card">
            <div className="panel-label">What most people get wrong</div>
            <div className="insurance-list">
              {commonMistakes.map((item) => (
                <div key={item} className="insurance-list-item">
                  <span className="dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="insurance-closing-line">
              The result: coverage that looks fine on paper, but fails when it
              matters.
            </p>
          </div>

          <div className="service-card">
            <div className="panel-label">Already have coverage?</div>
            <h3>Good. Most people do.</h3>
            <p>Does it still fit your life today?</p>
            <p>
              We'll review it before recommending anything new.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="panel-label">Your options (simplified)</div>
            <h2>Clear structure matters more than product overload.</h2>
          </div>

          <div className="services-grid services-grid-two insurance-options-grid">
            <article className="service-card">
              <div className="panel-label">Term Life</div>
              <p className="insurance-card-lead">Coverage for a set period.</p>
              <div className="insurance-fit-label">Best for:</div>
              <div className="insurance-list">
                {termFit.map((item) => (
                  <div key={item} className="insurance-list-item">
                    <span className="dot" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="service-card">
              <div className="panel-label">Permanent Life</div>
              <p className="insurance-card-lead">Coverage that stays in place.</p>
              <div className="insurance-fit-label">Best for:</div>
              <div className="insurance-list">
                {permanentFit.map((item) => (
                  <div key={item} className="insurance-list-item">
                    <span className="dot" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="service-card">
              <div className="panel-label">Whole Life for Children</div>
              <p>This is not about planning for loss.</p>
              <p>It is about creating a foundation early.</p>
              <p className="insurance-fit-label">A well-structured policy can:</p>
              <div className="insurance-list">
                {childPolicyFit.map((item) => (
                  <div key={item} className="insurance-list-item">
                    <span className="dot" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p>
                For some families, it becomes a quiet but powerful way to create
                flexibility, stability, and long-term options that grow alongside
                your child.
              </p>
            </article>

            <article className="service-card">
              <div className="panel-label">Layered Approach</div>
              <p>Many people use both.</p>
              <div className="insurance-list">
                {layeredFit.map((item) => (
                  <div key={item} className="insurance-list-item">
                    <span className="dot" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container insurance-two-column">
          <article className="cta-box insurance-example-box">
            <div className="panel-label">Real example (how this actually looks)</div>
            <p className="insurance-section-intro">
              A family with two young kids and a mortgage:
            </p>
            <div className="insurance-list insurance-list-left">
              {examplePoints.map((item) => (
                <div key={item} className="insurance-list-item">
                  <span className="dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="insurance-closing-line">
              This is what good planning looks like - simple, intentional, and
              built around real life.
            </p>
          </article>

          <article className="service-card">
            <div className="panel-label">Need a second opinion?</div>
            <h3>You do not need to start from scratch to make a smart decision.</h3>
            <p>
              If you already have a policy through work, a prior advisor, or
              something you put in place years ago, we can help you evaluate
              whether it still fits before you make any changes.
            </p>
            <p>
              Sometimes the right answer is to keep what you have. Sometimes it
              is to supplement it. Sometimes it is to restructure it entirely.
            </p>
            <p>The value is in knowing the difference.</p>
            <div className="insurance-action-row">
              <a
                href="https://go.covarum.com/start-625573"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Request a Coverage Review
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="panel-label">How we work</div>
            <h2>We keep the process clear, strategic, and grounded in real life.</h2>
          </div>

          <div className="services-grid insurance-steps-grid">
            {processSteps.map((item) => (
              <article key={item.step} className="service-card insurance-step-card">
                <div className="insurance-step-number">{item.step}</div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="panel-label">FAQ (quick answers)</div>
            <h2>Direct answers to the questions that usually matter most.</h2>
          </div>

          <div className="services-grid services-grid-two insurance-faq-grid">
            {faqItems.map((item) => (
              <article key={item.question} className="service-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bottom">
        <div className="container insurance-closing-stack">
          <div className="cta-box">
            <div className="panel-label">Closing</div>
            <p className="insurance-closing-copy">
              If something happened tomorrow, your family would have questions.
            </p>
            <p className="insurance-closing-copy">
              This makes sure money isn't one of them.
            </p>
            <p className="insurance-closing-copy">
              The best time to structure this correctly is before you need it.
            </p>
            <div className="cta-action">
              <a
                href="https://go.covarum.com/start-625573"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Schedule Your Complimentary Conversation
              </a>
            </div>
          </div>

          <div className="service-card insurance-contact-block">
            <div className="panel-label">Contact</div>
            <h2>Let's make this simple.</h2>
            <p>
              Start with a conversation. We'll help you understand what matters
              and what actually makes sense.
            </p>
            <div className="insurance-action-row">
              <a
                href="https://go.covarum.com/start-625573"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Connect With Covarum
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>Copyright 2026 Covarum</div>

          <div style={{ marginTop: "10px" }}>
            <a href="https://go.covarum.com/privacy-policy">Privacy Policy</a>
            <a href="https://go.covarum.com/terms--conditions">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
