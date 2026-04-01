const services = [
  {
    title: "Transparency",
    description:
      "See exactly what you have, what’s missing, and what actually matters - without the noise.",
  },
  {
    title: "Protection",
    description:
      "Design the right structure to protect your income, your family, and everything you’re building.",
  },
  {
    title: "Control",
    description:
      "Feel in control of your decisions, your coverage, and the path forward - with nothing left unclear.",
  },
];

const pillars = [
  "Clarity over complexity",
  "Protection-first thinking",
  "No pressure guidance",
  "Built specifically for you",
];

const rightPanelBullets = [
  "Protecting income and family",
  "Avoiding coverage gaps",
  "Making clear, confident decisions",
  "Built around your life, not a template",
  "Not overpaying or carrying coverage you don’t actually need",
];

export default function Page() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <div>
            <div className="brand">COVARUM</div>
            <div className="brand-sub">Protection Solutions</div>
          </div>

          <nav className="nav">
            <a href="#services">Solutions</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          href="https://www.covarum.com/start-your-plan"
  Start Your Plan
</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-left">
            <div className="eyebrow">
              Clear protection guidance for real life decisions
            </div>

            <h1 className="hero-title">
              Life has a funny way of making you think you’re on track… right
              before it tells you to “recalculate.”
            </h1>

            <p className="hero-copy">
              At Covarum, we don’t just plan for where you’re going - we help
              protect you through the detours. Because the unexpected isn’t the
              exception. It’s part of the plan.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-button">
                Start Your Plan
              </a>
            </div>

            <div className="pillar-grid">
              {pillars.map((item) => (
                <div key={item} className="pillar-card">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-right">
            <div className="panel">
              <div className="panel-inner">
                <div className="panel-label">What this looks like</div>

                <div className="panel-list">
                  {rightPanelBullets.map((line) => (
                    <div key={line} className="panel-item">
                      <span className="dot" />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="transition-section">
        <div className="container narrow">
          <p>
            Most people don’t think about protection and planning until
            something forces them to. I’ve lived through enough to know it’s
            better to be prepared before that moment comes.
          </p>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-grid">
          <div className="image-frame">
            <img
              src="/headshot.jpg"
              alt="Tara Wallace"
              className="headshot"
            />
          </div>

          <div className="about-copy">
            <p>
              I’m a single mom of two, I’ve built businesses, led at the
              executive level in tech, and I’ve navigated some very real life
              moments - including going through cancer twice.
            </p>

            <p>
              Experiences like that have a way of sharpening your perspective.
              You get clear on what actually matters, what needs to be
              protected, and how important it is to have the right plans in
              place before life forces those decisions on you.
            </p>

            <p>
              Today, I work with people who are building something - their
              income, their family, their future - helping them bring clarity
              and control to the parts of their financial life that are easy to
              put off.
            </p>

            <p>
              Because the truth is - most people aren’t lacking options.
              They’re lacking clarity. And that’s where I come in.
            </p>

            <p>
              Outside of work, you’ll usually find me on a golf course or a
              pickleball court - and now that I’ve officially been relieved of
              at least half my chauffeur duties, I’m still figuring out what to
              do with all that “extra” time… usually a great glass of wine, a
              good laugh, and the kind of company that makes everything feel a
              little lighter.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Confidence comes from clarity.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-bottom">
        <div className="container">
          <div className="cta-box">
            <h2>
              You don’t need a perfect plan. You just need the right one - to
              protect what matters most.
            </h2>

            <p>
              For you, your family, and everything you’re building. We’ll
              simplify the noise, uncover what’s missing, and make sure you’re
              covered - wherever life takes you next.
            </p>

            <div className="cta-action">
              <a href="#contact" className="primary-button">
                Start Your Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">© 2026 Covarum</div>
      </footer>
    </main>
  );
}
