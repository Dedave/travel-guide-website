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
<Script id="meta-pixel" strategy="afterInteractive">
  {`
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
  `}
</Script>
{/* NEW: Universal Button Tracker */}
  <Script id="universal-button-tracker" strategy="afterInteractive">
    {`
      (function(){
        const BUTTON_SELECTOR = 'button, [role="button"], a[href], input[type="button"], input[type="submit"], .btn, .button';

        function hasTrackingConsent(){
          // If you integrate a CMP later, plug in here.
          try { return true; } catch(e){ return false; }
        }

        function getMeta(el){
          if(!el) return {};
          const tag = el.tagName ? el.tagName.toLowerCase() : null;
          const text = (el.innerText || el.textContent || '').trim().replace(/\\s+/g,' ').slice(0,200);
          const id = el.id || null;
          const classes = (typeof el.className === 'string') ? el.className : null;
          const href = (tag === 'a') ? el.getAttribute('href') : null;
          const trackName = el.getAttribute && (el.getAttribute('data-track-name') || el.getAttribute('data-analytics-name'));
          const dataset = {};
          if(el.dataset){
            for(const k in el.dataset) if(Object.prototype.hasOwnProperty.call(el.dataset,k)) dataset[k]=el.dataset[k];
          }
          return { name: trackName || text || id || (classes ? classes.split(' ')[0] : 'unknown_button'), id, classes, href, dataset };
        }

        document.addEventListener('click', function(e){
          const el = e.target.closest ? e.target.closest(BUTTON_SELECTOR) : null;
          if(!el) return;

          if(!hasTrackingConsent()) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: 'button_click',
              button_name: 'consent_blocked',
              consent: false,
              ts: new Date().toISOString()
            });
            return;
          }

          const m = getMeta(el);
          const payload = {
            event: 'button_click',
            button_name: m.name,
            button_id: m.id,
            button_classes: m.classes,
            button_href: m.href,
            button_dataset: m.dataset,
            page_location: window.location.href,
            page_path: window.location.pathname,
            referrer: document.referrer || null,
            ts: new Date().toISOString()
          };

          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push(payload);
        }, true);
      })();
    `}
  </Script>

  <noscript>
    <img
      height="1"
      width="1"
      style={{ display: "none" }}
      src="https://www.facebook.com/tr?id=4447136008867394&ev=PageView&noscript=1"
      alt=""
    />
  </noscript>
        <ClientBody>{children}</ClientBody>
        <Analytics />
      </body>
    </html>
  );
}