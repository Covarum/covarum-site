import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Covarum",
  description: "Protection Solutions"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
