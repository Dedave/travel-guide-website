import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";
import { Mail, Youtube, Instagram, Facebook, MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Wanderlust Travel Guides. Questions about a guide, a partnership, or your order? Send us a message and we'll reply as soon as we can.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: "Contact Us | Wanderlust Travel Guides",
    description:
      "Get in touch with Wanderlust Travel Guides. Questions about a guide, a partnership, or your order? Send us a message.",
    url: "/contact",
  },
};

const socials = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@WanderlustTravelGuides",
    icon: Youtube,
    color: "hover:text-red-500",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/wanderlusttravs_",
    icon: Instagram,
    color: "hover:text-pink-500",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/share/1Dd4n1vRRX/?mibextid=wwXIfr",
    icon: Facebook,
    color: "hover:text-blue-500",
  },
];

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us",
    url: absoluteUrl("/contact"),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Contact", item: absoluteUrl("/contact") },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-5xl mx-auto px-4 py-16 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium mb-5">
              <MessageCircle className="h-4 w-4" />
              We'd love to hear from you
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Contact Us
            </h1>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-base sm:text-lg">
              Have a question about a guide, need help with an order, or want to
              partner with us? Drop us a message and we'll get back to you as soon
              as we can.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-4 py-12 sm:py-16">
          <div className="grid gap-8 md:grid-cols-5">
            {/* Info column */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-slate-900">Email us</h2>
                    <a
                      href="mailto:hello@wanderlusttravelguides.com"
                      className="text-blue-600 hover:underline text-sm break-all"
                    >
                      hello@wanderlusttravelguides.com
                    </a>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  We typically reply within 1–2 business days.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h2 className="font-semibold text-slate-900 mb-4">Follow along</h2>
                <div className="flex items-center gap-4">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className={`h-11 w-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 transition-colors ${s.color}`}
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900 mb-1">
                  Send a message
                </h2>
                <p className="text-sm text-slate-500 mb-6">
                  Fill in the form below and we'll be in touch.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
