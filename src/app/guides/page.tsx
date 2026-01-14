 "use client"
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search, Download, Star, FileText, Filter, MapPin, ArrowRight } from "lucide-react";

// TypeScript interfaces
interface Guide {
    id: string;
    title: string;
    description: string;
    image: string;
    continent: string;
    rating: number;
    downloads: string;
    pages: number;
    googleDriveUrl: string;
    tags: string[];
}

interface GuidesDataType {
    [key: string]: Guide[];
}

// Import the same guides data structure
const allGuidesData: GuidesDataType = {
  africa: [
    {
      id: "kenya-safari",
      title: "Ultimate Kenya Safari Guide",
      description: "Complete guide to Kenya's national parks, wildlife, and safari planning",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=250&fit=crop",
      continent: "Africa",
      rating: 4.9,
      downloads: "5.2k",
      pages: 85,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Safari", "Wildlife", "Nature"]
    },
    {
      id: "morocco-culture",
      title: "Morocco Cultural Journey",
      description: "Explore Morocco's imperial cities, souks, and Sahara desert",
      image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400&h=250&fit=crop",
      continent: "Africa",
      rating: 4.8,
      downloads: "3.8k",
      pages: 72,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Culture", "Cities", "Desert"]
    },
    {
      id: "tanzania-adventure",
      title: "Tanzania Adventure Guide",
      description: "Kilimanjaro, Serengeti, and Zanzibar travel essentials",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=250&fit=crop",
      continent: "Africa",
      rating: 4.9,
      downloads: "4.1k",
      pages: 95,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Adventure", "Safari", "Beach"]
    },
    {
      id: "egypt-historical",
      title: "Ancient Egypt Explorer",
      description: "Pyramids, temples, and Nile cruise comprehensive guide",
      image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400&h=250&fit=crop",
      continent: "Africa",
      rating: 4.7,
      downloads: "6.3k",
      pages: 78,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["History", "Culture", "Archaeology"]
    },
    {
      id: "south-africa-complete",
      title: "South Africa Complete",
      description: "Cape Town, Garden Route, and Kruger National Park guide",
      image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=400&h=250&fit=crop",
      continent: "Africa",
      rating: 4.8,
      downloads: "5.7k",
      pages: 92,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Safari", "Wine", "Beaches"]
    }
  ],
  europe: [
    {
      id: "italy-ultimate",
      title: "Ultimate Italy Guide",
      description: "Rome, Venice, Florence, and the Amalfi Coast",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&h=250&fit=crop",
      continent: "Europe",
      rating: 4.9,
      downloads: "9.2k",
      pages: 120,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Cities", "Food", "History"]
    },
    {
      id: "france-romantic",
      title: "Romantic France",
      description: "Paris, Provence, and French Riviera complete guide",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=250&fit=crop",
      continent: "Europe",
      rating: 4.8,
      downloads: "8.5k",
      pages: 105,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Romance", "Food", "Wine"]
    },
    {
      id: "spain-culture",
      title: "Spanish Cultural Journey",
      description: "Barcelona, Madrid, Andalusia, and Basque Country",
      image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400&h=250&fit=crop",
      continent: "Europe",
      rating: 4.7,
      downloads: "7.1k",
      pages: 98,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Culture", "Food", "Architecture"]
    },
    {
      id: "greece-islands",
      title: "Greek Islands Paradise",
      description: "Santorini, Mykonos, Crete, and ancient Athens",
      image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=400&h=250&fit=crop",
      continent: "Europe",
      rating: 4.9,
      downloads: "6.8k",
      pages: 88,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Islands", "Beach", "History"]
    },
    {
      id: "scandinavia-northern",
      title: "Scandinavia & Northern Lights",
      description: "Norway, Sweden, Finland, and Iceland adventures",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&h=250&fit=crop",
      continent: "Europe",
      rating: 4.8,
      downloads: "5.4k",
      pages: 110,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Nature", "Northern Lights", "Adventure"]
    }
  ],
  asia: [
    {
      id: "japan-ultimate",
      title: "Ultimate Japan Travel Guide",
      description: "Tokyo, Kyoto, Osaka, and hidden gems across Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=250&fit=crop",
      continent: "Asia",
      rating: 4.9,
      downloads: "12.3k",
      pages: 135,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Culture", "Food", "Technology"]
    },
    {
      id: "thailand-adventure",
      title: "Thailand Adventure Guide",
      description: "Bangkok, Chiang Mai, islands, and authentic experiences",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&h=250&fit=crop",
      continent: "Asia",
      rating: 4.8,
      downloads: "10.1k",
      pages: 95,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Beach", "Culture", "Food"]
    },
    {
      id: "vietnam-backpacker",
      title: "Vietnam Backpacker's Guide",
      description: "North to South: Complete Vietnam travel guide",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&h=250&fit=crop",
      continent: "Asia",
      rating: 4.7,
      downloads: "6.9k",
      pages: 82,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Budget", "Culture", "Food"]
    },
    {
      id: "bali-indonesia",
      title: "Bali & Indonesia Explorer",
      description: "Bali, Java, Komodo, and Indonesian archipelago",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=250&fit=crop",
      continent: "Asia",
      rating: 4.8,
      downloads: "8.7k",
      pages: 90,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Beach", "Culture", "Nature"]
    },
    {
      id: "india-golden-triangle",
      title: "India Golden Triangle & Beyond",
      description: "Delhi, Agra, Jaipur, and extended India routes",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=250&fit=crop",
      continent: "Asia",
      rating: 4.6,
      downloads: "5.8k",
      pages: 108,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Culture", "History", "Spirituality"]
    }
  ],
  "north-america": [
    {
      id: "usa-national-parks",
      title: "USA National Parks Guide",
      description: "Complete guide to America's most stunning national parks",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      continent: "North America",
      rating: 4.9,
      downloads: "11.2k",
      pages: 142,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Nature", "Hiking", "Wildlife"]
    },
    {
      id: "new-york-city",
      title: "New York City Complete",
      description: "Manhattan, Brooklyn, and all NYC neighborhoods",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=250&fit=crop",
      continent: "North America",
      rating: 4.8,
      downloads: "9.8k",
      pages: 88,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["City", "Food", "Culture"]
    },
    {
      id: "canada-rockies",
      title: "Canadian Rockies Adventure",
      description: "Banff, Jasper, and Western Canada wilderness",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&h=250&fit=crop",
      continent: "North America",
      rating: 4.9,
      downloads: "6.5k",
      pages: 78,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Nature", "Adventure", "Wildlife"]
    },
    {
      id: "mexico-cultural",
      title: "Mexico Cultural Journey",
      description: "Ancient ruins, colonial cities, and beach paradises",
      image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&h=250&fit=crop",
      continent: "North America",
      rating: 4.8,
      downloads: "8.1k",
      pages: 96,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Culture", "History", "Beach"]
    }
  ],
  "south-america": [
    {
      id: "peru-machu-picchu",
      title: "Peru & Machu Picchu Guide",
      description: "Complete guide to Peru's ancient wonders and adventures",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=250&fit=crop",
      continent: "South America",
      rating: 4.9,
      downloads: "7.8k",
      pages: 98,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Adventure", "History", "Hiking"]
    },
    {
      id: "brazil-complete",
      title: "Brazil Complete Explorer",
      description: "Rio, Amazon, beaches, and Brazilian culture",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=250&fit=crop",
      continent: "South America",
      rating: 4.7,
      downloads: "6.4k",
      pages: 112,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Beach", "Nature", "Culture"]
    },
    {
      id: "argentina-chile",
      title: "Argentina & Chile Patagonia",
      description: "Patagonia, Buenos Aires, and Andes adventures",
      image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=400&h=250&fit=crop",
      continent: "South America",
      rating: 4.8,
      downloads: "5.2k",
      pages: 105,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Nature", "Adventure", "Wine"]
    },
    {
      id: "colombia-adventure",
      title: "Colombia Adventure Guide",
      description: "Cartagena, Bogotá, coffee region, and Caribbean coast",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=250&fit=crop",
      continent: "South America",
      rating: 4.6,
      downloads: "4.1k",
      pages: 82,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Culture", "Coffee", "Beach"]
    }
  ],
  oceania: [
    {
      id: "australia-complete",
      title: "Australia Complete Guide",
      description: "East coast, Outback, and everything Australian",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=250&fit=crop",
      continent: "Oceania",
      rating: 4.9,
      downloads: "10.5k",
      pages: 125,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Beach", "Nature", "Adventure"]
    },
    {
      id: "new-zealand-adventure",
      title: "New Zealand Adventure",
      description: "North and South Island complete adventure guide",
      image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&h=250&fit=crop",
      continent: "Oceania",
      rating: 4.9,
      downloads: "8.9k",
      pages: 108,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Adventure", "Nature", "Hiking"]
    },
    {
      id: "fiji-islands",
      title: "Fiji Islands Paradise",
      description: "Island hopping and tropical paradise guide",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
      continent: "Oceania",
      rating: 4.7,
      downloads: "4.3k",
      pages: 65,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Beach", "Islands", "Relaxation"]
    }
  ]
};

