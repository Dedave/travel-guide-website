"use client";

import Link from "next/link";
import { ShoppingCart, BookOpen, ChevronRight } from "lucide-react";

interface InlineCTAProps {
  variant: "overview" | "destinations" | "tips";
  continentSlug: string;
  guideId: string;
  guideName: string;
  price?: string;
  destinationCount?: number;
  tipCount?: number;
}

const configs = {
  overview: {
    emoji: "🗺️",
    heading: (name: string) => `Ready to plan your ${name} trip?`,
    sub: "Get every itinerary, map, and insider tip in one beautifully designed guide.",
    cta: "Get the Guide",
    bg: "bg-blue-600",
  },
  destinations: {
    emoji: "📍",
    heading: (_: string, count?: number) =>
      `${count ?? "All"} destinations covered in full detail`,
    sub: "Every spot includes practical logistics, best times, what to avoid, and photo tips.",
    cta: "Get the Full Guide",
    bg: "bg-gray-900",
  },
  tips: {
    emoji: "💡",
    heading: () => "Save these tips — and get 100+ more",
    sub: "The complete guide includes expert itineraries, budget breakdowns, and safety essentials.",
    cta: "Download the Guide",
    bg: "bg-blue-600",
  },
};

export default function InlineCTA({
  variant,
  continentSlug,
  guideId,
  guideName,
  price = "$14.99",
  destinationCount,
  tipCount,
}: InlineCTAProps) {
  const cfg = configs[variant];
  const heading =
    variant === "destinations"
      ? cfg.heading(guideName, destinationCount)
      : cfg.heading(guideName, tipCount);

  return (
    <div className={`${cfg.bg} rounded-2xl p-6 sm:p-8 my-4 mx-4 sm:mx-6 lg:mx-8`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <span className="text-3xl shrink-0">{cfg.emoji}</span>
          <div>
            <h3 className="text-white font-bold text-lg leading-tight mb-1">
              {heading}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              {cfg.sub}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right hidden sm:block">
            <div className="text-white/50 text-xs">From</div>
            <div className="text-white font-black text-xl">{price}</div>
          </div>
          <a href="#purchase">
            <button className="group inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black text-sm px-6 py-3 rounded-full transition-all shadow-lg whitespace-nowrap">
              <ShoppingCart className="h-4 w-4" />
              {cfg.cta}
              <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}