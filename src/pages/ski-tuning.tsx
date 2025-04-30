// TODO: Update src/components/NavBar.tsx to include a "Ski Tuning" link after "Bike Service" and before "About".

import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function SkiTuningPage() {
  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden rounded-lg">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/videos/ski-tune-loop.m4v"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl font-bold">Premium Ski Tuning in Steamboat Springs</h1>
            <p className="mt-2 text-xl">Guaranteed Overnight Service</p>
          </div>
        </section>

        {/* Free Overnight Banner */}
        <section className="my-8 bg-blue-600 text-white text-center py-4 rounded">
          <h2 className="text-2xl font-semibold">Free Overnight Ski Tuning</h2>
        </section>

        {/* Benefits Section */}
        <section className="my-8">
          <p className="mb-4 text-gray-700 leading-relaxed">
            Our experienced technicians deliver precision tuning that enhances ski performance and durability. Utilizing top-tier equipment and proven techniques, we ensure your skis have custom edge bevels, a pro-grade base structure, and a hot-wax finish, providing smooth, controlled turns and superior glide in all conditions.
          </p>
          <ul className="grid grid-cols-2 gap-4 list-disc list-inside text-gray-700">
            <li>Custom edge bevels</li>
            <li>Pro-grade base structure</li>
            <li>Hot-wax finish</li>
            <li>Precision tuning for all conditions</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="my-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="tel:9708799144"
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded shadow hover:bg-red-700 transition"
          >
            Call Us With Questions
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-gray-800 text-gray-800 font-semibold rounded shadow hover:bg-gray-100 transition"
          >
            Bring Your Skis In Today
          </a>
        </section>

        <p className="text-center text-gray-600">Walk-ins are always welcome.</p>
      </main>
      <Footer />
    </>
  );
}
