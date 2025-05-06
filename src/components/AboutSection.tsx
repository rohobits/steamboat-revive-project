// src/components/AboutSection.tsx

import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container-custom flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={`${import.meta.env.BASE_URL}images/about-image.jpg`}
            alt="About Steamboat Ski & Bike Kare"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-steamboat-darkBlue mb-4">
            About Steamboat Ski & Bike Kare
          </h2>
          <p className="text-lg text-steamboat-gray">
            At Steamboat Ski & Bike Kare, we’re passionate about providing top-notch rentals, repairs, and customer service for every outdoor enthusiast. Located in the heart of Steamboat Springs, our experienced team ensures you have the best gear and expertise for an unforgettable adventure on two wheels or two planks. Whether you’re heading up the mountain for winter thrills or cruising town in the summer, we’ve got you covered.
          </p>
        </div>
      </div>
    </section>
  );
}
