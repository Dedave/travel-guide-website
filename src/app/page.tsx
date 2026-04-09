"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Play,
  ShoppingBag,
  Star,
  MapPin,
  Users,
  BookOpen,
  ChevronRight,
  FileText,
  Compass,
  Globe,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

// ── Hero slides ───────────────────────────────────────────────────────────
const heroSlides = [
  { image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop", continent: "Africa",        label: "Safari & Soul",      headline: ["Where the","Wild Begins"],             sub: "From the Maasai Mara to Zanzibar",      slug: "africa",        guideId: "kenya-safari" },
  { image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&h=1080&fit=crop", continent: "Asia",          label: "Ancient & Electric", headline: ["Temples,","Neon & Tea"],               sub: "Across Japan, Bali & beyond",           slug: "asia",          guideId: "japan-ultimate" },
  { image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&h=1080&fit=crop", continent: "Europe",        label: "History & Flavour",  headline: ["Cobblestones,","Cafés & Cathedrals"],  sub: "Italy, France, Greece and more",        slug: "europe",        guideId: "italy-ultimate" },
  { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop", continent: "North America", label: "Wild & Urban",        headline: ["Parks, Cities,","Open Roads"],         sub: "From Yellowstone to New York City",     slug: "north-america", guideId: "usa-national-parks" },
  { image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1920&h=1080&fit=crop", continent: "South America", label: "Adventure Awaits",   headline: ["Glaciers,","Jungles & Ruins"],         sub: "Machu Picchu to Patagonia",             slug: "south-america", guideId: "peru-machu-picchu" },
  { image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&h=1080&fit=crop", continent: "Oceania",       label: "Paradise & Wild",    headline: ["Reefs, Ranges","& Red Earth"],         sub: "Australia, New Zealand & Fiji",         slug: "oceania",       guideId: "australia-complete" },
];

// ── Featured guides ───────────────────────────────────────────────────────
const featuredGuides = [
  {
    title: "Ultimate Japan Travel Guide",
    description: "Tokyo, Kyoto, Osaka and hidden gems",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    continent: "Asia",
    continentSlug: "asia",
    guideSlug: "japan-ultimate",
    rating: 4.9,
    downloads: "12.3k",
    pages: 135,
    tag: "Bestseller",
  },
  {
    title: "Ultimate Kenya Safari Guide",
    description: "Big Five, Great Migration & beaches",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
    continent: "Africa",
    continentSlug: "africa",
    guideSlug: "kenya-safari",
    rating: 4.9,
    downloads: "5.2k",
    pages: 85,
    tag: "Staff Pick",
  },
  {
    title: "Peru & Machu Picchu Guide",
    description: "Inca Trail, Sacred Valley & Amazon",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&h=400&fit=crop",
    continent: "South America",
    continentSlug: "south-america",
    guideSlug: "peru-machu-picchu",
    rating: 4.9,
    downloads: "7.8k",
    pages: 98,
    tag: "Top Rated",
  },
  {
    title: "Greek Islands Paradise",
    description: "Santorini, Mykonos, Crete & Athens",
    image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=600&h=400&fit=crop",
    continent: "Europe",
    continentSlug: "europe",
    guideSlug: "greece-islands",
    rating: 4.9,
    downloads: "6.8k",
    pages: 88,
    tag: "New",
  },
];

// ── Continents ────────────────────────────────────────────────────────────
const continents = [
  { name: "Africa",        slug: "africa",        icon: "🌍", count: 5,  image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=500&fit=crop" },
  { name: "Europe",        slug: "europe",        icon: "🏰", count: 5,  image: "https://images.unsplash.com/photo-1520637736862-4d197d17c55a?w=400&h=500&fit=crop" },
  { name: "Asia",          slug: "asia",          icon: "🏯", count: 5,  image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=500&fit=crop" },
  { name: "North America", slug: "north-america", icon: "🗽", count: 4,  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop" },
  { name: "South America", slug: "south-america", icon: "🗿", count: 5,  image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=500&fit=crop" },
  { name: "Oceania",       slug: "oceania",       icon: "🏝️", count: 3,  image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=500&fit=crop" },
];

const stats = [
  { icon: FileText, value: "50+",   label: "Travel Guides"    },
  { icon: MapPin,   value: "150+",  label: "Countries"        },
  { icon: Users,    value: "100k+", label: "Happy Readers"    },
  { icon: Star,     value: "4.9★",  label: "Average Rating"   },
];

export default function Home() {
  const [activeSlide, setActiveSlide]       = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSlide((p) => (p + 1) % heroSlides.length);
        setIsTransitioning(false);
      }, 400);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  const goTo = (i: number) => {
    setIsTransitioning(true);
    setTimeout(() => { setActiveSlide(i); setIsTransitioning(false); }, 300);
  };

  const slide = heroSlides[activeSlide];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Fonts + keyframes */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body    { font-family: 'DM Sans', system-ui, sans-serif; }
        body          { font-family: 'DM Sans', system-ui, sans-serif; }

        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes subtleBounce {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50%       { transform: translateY(6px) translateX(-50%); }
        }
        .animate-marquee       { animation: marquee 40s linear infinite; }
        .animate-fadeUp        { animation: fadeUp 0.65s ease forwards; }
        .animate-subtleBounce  { animation: subtleBounce 2s ease-in-out infinite; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        .hero-fade { transition: opacity 0.4s ease, transform 0.4s ease; }
        .hero-hidden { opacity: 0; transform: translateY(14px); }
      `}</style>

      <Navigation />

      {/* ════════════════════════════════════════
          HERO — Full-bleed cinematic slideshow
      ════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[680px] overflow-hidden">

        {/* BG image */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
          <img src={slide.image} alt={slide.continent} className="w-full h-full object-cover" />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t  from-black/85 via-black/25 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r  from-black/45 via-transparent to-transparent" />

        {/* Vertical dot nav */}
        <div className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col gap-2.5 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeSlide ? "w-2 h-8 bg-white" : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end pb-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full">

          {/* Eyebrow label */}
          <div className={`hero-fade mb-5 ${isTransitioning ? "hero-hidden" : ""}`}>
            <span className="inline-flex items-center gap-2.5 text-white/60 text-xs font-semibold tracking-[0.35em] uppercase font-body">
              <span className="w-8 h-px bg-white/40" />
              {slide.label}
            </span>
          </div>

          {/* Headline */}
          <h1 className={`hero-fade font-display font-black text-white leading-[0.88] tracking-tight mb-7
            text-[clamp(3.5rem,10vw,7.5rem)] ${isTransitioning ? "hero-hidden" : ""}`}
            style={{ textShadow: "0 4px 40px rgba(0,0,0,0.5)" }}
          >
            {slide.headline.map((line, i) => <span key={i} className="block">{line}</span>)}
          </h1>

          {/* Sub + CTAs */}
          <div className={`hero-fade flex flex-col sm:flex-row items-start sm:items-center gap-4 ${isTransitioning ? "hero-hidden" : ""}`}>
            <p className="text-white/65 font-body text-base sm:text-lg sm:mr-4">{slide.sub}</p>
            <Link href={`/guides/${slide.slug}/${slide.guideId}`}>
              <button className="group inline-flex items-center gap-2 bg-white hover:bg-yellow-400 text-gray-900 font-bold font-body px-7 py-3.5 rounded-full text-sm transition-all shadow-xl hover:shadow-2xl hover:shadow-yellow-400/30 whitespace-nowrap">
                View Guide
                <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
            <Link href={`/guides/${slide.slug}`}>
              <button className="inline-flex items-center gap-2 text-white/65 hover:text-white font-body text-sm border border-white/20 hover:border-white/50 px-5 py-3.5 rounded-full transition-all whitespace-nowrap">
                All {slide.continent} guides
              </button>
            </Link>
          </div>

          {/* Continent switcher text */}
          <div className={`hero-fade mt-10 flex items-center gap-5 ${isTransitioning ? "hero-hidden" : ""}`}>
            {heroSlides.map((s, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`font-body text-xs font-semibold transition-all ${
                  i === activeSlide ? "text-white" : "text-white/30 hover:text-white/60"
                }`}
              >
                {s.continent}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-7 left-1/2 animate-subtleBounce">
          <ChevronDown className="h-5 w-5 text-white/40" />
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS TICKER
      ════════════════════════════════════════ */}
      <section className="bg-gray-950 py-3.5 overflow-hidden border-b border-white/5">
        <div className="flex animate-marquee whitespace-nowrap select-none">
          {[...Array(4)].map((_, r) => (
            <div key={r} className="flex items-center shrink-0">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex items-center gap-2.5 px-10">
                    <s.icon className="h-3.5 w-3.5 text-yellow-400 shrink-0" />
                    <span className="text-white font-bold text-xs font-body">{s.value}</span>
                    <span className="text-gray-500 text-xs font-body">{s.label}</span>
                  </div>
                  <div className="w-px h-3 bg-white/10" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          FEATURED GUIDES — Asymmetric editorial
      ════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase font-body mb-3">
                Editor's Picks
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 leading-[1.05]">
                Guides Worth<br />
                <span className="text-blue-600 italic">Every Mile</span>
              </h2>
            </div>
            <Link href="/guides" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-blue-600 transition-colors font-body group">
              Browse all
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Grid: 1 big left, 3 stacked right */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

            {/* Hero card */}
            <Link href={`/guides/${featuredGuides[0].continentSlug}/${featuredGuides[0].guideSlug}`}
              className="lg:col-span-3 group block">
              <div className="relative overflow-hidden rounded-3xl h-[500px] lg:h-[540px] shadow-xl hover:shadow-2xl transition-all duration-300">
                <img src={featuredGuides[0].image} alt={featuredGuides[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                <div className="absolute top-5 left-5">
                  <span className="bg-yellow-400 text-gray-900 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full font-body shadow">
                    {featuredGuides[0].tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white/50 text-[10px] font-bold tracking-[0.25em] uppercase font-body mb-1">
                    {featuredGuides[0].continent}
                  </p>
                  <h3 className="font-display text-3xl font-black text-white leading-tight mb-2">
                    {featuredGuides[0].title}
                  </h3>
                  <p className="text-white/65 text-sm font-body mb-6">{featuredGuides[0].description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-white/50 text-xs font-body">
                      <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />{featuredGuides[0].rating}</span>
                      <span>{featuredGuides[0].downloads} readers</span>
                      <span>{featuredGuides[0].pages} pages</span>
                    </div>
                    <button className="inline-flex items-center gap-2 bg-white hover:bg-yellow-400 text-gray-900 font-bold text-xs px-5 py-2.5 rounded-full transition-all font-body group/btn shadow">
                      View Guide
                      <ChevronRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>

            {/* 3 small cards */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {featuredGuides.slice(1).map((guide, i) => (
                <Link key={i} href={`/guides/${guide.continentSlug}/${guide.guideSlug}`} className="group flex-1 block">
                  <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300" style={{ height: "160px" }}>
                    <img src={guide.image} alt={guide.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

                    <div className="absolute top-3 right-3">
                      <span className="bg-white/15 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full font-body border border-white/20">
                        {guide.tag}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <p className="text-white/45 text-[9px] font-bold tracking-[0.2em] uppercase font-body">{guide.continent}</p>
                      <h3 className="font-display text-lg font-bold text-white leading-snug mt-0.5">{guide.title}</h3>
                      <div className="flex items-center gap-3 mt-2 text-xs font-body">
                        <span className="flex items-center gap-1 text-white/50"><Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />{guide.rating}</span>
                        <span className="text-white/40">{guide.downloads} readers</span>
                        <span className="ml-auto flex items-center gap-1 text-white/70 font-semibold group-hover:text-yellow-400 transition-colors">
                          View <ChevronRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile see all */}
          <div className="sm:hidden mt-8 text-center">
            <Link href="/guides">
              <button className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 font-semibold font-body px-6 py-3 rounded-full text-sm hover:border-blue-300 hover:text-blue-600 transition-all">
                Browse all guides <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CONTINENTS — Dark strip with scroll cards
      ════════════════════════════════════════ */}
      <section className="py-24 bg-gray-950">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
          <p className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase font-body mb-3">
            Where to Next?
          </p>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight">
              Explore by<br />Continent
            </h2>
            <Link href="/guides" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-white transition-colors font-body group">
              All guides <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {continents.map((c, i) => (
            <Link key={i} href={`/guides/${c.slug}`} className="shrink-0 snap-start block">
              <div className="relative w-52 h-72 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <img src={c.image} alt={c.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 text-3xl">{c.icon}</div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-display text-lg font-bold text-white">{c.name}</div>
                  <div className="text-white/45 text-xs font-body mt-0.5">{c.count} guides</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/60 group-hover:text-yellow-400 transition-colors font-body">
                    Explore <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY WANDERLUST — Trust + mosaic stats
      ════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase font-body mb-4">
                Why Choose Us
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">
                Guides That Go<br />
                <span className="text-blue-600 italic">Beyond the Basics</span>
              </h2>
              <p className="text-gray-500 text-lg font-body leading-relaxed mb-10">
                Every guide is researched on the ground by travelers who've actually been there — not assembled from Wikipedia. We cover what guidebooks miss.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Compass,   title: "On-the-Ground Research",  body: "Every destination is visited in person. No recycled content — ever." },
                  { icon: TrendingUp, title: "Updated Regularly",       body: "Visa rules, prices, and hidden gems refreshed so your info is always current." },
                  { icon: Globe,     title: "Covers All Budgets",       body: "From backpacker trails to luxury resorts — options for every wallet." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 font-body text-sm mb-1">{item.title}</div>
                      <div className="text-gray-500 text-sm font-body leading-relaxed">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/guides">
                  <button className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold font-body px-8 py-4 rounded-full text-sm shadow-lg hover:shadow-xl shadow-blue-600/20 transition-all">
                    Browse All Guides
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Staggered stat mosaic */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "50+",   label: "Guides Published",  bg: "bg-blue-600",  text: "text-white",     sub: "text-blue-200"  },
                { val: "4.9★",  label: "Average Rating",    bg: "bg-yellow-400",text: "text-gray-900",   sub: "text-yellow-700", offset: "mt-6"  },
                { val: "100k+", label: "Happy Readers",     bg: "bg-gray-900",  text: "text-white",     sub: "text-gray-400"  },
                { val: "150+",  label: "Countries Covered", bg: "bg-green-500", text: "text-white",     sub: "text-green-100", offset: "-mt-6" },
              ].map((s, i) => (
                <div key={i} className={`${s.bg} rounded-2xl p-7 ${s.offset ?? ""}`}>
                  <div className={`font-display text-4xl font-black ${s.text}`}>{s.val}</div>
                  <div className={`font-body text-xs font-semibold mt-1 ${s.sub}`}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          YOUTUBE + ESSENTIALS — Dark image cards
      ════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* YouTube */}
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-10 group cursor-pointer hover:shadow-2xl transition-shadow min-h-[340px] flex flex-col justify-between">
              <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=500&fit=crop"
                  alt="YouTube" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Play className="h-7 w-7 text-white fill-white" />
                  </div>
                  <p className="text-red-400 text-xs font-bold tracking-[0.25em] uppercase font-body mb-2">Video Content</p>
                  <h3 className="font-display text-3xl font-black text-white mb-3">Watch Our Adventures</h3>
                  <p className="text-gray-400 font-body text-sm leading-relaxed max-w-sm">
                    Destination reviews, packing guides, and travel vlogs — new videos every week from around the world.
                  </p>
                </div>
                <button className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold font-body px-6 py-3 rounded-full text-sm transition-all w-fit">
                  <Play className="h-4 w-4 fill-white" /> Watch on YouTube
                </button>
              </div>
            </div>

            {/* Travel Essentials */}
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-10 group cursor-pointer hover:shadow-2xl transition-shadow min-h-[340px] flex flex-col justify-between">
              <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1553531384-397c80973a0b?w=800&h=500&fit=crop"
                  alt="Gear" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <ShoppingBag className="h-7 w-7 text-white" />
                  </div>
                  <p className="text-green-400 text-xs font-bold tracking-[0.25em] uppercase font-body mb-2">Gear & Kit</p>
                  <h3 className="font-display text-3xl font-black text-white mb-3">Travel Essentials</h3>
                  <p className="text-gray-400 font-body text-sm leading-relaxed max-w-sm">
                    Curated bags, gadgets, and gear we actually use — honest reviews and affiliate deals, no fluff.
                  </p>
                </div>
                <Link href="/travel-essentials">
                  <button className="mt-8 inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold font-body px-6 py-3 rounded-full text-sm transition-all">
                    <ShoppingBag className="h-4 w-4" /> Shop Essentials
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}