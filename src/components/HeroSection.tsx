// src/components/HeroSection.tsx
import React from "react";
import { Link } from "react-router-dom";

export interface HeroAction {
  label: string;
  to: string;
  external?: boolean;
}

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  actions: HeroAction[];
}

const BASE = import.meta.env.BASE_URL || "/";

export default function HeroSection({
  backgroundImage,
  title,
  subtitle,
  actions,
}: HeroSectionProps) {
  const bgUrl = backgroundImage.startsWith("http")
    ? backgroundImage
    : `${BASE}${backgroundImage}`;

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${bgUrl}')` }}
    >
      <div className="hero-overlay" />

      <div className="container-custom relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mb-8 text-xl text-white/90 max-w-2xl">{subtitle}</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          {actions.map((a) =>
            a.external ? (
              <a
                key={a.label}
                href={a.to}
                className="px-6 py-3 bg-white text-steamboat-blue font-semibold rounded-lg shadow hover:bg-steamboat-blue hover:text-white transition-colors duration-300"
              >
                {a.label}
              </a>
            ) : (
              <Link
                key={a.label}
                to={a.to}
                className="px-6 py-3 bg-white text-steamboat-blue font-semibold rounded-lg shadow hover:bg-steamboat-blue hover:text-white transition-colors duration-300"
                onClick={() => window.scrollTo(0, 0)}
              >
                {a.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
