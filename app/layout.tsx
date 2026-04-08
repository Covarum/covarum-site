import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Covarum",
  description: "Protection Solutions",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
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
