import Image from "next/image";

export default function Page() {
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

  const rightPanelBullets = [
    "Protecting income and family",
    "Avoiding coverage gaps",
    "Making clear, confident decisions",
    "Built around your life, not a template",
    "Not overpaying or carrying coverage you don’t actually need",
  ];

  return (
    <main className="site-shell">
      {/* NAV */}
      <header className="nav">
        <div className="container nav-inner">
          <div className="logo">COVARUM</div>
          <nav className="nav-links">
            <a href="#solutions">Solutions</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="btn-primary">
            Start a Conversation
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge">
              CLEAR PROTECTION GUIDANCE FOR REAL LIFE DECISIONS
            </div>

            <h1>
              Life has a funny way of making you think you’re on track… right
              before it tells you to “recalculate.”
            </h1>

            <p className="hero-sub">
              At Covarum, we don’t just plan for where you’re going - we help
              protect you through the detours. Because the unexpected isn’t the
              exception. It’s part of the plan.
            </p>
          </div>

          <div className="card">
            <h4>WHAT THIS LOOKS LIKE</h4>
            <ul>
              {rightPanelBullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="solutions" className="section">
        <div className="container">
          <div className="section-header">
            <h2>How We Help</h2>
            <p>
              Clear, structured guidance so you know exactly where you stand and
              what to do next.
            </p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container about-grid">
          <div className="image-frame">
            <Image
              src="/headshot.jpg"
              alt="Tara Wallace"
              width={700}
              height={900}
              className="headshot"
              priority
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
              You get clear on what actually matters, what needs to be protected,
              and how important it is to have the right plans in place before
              life forces those decisions on you.
            </p>

            <p>
              Today, I work with people who are building something - their
              income, their family, their future - helping them bring clarity
              and control to the parts of their financial life that are easy to
              put off.
            </p>

            <p>
              Because the truth is - most people aren’t lacking options. They’re
              lacking clarity. And that’s where I come in.
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

      {/* CTA */}
      <section id="contact" className="section cta">
        <div className="container">
          <h2>
            You don’t need a perfect plan. You just need the right one - to
            protect what matters most.
          </h2>
          <p>
            For you, your family, and everything you’re building. We’ll simplify
            the noise, uncover what’s missing, and make sure you’re covered -
            wherever life takes you next.
          </p>

          <div className="cta-buttons">
            <a href="#" className="btn-primary">
              Start Here
            </a>
            <a href="#" className="btn-secondary">
              Book a Conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
