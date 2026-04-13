import type { Metadata } from "next";
import styles from "./page.module.css";

const bookingLink = "https://go.covarum.com/start-625573";

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

const examples = [
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

      <section className="hero">
        <div className="hero-glow" />
        <div className={`container hero-grid ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <div className="eyebrow">Mortgage Protection</div>
            <h1 className={`hero-title ${styles.heroTitle}`}>
              Protect the home. Protect the people who live in it.
            </h1>

            <div className={styles.heroBody}>
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

            <div className={styles.heroActions}>
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
                className="header-cta"
                style={{ opacity: 0.78 }}
              >
                Start the Conversation
              </a>
            </div>
          </div>

          <div className={styles.examplePanel}>
            <div className="panel">
              <div className="panel-inner">
                <div className="panel-label">A simple real-world example</div>
                <div className={styles.exampleText}>
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

      <section className={`section ${styles.introSection}`}>
        <div className="container">
          <div className="section-heading">
            <h2>The mortgage is usually the biggest bill in the house.</h2>
            <p className={styles.sectionCopy}>
              When income changes unexpectedly, the house payment does not care.
              Mortgage protection helps keep your family from having to choose
              between staying in the home and keeping everything else afloat.
            </p>
          </div>

          <div className={`services-grid ${styles.cardGrid}`}>
            {whyItMatters.map((item) => (
              <div key={item.title} className={`service-card ${styles.supportCard}`}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Real life examples</div>
            <h2>What this can actually look like</h2>
            <p className={styles.sectionCopy}>
              Not every family needs the same structure. The right solution depends
              on the mortgage, the income, the people relying on it, and what you
              want protected.
            </p>
          </div>

          <div className={styles.exampleStack}>
            {examples.map((example) => (
              <div key={example.title} className={`service-card ${styles.exampleCard}`}>
                <h3>{example.title}</h3>
                <p>{example.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.reviewGrid}>
            <div className={styles.reviewCopy}>
              <div className="eyebrow">What we review</div>
              <h2 className={styles.reviewTitle}>
                We look at the mortgage in context, not in isolation.
              </h2>
              <p className={styles.reviewLead}>
                Mortgage protection is not just about the loan amount. It is about
                what would actually happen to the household if one person did not
                walk through the door yesterday.
              </p>
            </div>

            <div className={styles.reviewSide}>
              <div className={`service-card ${styles.checkCard}`}>
                <div className={styles.checkList}>
                  {reviewItems.map((item) => (
                    <div key={item} className={styles.checkItem}>
                      <span className={styles.checkDot} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`panel ${styles.approachPanel}`}>
                <div className="panel-inner">
                  <div className="panel-label">The Covarum approach</div>
                  <div className={styles.approachText}>
                    <p>
                      Most people do not need more options thrown at them. They
                      need someone to help them understand what they already have,
                      what is missing, and what would actually protect the house if
                      life changed tomorrow.
                    </p>
                    <p className={styles.approachClose}>
                      The goal is not pressure. The goal is clarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading">
            <h2>Common questions</h2>
          </div>

          <div className={styles.faqStack}>
            {faqs.map((faq) => (
              <div key={faq.question} className={`service-card ${styles.faqCard}`}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bottom" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={`cta-box ${styles.ctaBox}`}>
            <div
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "12px",
              }}
            >
              Start here
            </div>

            <h2>
              You do not need a complicated answer. You need to know the house is
              protected.
            </h2>

            <p>
              Start with a conversation and get clear on what would actually happen
              to the mortgage if you did not walk through the door yesterday.
            </p>

            <div className={styles.ctaActions}>
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
                className="header-cta"
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
          <div>© 2026 Covarum</div>

          <div style={{ marginTop: "10px" }}>
            <a
              href="https://go.covarum.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "15px" }}
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
