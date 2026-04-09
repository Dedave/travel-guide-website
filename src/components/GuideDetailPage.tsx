"use client";

import Link from "next/link";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowLeft, Star, MapPin, Calendar, Clock, DollarSign,
  Globe, BookOpen, ChevronRight, FileText, Shield,
  RotateCcw, Truck, Check, Users, ShoppingCart,
} from "lucide-react";
import { getGuide } from "@/data/guidesData";

interface GuideDetailPageProps {
  params: { continent: string; guide: string };
}

export default function GuideDetailPage({ params }: GuideDetailPageProps) {
  const guide = getGuide(params.continent, params.guide);
  const [selectedFormat, setSelectedFormat] = useState<"pdf"|"hardcover"|"bundle">("bundle");

  const formats = {
    pdf:       { label: "Digital PDF",  price: "$14.99", original: null,     savings: null,    desc: "Instant download" },
    hardcover: { label: "Hardcover",    price: "$34.99", original: null,     savings: null,    desc: "Printed & shipped" },
    bundle:    { label: "Bundle",       price: "$44.99", original: "$49.98", savings: "$4.99", desc: "PDF + Hardcover" },
  };

  if (!guide) {
    return (
      <div className="min-h-screen bg-white">
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap'); .font-display{font-family:'Playfair Display',Georgia,serif;} .font-body{font-family:'DM Sans',system-ui,sans-serif;}`}</style>
        <Navigation />
        <div className="mx-auto max-w-7xl px-4 py-24 text-center">
          <h1 className="font-display text-5xl font-black text-gray-900 mb-4">Guide not found</h1>
          <p className="text-gray-500 font-body mb-8">The guide you're looking for doesn't exist or has been moved.</p>
          <Link href="/guides"><button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold font-body px-6 py-3 rounded-full transition-colors">Browse All Guides <ChevronRight className="h-4 w-4" /></button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const fmt = formats[selectedFormat];

  return (
    <div className="min-h-screen bg-white font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .font-display{font-family:'Playfair Display',Georgia,serif;}
        .font-body{font-family:'DM Sans',system-ui,sans-serif;}
        body{font-family:'DM Sans',system-ui,sans-serif;}
        .scrollbar-hide::-webkit-scrollbar{display:none;}
        .scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none;}
      `}</style>
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative h-[92vh] min-h-[620px] overflow-hidden">
        <img src={guide.heroImage} alt={guide.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/10 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        <div className="absolute top-6 left-4 sm:left-8 lg:left-12">
          <Link href={`/guides/${params.continent}`}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white font-body text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/25 transition-all">
            <ArrowLeft className="h-3.5 w-3.5" />{guide.continent} guides
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-20 pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              {/* Country flag + continent badge */}
              {guide.countryFlag && (
                <span className="text-2xl">{guide.countryFlag}</span>
              )}
              <span className="bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full font-body">
                {guide.country ?? guide.continent}
              </span>
              <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[10px] font-bold px-3 py-1.5 rounded-full font-body">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />{guide.rating} · {guide.downloads} readers
              </div>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-black text-white leading-[0.9] mb-3 drop-shadow-lg">{guide.title}</h1>
            <p className="text-white/80 font-body text-xl font-light leading-relaxed max-w-xl">{guide.subtitle}</p>
          </div>
        </div>
      </section>

      {/* ── QUICK FACTS BAR ── */}
      <section className="sticky top-14 z-40 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide py-3.5">
            {[
              {icon:Calendar,   label:"Best Time", value:guide.quickFacts.bestTime},
              {icon:Clock,      label:"Duration",  value:guide.quickFacts.duration},
              {icon:DollarSign, label:"Budget",    value:guide.quickFacts.budget},
              {icon:MapPin,     label:"Highlights",value:`${guide.quickFacts.highlights}+ places`},
              {icon:Globe,      label:"Language",  value:guide.quickFacts.language},
              {icon:DollarSign, label:"Currency",  value:guide.quickFacts.currency},
            ].map((f,i) => (
              <div key={i} className="flex items-center gap-2.5 shrink-0">
                {i>0 && <div className="h-6 w-px bg-white/20 shrink-0" />}
                <f.icon className="h-3.5 w-3.5 text-yellow-300 shrink-0" />
                <div>
                  <div className="text-white/50 text-[9px] font-bold uppercase tracking-widest font-body leading-none">{f.label}</div>
                  <div className="text-white font-bold text-xs font-body leading-tight mt-0.5">{f.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-5"><div className="h-px w-6 bg-blue-600" /><span className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase font-body">About This Guide</span></div>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">{guide.title}</h2>
              <p className="text-gray-500 font-body text-lg leading-relaxed mb-10">{guide.overview}</p>
              <div className="flex items-center gap-8">
                {[
                  {icon:Star,     val:guide.rating,      label:"Rating",  color:"text-yellow-500", fill:true},
                  {icon:Users,    val:guide.downloads,   label:"Readers", color:"text-blue-600",   fill:false},
                  {icon:FileText, val:`${guide.pages}p`, label:"Pages",   color:"text-purple-600", fill:false},
                ].map((s,i) => (
                  <div key={i} className="flex items-center gap-2">
                    <s.icon className={`h-5 w-5 ${s.color} ${s.fill?"fill-yellow-400":""}`} />
                    <div>
                      <div className="font-display text-xl font-black text-gray-900">{s.val}</div>
                      <div className="text-gray-400 text-xs font-body">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-52 aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.18)] rotate-2">
                  <img src={guide.heroImage} alt={guide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4"><div className="font-display text-sm font-black text-white leading-tight">{guide.title}</div></div>
                </div>
                <div className="absolute -top-3 -right-3 w-14 h-14 bg-yellow-400 rounded-full flex flex-col items-center justify-center shadow-lg -rotate-12">
                  <div className="font-display text-lg font-black text-gray-900 leading-none">{guide.pages}</div>
                  <div className="text-gray-700 text-[8px] font-bold uppercase tracking-wide font-body">pages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS — Chapter X labels REMOVED ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-4"><div className="h-px w-6 bg-blue-600" /><span className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase font-body">Inside the Guide</span></div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-14">Must-Visit Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {guide.destinations.map((dest, idx) => (
              <div key={idx} className={`group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${idx===0?"md:col-span-2 h-[400px]":"h-[300px]"}`}>
                <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                {/* ── No "Chapter X" badge here — destination name speaks for itself ── */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className={`font-display font-black text-white leading-tight mb-2 ${idx===0?"text-3xl":"text-xl"}`}>{dest.name}</h3>
                  <p className="text-white/65 font-body text-sm leading-relaxed line-clamp-2">{dest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS + TIPS ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-2 mb-5"><div className="h-px w-6 bg-green-500" /><span className="text-green-600 text-xs font-bold tracking-[0.25em] uppercase font-body">What's Inside</span></div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 mb-8">Top Highlights</h2>
              <div className="space-y-3">
                {guide.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-green-50 border border-green-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-gray-700 font-body text-sm leading-relaxed pt-1">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-5"><div className="h-px w-6 bg-amber-500" /><span className="text-amber-600 text-xs font-bold tracking-[0.25em] uppercase font-body">Insider Knowledge</span></div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 mb-8">Expert Tips</h2>
              <div className="space-y-4">
                {guide.tips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-amber-50 border border-amber-100 rounded-2xl">
                    <div className="font-display text-2xl font-black text-amber-300 leading-none shrink-0 w-8 text-center">{String(idx+1).padStart(2,"0")}</div>
                    <p className="text-gray-700 font-body text-sm leading-relaxed pt-1">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESSENTIAL INFO ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-4"><div className="h-px w-6 bg-blue-600" /><span className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase font-body">Need to Know</span></div>
          <h2 className="font-display text-4xl font-black text-gray-900 mb-12">Essential Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guide.essentialInfo.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mb-5">
                    <IconComponent className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-display text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PURCHASE — dark band ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-yellow-400" />
              <span className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase font-body">Get the Full Guide</span>
              <div className="h-px w-8 bg-yellow-400" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
              Your Adventure Starts<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">With This Guide.</span>
            </h2>
            <p className="text-gray-400 font-body text-lg max-w-xl mx-auto leading-relaxed">
              {guide.pages} pages of on-the-ground research, detailed maps, itineraries, and insider tips.
            </p>
          </div>

          {/* Format selector */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {(["pdf","hardcover","bundle"] as const).map((f) => {
              const isActive = selectedFormat === f;
              const fm = formats[f];
              return (
                <button key={f} onClick={() => setSelectedFormat(f)}
                  className={`relative p-4 rounded-2xl border-2 text-left transition-all ${isActive?"border-yellow-400 bg-yellow-400/10":"border-white/10 bg-white/5 hover:border-white/25"}`}>
                  {f==="bundle" && <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full font-body">Most Popular</div>}
                  <div className={`font-body text-xs font-black uppercase tracking-widest mb-1 ${isActive?"text-yellow-400":"text-gray-500"}`}>{fm.label}</div>
                  <div className="font-display text-2xl font-black text-white">{fm.price}</div>
                  {fm.savings && <div className="text-green-400 text-[10px] font-bold font-body mt-0.5">Save {fm.savings}</div>}
                  <div className="text-gray-500 text-[10px] font-body mt-0.5">{fm.desc}</div>
                  {isActive && <div className="absolute top-3 right-3 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center"><Check className="h-2.5 w-2.5 text-gray-900" /></div>}
                </button>
              );
            })}
          </div>

          {/* CTA card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-gray-400 font-body text-sm">{fmt.label}</div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-black text-white">{fmt.price}</span>
                  {fmt.original && <span className="text-gray-600 font-body text-sm line-through">{fmt.original}</span>}
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-yellow-400/15 border border-yellow-400/30 px-3 py-1.5 rounded-full">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-sm font-body">{guide.rating}</span>
                <span className="text-yellow-400/60 text-xs font-body">({guide.downloads} readers)</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <a href={guide.amazonUrl ?? "#"} target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black font-body text-sm px-6 py-4 rounded-2xl transition-all shadow-lg shadow-yellow-400/25">
                <ShoppingCart className="h-4 w-4" />Buy on Amazon<ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href={guide.gumroadUrl ?? "#"} target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold font-body text-sm px-6 py-4 rounded-2xl transition-all">
                <BookOpen className="h-4 w-4" />Buy PDF Directly<ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 pt-5 border-t border-white/8">
              {[{icon:Shield,label:"Secure checkout"},{icon:Truck,label:"Free shipping $50+"},{icon:RotateCcw,label:"30-day guarantee"},{icon:Star,label:`${guide.rating}★ rated`}].map((t,i) => (
                <div key={i} className="flex items-center gap-1.5 text-gray-500 text-xs font-body">
                  <t.icon className="h-3.5 w-3.5 text-gray-600" />{t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BROWSE MORE ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2"><div className="h-px w-6 bg-blue-600" /><span className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase font-body">Keep Exploring</span></div>
              <h3 className="font-display text-2xl font-black text-gray-900">More {guide.continent} guides</h3>
            </div>
            <Link href={`/guides/${params.continent}`}>
              <button className="inline-flex items-center gap-2 border border-gray-200 hover:border-blue-300 text-gray-600 hover:text-blue-600 font-semibold font-body text-sm px-5 py-2.5 rounded-full transition-all">
                View all <ChevronRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}