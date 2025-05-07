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
        <section className="relative w-full h-96 overflow-hidden">
          <img
            src={`${BASE_URL}images/winter-hero.jpg`}
            alt="Winter Adventures in Steamboat Springs"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl lg:text-5xl font-extrabold drop-shadow-lg">
              Your Steamboat Adventures Await
            </h1>
            <p className="mt-3 text-xl lg:text-2xl drop-shadow-md">
              Locally rooted and family-approved, we make ski days smoother with custom boot fitting, premium rentals, and overnight tunes—so your whole crew can hit the slopes happy, warm, and ready to shred.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                to="/ski-rentals"
                className="px-6 py-3 bg-steamboat-blue text-white font-semibold rounded shadow hover:bg-white hover:text-steamboat-blue transition"
              >
                Ski Rentals
              </Link>
              <Link
                to="/boot-fitting"
                className="px-6 py-3 bg-steamboat-blue text-white font-semibold rounded shadow hover:bg-white hover:text-steamboat-blue transition"
              >
                Boot Fitting
              </Link>
              <Link
                to="/ski-tuning"
                className="px-6 py-3 bg-steamboat-blue text-white font-semibold rounded shadow hover:bg-white hover:text-steamboat-blue transition"
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
                  src={`${BASE_URL}images/boot-fitting.jpg`}
                  alt="Boot Fitting"
                  className="object-cover object-center w-full h-48"
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
                  src={`${BASE_URL}images/ski-tuning.jpg`}
                  alt="Ski Tuning"
                  className="object-cover w-full h-48"
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
      <EventsSection />
      <TestimonialSection />
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </>
  );
};

export default Index;
