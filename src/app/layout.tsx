import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dreamscape — Where Dreams Become Cinema",
  description: "A cinematic experience where your dreams come to life.",
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
