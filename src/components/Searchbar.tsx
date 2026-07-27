"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, X, MapPin } from "lucide-react";
import { getAllGuides, Guide } from "@/data/guidesData";

interface SearchBarProps {
  variant?: "dark" | "light";
  placeholder?: string;
  className?: string;
  /** Optional: restrict autocomplete results to one continent (used on continent pages) */
  continentSlug?: string;
}

export default function SearchBar({
  variant = "dark",
  placeholder = "Search destinations, countries, or themes…",
  className = "",
  continentSlug,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const allGuides = getAllGuides();

  const results: Guide[] =
    query.trim().length > 0
      ? allGuides
          .filter((g) => {
            if (continentSlug && g.continentSlug !== continentSlug) return false;
            const q = query.toLowerCase();
            return (
              g.title.toLowerCase().includes(q) ||
              g.description.toLowerCase().includes(q) ||
              (g.country ?? "").toLowerCase().includes(q) ||
              g.continent.toLowerCase().includes(q) ||
              g.tags.some((t) => t.toLowerCase().includes(q))
            );
          })
          .slice(0, 6)
      : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/guides?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
    }
  };

  const isDark = variant === "dark";

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <Search
          className={`absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => query && setIsOpen(true)}
          placeholder={placeholder}
          className={`w-full rounded-2xl pl-14 pr-12 py-4 text-sm font-body focus:outline-none transition-all ${
            isDark
              ? "bg-white/8 backdrop-blur-sm border border-white/15 text-gray placeholder-gray-500 focus:border-blue-500"
              : "bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 shadow-sm"
          }`}
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${
              isDark ? "text-gray-500 hover:text-white" : "text-gray-400 hover:text-gray-700"
            }`}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </form>

      {isOpen && results.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
          {results.map((guide) => (
            <Link
              key={guide.id}
              href={`/guides/${guide.continentSlug}/${guide.id}`}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
            >
              <img
                src={guide.image}
                alt={guide.title}
                className="w-12 h-12 rounded-xl object-cover shrink-0"
              />
              <div className="min-w-0">
                <div className="text-sm font-semibold text-gray-900 truncate">
                  {guide.countryFlag} {guide.title}
                </div>
                <div className="text-xs text-gray-400 flex items-center gap-1 truncate">
                  <MapPin className="h-3 w-3 shrink-0" />
                  {guide.country} · {guide.continent}
                </div>
              </div>
            </Link>
          ))}
          <button
            onClick={handleSubmit}
            className="w-full text-center px-5 py-3 text-xs font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
          >
            See all results for &quot;{query}&quot;
          </button>
        </div>
      )}

      {isOpen && query.trim().length > 0 && results.length === 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 text-center z-50">
          <p className="text-sm text-gray-400">No destinations found for &quot;{query}&quot;</p>
        </div>
      )}
    </div>
  );
}