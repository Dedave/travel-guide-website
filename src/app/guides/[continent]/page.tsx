"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Download, Star, FileText, Globe, Book } from "lucide-react";
import { getContinentGuides } from "@/data/guidesData";
import { use } from "react";

interface ContinentData {
    name: string;
    icon: string;
    description: string;
    heroImage: string;
}

// Continent metadata - add this to match your existing structure
const continentMetadata: { [key: string]: ContinentData } = {
    africa: {
        name: "Africa",
        icon: "🌍",
        description: "Discover the wild beauty and rich cultures of Africa",
        heroImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&h=600&fit=crop",
    },
    europe: {
        name: "Europe",
        icon: "🏰",
        description: "Explore historic cities and stunning landscapes",
        heroImage: "https://images.unsplash.com/photo-1520637736862-4d197d17c55a?w=1920&h=600&fit=crop",
    },
    asia: {
        name: "Asia",
        icon: "🏯",
        description: "Experience ancient traditions and modern marvels",
        heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=600&fit=crop",
    },
    "north-america": {
        name: "North America",
        icon: "🗽",
        description: "From bustling cities to breathtaking national parks",
        heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=600&fit=crop",
    },
    "south-america": {
        name: "South America",
        icon: "🗿",
        description: "Adventure through diverse landscapes and vibrant cultures",
        heroImage: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=1920&h=600&fit=crop",
    },
    oceania: {
        name: "Oceania",
        icon: "🏝️",
        description: "Tropical paradises and unique wildlife await",
        heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=600&fit=crop",
    }
};

export default function ContinentGuidesPage({ params }: { params: Promise<{ continent: string }> }) {
    // Unwrap the params Promise in Next.js 15
    const { continent } = use(params);
    
    // Get guides from the data file
    const guides = getContinentGuides(continent);
    const metadata = continentMetadata[continent];

    // If continent doesn't exist
    if (!metadata || guides.length === 0) {
        return (
            <div className="min-h-screen bg-white">
                <Navigation />
                <div className="mx-auto max-w-7xl px-4 py-24 text-center">
                    <h1 className="text-4xl font-bold">Continent not found</h1>
                    <Link href="/">
                        <Button className="mt-8">Return Home</Button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const featuredGuides = guides.filter(g => g.featured);
    const otherGuides = guides.filter(g => !g.featured);

    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            
            {/* Hero Section */}
            <section className="relative h-96 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${metadata.heroImage}')` }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
                <div className="relative mx-auto max-w-7xl px-4 h-full flex flex-col justify-center sm:px-6 lg:px-8">
                    <Link href="/">
                        <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 mb-4 w-fit">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                    <div className="flex items-center space-x-4">
                        <span className="text-7xl">{metadata.icon}</span>
                        <div>
                            <h1 className="text-5xl font-bold text-white">{metadata.name}</h1>
                            <p className="mt-2 text-xl text-gray-200">{metadata.description}</p>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center space-x-6 text-white">
                        <div className="flex items-center space-x-2">
                            <FileText className="h-5 w-5" />
                            <span>{guides.length} Guides Available</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Download className="h-5 w-5" />
                            <span>{guides.reduce((sum, g) => sum + parseFloat(g.downloads.replace('k', '')), 0).toFixed(1)}k+ Downloads</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Guides */}
            {featuredGuides.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900">Featured Guides</h2>
                            <p className="mt-2 text-gray-600">Our most popular and comprehensive guides for {metadata.name}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            {featuredGuides.map(guide => (
                                <Card key={guide.id} className="group hover:shadow-xl transition-all duration-300">
                                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                                        <img src={guide.image} alt={guide.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                        <Badge className="absolute top-4 left-4 bg-yellow-500 text-black">Featured</Badge>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="group-hover:text-blue-600 transition-colors">{guide.title}</CardTitle>
                                        <CardDescription>{guide.description}</CardDescription>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {guide.tags.map((tag, idx) => (
                                                <Badge key={idx} variant="outline" className="text-xs">{tag}</Badge>
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
                                            <Link href={`/guides/${continent}/${guide.id}`}>
                                                <Book className="mr-2 h-4 w-4" />
                                                View Guide Details
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Other Guides */}
            {otherGuides.length > 0 && (
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900">All {metadata.name} Guides</h2>
                            <p className="mt-2 text-gray-600">Explore our complete collection</p>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {otherGuides.map(guide => (
                                <Card key={guide.id} className="group hover:shadow-xl transition-all duration-300">
                                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                                        <img src={guide.image} alt={guide.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{guide.title}</CardTitle>
                                        <CardDescription className="text-sm">{guide.description}</CardDescription>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {guide.tags.map((tag, idx) => (
                                                <Badge key={idx} variant="outline" className="text-xs">{tag}</Badge>
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
                                        <Button className="w-full" asChild>
                                            <Link href={`/guides/${continent}/${guide.id}`}>
                                                <Book className="mr-2 h-4 w-4" />
                                                View Guide Details
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-16 bg-blue-600">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white">Can't Find What You're Looking For?</h2>
                    <p className="mt-4 text-xl text-blue-100">We're constantly adding new guides. Check back soon or explore other continents!</p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                            <Link href="/">
                                <Globe className="mr-2 h-5 w-5" />
                                Explore Other Continents
                            </Link>
                        </Button>
                        <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400" asChild>
                            <Link href="/contact">Request a Guide</Link>
                        </Button>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
}