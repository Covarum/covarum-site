import type { Metadata } from "next";

const whyItMatters = [
  {
    title: "Helps protect the payment",
    body:
      "Coverage can be designed to help pay off the mortgage or create liquidity so the family can keep the home.",
  },
  {
    title: "Creates breathing room",
    body:
      "Instead of rushing into decisions, your family has more time to think clearly and move forward intentionally.",
  },
  {
    title: "Fits into a larger plan",
    body:
      "Mortgage protection is one part of the bigger picture alongside income protection, debt, children, and long-term goals.",
  },
];

const realLifeExamples = [
  {
    title: "Young family, new mortgage",
    body:
      "They just bought a home and have one child with another on the way. The priority is making sure the surviving spouse is not left with the full mortgage, childcare, and daily expenses all at once.",
  },
  {
    title: "Single homeowner",
    body:
      "There may not be children involved, but there may be parents, siblings, or a co-borrower who would otherwise be left sorting out the debt. Protection can help prevent the home from becoming a financial problem for someone else.",
  },
  {
    title: "Established family with coverage already in place",
    body:
      "They may already have life insurance, but it has never been reviewed against the actual mortgage, current income, and rising expenses. Small gaps can become big problems fast.",
  },
];

const reviewItems = [
  "Mortgage balance and monthly payment",
  "Income being protected",
  "Existing life insurance or work coverage",
  "Children, debts, and day-to-day obligations",
  "Whether the goal is payoff, flexibility, or a mix of both",
];

const faqs = [
  {
    question: "Is mortgage protection the same as life insurance?",
    answer:
      "Not exactly. Mortgage protection is the goal. Life insurance is often the tool used to help accomplish it. The right structure depends on whether the priority is paying off the mortgage, creating flexibility, or protecting more than just the house.",
  },
  {
    question: "Do I need coverage equal to my full mortgage?",
    answer:
      "Not always. Some families want the mortgage fully paid off. Others want enough coverage to create flexibility while also protecting income, childcare needs, and other obligations. It depends on the bigger picture.",
  },
  {
    question: "What if I already have coverage through work?",
    answer:
      "That may be a good start, but employer coverage is often limited and may not follow you if your job changes. It still makes sense to review whether it would actually protect the mortgage the way you think it would.",
  },
  {
    question: "Can this be reviewed even if I already have life insurance?",
    answer:
      "Yes. In many cases, the issue is not whether coverage exists. It is whether it is structured well and aligned with your actual responsibilities today.",
  },
];

const bookingLink = "https://go.covarum.com/start-625573";

export const metadata: Metadata = {
  title: "Mortgage Protection | Covarum",
  description:
    "Protect your home and your family with mortgage protection planning built around real life. Covarum helps you review what you have, what is missing, and what actually matters.",
};

