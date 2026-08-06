"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ShoppingBag, Backpack, Shirt, Camera, Shield,
  Heart, Star, ExternalLink, Package, ChevronRight,
  ArrowRight, Zap, CheckCircle2, Search, X,
  Stethoscope, Moon,
} from "lucide-react";
import EssentialsStickyBar from "@/components/EssentialsStickyBar";

/* ─────────────────────────────────────────
   PRODUCT DATA
───────────────────────────────────────── */
const products = {
  luggage: [
    { id: 1,  name: "40L Carry-On Travel Backpack",            description: "Large-capacity backpack with external USB charging port, dedicated 15.6\" laptop sleeve, and anti-theft zip panel on the back. Fits most airline overhead bins — tested on 50+ airlines.",      price: "$38.99", rating: 4.8, reviews: 3241, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["Best Seller", "USB Charging"] },
    { id: 2,  name: "Polycarbonate Spinner Carry-On",          description: "Ultra-lightweight hardshell suitcase with 360° silent spinner wheels, TSA-approved combination lock, and expandable main compartment. 20-inch cabin-approved size.",                           price: "$79.99", rating: 4.7, reviews: 2156, image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["Durable", "TSA Approved"] },
    { id: 3,  name: "Compression Packing Cubes (6pcs)",        description: "Six-piece set with double-zip compression in XL, L, M, S, shoe bag, and laundry bag. Squeezes 30% more into your bag and keeps clothes wrinkle-free on arrival.",                           price: "$22.99", rating: 4.9, reviews: 4812, image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["Top Rated", "Space Saver"] },
    { id: 4,  name: "Hanging Waterproof Toiletry Bag",         description: "Foldout hanging organizer with transparent compartments, waterproof lining, and a sturdy swivel hook. Sets up in seconds in any hotel bathroom — no counter space needed.",                price: "$16.99", rating: 4.6, reviews: 1243, image: "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=800&h=600&fit=crop",       affiliate: "shein",      badges: ["Waterproof", "Hanging Hook"] },
    { id: 5,  name: "TSA-Approved Luggage Locks (2-Pack)",     description: "Zinc alloy combination locks recognized by TSA inspectors worldwide. Resettable 3-digit code, hardened steel shackle, and fits all standard luggage zippers.",                            price: "$11.99", rating: 4.7, reviews: 3890, image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["TSA Approved", "2-Pack"] },
    { id: 6,  name: "Portable Digital Luggage Scale",          description: "Weighs up to 50kg with 10g precision. LCD backlit display, auto-off after 60 seconds, and a soft grip handle. Never pay overweight fees again — weighs your bag before you leave.",           price: "$9.99",  rating: 4.8, reviews: 5123, image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["50kg Capacity", "Compact"] },
    { id: 7,  name: "Cable & Tech Organizer Roll",             description: "Travel cable organizer with elastic loops, zippered pockets, and a detachable accessories pouch. Fits chargers, earbuds, SD cards, and power banks — everything in one roll.",               price: "$14.99", rating: 4.6, reviews: 2341, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["Cable Organizer", "Roll-Up"] },
    { id: 8,  name: "Waterproof Dry Bag (10L)",                description: "IPX6-rated roll-top dry bag keeps gear bone-dry in rain, on boats, or at the beach. Transparent window lets you see inside. Works as a daypack liner or standalone beach bag.",              price: "$12.99", rating: 4.7, reviews: 1987, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["Waterproof", "IPX6"] },
  ],
  clothing: [
    { id: 9,  name: "Lightweight Quick-Dry Cargo Pants",       description: "Stretchy fast-drying travel pants with multiple zip pockets including a hidden security pocket at the back. Elastic waistband and tailored cut — works for hiking or a night out.",          price: "$28.99", rating: 4.5, reviews: 1876, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=600&fit=crop",       affiliate: "shein",      badges: ["Quick Dry", "Hidden Pocket"] },
    { id: 10, name: "Packable Hooded Rain Jacket",             description: "Waterproof windbreaker that stuffs into its own chest pocket. Fully taped seams, adjustable hood and cuffs, and weighs just 260g. The one jacket that belongs in every travel bag.",          price: "$34.99", rating: 4.7, reviews: 2034, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=600&fit=crop",       affiliate: "shein",      badges: ["Waterproof", "Packable"] },
    { id: 11, name: "Moisture-Wicking Travel T-Shirt",         description: "Lightweight polyester-blend tee with odor-resistant finish and four-way stretch. Dries in under 2 hours when hand-washed — the cornerstone of packing light.",                               price: "$18.99", rating: 4.6, reviews: 987,  image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop",       affiliate: "shein",      badges: ["Odor Control", "Fast Dry"] },
    { id: 12, name: "Infinity Scarf with Hidden Zip Pocket",   description: "Stylish loop scarf with a discreet internal zipper pocket for cards, cash, or a passport copy. Lightweight enough to double as a plane blanket or beach wrap.",                             price: "$14.99", rating: 4.5, reviews: 763,  image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&h=600&fit=crop",       affiliate: "shein",      badges: ["Hidden Pocket", "Dual-Use"] },
    { id: 13, name: "UV Protection Sun Hat (UPF 50+)",         description: "Wide-brim packable hat with UPF 50+ protection, moisture-wicking sweatband, and an adjustable chin strap. Rolls flat without losing its shape — your best defense against strong sun.",      price: "$19.99", rating: 4.6, reviews: 2109, image: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=800&h=600&fit=crop",       affiliate: "shein",      badges: ["UPF 50+", "Packable"] },
    { id: 14, name: "Compression Travel Socks (3 Pairs)",      description: "Graduated compression socks (15-20mmHg) that reduce swelling and deep vein thrombosis risk on long-haul flights. Moisture-wicking, anti-blister, and machine washable.",                    price: "$16.99", rating: 4.8, reviews: 3421, image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&h=600&fit=crop",       affiliate: "shein",      badges: ["DVT Prevention", "3-Pack"] },
  ],
  tech: [
    { id: 15, name: "Universal Travel Adapter with USB-C PD",  description: "All-in-one plug adapter covering 150+ countries with 3 USB-A ports, 1 USB-C PD 20W port, and surge protection. Works simultaneously for up to 4 devices. The only adapter you'll need.", price: "$24.99", rating: 4.9, reviews: 5634, image: "https://images.unsplash.com/photo-1624275353151-f21e28a7dfaa?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["Universal", "Best Seller"] },
    { id: 16, name: "20000mAh Fast-Charge Power Bank",         description: "High-capacity power bank with 22.5W fast charging, dual USB-A and USB-C outputs, and an LED battery display. Airline-approved and charges a typical smartphone 5+ times.",                   price: "$32.99", rating: 4.7, reviews: 4102, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["22.5W Fast Charge", "5 Charges"] },
    { id: 17, name: "Wireless ANC Earbuds with Carry Case",    description: "Active noise-cancelling earbuds with 8-hour playback per charge (30 hours total with case), transparency mode, and a slim charging case designed to survive bag life.",                       price: "$45.99", rating: 4.6, reviews: 2891, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["ANC", "30hr Total"] },
    { id: 18, name: "Flexible Tripod with Bluetooth Remote",   description: "Bendable gorilla-style tripod that wraps around poles, branches, or stands on any surface. Includes a wireless Bluetooth shutter for hands-free solo travel photography.",                   price: "$13.99", rating: 4.5, reviews: 2267, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["Flexible", "Bluetooth Remote"] },
    { id: 19, name: "Mini Portable WiFi Router & VPN",         description: "Pocket-sized router that converts hotel wired ethernet into secure WiFi. Built-in VPN client protects your browsing on public networks. USB powered — no extra charger needed.",             price: "$28.99", rating: 4.5, reviews: 1456, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["VPN Built-in", "Hotel WiFi Fix"] },
    { id: 20, name: "Waterproof Phone Pouch (2-Pack)",         description: "IPX8 waterproof phone cases for up to 7\" screens. Touch-responsive front and 20m depth rated. Essential for beaches, boats, waterparks, and rainy city days.",                              price: "$10.99", rating: 4.6, reviews: 3876, image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["IPX8", "2-Pack"] },
  ],
  accessories: [
    { id: 21, name: "Memory Foam Neck Pillow with Hood",       description: "Ergonomic U-shaped memory foam pillow with a built-in privacy hood that blocks light and wind noise. Machine-washable cover and a snap loop that attaches to your bag.",                    price: "$27.99", rating: 4.8, reviews: 3156, image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["Memory Foam", "Privacy Hood"] },
    { id: 22, name: "RFID-Blocking Passport Holder Wallet",    description: "Slim travel wallet with RFID-blocking lining that protects against electronic card skimming. Fits a passport, 8 cards, a boarding pass, and SIM card storage. Available in 12 colours.",  price: "$12.99", rating: 4.7, reviews: 2089, image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&h=600&fit=crop",       affiliate: "shein",      badges: ["RFID Blocking", "Multi-Slot"] },
    { id: 23, name: "Collapsible Water Bottle with Filter",    description: "600ml BPA-free silicone bottle that folds flat when empty. Integrated carbon filter removes chlorine and odours from hotel tap water. Saves 100+ plastic bottles per trip.",               price: "$19.99", rating: 4.6, reviews: 1734, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["Eco-Friendly", "Built-in Filter"] },
    { id: 24, name: "Quick-Dry Microfiber Towel Set (3 Sizes)", description: "Bath, hand, and face towels packed in one compact roll bag. Absorbs 4× their weight in water and dries in 30 minutes. A hostel, beach, and camping essential.",                           price: "$18.99", rating: 4.8, reviews: 2901, image: "https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=800&h=600&fit=crop",       affiliate: "shein",      badges: ["Quick Dry", "3 Sizes"] },
    { id: 25, name: "Portable Door Security Lock",             description: "Stainless steel travel door lock secures any inward-opening door from the inside — hotels, Airbnbs, hostels. Fits standard door latches with no installation. Weighs just 40g.",            price: "$12.99", rating: 4.7, reviews: 4210, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["Security", "40g"] },
    { id: 26, name: "Hidden Money Belt (Waist Pouch)",         description: "Ultra-thin RFID-blocking money belt worn under clothing. Holds cash, cards, and a passport copy flat against your body. Moisture-wicking material stays comfortable in heat.",             price: "$13.99", rating: 4.6, reviews: 2876, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",       affiliate: "shein",      badges: ["RFID Blocking", "Hidden Wear"] },
  ],
  health: [
    { id: 27, name: "Travel First Aid Kit (43 Pieces)",        description: "Compact 43-piece kit with bandages, antiseptic wipes, blister pads, tweezers, scissors, pain relievers, and a waterproof case. Fits in a jacket pocket and meets airline carry-on rules.", price: "$17.99", rating: 4.8, reviews: 2987, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["43 Pieces", "Waterproof Case"] },
    { id: 28, name: "Reusable N95 Respirator Mask (3-Pack)",   description: "Five-layer filtration masks rated for particulate protection. Adjustable nose wire and ear loops for all-day comfort. Useful in polluted cities, on dusty roads, and during illness.",       price: "$14.99", rating: 4.6, reviews: 1543, image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["5-Layer Filter", "Reusable"] },
    { id: 29, name: "Insect Repellent Wristbands (10-Pack)",   description: "DEET-free citronella wristbands effective for up to 300 hours. Waterproof and adjustable for adults and children. Essential for tropical destinations, safaris, and jungle treks.",         price: "$10.99", rating: 4.5, reviews: 3102, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["DEET-Free", "300hr Protection"] },
    { id: 30, name: "Pill Organizer with Weekly Travel Case",  description: "7-day pill organizer with AM/PM compartments and a waterproof outer case. Each day's pod snaps off separately — no need to carry the whole week's supply in your day bag.",                  price: "$11.99", rating: 4.7, reviews: 1876, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["AM/PM Pods", "Waterproof"] },
    { id: 31, name: "Reef-Safe Mineral Sunscreen SPF 50",      description: "Broad-spectrum SPF 50 mineral sunscreen that won't damage coral reefs (mandatory in Hawaii and many island destinations). Non-greasy formula in a 100ml travel-approved size.",              price: "$16.99", rating: 4.6, reviews: 1234, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",       affiliate: "shein",      badges: ["Reef-Safe", "SPF 50", "100ml"] },
    { id: 32, name: "Portable UV Water Sterilizer Pen",        description: "Ultraviolet purification pen that neutralizes 99.99% of bacteria and viruses in water in 60 seconds. USB rechargeable and fits in a shirt pocket. Safe water anywhere in the world.",        price: "$24.99", rating: 4.7, reviews: 1098, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["99.99% Purification", "USB Rechargeable"] },
    { id: 33, name: "Hand Sanitizer Spray (Travel 4-Pack)",    description: "Four 50ml spray bottles of 75% alcohol-based sanitizer — exactly within the 100ml carry-on limit. Kills 99.9% of germs and dries quickly without stickiness.",                             price: "$9.99",  rating: 4.5, reviews: 2341, image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&h=600&fit=crop",       affiliate: "shein",      badges: ["75% Alcohol", "4-Pack"] },
  ],
  sleep: [
    { id: 34, name: "3D Contoured Sleep Mask",                 description: "Contoured eye mask with deep eye cups that allow natural eye movement during REM sleep. Blackout foam seal, adjustable strap, and cooling silk inner lining. The #1 pick for long-haul flights.", price: "$14.99", rating: 4.8, reviews: 4321, image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&h=600&fit=crop",       affiliate: "shein",      badges: ["Best Seller", "3D Contoured"] },
    { id: 35, name: "Silicone Foam Earplugs (20 Pairs)",       description: "SNR 36dB noise reduction earplugs in soft foam with a slow-expansion design that seals ear canals comfortably. Blocks out snoring roommates, traffic, and aircraft engine noise.",            price: "$8.99",  rating: 4.7, reviews: 5678, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["SNR 36dB", "20 Pairs"] },
    { id: 36, name: "Inflatable Travel Lumbar Pillow",         description: "Compact blow-up lumbar support pillow for long-haul seats. Deflates to the size of a fist and inflates in 5 breaths. Prevents lower back pain on overnight buses, planes, and trains.",       price: "$16.99", rating: 4.5, reviews: 1432, image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["Inflatable", "Back Support"] },
    { id: 37, name: "Melatonin Sleep Patches (30-Pack)",       description: "Transdermal melatonin patches that deliver a steady 0.5mg dose over 8 hours — smoother than pills. Helps reset circadian rhythm across time zones. Drug-free and non-habit-forming.",        price: "$19.99", rating: 4.6, reviews: 876,  image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["Jet Lag Aid", "Drug-Free"] },
    { id: 38, name: "Silk Sleep Sack Liner",                   description: "100% mulberry silk sleeping bag liner that slides into a hostel duvet cover or sleeping bag. Silky against skin, temperature regulating, and weighs 140g. Washable and packs to the size of a sock.", price: "$34.99", rating: 4.8, reviews: 1234, image: "https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=800&h=600&fit=crop",       affiliate: "shein",      badges: ["100% Silk", "140g"] },
    { id: 39, name: "White Noise Machine (USB Powered)",       description: "Compact white noise machine with 16 soothing sounds including rain, fan, and brown noise. USB-C powered so it runs off your power bank. Masks hotel corridor noise and thin hostel walls.",  price: "$21.99", rating: 4.7, reviews: 2109, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",       affiliate: "aliexpress", badges: ["16 Sounds", "USB-C Powered"] },
  ],
};

/* ─────────────────────────────────────────
   CATEGORIES CONFIG
───────────────────────────────────────── */
const categories = [
  { id: "luggage",     name: "Luggage & Bags",    icon: Backpack,      desc: "Carry everything. Weigh less.",        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop" },
  { id: "clothing",   name: "Travel Clothing",   icon: Shirt,         desc: "Pack light, look great.",              image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=400&fit=crop" },
  { id: "tech",       name: "Tech & Gadgets",    icon: Camera,        desc: "Stay charged, stay connected.",        image: "https://images.unsplash.com/photo-1624275353151-f21e28a7dfaa?w=600&h=400&fit=crop" },
  { id: "accessories",name: "Accessories",       icon: Shield,        desc: "The details that matter most.",        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=400&fit=crop" },
  { id: "health",     name: "Health & Safety",   icon: Stethoscope,   desc: "Travel safe, stay healthy.",           image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop" },
  { id: "sleep",      name: "Sleep & Comfort",   icon: Moon,          desc: "Rest better wherever you land.",       image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=400&fit=crop" },
];

const affiliateConfig: Record<string, { label: string; bg: string }> = {
  aliexpress: { label: "Shop on AliExpress", bg: "bg-red-600 hover:bg-red-500" },
  shein:      { label: "Shop on SHEIN",      bg: "bg-gray-900 hover:bg-gray-700" },
};

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function TravelEssentials() {
  const [activeCategory, setActiveCategory] = useState("luggage");
  const [searchQuery, setSearchQuery] = useState("");

  const currentCat = categories.find((c) => c.id === activeCategory)!;
  const currentProducts = products[activeCategory as keyof typeof products];

  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return currentProducts;
    return currentProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.badges.some((b) => b.toLowerCase().includes(q))
    );
  }, [currentProducts, searchQuery]);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body    { font-family: 'DM Sans', system-ui, sans-serif; }
        body          { font-family: 'DM Sans', system-ui, sans-serif; }
      `}</style>

      <Navigation />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gray-950 min-h-[540px] flex items-end">
        <div className="absolute inset-0 grid grid-cols-4 opacity-[0.22] pointer-events-none">
          {[
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=700&fit=crop",
            "https://images.unsplash.com/photo-1624275353151-f21e28a7dfaa?w=400&h=700&fit=crop",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=700&fit=crop",
            "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=700&fit=crop",
          ].map((src, i) => (
            <img key={i} src={src} alt="" className="w-full h-full object-cover" />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/40" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-green-400" />
              <span className="text-green-400 text-xs font-bold tracking-[0.3em] uppercase font-body">
                Gear Up for Your Next Trip
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-black text-white leading-[0.9] mb-6">
              Travel<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Essentials.
              </span>
            </h1>
            <p className="text-gray-400 font-body text-lg leading-relaxed mb-10 max-w-lg">
              Every product personally tested on the road. Curated for travelers who care about quality, weight, and value.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Star,         label: "Verified Reviews" },
                { icon: CheckCircle2, label: "Traveler Tested" },
                { icon: Zap,          label: "Fast Shipping" },
                { icon: Shield,       label: "Secure Checkout" },
              ].map((t, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white/70 text-xs font-semibold font-body px-4 py-2 rounded-full"
                >
                  <t.icon className="h-3.5 w-3.5 text-green-400" />
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY CARDS ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-6 bg-green-500" />
            <span className="text-green-600 text-xs font-bold tracking-[0.25em] uppercase font-body">
              Shop by Category
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`group relative overflow-hidden rounded-2xl h-36 text-left transition-all duration-300 ${
                    isActive
                      ? "ring-2 ring-blue-500 ring-offset-2 shadow-xl scale-[1.02]"
                      : "hover:shadow-xl hover:-translate-y-0.5"
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      isActive ? "bg-black/60" : "bg-black/50 group-hover:bg-black/40"
                    }`}
                  />
                  {isActive && (
                    <div className="absolute top-3 right-3 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <cat.icon className={`h-4 w-4 mb-1 ${isActive ? "text-blue-300" : "text-white/60"}`} />
                    <div className={`font-display font-bold text-xs leading-tight ${isActive ? "text-blue-200" : "text-white"}`}>
                      {cat.name}
                    </div>
                    <div className="text-white/45 text-[9px] font-body mt-0.5 hidden sm:block">
                      {cat.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="essentials-products" className="pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">

          {/* Header + Search bar */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px w-6 bg-blue-600" />
                <span className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase font-body">
                  {currentCat.name}
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900">
                {currentCat.desc}
              </h2>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-72 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder={`Search ${currentCat.name.toLowerCase()}…`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 text-sm font-body bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Result count when searching */}
          {searchQuery && (
            <p className="text-sm font-body text-gray-500 mb-6">
              {filteredProducts.length === 0
                ? `No results for "${searchQuery}"`
                : `${filteredProducts.length} result${filteredProducts.length === 1 ? "" : "s"} for "${searchQuery}"`}
            </p>
          )}

          {/* Product grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredProducts.map((product, i) => {
                const aff = affiliateConfig[product.affiliate];
                const isFeatured = i === 0 && !searchQuery;
                return (
                  <div
                    key={product.id}
                    className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                      isFeatured ? "md:col-span-2 lg:col-span-2" : ""
                    }`}
                  >
                    <div className={`relative overflow-hidden shrink-0 ${isFeatured ? "h-72" : "h-52"}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                        {product.badges.slice(0, 2).map((badge, j) => (
                          <span
                            key={j}
                            className="bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full font-body shadow"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="bg-gray-950/80 backdrop-blur-sm text-yellow-400 font-black text-sm px-3 py-1.5 rounded-full font-body border border-yellow-400/20">
                          {product.price}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                      <h3
                        className={`font-display font-bold text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors ${
                          isFeatured ? "text-xl" : "text-base"
                        }`}
                      >
                        {product.name}
                      </h3>
                      <p className="text-gray-500 font-body text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-1.5 shrink-0">
                          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                          <span className="font-bold text-gray-800 text-sm font-body">{product.rating}</span>
                          <span className="text-gray-400 text-xs font-body">
                            ({product.reviews.toLocaleString()})
                          </span>
                        </div>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 ${aff.bg} text-white font-bold font-body text-xs px-4 py-2.5 rounded-full transition-all whitespace-nowrap`}
                        >
                          {aff.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <Search className="h-12 w-12 text-gray-200 mb-4" />
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-400 font-body text-sm mb-6 max-w-xs">
                Try a different search term or browse another category.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold font-body text-sm px-6 py-3 rounded-xl transition-all"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── TRUST SECTION ── */}
      <section className="bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500" />
              <span className="text-green-400 text-xs font-bold tracking-[0.3em] uppercase font-body">
                Why Trust Our Picks
              </span>
              <div className="h-px w-8 bg-green-500" />
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
              We Test Everything<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Before We Recommend It.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Shield,  title: "Secure Shopping",  body: "Shop with confidence through verified, trusted partners worldwide.",                         color: "bg-blue-600",   offset: "" },
              { icon: Star,    title: "Verified Reviews", body: "Real ratings from real travelers — no fake reviews, no paid placements.",                    color: "bg-yellow-500", offset: "lg:mt-6" },
              { icon: Package, title: "Fast Shipping",    body: "Quick worldwide delivery with full tracking so you always know where your gear is.",          color: "bg-green-500",  offset: "" },
              { icon: Heart,   title: "Traveler Tested",  body: "Every product on this page has been personally used on an actual trip.",                     color: "bg-purple-600", offset: "lg:mt-6" },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 transition-colors ${item.offset}`}
              >
                <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center mb-5 shadow-lg`}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8 font-body">
            <ShoppingBag className="h-3.5 w-3.5" />
            Need personalised advice?
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-5">
            Can't find what<br />
            <span className="text-blue-600">you're looking for?</span>
          </h2>
          <p className="text-gray-500 font-body text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Tell us your destination and travel style — we'll personally recommend the best gear for your specific trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <button className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl text-sm font-body transition-all shadow-lg shadow-blue-200">
                Get Personalised Recommendations
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
            <Link href="/guides">
              <button className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-bold px-8 py-4 rounded-2xl text-sm font-body transition-all">
                Browse Travel Guides
                <ChevronRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky bar — appears after scroll, independent of PlanTripModal */}
      <EssentialsStickyBar />
    </div>
  );
}