const solutions = [
  {
    title: "Life Insurance",
    description:
      "Protect the people who depend on you and create a plan that fits your real life.",
  },
  {
    title: "Mortgage Protection",
    description:
      "Help protect your home and your family's stability if something happens to you.",
  },
  {
    title: "Health Insurance",
    description:
      "Find coverage that works when you need it, without unnecessary confusion.",
  },
  {
    title: "Disability Insurance",
    description:
      "Protect your income, not just your health, with the right coverage in place.",
  },
  {
    title: "Medicare",
    description:
      "Navigate your options with clarity and avoid costly gaps or surprises.",
  },
  {
    title: "Long-Term Care",
    description:
      "Plan ahead so future care decisions stay in your control, not someone else's.",
  },
  {
    title: "Annuities",
    description:
      "Create more stability with structured strategies designed for long-term income.",
  },
  {
    title: "Retirement Planning",
    description:
      "Build a thoughtful strategy around the life you want to protect and enjoy.",
  },
  {
    title: "Business Solutions",
    description:
      "Put the right protection in place for your business, your partners, and your people.",
  },
];

const pillars = [
  {
    title: "Transparency",
    description:
      "See exactly what you have, what's missing, and what actually matters - without the noise.",
  },
  {
    title: "Protection",
    description:
      "Design the right structure to protect your income, your family, and everything you're building.",
  },
  {
    title: "Control",
    description:
      "Feel in control of your decisions, your coverage, and the path forward - with nothing left unclear.",
  },
];

const audiences = [
  "Families planning for stability",
  "Professionals protecting income",
  "Business owners managing risk",
  "Individuals preparing for retirement",
];

const reasons = [
  {
    title: "Personalized guidance",
    description:
      "Recommendations are built around your life, not pushed from a generic playbook.",
  },
  {
    title: "Clear conversations",
    description:
      "We make complex decisions easier to understand so you can move forward with confidence.",
  },
  {
    title: "Long-term thinking",
    description:
      "The goal is not a quick fix. It is thoughtful protection that evolves as life changes.",
  },
];

export default function Page() {
  return (
    <main className="site-shell">
      {/* HEADER WITH LOGO */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="header-brand header-brand-home">
            <img
              src="/Transparent-01.png"
              alt="Covarum"
              className="header-logo header-logo-home"
            />
          </a>

          <nav className="nav">
            <a href="/">Home</a>
            <a href="/solutions">Solutions</a>
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

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />

        <div className="container hero-grid">
          <div className="hero-left">
            <div className="eyebrow">
              Protection and planning for real life.
            </div>

            <h1 className="hero-title">
              You do not need more options. You need clarity.
            </h1>

            <div className="hero-copy" style={{ maxWidth: "560px" }}>
              <p>
                Life has a funny way of making you think you're on track... right
                before it tells you to "recalculate."
              </p>
              <p>
                At Covarum, we don't just plan for where you're going - we help
                protect you through the detours. After all, the unexpected isn't
                the exception. It's part of the plan.
              </p>
            </div>

            <div
              className="hero-actions"
              style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
            >
              <a
                href="https://go.covarum.com/start-625573"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Start Here
              </a>

              <a
                href="/solutions"
                className="header-cta hero-secondary-cta hero-secondary-desktop"
                style={{ opacity: 0.7 }}
              >
                Explore Solutions
              </a>

              <a
                href="/about"
                className="hero-secondary-mobile"
              >
                Learn More About Covarum
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="panel">
              <div className="panel-inner">
                <div className="panel-label">How we work</div>

                <div
                  style={{
                    display: "grid",
                    gap: "16px",
                    marginTop: "12px",
                  }}
                >
                  {pillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      style={{
                        borderRadius: "18px",
                        border: "1px solid rgba(255,255,255,0.08)",
                        background: "rgba(255,255,255,0.04)",
                        padding: "18px",
                      }}
                    >
                      <h3
                        style={{
                          margin: 0,
                          fontSize: "0.85rem",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.85)",
                        }}
                      >
                        {pillar.title}
                      </h3>

                      <p
                        style={{
                          margin: "10px 0 0",
                          fontSize: "0.95rem",
                          lineHeight: 1.7,
                          color: "rgba(255,255,255,0.65)",
                        }}
                      >
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="section section-bottom">
        <div className="container">
          <div className="cta-box">
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
              You don't need a perfect plan. You just need the right one.
            </h2>

            <p>
              Start with a conversation and get clear on what makes sense for
              you, your family, and everything you're building.
            </p>

            <div className="cta-action">
              <a
                href="https://go.covarum.com/start-625573"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Start the Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
