import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import { FestivalBooking } from "./FestivalBooking";

export const EventsSection = () => {
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const upcomingEvents = [
    {
      title: "Losar Festival 2024",
      date: "March 15-17, 2024",
      location: "Rumtek Monastery",
      time: "6:00 AM - 8:00 PM",
      description: "Celebrate Tibetan New Year with traditional ceremonies, mask dances, and prayer offerings.",
      price: "₹500",
      image: "🎭"
    },
    {
      title: "Buddha Purnima",
      date: "May 23, 2024", 
      location: "Enchey Monastery",
      time: "5:00 AM - 10:00 PM",
      description: "Sacred celebration of Buddha's birth, enlightenment, and death with special prayers.",
      price: "Free",
      image: "🪷"
    },
    {
      title: "Hemis Festival",
      date: "June 10-11, 2024",
      location: "Multiple Monasteries",
      time: "9:00 AM - 6:00 PM",
      description: "Traditional Cham dance performances and colorful monastery celebrations.",
      price: "₹750",
      image: "🎪"
    },
    {
      title: "Dashain Festival",
      date: "October 5-15, 2024",
      location: "Pemayangtse Monastery",
      time: "All Day",
      description: "Hindu-Buddhist festival celebrated with great fervor across Sikkim monasteries.",
      price: "₹300",
      image: "🎊"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-monastery-section text-primary mb-6">
            FESTIVAL CALENDAR & EVENTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join sacred celebrations and immerse yourself in the spiritual heritage 
            of Sikkim's monastery festivals
          </p>
        </div>

        {/* Google Calendar Embed */}
        <Card className="card-monastery mb-12">
          <CardHeader>
            <CardTitle className="text-center">Complete Festival Calendar</CardTitle>
            <p className="text-center text-muted-foreground">
              View all upcoming monastery events and festivals in Sikkim
            </p>
          </CardHeader>
          <CardContent>
            <div className="w-full h-96 rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=e10de0b996bf2704e4e0787018db3a0866c044ce0eaa7c7a12de81683636ec9a%40group.calendar.google.com&ctz=Asia%2FKolkata"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="Sikkim Monastery Events Calendar"
              />
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Upcoming Festivals</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="card-monastery hover-scale-102">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-4xl mb-4">{event.image}</div>
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          {event.time}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">{event.price}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 btn-monastery flex items-center gap-2"
                      onClick={() => {
                        setSelectedFestival(event);
                        setIsBookingOpen(true);
                      }}
                    >
                      <Ticket size={16} />
                      Book Ticket
                    </Button>
                    <Button variant="outline" className="px-4">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Categories */}
        <Card className="card-monastery">
          <CardHeader>
            <CardTitle className="text-center">Explore by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-2 rounded-xl">
                <span className="text-2xl">🎭</span>
                <span className="text-sm">Cultural Festivals</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 rounded-xl">
                <span className="text-2xl">🙏</span>
                <span className="text-sm">Religious Ceremonies</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 rounded-xl">
                <span className="text-2xl">🏔️</span>
                <span className="text-sm">Mountain Retreats</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 rounded-xl">
                <span className="text-2xl">📿</span>
                <span className="text-sm">Meditation Sessions</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Festival Booking Modal */}
      <FestivalBooking 
        festival={selectedFestival}
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setSelectedFestival(null);
        }}
      />
    </section>
  );
};