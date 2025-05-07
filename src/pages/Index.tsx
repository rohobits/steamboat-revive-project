// src/pages/Index.tsx
import React from "react";
import { Link } from "react-router-dom";
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

const Index: React.FC = () => {
  // Season detection (April–Aug = summer), with URL override for preview
  const month = new Date().getMonth();
  const params = new URLSearchParams(window.location.search);
  const seasonParam = params.get('season');
  const isSummer = seasonParam ? seasonParam === 'summer' : month >= 3 && month <= 7;

  // Bike services for summer
  const bikeServices = [
    {
      name: "Full Suspension Mountain Bike",
      description: "Advanced full-suspension bikes for technical terrain and trail riding.",
      price: "From $65",
      image: `${BASE_URL}images/full-suspension.png`,
      link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/full-suspension",
    },
    {
      name: "Hardtail Mountain Bike",
      description: "Versatile hardtail bikes ideal for cross-country and trail riding.",
      price: "From $45",
      image: `${BASE_URL}images/hardtail.png`,
      callToAction: "First come, first serve only",
    },
    {
      name: "Electric Mountain Bike",
      description: "Pedal-assisted e-bikes for extended range and climbing capabilities.",
      price: "From $75",
      image: `${BASE_URL}images/electric.png`,
      link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/mountain-e-bike",
    },
    {
      name: "Road Bike",
      description: "Lightweight road bikes for pavement riding and exploring Steamboat's scenic roads.",
      price: "From $55",
      image: `${BASE_URL}images/road-bike.png`,
      link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/gravel-bike-rental",
    },
    {
      name: "Cruiser Bike",
      description: "Comfortable cruiser bikes for casual riding around town and on bike paths.",
      price: "From $30",
      image: `${BASE_URL}images/cruiser.png`,
      link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/cruiser-e-bike",
    },
    {
      name: "Kids Bike",
      description: "Quality bikes sized for young riders with options for various ages and abilities.",
      price: "From $25",
      image: `${BASE_URL}images/kids-bike.png`,
      callToAction: "First come, first serve only",
    },
  ];

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      {isSummer ? (
        <HeroSection />
      ) : (
        <section
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url('${BASE_URL}images/winter-hero.jpg')` }}
        >
          <div className="hero-overlay"></div>
          <div className="container-custom relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Your Steamboat Adventures Await
            </h1>
            <p className="mb-8 text-xl text-white/90 max-w-2xl">
              Locally rooted and family-approved, we make ski days smoother with premium ski rentals, custom boot fitting, and overnight tunes.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link to="/ski-rentals" className="btn-primary" onClick={() => window.scrollTo(0, 0)}>
                Ski Rentals
              </Link>
              <Link to="/boot-fitting" className="btn-secondary" onClick={() => window.scrollTo(0, 0)}>
                Boot Fitting
              </Link>
              <Link to="/ski-tuning" className="btn-secondary" onClick={() => window.scrollTo(0, 0)}>
                Ski Tuning
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Services Section: Bike rentals or Winter services */}
      {isSummer ? (
        <ServiceSection
          id="bike"
          title="Bike Rentals"
          subtitle="Explore Steamboat Springs on two wheels with our premium bikes"
          services={bikeServices}
          bgColor="bg-white"
        />
      ) : (
        <section id="winter-services" className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center">Winter Services</n            </h2>
            <p className="section-subtitle text-center">
              Precision tuning and expert boot fitting for your best season yet
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`${BASE_URL}images/boot-fitting.png`}
                  alt="Boot Fitting"
                  className="object-cover object-bottom w-full h-48"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Boot Fitting</h3>
                  <p className="text-steamboat-gray mb-4">
                    Custom boot fitting to maximize comfort and performance on the slopes.
                  </p>
                  <Link
                    to="/boot-fitting"
                    className="inline-block px-4 py-2 bg-steamboat-blue text-white font-semibold rounded hover:bg-steamboat-lightBlue transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`${BASE_URL}images/ski-tuning.png`}
                  alt="Ski Tuning"
                  className="object-cover object-bottom w-full h-48"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Ski Tuning</h3>
                  <p className="text-steamboat-gray mb-4">
                    Professional ski tuning to keep your gear responsive and smooth on any terrain.
                  </p>
                  <Link
                    to="/ski-tuning"
                    className="inline-block px-4 py-2 bg-steamboat-blue text-white font-semibold rounded hover:bg-steamboat-lightBlue transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Shared Sections */}
      <AboutSection />
      {isSummer && <EventsSection />}   {/* Only show events in summer */}
      <TestimonialSection />
      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </>
  );
};

export default Index;
