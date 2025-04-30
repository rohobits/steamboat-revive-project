import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Users, MapPin, Settings, Layers, Droplet, Compass } from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Steamboat+Ski+%26+Bike+Kare/@40.4842758,-106.8360165,17z/data=!3m1!4b1!4m6!3m5!1s0x874268da15fbba5f:0x7a95cdcaa994ae5b!8m2!3d40.4842759!4d-106.8311456!16s%2Fg%2F1tff8264?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D";

export default function SkiTuningPage() {
  return (
    <>
      <NavBar />

      <div className="pt-20 bg-white">
        {/* Hero Section (full width) */}
        <section className="relative w-full h-96 overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={`${BASE_URL}videos/ski-tune-loop.mp4`}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-4xl lg:text-5xl font-extrabold drop-shadow-lg">Premium Ski Tuning in Steamboat Springs</h2>
            <p className="mt-3 text-xl lg:text-2xl drop-shadow-md">A custom tune for any condition that comes your way</p>
          </div>
        </section>

        <div className="container-custom py-16">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="section-title text-steamboat-darkBlue">Premium Ski Tuning</h1>
          </div>

          {/* Expert Technicians */}
          <section className="bg-gray-50 rounded-lg p-8 mb-12">
            <div className="flex items-start space-x-4">
              <Users className="text-steamboat-blue" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-steamboat-darkBlue mb-3">Expert Ski Technicians</h3>
                <p className="text-lg text-steamboat-gray">
                  Our experienced technicians use top-tier equipment and proven techniques to deliver precise ski tuning that boosts performance and longevity, ensuring smooth, controlled turns on every run.
                </p>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-start space-x-3">
                <Settings className="text-steamboat-blue" size={32} />
                <div>
                  <h4 className="text-lg font-semibold text-steamboat-darkBlue">Custom Edge Bevels</h4>
                  <p className="text-steamboat-gray">Tailored bevel angles for precise control.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Layers className="text-steamboat-blue" size={32} />
                <div>
                  <h4 className="text-lg font-semibold text-steamboat-darkBlue">Pro-Grade Base Structure</h4>
                  <p className="text-steamboat-gray">Engineered patterning for superior snow release.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Droplet className="text-steamboat-blue" size={32} />
                <div>
                  <h4 className="text-lg font-semibold text-steamboat-darkBlue">Hot-Wax Finish</h4>
                  <p className="text-steamboat-gray">Premium wax for maximum glide efficiency.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Compass className="text-steamboat-blue" size={32} />
                <div>
                  <h4 className="text-lg font-semibold text-steamboat-darkBlue">Precision Tuning</h4>
                  <p className="text-steamboat-gray">Adapted to any condition Steamboat throws at you.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Phantom Glide Banner */}
          <section className="my-12 flex flex-col lg:flex-row items-center bg-black text-white rounded-lg overflow-hidden">
            <div className="w-full lg:w-2/3 p-6">
              <h3 className="text-2xl lg:text-3xl font-extrabold uppercase mb-4 text-steamboat-red">Ask About Adding a Phantom Glide To Your Next Ski Tune</h3>
              <p className="mb-4 text-base">
                PHANTOM Glide™ is the only permanent base treatment, offering unmatched glide performance and durability. Pair it with any premium ski tuning for the ultimate ride.
              </p>
            </div>
            <div className="w-full lg:w-1/3">
              <img
                src={`${BASE_URL}images/phantom-glide.png`}
                alt="PHANTOM Glide Single Application Kit"
                className="w-full h-full object-contain"
              />
            </div>
          </section>

          {/* Call to Action Buttons */}
          <section className="mb-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:9708799144"
              className="px-6 py-3 bg-steamboat-blue text-white font-semibold rounded shadow border border-steamboat-blue transition hover:bg-white hover:text-steamboat-blue"
            >
              Call Us With Questions
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-steamboat-blue text-steamboat-blue font-semibold rounded shadow hover:bg-steamboat-blue hover:text-white transition"
            >
              Bring Your Skis In Today
            </a>
          </section>

          {/* Contact Info */}
          <section className="mt-12 bg-gray-50 border border-steamboat-blue/20 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <MapPin className="text-steamboat-blue" size={28} />
              <div>
                <p className="font-medium text-steamboat-darkBlue">
                  Have a question? Stop by 442 Lincoln Avenue in Steamboat Springs or <a href="tel:9708799144" className="text-steamboat-blue underline">call us</a>.
                </p>
                <p className="text-steamboat-gray mt-2">Walk-ins are always welcome.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
