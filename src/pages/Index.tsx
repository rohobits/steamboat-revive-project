// src/pages/Index.tsx
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Vite will inject your base public path (e.g. "/steamboat-revive-project/")
const BASE_URL = import.meta.env.BASE_URL;

const Index = () => {
  const bikeServices = [
    {
      name: "Full Suspension Mountain Bike",
      description: "Advanced full-suspension bikes for technical terrain and trail riding.",
      price: "From $65/day",
      image: `${BASE_URL}images/full-suspension.jpg`,
    },
    {
      name: "Hardtail Mountain Bike",
      description: "Versatile hardtail bikes ideal for cross-country and trail riding.",
      price: "From $45/day",
      image: `${BASE_URL}images/hardtail.jpg`,
    },
    {
      name: "Electric Mountain Bike",
      description: "Pedal-assisted e-bikes for extended range and climbing capabilities.",
      price: "From $75/day",
      image: `${BASE_URL}images/electric.jpg`,
    },
    {
      name: "Road Bike",
      description: "Lightweight road bikes for pavement riding and exploring Steamboat's scenic roads.",
      price: "From $55/day",
      image: `${BASE_URL}images/road-bike.jpg`,
    },
    {
      name: "Cruiser Bike",
      description: "Comfortable cruiser bikes for casual riding around town and on bike paths.",
      price: "From $30/day",
      image: `${BASE_URL}images/cruiser.jpg`,
    },
    {
      name: "Kids Bike",
      description: "Quality bikes sized for young riders with options for various ages and abilities.",
      price: "From $25/day",
      image: `${BASE_URL}images/kids-bike.jpg`,
    },
  ];

  return (
    <>
      <NavBar />

      <HeroSection />

      {/* Bike Rentals Section */}
      <ServiceSection
        id="bike"
        title="Bike Rentals"
        subtitle="Explore Steamboat Springs on two wheels with our premium bikes"
        services={bikeServices}
        bgColor="bg-white"
      />

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Events Section */}
      <EventsSection />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </>
  );
};

export default Index;
