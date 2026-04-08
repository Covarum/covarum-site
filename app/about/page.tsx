export default function AboutPage() {
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
        <div className="container" style={{ padding: "72px 0 40px" }}>
          <div className="section-heading" style={{ maxWidth: "980px" }}>
            <div className="eyebrow">About Covarum</div>

            <h1
              className="hero-title"
              style={{
                maxWidth: "980px",
                margin: "24px auto 0",
                textAlign: "center",
              }}
            >
              A more personal approach to protection and planning.
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
              Covarum was built on the belief that people deserve better
              guidance, clearer conversations,
              <br />
              and a partner who understands what is actually at stake.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSITION */}
      <section
        className="transition-section"
        style={{ paddingTop: "0" }}
      >
        <div className="container narrow">
          <p
            style={{
              marginTop: "16px",
              marginBottom: "40px",
            }}
          >
            Most people aren't lacking options. They're lacking clarity. Covarum
            exists to make those decisions easier to understand, more personal,
            and more thoughtful from the start.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "420px 1fr",
            gap: "56px",
            alignItems: "start",
          }}
        >
          {/* IMAGE */}
          <div className="image-frame">
            <img
              src="/tara-wallace-headshot_v2.webp"
              alt="Tara Wallace"
              className="headshot"
            />
          </div>

          {/* COPY */}
          <div style={{ maxWidth: "620px" }}>
            <p style={{ marginBottom: "18px" }}>
              My career has taken me through executive leadership roles and into
              financial services, but the moments that shaped me most did not
              come from work.
            </p>

            <p style={{ marginBottom: "18px" }}>
              They came from life forcing me to stop, reassess, and get clear on
              what actually matters.
            </p>

            <p style={{ marginBottom: "18px" }}>
              I have faced cancer twice, along with other major life events that
              changed the way I look at risk, planning, and what it means to
              protect the people and life you care about most.
            </p>

            <p style={{ marginBottom: "18px" }}>
              Experiences like that change you. They strip away the noise and
              sharpen your perspective. You start to see more clearly what needs
              protection, what deserves attention, and how important it is to
              have the right structure in place before life makes those
              decisions for you.
            </p>

            <p style={{ marginBottom: "24px" }}>
              Today, Covarum reflects that perspective. It is not built around
              product pushing or generic recommendations. It is built around
              clear guidance, thoughtful planning, and helping people make more
              confident decisions around their income, family, health, and
              future.
            </p>

            {/* SIGNATURE */}
            <div style={{ marginTop: "10px" }}>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Tara Wallace
              </div>

              <div
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  marginTop: "6px",
                }}
              >
                Founder, Covarum
              </div>
            </div>

            {/* SOFT CTA */}
            <div style={{ marginTop: "20px" }}>
              <a
                href="/contact"
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                }}
              >
                Explore opportunities with Covarum
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BELIEFS */}
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
                What we believe
              </div>

              <h3 style={{ marginTop: 0 }}>
                Better decisions start with better conversations.
              </h3>

              <p style={{ marginTop: "16px" }}>
                Most people do not need more products or more noise. They need
                clarity, context, and someone who can help them understand what
                actually fits their life.
              </p>

              <p>
                Covarum is built to bring that kind of clarity to decisions that
                are often delayed, overcomplicated, or left unclear for too
                long.
              </p>
            </div>

            <div className="service-card">
              <div className="panel-label" style={{ marginBottom: "14px" }}>
                How we work
              </div>

              <h3 style={{ marginTop: 0 }}>
                Personal, thoughtful, and built for real life.
              </h3>

              <p style={{ marginTop: "16px" }}>
                Every conversation starts with understanding where you are now,
                what matters most, and where better protection or structure may
                be needed.
              </p>

              <p>
                The goal is not to create overwhelm. It is to simplify the
                process so you can move forward with more confidence and less
                uncertainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
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
              You do not need to have everything figured out before you start.
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
