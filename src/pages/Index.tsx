// src/pages/Index.tsx

import React from "react";
import { Link } from "react-router-dom";

import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import EventsSection from "@/components/EventsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";

// Vite injects this at build time
const BASE_URL = import.meta.env.BASE_URL || "/";

export default function Index() {
  const month = new Date().getMonth();
  const params = new URLSearchParams(window.location.search);
  const seasonParam = params.get("season");
  const isSummer = seasonParam ? seasonParam === "summer" : month >= 3 && month <= 7;

  const bikeServices = [
    {
      name: "Cruiser E-Bike",
      description: "Finally, an e-bike for the rest of us—go faster, farther, and funner on Electra's Townie Go! 7D.",
      price: "From $74",
      image: `${BASE_URL}images/cruiser.jpg`,
      link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/cruiser-e-bike",
      callToAction: "Rent Now",
    },
    {
      name: "Gravel Bike Rental",
      description: "Explore on the Giant Revolt—they’ve got the gearing and durability you need on Steamboat’s roads.",
      price: "From $49",
      image: `${BASE_URL}images/road-bike.jpg`,
      link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/gravel-bike-rental",
      callToAction: "Rent Now",
    },
    {
      name: "Full Suspension",
      description: "Dual-suspension comfort to climb, descend, and charge the whole mountain with confidence.",
      price: "From $64",
      image: `${BASE_URL}images/full-suspension.jpg`,
      link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/full-suspension",
      callToAction: "Rent Now",
    },
    {
      name: "Mountain E-Bike",
      description: "Rail 5 trail tech + Bosch power—go further up and down the mountain.",
      price: "From $74",
      image: `${BASE_URL}images/electric.jpg`,
      link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/mountain-e-bike",
      callToAction: "Rent Now",
    },
    {
      name: "Hardtail Mountain Bike",
      description: "Versatile hardtail bikes ideal for cross-country and trail riding.",
      price: "From $45",
      image: `${BASE_URL}images/hardtail.jpg`,
      callToAction: "First come, first serve only",
    },
    {
      name: "Kids Bike",
      description: "Quality bikes sized for young riders with options for various ages and abilities.",
      price: "From $25",
      image: `${BASE_URL}images/kids-bike.jpg`,
      callToAction: "First come, first serve only",
    },
  ];

  const winterServices = [
    {
      name: "Boot Fitting",
      description: "Precision boot fitting tailored to your foot anatomy and skiing style.",
      image: `${BASE_URL}images/boot-fitting.png`,
      link: "/boot-fitting",
      callToAction: "Learn More",
    },
    {
      name: "Ski Tuning",
      description: "Advanced tuning to keep your skis sharp, fast, and ready for the mountain.",
      image: `${BASE_URL}images/ski-tuning.png`,
      link: "/ski-tuning",
      callToAction: "Learn More",
    },
  ];

  return (
    <>
      {isSummer ? (
        <>
          <HeroSection />
          <ServiceSection
            id="bike"
            title="Bike Rentals"
            subtitle="Explore Steamboat Springs on two wheels with premium rentals"
            services={bikeServices}
            bgColor="bg-white"
          />
        </>
      ) : (
        <>
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
                Locally rooted and family-approved, we make ski days smoother with premium ski rentals, custom boot fitting, and overnight tunes
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link to="/ski-rentals" className="btn-primary">Ski Rentals</Link>
                <Link to="/boot-fitting" className="btn-primary">Boot Fitting</Link>
                <Link to="/ski-tuning" className="btn-primary">Ski Tuning</Link>
              </div>
            </div>
          </section>

          <section id="winter-services" className="py-20 bg-white">
            <div className="container-custom">
              <h2 className="section-title text-center">Winter Services</h2>
              <p className="section-subtitle text-center">Precision tuning and expert boot fitting for your best season yet.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                {winterServices.map((svc) => (
                  <div key={svc.name} className="overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="h-56 overflow-hidden">
                      <img src={svc.image} alt={svc.name} className="object-cover w-full h-full object-center" />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-xl font-semibold text-steamboat-darkBlue">{svc.name}</h3>
                      <p className="mb-4 text-steamboat-gray">{svc.description}</p>
                      <div className="flex justify-center">
                        <Link to={svc.link} className="btn-secondary">{svc.callToAction}</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {isSummer && <EventsSection />}

      <TestimonialSection />

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
