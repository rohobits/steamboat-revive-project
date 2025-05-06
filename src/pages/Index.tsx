import React from "react";
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
      name: "Cruiser E-Bike",
      description:
        "Finally, an e-bike for the rest of us—go faster, farther, and funner on Electra's Townie Go! 7D.",
      price: "From $74/3 Hours",
      image: `${BASE_URL}images/cruiser.jpg`,
      link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/cruiser-e-bike",
    },
    {
      name: "Gravel Bike Rental",
      description:
        "Explore on the Giant Revolt—they’ve got the gearing and durability you need on Steamboat’s roads.",
      price: "From $49/3 Hours",
      image: `${BASE_URL}images/road-bike.jpg`,
      link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/gravel-bike-rental",
    },
    {
      name: "Full Suspension",
      description:
        "Dual-suspension comfort to climb, descend, and charge the whole mountain with confidence.",
      price: "From $64/3 Hours",
      image: `${BASE_URL}images/full-suspension.jpg`,
      link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/full-suspension",
    },
    {
      name: "Mountain E-Bike",
      description:
        "Rail 5 trail tech + Bosch power—go further up and down the mountain.",
      price: "From $74/3 Hours",
      image: `${BASE_URL}images/electric.jpg`,
      link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/mountain-e-bike",
    },
    {
      name: "Hardtail Mountain Bike",
      description:
        "Versatile hardtail bikes ideal for cross-country and trail riding.",
      price: "From $45/day",
      image: `${BASE_URL}images/hardtail.jpg`,
      callToAction: "First come, first serve only",
    },
    {
      name: "Kids Bike",
      description:
        "Quality bikes sized for young riders with options for various ages and abilities.",
      price: "From $25/day",
      image: `${BASE_URL}images/kids-bike.jpg`,
      callToAction: "First come, first serve only",
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
