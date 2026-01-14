"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";

import { 
  ShoppingBag, 
  Backpack, 
  Shirt, 
  Camera, 
  Plane, 
  Shield,
  Heart,
  Star,
  ExternalLink,
  Package,
} from "lucide-react";

// Product data structure
const products = {
  luggage: [
    {
      id: 1,
      name: "Expandable Travel Backpack",
      description: "40L capacity with USB charging port and laptop compartment",
      price: "$45.99",
      rating: 4.8,
      reviews: 2341,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      affiliate: "aliexpress",
      badges: ["Best Seller", "USB Charging"]
    },
    {
      id: 2,
      name: "Hardshell Carry-On Suitcase",
      description: "Lightweight polycarbonate with 360° spinner wheels",
      price: "$89.99",
      rating: 4.7,
      reviews: 1823,
      image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=400&fit=crop",
      affiliate: "aliexpress",
      badges: ["Durable", "TSA Approved"]
    },
    
    {
      id: 3,
      name: "Packing Cubes Set (6pcs)",
      description: "Compression packing organizers for efficient packing",
      price: "$24.99",
      rating: 4.9,
      reviews: 3156,
      image: "https://images.unsplash.com/photo-1581362071042-f0f3f0b4e3e6?w=400&h=400&fit=crop",
      affiliate: "aliexpress",
      badges: ["Top Rated", "Space Saver"]
    },
    {
      id: 4,
      name: "Travel Toiletry Bag",
      description: "Hanging waterproof organizer with multiple compartments",
      price: "$19.99",
      rating: 4.6,
      reviews: 987,
      image: "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=400&h=400&fit=crop",
      affiliate: "shein",
      badges: ["Waterproof"]
    }
  ],
  clothing: [
    {
      id: 5,
      name: "Quick-Dry Travel Pants",
      description: "Lightweight convertible pants with multiple pockets",
      price: "$32.99",
      rating: 4.5,
      reviews: 1456,
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
      affiliate: "shein",
      badges: ["Quick Dry", "Convertible"]
    },
    {
      id: 6,
      name: "Merino Wool Travel T-Shirt",
      description: "Odor-resistant, moisture-wicking performance tee",
      price: "$28.99",
      rating: 4.8,
      reviews: 2103,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      affiliate: "shein",
      badges: ["Merino Wool", "Odor Control"]
    },
    {
      id: 7,
      name: "Packable Rain Jacket",
      description: "Lightweight waterproof jacket that folds into pocket",
      price: "$39.99",
      rating: 4.7,
      reviews: 1678,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      affiliate: "shein",
      badges: ["Waterproof", "Packable"]
    },
    {
      id: 8,
      name: "Travel Scarf with Hidden Pocket",
      description: "Stylish infinity scarf with secret zipper pocket",
      price: "$18.99",
      rating: 4.6,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
      affiliate: "shein",
      badges: ["Hidden Pocket", "Stylish"]
    }
  ],
  tech: [
    {
      id: 9,
      name: "Universal Travel Adapter",
      description: "All-in-one adapter with 4 USB ports for 150+ countries",
      price: "$26.99",
      rating: 4.9,
      reviews: 4521,
      image: "https://images.unsplash.com/photo-1591290619762-d6b8f0529c81?w=400&h=400&fit=crop",
      affiliate: "aliexpress",
      badges: ["Universal", "Best Seller"]
    },
    {
      id: 10,
      name: "Portable Power Bank 20000mAh",
      description: "Fast charging battery pack with LED display",
      price: "$34.99",
      rating: 4.7,
      reviews: 3267,
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
      affiliate: "aliexpress",
      badges: ["Fast Charge", "High Capacity"]
    },
    {
      id: 11,
      name: "Noise Cancelling Earbuds",
      description: "Wireless earbuds with 30hr battery and travel case",
      price: "$49.99",
      rating: 4.6,
      reviews: 2156,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
      affiliate: "aliexpress",
      badges: ["ANC", "Long Battery"]
    },
    {
      id: 12,
      name: "Travel Phone Mount",
      description: "Flexible tripod for phones with remote shutter",
      price: "$15.99",
      rating: 4.5,
      reviews: 1834,
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
      affiliate: "aliexpress",
      badges: ["Versatile"]
    }
  ],
  accessories: [
    {
      id: 13,
      name: "Travel Neck Pillow with Hood",
      description: "Memory foam pillow with built-in hood for privacy",
      price: "$29.99",
      rating: 4.8,
      reviews: 2678,
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop",
      affiliate: "aliexpress",
      badges: ["Memory Foam", "Top Rated"]
    },
    {
      id: 14,
      name: "RFID Blocking Passport Holder",
      description: "Leather passport wallet with RFID protection",
      price: "$16.99",
      rating: 4.7,
      reviews: 1923,
      image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=400&h=400&fit=crop",
      affiliate: "shein",
      badges: ["RFID Protection", "Genuine Leather"]
    },
    {
      id: 15,
      name: "Reusable Water Bottle with Filter",
      description: "Collapsible 600ml bottle with built-in filter",
      price: "$22.99",
      rating: 4.6,
      reviews: 1567,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
      affiliate: "aliexpress",
      badges: ["Eco-Friendly", "Filtered"]
    },
    {
      id: 16,
      name: "Microfiber Travel Towel Set",
      description: "Quick-dry towels in 3 sizes with carry bag",
      price: "$21.99",
      rating: 4.8,
      reviews: 2341,
      image: "https://images.unsplash.com/photo-1585855903916-77c8be5b3e60?w=400&h=400&fit=crop",
      affiliate: "shein",
      badges: ["Quick Dry", "Compact"]
    }
  ]
};

