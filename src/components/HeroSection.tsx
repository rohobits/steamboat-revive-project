// src/components/HeroSection.tsx

import React from "react";
import Button from "@/components/Button";

export interface HeroAction {
  label: string;
  to: string;        // e.g. "#bike" or "/bike-service"
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
  const bgUrl =
    backgroundImage.startsWith("http")
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
          {actions.map((action) => {
            // In-page anchor -> scroll without navigation
            if (action.to.startsWith("#")) {
              const anchorId = action.to.slice(1);
              return (
                <Button
                  key={action.label}
                  onClick={() => {
                    document.getElementById(anchorId)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="primary"
                >
                  {action.label}
                </Button>
              );
            }

            // True external URLs
            if (action.external) {
              return (
                <Button
                  key={action.label}
                  href={action.to}
                  external
                  variant="primary"
                >
                  {action.label}
                </Button>
              );
            }

            // Internal React Router link
            return (
              <Button
                key={action.label}
                to={action.to}
                variant="primary"
                onClick={() => window.scrollTo(0, 0)}
              >
                {action.label}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
