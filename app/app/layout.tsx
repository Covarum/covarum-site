export const metadata = {
  title: "Covarum",
  description: "Insurance and financial planning with clarity, protection, and perspective.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