export default function MortgageProtectionPage() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="header-brand">
            <img
              src="/SVG-01.svg"
              alt="Covarum"
              className="header-logo header-logo-subpage"
            />
          </a>

          <nav className="nav">
            <a href="/">Home</a>
            <a href="/solutions">Solutions</a>
            <a href="/about">About</a>
            <a href="/team">Team</a>
            <a href="/contact">Contact</a>
          </nav>

          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="header-cta"
          >
            Start the Conversation
          </a>
        </div>
      </header>

      <section className="hero mortgage-hero">
        <div className="hero-glow" />
        <div className="container hero-grid mortgage-hero-grid">
          <div>
            <div className="eyebrow">Mortgage Protection</div>
            <h1 className="hero-title mortgage-hero-title">
              Protect the home. Protect the people who live in it.
            </h1>
            <div className="hero-copy mortgage-hero-copy">
              <p>
                Mortgage protection helps make sure your family is not left trying
                to keep up with the house payment during one of the hardest moments
                of their life.
              </p>
              <p>
                This is not about selling fear. It is about creating options,
                reducing pressure, and helping your family stay in control if
                something happens to you.
              </p>
            </div>

            <div className="hero-actions mortgage-hero-actions">
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Review Your Coverage
              </a>

              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="header-cta hero-secondary-cta"
                style={{ opacity: 0.78 }}
              >
                Start the Conversation
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="panel mortgage-example-panel">
              <div className="panel-inner">
                <div className="panel-label">A simple real-world example</div>
                <div className="mortgage-example-copy">
                  <p>
                    A family with a $425,000 mortgage, two young kids, and one
                    primary income may be doing just fine right now.
                  </p>
                  <p>
                    But if that income disappears unexpectedly, the mortgage
                    payment does not pause.
                  </p>
                  <p>
                    Without the right protection, the surviving spouse may be left
                    trying to make major financial decisions while grieving.
                  </p>
                  <p>
                    With the right structure in place, the mortgage can be covered
                    - or enough liquidity can be created - so the family has time,
                    stability, and room to breathe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="transition-section mortgage-bridge">
        <div className="container narrow">
          <p>
            Good mortgage protection planning is not about dramatics. It is about
            making sure the house is not the thing that creates even more pressure
            when life changes unexpectedly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading mortgage-section-heading">
            <h2>The mortgage is usually the biggest bill in the house.</h2>
            <p className="mortgage-section-copy">
              When income changes unexpectedly, the house payment does not care.
              Mortgage protection helps keep your family from having to choose
              between staying in the home and keeping everything else afloat.
            </p>
          </div>

          <div className="services-grid mortgage-card-grid">
            {whyItMatters.map((item) => (
              <div key={item.title} className="service-card mortgage-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading mortgage-section-heading">
            <div className="eyebrow">Real life examples</div>
            <h2>What this can actually look like</h2>
            <p className="mortgage-section-copy">
              Not every family needs the same structure. The right solution depends
              on the mortgage, the income, the people relying on it, and what you
              want protected.
            </p>
          </div>

          <div className="mortgage-example-stack">
            {realLifeExamples.map((example) => (
              <div key={example.title} className="service-card mortgage-example-card">
                <div className="panel-label">{example.title}</div>
                <p>{example.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="mortgage-review-grid">
            <div className="mortgage-review-copy">
              <div className="eyebrow">What we review</div>
              <h2 className="mortgage-review-title">
                We look at the mortgage in context, not in isolation.
              </h2>
              <p className="mortgage-section-copy">
                Mortgage protection is not just about the loan amount. It is about
                what would actually happen to the household if one person did not
                walk through the door yesterday.
              </p>
            </div>

            <div className="mortgage-review-side">
              <div className="service-card mortgage-checklist-card">
                <div className="mortgage-checklist">
                  {reviewItems.map((item) => (
                    <div key={item} className="mortgage-check-item">
                      <span className="dot" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel mortgage-approach-panel">
                <div className="panel-inner">
                  <div className="panel-label">The Covarum approach</div>
                  <p>
                    Most people do not need more options thrown at them. They need
                    someone to help them understand what they already have, what is
                    missing, and what would actually protect the house if life
                    changed tomorrow.
                  </p>
                  <p className="mortgage-approach-close">
                    The goal is not pressure. The goal is clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading mortgage-section-heading">
            <h2>Common questions</h2>
          </div>

          <div className="mortgage-faq-list">
            {faqs.map((faq) => (
              <div key={faq.question} className="service-card mortgage-faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-bottom" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-box mortgage-cta-box">
            <div className="eyebrow mortgage-cta-eyebrow">Start here</div>
            <h2>
              You do not need a complicated answer. You need to know the house is
              protected.
            </h2>
            <p>
              Start with a conversation and get clear on what would actually happen
              to the mortgage if you did not walk through the door yesterday.
            </p>
            <div className="cta-action mortgage-cta-actions">
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Review Your Coverage
              </a>
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="header-cta hero-secondary-cta"
                style={{ opacity: 0.8 }}
              >
                Start the Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>Copyright 2026 Covarum</div>

          <div style={{ marginTop: "10px" }}>
            <a
              href="https://go.covarum.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>

            <a
              href="https://go.covarum.com/terms--conditions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
