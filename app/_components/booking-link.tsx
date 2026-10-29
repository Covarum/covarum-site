"use client";

import { useEffect, useState } from "react";
import type { AnchorHTMLAttributes } from "react";
import { usePathname } from "next/navigation";
import { ATTRIBUTION_KEY, bookingUrl, resolveAttribution } from "../_lib/booking-attribution";

function currentAttribution() {
  let stored: string | null = null;
  try { stored = window.sessionStorage.getItem(ATTRIBUTION_KEY); } catch { /* Storage can be disabled. */ }
  const attribution = resolveAttribution(window.location.search, document.referrer, stored);
  try { window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution)); } catch { /* Booking still works. */ }
  return attribution;
}

// Capture the referring campaign on entry, including arrivals on the homepage.
export function AttributionCapture() {
  const path = usePathname();
  useEffect(() => { currentAttribution(); }, [path]);
  return null;
}

type BookingLinkProps = { base: string; topic?: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">;

export default function BookingLink({ base, topic, className = "primary-button", children = "Book a Retirement Conversation", ...attributes }: BookingLinkProps) {
  const path = usePathname() || "/";
  const content = topic || (path === "/" ? "home" : path.slice(1));
  const campaign = path === "/roth-conversions" || path === "/retirement-planning" ? "covarum-retirement" : "covarum-website";
  const [href, setHref] = useState(() => bookingUrl(base, {}, content, campaign));
  useEffect(() => {
    setHref(bookingUrl(base, currentAttribution(), content, campaign));
  }, [base, content, campaign]);
  return <a {...attributes} className={className} href={href} onClick={(event) => {
    // Keep a normal navigable link, including when storage or tracking is unavailable.
    event.currentTarget.href = bookingUrl(base, currentAttribution(), content, campaign);
  }}>{children}</a>;
}
