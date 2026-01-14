"use client";

import { use } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Calendar, 
  Clock, 
  DollarSign,
  Download, 
  Heart,
  Globe,
  TrendingUp,
  BookOpen,
  Share2
} from "lucide-react";
import { getGuide } from "@/data/guidesData";

interface GuideDetailPageProps {
  params: Promise<{
    continent: string;
    guide: string;
  }>;
}

export default function GuideDetailPage({ params }: GuideDetailPageProps) {
  // Unwrap the params Promise in Next.js 15
  const resolvedParams = use(params);
  const guide = getGuide(resolvedParams.continent, resolvedParams.guide);

  if (!guide) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="mx-auto max-w-7xl px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Guide not found</h1>
          <p className="text-gray-600 mb-8">
            The guide you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/guides">
            <Button>Browse All Guides</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src={guide.heroImage} 
            alt={guide.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative h-full flex flex-col justify-between">
          {/* Back Button */}
          <div className="pt-6 px-4 sm:px-6 lg:px-8">
            <Link href={`/guides/${resolvedParams.continent}`}>
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {guide.continent}
              </Button>
            </Link>
          </div>
          
          {/* Title Section */}
          <div className="pb-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-4 bg-white/20 text-white border-white backdrop-blur-sm">
                {guide.continent}
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                {guide.title}
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-light">
                {guide.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Bar */}
      <section className="py-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white sticky top-0 z-10 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div>
              <Calendar className="h-6 w-6 mx-auto mb-2 text-yellow-300" />
              <div className="text-xs text-blue-100">Best Time</div>
              <div className="font-semibold text-sm mt-1">{guide.quickFacts.bestTime}</div>
            </div>
            <div>
              <Clock className="h-6 w-6 mx-auto mb-2 text-yellow-300" />
              <div className="text-xs text-blue-100">Duration</div>
              <div className="font-semibold text-sm mt-1">{guide.quickFacts.duration}</div>
            </div>
            <div>
              <DollarSign className="h-6 w-6 mx-auto mb-2 text-yellow-300" />
              <div className="text-xs text-blue-100">Budget</div>
              <div className="font-semibold text-sm mt-1">{guide.quickFacts.budget}</div>
            </div>
            <div>
              <MapPin className="h-6 w-6 mx-auto mb-2 text-yellow-300" />
              <div className="text-xs text-blue-100">Highlights</div>
              <div className="font-semibold text-sm mt-1">{guide.quickFacts.highlights}+ Places</div>
            </div>
            <div>
              <Globe className="h-6 w-6 mx-auto mb-2 text-yellow-300" />
              <div className="text-xs text-blue-100">Language</div>
              <div className="font-semibold text-sm mt-1">{guide.quickFacts.language}</div>
            </div>
            <div>
              <DollarSign className="h-6 w-6 mx-auto mb-2 text-yellow-300" />
              <div className="text-xs text-blue-100">Currency</div>
              <div className="font-semibold text-sm mt-1">{guide.quickFacts.currency}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8">About This Destination</h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            {guide.overview}
          </p>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500 fill-yellow-500" />
              <div className="text-3xl font-bold text-gray-900">{guide.rating}</div>
              <div className="text-sm text-gray-600">Guide Rating</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Download className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-3xl font-bold text-gray-900">{guide.downloads}</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-3xl font-bold text-gray-900">{guide.pages}</div>
              <div className="text-sm text-gray-600">Pages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Must-Visit Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guide.destinations.map((dest, idx) => (
              <Card key={idx} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                    <p className="text-gray-200">{dest.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Information */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Essential Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guide.essentialInfo.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <IconComponent className="h-12 w-12 mb-4 text-blue-600" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Highlights */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Top Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guide.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <TrendingUp className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insider Tips */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Insider Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guide.tips.map((tip, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <span className="text-yellow-300 font-bold text-lg flex-shrink-0">✓</span>
                <p className="text-white/90">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-red-500" />
          <h2 className="text-4xl font-bold mb-4">Download the Complete Guide</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the full {guide.pages}-page guide with detailed maps, sample itineraries, 
            accommodation recommendations, cultural insights, and much more!
          </p>
          
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-xl">{guide.rating}</span>
              <span className="text-gray-400">rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Download className="h-6 w-6 text-gray-400" />
              <span className="font-bold text-xl">{guide.downloads}</span>
              <span className="text-gray-400">downloads</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-gray-400" />
              <span className="font-bold text-xl">{guide.pages}</span>
              <span className="text-gray-400">pages</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-6" asChild>
              <a href={guide.googleDriveUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Free Guide
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-12 py-6"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: guide.title,
                    text: guide.description,
                    url: window.location.href
                  });
                }
              }}
            >
              <Share2 className="mr-2 h-5 w-5" />
              Share Guide
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-gray-400">
            Updated 2024 • Free PDF Download • No signup required
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}