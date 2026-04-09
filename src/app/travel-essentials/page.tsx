"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ShoppingBag, Backpack, Shirt, Camera, Shield,
  Heart, Star, ExternalLink, Package, ChevronRight,
  ArrowRight, Zap, CheckCircle2,
} from "lucide-react";

const products = {
  luggage: [
    { id: 1,  name: "Expandable Travel Backpack",      description: "40L capacity with USB charging port and dedicated laptop compartment. Our #1 pick for carry-on travel.",  price: "$45.99", rating: 4.8, reviews: 2341, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop", affiliate: "aliexpress", badges: ["Best Seller","USB Charging"] },
    { id: 2,  name: "Hardshell Carry-On Suitcase",     description: "Lightweight polycarbonate shell with 360° spinner wheels and built-in TSA combination lock.",               price: "$89.99", rating: 4.7, reviews: 1823, image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&h=600&fit=crop", affiliate: "aliexpress", badges: ["Durable","TSA Approved"] },
    { id: 3,  name: "Packing Cubes Set (6pcs)",        description: "Compression packing organizers — pack 30% more in the same bag. Game-changer for long trips.",             price: "$24.99", rating: 4.9, reviews: 3156, image: "https://images.unsplash.com/photo-1581362071042-f0f3f0b4e3e6?w=800&h=600&fit=crop", affiliate: "aliexpress", badges: ["Top Rated","Space Saver"] },
    { id: 4,  name: "Travel Toiletry Bag",             description: "Hanging waterproof organizer with multiple compartments — keeps bathroom essentials accessible.",            price: "$19.99", rating: 4.6, reviews: 987,  image: "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=800&h=600&fit=crop", affiliate: "shein",      badges: ["Waterproof"] },
  ],
  clothing: [
    { id: 5,  name: "Quick-Dry Travel Pants",          description: "Lightweight convertible pants with hidden zip security pockets. Converts to shorts in seconds.",           price: "$32.99", rating: 4.5, reviews: 1456, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=600&fit=crop", affiliate: "shein",      badges: ["Quick Dry","Convertible"] },
    { id: 6,  name: "Merino Wool Travel T-Shirt",      description: "Naturally odor-resistant, moisture-wicking. Wear it for days — no one will know.",                         price: "$28.99", rating: 4.8, reviews: 2103, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop", affiliate: "shein",      badges: ["Merino Wool","Odor Control"] },
    { id: 7,  name: "Packable Rain Jacket",            description: "Waterproof jacket that stuffs into its own pocket. Under 300g — you'll forget it's in your bag.",          price: "$39.99", rating: 4.7, reviews: 1678, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=600&fit=crop", affiliate: "shein",      badges: ["Waterproof","Packable"] },
    { id: 8,  name: "Travel Scarf with Hidden Pocket", description: "Stylish infinity scarf with secret RFID-safe zipper pocket for cash, cards, and your passport.",           price: "$18.99", rating: 4.6, reviews: 892,  image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&h=600&fit=crop", affiliate: "shein",      badges: ["Hidden Pocket","Stylish"] },
  ],
  tech: [
    { id: 9,  name: "Universal Travel Adapter",        description: "All-in-one adapter with 4 USB + 1 USB-C PD port. Works in 150+ countries. Never get stuck without power.", price: "$26.99", rating: 4.9, reviews: 4521, image: "https://images.unsplash.com/photo-1591290619762-d6b8f0529c81?w=800&h=600&fit=crop", affiliate: "aliexpress", badges: ["Universal","Best Seller"] },
    { id: 10, name: "Portable Power Bank 20000mAh",    description: "Fast-charging battery pack with LED display. Charges a phone 5x over on one fill.",                       price: "$34.99", rating: 4.7, reviews: 3267, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&h=600&fit=crop", affiliate: "aliexpress", badges: ["Fast Charge","High Capacity"] },
    { id: 11, name: "Noise Cancelling Earbuds",        description: "Wireless ANC earbuds with 30hr total battery life and compact travel case.",                               price: "$49.99", rating: 4.6, reviews: 2156, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=600&fit=crop", affiliate: "aliexpress", badges: ["ANC","Long Battery"] },
    { id: 12, name: "Travel Phone Tripod + Remote",    description: "Flexible tripod with Bluetooth shutter remote — perfect for solo travel photography.",                     price: "$15.99", rating: 4.5, reviews: 1834, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=600&fit=crop", affiliate: "aliexpress", badges: ["Versatile"] },
  ],
  accessories: [
    { id: 13, name: "Travel Neck Pillow with Hood",    description: "Memory foam pillow with built-in privacy hood for long-haul flights. A must on overnight routes.",         price: "$29.99", rating: 4.8, reviews: 2678, image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&h=600&fit=crop", affiliate: "aliexpress", badges: ["Memory Foam","Top Rated"] },
    { id: 14, name: "RFID Blocking Passport Holder",  description: "Genuine leather passport wallet with RFID chip protection — fits passport, cards, and boarding pass.",     price: "$16.99", rating: 4.7, reviews: 1923, image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&h=600&fit=crop", affiliate: "shein",      badges: ["RFID Protection","Leather"] },
    { id: 15, name: "Reusable Water Bottle + Filter", description: "Collapsible 600ml bottle with built-in filter — drink tap water anywhere. Saves plastic too.",             price: "$22.99", rating: 4.6, reviews: 1567, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=600&fit=crop", affiliate: "aliexpress", badges: ["Eco-Friendly","Filtered"] },
    { id: 16, name: "Microfiber Travel Towel Set",     description: "Quick-dry towels in 3 sizes with compact carry bag. Essential for hostels, beaches, and camping.",        price: "$21.99", rating: 4.8, reviews: 2341, image: "https://images.unsplash.com/photo-1585855903916-77c8be5b3e60?w=800&h=600&fit=crop", affiliate: "shein",      badges: ["Quick Dry","Compact"] },
  ],
};

const categories = [
  { id: "luggage",      name: "Luggage & Bags",  icon: Backpack, desc: "Carry everything. Weigh less.",  image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop" },
  { id: "clothing",    name: "Travel Clothing", icon: Shirt,    desc: "Pack light, look great.",         image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=400&fit=crop" },
  { id: "tech",        name: "Tech & Gadgets",  icon: Camera,   desc: "Stay charged, stay connected.",   image: "https://images.unsplash.com/photo-1591290619762-d6b8f0529c81?w=600&h=400&fit=crop" },
  { id: "accessories", name: "Accessories",     icon: Shield,   desc: "The details that matter most.",   image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=400&fit=crop" },
];

const affiliateConfig: Record<string, { label: string; bg: string }> = {
  aliexpress: { label: "Shop on AliExpress", bg: "bg-red-600 hover:bg-red-500" },
  shein:      { label: "Shop on SHEIN",      bg: "bg-gray-900 hover:bg-gray-700" },
};

export default function TravelEssentials() {
  const [activeCategory, setActiveCategory] = useState("luggage");
  const currentProducts = products[activeCategory as keyof typeof products];
  const currentCat = categories.find((c) => c.id === activeCategory)!;

  return (
    <div className="min-h-screen bg-white font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body    { font-family: 'DM Sans', system-ui, sans-serif; }
        body          { font-family: 'DM Sans', system-ui, sans-serif; }
      `}</style>

      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gray-950 min-h-[540px] flex items-end">
        <div className="absolute inset-0 grid grid-cols-4 opacity-[0.22] pointer-events-none">
          {["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=700&fit=crop","https://images.unsplash.com/photo-1591290619762-d6b8f0529c81?w=400&h=700&fit=crop","https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=700&fit=crop","https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=700&fit=crop"].map((src, i) => (
            <img key={i} src={src} alt="" className="w-full h-full object-cover" />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/40" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-green-400" />
              <span className="text-green-400 text-xs font-bold tracking-[0.3em] uppercase font-body">Gear Up for Your Next Trip</span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-black text-white leading-[0.9] mb-6">
              Travel<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Essentials.</span>
            </h1>
            <p className="text-gray-400 font-body text-lg leading-relaxed mb-10 max-w-lg">
              Every product personally tested on the road. Curated for travelers who care about quality, weight, and value.
            </p>
            <div className="flex flex-wrap gap-3">
              {[{icon:Star,label:"Verified Reviews"},{icon:CheckCircle2,label:"Traveler Tested"},{icon:Zap,label:"Fast Shipping"},{icon:Shield,label:"Secure Checkout"}].map((t,i) => (
                <div key={i} className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white/70 text-xs font-semibold font-body px-4 py-2 rounded-full">
                  <t.icon className="h-3.5 w-3.5 text-green-400" />{t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-6 bg-green-500" />
            <span className="text-green-600 text-xs font-bold tracking-[0.25em] uppercase font-body">Shop by Category</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                  className={`group relative overflow-hidden rounded-2xl h-40 text-left transition-all duration-300 ${isActive ? "ring-2 ring-blue-500 ring-offset-2 shadow-xl scale-[1.02]" : "hover:shadow-xl hover:-translate-y-0.5"}`}>
                  <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className={`absolute inset-0 transition-all duration-300 ${isActive ? "bg-black/60" : "bg-black/50 group-hover:bg-black/40"}`} />
                  {isActive && <div className="absolute top-3 right-3 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center"><CheckCircle2 className="h-3.5 w-3.5 text-white" /></div>}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <cat.icon className={`h-4 w-4 mb-1.5 ${isActive ? "text-blue-300" : "text-white/60"}`} />
                    <div className={`font-display font-bold text-sm leading-tight ${isActive ? "text-blue-200" : "text-white"}`}>{cat.name}</div>
                    <div className="text-white/45 text-[10px] font-body mt-0.5">{cat.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2"><div className="h-px w-6 bg-blue-600" /><span className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase font-body">{currentCat.name}</span></div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900">{currentCat.desc}</h2>
            </div>
            <span className="text-gray-400 font-body text-sm hidden sm:block">{currentProducts.length} products</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {currentProducts.map((product, i) => {
              const aff = affiliateConfig[product.affiliate];
              const isFeatured = i === 0;
              return (
                <div key={product.id} className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${isFeatured ? "md:col-span-2 lg:col-span-2" : ""}`}>
                  <div className={`relative overflow-hidden shrink-0 ${isFeatured ? "h-72" : "h-56"}`}>
                    <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                      {product.badges.slice(0,2).map((badge,j) => (
                        <span key={j} className="bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full font-body shadow">{badge}</span>
                      ))}
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-gray-950/80 backdrop-blur-sm text-yellow-400 font-black text-sm px-3 py-1.5 rounded-full font-body border border-yellow-400/20">{product.price}</span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className={`font-display font-bold text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors ${isFeatured ? "text-xl" : "text-base"}`}>{product.name}</h3>
                    <p className="text-gray-500 font-body text-sm leading-relaxed flex-1 mb-5 line-clamp-3">{product.description}</p>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5 shrink-0">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-gray-800 text-sm font-body">{product.rating}</span>
                        <span className="text-gray-400 text-xs font-body">({product.reviews.toLocaleString()})</span>
                      </div>
                      <a href="#" target="_blank" rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 ${aff.bg} text-white font-bold font-body text-xs px-4 py-2.5 rounded-full transition-all whitespace-nowrap`}>
                        {aff.label}<ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500" />
              <span className="text-green-400 text-xs font-bold tracking-[0.3em] uppercase font-body">Why Trust Our Picks</span>
              <div className="h-px w-8 bg-green-500" />
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
              We Test Everything<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Before We Recommend It.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {icon:Shield, title:"Secure Shopping", body:"Shop with confidence through verified, trusted partners worldwide.", color:"bg-blue-600", offset:""},
              {icon:Star,   title:"Verified Reviews",body:"Real ratings from real travelers — no fake reviews, no paid placements.", color:"bg-yellow-500",offset:"lg:mt-6"},
              {icon:Package,title:"Fast Shipping",   body:"Quick worldwide delivery with full tracking so you know where your gear is.", color:"bg-green-500", offset:""},
              {icon:Heart,  title:"Traveler Tested", body:"Every product on this page has been personally used on an actual trip.", color:"bg-purple-600",offset:"lg:mt-6"},
            ].map((item,i) => (
              <div key={i} className={`bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 transition-colors ${item.offset}`}>
                <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center mb-5 shadow-lg`}><item.icon className="h-5 w-5 text-white" /></div>
                <h3 className="font-display text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8 font-body">
            <ShoppingBag className="h-3.5 w-3.5" />Need personalised advice?
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-5">
            Can't find what<br /><span className="text-blue-600">you're looking for?</span>
          </h2>
          <p className="text-gray-500 font-body text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Tell us your destination and travel style — we'll personally recommend the best gear for your specific trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <button className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl text-sm font-body transition-all shadow-lg shadow-blue-200">
                Get Personalised Recommendations<ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
            <Link href="/guides">
              <button className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-bold px-8 py-4 rounded-2xl text-sm font-body transition-all">
                Browse Travel Guides<ChevronRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}