const categories = [
  { id: "luggage", name: "Luggage & Bags", icon: Backpack },
  { id: "clothing", name: "Travel Clothing", icon: Shirt },
  { id: "tech", name: "Tech & Gadgets", icon: Camera },
  { id: "accessories", name: "Accessories", icon: Shield }
];

export default function TravelEssentials() {
  
  const [activeCategory, setActiveCategory] = useState("luggage");

  const getAffiliateButton = (affiliate: string) => {
    if (affiliate === "aliexpress") {
      return {
        text: "Shop on AliExpress",
        color: "bg-red-600 hover:bg-red-700"
      };
    }
    return {
      text: "Shop on SHEIN",
      color: "bg-black hover:bg-gray-800"
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
              <ShoppingBag className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl">Travel Essentials</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Gear up for your next adventure with our curated selection of travel must-haves.
              Quality products at great prices through our trusted partners.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                Verified Reviews
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                <Shield className="mr-1 h-3 w-3" />
                Secure Checkout
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                <Package className="mr-1 h-3 w-3" />
                Fast Shipping
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-2"
              >
                <category.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(products).map(([categoryId, items]) => (
            <TabsContent key={categoryId} value={categoryId} className="mt-0">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((product) => {
                  const affiliateBtn = getAffiliateButton(product.affiliate);
                  return (
                    <Card key={product.id} className="group overflow-hidden transition-all hover:shadow-lg">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute top-2 right-2 flex flex-col gap-2">
                          {product.badges.slice(0, 2).map((badge, idx) => (
                            <Badge key={idx} className="bg-blue-600 text-xs">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="line-clamp-2 text-base">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 text-sm">
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-gray-900">
                            {product.price}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{product.rating}</span>
                            <span className="text-xs text-gray-500">
                              ({product.reviews})
                            </span>
                          </div>
                        </div>
                        <Button className={`w-full ${affiliateBtn.color}`}>
                          {affiliateBtn.text}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Trust Badges Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold">Secure Shopping</h3>
              <p className="mt-2 text-sm text-gray-600">
                Shop with confidence through verified partners
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <Star className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold">Verified Reviews</h3>
              <p className="mt-2 text-sm text-gray-600">
                Real reviews from real travelers
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <Package className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold">Fast Shipping</h3>
              <p className="mt-2 text-sm text-gray-600">
                Quick delivery to your doorstep
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                <Heart className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold">Tested by Us</h3>
              <p className="mt-2 text-sm text-gray-600">
                Personally tested on our travels
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Can't Find What You're Looking For?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Contact us for personalized gear recommendations based on your travel destination and style.
          </p>
          <Button size="lg" className="mt-8 bg-white text-blue-600 hover:bg-blue-50">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}