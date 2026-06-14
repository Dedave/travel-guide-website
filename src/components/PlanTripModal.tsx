"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Compass, Check } from "lucide-react";

type Card = {
  href: string;
  icon: string;
  label: string;
  desc: string;
  cta: string;
};

export default function PlanTripModal() {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [dest, setDest] = useState("");
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("wl_plan_modal_seen")) return;
    const t = setTimeout(() => {
      setVisible(true);
      setTimeout(() => setAnimateIn(true), 10);
    }, 2500);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("wl_plan_modal_seen", "1");
    }, 400);
  };

  const buildLinks = (destination: string) => ({
    flights: destination
      ? `https://www.skyscanner.net/flights-to/${destination
          .toLowerCase()
          .replace(/\s+/g, "-")}`
      : "https://www.skyscanner.net",
    hotels: `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(
      destination || "world"
    )}`,
    tours: `https://www.getyourguide.com/s/?q=${encodeURIComponent(
      destination
    )}&partner_id=VGDPALW&utm_medium=online_publisher`,
  });

  const [links, setLinks] = useState(buildLinks(""));

  const handleGo = () => {
    setLinks(buildLinks(dest));
    setUpdated(true);
    setTimeout(() => setUpdated(false), 1800);
  };

  const cards: Card[] = [
    {
      href: links.flights,
      icon: "✈️",
      label: "Flights",
      desc: "Skyscanner — no booking fees",
      cta: "Search flights",
    },
    {
      href: links.hotels,
      icon: "🏨",
      label: "Hotels & Stays",
      desc: "Booking.com — 28M+ listings",
      cta: "Find hotels",
    },
    {
      href: links.tours,
      icon: "🗺️",
      label: "Tours & Activities",
      desc: "GetYourGuide — skip-the-line",
      cta: "Browse tours",
    },
    {
      href: "https://www.rentalcars.com",
      icon: "🚗",
      label: "Car Rentals",
      desc: "RentalCars — 900+ companies",
      cta: "Compare cars",
    },
    {
      href: "https://safetywing.com/nomad-insurance/?referenceID=26512570&utm_source=26512570&utm_medium=Ambassador",
      icon: "🛡️",
      label: "Travel Insurance",
      desc: "SafetyWing from $45/mo",
      cta: "Get covered",
    },
    {
      href: "https://airalo.go.link/hCw9M",
      icon: "📱",
      label: "eSIM & Data",
      desc: "Airalo — 70+ countries from $5",
      cta: "Get eSIM",
    },
  ];

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes wl-fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes wl-slideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .wl-backdrop {
          animation: wl-fadeIn 0.4s ease forwards;
        }
        .wl-modal-enter {
          animation: wl-slideUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .wl-modal-exit {
          animation: wl-slideUp 0.35s cubic-bezier(0.22, 1, 0.36, 1) reverse forwards;
        }
        .wl-card-hover {
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
        }
        .wl-card-hover:hover {
          transform: translateY(-2px);
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm wl-backdrop"
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        {/* Modal */}
        <div
          className={`bg-[#0f0f1a] border border-white/10 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl ${
            animateIn ? "wl-modal-enter" : "wl-modal-exit"
          }`}
        >
          {/* ── Hero strip ── */}
          <div
            className="relative p-7 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #1a1040 0%, #0d1f3c 50%, #0a2015 100%)",
            }}
          >
            {/* Dot pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Badge */}
            <div className="relative inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-4">
              <Compass className="h-3 w-3" />
              Plan Your Trip
            </div>

            {/* Headline */}
            <h2 className="relative font-display text-[26px] font-black text-white leading-tight mb-2">
              Everything you need to book
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
                your perfect trip
              </span>
            </h2>

            <p className="relative text-white/50 text-sm leading-relaxed mb-5">
              Flights · Hotels · Tours · Insurance · eSIM — all in one place,
              with our best partner rates.
            </p>

            {/* Destination input */}
            <p className="relative text-white/40 text-[11px] font-bold uppercase tracking-widest mb-2">
              Where are you headed?
            </p>
            <div className="relative flex gap-2">
              <input
                type="text"
                value={dest}
                onChange={(e) => setDest(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGo()}
                placeholder="e.g. Tokyo, Bali, Paris..."
                className="flex-1 bg-white/5 border border-white/15 rounded-xl text-white text-sm px-4 py-2.5 outline-none placeholder:text-white/30 focus:border-yellow-400/60 transition-colors"
              />
              <button
                onClick={handleGo}
                className={`inline-flex items-center gap-1.5 font-black text-xs px-5 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                  updated
                    ? "bg-green-400 text-black"
                    : "bg-yellow-400 hover:bg-yellow-300 text-gray-900"
                }`}
              >
                {updated ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    Updated!
                  </>
                ) : (
                  <>
                    Explore deals
                    <ArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </div>

            {/* Trust row */}
            <div className="relative flex flex-wrap items-center gap-4 mt-4">
              {["Vetted partners only", "No booking fees", "Best price guaranteed"].map(
                (trust) => (
                  <div
                    key={trust}
                    className="flex items-center gap-1.5 text-white/35 text-[10px]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-70 shrink-0" />
                    {trust}
                  </div>
                )
              )}
            </div>
          </div>

          {/* ── Affiliate cards grid ── */}
          <div className="grid grid-cols-3 gap-2 p-4">
            {cards.map((card: Card) => (
              <a 
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="wl-card-hover group bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-4 block no-underline"
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <div className="text-white text-sm font-bold mb-1">
                  {card.label}
                </div>
                <div className="text-white/40 text-[10.5px] leading-tight mb-2">
                  {card.desc}
                </div>
                <div className="flex items-center gap-1 text-white/45 group-hover:text-yellow-400 text-[10px] font-bold transition-colors">
                  {card.cta}
                  <ArrowRight className="h-2.5 w-2.5" />
                </div>
              </a>
            ))}
          </div>

          {/* ── Footer ── */}
          <div className="border-t border-white/[0.07] px-5 py-3 flex items-center justify-between gap-4">
            <span className="text-white/25 text-[10px] leading-relaxed">
              Affiliate links — we may earn a small commission at no cost to you
            </span>
            <button
              onClick={close}
              className="shrink-0 text-white/45 hover:text-white text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] px-4 py-1.5 rounded-lg transition-all"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </>
  );
}