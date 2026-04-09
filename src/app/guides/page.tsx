"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Search, Star, ArrowRight, BookOpen,
  ChevronRight, Users, X, Globe,
} from "lucide-react";
import { getAllGuides, Guide } from "@/data/guidesData";

// ── Continent filters — 6 continents (Caribbean removed, guides redistributed) ─
const continentFilters = [
  { label: "All Guides",    value: "all",           icon: "🌎" },
  { label: "Africa",        value: "africa",        icon: "🌍" },
  { label: "Europe",        value: "europe",        icon: "🏰" },
  { label: "Asia",          value: "asia",          icon: "🏯" },
  { label: "North America", value: "north-america", icon: "🗽" },
  { label: "South America", value: "south-america", icon: "🗿" },
  { label: "Oceania",       value: "oceania",       icon: "🏝️" },
];

export default function AllGuidesPage() {
  const [search, setSearch]               = useState("");
  const [activeContinent, setActiveContinent] = useState("all");

  const allGuidesData: Guide[] = getAllGuides();

  const filtered = allGuidesData.filter((g) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      g.title.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q) ||
      g.tags.some((t) => t.toLowerCase().includes(q)) ||
      g.continent.toLowerCase().includes(q) ||
      (g.country ?? "").toLowerCase().includes(q);
    const matchContinent = activeContinent === "all" || g.continentSlug === activeContinent;
    return matchSearch && matchContinent;
  });

  const activeName = continentFilters.find((c) => c.value === activeContinent)?.label ?? "All Guides";

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
      <section className="relative overflow-hidden bg-gray-950 pt-20 pb-0">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />

        {/* 6-panel collage */}
        <div className="absolute inset-0 grid grid-cols-6 opacity-[0.15] pointer-events-none">
          {[
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=700&fit=crop",
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=700&fit=crop",
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=700&fit=crop",
            "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=400&h=700&fit=crop",
            "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=700&fit=crop",
            "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=700&fit=crop",
          ].map((src, i) => (
            <img key={i} src={src} alt="" className="w-full h-full object-cover" />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/75 to-gray-950" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pb-16 pt-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase font-body">
              {allGuidesData.length} Expert Guides · 6 Continents
            </span>
            <div className="h-px w-8 bg-blue-500" />
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-black text-white leading-tight mb-4">
            Every Guide.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Every Continent.
            </span>
          </h1>

          <p className="text-gray-400 font-body text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Expert-written, on-the-ground research. PDF + Hardcover from $14.99.
          </p>

          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by destination, country, tag or theme…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/8 backdrop-blur-sm border border-white/15 text-white placeholder-gray-500 rounded-2xl pl-14 pr-12 py-4 text-sm font-body focus:outline-none focus:border-blue-500 transition-all"
            />
            {search && (
              <button onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* ── Filter bar ── */}
        <div className="relative border-t border-white/8 bg-gray-950/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-3">
              {continentFilters.map((c) => (
                <button key={c.value} onClick={() => setActiveContinent(c.value)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all font-body ${
                    activeContinent === c.value
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40"
                      : "text-gray-400 hover:text-white hover:bg-white/8"
                  }`}>
                  <span>{c.icon}</span>{c.label}
                </button>
              ))}
              <div className="ml-auto pl-6 shrink-0 text-gray-600 text-xs font-body whitespace-nowrap">
                <span className="text-white font-bold">{filtered.length}</span> guide{filtered.length !== 1 ? "s" : ""}
                {activeContinent !== "all" && <> in <span className="text-white font-bold">{activeName}</span></>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GUIDE GRID ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          {filtered.length > 0 ? (
            <>
              <div className="flex items-center gap-3 mb-10">
                <div className="h-px w-6 bg-blue-600" />
                <span className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase font-body">
                  {activeContinent === "all" ? "All Destinations" : activeName}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((guide, i) => {
                  const isFeatured = i % 7 === 0;
                  return (
                    <Link key={guide.id} href={`/guides/${guide.continentSlug}/${guide.id}`}
                      className={isFeatured ? "lg:col-span-2" : ""}>
                      <div className={`group relative overflow-hidden rounded-3xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${isFeatured ? "h-[380px]" : "h-[340px]"}`}>

                        <img src={guide.image} alt={guide.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

                        {/* Top badges */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          {guide.countryFlag && (
                            <span className="text-lg">{guide.countryFlag}</span>
                          )}
                          <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-full font-body">
                            {guide.country ?? guide.continent}
                          </span>
                          {guide.tag && (
                            <span className={`${guide.tagColor} text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1.5 rounded-full font-body shadow`}>
                              {guide.tag}
                            </span>
                          )}
                        </div>

                        {/* Price */}
                        <div className="absolute top-4 right-4">
                          <span className="bg-gray-950/70 backdrop-blur-sm text-yellow-400 text-xs font-black px-3 py-1.5 rounded-full font-body border border-yellow-400/20">
                            {guide.price ?? "$14.99"}
                          </span>
                        </div>

                        {/* Bottom content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {guide.tags.map((tag, j) => (
                              <span key={j} className="text-[9px] font-semibold bg-white/10 backdrop-blur-sm border border-white/15 text-white/70 px-2 py-0.5 rounded-full font-body">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <h3 className={`font-display font-black text-white leading-tight mb-1.5 group-hover:text-blue-300 transition-colors ${isFeatured ? "text-2xl" : "text-lg"}`}>
                            {guide.title}
                          </h3>

                          <p className="text-white/55 font-body text-xs leading-relaxed mb-4 line-clamp-2">
                            {guide.description}
                          </p>

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
                              View Guide <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-28">
              <div className="text-6xl mb-5">🗺️</div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">No guides found</h3>
              <p className="text-gray-400 font-body text-sm mb-8 max-w-xs mx-auto">
                Try a different keyword or clear the continent filter.
              </p>
              <button onClick={() => { setSearch(""); setActiveContinent("all"); }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors font-body">
                <X className="h-4 w-4" /> Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="h-px w-6 bg-blue-500" />
                <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase font-body">Can't decide?</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
                Not sure where<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">to go next?</span>
              </h2>
              <p className="text-gray-400 font-body text-lg leading-relaxed mb-8 max-w-md">
                Start with our most popular guide and experience what a Wanderlust Guide feels like before committing to a destination.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/guides/asia/japan-ultimate">
                  <button className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-2xl text-sm transition-all font-body shadow-lg shadow-blue-900/40">
                    <BookOpen className="h-4 w-4" />
                    See Our #1 Guide — Japan
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </Link>
                <Link href="/guides/africa/kenya-safari">
                  <button className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-semibold px-7 py-4 rounded-2xl text-sm transition-all font-body">
                    Or browse Africa <ChevronRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: `${allGuidesData.length}+`, label: "Expert Guides",  icon: BookOpen, bg: "bg-blue-600" },
                { val: "4.9★",                     label: "Avg Rating",     icon: Star,     bg: "bg-yellow-500" },
                { val: "100k+",                    label: "Happy Readers",  icon: Users,    bg: "bg-white/8 border border-white/10" },
                { val: "6",                        label: "Continents",     icon: Globe,    bg: "bg-purple-600" },
              ].map((s, i) => (
                <div key={i} className={`${s.bg} rounded-2xl p-6 flex flex-col gap-6`}>
                  <s.icon className="h-5 w-5 text-white/70" />
                  <div>
                    <div className="font-display text-3xl font-black text-white">{s.val}</div>
                    <div className="text-white/50 text-xs font-body mt-1">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}