export default function AllGuidesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContinent, setSelectedContinent] = useState<string>("all");

  // Flatten all guides into a single array
  const allGuides = Object.entries(allGuidesData).flatMap(([continent, guides]) => guides);

  // Filter guides based on search and continent
  const filteredGuides = allGuides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesContinent = selectedContinent === "all" || guide.continent.toLowerCase().replace(" ", "-") === selectedContinent;
    return matchesSearch && matchesContinent;
  });

  const continents = [
    { name: "All Guides", value: "all", icon: "🌎" },
    { name: "Africa", value: "africa", icon: "🌍" },
    { name: "Europe", value: "europe", icon: "🏰" },
    { name: "Asia", value: "asia", icon: "🏯" },
    { name: "North America", value: "north-america", icon: "🗽" },
    { name: "South America", value: "south-america", icon: "🗿" },
    { name: "Oceania", value: "oceania", icon: "🏝️" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Explore Our Travel Guides
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Discover comprehensive guides for destinations around the world
            </p>
            <div className="mt-8 flex items-center justify-center space-x-6 text-white">
              <div className="flex items-center space-x-2">
                <FileText className="h-6 w-6" />
                <span className="text-lg font-semibold">{allGuides.length}+ Guides</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6" />
                <span className="text-lg font-semibold">6 Continents</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="h-6 w-6" />
                <span className="text-lg font-semibold">100k+ Downloads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Continent Filter */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
              {continents.map((continent) => (
                <Button
                  key={continent.value}
                  variant={selectedContinent === continent.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedContinent(continent.value)}
                  className="whitespace-nowrap"
                >
                  <span className="mr-1">{continent.icon}</span>
                  {continent.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredGuides.length} {filteredGuides.length === 1 ? 'guide' : 'guides'}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredGuides.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredGuides.map((guide: any) => (
                <Card key={guide.id} className="group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600">
                      {guide.continent}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      {guide.title}
                    </CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {guide.tags.map((tag: string, idx: number) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{guide.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{guide.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FileText className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{guide.pages}p</span>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                      <a href={guide.googleDriveUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Download Guide
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No guides found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
              <Button onClick={() => { setSearchQuery(""); setSelectedContinent("all"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Browse by Continent CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Browse by Continent</h2>
            <p className="mt-2 text-gray-600">Explore destination-specific guides</p>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-6">
            {continents.slice(1).map((continent) => (
              <Link key={continent.value} href={`/guides/${continent.value}`}>
                <Card className="group cursor-pointer text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="text-5xl mb-3">{continent.icon}</div>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {continent.name}
                    </p>
                    <ArrowRight className="h-4 w-4 mx-auto mt-2 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}