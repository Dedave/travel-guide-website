import Link from "next/link";
import { Star, ChevronRight } from "lucide-react";
import { getContinentGuides, Guide } from "@/data/guidesData";

interface RelatedGuidesProps {
  currentGuideId: string;
  continentSlug: string;
  continent: string;
}

export default function RelatedGuides({
  currentGuideId,
  continentSlug,
  continent,
}: RelatedGuidesProps) {
  const all = getContinentGuides(continentSlug);
  const related = all
    .filter((g) => g.id !== currentGuideId)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-6 bg-blue-600" />
          <span className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase font-body">
            More {continent} guides
          </span>
        </div>
        <h2 className="font-display text-3xl font-black text-gray-900 mb-10">
          Keep exploring {continent}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {related.map((guide) => (
            <Link
              key={guide.id}
              href={`/guides/${continentSlug}/${guide.id}`}
            >
              <div className="group relative overflow-hidden rounded-3xl h-64 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-gray-950/70 backdrop-blur-sm text-yellow-400 text-xs font-black px-3 py-1.5 rounded-full border border-yellow-400/20">
                    {guide.price ?? "$14.99"}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-base">{guide.countryFlag}</span>
                    <span className="text-white/50 text-[10px] font-bold uppercase tracking-wider font-body ml-1">
                      {guide.country}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-black text-white leading-tight mb-2 group-hover:text-yellow-300 transition-colors">
                    {guide.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-white/50 font-body">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-white/80">{guide.rating}</span>
                      <span className="ml-1">{guide.downloads} readers</span>
                    </div>
                    <div className="inline-flex items-center gap-1 bg-white text-gray-900 font-bold text-[11px] px-3 py-1.5 rounded-full group-hover:bg-yellow-400 transition-all font-body">
                      View <ChevronRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href={`/guides/${continentSlug}`}>
            <button className="inline-flex items-center gap-2 border border-gray-200 hover:border-blue-300 text-gray-600 hover:text-blue-600 font-semibold text-sm px-6 py-3 rounded-full transition-all font-body">
              See all {continent} guides <ChevronRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}