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
    href: "/solutions/mortgage-protection",
    cta: "Explore mortgage protection planning",
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

const process = [
  {
    title: "Understand your full picture",
    description:
      "We start with where you are now, what matters most, and what needs attention first.",
  },
  {
    title: "Identify gaps and priorities",
    description:
      "We look at what is missing, what may be overlapping, and where better structure is needed.",
  },
  {
    title: "Build the right plan",
    description:
      "Recommendations are shaped around your life, not forced into a generic template.",
  },
  {
    title: "Adjust as life changes",
    description:
      "Protection should evolve with your income, family, goals, and responsibilities.",
  },
];

const audiences = [
  "Families planning for stability",
  "Professionals protecting income",
  "Business owners managing risk",
  "Individuals preparing for retirement",
];

export default function SolutionsPage() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="/" style={{ display: "inline-flex", alignItems: "center" }}>
            <img
              src="/SVG-02.svg"
              alt="Covarum"
              style={{
                height: "54px",
                width: "auto",
                display: "block",
              }}
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
            href="https://go.covarum.com/start-625573"
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
        <div className="container" style={{ padding: "88px 0 88px" }}>
          <div className="section-heading" style={{ maxWidth: "920px" }}>
            <div className="eyebrow">Solutions</div>

            <h1
              className="hero-title"
              style={{
                maxWidth: "980px",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
                marginTop: "24px",
              }}
            >
              Solutions built around real life, not one-size-fits-all advice.
            </h1>

            <p
              style={{
                maxWidth: "760px",
                margin: "24px auto 0",
                color: "rgba(255,255,255,0.72)",
                fontSize: "1.06rem",
                lineHeight: 1.9,
                textAlign: "center",
              }}
            >
              Covarum helps you protect your income, your family, your health,
              and your future through thoughtful, personalized planning.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "wrap",
                marginTop: "36px",
              }}
            >
              <a
                href="https://go.covarum.com/start-625573"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Start Here
              </a>

              <a href="/about" className="header-cta" style={{ opacity: 0.7 }}>
                Learn More About Covarum
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="transition-section">
        <div className="container narrow">
          <p>
            Most people aren’t lacking options. They’re lacking clarity. Every
            recommendation at Covarum is built around your actual needs, not a
            generic product pitch.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Explore our solutions</h2>
          </div>

          <div
            className="services-grid"
            style={{
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              marginTop: "48px",
            }}
          >
            {solutions.map((solution) => (
              <div key={solution.title} className="service-card">
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>

                <div
                  style={{
                    marginTop: "20px",
                    fontSize: "0.82rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(255,255,255,0.6)",
                    fontWeight: 600,
                  }}
                >
                  {solution.href ? (
                    <a href={solution.href}>{solution.cta}</a>
                  ) : (
                    "Individual page coming soon"
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            <div className="service-card">
              <div className="panel-label" style={{ marginBottom: "14px" }}>
                Who this is for
              </div>
              <h3 style={{ marginTop: 0 }}>
                Built for where you are - and where you’re going.
              </h3>

              <div
                style={{
                  marginTop: "20px",
                  display: "grid",
                  gap: "14px",
                }}
              >
                {audiences.map((audience) => (
                  <div
                    key={audience}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "rgba(255,255,255,0.78)",
                      lineHeight: 1.6,
                    }}
                  >
                    <span className="dot" />
                    <span>{audience}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-card">
              <div className="panel-label" style={{ marginBottom: "14px" }}>
                Why this approach works
              </div>
              <h3 style={{ marginTop: 0 }}>
                Clear strategy beats generic advice every time.
              </h3>

              <p style={{ marginTop: "16px" }}>
                The goal is not to overwhelm you with options. It is to help you
                understand what fits, what matters, and what deserves
                protection.
              </p>

              <p>
                Whether you’re planning ahead or solving for something more
                immediate, Covarum helps you make confident, informed decisions
                with less noise and more clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading">
            <h2>How Covarum works</h2>
          </div>

          <div
            className="services-grid"
            style={{
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              marginTop: "40px",
            }}
          >
            {process.map((step) => (
              <div key={step.title} className="service-card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

            <h2>You don’t need more options. You need the right structure.</h2>

            <p>
              Start with a conversation and get clear on what makes sense for
              you, your family, and everything you’re building.
            </p>

            <div className="cta-action">
              <a
                href="https://go.covarum.com/start-625573"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Start Here
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
