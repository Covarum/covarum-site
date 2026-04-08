import { JOIN_COVARUM_URL } from "../ctaLinks";

const audiences = [
  {
    title: "New Career Starters",
    paragraphs: [
      "You do not need to have it all figured out to start building something real.",
      "For the right person, Covarum can be a place to learn quickly, grow with intention, and build a career from the ground up with real momentum behind it.",
      "Ideal for people who are motivated, coachable, and ready to create something of their own.",
    ],
  },
  {
    title: "Career Changers",
    paragraphs: [
      "Some people are not starting over - they are finally moving toward something that fits.",
      "Covarum can be a strong fit for people who have built skills in another field and want more ownership, more flexibility, and a more direct connection between effort and opportunity.",
      "This is about bringing your experience with you and building from a stronger place.",
    ],
  },
  {
    title: "Existing Producers",
    paragraphs: [
      "If you are already producing, the question is not whether you can do it. It is whether your current environment still fits where you want to go.",
      "Covarum is designed for people who want a better home - more control, stronger economics, more flexibility, and more room to build something that actually belongs to them.",
    ],
  },
];

const pillars = [
  {
    title: "A Real Platform",
    text: "Access to structure, support, and a business model designed to help the right people build with intention.",
  },
  {
    title: "More Control",
    text: "More say in how you work, how you grow, and how you shape what comes next.",
  },
  {
    title: "Room to Build",
    text: "A path that can stay lean and focused or expand over time, depending on what you want to create.",
  },
  {
    title: "Better Alignment",
    text: "A model built around fit, momentum, and long-term opportunity - not just filling seats.",
  },
];

export default function JoinCovarumPage() {
  return (
    <main className="site-shell join-page">
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

      <section className="hero join-hero">
        <div className="hero-glow" />
        <div className="container join-hero-grid">
          <div className="join-hero-copy">
            <div className="eyebrow">Join Covarum</div>
            <h1 className="hero-title">Build Something That&apos;s Actually Yours</h1>
            <p className="join-hero-subheadline">
              Covarum is built for people who want more control over what they
              build, how they grow, and what their work can create over time.
            </p>
            <p className="join-hero-supporting">
              Whether you are just getting started, making a shift, or already
              building something of your own.
            </p>

            <div className="hero-actions join-hero-actions">
              <a
                href={JOIN_COVARUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Start the Conversation
              </a>

              <a href="#who-its-for" className="header-cta hero-secondary-cta">
                See Who It&apos;s For
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="who-its-for" className="section join-section join-audience-section">
        <div className="container">
          <div className="section-heading">
            <div className="panel-label">Who this is for</div>
            <h2>There Are Three Ways People Come Into Covarum</h2>
            <p className="join-section-intro">
              Different starting points. Same intention - to build something
              meaningful.
            </p>
          </div>

          <div className="join-audience-grid">
            {audiences.map((audience) => (
              <article key={audience.title} className="service-card join-audience-card">
                <h3>{audience.title}</h3>
                {audience.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>

          <div className="join-open-door">
            <h3>Not exactly one of these?</h3>
            <p>That&apos;s okay.</p>
            <p>The best conversations usually start that way.</p>
          </div>
        </div>
      </section>

      <section className="section join-section">
        <div className="container">
          <div className="section-heading">
            <h2>What Covarum Is Built to Support</h2>
            <p className="join-section-intro">
              Covarum is built for people who want to operate with more
              independence, without building alone.
            </p>
          </div>

          <div className="join-pillars-grid">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="service-card join-pillar-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="join-image-break">
        <div className="container">
          <div className="join-image-break-copy">
            <h2>
              Build something that gives you more than just income. More
              control. More freedom. A life that actually feels like yours.
            </h2>
          </div>
        </div>
      </section>

      <section className="section join-section">
        <div className="container join-narrow">
          <div className="section-heading join-heading-left">
            <h2>Let&apos;s Be Clear</h2>
          </div>

          <div className="join-copy-block">
            <p>This is not for everyone.</p>
            <p>
              Covarum is best for people who want to build, who are willing to
              learn, and who care about doing things the right way. It takes
              initiative, consistency, and a real desire to create something
              meaningful over time.
            </p>
            <p>The goal is not to build the biggest team.</p>
            <p>The goal is to build the right one.</p>
          </div>
        </div>
      </section>

      <section className="section join-section" style={{ paddingTop: 0 }}>
        <div className="container join-narrow">
          <div className="section-heading join-heading-left">
            <h2>You&apos;ll Work Directly With Me</h2>
          </div>

          <div className="join-copy-block">
            <p>
              I have worked inside large, structured environments. I understand
              what they can offer - and where they can start to limit people.
            </p>
            <p>
              Covarum is being built intentionally. For the right person, it
              offers more room to grow, more ownership over the process, and a
              more personal way to build something that matters.
            </p>
            <p>
              Sometimes that leads to a role. Sometimes something more flexible.
              Sometimes something we build together.
            </p>
            <p>
              If we connect, it will be a real conversation - direct,
              thoughtful, and focused on fit.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-bottom join-final-section">
        <div className="container">
          <div className="cta-box join-final-cta">
            <div className="panel-label">Start here</div>
            <h2>Let&apos;s See If There&apos;s Something Here</h2>
            <p>
              No pressure. No hard pitch. Just a real conversation about where
              you are, what you want to build, and whether Covarum is the right
              place to do it.
            </p>

            <div className="cta-action join-final-actions">
              <a
                href={JOIN_COVARUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Start the Conversation
              </a>
            </div>

            <p className="join-final-link">
              Prefer to reach out first? <a href="/contact">Contact us</a>
            </p>
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
