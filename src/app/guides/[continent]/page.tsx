"use client";

import { use } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowLeft, Star, FileText, Users, ChevronRight, ArrowRight, BookOpen,
} from "lucide-react";
import { getContinentGuides, getGuidesByCountry, Guide } from "@/data/guidesData";

// ── Continent metadata — 6 continents (Caribbean removed) ─────────────────────
const continentMeta: Record<string, {
  name: string; icon: string; tagline: string; heroImage: string;
}> = {
  africa: {
    name: "Africa", icon: "🌍",
    tagline: "From the Maasai Mara to Zanzibar's white sands — Africa is raw, real, and unforgettable.",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=900&fit=crop",
  },
  europe: {
    name: "Europe", icon: "🏰",
    tagline: "Cobblestones, cathedrals, and café culture — Europe rewards those who go deeper.",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&h=900&fit=crop",
  },
  asia: {
    name: "Asia", icon: "🏯",
    tagline: "Where ancient ritual meets electric modernity — Asia is the world's most layered continent.",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&h=900&fit=crop",
  },
  "north-america": {
    name: "North America", icon: "🗽",
    tagline: "From Yellowstone's geysers to New York's skyline — North America contains multitudes.",
    heroImage: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1920&h=900&fit=crop",
  },
  "south-america": {
    name: "South America", icon: "🗿",
    tagline: "Machu Picchu at dawn, Patagonia's silence, Rio's energy — South America moves you.",
    heroImage: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1920&h=900&fit=crop",
  },
  oceania: {
    name: "Oceania", icon: "🏝️",
    tagline: "The Great Barrier Reef, Milford Sound, Fiji's silence — Oceania is the world's best-kept secret.",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&h=900&fit=crop",
  },
};

