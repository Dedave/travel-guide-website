import { getGuide } from "@/data/guidesData";
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

  return {
    title: `${guide.title} | Wanderlust Guides`,
    description: guide.overview.slice(0, 160),
    keywords: [
      guide.country,
      guide.continent,
      "travel guide",
      "travel tips",
      ...guide.tags,
    ].join(", "),
    openGraph: {
      title: guide.title,
      description: guide.subtitle,
      images: [{ url: guide.heroImage, width: 1920, height: 1080 }],
    },
  };
}

export default function GuideDetailPage({ params }: GuideDetailPageProps) {
  return <GuideDetailClient params={params} />;
}