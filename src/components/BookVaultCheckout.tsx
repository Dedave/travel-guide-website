"use client";

import { useState, useEffect } from "react";
import {
  X, Package, Truck, CheckCircle2, Loader2, AlertCircle,
  ChevronRight, MapPin, Mail, User, Phone, BookOpen,
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────────────────── */
interface BookVaultProduct {
  id: string;
  title: string;
  isbn?: string;
  coverImageUrl?: string;
}

interface ShippingOption {
  id: string;
  name: string;
  price: number;
  currency: string;
  estimatedDays?: string;
}

interface CheckoutModalProps {
  isOpen:      boolean;
  onClose:     () => void;
  guideTitle:  string;         // e.g. "Ultimate Japan Travel Guide"
  guidePrice:  number;         // e.g. 14.99
  /** The BookVault productId for THIS guide's paperback.
   *  Get this from your Bookvault portal → Library → your title → Product ID */
  bvProductId: string;
}

type Step = "form" | "shipping" | "confirm" | "success" | "error";

/* ─── Country list (abbreviated — expand as needed) ─────────────────────── */
const COUNTRIES = [
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States" },
  { code: "AU", name: "Australia" },
  { code: "CA", name: "Canada" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "IT", name: "Italy" },
  { code: "ES", name: "Spain" },
  { code: "NL", name: "Netherlands" },
  { code: "IE", name: "Ireland" },
  { code: "PT", name: "Portugal" },
  { code: "GR", name: "Greece" },
  { code: "NG", name: "Nigeria" },
  { code: "ZA", name: "South Africa" },
  { code: "KE", name: "Kenya" },
  { code: "IN", name: "India" },
  { code: "JP", name: "Japan" },
  { code: "SG", name: "Singapore" },
  { code: "NZ", name: "New Zealand" },
  { code: "BR", name: "Brazil" },
  { code: "MX", name: "Mexico" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "QA", name: "Qatar" },
  { code: "GH", name: "Ghana" },
];

/* ─── Helpers ───────────────────────────────────────────────────────────── */
function generateOrderRef() {
  return `WL-${Date.now().toString(36).toUpperCase()}`;
}

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function BookVaultCheckout({
  isOpen,
  onClose,
  guideTitle,
  guidePrice,
  bvProductId,
}: CheckoutModalProps) {
  const [step, setStep]                 = useState<Step>("form");
  const [loading, setLoading]           = useState(false);
  const [errorMsg, setErrorMsg]         = useState("");
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([]);
  const [selectedShipping, setSelectedShipping] = useState<ShippingOption | null>(null);
  const [orderId, setOrderId]           = useState("");
  const [orderRef]                      = useState(generateOrderRef);

  // Form state
  const [form, setForm] = useState({
    firstName:    "",
    lastName:     "",
    email:        "",
    phone:        "",
    addressLine1: "",
    addressLine2: "",
    city:         "",
    county:       "",
    postcode:     "",
    countryCode:  "GB",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  // Reset when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep("form");
        setErrorMsg("");
        setShippingOptions([]);
        setSelectedShipping(null);
        setOrderId("");
      }, 300);
    }
  }, [isOpen]);

  /* ── Step 1 → 2: fetch shipping rates ──────────────────────────────── */
  async function fetchShipping() {
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch(
        `/api/bookvault/shipping?country=${form.countryCode}&productId=${bvProductId}`
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail?.message ?? data.error ?? "Could not load shipping options");
      }

      // data may be an array of options or wrapped in a key — adjust if needed
      const options: ShippingOption[] = Array.isArray(data) ? data : data.options ?? data.shippingOptions ?? [];
      setShippingOptions(options);
      setSelectedShipping(options[0] ?? null);
      setStep("shipping");
    } catch (e) {
      setErrorMsg(String(e));
    } finally {
      setLoading(false);
    }
  }

  /* ── Step 2 → 3: review ─────────────────────────────────────────────── */
  function goToConfirm() {
    if (!selectedShipping) return;
    setStep("confirm");
  }

  /* ── Step 3 → submit order ──────────────────────────────────────────── */
  async function placeOrder() {
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/bookvault/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          externalReference: orderRef,
          customerEmail: form.email,
          shippingAddress: {
            firstName:    form.firstName,
            lastName:     form.lastName,
            addressLine1: form.addressLine1,
            addressLine2: form.addressLine2 || undefined,
            city:         form.city,
            county:       form.county   || undefined,
            postcode:     form.postcode,
            countryCode:  form.countryCode,
            phone:        form.phone    || undefined,
          },
          items: [{ productId: bvProductId, quantity: 1 }],
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.detail?.message ??
          (typeof data.detail === "string" ? data.detail : null) ??
          data.error ??
          "Order failed. Please try again."
        );
      }

      setOrderId(data.id ?? data.orderId ?? orderRef);
      setStep("success");
    } catch (e) {
      setErrorMsg(String(e));
      setStep("error");
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  const shippingCost = selectedShipping?.price ?? 0;
  const total        = (guidePrice + shippingCost).toFixed(2);

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full sm:max-w-xl bg-gray-950 border border-white/10 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/8 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow-400 rounded-xl flex items-center justify-center shrink-0">
              <Package className="h-4.5 w-4.5 text-gray-900" style={{ width: 18, height: 18 }} />
            </div>
            <div>
              <h2 className="text-white font-black font-display text-base leading-tight">
                Order Paperback
              </h2>
              <p className="text-gray-500 text-xs font-body mt-0.5 line-clamp-1">{guideTitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/8 hover:bg-white/15 flex items-center justify-center text-gray-400 hover:text-white transition-all"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Progress bar */}
        {step !== "success" && step !== "error" && (
          <div className="px-6 py-3 border-b border-white/8 shrink-0">
            <div className="flex items-center gap-2">
              {(["form", "shipping", "confirm"] as Step[]).map((s, i) => {
                const steps: Step[] = ["form", "shipping", "confirm"];
                const idx    = steps.indexOf(step);
                const isActive = steps.indexOf(s) <= idx;
                return (
                  <div key={s} className="flex items-center gap-2 flex-1">
                    <div className={`h-1.5 rounded-full flex-1 transition-all ${isActive ? "bg-yellow-400" : "bg-white/10"}`} />
                    {i < 2 && <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${isActive ? "bg-yellow-400" : "bg-white/10"}`} />}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between mt-1.5">
              {["Shipping Address", "Delivery", "Confirm"].map((label, i) => {
                const steps: Step[] = ["form", "shipping", "confirm"];
                const active = steps.indexOf(step) >= i;
                return (
                  <span key={label} className={`text-[10px] font-body font-bold ${active ? "text-yellow-400" : "text-gray-600"}`}>
                    {label}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto">

          {/* ── STEP: FORM ──────────────────────────────────────────────── */}
          {step === "form" && (
            <div className="p-6 space-y-4">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-3">
                <Field label="First Name" icon={<User className="h-3.5 w-3.5" />}>
                  <input
                    value={form.firstName}
                    onChange={set("firstName")}
                    placeholder="John"
                    className={inputCls}
                    required
                  />
                </Field>
                <Field label="Last Name" icon={null}>
                  <input
                    value={form.lastName}
                    onChange={set("lastName")}
                    placeholder="Doe"
                    className={inputCls}
                    required
                  />
                </Field>
              </div>

              {/* Email */}
              <Field label="Email" icon={<Mail className="h-3.5 w-3.5" />}>
                <input
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@example.com"
                  className={inputCls}
                  required
                />
              </Field>

              {/* Phone */}
              <Field label="Phone (optional)" icon={<Phone className="h-3.5 w-3.5" />}>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+44 7700 900000"
                  className={inputCls}
                />
              </Field>

              {/* Address */}
              <div className="h-px bg-white/8" />
              <p className="text-gray-400 text-xs font-body font-bold uppercase tracking-wider flex items-center gap-2">
                <MapPin className="h-3 w-3 text-yellow-400" /> Shipping Address
              </p>

              <Field label="Address Line 1" icon={null}>
                <input
                  value={form.addressLine1}
                  onChange={set("addressLine1")}
                  placeholder="123 High Street"
                  className={inputCls}
                  required
                />
              </Field>
              <Field label="Address Line 2 (optional)" icon={null}>
                <input
                  value={form.addressLine2}
                  onChange={set("addressLine2")}
                  placeholder="Flat 4B"
                  className={inputCls}
                />
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="City / Town" icon={null}>
                  <input
                    value={form.city}
                    onChange={set("city")}
                    placeholder="London"
                    className={inputCls}
                    required
                  />
                </Field>
                <Field label="Postcode / ZIP" icon={null}>
                  <input
                    value={form.postcode}
                    onChange={set("postcode")}
                    placeholder="SW1A 1AA"
                    className={inputCls}
                    required
                  />
                </Field>
              </div>

              <Field label="State / County (optional)" icon={null}>
                <input
                  value={form.county}
                  onChange={set("county")}
                  placeholder="Greater London"
                  className={inputCls}
                />
              </Field>

              {/* Country */}
              <Field label="Country" icon={null}>
                <select value={form.countryCode} onChange={set("countryCode")} className={inputCls}>
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code}>{c.name}</option>
                  ))}
                </select>
              </Field>
            </div>
          )}

          {/* ── STEP: SHIPPING ──────────────────────────────────────────── */}
          {step === "shipping" && (
            <div className="p-6 space-y-3">
              <p className="text-gray-400 text-sm font-body mb-4">
                Choose a delivery option for <span className="text-white font-semibold">{COUNTRIES.find(c => c.code === form.countryCode)?.name ?? form.countryCode}</span>:
              </p>

              {shippingOptions.length === 0 && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                  <p className="text-gray-400 text-sm font-body">No shipping options available for this country.</p>
                </div>
              )}

              {shippingOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedShipping(opt)}
                  className={`w-full text-left rounded-2xl border-2 p-4 transition-all ${
                    selectedShipping?.id === opt.id
                      ? "border-yellow-400 bg-yellow-400/8"
                      : "border-white/10 bg-white/4 hover:border-white/25"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Truck className={`h-4 w-4 ${selectedShipping?.id === opt.id ? "text-yellow-400" : "text-gray-500"}`} />
                      <div>
                        <div className="text-white font-bold text-sm font-body">{opt.name}</div>
                        {opt.estimatedDays && (
                          <div className="text-gray-500 text-xs font-body mt-0.5">{opt.estimatedDays}</div>
                        )}
                      </div>
                    </div>
                    <div className={`font-black text-base ${selectedShipping?.id === opt.id ? "text-yellow-400" : "text-white"}`}>
                      {opt.price === 0 ? "FREE" : `£${opt.price.toFixed(2)}`}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* ── STEP: CONFIRM ───────────────────────────────────────────── */}
          {step === "confirm" && (
            <div className="p-6 space-y-4">
              {/* Order summary */}
              <div className="bg-white/4 border border-white/8 rounded-2xl p-4 space-y-3">
                <p className="text-gray-400 text-xs font-body font-bold uppercase tracking-wider">Order Summary</p>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-bold font-body leading-tight">{guideTitle}</p>
                    <p className="text-gray-500 text-xs font-body mt-0.5">Paperback · Print on Demand</p>
                  </div>
                  <span className="text-white font-bold text-sm font-body">£{guidePrice.toFixed(2)}</span>
                </div>

                <div className="h-px bg-white/8" />

                <div className="flex items-center justify-between text-sm font-body">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <Truck className="h-3.5 w-3.5" /> {selectedShipping?.name}
                  </span>
                  <span className="text-white">
                    {selectedShipping?.price === 0 ? "FREE" : `£${(selectedShipping?.price ?? 0).toFixed(2)}`}
                  </span>
                </div>

                <div className="h-px bg-white/8" />

                <div className="flex items-center justify-between">
                  <span className="text-white font-black font-body">Total</span>
                  <span className="text-yellow-400 font-black text-xl font-display">£{total}</span>
                </div>
              </div>

              {/* Shipping address preview */}
              <div className="bg-white/4 border border-white/8 rounded-2xl p-4">
                <p className="text-gray-400 text-xs font-body font-bold uppercase tracking-wider mb-2">
                  Ships to
                </p>
                <p className="text-white text-sm font-body leading-relaxed">
                  {form.firstName} {form.lastName}<br />
                  {form.addressLine1}
                  {form.addressLine2 && <>, {form.addressLine2}</>}<br />
                  {form.city}{form.county ? `, ${form.county}` : ""} {form.postcode}<br />
                  {COUNTRIES.find(c => c.code === form.countryCode)?.name ?? form.countryCode}
                </p>
                <p className="text-gray-500 text-xs font-body mt-2">{form.email}</p>
              </div>

              <p className="text-gray-600 text-xs font-body text-center leading-relaxed">
                By placing this order you agree to Bookvault's printing & fulfilment terms.
                Your book will be printed fresh and shipped directly to you.
              </p>

              {errorMsg && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 flex items-start gap-3">
                  <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-red-300 text-sm font-body">{errorMsg}</p>
                </div>
              )}
            </div>
          )}

          {/* ── STEP: SUCCESS ───────────────────────────────────────────── */}
          {step === "success" && (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-green-500/15 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-display text-2xl font-black text-white mb-2">Order Placed! 🎉</h3>
              <p className="text-gray-400 text-sm font-body leading-relaxed mb-5">
                Your copy of <span className="text-white font-semibold">{guideTitle}</span> is being printed
                and will ship to <span className="text-white font-semibold">{form.city}</span>.
                A confirmation will be sent to <span className="text-white">{form.email}</span>.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 text-left space-y-2">
                <div className="flex justify-between text-sm font-body">
                  <span className="text-gray-500">Order ref</span>
                  <span className="text-yellow-400 font-bold">{orderRef}</span>
                </div>
                {orderId && orderId !== orderRef && (
                  <div className="flex justify-between text-sm font-body">
                    <span className="text-gray-500">BookVault ID</span>
                    <span className="text-white font-mono text-xs">{orderId}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-body">
                  <span className="text-gray-500">Delivery</span>
                  <span className="text-white">{selectedShipping?.name}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black font-body px-6 py-3.5 rounded-2xl transition-all"
              >
                Continue Exploring Guides
              </button>
            </div>
          )}

          {/* ── STEP: ERROR ─────────────────────────────────────────────── */}
          {step === "error" && (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-red-500/15 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-5">
                <AlertCircle className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="font-display text-2xl font-black text-white mb-2">Something went wrong</h3>
              <p className="text-gray-400 text-sm font-body leading-relaxed mb-5">{errorMsg}</p>
              <button
                onClick={() => { setStep("confirm"); setErrorMsg(""); }}
                className="w-full bg-white/10 hover:bg-white/15 text-white font-bold font-body px-6 py-3.5 rounded-2xl transition-all border border-white/15"
              >
                Try Again
              </button>
            </div>
          )}
        </div>

        {/* Footer CTAs */}
        {(step === "form" || step === "shipping" || step === "confirm") && (
          <div className="px-6 py-4 border-t border-white/8 shrink-0 flex gap-3">
            {/* Back */}
            {step !== "form" && (
              <button
                onClick={() => setStep(step === "shipping" ? "form" : "shipping")}
                className="px-5 py-3 rounded-2xl border border-white/15 text-gray-400 hover:text-white font-body font-semibold text-sm transition-all"
              >
                Back
              </button>
            )}

            {/* Next / Place Order */}
            <button
              disabled={loading}
              onClick={() => {
                if (step === "form") {
                  // Validate required fields
                  const required = ["firstName", "lastName", "email", "addressLine1", "city", "postcode"] as const;
                  const missing  = required.filter((k) => !form[k]);
                  if (missing.length) {
                    setErrorMsg(`Please fill in: ${missing.join(", ")}`);
                    return;
                  }
                  setErrorMsg("");
                  fetchShipping();
                } else if (step === "shipping") {
                  goToConfirm();
                } else if (step === "confirm") {
                  placeOrder();
                }
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 disabled:bg-yellow-400/50 text-gray-900 font-black font-body px-6 py-3.5 rounded-2xl transition-all text-sm"
            >
              {loading ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Processing…</>
              ) : step === "confirm" ? (
                <><Package className="h-4 w-4" /> Place Order · £{total}</>
              ) : (
                <>Continue <ChevronRight className="h-4 w-4" /></>
              )}
            </button>
          </div>
        )}

        {/* Inline error for form step */}
        {errorMsg && step === "form" && (
          <div className="px-6 pb-4 shrink-0">
            <p className="text-red-400 text-xs font-body text-center">{errorMsg}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Small helpers ─────────────────────────────────────────────────────── */
const inputCls =
  "w-full bg-white/5 border border-white/12 text-white placeholder-gray-600 rounded-xl px-3.5 py-2.5 text-sm font-body focus:outline-none focus:border-yellow-400/60 focus:bg-white/8 transition-all";

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-gray-500 text-[11px] font-body font-bold uppercase tracking-wider mb-1.5">
        {icon}
        {label}
      </label>
      {children}
    </div>
  );
}