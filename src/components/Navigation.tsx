"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  MapPin, Youtube, ShoppingBag, Menu, X, ChevronDown,
  Globe, ArrowRight, Compass,
} from "lucide-react";

const continents = [
  { name: "Africa",        slug: "africa",        icon: "🌍", desc: "Safari, culture & ancient wonders" },
  { name: "Europe",        slug: "europe",        icon: "🏰", desc: "History, food & coastal beauty"     },
  { name: "Asia",          slug: "asia",          icon: "🏯", desc: "Temples, neon & ancient trails"     },
  { name: "North America", slug: "north-america", icon: "🗽", desc: "Parks, cities & open roads"         },
  { name: "South America", slug: "south-america", icon: "🗿", desc: "Glaciers, jungles & Inca ruins"     },
  { name: "Oceania",       slug: "oceania",       icon: "🏝️", desc: "Reefs, rainforests & red earth"    },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!guidesOpen) return;
    const handler = () => setGuidesOpen(false);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [guidesOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body    { font-family: 'DM Sans', system-ui, sans-serif; }
      `}</style>

      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-blue-200 transition-shadow">
                <Globe className="h-4 w-4 text-white" />
              </div>
              <div>
                <span className="font-display text-base font-black text-gray-900 leading-none block">Wanderlust</span>
                <span className="font-body text-[9px] font-bold text-blue-600 uppercase tracking-[0.2em] leading-none block">Guides</span>
              </div>
            </Link>

            {/* ── Desktop nav ── */}
            <div className="hidden md:flex items-center gap-1">

              <Link href="/"
                className="font-body text-sm font-semibold text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all">
                Home
              </Link>

              {/* Travel Guides dropdown */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setGuidesOpen((v) => !v)}
                  className={`inline-flex items-center gap-1.5 font-body text-sm font-semibold px-3 py-2 rounded-lg transition-all ${
                    guidesOpen ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <MapPin className="h-3.5 w-3.5" />
                  Travel Guides
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${guidesOpen ? "rotate-180" : ""}`} />
                </button>

                {guidesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="px-5 py-4 border-b border-gray-50 flex items-center justify-between">
                      <div>
                        <p className="font-display text-sm font-bold text-gray-900">Explore by Continent</p>
                        <p className="text-gray-400 text-xs font-body mt-0.5">Expert guides across all 6 continents</p>
                      </div>
                      <Link href="/guides" onClick={() => setGuidesOpen(false)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 font-body">
                        All guides <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-0.5 p-3 bg-gray-50">
                      {continents.map((c) => (
                        <Link key={c.slug} href={`/guides/${c.slug}`}
                          onClick={() => setGuidesOpen(false)}
                          className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white transition-all group">
                          <span className="text-xl shrink-0">{c.icon}</span>
                          <div className="min-w-0">
                            <div className="font-body text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">
                              {c.name}
                            </div>
                            <div className="font-body text-[10px] text-gray-400 mt-0.5 leading-tight truncate">
                              {c.desc}
                            </div>
                          </div>
                          <ChevronDown className="h-3 w-3 text-gray-300 group-hover:text-blue-400 -rotate-90 ml-auto shrink-0 transition-colors" />
                        </Link>
                      ))}
                    </div>

                    <div className="px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-between">
                      <span className="text-white/80 text-xs font-body">Can't decide? Browse everything.</span>
                      <Link href="/guides" onClick={() => setGuidesOpen(false)}
                        className="inline-flex items-center gap-1 text-xs font-black text-white hover:text-yellow-300 transition-colors font-body">
                        View all guides <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* ── Plan Your Trip — highlighted link ── */}
              <Link href="/plan"
                className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all group relative">
                <Compass className="h-3.5 w-3.5 text-yellow-500 group-hover:text-yellow-600 transition-colors" />
                Plan Trip
                {/* small "new" dot */}
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-yellow-400 rounded-full ring-2 ring-white" />
              </Link>

              <Link href="/youtube"
                className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all">
                <Youtube className="h-3.5 w-3.5 text-red-500" />
                YouTube
              </Link>

              <Link href="/travel-essentials"
                className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all">
                <ShoppingBag className="h-3.5 w-3.5 text-green-500" />
                Essentials
              </Link>

              <Link href="/contact"
                className="font-body text-sm font-semibold text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all">
                Contact
              </Link>
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/plan">
                <button className="inline-flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-body font-black text-xs px-4 py-2.5 rounded-full transition-all shadow-sm shadow-yellow-200 hover:shadow-yellow-300">
                  <Compass className="h-3.5 w-3.5" />
                  Plan Trip
                </button>
              </Link>
              <Link href="/guides">
                <button className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-body font-bold text-xs px-4 py-2.5 rounded-full transition-all shadow-sm shadow-blue-200 hover:shadow-blue-300">
                  Browse Guides <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-1">
              <Link href="/" onClick={() => setMobileOpen(false)}
                className="block font-body text-sm font-semibold text-gray-700 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                Home
              </Link>

              {/* Guides section */}
              <div>
                <div className="flex items-center gap-2 px-3 py-2.5">
                  <MapPin className="h-3.5 w-3.5 text-blue-600" />
                  <span className="font-body text-xs font-black uppercase tracking-widest text-blue-600">Travel Guides</span>
                </div>
                <div className="ml-2 grid grid-cols-2 gap-1">
                  {continents.map((c) => (
                    <Link key={c.slug} href={`/guides/${c.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors">
                      <span className="text-base">{c.icon}</span>
                      <span className="font-body text-sm font-semibold text-gray-700">{c.name}</span>
                    </Link>
                  ))}
                </div>
                <Link href="/guides" onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 mx-3 mt-2 px-3 py-2 rounded-xl bg-blue-50 text-blue-600 font-body text-sm font-bold hover:bg-blue-100">
                  <ArrowRight className="h-3.5 w-3.5" /> Browse all guides
                </Link>
              </div>

              <div className="h-px bg-gray-100 mx-3" />

              {/* Plan Trip — highlighted in mobile */}
              <Link href="/plan" onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 font-body text-sm font-bold text-gray-900 px-3 py-2.5 rounded-xl bg-yellow-50 border border-yellow-100 hover:bg-yellow-100 transition-colors">
                <Compass className="h-4 w-4 text-yellow-500" />
                Plan Your Trip
                <span className="ml-auto bg-yellow-400 text-gray-900 text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">New</span>
              </Link>

              <Link href="/youtube" onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 font-body text-sm font-semibold text-gray-700 px-3 py-2.5 rounded-xl hover:bg-gray-50">
                <Youtube className="h-4 w-4 text-red-500" /> YouTube
              </Link>
              <Link href="/travel-essentials" onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 font-body text-sm font-semibold text-gray-700 px-3 py-2.5 rounded-xl hover:bg-gray-50">
                <ShoppingBag className="h-4 w-4 text-green-500" /> Travel Essentials
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                className="block font-body text-sm font-semibold text-gray-700 px-3 py-2.5 rounded-xl hover:bg-gray-50">
                Contact
              </Link>

              <div className="pt-2 flex flex-col gap-2">
                <Link href="/plan" onClick={() => setMobileOpen(false)}>
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-body font-black text-sm px-4 py-3 rounded-2xl transition-all">
                    <Compass className="h-4 w-4" /> Plan Your Trip
                  </button>
                </Link>
                <Link href="/guides" onClick={() => setMobileOpen(false)}>
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-body font-bold text-sm px-4 py-3 rounded-2xl transition-all">
                    Browse All Guides <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}