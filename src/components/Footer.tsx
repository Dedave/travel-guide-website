"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Plane, Youtube, Mail, Instagram, Facebook, Twitter,
  MapPin, BookOpen, ShoppingBag, MessageCircle, ChevronRight,
  Compass,
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const continents = [
    { name: "Africa",        slug: "africa",        icon: "🌍" },
    { name: "Europe",        slug: "europe",        icon: "🏰" },
    { name: "Asia",          slug: "asia",          icon: "🏯" },
    { name: "North America", slug: "north-america", icon: "🗽" },
    { name: "South America", slug: "south-america", icon: "🗿" },
    { name: "Oceania",       slug: "oceania",       icon: "🏝️" },
  ];

  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  );

  const quickLinks = [
    { label: "Home",               href: "/",                  icon: Plane    },
    { label: "All Travel Guides",  href: "/guides",            icon: BookOpen },
    // ── Plan Your Trip — affiliate hub ──
    { label: "Plan Your Trip",     href: "/plan",              icon: Compass  },
    { label: "YouTube Channel",    href: "/youtube",           icon: Youtube  },
    { label: "Travel Essentials",  href: "/travel-essentials", icon: ShoppingBag },
    { label: "Contact Us",         href: "/contact",           icon: MessageCircle },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* ── Top accent line ── */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />

      {/* ── Plan Trip banner inside footer ── */}
      <div className="bg-gradient-to-r from-yellow-400/10 to-amber-400/5 border-b border-yellow-400/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center shrink-0">
              <Compass className="h-4 w-4 text-gray-900" />
            </div>
            <div>
              <p className="text-white text-sm font-bold leading-tight">Plan Your Trip</p>
              <p className="text-gray-400 text-xs">Flights · Hotels · Tours · Insurance · eSIM — all in one place</p>
            </div>
          </div>
          <Link href="/plan">
            <button className="inline-flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black text-xs px-5 py-2.5 rounded-full transition-all whitespace-nowrap shadow">
              Book Everything <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-14 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">

          {/* ── Brand ── */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="bg-blue-600 rounded-lg p-1.5 group-hover:bg-blue-500 transition-colors">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">Wanderlust Guides</span>
            </Link>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Your ultimate companion for discovering the world's most amazing destinations —
              from comprehensive travel guides to essential gear recommendations.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { href: "https://youtube.com/@wanderlustguides",   icon: Youtube,   hoverColor: "hover:text-red-400",  label: "YouTube"   },
                { href: "https://instagram.com/wanderlustguides",  icon: Instagram, hoverColor: "hover:text-pink-400", label: "Instagram" },
                { href: "https://facebook.com/wanderlustguides",   icon: Facebook,  hoverColor: "hover:text-blue-400", label: "Facebook"  },
                { href: "https://twitter.com/wanderlustguides",    icon: Twitter,   hoverColor: "hover:text-sky-400",  label: "Twitter"   },
                { href: "https://tiktok.com/@wanderlustguides",    icon: TikTokIcon,hoverColor: "hover:text-pink-400", label: "TikTok"    },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.hoverColor} hover:border-white/20 hover:bg-white/10 transition-all`}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group flex items-center gap-2 text-sm transition-colors ${
                      link.href === "/plan"
                        ? "text-yellow-400 hover:text-yellow-300 font-semibold"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <ChevronRight className={`h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${
                      link.href === "/plan" ? "text-yellow-400" : "text-blue-500"
                    }`} />
                    {link.label}
                    {link.href === "/plan" && (
                      <span className="ml-1 bg-yellow-400 text-gray-900 text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full">
                        New
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Travel Guides by Continent ── */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300 mb-5">
              Travel Guides
            </h3>
            <ul className="space-y-2.5">
              {continents.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/guides/${c.slug}`}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="text-base leading-none">{c.icon}</span>
                    {c.name}
                    <ChevronRight className="h-3 w-3 ml-auto text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              {/* Extra link: Plan trip from guides column too */}
              <li className="pt-1 border-t border-white/8 mt-1">
                <Link
                  href="/plan"
                  className="group flex items-center gap-2 text-sm text-yellow-500 hover:text-yellow-400 transition-colors font-semibold"
                >
                  <Compass className="h-3.5 w-3.5" />
                  Plan Your Trip
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Newsletter ── */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300 mb-5">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Get the latest travel guides and exclusive insider tips delivered straight to your inbox.
            </p>

            <form onSubmit={handleNewsletterSignup} className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-9 bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/8 transition-colors rounded-xl"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubscribed}
                className={`w-full rounded-xl font-semibold transition-all text-sm ${
                  isSubscribed
                    ? "bg-green-600 hover:bg-green-600 text-white"
                    : "bg-blue-600 hover:bg-blue-500 text-white"
                }`}
              >
                {isSubscribed ? <>✓ Subscribed!</> : <><Mail className="mr-2 h-3.5 w-3.5" />Subscribe</>}
              </Button>
            </form>

            <p className="mt-3 text-[11px] text-gray-600 leading-relaxed">
              No spam. Unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* ── Bottom row ── */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Wanderlust Guides. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            {[
              { label: "Privacy Policy",       href: "/privacy" },
              { label: "Terms of Service",     href: "/terms" },
              { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Affiliate disclaimer ── */}
        <div className="mt-6 rounded-xl bg-white/5 border border-white/8 px-5 py-4">
          <p className="text-[11px] text-gray-500 leading-relaxed">
            <span className="font-semibold text-gray-400">Affiliate Disclosure:</span>{" "}
            This website contains affiliate links. When you click on these links and make a purchase,
            we may earn a small commission at no extra cost to you. We only recommend products and
            destinations we genuinely believe in. Thank you for supporting Wanderlust Guides!
          </p>
        </div>
      </div>
    </footer>
  );
}