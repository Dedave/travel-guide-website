import { 
  Plane, 
  Camera, 
  Users, 
  Utensils, 
  DollarSign, 
  Info,
  LucideIcon
} from "lucide-react";

// TypeScript interfaces
interface QuickFacts {
  bestTime: string;
  duration: string;
  budget: string;
  highlights: number;
  language: string;
  currency: string;
}

interface Destination {
  name: string;
  description: string;
  image: string;
}

interface EssentialInfo {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Guide {
  // Basic info (from your existing structure)
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
  featured?: boolean;
  
  // Enhanced info (for detail page)
  subtitle: string;
  heroImage: string;
  quickFacts: QuickFacts;
  overview: string;
  destinations: Destination[];
  essentialInfo: EssentialInfo[];
  highlights: string[];
  tips: string[];
}

interface ContinentGuides {
  [key: string]: Guide[];
}

export const allGuidesData: ContinentGuides = {
  africa: [
    {
      // Basic info
      id: "kenya-safari",
      title: "Ultimate Kenya Safari Guide",
      description: "Complete guide to Kenya's national parks, wildlife, and safari planning",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=250&fit=crop",
      continent: "Africa",
      rating: 4.9,
      downloads: "5.2k",
      pages: 85,
      googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
      tags: ["Safari", "Wildlife", "Nature"],
      featured: true,
      
      // Enhanced info
      subtitle: "The Ultimate Safari Adventure",
      heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop",
      
      quickFacts: {
        bestTime: "July-October (Great Migration), January-February",
        duration: "7-10 days recommended",
        budget: "$$ - Moderate",
        highlights: 35,
        language: "English & Swahili",
        currency: "Kenyan Shilling (KES)"
      },
      
      overview: "Kenya is the beating heart of African safari, where the drama of the wild unfolds daily across vast savannas. Witness the Great Migration, track the Big Five, and immerse yourself in the rich Maasai culture. From the iconic Maasai Mara to pristine Indian Ocean beaches, Kenya offers the Africa of your dreams.",
      
      destinations: [
        {
          name: "Maasai Mara",
          description: "Home to the world-famous Great Migration and incredible year-round wildlife viewing. Experience close encounters with lions, elephants, and cheetahs across endless plains.",
          image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop"
        },
        {
          name: "Amboseli National Park",
          description: "Best elephant viewing in Africa with Mount Kilimanjaro as a stunning backdrop. Watch massive herds against Africa's highest peak in this photographer's paradise.",
          image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop"
        },
        {
          name: "Diani Beach",
          description: "Pristine white sand beaches and turquoise waters of the Indian Ocean. Perfect for relaxation after your safari adventure, with coral reefs for snorkeling.",
          image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop"
        },
        {
          name: "Nairobi",
          description: "Vibrant capital city with unique attractions like the Giraffe Centre and David Sheldrick Elephant Orphanage. Gateway to your safari adventure.",
          image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=600&fit=crop"
        }
      ],
      
      essentialInfo: [
        {
          icon: Plane,
          title: "Best Safari Parks",
          description: "Maasai Mara for the migration, Amboseli for elephants, Tsavo for wilderness, Lake Nakuru for flamingos. Each offers unique wildlife experiences."
        },
        {
          icon: Camera,
          title: "Photography Tips",
          description: "Bring telephoto lens (200-400mm), extra batteries, and dust protection. Golden hours provide the best light. Respect animal behavior."
        },
        {
          icon: Users,
          title: "Safari Vehicles",
          description: "4x4 safari vehicles with pop-up roofs for optimal viewing. Private vehicles offer more flexibility than group tours. Book experienced guides."
        },
        {
          icon: Utensils,
          title: "What to Pack",
          description: "Neutral-colored clothing, sun protection, binoculars, layers for cool mornings. Avoid bright colors that can disturb animals."
        },
        {
          icon: DollarSign,
          title: "Budget Planning",
          description: "Mid-range safaris from $200-400/day. Includes accommodation, meals, and game drives. Book during shoulder season for better rates."
        },
        {
          icon: Info,
          title: "Health & Safety",
          description: "Yellow fever vaccination required. Malaria prophylaxis recommended. Travel insurance essential. Stay in vehicle during game drives."
        }
      ],
      
      highlights: [
        "Witness the Great Migration river crossings",
        "Track the Big Five in Maasai Mara",
        "Hot air balloon safari at sunrise",
        "Visit Maasai village for cultural immersion",
        "Photograph elephants with Mt. Kilimanjaro backdrop",
        "Spot flamingos at Lake Nakuru",
        "Relax on Diani Beach after safari",
        "Visit David Sheldrick Elephant Orphanage",
        "Experience authentic bush camping",
        "Watch predators hunt on the savanna"
      ],
      
      tips: [
        "Book safari during dry season (July-October) for best wildlife viewing",
        "Wake up early - dawn and dusk game drives offer best animal activity",
        "Respect wildlife - maintain safe distances and never leave vehicle",
        "Bring binoculars to enhance viewing experience significantly",
        "Pack dustproof bags for cameras and electronics",
        "Wear neutral colors (khaki, olive, beige) - avoid bright colors",
        "Stay quiet during game drives to avoid startling wildlife",
        "Tip your safari guide generously - they make or break your experience",
        "Book hot air balloon safari over the Mara for unforgettable views",
        "Combine safari with beach extension in Diani or Mombasa"
      ]
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
      tags: ["Culture", "Cities", "Desert"],
      featured: false,
      
      subtitle: "From Marrakech to the Sahara",
      heroImage: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920&h=1080&fit=crop",
      
      quickFacts: {
        bestTime: "March-May, September-November",
        duration: "7-10 days recommended",
        budget: "$$ - Moderate",
        highlights: 28,
        language: "Arabic & French",
        currency: "Moroccan Dirham (MAD)"
      },
      
      overview: "Morocco captivates with its vibrant souks, ancient medinas, and stunning desert landscapes. Experience the magic of Marrakech, explore the blue streets of Chefchaouen, trek the Atlas Mountains, and spend nights under stars in the Sahara Desert.",
      
      destinations: [
        {
          name: "Marrakech",
          description: "The Red City with bustling souks, stunning palaces, and the famous Jemaa el-Fnaa square. A feast for all senses.",
          image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&h=600&fit=crop"
        },
        {
          name: "Chefchaouen",
          description: "The Blue Pearl of Morocco with stunning blue-washed buildings nestled in the Rif Mountains.",
          image: "https://images.unsplash.com/photo-1558969997-659ee628c2d7?w=800&h=600&fit=crop"
        },
        {
          name: "Sahara Desert",
          description: "Experience camel treks, desert camps, and unforgettable sunrises over golden sand dunes.",
          image: "https://images.unsplash.com/photo-1509027572446-af8401acfdc3?w=800&h=600&fit=crop"
        },
        {
          name: "Fes",
          description: "Ancient medina with the world's oldest university and traditional tanneries. A step back in time.",
          image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=600&fit=crop"
        }
      ],
      
      essentialInfo: [
        {
          icon: Plane,
          title: "Getting Around",
          description: "Trains connect major cities. Private drivers recommended for desert trips. Medinas best explored on foot."
        },
        {
          icon: Camera,
          title: "Photography",
          description: "Ask permission before photographing people. Best light in early morning and late afternoon. Vibrant colors everywhere."
        },
        {
          icon: Users,
          title: "Cultural Etiquette",
          description: "Dress modestly, especially in religious sites. Learn basic Arabic phrases. Bargaining expected in souks."
        },
        {
          icon: Utensils,
          title: "Moroccan Cuisine",
          description: "Try tagines, couscous, mint tea, and fresh bread. Street food is delicious and safe in tourist areas."
        },
        {
          icon: DollarSign,
          title: "Budget Tips",
          description: "Riads offer great value. Local restaurants cheaper than tourist spots. Bargain for everything in souks."
        },
        {
          icon: Info,
          title: "Best Tips",
          description: "Stay in traditional riads. Book Sahara tours in advance. Carry small bills for tips and small purchases."
        }
      ],
      
      highlights: [
        "Get lost in Marrakech's vibrant souks",
        "Sleep under stars in Sahara desert camp",
        "Explore the blue streets of Chefchaouen",
        "Visit ancient medina of Fes",
        "Ride camels across sand dunes",
        "Experience traditional hammam spa",
        "Trek in the Atlas Mountains",
        "Enjoy mint tea on rooftop terraces",
        "Shop for handmade carpets and pottery",
        "Watch sunset over desert dunes"
      ],
      
      tips: [
        "Learn a few Arabic phrases - locals appreciate the effort",
        "Dress modestly to respect local culture",
        "Always bargain in souks - start at 30-40% of asking price",
        "Stay hydrated, especially in desert regions",
        "Book riads in old medinas for authentic experience",
        "Hire official guides for complex medinas",
        "Carry toilet paper and hand sanitizer",
        "Try street food - it's delicious and generally safe",
        "Take overnight desert tour for full Sahara experience",
        "Visit hammams in afternoon when less crowded"
      ]
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
      tags: ["Adventure", "Safari", "Beach"],
      featured: true,
      
      subtitle: "Climb Africa's Highest Peak & Safari Paradise",
      heroImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=1920&h=1080&fit=crop",
      
      quickFacts: {
        bestTime: "June-October (Dry season), January-February",
        duration: "10-14 days recommended",
        budget: "$ - Moderate",
        highlights: 42,
        language: "Swahili & English",
        currency: "Tanzanian Shilling (TZS)"
      },
      
      overview: "Tanzania offers the ultimate African adventure combining world-class safari experiences with beach paradise and mountain climbing. Home to Mount Kilimanjaro, the vast Serengeti plains, the stunning Ngorongoro Crater, and the tropical beaches of Zanzibar, Tanzania delivers unforgettable experiences for every type of traveler.",
      
      destinations: [
        {
          name: "Serengeti National Park",
          description: "Witness the Great Migration and endless plains teeming with wildlife. One of Africa's most iconic safari destinations with year-round game viewing.",
          image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop"
        },
        {
          name: "Mount Kilimanjaro",
          description: "Africa's highest peak at 5,895m. Trek through five climate zones to reach the snow-capped summit - no technical climbing required.",
          image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&h=600&fit=crop"
        },
        {
          name: "Zanzibar",
          description: "Tropical paradise with pristine beaches, historic Stone Town, spice plantations, and turquoise waters perfect for diving and snorkeling.",
          image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop"
        },
        {
          name: "Ngorongoro Crater",
          description: "UNESCO World Heritage Site and largest intact volcanic caldera in the world. Incredible wildlife density in a stunning natural amphitheater.",
          image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop"
        }
      ],
      
      essentialInfo: [
        {
          icon: Plane,
          title: "Getting There",
          description: "Kilimanjaro International Airport for safari. Julius Nyerere Airport (Dar es Salaam) for Zanzibar. Internal flights connect major destinations."
        },
        {
          icon: Camera,
          title: "Kilimanjaro Trek",
          description: "7-8 day trek recommended. Choose Machame or Lemosho routes. Book 6+ months ahead. Altitude acclimatization crucial for success."
        },
        {
          icon: Users,
          title: "Safari Experience",
          description: "Northern circuit (Serengeti, Ngorongoro) most popular. 4-7 days ideal. Combine with Zanzibar for complete Tanzania experience."
        },
        {
          icon: Utensils,
          title: "Local Cuisine",
          description: "Try ugali, nyama choma, pilau rice, and fresh seafood in Zanzibar. Coconut-based dishes and tropical fruits abundant on the coast."
        },
        {
          icon: DollarSign,
          title: "Budget Planning",
          description: "Safari: $250-500/day. Kilimanjaro trek: $2,000-4,000. Zanzibar: $50-200/day. Park fees and tips add significantly to costs."
        },
        {
          icon: Info,
          title: "Essential Tips",
          description: "Yellow fever vaccine required. Anti-malarial recommended. Visa on arrival available. US dollars widely accepted (small bills post-2013)."
        }
      ],
      
      highlights: [
        "Summit Mount Kilimanjaro - Africa's highest peak",
        "Witness the Great Migration in Serengeti",
        "Explore the Ngorongoro Crater",
        "Relax on Zanzibar's pristine beaches",
        "Visit historic Stone Town UNESCO site",
        "Spot tree-climbing lions in Lake Manyara",
        "Snorkel with dolphins off Zanzibar",
        "Experience Maasai and local cultures",
        "Safari in Tarangire National Park",
        "Dive at Mnemba Atoll"
      ],
      
      tips: [
        "Book Kilimanjaro trek 6+ months in advance during peak season",
        "Acclimatize properly - choose longer routes for better summit success",
        "Combine northern safari circuit with Zanzibar for the perfect trip",
        "Bring warm clothing for Kilimanjaro - it's freezing at the summit",
        "Negotiate prices for spice tours and activities in Zanzibar",
        "Stay in Stone Town for culture, beach resorts for relaxation",
        "Best wildlife viewing June-October, but calving season (Jan-Feb) is special",
        "Budget extra for park fees, tips, and gear rental for Kilimanjaro",
        "Anti-malarial medication essential, especially for Zanzibar",
        "Learn basic Swahili phrases - 'Jambo' (hello) and 'Asante' (thank you)"
      ]
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
      tags: ["History", "Culture", "Archaeology"],
      featured: false,
      
      subtitle: "Journey Through 5,000 Years of History",
      heroImage: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1920&h=1080&fit=crop",
      
      quickFacts: {
        bestTime: "October-April (Cooler months)",
        duration: "7-10 days recommended",
        budget: "$ - Moderate",
        highlights: 38,
        language: "Arabic & English",
        currency: "Egyptian Pound (EGP)"
      },
      
      overview: "Egypt is a living museum where ancient wonders meet vibrant modern culture. Stand before the Great Pyramids of Giza, explore the Valley of the Kings, cruise the legendary Nile River, and dive into the Red Sea. From Cairo's bustling streets to Luxor's magnificent temples, Egypt offers an unforgettable journey through human history.",
      
      destinations: [
        {
          name: "Cairo & Giza",
          description: "Home to the Great Pyramids, Sphinx, and the Egyptian Museum with King Tut's treasures. The chaotic, vibrant heart of modern Egypt.",
          image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=600&fit=crop"
        },
        {
          name: "Luxor",
          description: "The world's greatest open-air museum. Valley of the Kings, Karnak Temple, and Luxor Temple showcase ancient Thebes' grandeur.",
          image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&h=600&fit=crop"
        },
        {
          name: "Aswan",
          description: "Tranquil Nile city with Nubian culture, Philae Temple, and access to Abu Simbel's colossal temples moved to save them from flooding.",
          image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=600&fit=crop"
        },
        {
          name: "Red Sea Coast",
          description: "World-class diving and snorkeling in crystal-clear waters. Sharm el-Sheikh and Hurghada offer beach resorts and underwater adventures.",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
        }
      ],
      
      essentialInfo: [
        {
          icon: Plane,
          title: "Getting Around",
          description: "Fly between Cairo, Luxor, and Aswan. Nile cruises combine transport and accommodation. Trains available but slower. Domestic flights efficient."
        },
        {
          icon: Camera,
          title: "Photography",
          description: "Separate camera fees at sites (50-300 EGP). Early morning light is best. Ask permission before photographing locals. Tripods often restricted."
        },
        {
          icon: Users,
          title: "Nile Cruises",
          description: "3-7 night cruises between Luxor and Aswan. Book 4-5 star minimum. Include temple visits. Lunch and dinner onboard. Sunset views spectacular."
        },
        {
          icon: Utensils,
          title: "Egyptian Cuisine",
          description: "Try koshari, ful medames, ta'ameya (falafel), and grilled meats. Fresh juices everywhere. Avoid tap water. Street food generally safe."
        },
        {
          icon: DollarSign,
          title: "Budget Tips",
          description: "Nile cruise: $100-300/night. Temple entry: $10-20 each. Hire Egyptologists for private tours. Bargain in markets - start at 30% of asking."
        },
        {
          icon: Info,
          title: "Cultural Tips",
          description: "Dress modestly, especially at religious sites. Remove shoes at mosques. Tip is expected (baksheesh). Friday is holy day - some sites closed."
        }
      ],
      
      highlights: [
        "Stand before the Great Pyramids of Giza",
        "Explore King Tut's tomb in Valley of the Kings",
        "Cruise the Nile River between Luxor and Aswan",
        "Marvel at Karnak Temple's massive columns",
        "Visit Abu Simbel's colossal temples",
        "See treasures at the Egyptian Museum",
        "Dive the Red Sea's spectacular reefs",
        "Watch Sound and Light show at Pyramids",
        "Bargain in Khan el-Khalili bazaar",
        "Experience traditional felucca sailing"
      ],
      
      tips: [
        "Visit Pyramids early morning to beat crowds and heat",
        "Hire licensed Egyptologist guides - worth every penny for context",
        "Book Nile cruise in advance, especially October-April",
        "Carry small bills for tips (baksheesh) - expected everywhere",
        "Dress conservatively - cover shoulders and knees at temples",
        "Drink only bottled water and avoid ice in drinks",
        "Negotiate taxi prices before getting in - no meters",
        "Visit Abu Simbel at sunrise for magical lighting",
        "Don't skip the Egyptian Museum - allow 3-4 hours minimum",
        "Be firm but polite with persistent vendors and touts"
      ]
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
      tags: ["Safari", "Wine", "Beaches"],
      featured: true,
      
      subtitle: "The Rainbow Nation's Complete Adventure",
      heroImage: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=1920&h=1080&fit=crop",
      
      quickFacts: {
        bestTime: "September-November, March-May (Spring/Fall)",
        duration: "10-14 days recommended",
        budget: "$ - Moderate",
        highlights: 45,
        language: "11 official languages (English widely spoken)",
        currency: "South African Rand (ZAR)"
      },
      
      overview: "South Africa is a world in one country - stunning Cape Town backed by Table Mountain, world-class wine regions, the wildlife-rich Kruger National Park, the scenic Garden Route, and vibrant cities. Experience Big Five safaris, shark cage diving, wine tasting, beautiful beaches, and a complex history with resilient, welcoming people.",
      
      destinations: [
        {
          name: "Cape Town",
          description: "One of the world's most beautiful cities. Table Mountain, V&A Waterfront, Cape Point, pristine beaches, and vibrant neighborhoods await.",
          image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&h=600&fit=crop"
        },
        {
          name: "Kruger National Park",
          description: "One of Africa's largest game reserves. Self-drive or guided safaris for Big Five viewing. Excellent infrastructure with camps and lodges.",
          image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop"
        },
        {
          name: "Winelands",
          description: "Stellenbosch, Franschhoek, and Paarl offer world-class wines, gourmet dining, and stunning mountain scenery. Wine tasting tours are a highlight.",
          image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop"
        },
        {
          name: "Garden Route",
          description: "Scenic coastal drive from Mossel Bay to Storms River. Beaches, forests, lagoons, Knysna, Plettenberg Bay, and adventure activities.",
          image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=800&h=600&fit=crop"
        }
      ],
      
      essentialInfo: [
        {
          icon: Plane,
          title: "Getting Around",
          description: "Car rental essential for flexibility. Good highways connect major destinations. Domestic flights between cities. Bus tours available but limiting."
        },
        {
          icon: Camera,
          title: "Safari Options",
          description: "Kruger for budget-friendly self-drive. Private reserves (Sabi Sands) for luxury. Addo for elephants. Hluhluwe-iMfolozi for rhinos."
        },
        {
          icon: Users,
          title: "Must-Do Activities",
          description: "Cage diving with great whites (Gansbaai). Table Mountain hike/cable car. Cape Winelands tours. Penguin viewing at Boulders Beach."
        },
        {
          icon: Utensils,
          title: "South African Cuisine",
          description: "Try braai (BBQ), biltong, bobotie, bunny chow, and Cape Malay curries. Excellent restaurants in cities. Wine country offers farm-to-table dining."
        },
        {
          icon: DollarSign,
          title: "Budget Planning",
          description: "Very affordable by international standards. Safari: $150-400/day. Wine tours: $50-100. Dining and attractions good value. Favorable exchange rates."
        },
        {
          icon: Info,
          title: "Safety Tips",
          description: "Stay alert in cities. Don't display valuables. Use Uber/taxis at night. Keep car doors locked. Townships tours with guides only. Most tourist areas safe."
        }
      ],
      
      highlights: [
        "Hike or cable car up Table Mountain",
        "Safari the Big Five in Kruger National Park",
        "Wine tasting in Stellenbosch and Franschhoek",
        "Cage dive with great white sharks",
        "Drive the scenic Garden Route",
        "Visit Robben Island and apartheid museums",
        "See African penguins at Boulders Beach",
        "Explore Cape of Good Hope",
        "Experience Soweto township culture",
        "Surf or beach at Muizenberg"
      ],
      
      tips: [
        "Rent a car - public transport limited and flexibility is key",
        "Book Boulders Beach penguin viewing tickets online to skip queues",
        "Visit Kruger in winter (May-Sept) for easier wildlife spotting",
        "Wine tasting - hire a designated driver or join a tour",
        "Cape Town weather changes quickly - bring layers",
        "Table Mountain cable car - book sunset time slots online",
        "Tip 10-15% at restaurants, 20 Rand for petrol attendants",
        "Download Uber app - safer than metered taxis",
        "Combine Cape Town with safari - don't skip either",
        "Try local SIM card for data - cheap and useful for navigation"
      ]
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
      tags: ["Culture", "Food", "Technology"],
      featured: true,
      
      subtitle: "Land of Ancient Traditions and Modern Marvels",
      heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&h=1080&fit=crop",
      
      quickFacts: {
        bestTime: "March-May (Cherry Blossoms), September-November",
        duration: "10-14 days recommended",
        budget: "$$$ - Moderate to High",
        highlights: 50,
        language: "Japanese",
        currency: "Japanese Yen (JPY)"
      },
      
      overview: "Japan is a captivating blend of ancient traditions and cutting-edge innovation. From the neon-lit streets of Tokyo to the serene temples of Kyoto, from snow-capped mountains to tropical islands, Japan offers an extraordinary journey through contrasts. Experience the precision of Japanese craftsmanship, the warmth of its hospitality, and the depth of its culture.",
      
      destinations: [
        {
          name: "Tokyo",
          description: "The electric metropolis where ultra-modern skyscrapers meet historic temples. Explore vibrant neighborhoods from fashionable Shibuya to traditional Asakusa.",
          image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop"
        },
        {
          name: "Kyoto",
          description: "Japan's ancient capital with over 2,000 temples and shrines. Walk through bamboo forests, witness geisha culture, and experience traditional tea ceremonies.",
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop"
        },
        {
          name: "Mount Fuji",
          description: "Japan's iconic peak and sacred mountain. Hike to the summit or admire it from lakeside towns while soaking in natural hot springs.",
          image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=600&fit=crop"
        },
        {
          name: "Osaka",
          description: "Japan's kitchen and nightlife capital. Indulge in street food, explore bustling markets, and experience the energetic local culture.",
          image: "https://images.unsplash.com/photo-1589452271712-64eaee10844e?w=800&h=600&fit=crop"
        }
      ],
      
      essentialInfo: [
        {
          icon: Plane,
          title: "Getting There",
          description: "Major international airports in Tokyo (Narita/Haneda) and Osaka (Kansai). Japan Rail Pass recommended for multi-city travel."
        },
        {
          icon: Users,
          title: "Transportation",
          description: "Efficient bullet trains (shinkansen), subways, and buses. Get a Suica or Pasmo card for seamless travel."
        },
        {
          icon: Utensils,
          title: "Food & Dining",
          description: "Experience everything from Michelin-starred restaurants to authentic ramen shops. Sushi, tempura, and wagyu beef are must-tries."
        },
        {
          icon: Camera,
          title: "Cultural Experiences",
          description: "Tea ceremonies, sumo wrestling, cherry blossom viewing, onsen bathing, and traditional festivals throughout the year."
        },
        {
          icon: DollarSign,
          title: "Money Matters",
          description: "Cash is still king in many places. ATMs at convenience stores accept foreign cards. Tipping is not customary."
        },
        {
          icon: Info,
          title: "Language Tips",
          description: "English signage in major cities. Learn basic phrases and carry a translation app. Locals appreciate the effort."
        }
      ],
      
      highlights: [
        "Experience cherry blossom season in spring",
        "Ride the bullet train (shinkansen)",
        "Stay in a traditional ryokan with onsen",
        "Visit ancient temples in Kyoto",
        "Explore Tokyo's vibrant neighborhoods",
        "Witness a sumo wrestling tournament",
        "Climb Mount Fuji (July-August)",
        "Experience a traditional tea ceremony",
        "Eat authentic sushi at Tsukiji Market",
        "Walk through Fushimi Inari's torii gates"
      ],
      
      tips: [
        "Purchase Japan Rail Pass before arriving - saves money on intercity travel",
        "Remove shoes when entering homes, temples, and traditional accommodations",
        "Bowing is a sign of respect - a slight bow goes a long way",
        "Never stick chopsticks upright in rice or pass food chopstick-to-chopstick",
        "Visit convenience stores for affordable meals and clean restrooms",
        "Learn to say 'Arigatou gozaimasu' (Thank you very much)",
        "Book popular restaurants in advance, especially in Tokyo",
        "Tattoos may restrict access to some hot springs",
        "Carry cash - many smaller establishments don't accept cards",
        "Download offline maps and translation apps"
      ]
    },
    // Add these guides to the asia array in your guidesData.ts file
// (after the japan-ultimate guide)

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
  tags: ["Beach", "Culture", "Food"],
  featured: true,
  
  subtitle: "Land of Smiles - Temples, Beaches & Street Food",
  heroImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "November-February (Cool season)",
    duration: "10-14 days recommended",
    budget: "$ - Budget Friendly",
    highlights: 44,
    language: "Thai",
    currency: "Thai Baht (THB)"
  },
  
  overview: "Thailand captivates with its warm hospitality, stunning temples, pristine beaches, and incredible street food. From Bangkok's vibrant chaos to Chiang Mai's cultural richness, from Phuket's beaches to Ayutthaya's ancient ruins, Thailand offers unforgettable experiences at incredible value. Experience floating markets, jungle treks, island hopping, and some of the world's best cuisine.",
  
  destinations: [
    {
      name: "Bangkok",
      description: "Energetic capital with Grand Palace, golden temples, floating markets, rooftop bars, world-class street food, and vibrant nightlife.",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&h=600&fit=crop"
    },
    {
      name: "Chiang Mai",
      description: "Northern cultural hub with 300+ temples, night markets, elephant sanctuaries, jungle treks, and laid-back mountain town atmosphere.",
      image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?w=800&h=600&fit=crop"
    },
    {
      name: "Phuket & Islands",
      description: "Thailand's largest island with stunning beaches, island-hopping to Phi Phi and James Bond Island, diving, and beach parties.",
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&h=600&fit=crop"
    },
    {
      name: "Krabi & Railay Beach",
      description: "Dramatic limestone cliffs, pristine beaches accessible only by boat, rock climbing, kayaking, and stunning natural beauty.",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Getting Around",
      description: "Domestic flights cheap between cities. Trains scenic but slow. Buses comfortable for medium distances. Tuk-tuks and Grab app for local transport."
    },
    {
      icon: Camera,
      title: "Temple Etiquette",
      description: "Remove shoes before entering. Cover shoulders and knees. No pointing feet at Buddha images. Dress respectfully. Women can't touch monks."
    },
    {
      icon: Users,
      title: "Best Experiences",
      description: "Thai cooking classes in Chiang Mai. Floating markets near Bangkok. Ethical elephant sanctuaries. Full moon parties. Island hopping tours."
    },
    {
      icon: Utensils,
      title: "Street Food Paradise",
      description: "Pad Thai, green curry, mango sticky rice, som tam. Street food safe and delicious. Night markets food heaven. Vegetarian options plentiful."
    },
    {
      icon: DollarSign,
      title: "Budget Friendly",
      description: "Very affordable. Street food $1-3. Nice hotels $20-50. Massage $6-10. Beach islands pricier but still reasonable. Negotiate tuk-tuk prices."
    },
    {
      icon: Info,
      title: "Important Tips",
      description: "Visa on arrival for many nationalities. Don't touch anyone's head. King's image sacred - respect it. Always smile - it's the Thai way."
    }
  ],
  
  highlights: [
    "Explore Bangkok's Grand Palace",
    "Visit Wat Pho and reclining Buddha",
    "Experience floating markets",
    "Take Thai cooking class in Chiang Mai",
    "Visit ethical elephant sanctuary",
    "Island hop in Andaman Sea",
    "Rock climb at Railay Beach",
    "Eat street food at night markets",
    "Ride tuk-tuk through Bangkok",
    "Watch sunset from Phi Phi viewpoint"
  ],
  
  tips: [
    "Book hotels ahead during peak season (Nov-Feb) - fills up quickly",
    "Negotiate tuk-tuk prices before getting in - use Grab app or walk away",
    "Street food is safe - eat where locals eat and where food is hot",
    "Dress modestly at temples - carry a scarf to cover shoulders",
    "Get SIM card at airport - data plans very cheap ($10 for month)",
    "Avoid elephant riding - visit ethical sanctuaries instead",
    "Book islands 2-3 days min - one day not enough to enjoy",
    "Bargain at markets (not 7-Eleven) - start at 50% asking price",
    "Respect the King - never disrespect royal family images",
    "Learn 'Sawadee krap/ka' (hello) and 'Khop khun krap/ka' (thank you)"
  ]
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
  tags: ["Budget", "Culture", "Food"],
  featured: false,
  
  subtitle: "Incredible Journey from Hanoi to Ho Chi Minh",
  heroImage: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "February-April, August-October",
    duration: "14-21 days recommended",
    budget: "$ - Very Budget Friendly",
    highlights: 38,
    language: "Vietnamese",
    currency: "Vietnamese Dong (VND)"
  },
  
