import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaia Space",
  description:
    "We're pioneering a new frontier in satellite technology, flying lower and smarter to deliver ultra-high-definition imagery, seamless global communications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
