import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";  
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Wanderlust Guides - Your Ultimate Travel Companion",
  description: "Discover the world with our comprehensive travel guides, YouTube channel, and essential travel gear recommendations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />

        <meta name="agd-partner-manual-verification" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}