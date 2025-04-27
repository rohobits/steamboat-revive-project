// src/components/HeroSection.tsx
import { Link } from "react-router-dom";

// Vite injects your base ("/steamboat-revive-project/") automatically
const BASE_URL = import.meta.env.BASE_URL;

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${BASE_URL}images/hero.jpg')` }}
    >
      {/* overlay gradient */}
      <div className="hero-overlay"></div>

      {/* content */}
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
