import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";  
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wanderlust Travel Guides — Hidden Gems, Local Tips & Ready-Made Itineraries",
    template: "%s | Wanderlust Travel Guides",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "travel guides",
    "hidden gems",
    "travel itineraries",
    "budget travel tips",
    "Italy travel guide",
    "Europe travel guide",
    "Asia travel guide",
    "Africa travel guide",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Wanderlust Travel Guides — Hidden Gems, Local Tips & Ready-Made Itineraries",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Wanderlust Travel Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanderlust Travel Guides — Hidden Gems, Local Tips & Ready-Made Itineraries",
    description: SITE_DESCRIPTION,
    images: ["/images/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
        <Analytics />
      </body>
    </html>
  );
}