import type { ReactNode } from "react";
import SiteHeader from "./site-header";
import { clientInquiryUrl } from "../_lib/planning";
import BookingLink from "./booking-link";
export function ConversationButton({ topic = "retirement-planning" }: { topic?: string }) {
  return <BookingLink base={clientInquiryUrl} topic={topic} />;
}
export function AdvisorDisclosure() {
  return <div className="planning-disclosure">
    <p>Glenn Eckstut collaborates with Tara as a financial advisor outside Covarum. His securities and investment-advisory services are provided through the firms below.</p>
    <p>Securities offered through The O.N. Equity Sales Company, Member <a href="https://www.finra.org/">FINRA</a>/<a href="https://www.sipc.org/">SIPC</a>, One Financial Way, Cincinnati, OH 45242 (513)794-6794. Investment Advisory services offered through O.N. Investment Management Company.</p>
    <p>This information is educational and is not personalized investment, tax, or legal advice. Discuss tax and legal questions with your tax and legal professionals.</p>
  </div>;
}
export function PlanningShell({ children }: { children: ReactNode }) {
  return <div className="site-shell">
    <a className="skip-link" href="#main-content">Skip to content</a><SiteHeader />
    <main id="main-content" className="planning-page">{children}</main>
    <footer className="site-footer"><div className="container footer-inner"><div>Copyright 2026 Covarum</div><div className="footer-links"><a href="/solutions">Solutions</a><a href="/questions">Common Questions</a><a href="/contact">Contact</a><a href="https://go.covarum.com/privacy-policy">Privacy Policy</a><a href="https://go.covarum.com/terms--conditions">Terms &amp; Conditions</a></div></div></footer>
  </div>;
}
export function PlanningClose({ title, children, topic = "retirement-planning" }: { title: string; children: ReactNode; topic?: string }) {
  return <section className="section section-bottom"><div className="container"><div className="cta-box planning-close"><h2>{title}</h2><p>{children}</p><div className="cta-action"><ConversationButton topic={topic} /></div><p className="planning-helper">Start with Tara to discuss your questions and the next step.</p></div></div></section>;
}