export default function ContinentGuidesPage({ params }: { params: Promise<{ continent: string }> }) {
  const { continent } = use(params);
  const guides        = getContinentGuides(continent);
  const meta          = continentMeta[continent];
  const guidesByCountry = getGuidesByCountry(continent);

  if (!meta || guides.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap'); .font-display{font-family:'Playfair Display',Georgia,serif;} .font-body{font-family:'DM Sans',system-ui,sans-serif;}`}</style>
        <Navigation />
        <div className="mx-auto max-w-7xl px-4 py-24 text-center">
          <h1 className="font-display text-5xl font-black text-gray-900 mb-4">Continent not found</h1>
          <Link href="/guides">
            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold font-body px-6 py-3 rounded-full transition-colors">
              Browse All Guides <ChevronRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const featured = guides.filter((g: Guide) => g.featured);

  const countryList = Object.entries(guidesByCountry).map(([slug, countryGuides]) => ({
    slug,
    name:  countryGuides[0].country,
    flag:  countryGuides[0].countryFlag,
    guides: countryGuides,
  }));

  return (
    <div className="min-h-screen bg-white font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body    { font-family: 'DM Sans', system-ui, sans-serif; }
        body          { font-family: 'DM Sans', system-ui, sans-serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Navigation />

      {/* ── HERO ── */}
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <img src={meta.heroImage} alt={meta.name}
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/15 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />

        <div className="absolute top-6 left-4 sm:left-8 lg:left-12">
          <Link href="/guides"
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white font-body text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/25 transition-all">
            <ArrowLeft className="h-3.5 w-3.5" />All guides
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-20 pb-16 max-w-5xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-5xl">{meta.icon}</span>
            <span className="bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full font-body">
              {guides.length} Guides · {countryList.length} {countryList.length === 1 ? "Country" : "Countries"}
            </span>
          </div>

          <h1 className="font-display text-6xl sm:text-8xl font-black text-white leading-[0.88] mb-4 drop-shadow-lg">
            {meta.name}
          </h1>

          <p className="text-white/65 font-body text-lg leading-relaxed max-w-xl mb-6">
            {meta.tagline}
          </p>

          <div className="flex items-center gap-6">
            {[
              { icon: FileText, label: `${guides.length} guides` },
              { icon: Star,     label: "4.8★ avg rating" },
              { icon: Users,    label: `${guides.reduce((s: number, g: Guide) => s + parseFloat((g.downloads ?? "0").replace?.("k","") ?? "0"), 0).toFixed(0)}k+ readers` },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-1.5 text-white/60 font-body text-sm">
                <s.icon className="h-3.5 w-3.5" />
                <span className="font-bold text-white">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED GUIDES ── */}
      {featured.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-yellow-500" />
              <span className="text-yellow-600 text-xs font-bold tracking-[0.25em] uppercase font-body">Featured</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-14">
              Most Popular {meta.name} Guides
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featured.map((guide: Guide) => (
                <Link key={guide.id} href={`/guides/${continent}/${guide.id}`}>
                  <div className="group relative overflow-hidden rounded-3xl h-[360px] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                    <img src={guide.image} alt={guide.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-yellow-400 text-gray-900 text-[9px] font-black uppercase tracking-widest px-2.5 py-1.5 rounded-full font-body">
                        Featured
                      </span>
                      {guide.tag && (
                        <span className={`${guide.tagColor ?? "bg-blue-600"} text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1.5 rounded-full font-body`}>
                          {guide.tag}
                        </span>
                      )}
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-1.5">
                      <span className="text-lg">{guide.countryFlag}</span>
                      <span className="bg-gray-950/80 backdrop-blur-sm text-yellow-400 text-xs font-black px-3 py-1.5 rounded-full font-body border border-yellow-400/20">
                        {guide.price ?? "$14.99"}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        <span className="text-[9px] font-semibold bg-white/10 backdrop-blur-sm border border-white/15 text-white/70 px-2 py-0.5 rounded-full font-body">
                          {guide.country}
                        </span>
                        {(guide.tags ?? []).slice(0, 2).map((tag: string, j: number) => (
                          <span key={j} className="text-[9px] font-semibold bg-white/10 backdrop-blur-sm border border-white/15 text-white/70 px-2 py-0.5 rounded-full font-body">{tag}</span>
                        ))}
                      </div>
                      <h3 className="font-display text-xl font-black text-white leading-tight mb-1.5 group-hover:text-yellow-300 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-white/55 font-body text-xs leading-relaxed mb-4 line-clamp-2">{guide.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-white/50 font-body">
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="font-bold text-white/80">{guide.rating}</span>
                          </span>
                          <span>{guide.downloads} readers</span>
                          <span>{guide.pages}p</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 bg-white text-gray-900 font-bold font-body text-[11px] px-4 py-2 rounded-full group-hover:bg-yellow-400 transition-all shadow-lg">
                          View Guide <ChevronRight className="h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── GUIDES BY COUNTRY ── */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${featured.length > 0 ? "bg-gray-50" : "bg-white"}`}>
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-blue-600" />
            <span className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase font-body">
              {featured.length > 0 ? "All Guides by Country" : `All ${meta.name} Guides`}
            </span>
          </div>
          <h2 className="font-display text-4xl font-black text-gray-900 mb-14">
            {featured.length > 0 ? `Browse by Country` : `All ${meta.name} Guides`}
          </h2>

          {countryList.map(({ slug, name, flag, guides: cGuides }) => (
            <div key={slug} className="mb-16">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-gray-200">
                <span className="text-4xl">{flag}</span>
                <div>
                  <h3 className="font-display text-2xl font-black text-gray-900">{name}</h3>
                  <p className="text-gray-400 text-sm font-body mt-0.5">
                    {cGuides.length} travel guide{cGuides.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cGuides.map((guide: Guide) => (
                  <Link key={guide.id} href={`/guides/${continent}/${guide.id}`}>
                    <div className="group relative overflow-hidden rounded-3xl h-[300px] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                      <img src={guide.image} alt={guide.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                      {guide.tag && (
                        <div className="absolute top-4 left-4">
                          <span className={`${guide.tagColor ?? "bg-blue-600"} text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1.5 rounded-full font-body`}>
                            {guide.tag}
                          </span>
                        </div>
                      )}
                      <div className="absolute top-4 right-4">
                        <span className="bg-gray-950/80 backdrop-blur-sm text-yellow-400 text-xs font-black px-3 py-1.5 rounded-full font-body border border-yellow-400/20">
                          {guide.price ?? "$14.99"}
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {(guide.tags ?? []).slice(0, 3).map((tag: string, j: number) => (
                            <span key={j} className="text-[9px] font-semibold bg-white/10 backdrop-blur-sm border border-white/15 text-white/70 px-2 py-0.5 rounded-full font-body">{tag}</span>
                          ))}
                        </div>
                        <h3 className="font-display text-lg font-black text-white leading-tight mb-1.5 group-hover:text-blue-300 transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-white/55 font-body text-xs leading-relaxed mb-4 line-clamp-2">{guide.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-xs text-white/50 font-body">
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="font-bold text-white/80">{guide.rating}</span>
                            </span>
                            <span>{guide.downloads} readers</span>
                            <span>{guide.pages}p</span>
                          </div>
                          <div className="inline-flex items-center gap-1.5 bg-white text-gray-900 font-bold font-body text-[11px] px-4 py-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                            View Guide <ChevronRight className="h-3 w-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="h-px w-6 bg-blue-500" />
                <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase font-body">Keep Exploring</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
                Want to explore<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  more continents?
                </span>
              </h2>
              <p className="text-gray-400 font-body text-lg leading-relaxed mb-8 max-w-md">
                We have expert guides across all 6 continents — destinations covered with on-the-ground research.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/guides">
                  <button className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-2xl text-sm transition-all font-body shadow-lg shadow-blue-900/40">
                    <BookOpen className="h-4 w-4" />
                    Browse All Guides
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-semibold px-7 py-4 rounded-2xl text-sm transition-all font-body">
                    Request a destination <ChevronRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Other continents mini-grid */}
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(continentMeta)
                .filter(([slug]) => slug !== continent)
                .slice(0, 6)
                .map(([slug, m]) => (
                  <Link key={slug} href={`/guides/${slug}`}>
                    <div className="group relative overflow-hidden rounded-2xl h-24 cursor-pointer">
                      <img src={m.heroImage} alt={m.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition-colors" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl mb-1">{m.icon}</span>
                        <span className="font-body text-white text-[10px] font-bold">{m.name}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}