"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { clientInquiryUrl } from "../_lib/planning";
import BookingLink from "./booking-link";
import styles from "./site-header.module.css";

const mainLinks = [
  ["/solutions/life-insurance", "Life Insurance"],
  ["/retirement-planning", "Retirement"],
  ["/solutions", "Solutions"],
  ["/questions", "Questions"],
  ["/about", "About"],
];
const mobileLinks = [...mainLinks, ["/roth-conversions", "Roth Conversions"], ["/contact", "Contact"]];

export default function SiteHeader({ home = false, current }: { home?: boolean; current?: string }) {
  const pathname = usePathname();
  const activePath = current || pathname;
  const menu = useRef<HTMLDetailsElement>(null);
  return <header className={`site-header ${styles.header}`}><div className={`container ${styles.inner}`}>
    <a href="/" className={styles.brand} aria-label="Covarum home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/SVG-01.svg" alt="Covarum" className={`${styles.logo} ${home ? styles.homeLogo : ""}`} />
    </a>
    <nav className={styles.desktopNav} aria-label="Main navigation">{mainLinks.map(([href, label]) => <a key={href} href={href} aria-current={activePath === href ? "page" : undefined}>{label}</a>)}</nav>
    <BookingLink base={clientInquiryUrl} className={`header-cta ${styles.desktopCta}`}>Start the Conversation</BookingLink>
    <details ref={menu} className={styles.mobileMenu} onKeyDown={(event) => {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    }}>
      <summary className={styles.toggle}>Menu <span aria-hidden="true">☰</span></summary>
      <div className={styles.panel}>
        <nav aria-label="Mobile navigation">{mobileLinks.map(([href, label]) => <a key={href} href={href} aria-current={activePath === href ? "page" : undefined}>{label}</a>)}</nav>
        <BookingLink base={clientInquiryUrl} className={`primary-button ${styles.mobileCta}`}>Start the Conversation</BookingLink>
      </div>
    </details>
  </div></header>;
}
