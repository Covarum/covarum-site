import { JOIN_COVARUM_URL } from "../ctaLinks";

export default function JoinCovarumPage() {
  return (
    <main className="site-shell">
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
            <a href="/solutions">Solutions</a>
            <a href="/about">About</a>
            <a href="/join-covarum" aria-current="page">
              Join Covarum
            </a>
            <a href="/contact">Contact</a>
          </nav>

          <a
            href={JOIN_COVARUM_URL}
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
        <div className="container" style={{ padding: "72px 0 28px" }}>
          <div className="section-heading" style={{ maxWidth: "980px" }}>
            <div className="eyebrow">Join Covarum</div>

            <h1
              className="hero-title"
              style={{
                maxWidth: "980px",
                margin: "24px auto 0",
                textAlign: "center",
              }}
            >
              Explore what it could look like to build with Covarum.
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
              If you are reaching out about becoming an agent, partnering with
              Covarum, or exploring a strategic opportunity, this is the best
              place to begin.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "16px" }}>
        <div className="container">
          <div className="split-panels">
            <div className="service-card">
              <div className="panel-label" style={{ marginBottom: "14px" }}>
                Who this is for
              </div>
              <h3 style={{ marginTop: 0 }}>
                Agents, partners, and people exploring what is possible.
              </h3>
              <p style={{ marginTop: "16px" }}>
                Covarum is built for thoughtful growth. If you are looking to
                connect about joining, partnering, or building something with
                shared standards and long-term intent, start here.
              </p>
              <p>
                The first conversation is meant to be clear and straightforward,
                so we can understand fit, timing, and what you are looking for.
              </p>
            </div>

            <div className="service-card">
              <div className="panel-label" style={{ marginBottom: "14px" }}>
                Best next step
              </div>
              <h3 style={{ marginTop: 0 }}>
                Schedule a conversation with Tara.
              </h3>
              <p style={{ marginTop: "16px" }}>
                Share a little context around your background, your interest,
                and what you would like to explore. We will use that
                conversation to determine the most useful next step.
              </p>
              <div className="service-card-action">
                <a
                  href={JOIN_COVARUM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                >
                  Connect with Covarum
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bottom">
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

            <h2>Let's explore whether there is a fit.</h2>

            <p>
              Start with a conversation and we can talk through alignment,
              opportunity, and what makes sense from here.
            </p>

            <div className="cta-action">
              <a
                href={JOIN_COVARUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Connect with Covarum
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
