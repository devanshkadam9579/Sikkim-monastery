import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Clock, Phone, Star, Wifi, Car, Plane, Hotel, Users, Calendar, Image as ImageIcon } from "lucide-react";

interface MonasteryData {
  name: string;
  description: string;
  history: string;
  significance: string;
  visitingHours: string;
  bestTimeToVisit: string;
  entryFee: string;
  location: {
    address: string;
    coordinates: { lat: number; lng: number };
  };
  images: string[];
  nearbyHotels: Array<{
    name: string;
    rating: number;
    price: string;
    distance: string;
    amenities: string[];
    phone: string;
    address: string;
  }>;
  travelAgencies: Array<{
    name: string;
    rating: number;
    services: string[];
    phone: string;
    address: string;
    website?: string;
  }>;
}

export const MonasteryDashboard = ({ monasteryKey, isOpen, onClose }: { monasteryKey: string; isOpen: boolean; onClose: () => void }) => {
  const [monasteryData, setMonasteryData] = useState<MonasteryData | null>(null);
  const [loading, setLoading] = useState(true);

  const monasteryInfo = {
    rumtek: {
      name: "Rumtek Monastery",
      description: "The seat of His Holiness the 17th Karmapa, Rumtek Monastery is one of the most important Buddhist monasteries in Sikkim, featuring stunning Tibetan architecture and spiritual significance.",
      history: "Founded in the 16th century by the 9th Karmapa, Wangchuk Dorje, Rumtek Monastery was rebuilt in the 1960s by the 16th Karmapa, Rangjung Rigpe Dorje, after fleeing Tibet. It serves as the main seat of the Karma Kagyu lineage.",
      significance: "Rumtek houses precious relics including the Black Crown of the Karmapa and features elaborate prayer halls with intricate murals, gilded stupas, and rows of prayer wheels. The monastery offers sweeping vistas of snow-capped peaks.",
      visitingHours: "6:00 AM - 6:00 PM (Daily)",
      bestTimeToVisit: "March to May, October to December",
      entryFee: "Free (Donations welcome)",
      location: {
        address: "Rumtek, Gangtok, Sikkim 737135",
        coordinates: { lat: 27.2885, lng: 88.5616 }
      },
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1591604129935-f4f4f8b3b8b3?w=800&h=600&fit=crop&q=80"
      ],
      nearbyHotels: [
        {
          name: "Hotel Mount View",
          rating: 4.2,
          price: "₹2,500-4,000",
          distance: "2.5 km",
          amenities: ["Free WiFi", "Restaurant", "Parking"],
          phone: "+91-3592-202345",
          address: "Gangtok, Sikkim"
        },
        {
          name: "The Elgin Mount Pandim",
          rating: 4.5,
          price: "₹8,000-12,000",
          distance: "3.2 km",
          amenities: ["Spa", "Restaurant", "Room Service", "WiFi"],
          phone: "+91-3592-202456",
          address: "Gangtok, Sikkim"
        },
        {
          name: "Hotel Tibet",
          rating: 3.8,
          price: "₹1,800-3,200",
          distance: "1.8 km",
          amenities: ["WiFi", "Restaurant", "Laundry"],
          phone: "+91-3592-202567",
          address: "Gangtok, Sikkim"
        }
      ],
      travelAgencies: [
        {
          name: "Sikkim Tourism Development Corporation",
          rating: 4.3,
          services: ["Monastery Tours", "Transportation", "Guide Services"],
          phone: "+91-3592-202678",
          address: "MG Marg, Gangtok",
          website: "www.sikkimtourism.gov.in"
        },
        {
          name: "Himalayan Adventure Tours",
          rating: 4.1,
          services: ["Custom Tours", "Group Packages", "Photography Tours"],
          phone: "+91-3592-202789",
          address: "Lal Bazaar, Gangtok"
        },
        {
          name: "Spiritual Journey Travels",
          rating: 4.4,
          services: ["Pilgrimage Tours", "Meditation Retreats", "Cultural Experiences"],
          phone: "+91-3592-202890",
          address: "Deorali, Gangtok"
        }
      ]
    },
    pemayangtse: {
      name: "Pemayangtse Monastery",
      description: "One of the oldest and most important monasteries in Sikkim, belonging to the Nyingma sect of Tibetan Buddhism, featuring stunning architecture and spiritual significance.",
      history: "Founded in 1705 by Lhatsun Chenpo, Pemayangtse Monastery is the seat of the Nyingma sect and houses the famous Zangdok Palri temple. The monastery is known for its intricate murals and traditional Tibetan architecture.",
      significance: "The monastery contains a seven-tiered wooden model of the heavenly palace of Guru Rinpoche, considered a masterpiece of Sikkimese art. It features elaborate prayer halls with vibrant murals depicting Buddhist deities and tantric images.",
      visitingHours: "6:00 AM - 6:00 PM (Daily)",
      bestTimeToVisit: "March to May, September to November",
      entryFee: "₹20 per person",
      location: {
        address: "Pemayangtse, Pelling, Sikkim 737113",
        coordinates: { lat: 27.3052, lng: 88.2516 }
      },
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1591604129935-f4f4f8b3b8b3?w=800&h=600&fit=crop&q=80"
      ],
      nearbyHotels: [
        {
          name: "Hotel Mount Pandim",
          rating: 4.0,
          price: "₹3,000-5,500",
          distance: "1.2 km",
          amenities: ["Mountain View", "Restaurant", "WiFi"],
          phone: "+91-3595-202345",
          address: "Pelling, Sikkim"
        },
        {
          name: "The Elgin Mount Pandim",
          rating: 4.6,
          price: "₹7,500-11,000",
          distance: "2.1 km",
          amenities: ["Spa", "Restaurant", "Room Service"],
          phone: "+91-3595-202456",
          address: "Pelling, Sikkim"
        }
      ],
      travelAgencies: [
        {
          name: "Pelling Tourism Services",
          rating: 4.2,
          services: ["Monastery Tours", "Trekking", "Transportation"],
          phone: "+91-3595-202567",
          address: "Pelling, Sikkim"
        }
      ]
    },
    tashiding: {
      name: "Tashiding Monastery",
      description: "Sacred Buddhist monastery with spiritual significance, known for its peaceful atmosphere and beautiful location.",
      history: "Founded in the 17th century, Tashiding Monastery is one of the most sacred monasteries in Sikkim, built on a hilltop with panoramic views.",
      significance: "The monastery is famous for its annual Bumchu ceremony and houses sacred relics including a self-manifested stupa.",
      visitingHours: "6:00 AM - 6:00 PM (Daily)",
      bestTimeToVisit: "March to May, October to December",
      entryFee: "Free (Donations welcome)",
      location: {
        address: "Tashiding, Yuksom, Sikkim 737113",
        coordinates: { lat: 27.3089, lng: 88.2979 }
      },
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1591604129935-f4f4f8b3b8b3?w=800&h=600&fit=crop&q=80"
      ],
      nearbyHotels: [
        {
          name: "Yuksom Residency",
          rating: 4.1,
          price: "₹2,000-3,500",
          distance: "3.5 km",
          amenities: ["Mountain View", "Restaurant", "WiFi"],
          phone: "+91-3595-202123",
          address: "Yuksom, Sikkim"
        }
      ],
      travelAgencies: [
        {
          name: "Yuksom Tourism Services",
          rating: 4.0,
          services: ["Monastery Tours", "Trekking", "Transportation"],
          phone: "+91-3595-202234",
          address: "Yuksom, Sikkim"
        }
      ]
    },
    enchey: {
      name: "Enchey Monastery",
      description: "Perched on a hill above Gangtok, Enchey Monastery (meaning 'Solitary Temple') dates from the 1840s and is one of the oldest monasteries in Sikkim, featuring stunning Chinese-style pagoda architecture.",
      history: "Founded in the 1840s and rebuilt around 1909 in a Chinese-style pagoda form, Enchey Monastery belongs to the Nyingma sect. It has 90 resident monks and is famous for its annual masked 'Chaam' dance festival held in January.",
      significance: "The monastery's prayer hall is a riot of color with vibrant murals covering the walls depicting deities and tantric images of the four guardian kings. The golden roof gleams beautifully over Gangtok's valley, especially during early morning sunlight.",
      visitingHours: "6:00 AM - 6:00 PM (Daily)",
      bestTimeToVisit: "March to May, October to December (Visit during January for Chaam dance festival)",
      entryFee: "Free (Donations welcome)",
      location: {
        address: "Enchey, Gangtok, Sikkim 737101",
        coordinates: { lat: 27.3359, lng: 88.6192 }
      },
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1591604129935-f4f4f8b3b8b3?w=800&h=600&fit=crop&q=80"
      ],
      nearbyHotels: [
        {
          name: "Hotel Tibet",
          rating: 3.8,
          price: "₹1,800-3,200",
          distance: "1.2 km",
          amenities: ["WiFi", "Restaurant", "Laundry"],
          phone: "+91-3592-202567",
          address: "Gangtok, Sikkim"
        }
      ],
      travelAgencies: [
        {
          name: "Gangtok Tourism Services",
          rating: 4.2,
          services: ["City Tours", "Monastery Visits", "Transportation"],
          phone: "+91-3592-202345",
          address: "MG Marg, Gangtok"
        }
      ]
    },
    ralang: {
      name: "Ralang Monastery",
      description: "Historic monastery with beautiful architecture, known for its intricate murals and peaceful surroundings.",
      history: "Founded in the 18th century, Ralang Monastery is one of the most beautiful monasteries in Sikkim with stunning architecture and artwork.",
      significance: "The monastery is famous for its beautiful murals depicting Buddhist teachings and houses important religious texts and artifacts.",
      visitingHours: "6:00 AM - 6:00 PM (Daily)",
      bestTimeToVisit: "March to May, October to December",
      entryFee: "Free (Donations welcome)",
      location: {
        address: "Ralang, Ravangla, Sikkim 737139",
        coordinates: { lat: 27.3285, lng: 88.3352 }
      },
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1591604129935-f4f4f8b3b8b3?w=800&h=600&fit=crop&q=80"
      ],
      nearbyHotels: [
        {
          name: "Ravangla Residency",
          rating: 3.9,
          price: "₹2,200-4,000",
          distance: "2.8 km",
          amenities: ["Mountain View", "Restaurant", "WiFi"],
          phone: "+91-3595-202456",
          address: "Ravangla, Sikkim"
        }
      ],
      travelAgencies: [
        {
          name: "Ravangla Tourism Services",
          rating: 4.1,
          services: ["Monastery Tours", "Nature Walks", "Transportation"],
          phone: "+91-3595-202567",
          address: "Ravangla, Sikkim"
        }
      ]
    },
    dubdi: {
      name: "Dubdi Monastery",
      description: "Sikkim's oldest monastery, founded in 1701 by the saint Lhatsun Namkha Jigme. This two-story Tibetan Buddhist temple perches at about 2,100m above Yuksom, surrounded by rhododendron forests.",
      history: "Dubdi (meaning 'Hermit's Cell') is Sikkim's oldest monastery, founded in 1701 by the saint Lhatsun Namkha Jigme. It is tied to the coronation of Sikkim's first Chogyal (king) and represents the beginning of Buddhist tradition in Sikkim.",
      significance: "The prayer hall is elaborately decorated with walls painted with mandalas and murals, and a gilded stupa sits on the roof. The trek to Dubdi itself is a highlight, winding through verdant hills and offering views of Mt. Kangchenjunga on clear days.",
      visitingHours: "6:00 AM - 6:00 PM (Daily)",
      bestTimeToVisit: "March to May, October to December",
      entryFee: "Free (Donations welcome)",
      location: {
        address: "Dubdi, Yuksom, Sikkim 737113",
        coordinates: { lat: 27.3089, lng: 88.2979 }
      },
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1591604129935-f4f4f8b3b8b3?w=800&h=600&fit=crop&q=80"
      ],
      nearbyHotels: [
        {
          name: "Yuksom Residency",
          rating: 4.1,
          price: "₹2,000-3,500",
          distance: "3.5 km",
          amenities: ["Mountain View", "Restaurant", "WiFi"],
          phone: "+91-3595-202123",
          address: "Yuksom, Sikkim"
        }
      ],
      travelAgencies: [
        {
          name: "Yuksom Tourism Services",
          rating: 4.0,
          services: ["Monastery Tours", "Trekking", "Transportation"],
          phone: "+91-3595-202234",
          address: "Yuksom, Sikkim"
        }
      ]
    },
    tsuklakhang: {
      name: "Tsuklakhang Palace",
      description: "In Gangtok's center stands the Tsuklakhang Palace (Royal Chapel and Monastery), established around 1898 as the main temple of the Sikkimese monarchy, featuring stunning royal architecture.",
      history: "Established around 1898 as the main temple of the Sikkimese monarchy, Tsuklakhang Palace often called the Royal Chapel, this four-story, white-washed Tibetan Buddhist temple once hosted coronations and royal ceremonies.",
      significance: "The ornate assembly hall (dukhang) holds large altars with statues of Buddha, Bodhisattvas and tantric deities, and a vast library of Buddhist scriptures. The walls and ceilings are decorated in traditional Tibetan style with vivid murals painted by artists sent from Lhasa.",
      visitingHours: "6:00 AM - 6:00 PM (Daily)",
      bestTimeToVisit: "March to May, October to December (Visit during festivals like Losar and Pang Lhabsol)",
      entryFee: "Free (Donations welcome)",
      location: {
        address: "Tsuklakhang Palace, Gangtok, Sikkim 737101",
        coordinates: { lat: 27.3389, lng: 88.6065 }
      },
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1591604129935-f4f4f8b3b8b3?w=800&h=600&fit=crop&q=80"
      ],
      nearbyHotels: [
        {
          name: "Hotel Tibet",
          rating: 3.8,
          price: "₹1,800-3,200",
          distance: "0.5 km",
          amenities: ["WiFi", "Restaurant", "Laundry"],
          phone: "+91-3592-202567",
          address: "Gangtok, Sikkim"
        }
      ],
      travelAgencies: [
        {
          name: "Gangtok Tourism Services",
          rating: 4.2,
          services: ["City Tours", "Monastery Visits", "Transportation"],
          phone: "+91-3592-202345",
          address: "MG Marg, Gangtok"
        }
      ]
    }
  };

  useEffect(() => {
    if (isOpen && monasteryKey) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        const data = monasteryInfo[monasteryKey as keyof typeof monasteryInfo];
        if (data) {
          setMonasteryData(data);
        }
        setLoading(false);
      }, 500);
    }
  }, [isOpen, monasteryKey]);

  if (!isOpen || !monasteryData) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-[98vw] h-[95vh] p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-2xl text-primary flex items-center gap-2">
            <MapPin size={24} />
            {monasteryData.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="px-6 pb-6 h-full overflow-y-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="hotels">Hotels</TabsTrigger>
              <TabsTrigger value="travel">Travel</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar size={20} />
                        Essential Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span className="font-medium">Visiting Hours:</span>
                        <span>{monasteryData.visitingHours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="font-medium">Best Time:</span>
                        <span>{monasteryData.bestTimeToVisit}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span className="font-medium">Entry Fee:</span>
                        <span>{monasteryData.entryFee}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin size={16} className="mt-1" />
                        <div>
                          <span className="font-medium">Address:</span>
                          <p className="text-sm text-muted-foreground">{monasteryData.location.address}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>History & Significance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">History</h4>
                        <p className="text-muted-foreground">{monasteryData.history}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Spiritual Significance</h4>
                        <p className="text-muted-foreground">{monasteryData.significance}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Location Map</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="w-full h-80 rounded-lg overflow-hidden">
                        <iframe
                          src={`https://maps.google.com/maps?q=${monasteryData.location.coordinates.lat},${monasteryData.location.coordinates.lng}&hl=en&z=15&output=embed`}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {monasteryData.images.map((image, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={image}
                        alt={`${monasteryData.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hotels" className="space-y-6">
              <div className="grid gap-4">
                {monasteryData.nearbyHotels.map((hotel, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <Hotel size={20} />
                            {hotel.name}
                          </CardTitle>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-1">
                              <Star size={16} className="text-yellow-500" />
                              <span className="text-sm">{hotel.rating}</span>
                            </div>
                            <Badge variant="secondary">{hotel.price}</Badge>
                            <Badge variant="outline">{hotel.distance} away</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span className="text-sm text-muted-foreground">{hotel.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={16} />
                          <span className="text-sm text-muted-foreground">{hotel.phone}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {hotel.amenities.map((amenity, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="travel" className="space-y-6">
              <div className="grid gap-4">
                {monasteryData.travelAgencies.map((agency, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <Car size={20} />
                            {agency.name}
                          </CardTitle>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-1">
                              <Star size={16} className="text-yellow-500" />
                              <span className="text-sm">{agency.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span className="text-sm text-muted-foreground">{agency.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={16} />
                          <span className="text-sm text-muted-foreground">{agency.phone}</span>
                        </div>
                        {agency.website && (
                          <div className="flex items-center gap-2">
                            <Wifi size={16} />
                            <a href={`https://${agency.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                              {agency.website}
                            </a>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {agency.services.map((service, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};
