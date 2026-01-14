"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Plane, Youtube, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Wanderlust Guides</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Your ultimate companion for discovering the world's most amazing destinations.
              From comprehensive travel guides to essential gear recommendations.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              <Link
                href="https://youtube.com/@wanderlustguides"
                className="text-gray-400 hover:text-red-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-6 w-6" />
              </Link>
              <Link
                href="https://instagram.com/wanderlustguides"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://facebook.com/wanderlustguides"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://twitter.com/wanderlustguides"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <div className="mt-4 space-y-2">
              <Link href="/" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/guides/africa" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Travel Guides
              </Link>
              <Link href="/youtube" className="block text-sm text-gray-400 hover:text-white transition-colors">
                YouTube Channel
              </Link>
              <Link href="/travel-essentials" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Travel Essentials
              </Link>
              <Link href="/contact" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Travel Guides */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Travel Guides</h3>
            <div className="mt-4 space-y-2">
              <Link href="/guides/africa" className="block text-sm text-gray-400 hover:text-white transition-colors">
                🌍 Africa
              </Link>
              <Link href="/guides/europe" className="block text-sm text-gray-400 hover:text-white transition-colors">
                🏰 Europe
              </Link>
              <Link href="/guides/asia" className="block text-sm text-gray-400 hover:text-white transition-colors">
                🏯 Asia
              </Link>
              <Link href="/guides/north-america" className="block text-sm text-gray-400 hover:text-white transition-colors">
                🗽 North America
              </Link>
              <Link href="/guides/south-america" className="block text-sm text-gray-400 hover:text-white transition-colors">
                🗿 South America
              </Link>
              <Link href="/guides/oceania" className="block text-sm text-gray-400 hover:text-white transition-colors">
                🏝️ Oceania
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Stay Updated</h3>
            <p className="mt-4 text-sm text-gray-400">
              Get the latest travel guides and exclusive tips delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSignup} className="mt-4">
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? "Subscribed!" : "Subscribe"}
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Wanderlust Guides. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/affiliate-disclosure" className="text-gray-400 hover:text-white transition-colors">
              Affiliate Disclosure
            </Link>
          </div>
        </div>

        {/* Affiliate Disclaimer */}
        <div className="mt-6 rounded-lg bg-gray-800 p-4">
          <p className="text-xs text-gray-400">
            <strong>Affiliate Disclosure:</strong> This website contains affiliate links.
            When you click on these links and make a purchase, we may earn a commission at no extra cost to you.
            We only recommend products and services that we believe will add value to our readers.
            Thank you for supporting Wanderlust Guides!
          </p>
        </div>
      </div>
    </footer>
  );
}