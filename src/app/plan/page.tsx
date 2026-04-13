"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Plane, Building2, Map, Car, Shield, Wifi,
  Search, ExternalLink, ChevronRight, Star,
  Zap, CheckCircle, ArrowRight, Globe, Sparkles,
} from "lucide-react";

/* ─── Affiliate config ─────────────────────────────────────────────────── */
const categories = [
  {
    id: "flights",
    label: "Flights",
    icon: Plane,
    gradient: "from-sky-400 to-blue-600",
    glow: "shadow-blue-500/30",
    description: "Search & compare every airline in seconds. No hidden fees.",
    partners: [
      {
        name: "Skyscanner",
        tagline: "Compare millions of flights instantly",
        emoji: "✈️",
        badge: "Most Popular",
        badgeColor: "bg-sky-500",
        note: "Free · No booking fees",
        url: (dest: string) =>
          dest
            ? `https://www.skyscanner.net/flights-to/${dest.toLowerCase().replace(/\s+/g, "-")}`
            : "https://www.skyscanner.net",
      },
    ],
  },
  {
    id: "hotels",
    label: "Hotels & Stays",
    icon: Building2,
    gradient: "from-violet-400 to-purple-600",
    glow: "shadow-purple-500/30",
    description: "28 million+ listings — hostels to 5-star resorts, guaranteed best price.",
    partners: [
      {
        name: "Booking.com",
        tagline: "28M+ listings worldwide",
        emoji: "🏨",
        badge: "Best for Europe",
        badgeColor: "bg-violet-500",
        note: "Free cancellation options",
        url: (dest: string) =>
          `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(dest || "world")}`,
      },
      {
        name: "Agoda",
        tagline: "Unbeatable rates across Asia",
        emoji: "🌏",
        badge: "Best for Asia",
        badgeColor: "bg-fuchsia-500",
        note: "Exclusive member deals",
        url: (dest: string) =>
          `https://www.agoda.com/search?city=${encodeURIComponent(dest || "")}`,
      },
    ],
  },
  {
    id: "tours",
    label: "Tours & Activities",
    icon: Map,
    gradient: "from-amber-400 to-orange-500",
    glow: "shadow-orange-500/30",
    description: "Skip the queues. Book local experiences vetted by real travelers.",
    partners: [
      {
        name: "GetYourGuide",
        tagline: "Skip-the-line tickets & expert tours",
        emoji: "🗺️",
        badge: "Editor's Pick",
        badgeColor: "bg-amber-500",
        note: "Free cancellation on most",
        url: (dest: string) =>
          `https://www.getyourguide.com/s/?q=${encodeURIComponent(dest || "")}&partner_id=VGDPALW&utm_medium=online_publisher`,
      },
      {
        name: "Viator",
        tagline: "300,000+ experiences worldwide",
        emoji: "🎯",
        badge: "Largest Selection",
        badgeColor: "bg-orange-500",
        note: "Book now, pay later",
        url: (dest: string) =>
          `https://www.viator.com/search/${encodeURIComponent(dest || "")}`,
      },
    ],
  },
  {
    id: "cars",
    label: "Car Rentals",
    icon: Car,
    gradient: "from-emerald-400 to-teal-600",
    glow: "shadow-emerald-500/30",
    description: "900+ rental companies compared. Drive at your own pace.",
    partners: [
      {
        name: "RentalCars.com",
        tagline: "Compare 900+ rental companies",
        emoji: "🚗",
        badge: "Best Rates",
        badgeColor: "bg-emerald-500",
        note: "No hidden fees guaranteed",
        url: (dest: string) =>
          `https://www.rentalcars.com/?dropCountry=${encodeURIComponent(dest || "")}`,
      },
    ],
  },
  {
    id: "insurance",
    label: "Travel Insurance",
    icon: Shield,
    gradient: "from-rose-400 to-pink-600",
    glow: "shadow-rose-500/30",
    description: "Don't leave home without it. Medical, cancellation & adventure sports covered.",
    partners: [
      {
        name: "SafetyWing",
        tagline: "Flexible, affordable nomad coverage",
        emoji: "🛡️",
        badge: "Best Value",
        badgeColor: "bg-rose-500",
        note: "From $45.08/month",
        url: () => "https://safetywing.com/nomad-insurance",
      },
      {
        name: "WorldNomads",
        tagline: "Adventure sports included",
        emoji: "🌐",
        badge: "Best for Adventure",
        badgeColor: "bg-pink-500",
        note: "150+ activities covered",
        url: () => "https://www.worldnomads.com/travel-insurance",
      },
    ],
  },
  {
    id: "esim",
    label: "eSIM & Data",
    icon: Wifi,
    gradient: "from-indigo-400 to-blue-700",
    glow: "shadow-indigo-500/30",
    description: "Stay connected in 70+ countries from $5. Install before you land.",
    partners: [
      {
        name: "Airalo",
        tagline: "eSIM for 70+ countries",
        emoji: "📱",
        badge: "Traveler Favourite",
        badgeColor: "bg-indigo-500",
        note: "Install before you board",
        url: (dest: string) =>
          `https://www.airalo.com/search?q=${encodeURIComponent(dest || "")}`,
      },
    ],
  },
];

