"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Download, Play, ShoppingBag, Star, MapPin, Users, BookOpen } from "lucide-react";

const continents = [
  {
    name: "Africa",
    slug: "africa",
    icon: "🌍",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop",
    description: "Discover the wild beauty and rich cultures of Africa"
  },
  {
    name: "Europe",
    slug: "europe",
    icon: "🏰",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=400&h=300&fit=crop",
    description: "Explore historic cities and stunning landscapes"
  },
  {
    name: "Asia",
    slug: "asia",
    icon: "🏯",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "Experience ancient traditions and modern marvels"
  },
  {
    name: "North America",
    slug: "north-america",
    icon: "🗽",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "From bustling cities to breathtaking national parks"
  },
  {
    name: "South America",
    slug: "south-america",
    icon: "🗿",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop",
    description: "Adventure through diverse landscapes and vibrant cultures"
  },
  {
    name: "Oceania",
    slug: "oceania",
    icon: "🏝️",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "Tropical paradises and unique wildlife await"
  },
];

const featuredGuides = [
  {
    title: "Ultimate Japan Travel Guide",
    description: "Complete guide to exploring Japan's culture, cuisine, and hidden gems",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=250&fit=crop",
    continent: "Asia",
    rating: 4.9,
    downloads: "12k+",
    slug: "japan-ultimate-guide"
  },
  {
    title: "European Railway Adventures",
    description: "The ultimate guide to train travel across Europe's most scenic routes",
    image: "https://images.unsplash.com/photo-1520637736862-4d197d17c55a?w=400&h=250&fit=crop",
    continent: "Europe",
    rating: 4.8,
    downloads: "8k+",
    slug: "europe-railway-guide"
  },
  {
    title: "African Safari Essentials",
    description: "Everything you need to know for the perfect African safari experience",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=250&fit=crop",
    continent: "Africa",
    rating: 4.9,
    downloads: "6k+",
    slug: "africa-safari-guide"
  }
];

const stats = [
  { icon: MapPin, label: "Countries Covered", value: "150+" },
  { icon: BookOpen, label: "Travel Guides", value: "50+" },
  { icon: Users, label: "Happy Travelers", value: "100k+" },
  { icon: Star, label: "Average Rating", value: "4.9" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Discover the World with
              <span className="block text-yellow-400">Wanderlust Guides</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Your ultimate companion for unforgettable adventures. From comprehensive travel guides
              to essential gear recommendations and inspiring YouTube content.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400" asChild>
                <Link href="/guides">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Travel Guides
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="bg-gray-200 text-black hover:bg-white">
                <Play className="mr-2 h-5 w-5" />
                Watch on YouTube
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continents Quick Links */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore by Continent
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose your next adventure destination
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {continents.map((continent) => (
              <Link key={continent.slug} href={`/guides/${continent.slug}`}>
                <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={continent.image}
                      alt={continent.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl">{continent.icon}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {continent.name}
                    </CardTitle>
                    <CardDescription>{continent.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Travel Guides
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our most popular and comprehensive guides
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {featuredGuides.map((guide, index) => (
              <Card key={index} className="group cursor-pointer transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{guide.continent}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{guide.rating}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{guide.downloads}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Sections */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* YouTube CTA */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-red-500 to-red-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-white/20 p-3">
                    <Play className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">YouTube Channel</h3>
                    <p className="text-red-100">Watch our travel adventures and tips</p>
                  </div>
                </div>
                <p className="mt-4 text-red-100">
                  Join thousands of travelers watching our exclusive content, destination reviews,
                  and travel tips on our YouTube channel.
                </p>
                <Button className="mt-6 bg-white text-red-600 hover:bg-red-50">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Now
                </Button>
              </CardContent>
            </Card>

            {/* Travel Essentials CTA */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-white/20 p-3">
                    <ShoppingBag className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Travel Essentials</h3>
                    <p className="text-green-100">Gear up for your next adventure</p>
                  </div>
                </div>
                <p className="mt-4 text-green-100">
                  Discover our curated collection of travel essentials, from luggage to gadgets,
                  all at great prices with our exclusive affiliate partnerships.
                </p>
                <Button className="mt-6 bg-white text-green-600 hover:bg-green-50">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
