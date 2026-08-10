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
        <meta name="google-site-verification" content="zTYaE7K6In7oAhEjl36h4bYri6GBud-WUnMXkqdKJ8E" />

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
        <!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '4447136008867394');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=4447136008867394&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
        <ClientBody>{children}</ClientBody>
        <Analytics />
      </body>
    </html>
  );
}