/* ─── Popular destinations ─────────────────────────────────────────────── */
const popularDests = [
  { name: "Japan",       flag: "🇯🇵" },
  { name: "Italy",       flag: "🇮🇹" },
  { name: "Bali",        flag: "🇮🇩" },
  { name: "Thailand",    flag: "🇹🇭" },
  { name: "Maldives",    flag: "🇲🇻" },
  { name: "Morocco",     flag: "🇲🇦" },
  { name: "Greece",      flag: "🇬🇷" },
  { name: "Peru",        flag: "🇵🇪" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "Kenya",       flag: "🇰🇪" },
  { name: "Portugal",    flag: "🇵🇹" },
  { name: "Costa Rica",  flag: "🇨🇷" },
];

/* ─── Trust stats ──────────────────────────────────────────────────────── */
const trustStats = [
  { val: "6",      label: "Affiliate Partners",   icon: Sparkles },
  { val: "70+",   label: "Countries Covered",    icon: Globe    },
  { val: "100k+",  label: "Readers Helped",       icon: Star     },
  { val: "Zero",   label: "Hidden Booking Fees",  icon: CheckCircle },
];

export default function PlanYourTripPage() {
  const [destination, setDestination] = useState("");
  const [inputValue, setInputValue]   = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) setDestination(inputValue.trim());
  };

  const handleQuickSelect = (name: string) => {
    setInputValue(name);
    setDestination(name);
  };

  return (
    <div className="min-h-screen bg-gray-950 font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body    { font-family: 'DM Sans', system-ui, sans-serif; }
        body          { font-family: 'DM Sans', system-ui, sans-serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.5s ease forwards; }
        .fade-up-1 { animation-delay: 0.05s; opacity: 0; }
        .fade-up-2 { animation-delay: 0.12s; opacity: 0; }
        .fade-up-3 { animation-delay: 0.2s;  opacity: 0; }
        .fade-up-4 { animation-delay: 0.28s; opacity: 0; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Navigation />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-950 pt-16 pb-20">

        {/* Background grid texture */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">

          {/* Eyebrow */}
          <div className="fade-up fade-up-1 inline-flex items-center gap-2 bg-white/6 border border-white/10 text-yellow-400 text-xs font-bold tracking-[0.28em] uppercase px-4 py-2 rounded-full mb-8 font-body">
            <Zap className="h-3.5 w-3.5" />
            Your trip, fully sorted
          </div>

          {/* Headline */}
          <h1 className="fade-up fade-up-2 font-display text-5xl sm:text-7xl font-black text-white leading-[0.92] tracking-tight mb-6">
            Plan Your Trip.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">
              Book Everything.
            </span>
          </h1>

          <p className="fade-up fade-up-3 text-gray-400 font-body text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Type your destination below and every link updates instantly — flights, hotels, tours, insurance, car hire, and eSIM all deep-linked to where you're going.
          </p>

          {/* ── Live destination search ── */}
          <form onSubmit={handleSearch} className="fade-up fade-up-4 relative max-w-xl mx-auto mb-5">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
              <input
                type="text"
                placeholder="Where are you going? e.g. Tokyo, Bali, Paris…"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full bg-white/8 backdrop-blur-sm border border-white/15 text-white placeholder-gray-500 rounded-2xl pl-14 pr-36 py-4 text-sm font-body focus:outline-none focus:border-yellow-400/60 focus:bg-white/10 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black font-body text-xs px-5 py-2.5 rounded-xl transition-all whitespace-nowrap"
              >
                Find Deals <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </form>

          {/* Destination is set — confirmation pill */}
          {destination && (
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 text-xs font-bold px-4 py-2 rounded-full font-body mb-5">
              <CheckCircle className="h-3.5 w-3.5" />
              Showing deals for <span className="text-yellow-300">{destination}</span>
              <button onClick={() => { setDestination(""); setInputValue(""); }} className="ml-1 text-yellow-600 hover:text-yellow-400 transition-colors">✕</button>
            </div>
          )}

          {/* Quick-pick destinations */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="text-gray-600 text-xs font-body font-semibold">Popular:</span>
            {popularDests.map((d) => (
              <button
                key={d.name}
                onClick={() => handleQuickSelect(d.name)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold font-body border transition-all ${
                  destination === d.name
                    ? "bg-yellow-400/15 border-yellow-400/40 text-yellow-400"
                    : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/25 hover:bg-white/8"
                }`}
              >
                <span>{d.flag}</span>{d.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────────── */}
      <div className="border-y border-white/6 bg-white/3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {trustStats.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <s.icon className="h-4 w-4 text-yellow-400 mb-0.5" />
                <div className="font-display text-xl font-black text-white">{s.val}</div>
                <div className="text-gray-500 text-[10px] font-body uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── AFFILIATE CARDS ───────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Section header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-6 bg-yellow-400" />
            <span className="text-yellow-400 text-xs font-bold tracking-[0.25em] uppercase font-body">
              {destination ? `Best deals for ${destination}` : "All categories"}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white mb-14 leading-tight">
            {destination
              ? <>Everything you need for <span className="text-yellow-400">{destination}</span></>
              : <>Book your entire trip<br />from one place</>
            }
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className={`group relative bg-white/5 border border-white/8 rounded-3xl overflow-hidden hover:border-white/16 hover:bg-white/7 transition-all duration-300 hover:shadow-2xl ${cat.glow}`}
                >
                  {/* Gradient header strip */}
                  <div className={`bg-gradient-to-r ${cat.gradient} px-6 pt-6 pb-5`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-display text-lg font-black text-white leading-tight">{cat.label}</div>
                        </div>
                      </div>
                      <div className="text-white/60 text-xs font-body text-right max-w-[120px] leading-tight hidden sm:block">
                        {cat.partners.length} partner{cat.partners.length > 1 ? "s" : ""}
                      </div>
                    </div>
                    <p className="text-white/75 text-xs font-body leading-relaxed mt-3">{cat.description}</p>
                  </div>

                  {/* Partner rows */}
                  <div className="p-4 space-y-3">
                    {cat.partners.map((partner) => (
                      <a
                        key={partner.name}
                        href={partner.url(destination)}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="group/card flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/18 rounded-2xl p-4 transition-all duration-200"
                      >
                        {/* Emoji logo */}
                        <div className="text-2xl shrink-0 w-10 text-center">{partner.emoji}</div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-0.5">
                            <span className="text-white font-bold text-sm font-body">{partner.name}</span>
                            <span className={`${partner.badgeColor} text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full font-body`}>
                              {partner.badge}
                            </span>
                          </div>
                          <p className="text-gray-500 text-[11px] font-body leading-tight">{partner.tagline}</p>
                          <p className="text-gray-600 text-[10px] font-body mt-1">{partner.note}</p>
                        </div>

                        {/* CTA */}
                        <div className="shrink-0">
                          <div className="inline-flex items-center gap-1 bg-white text-gray-900 hover:bg-yellow-400 font-black font-body text-[10px] px-3 py-2 rounded-xl group-hover/card:bg-yellow-400 transition-all whitespace-nowrap shadow">
                            {destination ? `Search ${destination}` : "Open"}
                            <ExternalLink className="h-2.5 w-2.5" />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/3 border-t border-white/6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-6 bg-blue-500" />
              <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase font-body">How it works</span>
              <div className="h-px w-6 bg-blue-500" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white">Three steps to your trip</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Pick your destination",
                body: "Type any city, country, or region into the search box above. Every link updates instantly to that destination.",
                color: "text-yellow-400",
                border: "border-yellow-400/20",
              },
              {
                step: "02",
                title: "Compare & book",
                body: "Click through to Skyscanner, Booking.com, GetYourGuide and the rest — all deep-linked to where you're going.",
                color: "text-blue-400",
                border: "border-blue-400/20",
              },
              {
                step: "03",
                title: "Read the guide",
                body: "Come back and grab the Wanderlust Guide for your destination — insider tips, itineraries, and essential info.",
                color: "text-purple-400",
                border: "border-purple-400/20",
              },
            ].map((item, i) => (
              <div key={i} className={`bg-white/5 border ${item.border} rounded-2xl p-7`}>
                <div className={`font-display text-4xl font-black ${item.color} mb-4 opacity-40`}>{item.step}</div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CROSS-SELL: TRAVEL GUIDES ─────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-blue-200 text-xs font-bold tracking-[0.3em] uppercase font-body mb-3">Don't forget</p>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
                Grab the guide for{" "}
                {destination
                  ? <span className="text-yellow-300">{destination}</span>
                  : "your destination"
                }
              </h2>
              <p className="text-blue-100/80 font-body text-base leading-relaxed">
                Our expert travel guides cover every destination with on-the-ground research, curated itineraries, insider tips, and full destination coverage — the perfect companion to your bookings.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/guides">
                <button className="group inline-flex items-center gap-2 bg-white hover:bg-yellow-400 text-gray-900 font-black font-body px-7 py-4 rounded-2xl text-sm transition-all shadow-lg whitespace-nowrap">
                  Browse All Guides
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </Link>
              <Link href="/travel-essentials">
                <button className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold font-body px-7 py-4 rounded-2xl text-sm transition-all whitespace-nowrap">
                  Travel Gear
                  <ChevronRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ───────────────────────────────────────────────────── */}
      <div className="pb-10 px-4">
        <p className="text-center text-gray-700 text-[11px] font-body max-w-2xl mx-auto leading-relaxed">
          <span className="font-bold text-gray-600">Affiliate disclosure:</span> Links on this page are affiliate links.
          When you book through them we may earn a small commission at no extra cost to you.
          We only feature services we'd personally recommend. Prices and availability are set entirely by the partner platforms.
        </p>
      </div>

      <Footer />
    </div>
  );
}