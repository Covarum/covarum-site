import { clientInquiryUrl } from "../_lib/planning";
export default function SiteHeader({ home = false, current }: { home?: boolean; current?: string }) {
  const links = [["/", "Home"], ["/solutions", "Solutions"], ["/about", "About"], ["/join-covarum", "Join Covarum"], ["/contact", "Contact"]];
  return <header className="site-header"><div className="container header-inner">
    <a href="/" className={`header-brand header-brand-mark ${home ? "header-brand-mark-home" : ""}`} aria-label="Covarum home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/SVG-01.svg" alt="Covarum" className={`header-logo ${home ? "header-logo-home" : "header-logo-subpage"}`} />
    </a>
    <nav className="nav" aria-label="Main navigation">{links.map(([href, label]) => <a key={href} href={href} aria-current={current === href ? "page" : undefined}>{label}</a>)}</nav>
    <a href={clientInquiryUrl} className="header-cta">Start the Conversation</a>
  </div></header>;
}
