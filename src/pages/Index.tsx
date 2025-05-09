// src/pages/Index.tsx

import React from 'react';
import { Link } from 'react-router-dom';

import HeroSection, { HeroAction } from '@/components/HeroSection';
import ServiceCard, { Service } from '@/components/ServiceCard';
import ServiceSection from '@/components/ServiceSection';
import EventsSection from '@/components/EventsSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';

// Vite injects this at build time (defaults to '/')
const BASE_URL = import.meta.env.BASE_URL || '/';

export default function Index() {
  // Determine season (April–August = summer)
  const month = new Date().getMonth();
  const params = new URLSearchParams(window.location.search);
  const seasonParam = params.get('season');
  const isSummer = seasonParam
    ? seasonParam === 'summer'
    : month >= 3 && month <= 7;

  // Hero actions
  const summerActions: HeroAction[] = [
    { label: 'Rent a Bike', to: '#bike', external: true },
    { label: 'Bike Service', to: '/bike-service' },
    { label: 'Shop', to: '/shop' },
  ];
  const winterActions: HeroAction[] = [
    { label: 'Ski Rentals', to: '/ski-rentals' },
    { label: 'Boot Fitting', to: '/boot-fitting' },
    { label: 'Ski Tuning', to: '/ski-tuning' },
  ];

  // Summer bike rentals
  const bikeServices = [
    {
      name: 'Cruiser E-Bike',
      description: "Finally, an e-bike for the rest of us—go faster, farther, and funner on Electra's Townie Go! 7D.",
      price: 'From $74',
      image: `${BASE_URL}images/cruiser.jpg`,
      link: 'https://rentals.steamboatskiandbike.com/rent/bike-rentals/cruiser-e-bike',
      callToAction: 'Rent Now',
    },
    // ...other bikeServices...
  ];

  // Winter services
  const winterServices: Service[] = [
    {
      name: 'Boot Fitting',
      description: 'Precision boot fitting tailored to your foot anatomy and skiing style.',
      image: `${BASE_URL}images/boot-fitting.png`,
      link: '/boot-fitting',
      callToAction: 'Learn More',
    },
    {
      name: 'Ski Tuning',
      description: 'Advanced tuning to keep your skis sharp, fast, and ready for the mountain.',
      image: `${BASE_URL}images/ski-tuning.png`,
      link: '/ski-tuning',
      callToAction: 'Learn More',
    },
  ];

  return (
    <>
      {isSummer ? (
        <>
          {/* Summer Hero */}
          <HeroSection
            backgroundImage="images/hero.jpg"
            title="Explore Steamboat Springs on Two Wheels"
            subtitle="Premium bike rentals and expert service to experience the best mountain biking in Colorado"
            actions={summerActions}
          />

          {/* Summer Bike Section */}
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
          {/* Winter Hero */}
          <HeroSection
            backgroundImage="images/winter-hero.jpg"
            title="Your Steamboat Adventures Await"
            subtitle="Locally rooted and family-approved, we make ski days smoother with premium ski rentals, custom boot fitting, and overnight tunes"
            actions={winterActions}
          />

          {/* Winter Services */}
          <section id="winter-services" className="py-20 bg-white">
            <div className="container-custom">
              <h2 className="section-title text-center">Winter Services</h2>
              <p className="section-subtitle text-center">
                Precision tuning and expert boot fitting for your best season yet.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                {winterServices.map((svc) => (
                  <ServiceCard key={svc.name} service={svc} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Only show Events in Summer */}
      {isSummer && <EventsSection />}

      {/* Testimonials & Contact */}
      <TestimonialSection />
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
