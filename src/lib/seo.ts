// src/lib/seo.ts
// Central SEO configuration shared across metadata, sitemap, robots and JSON-LD.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.wanderlusttravelguides.com"
).replace(/\/$/, "");

export const SITE_NAME = "Wanderlust Travel Guides";

export const SITE_DESCRIPTION =
  "Expertly crafted travel guides packed with hidden gems, local tips, ready-made itineraries and budget advice. Plan unforgettable trips across Europe, Asia, Africa and beyond.";

// Continent slugs used in /guides/[continent] routes.
export const CONTINENT_SLUGS = [
  "africa",
  "europe",
  "asia",
  "north-america",
  "south-america",
  "oceania",
] as const;

/** Build an absolute URL from a path. */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Organization + WebSite JSON-LD for the homepage / global scope. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/images/wanderlust-logo-transparent.png"),
    description: SITE_DESCRIPTION,
    sameAs: [
      "https://www.youtube.com/@WanderlustTravelGuides",
      "https://instagram.com/wanderlusttravs_",
      "https://facebook.com/share/1Dd4n1vRRX/?mibextid=wwXIfr",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/guides?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
