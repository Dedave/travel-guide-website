"use client";

import { useEffect, useState, useCallback } from "react";
import { ShoppingBag, X, ArrowDown, Zap } from "lucide-react";

/**
 * EssentialsStickyBar
 *
 * Slides up from the bottom of the Travel Essentials page once the user
 * scrolls past the hero (≈ 500px). Dismissed via the × button and that
 * choice is remembered in sessionStorage so it won't re-appear on the
 * same visit.
 *
 * Completely independent of PlanTripModal — uses its own session key
 * and its own trigger mechanism. Zero collision risk.
 *
 * Usage: drop <EssentialsStickyBar /> anywhere inside the
 * TravelEssentials page component, before </div>.
 */
export default function EssentialsStickyBar() {
  const [visible, setVisible]   = useState(false);
  const [animIn, setAnimIn]     = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Scroll listener — show after 500px
  const onScroll = useCallback(() => {
    if (dismissed) return;
    if (window.scrollY > 500) {
      setVisible(true);
      setTimeout(() => setAnimIn(true), 10); // let paint happen first
      window.removeEventListener("scroll", onScroll);
    }
  }, [dismissed]);

  useEffect(() => {
    // Already dismissed this session? Stay hidden forever.
    if (sessionStorage.getItem("wl_essentials_bar_dismissed")) {
      setDismissed(true);
      return;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const dismiss = () => {
    setAnimIn(false);
    setTimeout(() => {
      setVisible(false);
      setDismissed(true);
      sessionStorage.setItem("wl_essentials_bar_dismissed", "1");
    }, 350);
  };

  const scrollToProducts = () => {
    const el = document.getElementById("essentials-products");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    dismiss();
  };

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes wl-bar-up {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes wl-bar-down {
          from { transform: translateY(0);    opacity: 1; }
          to   { transform: translateY(100%); opacity: 0; }
        }
        .wl-bar-enter { animation: wl-bar-up   0.4s cubic-bezier(0.22,1,0.36,1) forwards; }
        .wl-bar-exit  { animation: wl-bar-down 0.35s cubic-bezier(0.22,1,0.36,1) forwards; }

        @keyframes wl-pulse-dot {
          0%,100% { transform: scale(1);   opacity: 1; }
          50%      { transform: scale(1.4); opacity: 0.6; }
        }
        .wl-pulse-dot { animation: wl-pulse-dot 1.8s ease-in-out infinite; }
      `}</style>

      {/* ── Backdrop blur strip + bar ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[9000] ${animIn ? "wl-bar-enter" : "wl-bar-exit"}`}
        role="complementary"
        aria-label="Quick shop essentials"
      >
        {/* Frosted edge line */}
        <div className="h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />

        <div
          className="relative px-4 py-3.5 sm:py-4"
          style={{
            background: "linear-gradient(to right, #0a1628, #0d1f0f, #0a1628)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {/* Subtle dot-grid texture */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative mx-auto max-w-7xl flex items-center gap-3 sm:gap-5">

            {/* Left — icon + live dot */}
            <div className="relative shrink-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-green-500/15 border border-green-500/25 flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-green-400" />
              </div>
              {/* Pulsing live dot */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full wl-pulse-dot" />
            </div>

            {/* Centre — copy */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-bold leading-tight truncate">
                39 hand-picked travel items
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                {/* Platform pills */}
                <span className="inline-flex items-center gap-1 bg-red-600/20 border border-red-500/30 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  <Zap className="h-2.5 w-2.5" /> AliExpress
                </span>
                <span className="inline-flex items-center gap-1 bg-white/5 border border-white/15 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  SHEIN
                </span>
                <span className="text-gray-600 text-[10px] hidden sm:inline">
                  · 6 categories · verified deals
                </span>
              </div>
            </div>

            {/* Right — CTA + dismiss */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={scrollToProducts}
                className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-400 active:scale-95 text-white font-black text-xs px-4 sm:px-5 py-2.5 rounded-full transition-all shadow-lg shadow-green-900/40 whitespace-nowrap"
              >
                <ArrowDown className="h-3.5 w-3.5" />
                <span className="hidden xs:inline">Browse deals</span>
                <span className="xs:hidden">Shop</span>
              </button>

              <button
                onClick={dismiss}
                aria-label="Dismiss"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center text-gray-500 hover:text-gray-300 transition-all"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}