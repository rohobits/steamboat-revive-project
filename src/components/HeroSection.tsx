// src/components/HeroSection.tsx
import { Link } from "react-router-dom";

// Vite injects this at build-time
const BASE_URL = import.meta.env.BASE_URL;

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Responsive hero image: small, medium, large */}
      <picture>
        {/* Desktop (≥1024px): 1440px wide, retina-ready 2880px */}
        <source
          media="(min-width: 1024px)"
          srcSet={`
            ${BASE_URL}images/hero-large.jpg 1x,
            ${BASE_URL}images/hero-large@2x.jpg 2x
          `}
        />
        {/* Tablet (≥640px): 768px wide, retina-ready 1536px */}
        <source
          media="(min-width: 640px)"
          srcSet={`
            ${BASE_URL}images/hero-medium.jpg 1x,
            ${BASE_URL}images/hero-medium@2x.jpg 2x
          `}
        />
        {/* Mobile fallback: 480px wide */}
        <img
          src={`${BASE_URL}images/hero-small.jpg`}
          alt="Mountain landscape in Steamboat Springs"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </picture>

      {/* Overlay and content */}
      <div className="hero-overlay"></div>
      <div className="container-custom relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Explore Steamboat Springs on Two Wheels
        </h1>
        <p className="mb-8 text-xl text-white/90 max-w-2xl">
          Premium bike rentals and expert service to experience the best mountain
          biking in Colorado
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a
            href="#bike"
            className="btn-primary"
            onClick={() => window.scrollTo(0, 0)}
          >
            Rent a Bike
          </a>
          <Link
            to="/bike-service"
            className="btn-secondary"
            onClick={() => window.scrollTo(0, 0)}
          >
            Bike Service
          </Link>
        </div>
      </div>
    </section>
  );
}