  overview: "Vietnam enchants backpackers with its stunning landscapes, rich history, delicious cuisine, and incredibly affordable prices. Travel from the misty mountains of Sapa to the bustling streets of Hanoi, cruise through Ha Long Bay's limestone karsts, explore ancient Hoi An, and discover vibrant Ho Chi Minh City. Vietnam offers authentic experiences and warm hospitality.",
  
  destinations: [
    {
      name: "Hanoi",
      description: "Chaotic capital with Old Quarter street food, French colonial architecture, and gateway to northern adventures.",
      image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&h=600&fit=crop"
    },
    {
      name: "Ha Long Bay",
      description: "UNESCO World Heritage Site with thousands of limestone islands rising from emerald waters. Overnight cruise essential.",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&h=600&fit=crop"
    },
    {
      name: "Hoi An",
      description: "Ancient trading port with lantern-lit streets, tailor shops, riverside cafes, and nearby beaches.",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&h=600&fit=crop"
    },
    {
      name: "Ho Chi Minh City",
      description: "Modern metropolis with French colonial landmarks, War Remnants Museum, and gateway to Mekong Delta.",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Getting Around",
      description: "Overnight buses and trains connect cities. Motorbike rentals popular. Grab app for taxis. Open bus tickets for flexibility."
    },
    {
      icon: Camera,
      title: "Must-Do Experiences",
      description: "Ha Long Bay cruise, motorbike loop in northern mountains, tailor-made clothes in Hoi An, street food tours, Cu Chi Tunnels."
    },
    {
      icon: Users,
      title: "Backpacker Scene",
      description: "Hostels everywhere with great social atmosphere. Easy to meet travelers. Popular backpacker route well-established north to south."
    },
    {
      icon: Utensils,
      title: "Vietnamese Cuisine",
      description: "Pho, banh mi, spring rolls, coffee, fresh seafood. Street food incredibly cheap ($1-2). Regional specialties vary significantly."
    },
    {
      icon: DollarSign,
      title: "Ultra Budget Friendly",
      description: "Hostels $5-15/night. Meals $2-5. Beer $0.50-1. Transportation cheap. $25-30/day budget easily doable for backpackers."
    },
    {
      icon: Info,
      title: "Travel Tips",
      description: "Visa required but easy. Bargain for everything. Traffic chaotic - be careful crossing. Learn basic Vietnamese phrases helps."
    }
  ],
  
