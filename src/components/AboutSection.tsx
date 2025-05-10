// src/components/AboutSection.tsx
import React from "react";
// Vite injects this at build time
const BASE_URL = import.meta.env.BASE_URL;

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Text column */}
          <div className="flex flex-col justify-center">
            <h2 className="section-title">About Steamboat Ski &amp; Bike Kare</h2>
            <p className="mb-6 text-lg text-steamboat-gray">
              For over 20 years, Steamboat Ski &amp; Bike Kare has been the premier
              destination for outdoor adventure equipment in Steamboat Springs,
              Colorado. Our mission is to provide top-quality rental
              equipment and exceptional service to help you experience the
              natural beauty of the Yampa Valley.
            </p>
            <p className="mb-6 text-lg text-steamboat-gray">
              Whether you're carving down the legendary champagne powder of
              Steamboat Ski Resort or exploring the extensive trail systems of
              Buffalo Pass on a mountain bike, our expertly maintained
              equipment and knowledgeable staff will ensure you have the best
              possible experience.
            </p>
            <p className="text-lg text-steamboat-gray">
              We're locally owned and operated, and we take pride in being an
              integral part of the Steamboat Springs community. Our team
              consists of passionate outdoor enthusiasts who love sharing their
              knowledge and expertise with visitors to our beautiful mountain
              town.
            </p>
          </div>

          {/* Image column */}
          <div className="order-first lg:order-last">
            <div className="relative h-64 md:h-full w-full overflow-hidden">
              <img
                src={`${BASE_URL}images/about-image.webp`}
                alt="Mountain landscape in Steamboat Springs"
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 right-0 z-10 p-6 -mb-6 -mr-6 bg-white rounded-lg shadow-xl md:max-w-xs">
                <h3 className="mb-2 text-xl font-semibold text-steamboat-blue">
                  Local Expertise
                </h3>
                <p className="text-steamboat-gray">
                  Our staff are all experienced local riders and skiers who know
                  the terrain and can help you find the perfect equipment and
                  routes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
