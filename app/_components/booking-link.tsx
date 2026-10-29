"use client";

import { useEffect, useState } from "react";
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

export default function BookingLink({ base, topic }: { base: string; topic: string }) {
  const [href, setHref] = useState(() => bookingUrl(base, {}, topic));
  useEffect(() => {
    setHref(bookingUrl(base, currentAttribution(), topic));
  }, [base, topic]);
  return <a className="primary-button" href={href} onClick={(event) => {
    // Keep a normal navigable link, including when storage or tracking is unavailable.
    event.currentTarget.href = bookingUrl(base, currentAttribution(), topic);
  }}>Book a Retirement Conversation</a>;
}
