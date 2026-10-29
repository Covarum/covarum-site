import "./globals.css";
import "./preserved-production.css";
import type { Metadata } from "next";
import Script from "next/script";
import { SiteIdentity } from "./_components/search-schema";
import { AttributionCapture } from "./_components/booking-link";
import { SITE_URL } from "./_lib/search";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Life Insurance, Annuities & Retirement Planning | Covarum",
  description: "Clear guidance on life insurance, annuities, retirement income and Roth conversion decisions. Start with Tara Wallace at Covarum.",
  openGraph: { siteName: "Covarum", type: "website", locale: "en_US" },
  other: process.env.VERCEL_GIT_COMMIT_SHA ? { "covarum-source-revision": process.env.VERCEL_GIT_COMMIT_SHA } : {},
  icons: { icon: "/icon.png", shortcut: "/icon.png", apple: "/icon.png" }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteIdentity />
        <AttributionCapture />
        {children}

        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          strategy="afterInteractive"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69d29b580515dd8ed518b14f"
        />
      </body>
    </html>
  );
}
