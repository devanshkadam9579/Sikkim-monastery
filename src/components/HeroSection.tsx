import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const images = [
  "https://www.esikkimtourism.in/wp-content/uploads/2018/10/climate-bnnr.jpg",
  "https://www.taleof2backpackers.com/wp-content/uploads/2018/07/Sikkim-insteas-of-Ladakh-10.jpg",
  "https://img.freepik.com/free-photo/natural-landscape_8327-92.jpg?semt=ais_incoming&w=740&q=80",
  "https://s7ap1.scene7.com/is/image/incredibleindia/lachung-monastery-1-state-hero?qlt=82&ts=1726655949596",
  "https://images.unsplash.com/photo-1724600457405-a7eeabcff6b5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2lra2ltJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D",
  "https://sikkimtourism.org/wp-content/uploads/2022/04/Gonjang-Monastery-700x500.jpg",
];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const scrollToVirtualTour = () => {
    const element = document.getElementById('virtual-tour');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="homepage-hero" className="relative w-full h-screen overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Sikkim monastery landscape ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-monastery-xl mb-8 text-white">
          Welcome to Sikkim Monastery Tours
        </h1>
        <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-white/90">
          Experience the spiritual journey through 360° views, 3D artifacts, and audio guides.
        </p>
        
        <Button 
          onClick={scrollToVirtualTour}
          className="btn-monastery text-xl px-12 py-6"
        >
          Start Your Journey
        </Button>
      </div>
    </section>
  );
};