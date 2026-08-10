import { getGuide } from "@/data/guidesData";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";
import GuideDetailClient from "./GuideDetailClient";

interface GuideDetailPageProps {
  params: Promise<{
    continent: string;
    guide: string;
  }>;
}

export async function generateMetadata({ params }: GuideDetailPageProps) {
  const resolved = await params;
  const guide = getGuide(resolved.continent, resolved.guide);
  if (!guide) return {};

  const canonical = `/guides/${resolved.continent}/${resolved.guide}`;

  return {
    title: `${guide.title} | Wanderlust Guides`,
    description: guide.overview.slice(0, 160),
    keywords: [guide.country, guide.continent, "travel guide", "travel tips", ...guide.tags].join(", "),
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.subtitle,
      url: canonical,
      images: [{ url: guide.heroImage, width: 1920, height: 1080, alt: guide.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.subtitle,
      images: [guide.heroImage],
    },
  };
}

function parsePrice(price?: string): string | undefined {
  if (!price) return undefined;
  const match = price.replace(/,/g, "").match(/[\d.]+/);
  return match ? match[0] : undefined;
}

export default async function GuideDetailPage({ params }: GuideDetailPageProps) {
  const resolved = await params;
  const guide = getGuide(resolved.continent, resolved.guide);

  const jsonLd: Record<string, unknown>[] = [];

  if (guide) {
    const canonicalUrl = absoluteUrl(`/guides/${resolved.continent}/${resolved.guide}`);
    const priceValue = parsePrice(guide.price);

    const productLd: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: guide.title,
      description: guide.overview.slice(0, 300),
      image: guide.heroImage,
      brand: {
        "@type": "Brand",
        name: SITE_NAME,
      },
      category: `${guide.country} Travel Guide`,
      url: canonicalUrl,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: guide.rating,
        bestRating: 5,
        ratingCount: 100,
      },
    };

    if (priceValue) {
      productLd.offers = {
        "@type": "Offer",
        price: priceValue,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: guide.gumroadUrl || guide.selarUrl || canonicalUrl,
      };
    }

    jsonLd.push(productLd);

    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guides",
          item: absoluteUrl("/guides"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: guide.continent,
          item: absoluteUrl(`/guides/${resolved.continent}`),
        },
        {
          "@type": "ListItem",
          position: 4,
          name: guide.title,
          item: canonicalUrl,
        },
      ],
    });
  }

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
      <GuideDetailClient params={params} />
    </>
  );
}
