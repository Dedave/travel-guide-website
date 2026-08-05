// src/app/sitemap.ts
// Dynamic sitemap — auto-includes every guide as guides are added.
import type { MetadataRoute } from "next";
import { SITE_URL, CONTINENT_SLUGS } from "@/lib/seo";
import { getAllGuides } from "@/data/guidesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static, high-value pages.
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/plan`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/travel-essentials`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  // One entry per continent listing page.
  const continentRoutes: MetadataRoute.Sitemap = CONTINENT_SLUGS.map((slug) => ({
    url: `${SITE_URL}/guides/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // One entry per individual guide.
  const guideRoutes: MetadataRoute.Sitemap = getAllGuides().map((guide) => ({
    url: `${SITE_URL}/guides/${guide.continentSlug}/${guide.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...continentRoutes, ...guideRoutes];
}
