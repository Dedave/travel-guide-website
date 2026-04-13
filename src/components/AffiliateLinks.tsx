"use client";

import {
  Plane, Building2, Map, Car, Shield, Wifi,
  ExternalLink, ChevronRight, Star, Zap,
} from "lucide-react";

interface AffiliateLinksProps {
  destination?: string; // e.g. "Japan", "Paris", "Kyoto"
  country?: string;     // e.g. "japan", "france"
  continent?: string;   // e.g. "Asia", "Europe"
}

const affiliates = [
  {
    category: "Flights",
    icon: Plane,
    color: "from-sky-500 to-blue-600",
    lightColor: "bg-sky-50 border-sky-100",
    accent: "text-sky-600",
    badge: "Best Price Search",
    items: [
      {
        name: "Skyscanner",
        tagline: "Compare millions of flights instantly",
        logo: "✈",
        url: (dest: string) =>
          `https://www.skyscanner.net/flights/${dest.toLowerCase().replace(/\s+/g, "-")}`,
        cta: "Search Flights",
        note: "Free to use · No booking fees",
      },
    ],
  },
  {
    category: "Hotels & Stays",
    icon: Building2,
    color: "from-violet-500 to-purple-600",
    lightColor: "bg-violet-50 border-violet-100",
    accent: "text-violet-600",
    badge: "Lowest Price Guarantee",
    items: [
      {
        name: "Booking.com",
        tagline: "28+ million listings worldwide",
        logo: "🏨",
        url: (dest: string) =>
          `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(dest)}`,
        cta: "Search Hotels",
        note: "Free cancellation options",
      },
      {
        name: "Agoda",
        tagline: "Best prices in Asia & beyond",
        logo: "🌏",
        url: (dest: string) =>
          `https://www.agoda.com/search?city=${encodeURIComponent(dest)}`,
        cta: "Search Agoda",
        note: "Exclusive member deals",
      },
    ],
  },
  {
    category: "Tours & Activities",
    icon: Map,
    color: "from-amber-500 to-orange-500",
    lightColor: "bg-amber-50 border-amber-100",
    accent: "text-amber-600",
    badge: "Handpicked Experiences",
    items: [
      {
        name: "GetYourGuide",
        tagline: "Skip-the-line tickets & local tours",
        logo: "🗺",
        url: (dest: string) =>
          `https://www.getyourguide.com/s/?q=${encodeURIComponent(dest)}&partner_id=VGDPALW&utm_medium=online_publisher`,
        cta: "Find Activities",
        note: "Free cancellation on most tours",
      },
      {
        name: "Viator",
        tagline: "300,000+ experiences worldwide",
        logo: "🎯",
        url: (dest: string) =>
          `https://www.viator.com/search/${encodeURIComponent(dest)}`,
        cta: "Explore Tours",
        note: "Book now, pay later",
      },
    ],
  },
  {
    category: "Car Rentals",
    icon: Car,
    color: "from-emerald-500 to-teal-600",
    lightColor: "bg-emerald-50 border-emerald-100",
    accent: "text-emerald-600",
    badge: "Best Rates Compared",
    items: [
      {
        name: "RentalCars.com",
        tagline: "Compare 900+ rental companies",
        logo: "🚗",
        url: (dest: string) =>
          `https://www.rentalcars.com/?dropCountry=${encodeURIComponent(dest)}`,
        cta: "Compare Cars",
        note: "No hidden fees guaranteed",
      },
    ],
  },
  {
    category: "Travel Insurance",
    icon: Shield,
    color: "from-rose-500 to-pink-600",
    lightColor: "bg-rose-50 border-rose-100",
    accent: "text-rose-600",
    badge: "Don't Travel Without It",
    items: [
      {
        name: "SafetyWing",
        tagline: "Flexible coverage for nomads & travelers",
        logo: "🛡",
        url: () => "https://safetywing.com/nomad-insurance",
        cta: "Get Covered",
        note: "From $45.08/month",
      },
      {
        name: "WorldNomads",
        tagline: "Adventure sports coverage included",
        logo: "🌐",
        url: () => "https://www.worldnomads.com/travel-insurance",
        cta: "Get a Quote",
        note: "150+ activities covered",
      },
    ],
  },
  {
    category: "eSIM & Data",
    icon: Wifi,
    color: "from-indigo-500 to-blue-600",
    lightColor: "bg-indigo-50 border-indigo-100",
    accent: "text-indigo-600",
    badge: "Stay Connected Everywhere",
    items: [
      {
        name: "Airalo",
        tagline: "eSIM for 70+ countries from $5",
        logo: "📱",
        url: (dest: string) =>
          `https://www.airalo.com/search?q=${encodeURIComponent(dest)}`,
        cta: "Get Your eSIM",
        note: "Install before you land",
      },
    ],
  },
];

export default function AffiliateLinks({ destination = "your destination", country = "", continent = "" }: AffiliateLinksProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-5 font-body">
            <Zap className="h-3.5 w-3.5" />
            Plan Your Trip
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
            Everything You Need to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
              Book Your Trip to {destination}
            </span>
          </h2>
          <p className="text-gray-400 font-body text-lg max-w-xl mx-auto leading-relaxed">
            We partner with the world's best travel platforms so you get the lowest prices, best coverage, and seamless booking — all in one place.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            {[
              { icon: Star, label: "Vetted partners only" },
              { icon: Shield, label: "Secure booking" },
              { icon: Zap, label: "Best price guaranteed" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-500 text-xs font-body">
                <item.icon className="h-3.5 w-3.5 text-yellow-400" />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Affiliate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {affiliates.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.category}
                className="group bg-white/5 border border-white/8 rounded-3xl overflow-hidden hover:border-white/15 hover:bg-white/8 transition-all duration-300"
              >
                {/* Card header */}
                <div className={`bg-gradient-to-r ${section.color} p-5`}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                        <Icon className="h-4.5 w-4.5 text-white" style={{ height: "18px", width: "18px" }} />
                      </div>
                      <div>
                        <div className="text-white font-display font-black text-base leading-tight">
                          {section.category}
                        </div>
                      </div>
                    </div>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full font-body">
                      {section.badge}
                    </span>
                  </div>
                </div>

                {/* Items */}
                <div className="p-4 space-y-3">
                  {section.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.url(destination)}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/15 rounded-2xl p-4 transition-all duration-200 group/item"
                    >
                      <div className="text-2xl shrink-0">{item.logo}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-white font-bold text-sm font-body">{item.name}</span>
                        </div>
                        <p className="text-gray-500 text-[11px] font-body leading-tight line-clamp-1">
                          {item.tagline}
                        </p>
                        <p className="text-gray-600 text-[10px] font-body mt-1">{item.note}</p>
                      </div>
                      <div className="shrink-0 flex flex-col items-end gap-1.5">
                        <div className="inline-flex items-center gap-1 bg-white text-gray-900 font-bold font-body text-[10px] px-3 py-1.5 rounded-full group-hover/item:bg-yellow-400 transition-all whitespace-nowrap">
                          {item.cta}
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

        {/* Disclaimer */}
        <p className="text-center text-gray-700 text-[11px] font-body mt-8 leading-relaxed max-w-2xl mx-auto">
          <span className="font-bold text-gray-600">Affiliate disclosure:</span> Some links above are affiliate links. When you book through them, we may earn a small commission at no extra cost to you. This helps keep our guides free and updated. We only recommend services we'd use ourselves.
        </p>
      </div>
    </section>
  );
}