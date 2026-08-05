"use client";

import {
  Clock,
  CheckCircle2,
  XCircle,
  Map,
  Utensils,
  Bus,
  Wallet,
  Sparkles,
  ShieldCheck,
  Download,
  ChevronRight,
} from "lucide-react";

interface GuideSalesSectionProps {
  continent: string;
  country: string;
  pages: number;
  destinationCount: number;
  tipCount: number;
  rating: number;
  downloads: string;
}

/* Persuasive sales block for guide pages:
   - "Stop wasting hours" hook (why you need this)
   - "What's inside" visual checklist
   - "Why better than free blogs" comparison
   - "Why trust Wanderlust" statement
   All CTAs jump to the existing #purchase section (Gumroad / Selar). */
export default function GuideSalesSection({
  continent,
  country,
  pages,
  destinationCount,
  tipCount,
  rating,
  downloads,
}: GuideSalesSectionProps) {
  const whatsInside = [
    { icon: Map, text: `Ready-made day-by-day itineraries across ${destinationCount}+ destinations` },
    { icon: Sparkles, text: "Hidden gems & local secrets most tourists never find" },
    { icon: Utensils, text: "Where to actually eat — local spots, not tourist traps" },
    { icon: Bus, text: "Getting-around & transport tips that save time and money" },
    { icon: Wallet, text: "Real budget breakdowns for every kind of traveler" },
    { icon: CheckCircle2, text: `${tipCount}+ insider pro-tips and things to avoid` },
  ];

  return (
    <>
      {/* ── WHY YOU NEED THIS — hook ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
            <Clock className="h-3.5 w-3.5" />
            Save 40+ Hours of Research
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5">
            Stop Wasting Hours Piecing Together Random Blogs
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Planning a trip to {country} means juggling dozens of tabs, outdated forum
            posts, and conflicting advice. This guide does the work for you — everything
            you need in one place, organized, current, and ready to use the moment you
            land.
          </p>
          <a href="#purchase">
            <button className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black font-body text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
              <Download className="h-4 w-4" />
              Get the {country} Guide Now
              <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </a>
        </div>
      </section>

      {/* ── WHAT'S INSIDE — checklist ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase mb-2">
              What&apos;s Inside
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900">
              Everything You Get in This {pages}-Page Guide
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {whatsInside.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-body pt-1.5">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BETTER THAN FREE BLOGS — comparison ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase mb-2">
              Why Pay When Blogs Are Free?
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900">
              Free Blogs vs. The Wanderlust Guide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Free blogs */}
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7">
              <h3 className="font-display text-xl font-black text-gray-700 mb-5">
                Random Free Blogs
              </h3>
              <ul className="space-y-3.5">
                {[
                  "Scattered across dozens of sites & tabs",
                  "Often outdated prices and closed spots",
                  "Written to rank on Google, not to help you",
                  "No structure — hours of cross-checking",
                  "Hidden ads and affiliate clutter",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-500 text-sm font-body">
                    <XCircle className="h-5 w-5 text-gray-300 shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Wanderlust */}
            <div className="rounded-3xl border-2 border-blue-600 bg-blue-600 p-7 shadow-xl shadow-blue-600/20 relative">
              <span className="absolute -top-3 left-7 bg-yellow-400 text-gray-900 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Worth It
              </span>
              <h3 className="font-display text-xl font-black text-white mb-5">
                The Wanderlust {continent} Guide
              </h3>
              <ul className="space-y-3.5">
                {[
                  "Everything in one organized, offline-ready PDF",
                  "Researched on the ground & kept current",
                  "Built to make your trip better, not to sell ads",
                  "Day-by-day itineraries — zero guesswork",
                  `Trusted by ${downloads} travelers · ${rating}★ rated`,
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-white text-sm font-body">
                    <CheckCircle2 className="h-5 w-5 text-yellow-300 shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TRUST WANDERLUST ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white border border-gray-100 shadow-sm p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-7 w-7 text-green-600" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-black text-gray-900 mb-3">
                Why Travelers Trust Wanderlust
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Every Wanderlust guide is written by travelers who have actually walked the
                streets, eaten at the tables, and taken the trains — not assembled from
                Wikipedia. We&apos;ve helped over 10,000 readers plan smoother, richer trips
                across 50+ countries, and we keep our guides updated so your information is
                always current. If it&apos;s in the guide, we&apos;ve stood behind it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
