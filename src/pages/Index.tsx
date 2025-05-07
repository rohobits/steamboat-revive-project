// src/pages/Index.tsx
import React from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

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
      price: "From $65/day",
      image: `${BASE_URL}images/full-suspension.jpg`,
      link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/full-suspension",
    },
    // ... other bike services, each with link property
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
              <Link
                to="/ski-rentals"
                className="px-6 py-3 bg-white text-steamboat-blue font-semibold rounded shadow hover:bg-steamboat-blue hover:text-white transition"
                onClick={() => window.scrollTo(0, 0)}
              >
                Ski Rentals
              </Link>
              <Link
                to="/boot-fitting"
                className="px-6 py-3 bg-white text-steamboat-blue font-semibold rounded shadow hover:bg-steamboat-blue hover:text-white transition"
                onClick={() => window.scrollTo(0, 0)}
              >
                Boot Fitting
              </Link>
              <Link
                to="/ski-tuning"
                className="px-6 py-3 bg-white text-steamboat-blue font-semibold rounded shadow hover:bg-steamboat-blue hover:text-white transition"
                onClick={() => window.scrollTo(0, 0)}
              >
                Ski Tuning
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Services Section: Bike rentals in summer, Winter services in winter */}
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
            <h2 className="section-title text-center">Winter Services</h2>
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
                    Professional ski tuning for edge precision and optimal glide.
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
      {/* Only show events on summer */}
      {isSummer && <EventsSection />}
      <TestimonialSection />
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </>
  );
};

export default Index;
