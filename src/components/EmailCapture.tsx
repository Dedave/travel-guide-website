"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Loader2, Gift, MapPin } from "lucide-react";
import { Mail, CheckCircle2, Loader2, Gift, MapPin, Download } from "lucide-react";

// The free PDF ships with the site in /public/downloads.
const LEAD_MAGNET_PDF = "/downloads/25-hidden-places-in-italy.pdf";

/* Free lead-magnet email capture. Posts to /api/email-capture (no external
   provider). Designed to drop into the homepage but reusable anywhere. */
export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/email-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source: "homepage-italy-lead-magnet" }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message || "Success! Check your inbox for your free guide.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* decorative glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Gift className="h-3.5 w-3.5" />
                Free Download
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-4">
                25 Hidden Places in Italy Most Tourists Miss
              </h2>
              <p className="text-blue-100 font-body text-base sm:text-lg leading-relaxed mb-6">
                Get our free PDF and discover the secret spots, local trattorias, and
                off-the-map villages that make Italy unforgettable — the places guidebooks
                never tell you about.
              </p>
              <ul className="space-y-2.5">
                {[
                  "25 hand-picked hidden gems with map locations",
                  "Local food spots away from the tourist traps",
                  "Best times to visit to skip the crowds",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-white/90 font-body text-sm">
                    <MapPin className="h-4 w-4 text-yellow-300 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              {status === "success" ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="font-display text-xl font-black text-gray-900 mb-2">
                    You&apos;re in! 🎉
                  </h3>
                  <p className="text-gray-500 font-body text-sm">{message}</p>
                  <p className="text-gray-500 font-body text-sm mb-5">{message}</p>
                  <a
                    href={LEAD_MAGNET_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black font-body text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl"
                  >
                    <Download className="h-4 w-4" /> Download your free guide now
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="lead-email"
                      className="block font-body text-sm font-semibold text-gray-900 mb-2"
                    >
                      Where should we send your free guide?
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        id="lead-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === "error") setStatus("idle");
                        }}
                        placeholder="you@example.com"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 font-body text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 font-body text-xs -mt-1">{message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white font-black font-body text-sm px-6 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        <Gift className="h-4 w-4" /> Send Me the Free Guide
                      </>
                    )}
                  </button>
                  <p className="text-center text-gray-400 font-body text-[11px]">
                    No spam, ever. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
