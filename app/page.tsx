import BookingLink from "./_components/booking-link";
import { INTRO_CALL_URL } from "./ctaLinks";
import SiteHeader from "./_components/site-header";
import { pageMetadata } from "./_lib/search";

export const metadata = pageMetadata(
  "Life Insurance, Annuities & Retirement Planning | Covarum",
  "Clear guidance on life insurance, annuities, retirement income and Roth conversion decisions. Start with Tara Wallace at Covarum.",
  "/",
);

const pillars = [
  { title: "Transparency", description: "See exactly what you have, what's missing, and what actually matters - without the noise." },
  { title: "Protection", description: "Design the right structure to protect your income, your family, and everything you're building." },
  { title: "Control", description: "Understand your decisions, your coverage, and the path forward." },
];

const priorities = [
  {
    title: "Life insurance that starts with your life.",
    description: "Protect the people who depend on you. Explore coverage around your responsibilities, your budget and what you already have in place.",
    href: "/solutions/life-insurance",
    label: "Explore Life Insurance",
  },
  {
    title: "Annuities, without the guesswork.",
    description: "Understand whether an annuity belongs in your retirement income plan. Get clear on the benefits, costs and access to your money before making a commitment.",
    href: "/solutions/annuities",
    label: "Explore Annuities",
  },
];

export default function Page() {
  return (
    <main className="site-shell">
      <SiteHeader current="/" home />
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-left">
            <div className="eyebrow">Life insurance. Annuities. Retirement planning.</div>
            <h1 className="hero-title">You do not need more options. You need clarity.</h1>
            <div className="hero-copy" style={{ maxWidth: "560px" }}>
              <p>Life has a funny way of making you think you&apos;re on track... right before it tells you to &quot;recalculate.&quot;</p>
              <p>At Covarum, we don&apos;t just plan for where you&apos;re going - we help protect you through the detours. After all, the unexpected isn&apos;t the exception. It&apos;s part of the plan.</p>
              <p>Start with a clearer picture of your life insurance, annuity options and retirement income priorities.</p>
            </div>
            <div className="hero-actions" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <BookingLink base={INTRO_CALL_URL} target="_blank" rel="noopener noreferrer" className="primary-button">Start Here</BookingLink>
              <a href="/solutions" className="header-cta hero-secondary-cta" style={{ opacity: 0.7 }}>Explore Solutions</a>
            </div>
          </div>
          <div className="hero-right"><div className="panel"><div className="panel-inner">
            <div className="panel-label">How we work</div>
            <div style={{ display: "grid", gap: "16px", marginTop: "12px" }}>
              {pillars.map((pillar) => (
                <div key={pillar.title} style={{ borderRadius: "18px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", padding: "18px" }}>
                  <h3 style={{ margin: 0, fontSize: "0.85rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)" }}>{pillar.title}</h3>
                  <p style={{ margin: "10px 0 0", fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(255,255,255,0.65)" }}>{pillar.description}</p>
                </div>
              ))}
            </div>
          </div></div></div>
        </div>
      </section>
      <section className="section" aria-labelledby="priority-solutions">
        <div className="container">
          <div className="section-heading"><div className="panel-label">A clearer place to start</div><h2 id="priority-solutions">Protect your people. Plan your income.</h2></div>
          <div className="services-grid services-grid-two">
            {priorities.map((item) => <article className="service-card" key={item.href}><h3>{item.title}</h3><p>{item.description}</p><a className="planning-text-link" href={item.href}>{item.label} <span aria-hidden="true">↗</span></a></article>)}
          </div>
        </div>
      </section>
      <section className="section planning-home-feature">
        <div className="container"><div className="planning-feature"><div><span className="panel-label">Retirement planning</span><h2>Approaching retirement - or rethinking the plan?</h2><p>Explore questions about retirement income, Roth conversions, and the decisions ahead.</p></div><a className="planning-text-link" href="/retirement-planning">Explore Retirement Planning <span aria-hidden="true">↗</span></a></div></div>
      </section>
      <section id="contact" className="section section-bottom">
        <div className="container"><div className="cta-box">
          <div className="panel-label">Start here</div>
          <h2>You don&apos;t need a perfect plan. You just need the right one.</h2>
          <p>Start with a conversation and get clear on what makes sense for you, your family, and everything you&apos;re building.</p>
          <div className="cta-action"><BookingLink base={INTRO_CALL_URL} target="_blank" rel="noopener noreferrer" className="primary-button">Start the Conversation</BookingLink></div>
          <p className="planning-helper">Virtual conversations available. Insurance services and products are offered only where appropriately licensed and available.</p>
        </div></div>
      </section>
      <footer className="site-footer"><div className="container footer-inner">
        <div>Copyright 2026 Covarum</div>
        <div className="footer-links"><a href="/contact">Contact</a><a href="/join-covarum">Join Covarum</a><a href="https://go.covarum.com/privacy-policy">Privacy Policy</a><a href="https://go.covarum.com/terms--conditions">Terms &amp; Conditions</a></div>
      </div></footer>
    </main>
  );
}
