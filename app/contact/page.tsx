export default function ContactPage() {
  return (
    <main className="site-shell">
      {/* HEADER */}
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
        <div className="container" style={{ padding: "72px 0 28px" }}>
          <div className="section-heading" style={{ maxWidth: "980px" }}>
            <div className="eyebrow">Contact Covarum</div>

            <h1
              className="hero-title"
              style={{
                maxWidth: "980px",
                margin: "24px auto 0",
                textAlign: "center",
              }}
            >
              Start the conversation.
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
              Whether you are exploring coverage, looking for clarity, or
              interested in connecting about opportunities with Covarum, this is
              the best place to start.
            </p>
          </div>
        </div>
      </section>

      {/* BRIDGE LINE */}
      <section style={{ marginTop: "-12px", marginBottom: "10px" }}>
        <div className="container narrow">
          <p
            style={{
              margin: "0 auto",
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.6)",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            No pressure. No unnecessary complexity. Just a clear next step.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT OPTIONS */}
      <section style={{ paddingTop: "16px", paddingBottom: "48px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "24px",
              alignItems: "stretch",
            }}
          >
            <div
              className="service-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "100%",
              }}
            >
              <div>
                <div className="panel-label" style={{ marginBottom: "14px" }}>
                  Best next step
                </div>

                <h3 style={{ marginTop: 0 }}>
                  Ready to talk through what makes sense for you?
                </h3>

                <p style={{ marginTop: "16px" }}>
                  The fastest way to get started is through a guided
                  conversation. If you are looking for help around protection,
                  planning, or next steps, begin here.
                </p>
              </div>

              <div style={{ marginTop: "28px" }}>
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

            <div
              className="service-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "100%",
              }}
            >
              <div>
                <div className="panel-label" style={{ marginBottom: "14px" }}>
                  Other inquiries
                </div>

                <h3 style={{ marginTop: 0 }}>
                  Agent, partner, or strategic opportunity?
                </h3>

                <p style={{ marginTop: "16px" }}>
                  If you are reaching out about potential collaboration,
                  partnering, or opportunities with Covarum, start the
                  conversation here and include a few details about what you are
                  exploring.
                </p>
              </div>

              <div style={{ marginTop: "28px" }}>
                <a
                  href="https://go.covarum.com/start-625573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                  style={{ opacity: 0.88 }}
                >
                  Connect with Covarum
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section style={{ paddingTop: "0", paddingBottom: "56px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "24px",
            }}
          >
            <div className="service-card">
              <div className="panel-label" style={{ marginBottom: "14px" }}>
                Step 1
              </div>

              <h3 style={{ marginTop: 0 }}>Start with a conversation</h3>

              <p style={{ marginTop: "16px" }}>
                Share what you are trying to solve for, where you have
                questions, or what has been left unclear.
              </p>
            </div>

            <div className="service-card">
              <div className="panel-label" style={{ marginBottom: "14px" }}>
                Step 2
              </div>

              <h3 style={{ marginTop: 0 }}>Get clarity on your options</h3>

              <p style={{ marginTop: "16px" }}>
                We look at what fits, what does not, and where more structure or
                protection may be needed.
              </p>
            </div>

            <div className="service-card">
              <div className="panel-label" style={{ marginBottom: "14px" }}>
                Step 3
              </div>

              <h3 style={{ marginTop: 0 }}>Move forward with confidence</h3>

              <p style={{ marginTop: "16px" }}>
                The goal is not more noise. It is a clearer path forward built
                around your real life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ paddingTop: "0", paddingBottom: "72px" }}>
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
              You do not need to have everything figured out before you reach
              out.
            </h2>

            <p>
              Start with a conversation and get clear on what makes sense for
              you, your family, and everything you are building.
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
