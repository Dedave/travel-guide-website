"use client";

import { use, useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AffiliateLinks from "@/components/AffiliateLinks";
import {
  ArrowLeft,
  Star,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  Globe,
  BookOpen,
  Share2,
  ShoppingCart,
  Package,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Heart,
  Camera,
  Compass,
  Shield,
  RotateCcw,
  Truck,
} from "lucide-react";
import { getGuide } from "@/data/guidesData";

interface GuideDetailPageProps {
  params: Promise<{
    continent: string;
    guide: string;
  }>;
}

export default function GuideDetailPage({ params }: GuideDetailPageProps) {
  const resolvedParams = use(params);
  const guide = getGuide(resolvedParams.continent, resolvedParams.guide);
  const [selectedFormat, setSelectedFormat] = useState<"ebook" | "paperback" | "bundle">("bundle");

  if (!guide) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="mx-auto max-w-7xl px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Guide not found</h1>
          <p className="text-gray-600 mb-8">The guide you're looking for doesn't exist or has been moved.</p>
          <Link href="/guides">
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Browse All Guides
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formats = [
    {
      id: "ebook" as const,
      label: "Digital PDF",
      price: 14.99,
      originalPrice: 24.99,
      icon: BookOpen,
      perks: ["Instant download", "Read on any device", "Searchable & zoomable", "Lifetime access"],
    },
    {
      id: "paperback" as const,
      label: "Paperback Book",
      price: 34.99,
      originalPrice: 49.99,
      icon: Package,
      perks: ["Premium print quality", "Ships worldwide", "Lay-flat binding", "Full-color photography"],
    },
    {
      id: "bundle" as const,
      label: "PDF + Paperback",
      price: 44.99,
      originalPrice: 74.99,
      icon: Sparkles,
      perks: ["Best value deal", "Instant PDF access", "Physical copy ships", "Bonus digital maps"],
      badge: "Most Popular",
    },
  ];

  const selected = formats.find((f) => f.id === selectedFormat)!;
  const savings = Math.round((1 - selected.price / selected.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative h-[85vh] min-h-[580px] overflow-hidden">
        <img
          src={guide.heroImage}
          alt={guide.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/25 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />

        <div className="relative h-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto w-full">
          <div>
            <Link href={`/guides/${resolvedParams.continent}`}>
              <button className="inline-flex items-center gap-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all group">
                <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
                Back to {guide.continent}
              </button>
            </Link>
          </div>

          <div className="pb-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md">
                <Compass className="h-3 w-3" />
                {guide.continent}
              </span>
              <div className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm shadow-md px-3 py-1.5 rounded-full">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-gray-900 text-xs font-bold">{guide.rating}</span>
                <span className="text-gray-400 text-xs">· {guide.downloads} readers</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 drop-shadow-lg">
              {guide.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 font-light drop-shadow max-w-2xl">
              {guide.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#purchase">
                <button className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-lg hover:shadow-xl transition-all">
                  <ShoppingCart className="h-4 w-4" />
                  Get This Guide
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </a>
              <a href="#destinations" className="text-white/70 hover:text-white text-sm font-medium underline underline-offset-4 transition-colors">
                Preview contents ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK FACTS BAR ── */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 shadow-lg sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-4 gap-x-2 text-center">
            {[
              { icon: Calendar, label: "Best Time", val: guide.quickFacts.bestTime },
              { icon: Clock, label: "Duration", val: guide.quickFacts.duration },
              { icon: DollarSign, label: "Budget", val: guide.quickFacts.budget },
              { icon: MapPin, label: "Places", val: `${guide.quickFacts.highlights}+ Spots` },
              { icon: Globe, label: "Language", val: guide.quickFacts.language },
              { icon: DollarSign, label: "Currency", val: guide.quickFacts.currency },
            ].map((fact, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <fact.icon className="h-4 w-4 text-yellow-300" />
                <div className="text-[10px] text-blue-200 font-medium uppercase tracking-wider">{fact.label}</div>
                <div className="text-xs font-semibold leading-tight">{fact.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW + BOOK MOCKUP ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              <p className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase mb-3">About This Guide</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-5">
                Your Complete {guide.continent} Travel Companion
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{guide.overview}</p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: guide.rating, label: "Star Rating", icon: Star, color: "text-yellow-500" },
                  { val: guide.downloads, label: "Happy Readers", icon: Heart, color: "text-red-500" },
                  { val: `${guide.pages}`, label: "Pages", icon: BookOpen, color: "text-blue-600" },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
                    <s.icon className={`h-5 w-5 mx-auto mb-2 ${s.color} ${i === 0 ? "fill-yellow-400" : i === 1 ? "fill-red-400" : ""}`} />
                    <div className="text-2xl font-bold text-gray-900">{s.val}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-56 sm:w-64">
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-44 h-6 bg-blue-200/60 blur-2xl rounded-full" />
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200">
                  <img src={guide.heroImage} alt={guide.title} className="w-full aspect-[3/4] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute top-0 left-0 bottom-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-[9px] text-blue-300 font-bold tracking-widest uppercase mb-1">
                      {guide.continent} · Travel Guide
                    </div>
                    <div className="text-white font-bold text-sm leading-tight mb-2">{guide.title}</div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 bg-yellow-400 text-gray-900 text-[10px] font-black uppercase tracking-wider px-2.5 py-1.5 rounded-xl shadow-md rotate-3">
                  {guide.pages} Pages
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase mb-2">Inside the Guide</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Must-Visit Destinations</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">
              Every location is covered with practical tips, maps, and curated recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guide.destinations.map((dest, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-shadow ${idx === 0 ? "md:col-span-2" : ""}`}
                style={{ aspectRatio: idx === 0 ? "21/9" : "4/3" }}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{dest.name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-2">{dest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS + TIPS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase mb-3">What's Covered</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{guide.highlights.length} Curated Experiences</h2>
              <div className="space-y-3">
                {guide.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:border-blue-200 hover:shadow-md transition-all group">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-700 text-sm leading-relaxed">{h}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase mb-3">Insider Knowledge</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Pro Tips from Experts</h2>
              <div className="space-y-3">
                {guide.tips.slice(0, 8).map((tip, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:border-blue-200 hover:shadow-md transition-all">
                    <span className="text-blue-600 font-black text-xs shrink-0 mt-0.5 w-5 text-right">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESSENTIAL INFO ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase mb-2">Practical Information</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Everything You Need to Know</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guide.essentialInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-blue-200 hover:shadow-md transition-all group">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900 font-bold mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AFFILIATE LINKS ── Book everything for your trip ── */}
      <AffiliateLinks
        destination={guide.country ?? guide.continent}
        country={guide.countrySlug}
        continent={guide.continent}
      />

      {/* ── PURCHASE SECTION (dark band) ── */}
      <section id="purchase" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-yellow-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">Get Your Copy</p>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              Start Your {guide.continent} Journey
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Choose your format below. Every purchase includes expert itineraries, hand-picked insider tips, and full destination coverage.
            </p>
          </div>

          {/* Format cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {formats.map((fmt) => {
              const Icon = fmt.icon;
              const isSelected = selectedFormat === fmt.id;
              const savePct = Math.round((1 - fmt.price / fmt.originalPrice) * 100);
              return (
                <button
                  key={fmt.id}
                  onClick={() => setSelectedFormat(fmt.id)}
                  className={`relative text-left rounded-2xl border-2 p-6 transition-all cursor-pointer ${
                    isSelected
                      ? "border-yellow-400 bg-yellow-400/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  {fmt.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-yellow-400 text-gray-900 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap shadow">
                        {fmt.badge}
                      </span>
                    </div>
                  )}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${isSelected ? "bg-yellow-400" : "bg-white/10"}`}>
                    <Icon className={`h-5 w-5 ${isSelected ? "text-gray-900" : "text-white"}`} />
                  </div>
                  <div className="text-white font-bold text-sm mb-0.5">{fmt.label}</div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className={`text-2xl font-black ${isSelected ? "text-yellow-400" : "text-white"}`}>
                      ${fmt.price}
                    </span>
                    <span className="text-gray-500 text-sm line-through">${fmt.originalPrice}</span>
                  </div>
                  <div className="text-green-400 text-[10px] font-bold mb-4">Save {savePct}%</div>
                  <ul className="space-y-2">
                    {fmt.perks.map((perk, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
                        <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 ${isSelected ? "text-yellow-400" : "text-gray-600"}`} />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>

          {/* CTA block */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <p className="text-gray-400 text-sm mb-1">
                  Selected: <span className="text-white font-semibold">{selected.label}</span>
                </p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl font-black text-white">${selected.price}</span>
                  <span className="text-gray-500 line-through text-xl">${selected.originalPrice}</span>
                  <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full">
                    {savings}% OFF
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  {guide.pages}-page guide · {guide.rating}★ · {guide.downloads} happy readers
                </p>
              </div>

              <div className="flex flex-col gap-3 w-full lg:w-auto min-w-[260px]">
                <a
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black px-8 py-4 rounded-2xl text-sm tracking-wide transition-all shadow-lg hover:shadow-xl"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Buy on Amazon
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="https://gumroad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl text-sm tracking-wide transition-all"
                >
                  <BookOpen className="h-4 w-4" />
                  Buy PDF Directly
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <button
                  className="inline-flex items-center justify-center gap-2 text-gray-500 hover:text-gray-300 text-xs font-medium transition-colors"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: guide.title, text: guide.description, url: window.location.href });
                    } else {
                      navigator.clipboard?.writeText(window.location.href);
                    }
                  }}
                >
                  <Share2 className="h-3.5 w-3.5" />
                  Share this guide
                </button>
              </div>
            </div>

            {/* Trust signals */}
            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Shield, label: "Secure checkout" },
                { icon: Truck, label: "Free shipping $50+" },
                { icon: RotateCcw, label: "30-day money back" },
                { icon: Star, label: `${guide.rating}★ avg. rating` },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-400 text-xs">
                  <t.icon className="h-4 w-4 text-yellow-400 shrink-0" />
                  {t.label}
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-gray-600 text-xs mt-6">
            PDF delivered via Gumroad · Paperback fulfilled via Amazon KDP ·{" "}
            <Link href="/contact" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">
              Questions? Contact us
            </Link>
          </p>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 mb-6">
            <Camera className="h-4 w-4 text-blue-600" />
            <span className="text-gray-500 text-sm font-medium">Destination previews from the guide</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {guide.destinations.map((dest, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl aspect-square shadow-sm">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-end p-3">
                  <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0 duration-200">
                    {dest.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BROWSE MORE CTA ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-bold text-lg">Explore more {guide.continent} guides</h3>
            <p className="text-blue-100 text-sm">We have more destinations ready for you.</p>
          </div>
          <Link href={`/guides/${resolvedParams.continent}`}>
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-6 py-3 rounded-full text-sm hover:bg-blue-50 transition-colors shadow whitespace-nowrap">
              Browse all {guide.continent} guides
              <ChevronRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}