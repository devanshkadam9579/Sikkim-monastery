import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, ExternalLink, Search } from "lucide-react";
import marketplaceHeaderImage from "@/assets/marketplace-header.jpg";
import prayerFlagsImage from "@/assets/prayer-flags.png";
import singingBowlImage from "@/assets/singing-bowl.png";
import thangkaPaintingImage from "@/assets/thangka-painting.png";
import yakWoolShawlImage from "@/assets/yak-wool-shawl.png";
import juniperIncenseImage from "@/assets/juniper-incense.png";
import malaBeadsImage from "@/assets/mala-beads.png";

export const MarketplaceSection = () => {
  const products = [
    {
      name: "Allied Sales TPF-1001 Tibetan Prayer Flag (10X8) INCH",
      price: "₹295",
      rating: 4.1,
      reviews: 32,
      description: "Authentic Tibetan prayer flags blessed by monastery lamas",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&q=80",
      seller: "ALLIED SALES INDIA",
      link: "https://www.amazon.in/ALLIED-SALES-TPF-1001-TIBETAN-PRAYER/dp/B0CPPZ9MSY"
    },
    {
      name: "WIGANO Sound Singing Bowl for stress relief Meditation",
      price: "₹1,495",
      rating: 4.3,
      reviews: 103,
      description: "Handcrafted bronze singing bowl for meditation and healing with striker stick",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&q=80",
      seller: "WIGANO",
      link: "https://www.amazon.in/WIGANO-Singing-Bowl-Meditation-striker/dp/B0C3HYF8FD"
    },
    {
      name: "Tamatina Thangka Canvas Painting | Tara Goddess",
      price: "₹3,499",
      rating: 5.0,
      reviews: 45,
      description: "Traditional Buddhist art depicting Buddha and celestial beings - Size 36X27 Inches",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&q=80",
      seller: "Tamatina",
      link: "https://www.amazon.in/Tamatina-Thangka-Canvas-Paintings/dp/B075FLJV9C"
    },
    {
      name: "Tibet Handloom Shawl luxurious Yak Wool",
      price: "₹899",
      rating: 4.7,
      reviews: 203,
      description: "Warm and soft yak wool shawl woven by local artisans - Handmade",
      image: "https://images.unsplash.com/photo-1591604129935-f4f4f8b3b8b3?w=400&h=300&fit=crop&q=80",
      seller: "Tibet Handloom",
      link: "https://www.amazon.in/Tibet-Handloom-Shawl-Handmade-Purssian/dp/B0CBC43H6T"
    },
    {
      name: "BAKA Juniper Incense Bundle, 4 Inch Bundles",
      price: "₹599",
      rating: 4.6,
      reviews: 167,
      description: "Sacred juniper incense used in monastery prayers - Package of 3",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop&q=80",
      seller: "SAGE & SANTO",
      link: "https://www.amazon.in/Juniper-Incense-Bundle-Bundles-Package/dp/B0DV93GX8K"
    },
    {
      name: "NIRVANA STONES Golden Pyrite Mala with Tassel",
      price: "₹1,299",
      rating: 4.8,
      reviews: 134,
      description: "Crystal Healing Beads Necklace | Jap Mala for Meditation/Protection & Reiki Energy",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&q=80",
      seller: "NIRVANA STONES",
      link: "https://www.amazon.in/NIRVANA-STONES-Necklace-Meditation-Protection/dp/B0FLDK5TYV"
    }
  ];

  const categories = [
    { name: "Handicrafts", icon: "🎨", count: 45 },
    { name: "Textiles", icon: "🧵", count: 32 },
    { name: "Spiritual Items", icon: "🕉️", count: 67 },
    { name: "Local Spices", icon: "🌶️", count: 28 },
    { name: "Jewelry", icon: "💍", count: 19 },
    { name: "Books", icon: "📚", count: 23 }
  ];

  return (
    <section id="marketplace" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Marketplace Header with Image */}
        <div className="relative mb-16 rounded-3xl overflow-hidden">
          <img 
            src={marketplaceHeaderImage} 
            alt="Colorful Tibetan Prayer Flags in the Sky"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-monastery-section mb-4">
                AUTHENTIC SIKKIM MARKETPLACE
              </h2>
              <p className="text-xl max-w-3xl mx-auto px-4">
                Discover authentic products crafted by local Sikkimese artisans - 
                from sacred artifacts to traditional handicrafts
              </p>
            </div>
          </div>
        </div>

        {/* Search and Categories */}
        <Card className="card-monastery mb-12">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                  <input 
                    type="text" 
                    placeholder="Search for handicrafts, prayer items, spices..." 
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <Button className="btn-monastery px-8">
                Search Products
              </Button>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6">
              {categories.map((category, index) => (
                <Button key={index} variant="outline" className="h-16 flex-col gap-1 text-xs rounded-xl">
                  <span className="text-xl">{category.icon}</span>
                  <span>{category.name}</span>
                  <span className="text-xs text-muted-foreground">({category.count})</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Featured Products */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Products</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="card-monastery hover-scale-102">
                <CardHeader>
                  <div className="text-center mb-4">
                    {typeof product.image === 'string' && product.image.startsWith('�') ? (
                      <div className="text-6xl mb-4">{product.image}</div>
                    ) : (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-32 object-contain mb-4 rounded-lg"
                      />
                    )}
                    <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="text-yellow-500 fill-current" size={16} />
                        <span className="font-semibold">{product.rating}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">({product.reviews} reviews)</span>
                    </div>
                    <p className="text-2xl font-bold text-primary">{product.price}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <p className="text-xs text-muted-foreground mb-4">Sold by: {product.seller}</p>
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 btn-monastery flex items-center gap-2 text-sm"
                      onClick={() => window.open(product.link, '_blank')}
                    >
                      <ShoppingCart size={16} />
                      Buy Now
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="px-3"
                      onClick={() => window.open(product.link, '_blank')}
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Seller Information */}
        <Card className="card-monastery">
          <CardHeader>
            <CardTitle className="text-center">Support Local Artisans</CardTitle>
            <p className="text-center text-muted-foreground">
              Every purchase directly supports Sikkimese families and preserves traditional crafts
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-4">🏠</div>
                <h4 className="font-semibold mb-2">Local Families</h4>
                <p className="text-sm text-muted-foreground">
                  Supporting 150+ artisan families across Sikkim
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="font-semibold mb-2">Traditional Crafts</h4>
                <p className="text-sm text-muted-foreground">
                  Preserving centuries-old craft techniques
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">✅</div>
                <h4 className="font-semibold mb-2">Authentic Quality</h4>
                <p className="text-sm text-muted-foreground">
                  Verified authentic products with quality guarantee
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button className="btn-prayer">
                Become a Seller
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};