  highlights: [
    "Cruise Ha Long Bay overnight",
    "Explore Hanoi Old Quarter",
    "Motorbike through Sapa mountains",
    "Get custom clothes in Hoi An",
    "Discover ancient Hue Imperial City",
    "Visit Cu Chi Tunnels near Saigon",
    "Relax on Phu Quoc Island beaches",
    "Navigate Mekong Delta by boat",
    "Try authentic street food everywhere",
    "Experience Vietnamese coffee culture"
  ],
  
  tips: [
    "Get visa in advance online - saves time at airport",
    "Book Ha Long Bay cruise carefully - quality varies greatly",
    "Bargain for everything except restaurants - expect 30-50% off",
    "Cross streets slowly and steadily - traffic flows around you",
    "Download Grab app - safer and cheaper than street taxis",
    "Try local beer (bia hoi) - 25 cents a glass!",
    "Pack light - buying clothes in Hoi An cheap and fun",
    "Open bus tickets flexible but book quality companies",
    "Learn 'xin chao' (hello) and 'cam on' (thank you)",
    "Vietnamese coffee is amazing - try egg coffee in Hanoi"
  ]
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
  tags: ["Beach", "Culture", "Nature"],
  featured: true,
  
  subtitle: "Island Paradise of Temples & Rice Terraces",
  heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "April-October (Dry season)",
    duration: "10-14 days recommended",
    budget: "$ - Budget Friendly",
    highlights: 40,
    language: "Indonesian (Bahasa Indonesia)",
    currency: "Indonesian Rupiah (IDR)"
  },
  
  overview: "Bali and Indonesia offer a perfect blend of culture, nature, and beach paradise. From Bali's emerald rice terraces and spiritual temples to Java's ancient Borobudur, from Komodo dragons to pristine diving sites, Indonesia's 17,000 islands provide endless adventure. Experience Hindu ceremonies, volcanic sunrises, world-class surfing, and warm Indonesian hospitality.",
  
  destinations: [
    {
      name: "Ubud, Bali",
      description: "Bali's cultural heart with rice terraces, monkey forest, art galleries, yoga retreats, temples, and traditional dance performances.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop"
    },
    {
      name: "Seminyak & Canggu",
      description: "Beach towns with surf breaks, beach clubs, trendy restaurants, vibrant nightlife, and stunning sunsets over the Indian Ocean.",
      image: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&h=600&fit=crop"
    },
    {
      name: "Mount Bromo & Java",
      description: "Active volcano with sunrise treks, ancient Borobudur temple, Prambanan temples, and Yogyakarta's Javanese culture.",
      image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&h=600&fit=crop"
    },
    {
      name: "Komodo National Park",
      description: "Home to Komodo dragons, pristine diving, Pink Beach, and dramatic volcanic landscapes. Multi-day boat trips recommended.",
      image: "https://images.unsplash.com/photo-1555400082-2c8c6b90e3c9?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Getting Around",
      description: "Ngurah Rai Airport in Bali. Rent scooter (be careful!) or hire driver. Domestic flights connect islands. Gojek/Grab apps for transport."
    },
    {
      icon: Camera,
      title: "Instagram Spots",
      description: "Tegalalang Rice Terraces, Gates of Heaven (Lempuyang Temple), Tukad Cepung Waterfall, swing experiences. Go early to avoid crowds."
    },
    {
      icon: Users,
      title: "Balinese Culture",
      description: "Hindu island in Muslim country. Daily offerings everywhere. Temple ceremonies frequent. Dress modestly with sarong. Respect sacred sites."
    },
    {
      icon: Utensils,
      title: "Indonesian Cuisine",
      description: "Nasi goreng, mie goreng, satay, rendang, gado-gado. Warungs (local eateries) cheapest and authentic. Babi guling (roast pig) in Bali."
    },
    {
      icon: DollarSign,
      title: "Budget Paradise",
      description: "Very affordable. Meals $2-5 at warungs. Nice hotels $30-80. Scooter rental $5/day. Massages $7-12. Splurge on accommodations, save on food."
    },
    {
      icon: Info,
      title: "Essential Tips",
      description: "Visa on arrival ($35). Bring sarong for temples. Bargain at markets. Stay in different areas. Don't drink tap water. Travel insurance essential."
    }
  ],
  
  highlights: [
    "Sunrise at Mount Bromo volcano",
    "Visit Borobudur temple at dawn",
    "Explore Tegalalang rice terraces",
    "Snorkel with manta rays in Nusa Penida",
    "See Komodo dragons in the wild",
    "Sunset at Tanah Lot temple",
    "Surf breaks in Uluwatu",
    "Monkey Forest in Ubud",
    "Traditional Kecak fire dance",
    "Yoga and wellness retreats"
  ],
  
  tips: [
    "Avoid peak season (July-Aug, Dec-Jan) - crowded and expensive",
    "Scooter rental needs international license - be very careful in traffic",
    "Instagram spots charge entrance fees now ($3-10) - go early morning",
    "Stay 3-4 days in Ubud, 3-4 in beach areas for balance",
    "Book Borobudur sunrise tickets online in advance",
    "Bring sarong for temples or buy cheap one locally",
    "Komodo trip: 3-day liveaboard from Labuan Bajo best option",
    "Bali belly is real - avoid tap water, ice, and unpeeled fruit",
    "Negotiate everything except established restaurants and hotels",
    "Learn 'Terima kasih' (thank you) and 'Selamat pagi' (good morning)"
  ]
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
  tags: ["Culture", "History", "Spirituality"],
  featured: false,
  
  subtitle: "Incredible India - Palaces, Temples & Taj Mahal",
  heroImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "October-March (Cool season)",
    duration: "14-21 days recommended",
    budget: "$ - Budget Friendly",
    highlights: 42,
    language: "Hindi & English",
    currency: "Indian Rupee (INR)"
  },
  
  overview: "India is a sensory overload of colors, flavors, spirituality, and history. The Golden Triangle (Delhi-Agra-Jaipur) showcases India's most iconic landmarks - the Taj Mahal, magnificent forts, bustling bazaars, and palatial heritage. Beyond this classic route, discover Varanasi's spiritual heart, Kerala's backwaters, Rajasthan's desert fortresses, and the Himalayan foothills.",
  
  destinations: [
    {
      name: "Delhi",
      description: "Chaotic capital blending Mughal monuments, British colonial architecture, street food chaos, modern metro, and incredible cultural diversity.",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop"
    },
    {
      name: "Agra & Taj Mahal",
      description: "Home to the iconic Taj Mahal, Agra Fort, and Fatehpur Sikri. Sunrise at Taj is unforgettable. Beyond the monuments, explore local life.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop"
    },
    {
      name: "Jaipur (Pink City)",
      description: "Rajasthan's capital with Amber Fort, City Palace, Hawa Mahal, vibrant bazaars, and pink-painted old city. Gateway to desert adventures.",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop"
    },
    {
      name: "Varanasi",
      description: "India's spiritual heart on the Ganges River. Witness sacred rituals, boat rides at sunrise, ancient temples, and profound spirituality.",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Getting Around",
      description: "Trains connect Golden Triangle efficiently. Book AC classes for comfort. Domestic flights for longer distances. Auto-rickshaws and Uber/Ola for local travel."
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Taj Mahal at sunrise magical. Ask permission before photographing people. Camera fees at monuments. Vibrant colors everywhere for photography."
    },
    {
      icon: Users,
      title: "Cultural Sensitivity",
      description: "Dress modestly, especially at religious sites. Remove shoes at temples. Respect local customs. Women should carry scarf for coverage. Left hand not for eating."
    },
    {
      icon: Utensils,
      title: "Indian Cuisine",
      description: "Regional variations huge. Try curry, biryani, dal, naan, dosa, street chaats. Vegetarian options abundant. Vary spice levels. Drink bottled water only."
    },
    {
      icon: DollarSign,
      title: "Budget Friendly",
      description: "Very affordable. Budget hotels $10-30. Meals $2-8. Trains cheap. Taj Mahal entry higher for foreigners. Bargain at markets. Tips expected."
    },
    {
      icon: Info,
      title: "Essential Preparation",
      description: "Visa required in advance. Vaccines recommended. Be prepared for crowds, chaos, persistent touts. Patience essential. Culture shock common but rewarding."
    }
  ],
  
  highlights: [
    "Watch sunrise at Taj Mahal",
    "Explore Amber Fort in Jaipur",
    "Experience Ganga Aarti in Varanasi",
    "Shop in Delhi's Chandni Chowk",
    "Visit Agra Fort and Fatehpur Sikri",
    "Ride camel in Thar Desert",
    "Enjoy traditional Rajasthani thali",
    "Witness spiritual rituals on Ganges",
    "Explore colorful bazaars everywhere",
    "Stay in heritage haveli hotels"
  ],
  
  tips: [
    "Book Taj Mahal tickets online in advance - skip long queues",
    "Visit Taj at sunrise - fewer crowds and beautiful light",
    "Use reputable tour companies or guides - avoid street touts",
    "Drink only bottled water - seal check before opening",
    "Dress modestly - cover shoulders and knees at religious sites",
    "Bargain hard in markets - start at 30-40% of asking price",
    "Be firm with touts and scam artists - say no and walk away",
    "Book train tickets well in advance - Tatkal for last minute",
    "Prepare for Delhi belly - bring medication, eat carefully",
    "Learn 'Namaste' and basic Hindi phrases - locals appreciate it"
  ]
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
      tags: ["Cities", "Food", "History"],
      featured: true,
      
      subtitle: "La Dolce Vita - Art, History & Culinary Paradise",
      heroImage: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&h=1080&fit=crop",
      
      quickFacts: {
        bestTime: "April-June, September-October",
        duration: "10-14 days recommended",
        budget: "$$ - Moderate to High",
        highlights: 52,
        language: "Italian",
        currency: "Euro (EUR)"
      },
      
      overview: "Italy is a masterpiece of art, history, and gastronomy. From Rome's ancient ruins to Venice's romantic canals, from Florence's Renaissance treasures to the Amalfi Coast's dramatic beauty, Italy captivates at every turn. Experience world-class museums, dine on authentic pasta and pizza, sip wine in Tuscany, and embrace la dolce vita.",
      
      destinations: [
        {
          name: "Rome",
          description: "The Eternal City with 3,000 years of history. Colosseum, Vatican Museums, Trevi Fountain, and incredible food in every corner.",
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop"
        },
        {
          name: "Venice",
          description: "The floating city of canals, gondolas, and stunning architecture. St. Mark's Square, Bridge of Sighs, and endless romantic charm.",
          image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&h=600&fit=crop"
        },
        {
          name: "Florence",
          description: "Birthplace of the Renaissance. Duomo, Uffizi Gallery, David statue, and Tuscan countryside. Art and architecture at its finest.",
          image: "https://images.unsplash.com/photo-1541832676-9b763b7548c6?w=800&h=600&fit=crop"
        },
        {
          name: "Amalfi Coast",
          description: "Stunning coastal villages like Positano and Ravello clinging to cliffs. Turquoise waters, lemon groves, and Mediterranean paradise.",
          image: "https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=800&h=600&fit=crop"
        }
      ],
      
      essentialInfo: [
        {
          icon: Plane,
          title: "Getting Around",
          description: "High-speed trains connect major cities efficiently. Rome, Florence, Venice easily done by train. Rent car for Tuscany and Amalfi Coast."
        },
        {
          icon: Camera,
          title: "Must-See Museums",
          description: "Vatican Museums (book ahead!), Uffizi Gallery, Accademia (David). Roma Pass and Firenze Card save money and time. Early entry tours worth it."
        },
        {
          icon: Users,
          title: "Cultural Etiquette",
          description: "Dress modestly in churches. Shoulders and knees covered. Say 'Buongiorno' when entering shops. Tipping not obligatory but appreciated."
        },
        {
          icon: Utensils,
          title: "Italian Cuisine",
          description: "Each region has specialties. Rome: carbonara, cacio e pepe. Naples: pizza. Florence: bistecca. Aperitivo hour is sacred. Gelato daily!"
        },
        {
          icon: DollarSign,
          title: "Budget Tips",
          description: "Eat where locals eat - away from tourist sites. Aperitivo = cheap dinner. Free days at museums monthly. Book accommodation early for best rates."
        },
        {
          icon: Info,
          title: "Booking Tips",
          description: "Reserve Colosseum, Vatican, Last Supper, Uffizi months ahead. Skip-the-line tickets essential in high season. Book trains early for discounts."
        }
      ],
      
      highlights: [
        "Explore the Colosseum and Roman Forum",
        "Tour Vatican Museums and Sistine Chapel",
        "Ride gondola through Venice canals",
        "See Michelangelo's David in Florence",
        "Drive the stunning Amalfi Coast",
        "Wine tasting in Tuscany vineyards",
        "Authentic pizza in Naples",
        "Sunset views from Cinque Terre",
        "Shop designer fashion in Milan",
        "Visit Pompeii ruins"
      ],
      
      tips: [
        "Book Colosseum, Vatican, and Uffizi Gallery tickets months in advance",
        "Avoid eating near major tourist attractions - prices inflated, quality poor",
        "High-speed trains are excellent - no need to fly between cities",
        "Siesta is real - shops close 1-4pm in smaller towns",
        "Free water fountains (nasoni) throughout Rome - bring refillable bottle",
        "Gelato test: if it's piled high and bright colors, it's tourist trap",
        "Learn basic Italian phrases - locals appreciate the effort",
        "Visit Amalfi Coast in shoulder season - summer is crowded",
        "Rome: Stay in Trastevere or Monti for authentic neighborhoods",
        "Cover up in churches or you'll be turned away"
      ]
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
      tags: ["Romance", "Food", "Wine"],
      featured: true,
      
      subtitle: "The Art of Living - From Paris to Provence",
      heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&h=1080&fit=crop",
      
      quickFacts: {
        bestTime: "April-June, September-October",
        duration: "10-14 days recommended",
        budget: "$$ - Moderate to High",
        highlights: 48,
        language: "French",
        currency: "Euro (EUR)"
      },
      
      overview: "France embodies elegance, romance, and the art of living well. From Paris's iconic landmarks to Provence's lavender fields, from the French Riviera's glamorous beaches to Burgundy's wine estates, France offers endless charm. Experience world-class cuisine, magnificent châteaux, artistic masterpieces, and that je ne sais quoi that makes France unforgettable.",
      
      destinations: [
        {
          name: "Paris",
          description: "The City of Light with the Eiffel Tower, Louvre, Notre-Dame, and endless café culture. Romantic walks along the Seine and world-class dining.",
          image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop"
        },
        {
          name: "Provence",
          description: "Lavender fields, hilltop villages, Roman ruins, and outdoor markets. Aix-en-Provence, Avignon, and the Luberon valley offer authentic French charm.",
          image: "https://images.unsplash.com/photo-1549577705-d2eb1a7a3367?w=800&h=600&fit=crop"
        },
        {
          name: "French Riviera (Côte d'Azur)",
          description: "Glamorous Mediterranean coast. Nice, Cannes, Monaco, and Saint-Tropez offer beaches, luxury yachts, and stunning coastal beauty.",
          image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=600&fit=crop"
        },
        {
          name: "Loire Valley",
          description: "Fairy-tale châteaux along the Loire River. Chambord, Chenonceau, and Amboise showcase Renaissance splendor amid beautiful gardens.",
          image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=600&fit=crop"
        }
      ],
      
      essentialInfo: [
        {
          icon: Plane,
          title: "Getting Around",
          description: "TGV high-speed trains excellent for intercity travel. Paris metro efficient. Rent car for Provence and Loire Valley for village exploration."
        },
        {
          icon: Camera,
          title: "Paris Highlights",
          description: "Eiffel Tower (book in advance), Louvre (Wed/Fri evenings less crowded), Versailles (go early), Musée d'Orsay, Sacré-Cœur, Latin Quarter strolls."
        },
        {
          icon: Users,
          title: "French Etiquette",
          description: "Always greet with 'Bonjour/Bonsoir'. Say 'Au revoir' when leaving shops. Don't rush meals - dining is an experience. Dress smartly, especially evenings."
        },
        {
          icon: Utensils,
          title: "French Cuisine",
          description: "Prix fixe menus offer value. Boulangeries for fresh bread and pastries. Wine regions: Bordeaux, Burgundy, Champagne. Michelin-starred dining accessible."
        },
        {
          icon: DollarSign,
          title: "Budget Tips",
          description: "Paris Museum Pass saves money and time. Lunch menus cheaper than dinner. Picnic with market finds. Free museums first Sunday monthly. Stay outside Paris."
        },
        {
          icon: Info,
          title: "Best Experiences",
          description: "Sunset from Eiffel Tower. Champagne tasting in Reims. Lavender fields (July). Market days in Provence. Coastal walks on Riviera. Château wine tours."
        }
      ],
      
      highlights: [
        "Climb the Eiffel Tower at sunset",
        "Explore the Louvre and see Mona Lisa",
        "Stroll Champs-Élysées and Arc de Triomphe",
        "Visit Palace of Versailles",
        "Tour Loire Valley châteaux",
        "Wine tasting in Bordeaux or Burgundy",
        "Lavender fields of Provence (summer)",
        "Walk the Promenade des Anglais in Nice",
        "Day trip to Monaco and Monte Carlo",
        "Cruise the Seine at night"
      ],
      
      tips: [
        "Learn basic French - even trying makes a huge difference in treatment",
        "Book Eiffel Tower tickets 60 days in advance online",
        "Visit Louvre on Wednesday or Friday evenings - fewer crowds",
        "Bakeries close one day a week - check or you'll miss fresh bread",
        "Provence lavender peaks mid-June to mid-July",
        "Paris Museum Pass (2/4/6 days) saves money if visiting multiple sites",
        "Restaurants serve dinner starting 7:30pm - arrive too early and wait",
        "Tap water free at restaurants - ask for 'une carafe d'eau'",
        "Stay in Marais or Latin Quarter for authentic Paris experience",
        "Versailles: Go Tuesday, Thursday, or weekend; avoid Monday/Friday crowds"
      ]
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
      tags: ["Culture", "Food", "Architecture"],
      featured: false,
      
      subtitle: "Flamenco, Tapas & Gaudí's Masterpieces",
      heroImage: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&h=1080&fit=crop",
      
      quickFacts: {
        bestTime: "April-June, September-October",
        duration: "10-14 days recommended",
        budget: "$ - Moderate",
        highlights: 46,
        language: "Spanish (Castilian)",
        currency: "Euro (EUR)"
      },
      
      overview: "Spain pulses with passion, creativity, and vibrant culture. From Barcelona's Gaudí architecture to Madrid's world-class museums, from Andalusia's Moorish palaces to Basque Country's culinary excellence, Spain offers incredible diversity. Experience flamenco shows, endless tapas, beautiful beaches, and warm, welcoming people who know how to live life fully.",
      
      destinations: [
        {
          name: "Barcelona",
          description: "Gaudí's architectural wonderland with Sagrada Família, Park Güell, Gothic Quarter, Las Ramblas, and Mediterranean beaches.",
          image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop"
        },
        {
          name: "Madrid",
          description: "Spain's elegant capital with Prado Museum, Royal Palace, Retiro Park, and incredible nightlife. Art, culture, and tapas excellence.",
          image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&h=600&fit=crop"
        },
        {
          name: "Andalusia",
          description: "Southern Spain's soul. Seville's flamenco, Granada's Alhambra, Cordoba's Mezquita, white villages, and authentic Spanish passion.",
          image: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=800&h=600&fit=crop"
        },
        {
          name: "San Sebastián",
          description: "Basque Country's jewel with La Concha beach, pintxos bars, Michelin-starred restaurants, and stunning coastal beauty.",
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=600&fit=crop"
        }
      ],
      
      essentialInfo: [
        {
          icon: Plane,
          title: "Getting Around",
          description: "High-speed AVE trains connect major cities. RENFE train network excellent. Budget airlines (Vueling, Ryanair) for longer distances. Rent car for rural areas."
        },
        {
          icon: Camera,
          title: "Must-See Architecture",
          description: "Sagrada Família (book timed entry). Alhambra (reserve weeks ahead). Park Güell, Casa Batlló. Mezquita in Córdoba. Royal Palace Madrid."
        },
        {
          icon: Users,
          title: "Spanish Rhythm",
          description: "Lunch 2-4pm, dinner 9-11pm. Siesta (2-5pm) still observed. Late nights normal - clubs open at midnight. Life happens outdoors."
        },
        {
          icon: Utensils,
          title: "Tapas Culture",
          description: "Tapas hopping is life. Order drinks, get free snacks (Andalusia). Pintxos in Basque Country. Paella in Valencia. Jamón ibérico everywhere."
        },
        {
          icon: DollarSign,
          title: "Budget Tips",
          description: "Menu del día (lunch special) fantastic value. Free tapas with drinks in Granada. Museums free certain days/hours. Stay in pensiones not hotels."
        },
        {
          icon: Info,
          title: "Regional Diversity",
          description: "Each region unique - different food, customs, even languages. Catalan in Barcelona, Basque in north. Embrace regional pride and identity."
        }
      ],
      
      highlights: [
        "Marvel at Sagrada Família in Barcelona",
        "Explore Park Güell's mosaic wonderland",
        "Visit Prado Museum in Madrid",
        "Tour the Alhambra palace in Granada",
        "Experience authentic flamenco in Seville",
        "Tapas hopping in Madrid's La Latina",
        "Walk La Rambla and Gothic Quarter",
        "Watch sunset from Park Güell",
        "Pintxos bar crawl in San Sebastián",
        "Relax on Mediterranean beaches"
      ],
      
      tips: [
        "Book Sagrada Família and Alhambra tickets 2-3 months in advance",
        "Embrace Spanish dining hours - restaurants don't open for dinner until 8:30pm",
        "Free tapas with drinks in Granada - bar hop for a full meal",
        "Siesta is real - don't expect shops open 2-5pm in smaller cities",
        "Learn basics: 'Hola', 'Gracias', 'Por favor' - Spaniards appreciate effort",
        "Barcelona: Watch for pickpockets on Las Ramblas and metro",
        "Menu del día lunch specials (€10-15) offer great value",
        "Visit Alhambra early morning or late afternoon to avoid crowds",
        "Flamenco: Skip tourist traps, find authentic tablaos",
        "San Sebastián: Pintxos bar order: drink + point at pintxos you want"
      ]
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
      tags: ["Islands", "Beach", "History"],
      featured: true,
      
      subtitle: "Ancient Ruins & Azure Waters",
      heroImage: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1920&h=1080&fit=crop",
      
      quickFacts: {
        bestTime: "May-June, September-October",
        duration: "10-14 days recommended",
        budget: "$ - Moderate",
        highlights: 40,
        language: "Greek",
        currency: "Euro (EUR)"
      },
      
      overview: "Greece combines ancient history with stunning island beauty. Walk where philosophers once debated in Athens, watch sunsets over Santorini's caldera, party on Mykonos beaches, and explore Crete's Minoan palaces. With whitewashed villages, crystal-clear waters, delicious Mediterranean cuisine, and warm hospitality, Greece delivers unforgettable island magic.",
      
      destinations: [
        {
          name: "Santorini",
          description: "Iconic blue-domed churches, stunning sunsets over the caldera, volcanic beaches, and romantic cliff-side villages of Oia and Fira.",
          image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=600&fit=crop"
        },
        {
          name: "Mykonos",
          description: "Cosmopolitan party island with beautiful beaches, windmills, Little Venice, and vibrant nightlife. Charming Cycladic architecture.",
          image: "https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=800&h=600&fit=crop"
        },
        {
          name: "Athens",
          description: "Ancient capital with the Acropolis, Parthenon, ancient Agora, and excellent museums. Modern city with great food and nightlife.",
          image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=600&fit=crop"
        },
        {
          name: "Crete",
          description: "Greece's largest island. Knossos Palace, Samaria Gorge, beautiful beaches, traditional villages, and incredible Cretan cuisine.",
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop"
        }
      ],
      
      essentialInfo: [
        {
          icon: Plane,
          title: "Island Hopping",
          description: "Ferries connect islands (slower, cheaper). Flights available between major islands (faster). Book ferries ahead in summer. Consider open-jaw flights."
        },
        {
          icon: Camera,
          title: "Best Photo Spots",
          description: "Oia sunset (arrive 2 hours early). Three blue domes of Santorini. Mykonos windmills. Acropolis at sunrise. Navagio Beach shipwreck."
        },
        {
          icon: Users,
          title: "Greek Island Life",
          description: "Laid-back pace. Late dinners (9pm+). Afternoon siesta sacred. Beach clubs popular. Friendly locals love to chat. 'Siga siga' (slowly, slowly) mentality."
        },
        {
          icon: Utensils,
          title: "Greek Cuisine",
          description: "Greek salad, moussaka, souvlaki, fresh seafood, feta cheese everywhere. Ouzo with meze. Gyros for quick bites. Farm-to-table freshness."
        },
        {
          icon: DollarSign,
          title: "Budget Tips",
          description: "Visit shoulder season (May, Sept-Oct). Stay in apartments. Eat at tavernas, not tourist traps. Ferry cheaper than flights. Free beach access."
        },
        {
          icon: Info,
          title: "Essential Planning",
          description: "Book Santorini/Mykonos accommodations 3-6 months ahead for summer. Visit Athens first or last. Allow 2-3 days per island. Beach clubs can be pricey."
        }
      ],
      
      highlights: [
        "Watch Santorini sunset from Oia",
        "Explore the Acropolis and Parthenon",
        "Party on Mykonos beaches",
        "Visit Knossos Palace in Crete",
        "Swim in Navagio Beach (Zakynthos)",
        "Island hop through the Cyclades",
        "Dine at seaside tavernas",
        "Hike Samaria Gorge in Crete",
        "Explore Athens' Plaka neighborhood",
        "Sail around Santorini's caldera"
      ],
      
      tips: [
        "Santorini sunset: Skip overcrowded Oia, try Imerovigli or Fira",
        "Book Santorini hotels early - best caldera views book up months ahead",
        "Athens: Visit Acropolis early morning (8am) to beat heat and crowds",
        "Ferry schedules change - check Ferryhopper or Greek Ferries sites",
        "Rent ATV/car on islands for beach exploration flexibility",
        "Mykonos: Beach clubs charge €20-40 for sunbeds - free beaches exist",
        "Learn 'Kalimera' (good morning), 'Efharisto' (thank you) - locals love it",
        "Visit islands in shoulder season (May or Sept) - half the crowds, same beauty",
        "Don't flush toilet paper - plumbing can't handle it, use bins",
        "Greek time is relaxed - don't expect punctuality from ferries or restaurants"
      ]
    },
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
  tags: ["Nature", "Hiking", "Wildlife"],
  featured: true,
  
  subtitle: "America's Natural Wonders - From Yosemite to Yellowstone",
  heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "May-September (Summer), September-October (Fall colors)",
    duration: "14-21 days for multi-park road trip",
    budget: "$$ - Moderate",
    highlights: 63,
    language: "English",
    currency: "US Dollar (USD)"
  },
  
  overview: "America's National Parks showcase nature's grandeur at its finest. From Yosemite's granite cliffs to Yellowstone's geysers, from the Grand Canyon's vastness to Zion's red rocks, these protected lands offer world-class hiking, wildlife viewing, and outdoor adventures. Discover ancient forests, dramatic canyons, pristine lakes, and some of the planet's most iconic landscapes.",
  
  destinations: [
    {
      name: "Yosemite National Park",
      description: "Iconic granite cliffs, waterfalls, giant sequoias, and El Capitan. Half Dome hike legendary. Valley views spectacular. Rock climbing paradise.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    },
    {
      name: "Yellowstone National Park",
      description: "World's first national park with geysers, hot springs, bison herds, and wolves. Old Faithful, Grand Prismatic Spring, and wildlife everywhere.",
      image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&h=600&fit=crop"
    },
    {
      name: "Grand Canyon",
      description: "One mile deep, 18 miles wide. South Rim most popular. North Rim wilder. Hike rim to rim or just marvel at sunrise views.",
      image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&h=600&fit=crop"
    },
    {
      name: "Zion National Park",
      description: "Red rock canyons and towering cliffs. Angels Landing hike thrilling. Narrows wade spectacular. Utah's most visited park for good reason.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Planning Your Route",
      description: "Mighty 5 (Utah parks) popular. California parks road trip excellent. Yellowstone-Grand Teton combo. Allow 2-3 days minimum per major park."
    },
    {
      icon: Camera,
      title: "Permits & Reservations",
      description: "Popular trails need permits months ahead (Half Dome, Angels Landing). Camp sites book 6 months early. Some parks require timed entry passes."
    },
    {
      icon: Users,
      title: "Wildlife Viewing",
      description: "Yellowstone: bison, elk, bears, wolves. Keep 25 yards from most animals, 100 yards from bears/wolves. Dawn and dusk best times."
    },
    {
      icon: Utensils,
      title: "Food & Supplies",
      description: "Stock up before entering parks. Park restaurants pricey. Bring cooler for road trips. Bear-proof storage required in many campgrounds."
    },
    {
      icon: DollarSign,
      title: "National Parks Pass",
      description: "$80 annual pass covers all national parks. Entry $20-35 per vehicle per park. Pass pays for itself after 3-4 parks. Buy at first park."
    },
    {
      icon: Info,
      title: "Best Time to Visit",
      description: "Summer crowded but all facilities open. Spring wildflowers beautiful. Fall colors stunning, fewer crowds. Winter magical but limited access."
    }
  ],
  
  highlights: [
    "Hike Half Dome in Yosemite",
    "Watch Old Faithful erupt in Yellowstone",
    "Sunrise over Grand Canyon",
    "Angels Landing hike in Zion",
    "Delicate Arch at sunset (Arches)",
    "Hike The Narrows in Zion",
    "Wildlife spotting in Yellowstone",
    "General Sherman Tree (Sequoia)",
    "Mesa Arch sunrise (Canyonlands)",
    "Glacier Point views (Yosemite)"
  ],
  
  tips: [
    "Buy $80 annual parks pass - pays for itself after 3 parks",
    "Book popular trail permits 6 months in advance (Half Dome, Angels Landing)",
    "Visit popular parks mid-week to avoid weekend crowds",
    "Arrive at trailheads before 7am to get parking spots",
    "Download offline maps - cell service spotty in parks",
    "Bring layers - weather changes quickly, mornings cold even in summer",
    "Stay inside parks when possible - closer to attractions, see sunrise",
    "Respect wildlife - stay in car, use telephoto lens, never feed animals",
    "Pack out all trash - leave no trace principles essential",
    "Check road/trail conditions before visiting - snow closures common"
  ]
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
  tags: ["City", "Food", "Culture"],
  featured: true,
  
  subtitle: "The City That Never Sleeps",
  heroImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "April-June, September-November",
    duration: "5-7 days minimum",
    budget: "$$$ - Expensive",
    highlights: 50,
    language: "English",
    currency: "US Dollar (USD)"
  },
  
  overview: "New York City is the ultimate urban experience - a melting pot of cultures, cuisines, and creativity. From Times Square's neon lights to Central Park's green oasis, from world-class museums to Brooklyn's cool neighborhoods, NYC pulses with energy 24/7. Experience Broadway shows, diverse food scenes, iconic landmarks, and the incomparable vibe of the Big Apple.",
  
  destinations: [
    {
      name: "Manhattan",
      description: "The heart of NYC with Times Square, Central Park, Empire State Building, MoMA, 5th Avenue shopping, and endless iconic sights.",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop"
    },
    {
      name: "Brooklyn",
      description: "Hip borough with Brooklyn Bridge, DUMBO waterfront, Williamsburg cafes, Prospect Park, brownstones, and thriving arts scene.",
      image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&h=600&fit=crop"
    },
    {
      name: "Lower Manhattan",
      description: "Financial District with 9/11 Memorial, Statue of Liberty ferry, Wall Street, Battery Park, and One World Observatory views.",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop"
    },
    {
      name: "Upper West Side",
      description: "Cultural hub with Lincoln Center, American Museum of Natural History, Riverside Park, and classic NYC residential streets.",
      image: "https://images.unsplash.com/photo-1546436836-07a91091f160?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Getting Around",
      description: "Subway runs 24/7 - get 7-day unlimited MetroCard ($34). Walking best in Manhattan. Yellow cabs/Uber everywhere. Avoid driving - parking nightmare."
    },
    {
      icon: Camera,
      title: "Must-See Attractions",
      description: "Statue of Liberty, Empire State Building, Central Park, Brooklyn Bridge, Times Square, MoMA, Metropolitan Museum, 9/11 Memorial."
    },
    {
      icon: Users,
      title: "Broadway Shows",
      description: "Book ahead for Hamilton, Lion King, Wicked. TKTS booth for same-day discounts (Times Square, South Street Seaport). Matinees cheaper."
    },
    {
      icon: Utensils,
      title: "Food Scene",
      description: "Pizza slice $3-5. Food trucks everywhere. Diverse cuisines: Chinatown, Little Italy, Koreatown. Bagels mandatory. Fine dining world-class."
    },
    {
      icon: DollarSign,
      title: "Budget Tips",
      description: "Free: Staten Island Ferry (Statue views), High Line, Brooklyn Bridge walk, many museums on certain days. Happy hour deals common. Hotel alternatives: hostels, Airbnb."
    },
    {
      icon: Info,
      title: "NYC Etiquette",
      description: "Walk fast, stand right on escalators, don't stop in middle of sidewalk. Tip 18-20%. Don't make eye contact with crazies on subway."
    }
  ],
  
  highlights: [
    "Walk across Brooklyn Bridge at sunset",
    "View NYC from Empire State Building",
    "Stroll through Central Park",
    "See a Broadway show",
    "Visit Statue of Liberty and Ellis Island",
    "Explore world-class museums",
    "Times Square at night",
    "Food tour in diverse neighborhoods",
    "Walk the High Line",
    "DUMBO waterfront views"
  ],
  
  tips: [
    "Get 7-day unlimited MetroCard ($34) - saves money if staying 4+ days",
    "Book Broadway tickets in advance or use TKTS for day-of discounts",
    "Walk across Brooklyn Bridge early morning to avoid crowds",
    "Many museums have pay-what-you-wish hours - check schedules",
    "Avoid eating in Times Square - tourist trap prices, mediocre food",
    "Stay in Brooklyn or Queens for cheaper hotels, still easy subway access",
    "Download Citymapper app - best for NYC public transit navigation",
    "Pizza slice rule: if it's good, locals eat there and line is out door",
    "Central Park free concerts and events in summer",
    "Explore neighborhoods on foot - Greenwich Village, SoHo, Williamsburg"
  ]
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
  tags: ["Nature", "Adventure", "Wildlife"],
  featured: true,
  
  subtitle: "Majestic Mountains, Turquoise Lakes & Wild Adventures",
  heroImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "June-September (Summer), December-March (Skiing)",
    duration: "7-10 days recommended",
    budget: "$$ - Moderate to High",
    highlights: 35,
    language: "English & French",
    currency: "Canadian Dollar (CAD)"
  },
  
  overview: "The Canadian Rockies are nature's masterpiece - towering peaks, pristine turquoise lakes, ancient glaciers, and abundant wildlife. Banff and Jasper National Parks offer world-class hiking, stunning scenic drives, hot springs, and opportunities to spot bears, elk, and moose. Experience the Icefields Parkway, Lake Louise, Moraine Lake, and endless mountain adventures in one of the world's most beautiful wilderness areas.",
  
  destinations: [
    {
      name: "Banff National Park",
      description: "Canada's oldest national park. Lake Louise, Moraine Lake, Banff town, hot springs, gondola views, and endless hiking trails.",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&h=600&fit=crop"
    },
    {
      name: "Jasper National Park",
      description: "Larger, wilder, less crowded than Banff. Athabasca Falls, Maligne Lake, hot springs, dark sky preserve, and incredible wildlife viewing.",
      image: "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=800&h=600&fit=crop"
    },
    {
      name: "Icefields Parkway",
      description: "One of world's most scenic drives. 230km between Banff and Jasper. Columbia Icefield, Peyto Lake, countless viewpoints and glaciers.",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop"
    },
    {
      name: "Yoho National Park",
      description: "Hidden gem near Banff. Takakkaw Falls, Emerald Lake, Natural Bridge, and excellent hiking less crowded than neighboring parks.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Getting There",
      description: "Fly to Calgary, drive 90 minutes to Banff. Rent car essential - public transit limited. Parks connected by scenic highways. Gas up frequently."
    },
    {
      icon: Camera,
      title: "Photography Spots",
      description: "Lake Louise sunrise, Moraine Lake at dawn (arrive 5am!), Peyto Lake overlook, Spirit Island, Athabasca Falls. Golden hours magical."
    },
    {
      icon: Users,
      title: "Wildlife Viewing",
      description: "Bears, elk, moose, bighorn sheep, mountain goats common. Keep 100m from bears, 30m from other wildlife. Never feed animals. Carry bear spray."
    },
    {
      icon: Utensils,
      title: "Food & Dining",
      description: "Banff town has great restaurants but pricey. Pack picnics for day trips. Limited dining in smaller towns. Stock up on groceries."
    },
    {
      icon: DollarSign,
      title: "Park Pass",
      description: "Parks Canada Discovery Pass required. $145 for annual pass (best value for 7+ days). Daily passes $10-20. Free for under 18."
    },
    {
      icon: Info,
      title: "Essential Planning",
      description: "Book accommodations 6+ months ahead for summer. Lake Louise parking reservation required. Icefields Parkway best done over 2 days. Bring layers."
    }
  ],
  
  highlights: [
    "Sunrise at Moraine Lake",
    "Drive Icefields Parkway",
    "Hike to Lake Agnes Tea House",
    "Soak in Banff Upper Hot Springs",
    "Columbia Icefield glacier walk",
    "Wildlife spotting throughout parks",
    "Canoe on Emerald Lake",
    "Johnston Canyon waterfalls",
    "Sulphur Mountain gondola views",
    "Maligne Lake boat cruise"
  ],
  
  tips: [
    "Visit Moraine Lake before 6am - parking fills by 6:30am in summer",
    "Book hotels 6+ months in advance - limited options, high demand",
    "Parks Canada Discovery Pass saves money if visiting 7+ days",
    "Drive Icefields Parkway slowly - stop at every viewpoint",
    "Carry bear spray on all hikes - know how to use it",
    "Book popular restaurants in Banff weeks ahead",
    "Bring layers - weather changes rapidly in mountains",
    "Gas stations sparse - fill up when you see them",
    "Jasper less crowded than Banff but equally beautiful",
    "Visit in September for fall colors and fewer crowds"
  ]
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
  tags: ["Culture", "History", "Beach"],
  featured: false,
  
  subtitle: "Vibrant Culture, Ancient Ruins & Caribbean Beaches",
  heroImage: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "November-April (Dry season)",
    duration: "10-14 days recommended",
    budget: "$ - Budget Friendly",
    highlights: 45,
    language: "Spanish",
    currency: "Mexican Peso (MXN)"
  },
  
  overview: "Mexico captivates with its rich Mayan and Aztec heritage, colonial architecture, world-class beaches, and vibrant culture. Explore ancient pyramids at Chichen Itza and Teotihuacan, wander colorful colonial cities like San Miguel de Allende, relax on Tulum's pristine beaches, savor authentic tacos and mezcal, and experience the warmth of Mexican hospitality. From bustling Mexico City to peaceful Oaxaca, Mexico offers incredible diversity.",
  
  destinations: [
    {
      name: "Mexico City",
      description: "Massive capital with world-class museums, ancient Teotihuacan pyramids, Frida Kahlo's house, Roma Norte cafes, and amazing street food.",
      image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&h=600&fit=crop"
    },
    {
      name: "Oaxaca",
      description: "Cultural heart with indigenous markets, mezcal distilleries, colonial architecture, vibrant art scene, and incredible mole cuisine.",
      image: "https://images.unsplash.com/photo-1562059392-096320bccc7e?w=800&h=600&fit=crop"
    },
    {
      name: "Tulum & Riviera Maya",
      description: "Caribbean coast with Mayan ruins overlooking beaches, cenotes for swimming, beach clubs, and laid-back jungle vibes.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    },
    {
      name: "San Miguel de Allende",
      description: "Charming colonial town with cobblestone streets, art galleries, rooftop bars, excellent restaurants, and picturesque central plaza.",
      image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Getting Around",
      description: "ADO buses comfortable and cheap between cities. Domestic flights for long distances. Colectivos (shared vans) in Yucatan. Mexico City metro excellent."
    },
    {
      icon: Camera,
      title: "Must-Visit Ruins",
      description: "Teotihuacan (Mexico City), Chichen Itza (most famous), Tulum (beach views), Palenque (jungle setting), Monte Alban (Oaxaca). Go early to beat crowds."
    },
    {
      icon: Users,
      title: "Cultural Experiences",
      description: "Day of Dead celebrations (Nov 1-2). Lucha libre wrestling. Cooking classes. Mezcal/tequila tastings. Indigenous markets. Traditional dance shows."
    },
    {
      icon: Utensils,
      title: "Mexican Cuisine",
      description: "Street tacos $1-2. Mole in Oaxaca. Cochinita pibil in Yucatan. Pozole, tamales, fresh seafood. Try local specialties. Agua fresca everywhere."
    },
    {
      icon: DollarSign,
      title: "Budget Friendly",
      description: "Very affordable. Nice hotels $30-80. Meals $5-15. Beer $2-3. Beaches free. ADO buses cheap. Can travel comfortably on $50-80/day."
    },
    {
      icon: Info,
      title: "Safety Tips",
      description: "Generally safe in tourist areas. Avoid displaying wealth. Use ATMs inside banks. Don't drink tap water. Travel during day. Research current conditions."
    }
  ],
  
  highlights: [
    "Climb Teotihuacan pyramids",
    "Explore Mayan ruins at Chichen Itza",
    "Swim in Yucatan cenotes",
    "Street food tour in Mexico City",
    "Mezcal tasting in Oaxaca",
    "Beach time in Tulum",
    "Visit Frida Kahlo's Blue House",
    "Colonial architecture in San Miguel",
    "Day of Dead celebrations",
    "Snorkel in Caribbean waters"
  ],
  
  tips: [
    "Don't drink tap water - stick to bottled water or purified agua",
    "Learn basic Spanish phrases - helps tremendously",
    "Visit Chichen Itza early (8am) to avoid tour bus crowds",
    "Use ADO buses between cities - comfortable and cheap",
    "Bargain at markets but not in established shops",
    "Tipping: 10-15% at restaurants, round up for taxis",
    "Avoid Cancun hotel zone - overpriced and not authentic",
    "Cenotes require biodegradable sunscreen - regular banned",
    "Mexico City altitude (7,300ft) - take it easy first day",
    "Try street food where locals eat - it's safe and delicious"
  ]
},
{
  id: "california-coast",
  title: "California Coast Road Trip",
  description: "San Francisco to San Diego via Highway 1",
  image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=250&fit=crop",
  continent: "North America",
  rating: 4.9,
  downloads: "7.9k",
  pages: 85,
  googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
  tags: ["Road Trip", "Beach", "Nature"],
  featured: false,
  
  subtitle: "Epic Pacific Coast Highway Adventure",
  heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "April-October (Best weather)",
    duration: "7-10 days recommended",
    budget: "$$ - Moderate to High",
    highlights: 40,
    language: "English",
    currency: "US Dollar (USD)"
  },
  
  overview: "The California Coast is one of the world's most spectacular road trips. Drive Highway 1 from San Francisco to San Diego, passing through Big Sur's dramatic cliffs, charming coastal towns, world-famous wine country, pristine beaches, and endless ocean views. Experience tech hub San Francisco, laid-back Santa Barbara, trendy LA, and sunny San Diego. Combine urban culture with natural beauty on this unforgettable journey.",
  
  destinations: [
    {
      name: "San Francisco",
      description: "Golden Gate Bridge, Alcatraz, cable cars, Fisherman's Wharf, diverse neighborhoods, tech culture, and foggy charm.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop"
    },
    {
      name: "Big Sur",
      description: "Dramatic coastal cliffs, redwood forests, McWay Falls, Bixby Bridge, camping, hiking, and some of the most beautiful coastline on Earth.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    },
    {
      name: "Los Angeles",
      description: "Hollywood, beaches, Santa Monica Pier, Venice Beach, Griffith Observatory, diverse food scene, and entertainment capital of the world.",
      image: "https://images.unsplash.com/photo-1534190239940-9ba8944ea261?w=800&h=600&fit=crop"
    },
    {
      name: "San Diego",
      description: "Perfect weather, Balboa Park, beaches, Gaslamp Quarter, craft beer scene, Mexican food, and laid-back Southern California vibe.",
      image: "https://images.unsplash.com/photo-1521464302861-ce943915d1c3?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Road Trip Planning",
      description: "Fly into SF, out of SD (or reverse). Rent car. Allow 7-10 days minimum. Drive north to south (right side closer to ocean). Book Big Sur lodging ahead."
    },
    {
      icon: Camera,
      title: "Can't-Miss Stops",
      description: "Golden Gate Bridge, 17-Mile Drive, McWay Falls, Bixby Bridge, Hearst Castle, Morro Bay, Santa Barbara, Malibu beaches, La Jolla Cove."
    },
    {
      icon: Users,
      title: "Best Detours",
      description: "Napa/Sonoma wine country, Monterey Aquarium, Carmel-by-the-Sea, Pismo Beach, Solvang Danish village, Channel Islands, Joshua Tree."
    },
    {
      icon: Utensils,
      title: "California Cuisine",
      description: "Fresh seafood everywhere. Farm-to-table restaurants. Wine country dining. Taco trucks in LA. San Diego fish tacos. SF sourdough and dim sum."
    },
    {
      icon: DollarSign,
      title: "Budget Considerations",
      description: "Gas expensive ($4-6/gallon). Parking fees common. Hotels pricey near coast. Camp in Big Sur for savings. City hotels $150-300+. Food adds up quickly."
    },
    {
      icon: Info,
      title: "Driving Tips",
      description: "Highway 1 narrow and winding - take your time. Pullouts frequent for photos. Watch for cyclists. Gas stations sparse in Big Sur. Check road conditions."
    }
  ],
  
  highlights: [
    "Drive across Golden Gate Bridge",
    "Sunset at McWay Falls",
    "Explore Hearst Castle",
    "Wine tasting in Paso Robles",
    "Beach time in Santa Barbara",
    "Hollywood sign and Griffith Observatory",
    "Santa Monica Pier at sunset",
    "La Jolla seals and sea lions",
    "Balboa Park museums",
    "Redwoods in Big Sur"
  ],
  
  tips: [
    "Drive north to south - right lane hugs coast, better ocean views",
    "Book Big Sur lodging 3-6 months ahead - limited options",
    "Start early - most attractions open 9-10am, beat traffic",
    "Gas up before Big Sur - stations 40+ miles apart",
    "Pack layers - coastal weather unpredictable, fog common",
    "Free parking rare in cities - budget for parking fees",
    "17-Mile Drive ($11 entrance) worth it for coastal views",
    "LA traffic brutal - avoid rush hours (7-9am, 4-7pm)",
    "Camp in Big Sur state parks - incredible and affordable",
    "Allow full day for driving SF to Monterey via Highway 1"
  ]
}
  ],
  "south-america": [{
  id: "peru-machu-picchu",
  title: "Peru & Machu Picchu Guide",
  description: "Complete guide to Peru's ancient wonders and adventures",
  image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=250&fit=crop",
  continent: "South America",
  rating: 4.9,
  downloads: "7.8k",
  pages: 98,
  googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
  tags: ["Adventure", "History", "Hiking"],
  featured: true,
  
  subtitle: "Ancient Inca Empire & Andean Adventures",
  heroImage: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "May-September (Dry season)",
    duration: "10-14 days recommended",
    budget: "$ - Budget to Moderate",
    highlights: 42,
    language: "Spanish & Quechua",
    currency: "Peruvian Sol (PEN)"
  },
  
  overview: "Peru is home to one of the world's most iconic archaeological sites - Machu Picchu. But this incredible country offers so much more: the vibrant capital Lima, colonial Cusco, mysterious Nazca Lines, floating islands of Lake Titicaca, Amazon rainforest adventures, and world-renowned cuisine. Trek the Inca Trail, explore ancient ruins, sample ceviche and pisco sours, and immerse yourself in Andean culture.",
  
  destinations: [
    {
      name: "Machu Picchu & Cusco",
      description: "Lost city of the Incas perched high in the Andes. Cusco's colonial architecture, Sacred Valley ruins, and gateway to Machu Picchu via Inca Trail or train.",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&h=600&fit=crop"
    },
    {
      name: "Lima",
      description: "Cosmopolitan capital with world-class restaurants, colonial center, Miraflores coastal cliffs, surfing, and Peru's culinary heart.",
      image: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=800&h=600&fit=crop"
    },
    {
      name: "Lake Titicaca",
      description: "World's highest navigable lake with floating Uros Islands, traditional communities, stunning views, and gateway to Bolivia.",
      image: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=800&h=600&fit=crop"
    },
    {
      name: "Amazon Rainforest",
      description: "Peruvian Amazon from Puerto Maldonado or Iquitos. Wildlife spotting, jungle lodges, river cruises, and incredible biodiversity.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Getting to Machu Picchu",
      description: "Inca Trail (4-day trek, book 6 months ahead). Train from Cusco/Ollantaytambo (Peru Rail/Inca Rail). Alternative treks: Salkantay, Lares. Altitude acclimatization crucial."
    },
    {
      icon: Camera,
      title: "Inca Trail Permits",
      description: "Limited to 500 people daily (including guides/porters). Book 6+ months ahead for dry season. Alternative treks available without permits. Train tickets also sell out."
    },
    {
      icon: Users,
      title: "Altitude Sickness",
      description: "Cusco at 11,150ft. Acclimatize 2-3 days before Machu Picchu or Inca Trail. Drink coca tea. Take it slow. Medication available (Diamox). Symptoms: headache, nausea."
    },
    {
      icon: Utensils,
      title: "Peruvian Cuisine",
      description: "Ceviche, lomo saltado, anticuchos, cuy (guinea pig), causa. Lima has world's best restaurants (Central, Maido). Chicha morada, pisco sour. Street food safe."
    },
    {
      icon: DollarSign,
      title: "Budget Planning",
      description: "Budget-friendly country. Hostels $10-20. Nice hotels $40-80. Meals $5-15. Inca Trail $500-600. Machu Picchu entry $50. Train $65-150 each way. Tours affordable."
    },
    {
      icon: Info,
      title: "Essential Tips",
      description: "Visa-free for most nationalities. Cash essential outside cities. Sun strong at altitude - sunscreen crucial. Learn basic Spanish. Bargain at markets."
    }
  ],
  
  highlights: [
    "Witness sunrise at Machu Picchu",
    "Trek the legendary Inca Trail",
    "Explore Sacred Valley ruins",
    "Wander colonial Cusco streets",
    "Sample Lima's world-class restaurants",
    "Visit floating islands of Lake Titicaca",
    "Fly over mysterious Nazca Lines",
    "Hike Rainbow Mountain (Vinicunca)",
    "Experience Amazon wildlife",
    "Try authentic Peruvian ceviche"
  ],
  
  tips: [
    "Book Inca Trail permits 6+ months in advance - they sell out",
    "Spend 2-3 days in Cusco to acclimatize before Machu Picchu",
    "Arrive at Machu Picchu early (first bus at 5:30am) to beat crowds",
    "Book train tickets to Machu Picchu well in advance",
    "Drink coca tea for altitude - locals swear by it",
    "Lima: Stay in Miraflores or Barranco, not central Lima",
    "Rainbow Mountain is 17,000ft - only go if well-acclimatized",
    "Negotiate prices for souvenirs - start at 40-50% of asking",
    "Don't skip Sacred Valley - Ollantaytambo and Pisac ruins amazing",
    "Try guinea pig (cuy) if adventurous - it's a delicacy"
  ]
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
  tags: ["Beach", "Nature", "Culture"],
  featured: true,
  
  subtitle: "Samba, Beaches & Amazon Rainforest",
  heroImage: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "December-March (Summer), September-November (Spring)",
    duration: "14-21 days recommended",
    budget: "$$ - Moderate",
    highlights: 48,
    language: "Portuguese",
    currency: "Brazilian Real (BRL)"
  },
  
  overview: "Brazil is South America's giant - diverse, vibrant, and unforgettable. From Rio's iconic beaches and Christ the Redeemer to the mighty Amazon rainforest, from Salvador's Afro-Brazilian culture to Iguazu's thundering waterfalls, Brazil captivates. Experience Carnival, samba, caipirinha cocktails, pristine beaches, colonial towns, and the warmth of Brazilian hospitality. It's a country of superlatives and endless adventure.",
  
  destinations: [
    {
      name: "Rio de Janeiro",
      description: "Iconic city with Christ the Redeemer, Sugarloaf Mountain, Copacabana and Ipanema beaches, Carnival, samba, and stunning coastal setting.",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&h=600&fit=crop"
    },
    {
      name: "Amazon Rainforest",
      description: "World's largest rainforest accessed from Manaus. Jungle lodges, river cruises, wildlife spotting, indigenous communities, and incredible biodiversity.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop"
    },
    {
      name: "Iguazu Falls",
      description: "Massive waterfalls on Brazil-Argentina border. 275 falls creating thunderous spectacle. Walkways get you close. Best viewed from both countries.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
    },
    {
      name: "Salvador da Bahia",
      description: "Afro-Brazilian cultural heart. Colonial Pelourinho district, capoeira, candomblé religion, beaches, and incredible street food scene.",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Getting Around",
      description: "Domestic flights essential - Brazil is huge. Buses comfortable for medium distances. Uber/99 in cities. Rio metro good. Amazon requires boats/planes."
    },
    {
      icon: Camera,
      title: "Must-Do Experiences",
      description: "Christ the Redeemer at sunrise. Sunset from Sugarloaf. Carnival (book year ahead). Amazon wildlife tour. Iguazu Falls walkways. Beach time."
    },
    {
      icon: Users,
      title: "Safety Considerations",
      description: "Stay alert in cities. Don't display valuables. Avoid favelas without guided tours. Use official taxis/Uber. Beach vendors persistent. Most tourist areas safe."
    },
    {
      icon: Utensils,
      title: "Brazilian Cuisine",
      description: "Feijoada (black bean stew), churrasco (BBQ), açaí bowls, pão de queijo, brigadeiros. Fresh seafood. Caipirinha national cocktail. Rodizio steakhouses."
    },
    {
      icon: DollarSign,
      title: "Budget Planning",
      description: "Moderate prices. Nice hotels $50-120. Meals $8-20. Domestic flights $100-200. Amazon tours pricey. Carnival prices spike. Street food cheap and good."
    },
    {
      icon: Info,
      title: "Essential Info",
      description: "Visa requirements vary by nationality. Yellow fever vaccine recommended. Portuguese different from Spanish. Learn basic phrases. Card widely accepted."
    }
  ],
  
  highlights: [
    "Visit Christ the Redeemer",
    "Relax on Copacabana and Ipanema",
    "Cable car up Sugarloaf Mountain",
    "Experience Carnival in Rio",
    "Explore Amazon rainforest",
    "Walk among Iguazu Falls",
    "Dance to samba and bossa nova",
    "Discover colonial Salvador",
    "Beach hop in Bahia",
    "Try authentic Brazilian barbecue"
  ],
  
  tips: [
    "Book Carnival accommodations 6-12 months ahead - prices triple",
    "Visit Christ the Redeemer early morning - less crowded, better photos",
    "Don't walk on beach at night or display valuables during day",
    "Learn basic Portuguese - 'Obrigado/a' goes a long way",
    "Iguazu Falls: See both Brazil and Argentina sides (2 days)",
    "Amazon: 3-4 days minimum at lodge for wildlife chances",
    "Rio beaches: Ipanema safer/nicer than Copacabana",
    "Use Uber/99 instead of street taxis - safer and cheaper",
    "Yellow fever vaccine required for Amazon, recommended everywhere",
    "Beach vendors persistent - firm 'não' (no) works"
  ]
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
  tags: ["Nature", "Adventure", "Wine"],
  featured: true,
  
  subtitle: "Epic Glaciers, Wine Country & Tango",
  heroImage: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "November-March (Patagonia summer), March-May (Wine harvest)",
    duration: "14-21 days recommended",
    budget: "$$ - Moderate",
    highlights: 45,
    language: "Spanish",
    currency: "Argentine Peso (ARS) & Chilean Peso (CLP)"
  },
  
  overview: "Argentina and Chile share dramatic Patagonia - a wilderness of glaciers, mountains, and pristine lakes. From Buenos Aires's tango culture to Mendoza's wine valleys, from Torres del Paine's peaks to Perito Moreno Glacier, from Chilean fjords to penguin colonies, this journey offers adventure and sophistication. Experience gaucho culture, world-class wines, spectacular hiking, and the raw beauty of South America's southern frontier.",
  
  destinations: [
    {
      name: "Patagonia (Argentina)",
      description: "El Calafate's Perito Moreno Glacier, El Chaltén hiking (Fitz Roy), dramatic landscapes, estancias, and gateway to Torres del Paine.",
      image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&h=600&fit=crop"
    },
    {
      name: "Torres del Paine (Chile)",
      description: "Chile's premier national park. W Trek, granite towers, Grey Glacier, turquoise lakes, guanacos, and world-class trekking.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop"
    },
    {
      name: "Buenos Aires",
      description: "Sophisticated capital with tango shows, steakhouses, European architecture, colorful La Boca, Recoleta Cemetery, and vibrant neighborhoods.",
      image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&h=600&fit=crop"
    },
    {
      name: "Mendoza Wine Region",
      description: "Argentina's wine capital at Andes foothills. Malbec vineyards, wine tours, cycling between bodegas, Aconcagua views, and gourmet dining.",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Getting Around",
      description: "Fly Buenos Aires to El Calafate. Bus to El Chaltén. Cross to Chile (Puerto Natales/Torres del Paine). Long distances - flights save time. Buses comfortable."
    },
    {
      icon: Camera,
      title: "Patagonia Trekking",
      description: "Torres del Paine W Trek (4-5 days) or O Circuit (8-9 days). Fitz Roy day hikes from El Chaltén. Book refugios/campsites ahead. Bring layers and rain gear."
    },
    {
      icon: Users,
      title: "Best Experiences",
      description: "Perito Moreno glacier walk. Fitz Roy sunrise hike. Torres del Paine W Trek. Tango show in Buenos Aires. Wine tasting in Mendoza. Asado (BBQ)."
    },
    {
      icon: Utensils,
      title: "Food & Wine",
      description: "Argentine steak unbeatable. Empanadas everywhere. Malbec wine. Dulce de leche desserts. Mate tea ritual. Chilean seafood and Carmenere wine."
    },
    {
      icon: DollarSign,
      title: "Budget Planning",
      description: "Patagonia expensive (tourism season). Buenos Aires moderate. Hostels $15-30. Nice hotels $60-120. Meals $10-25. W Trek $800-1500 all-inclusive."
    },
    {
      icon: Info,
      title: "Seasonal Planning",
      description: "Patagonia season Nov-Mar. Weather unpredictable - bring layers. Book Torres del Paine refugios 6+ months ahead. Buenos Aires year-round. Mendoza harvest Mar-Apr."
    }
  ],
  
  highlights: [
    "Watch Perito Moreno Glacier calve",
    "Hike to Fitz Roy at sunrise",
    "Trek Torres del Paine W Circuit",
    "Tango show in Buenos Aires",
    "Wine tasting in Mendoza vineyards",
    "Spot penguins in Punta Tombo",
    "Kayak near glaciers",
    "Experience authentic asado BBQ",
    "Cross Andes by bus",
    "Explore Ushuaia (world's southernmost city)"
  ],
  
  tips: [
    "Book Torres del Paine refugios/campsites 6+ months ahead for peak season",
    "Patagonia weather unpredictable - pack for all seasons even in summer",
    "El Chaltén is free camping vs. expensive Torres del Paine",
    "Visit Perito Moreno on catamaran tour - get close to glacier",
    "Buenos Aires: Take free walking tours, excellent and informative",
    "Mendoza: Rent bikes and cycle between wineries - fun and scenic",
    "Bring US dollars - better exchange rates than credit cards in Argentina",
    "Layer up - Patagonia wind is serious even in summer",
    "W Trek clockwise less crowded than counterclockwise",
    "Don't skip El Chaltén - Fitz Roy hikes rival Torres del Paine"
  ]
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
  tags: ["Culture", "Coffee", "Beach"],
  featured: false,
  
  subtitle: "Colonial Gems, Coffee Culture & Caribbean Coast",
  heroImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "December-March, July-August (Dry seasons)",
    duration: "10-14 days recommended",
    budget: "$ - Budget Friendly",
    highlights: 38,
    language: "Spanish",
    currency: "Colombian Peso (COP)"
  },
  
  overview: "Colombia has emerged as South America's hottest destination - combining colonial beauty, coffee culture, Caribbean beaches, and warm hospitality. Explore colorful Cartagena's old town, tour coffee plantations in Salento, experience Bogotá's vibrant art scene, trek to Lost City, and relax on Tayrona's pristine beaches. Colombia surprises visitors with its diversity, friendliness, and incredible transformation.",
  
  destinations: [
    {
      name: "Cartagena",
      description: "Stunning colonial walled city on Caribbean coast. Colorful buildings, fortress walls, rooftop bars, beaches, and romantic old town wandering.",
      image: "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=800&h=600&fit=crop"
    },
    {
      name: "Coffee Region (Eje Cafetero)",
      description: "Salento, Filandia, and coffee plantations. Cocora Valley's wax palms, coffee tours, hacienda stays, and beautiful mountain scenery.",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop"
    },
    {
      name: "Bogotá",
      description: "High-altitude capital with colonial La Candelaria, world-class museums, Monserrate views, street art, craft beer, and dynamic cultural scene.",
      image: "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=800&h=600&fit=crop"
    },
    {
      name: "Tayrona National Park",
      description: "Caribbean coast paradise with jungle-backed beaches, hiking trails, hammock camping, and crystal-clear waters. Near Santa Marta.",
      image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Getting Around",
      description: "Domestic flights cheap between cities. Buses comfortable but long distances. VIP buses for overnight. Avianca, LATAM, Viva Air. Uber in cities."
    },
    {
      icon: Camera,
      title: "Must-Do Experiences",
      description: "Coffee farm tour in Salento. Wander Cartagena's walled city. Hike Cocora Valley. Street art tour in Bogotá. Tayrona beaches. Try bandeja paisa."
    },
    {
      icon: Users,
      title: "Safety Notes",
      description: "Much safer than past reputation. Tourist areas safe. Don't display valuables. Avoid certain neighborhoods in cities. Ask locals. Overall very welcoming."
    },
    {
      icon: Utensils,
      title: "Colombian Cuisine",
      description: "Bandeja paisa (massive platter), arepas, empanadas, ajiaco soup, fresh tropical fruit, coffee everywhere. Caribbean coast has excellent seafood."
    },
    {
      icon: DollarSign,
      title: "Budget Paradise",
      description: "Very affordable. Hostels $10-20. Nice hotels $40-80. Meals $5-12. Coffee tours $25-40. Domestic flights $50-100. Great value overall."
    },
    {
      icon: Info,
      title: "Travel Tips",
      description: "Most nationalities no visa needed. Yellow fever vaccine recommended for some areas. Spanish helpful. Altitude in Bogotá (8,600ft) - take it easy first day."
    }
  ],
  
  highlights: [
    "Explore Cartagena's walled city",
    "Tour coffee plantations in Salento",
    "Hike Cocora Valley's wax palms",
    "Discover Bogotá's street art",
    "Relax on Tayrona's beaches",
    "Try authentic Colombian coffee",
    "Visit colorful Guatapé",
    "Dance salsa in Cali",
    "Trek to Lost City",
    "Monserrate views over Bogotá"
  ],
  
  tips: [
    "Colombia safer than reputation - tourist areas very safe",
    "Learn Spanish basics - English limited outside tourist zones",
    "Cartagena can be very hot (90°F+) - visit Dec-Mar for better weather",
    "Coffee region: Stay in finca (coffee farm) for authentic experience",
    "Bogotá altitude 8,600ft - take first day easy, drink coca tea",
    "Tayrona camping magical but bring all supplies including water",
    "Domestic flights cheap - flying better than 12-hour bus rides",
    "Try bandeja paisa - massive traditional meal (skip breakfast!)",
    "Tipping not mandatory but 10% appreciated at restaurants",
    "Cocora Valley hike: Start early to avoid afternoon clouds"
  ]
},
{
  id: "ecuador-galapagos",
  title: "Ecuador & Galápagos Islands",
  description: "Quito, Amazon, Andes, and unique Galápagos wildlife",
  image: "https://images.unsplash.com/photo-1590089016763-f0fe8e4a5e3e?w=400&h=250&fit=crop",
  continent: "South America",
  rating: 4.8,
  downloads: "5.6k",
  pages: 92,
  googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
  tags: ["Wildlife", "Nature", "Adventure"],
  featured: false,
  
  subtitle: "Darwin's Islands & Andean Diversity",
  heroImage: "https://images.unsplash.com/photo-1590089016763-f0fe8e4a5e3e?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "June-November (Cooler, drier), December-May (Warmer)",
    duration: "10-14 days recommended",
    budget: "$$ - Moderate (Galápagos expensive)",
    highlights: 40,
    language: "Spanish",
    currency: "US Dollar (USD)"
  },
  
  overview: "Ecuador packs incredible diversity into a small country - volcanic Andes, Amazon rainforest, colonial Quito, indigenous markets, and the legendary Galápagos Islands. Walk among fearless wildlife found nowhere else on Earth, explore cloud forests, summit volcanoes, and experience authentic Andean culture. Despite its size, Ecuador offers some of South America's most unique experiences.",
  
  destinations: [
    {
      name: "Galápagos Islands",
      description: "Unique wildlife paradise. Giant tortoises, marine iguanas, blue-footed boobies, sea lions. Snorkeling, island hopping, and Darwin's inspiration.",
      image: "https://images.unsplash.com/photo-1590089016763-f0fe8e4a5e3e?w=800&h=600&fit=crop"
    },
    {
      name: "Quito",
      description: "World's highest capital (9,350ft) with colonial old town, equator monument, cable car to volcano rim, and gateway to adventures.",
      image: "https://images.unsplash.com/photo-1623773242944-3cd5b1c8357e?w=800&h=600&fit=crop"
    },
    {
      name: "Amazon Rainforest",
      description: "Ecuadorian Amazon accessible from Tena or Coca. Wildlife lodges, canopy walks, indigenous communities, and incredible biodiversity.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop"
    },
    {
      name: "Otavalo & Andes",
      description: "Famous indigenous market, crater lakes, Cotopaxi volcano, hot springs, and authentic highland culture. Beautiful mountain scenery.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Galápagos Planning",
      description: "Cruise (4-8 days, expensive but comprehensive) or island hopping (budget option, Santa Cruz base). Book flights and cruises well ahead. $100 park fee on arrival."
    },
    {
      icon: Camera,
      title: "Wildlife Viewing",
      description: "Giant tortoises, blue-footed boobies, marine iguanas, sea lions, penguins, frigatebirds. Animals fearless - close encounters guaranteed. Snorkeling with sea turtles."
    },
    {
      icon: Users,
      title: "Altitude Considerations",
      description: "Quito at 9,350ft. Acclimatize 1-2 days before volcano treks or Cotopaxi. Altitude sickness common. Coca tea helps. Take it slow initially."
    },
    {
      icon: Utensils,
      title: "Ecuadorian Food",
      description: "Ceviche, llapingachos (potato cakes), hornado (roast pork), fresh seafood on coast. Guinea pig in highlands. Fresh juices everywhere. Uses US dollar."
    },
    {
      icon: DollarSign,
      title: "Budget & Costs",
      description: "Mainland affordable. Galápagos expensive: cruises $2,000-10,000+. Island hopping budget option ($100-150/day). Park fees $100. Flights to Galápagos $400-500 roundtrip."
    },
    {
      icon: Info,
      title: "Best Itinerary",
      description: "Quito (2 days) → Otavalo market (1 day) → Amazon (3-4 days) or Galápagos (4-8 days). Cotopaxi/Quilotoa loop popular. 10-14 days ideal."
    }
  ],
  
  highlights: [
    "Snorkel with sea lions in Galápagos",
    "See giant tortoises up close",
    "Explore Quito's colonial center",
    "Shop Otavalo's indigenous market",
    "Trek to Quilotoa crater lake",
    "Wildlife spotting in Amazon",
    "Hike near Cotopaxi volcano",
    "Stand on the equator",
    "Blue-footed booby mating dance",
    "Soak in Papallacta hot springs"
  ],
  
  tips: [
    "Book Galápagos cruise/flights 3-6 months ahead for best rates",
    "Last-minute Galápagos cruise deals exist in Puerto Ayora (risky)",
    "Bring $100 cash for Galápagos park entrance fee",
    "Quito altitude: Take first day easy, drink coca tea, no alcohol initially",
    "Island hopping cheaper than cruise but see less wildlife",
    "Otavalo market best on Saturday - massive and authentic",
    "Ecuador uses US dollars - bring small bills, ATMs common",
    "Amazon: 3-4 day lodge stay minimum for wildlife chances",
    "Pack layers - can be cold in highlands, hot in lowlands, hot in Galápagos",
    "Book Amazon lodges that include activities - some charge extra for everything"
  ]
}
],
  oceania: [
    // Add these guides to the "oceania" array in your guidesData.ts file

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
  tags: ["Beach", "Nature", "Adventure"],
  featured: true,
  
  subtitle: "From Sydney to the Great Barrier Reef",
  heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "September-November (Spring), March-May (Fall)",
    duration: "14-21 days minimum",
    budget: "$$$ - Expensive",
    highlights: 52,
    language: "English",
    currency: "Australian Dollar (AUD)"
  },
  
  overview: "Australia is a land of stunning contrasts - world-class cities, pristine beaches, ancient rainforests, the Great Barrier Reef, and the vast red Outback. From Sydney's iconic Opera House to Melbourne's laneway culture, from snorkeling with sea turtles to spotting koalas and kangaroos, Australia offers incredible diversity. Experience surf culture, Aboriginal heritage, unique wildlife, and laid-back Aussie hospitality in this massive island continent.",
  
  destinations: [
    {
      name: "Sydney & New South Wales",
      description: "Iconic Opera House, Harbour Bridge, Bondi Beach, Blue Mountains, wine country, and Australia's most famous city with beautiful harbor.",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop"
    },
    {
      name: "Great Barrier Reef & Queensland",
      description: "World's largest coral reef system. Cairns, Port Douglas, Whitsunday Islands. Snorkeling, diving, sailing, and tropical paradise.",
      image: "https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?w=800&h=600&fit=crop"
    },
    {
      name: "Melbourne & Great Ocean Road",
      description: "Cultural capital with laneway cafes, street art, sports obsession. Great Ocean Road's Twelve Apostles, coastal beauty, and penguin parades.",
      image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=800&h=600&fit=crop"
    },
    {
      name: "Uluru & Red Centre",
      description: "Sacred Uluru (Ayers Rock), Kata Tjuta, Kings Canyon. Aboriginal culture, desert landscapes, and spiritual heart of Australia.",
      image: "https://images.unsplash.com/photo-1598948485421-33a1655d3c18?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Getting Around",
      description: "Australia is huge - domestic flights essential. East coast: bus/train possible but slow. Rent car for flexibility. Campervan popular for coast trips."
    },
    {
      icon: Camera,
      title: "Great Barrier Reef",
      description: "Cairns or Port Douglas bases. Snorkeling trips from $100. Multi-day liveaboards best for diving. Whitsundays for sailing. Book marine tours ahead."
    },
    {
      icon: Users,
      title: "Wildlife Encounters",
      description: "Kangaroos, koalas, wombats, platypus, Tasmanian devils. Currumbin Sanctuary, Lone Pine Koala Sanctuary. Wild kangaroos common in bush."
    },
    {
      icon: Utensils,
      title: "Australian Food",
      description: "Great coffee culture. Fresh seafood. Asian fusion. BBQ (throw shrimp on the barbie). Vegemite, meat pies, Tim Tams, flat whites everywhere."
    },
    {
      icon: DollarSign,
      title: "Budget Planning",
      description: "Expensive country. Hostels $25-45. Hotels $100-200. Meals $15-30. Alcohol pricey. Tours add up. Budget $80-150/day backpacking, $200+ comfortable."
    },
    {
      icon: Info,
      title: "Essential Tips",
      description: "Working holiday visa popular. Sun strong - slip, slop, slap. Deadly creatures exist but rarely encountered. Distances huge - plan accordingly."
    }
  ],
  
  highlights: [
    "Opera House and Harbour Bridge",
    "Snorkel Great Barrier Reef",
    "Surf at Bondi Beach",
    "Drive Great Ocean Road",
    "Sunrise at Uluru",
    "Spot koalas in the wild",
    "Explore Melbourne's laneways",
    "Sail the Whitsundays",
    "Blue Mountains hiking",
    "Daintree Rainforest"
  ],
  
  tips: [
    "Book domestic flights in advance - Australia is huge, driving takes days",
    "East coast hostel circuit great for meeting travelers (Byron Bay, Cairns)",
    "Sun is intense - sunscreen and hat essential, even on cloudy days",
    "Great Barrier Reef: Port Douglas less touristy than Cairns",
    "Melbourne coffee culture is serious - best flat whites in the world",
    "Uluru: Stay 2 nights to see sunset and sunrise, both spectacular",
    "Drop bears and hoop snakes are jokes - don't worry about deadly animals",
    "Working holiday visa (under 30) - fund travels by working in Australia",
    "Avoid summer in Outback (Dec-Feb) - dangerously hot (110°F+)",
    "Groceries expensive - shop at Woolworths/Coles, cook in hostels"
  ]
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
  tags: ["Adventure", "Nature", "Hiking"],
  featured: true,
  
  subtitle: "Middle Earth - Mountains, Fjords & Adventure Capital",
  heroImage: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "December-February (Summer), March-May (Fall colors)",
    duration: "14-21 days recommended",
    budget: "$$ - Moderate to High",
    highlights: 48,
    language: "English",
    currency: "New Zealand Dollar (NZD)"
  },
  
  overview: "New Zealand is the adventure capital of the world - dramatic mountains, pristine lakes, geothermal wonders, fjords, glaciers, and endless outdoor activities. From Queenstown's adrenaline sports to Milford Sound's majesty, from Hobbiton to Abel Tasman beaches, from geysers to star-filled skies, New Zealand delivers jaw-dropping scenery at every turn. Perfect for hikers, thrill-seekers, and nature lovers seeking Middle Earth magic.",
  
  destinations: [
    {
      name: "Queenstown & South Island",
      description: "Adventure capital with bungy jumping, skiing, Milford Sound fjords, Lake Wanaka, stunning mountains, and adrenaline activities galore.",
      image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&h=600&fit=crop"
    },
    {
      name: "Fiordland & Milford Sound",
      description: "Dramatic fjords with waterfalls, rainforest, seals, and New Zealand's most spectacular scenery. Milford Track one of world's greatest walks.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop"
    },
    {
      name: "Rotorua & North Island",
      description: "Geothermal wonders with geysers, hot springs, mud pools, Maori culture, Hobbiton movie set, and volcanic landscape.",
      image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&h=600&fit=crop"
    },
    {
      name: "Abel Tasman & Golden Bay",
      description: "Coastal paradise with golden beaches, kayaking, hiking trails, turquoise waters, and relaxed beach camping.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Getting Around",
      description: "Rent car/campervan for flexibility. InterCity buses connect cities. Small country but winding roads take time. Ferry between North and South Islands ($60-80)."
    },
    {
      icon: Camera,
      title: "Great Walks",
      description: "Book Great Walks months ahead (Milford, Routeburn, Tongariro). Huts $65/night. Day hikes everywhere - free and spectacular. Prepare for all weather."
    },
    {
      icon: Users,
      title: "Adventure Activities",
      description: "Bungy jumping (birthplace!), skydiving, jet boating, canyon swinging, glacier hiking, skiing/snowboarding, white water rafting. Queenstown adventure central."
    },
    {
      icon: Utensils,
      title: "Kiwi Cuisine",
      description: "Lamb, meat pies, fish and chips, pavlova, hokey pokey ice cream. Great wine regions. Fresh seafood. Māori hangi. Flat whites and café culture."
    },
    {
      icon: DollarSign,
      title: "Budget Planning",
      description: "Moderate prices. Hostels $25-40. Hotels $80-150. Meals $15-30. Activities $100-300. Campervan saves money. Freedom camping popular. Budget $60-120/day."
    },
    {
      icon: Info,
      title: "Essential Planning",
      description: "Book Great Walks 6+ months ahead. Summer crowded. Shoulder seasons beautiful. North Island warmer. South Island more dramatic. Allow 3 weeks minimum."
    }
  ],
  
  highlights: [
    "Cruise Milford Sound",
    "Bungy jump in Queenstown",
    "Hike Tongariro Alpine Crossing",
    "Visit Hobbiton movie set",
    "Glacier hike on Franz Josef",
    "Kayak Abel Tasman",
    "Soak in Rotorua hot springs",
    "Experience Māori culture",
    "Ski Queenstown mountains",
    "Stargazing in dark sky reserve"
  ],
  
  tips: [
    "Book Great Walks (Milford, Routeburn) 6+ months ahead - sell out quickly",
    "Drive on left side - take it slow on winding roads, allow extra time",
    "Campervans save money but freedom camping sites filling up fast",
    "Queenstown expensive - stay in Wanaka instead (nearby, cheaper)",
    "Weather changes rapidly - pack layers even in summer",
    "Milford Sound best early morning before tour buses arrive",
    "Skip bungy if scared - canyon swing just as thrilling",
    "Buy groceries at New World/Countdown - eating out expensive",
    "Tongariro Crossing: Start early (6-7am), book shuttle ahead",
    "North Island 3-4 days minimum, South Island deserves 10+ days"
  ]
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
  tags: ["Beach", "Islands", "Relaxation"],
  featured: true,
  
  subtitle: "South Pacific Paradise - Beaches, Diving & Island Culture",
  heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "May-October (Dry season)",
    duration: "7-14 days recommended",
    budget: "$$ - Moderate to High",
    highlights: 30,
    language: "English, Fijian & Hindi",
    currency: "Fijian Dollar (FJD)"
  },
  
  overview: "Fiji epitomizes tropical paradise - 333 islands with pristine beaches, crystal-clear waters, vibrant coral reefs, and the warmest hospitality on Earth. From luxury resorts to budget backpacker islands, from world-class diving to traditional village stays, Fiji offers authentic South Pacific experiences. Relax on white sand beaches, snorkel with manta rays, explore remote islands, and embrace the infectious 'Bula!' spirit.",
  
  destinations: [
    {
      name: "Mamanuca Islands",
      description: "Most accessible islands near Nadi. Day trips available. Resorts for all budgets. Great snorkeling, diving, and island-hopping base.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
    },
    {
      name: "Yasawa Islands",
      description: "Remote island chain with budget beach bungalows, pristine beaches, manta rays, and laid-back backpacker vibe. Bure Kalou ferry connects islands.",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop"
    },
    {
      name: "Coral Coast (Viti Levu)",
      description: "Main island's southern coast with resorts, Sigatoka Sand Dunes, village visits, waterfalls, and easy access from Nadi.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
    },
    {
      name: "Taveuni & Northern Islands",
      description: "Garden Island with waterfalls, diving, Rainbow Reef, 180th meridian, and lush rainforest. Less touristy, more authentic.",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Getting Around",
      description: "Nadi International Airport main hub. Yasawa Flyer boat (island hopping pass). Domestic flights to outer islands. Water taxis between nearby islands."
    },
    {
      icon: Camera,
      title: "Best Activities",
      description: "Snorkeling/diving (soft coral capital), swimming with manta rays, village visits, beach time, sunset cruises, island hopping, traditional kava ceremonies."
    },
    {
      icon: Users,
      title: "Fijian Culture",
      description: "Warm 'Bula!' greeting everywhere. Kava ceremony important ritual. Village visits welcome but bring sevusevu (gift). Sunday is church day - respect quiet."
    },
    {
      icon: Utensils,
      title: "Food & Drink",
      description: "Fresh seafood, kokoda (Fijian ceviche), lovo (earth oven feast), curry influence. Resort food pricey. Island meal plans recommended. Fiji Bitter beer."
    },
    {
      icon: DollarSign,
      title: "Budget Options",
      description: "Yasawa backpacker islands affordable ($40-80/night with meals). Resorts expensive. Bring cash - ATMs limited on islands. Meal plans avoid price shocks."
    },
    {
      icon: Info,
      title: "Best for",
      description: "Honeymoons, diving, backpackers, families. Mix luxury resorts with budget islands. Avoid cyclone season (Nov-Apr). Dry season May-Oct best weather."
    }
  ],
  
  highlights: [
    "Swim with manta rays",
    "Snorkel pristine coral reefs",
    "Island hop through Yasawas",
    "Experience kava ceremony",
    "Relax on white sand beaches",
    "Dive Rainbow Reef",
    "Visit traditional villages",
    "Watch fire dancing",
    "Sunset beach BBQs",
    "Explore limestone caves"
  ],
  
  tips: [
    "Yasawa Flyer boat: Buy multi-day pass for flexibility island hopping",
    "Book island accommodation ahead - limited beds, especially budget options",
    "Bring reef-safe sunscreen - coral protection important",
    "Cash essential - most islands have no ATMs, limited card acceptance",
    "Visit villages with guide - bring sevusevu (kava root) as gift",
    "Sundays quiet - respect church day, many activities closed",
    "Meal plans at island resorts save money vs. ordering separately",
    "Snorkel gear often free at accommodations - bring your own fins",
    "Cyclone season Nov-Apr - avoid or get travel insurance",
    "Say 'Bula!' to everyone - infectious Fijian friendliness"
  ]
},
{
  id: "tahiti-french-polynesia",
  title: "Tahiti & French Polynesia",
  description: "Bora Bora, Moorea, and paradise islands",
  image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=400&h=250&fit=crop",
  continent: "Oceania",
  rating: 4.8,
  downloads: "5.1k",
  pages: 72,
  googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
  tags: ["Luxury", "Beach", "Islands"],
  featured: false,
  
  subtitle: "Ultimate Luxury Paradise & Overwater Bungalows",
  heroImage: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "May-October (Dry season)",
    duration: "7-10 days recommended",
    budget: "$$$$ - Very Expensive",
    highlights: 28,
    language: "French & Tahitian",
    currency: "CFP Franc (XPF)"
  },
  
  overview: "French Polynesia represents the pinnacle of tropical luxury - turquoise lagoons, iconic overwater bungalows, pristine coral reefs, and stunning mountain scenery. Bora Bora's legendary beauty, Moorea's dramatic peaks, Tahiti's Polynesian culture, and remote atolls create dream honeymoon destinations. While expensive, the otherworldly beauty, world-class diving, and pure romance make French Polynesia an unforgettable once-in-a-lifetime experience.",
  
  destinations: [
    {
      name: "Bora Bora",
      description: "Most famous island with iconic overwater bungalows, Mount Otemanu backdrop, crystal lagoon, luxury resorts, and ultimate romantic paradise.",
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&h=600&fit=crop"
    },
    {
      name: "Moorea",
      description: "Heart-shaped island near Tahiti. Dramatic mountain peaks, beautiful bays, more affordable than Bora Bora, excellent snorkeling, and laid-back vibe.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
    },
    {
      name: "Tahiti",
      description: "Main island with Papeete capital, black sand beaches, waterfalls, Polynesian culture, markets, and gateway to outer islands.",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop"
    },
    {
      name: "Rangiroa & Tuamotu Atolls",
      description: "World-class diving with sharks, dolphins, manta rays. Remote atolls, pristine nature, and incredible underwater visibility.",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Getting There",
      description: "Tahiti (Papeete) main hub. Air Tahiti Nui from LAX, Paris. Air Tahiti for inter-island flights (expensive). Ferry to Moorea affordable alternative."
    },
    {
      icon: Camera,
      title: "Overwater Bungalows",
      description: "Iconic but expensive ($500-2,000+/night). Bora Bora most famous. Moorea more affordable. Book directly with resorts. Honeymoon packages offer better value."
    },
    {
      icon: Users,
      title: "Best Experiences",
      description: "Overwater bungalow stay, lagoon snorkeling, shark/ray feeding, sunset cruises, hiking, black pearl shopping, Polynesian dance shows, outrigger canoeing."
    },
    {
      icon: Utensils,
      title: "Food & Dining",
      description: "French and Polynesian fusion. Fresh fish, poisson cru (raw fish), tropical fruits. Resort dining expensive. Roulottes (food trucks) in Papeete affordable."
    },
    {
      icon: DollarSign,
      title: "Budget Reality",
      description: "Very expensive destination. Budget $300-500/day minimum. Overwater bungalows $500-2,000+. Meals $20-50. Activities $100-200. Moorea more affordable than Bora Bora."
    },
    {
      icon: Info,
      title: "Money Saving Tips",
      description: "Stay Moorea instead of Bora Bora. Mix budget pensions with luxury. Grocery shop vs. dining out. Snorkel from beach vs. tours. Ferry vs. flights when possible."
    }
  ],
  
  highlights: [
    "Stay in overwater bungalow",
    "Snorkel in crystal lagoons",
    "Watch sharks and rays",
    "Hike Mount Rotui (Moorea)",
    "Sunset cruise around islands",
    "Shop for black pearls",
    "Experience Polynesian culture",
    "Dive with manta rays",
    "Kayak turquoise waters",
    "Beach picnics on motus"
  ],
  
  tips: [
    "Book 6-12 months ahead for best overwater bungalow rates",
    "Moorea offers similar beauty to Bora Bora at half the price",
    "Stay at pensions (guesthouses) to save money vs. luxury resorts",
    "Bring reef-safe sunscreen - protect the pristine coral reefs",
    "Ferry from Tahiti to Moorea ($15) much cheaper than flight ($90)",
    "Grocery shop and cook when possible - dining out extremely expensive",
    "Free snorkeling from many beaches - don't pay for expensive tours",
    "Visit during shoulder season (May or Oct) for better rates",
    "Some resorts offer complimentary activities - choose wisely",
    "Learn basic French phrases - English limited outside resorts"
  ]
},
{
  id: "samoa-islands",
  title: "Samoa Island Paradise",
  description: "Authentic Polynesia, beaches, and village life",
  image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
  continent: "Oceania",
  rating: 4.6,
  downloads: "2.8k",
  pages: 58,
  googleDriveUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
  tags: ["Culture", "Beach", "Budget"],
  featured: false,
  
  subtitle: "Authentic Polynesia - Beaches, Waterfalls & Fa'a Samoa",
  heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop",
  
  quickFacts: {
    bestTime: "May-October (Dry season)",
    duration: "7-10 days recommended",
    budget: "$ - Budget Friendly",
    highlights: 25,
    language: "Samoan & English",
    currency: "Samoan Tala (WST)"
  },
  
  overview: "Samoa offers authentic Polynesian culture without the luxury resort prices. Beautiful beaches, dramatic waterfalls, traditional village life, and genuine Samoan hospitality make this an ideal South Pacific destination for travelers seeking cultural immersion. Experience fa'a Samoa (the Samoan way), stay in beach fales, swim in To Sua Ocean Trench, and discover one of the Pacific's friendliest and most welcoming nations.",
  
  destinations: [
    {
      name: "Upolu Island",
      description: "Main island with capital Apia, To Sua Ocean Trench, waterfalls, beaches, markets, and Robert Louis Stevenson's estate.",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop"
    },
    {
      name: "Savai'i Island",
      description: "Larger, less developed island with lava fields, blowholes, traditional villages, and authentic Samoan lifestyle. Ferry from Upolu.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
    },
    {
      name: "South Coast Beaches",
      description: "Lalomanu Beach, Return to Paradise Beach. Beach fales (bungalows), snorkeling, swimming, and laid-back beach life.",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop"
    },
    {
      name: "Aleipata District",
      description: "To Sua Ocean Trench, pristine beaches, waterfalls, and beautiful coastal drives. Day trip or stay in beach fales.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
    }
  ],
  
  essentialInfo: [
    {
      icon: Plane,
      title: "Getting Around",
      description: "Faleolo Airport main entry. Rent car to explore (drive on right). Local buses cheap but infrequent. Ferry to Savai'i. Taxis available."
    },
    {
      icon: Camera,
      title: "Beach Fales",
      description: "Traditional open-air beach huts ($20-50/night). Basic but authentic. Beachfront location. Shared facilities. Meals often included. Bring mosquito net."
    },
    {
      icon: Users,
      title: "Fa'a Samoa Culture",
      description: "Strong traditional culture. Sunday sacred (church, no swimming). Dress modestly in villages. Respect chiefs. Learn about ava ceremony. Friendly people."
    },
    {
      icon: Utensils,
      title: "Samoan Food",
      description: "Oka (raw fish), palusami (taro leaves in coconut), umu (earth oven), tropical fruits. Sunday to'ona'i (feast) amazing. Fresh seafood everywhere."
    },
    {
      icon: DollarSign,
      title: "Budget Paradise",
      description: "Very affordable. Beach fales $20-50. Local meals $5-10. Rentals $50-70/day. Activities inexpensive. Budget $40-80/day easily. Much cheaper than French Polynesia."
    },
    {
      icon: Info,
      title: "Essential Tips",
      description: "Conservative dress in villages. Sunday everything closed. Bring cash - ATMs limited. Cyclone season Nov-Apr. Friendly locals love to chat."
    }
  ],
  
  highlights: [
    "Swim in To Sua Ocean Trench",
    "Stay in beach fale",
    "Visit Alofaaga Blowholes",
    "Snorkel pristine reefs",
    "Explore waterfalls",
    "Experience Sunday to'ona'i feast",
    "Ferry to Savai'i Island",
    "Lalomanu Beach relaxation",
    "Learn about Samoan culture",
    "Attend church service (Sunday)"
  ],
  
  tips: [
    "Sunday is sacred - beaches closed, shops closed, attend church service",
    "Beach fales are basic but authentic - bring mosquito net and flashlight",
    "Dress modestly in villages - knees and shoulders covered",
    "Rent car for flexibility - public buses infrequent and slow",
    "To Sua Ocean Trench busy midday - arrive early morning or late afternoon",
    "Bring cash - ATMs mainly in Apia, credit cards not widely accepted",
    "Learn 'Talofa' (hello) and 'Fa'afetai' (thank you) - locals appreciate it",
    "Visit Savai'i for more authentic, less touristy experience",
    "Beach fale meals often included in price - clarify when booking",
    "Respect local customs - ask before taking photos of people"
  ]
}
  ]
};

// Helper function to get a specific guide
export function getGuide(continent: string, guideId: string): Guide | null {
  const continentGuides = allGuidesData[continent];
  if (!continentGuides) return null;
  return continentGuides.find(g => g.id === guideId) || null;
}

// Helper function to get all guides for a continent
export function getContinentGuides(continent: string): Guide[] {
  return allGuidesData[continent] || [];
}

// Helper function to get all guides (for search/browse all)
export function getAllGuides(): Guide[] {
  return Object.values(allGuidesData).flat();
}