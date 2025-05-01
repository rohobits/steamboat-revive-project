import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Users, MapPin, Settings, Layers, Droplet, Compass, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BASE_URL = import.meta.env.BASE_URL;
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Steamboat+Ski+%26+Bike+Kare/@40.4842758,-106.8360165,17z/data=!3m1!4b1!4m6!3m5!1s0x874268da15fbba5f:0x7a95cdcaa994ae5b!8m2!3d40.4842759!4d-106.8311456!16s%2Fg%2F1tff8264?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D";

const reviews = [
  {
    text: "My skis have never glided smoother thanks to their edge bevels and hot-wax finish!",
    author: "Emma L.",
    rating: 5,
  },
  {
    text: "Professional tuning service! The precision tuning made my downhill experience unbeatable.",
    author: "David W.",
    rating: 5,
  },
  {
    text: "Adding Phantom Glide took my skis to the next level. Outstanding durability and glide.",
    author: "Sophia R.",
    rating: 5,
  },
];

export default function SkiTuningPage() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="relative w-full h-96 overflow-hidden pt-20">
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
          <h2 className="text-4xl lg:text-5xl font-extrabold drop-shadow-lg">
            Premium Ski Tuning in Steamboat Springs
          </h2>
          <p className="mt-3 text-xl lg:text-2xl drop-shadow-md">
            A custom tune for any condition that comes your way
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-16">
        {/* Title */}
        <h1 className="section-title text-steamboat-darkBlue mb-8">
          Premium Ski Tuning
        </h1>

        {/* Expert Technicians */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex items-start space-x-4">
            <Users className="text-steamboat-blue" size={32} />
            <div>
              <h3 className="text-2xl font-bold text-steamboat-darkBlue mb-3">
                Expert Ski Technicians
              </h3>
              <p className="text-lg text-steamboat-gray">
                Our experienced technicians use top-tier equipment and proven techniques to deliver precise ski tuning that boosts performance and longevity.
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
                <h4 className="text-lg font-semibold text-steamboat-darkBlue">
                  Custom Edge Bevels
                </h4>
                <p className="text-steamboat-gray">
                  Tailored bevel angles for precise control.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Layers className="text-steamboat-blue" size={32} />
              <div>
                <h4 className="text-lg font-semibold text-steamboat-darkBlue">
                  Pro-Grade Base Structure
                </h4>
                <p className="text-steamboat-gray">
                  Engineered patterning for superior snow release.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Droplet className="text-steamboat-blue" size={32} />
              <div>
                <h4 className="text-lg font-semibold text-steamboat-darkBlue">
                  Hot-Wax Finish
                </h4>
                <p className="text-steamboat-gray">
                  Premium wax for maximum glide efficiency.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Compass className="text-steamboat-blue" size={32} />
              <div>
                <h4 className="text-lg font-semibold text-steamboat-darkBlue">
                  Precision Tuning
                </h4>
                <p className="text-steamboat-gray">
                  Adapted to any condition Steamboat throws at you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mt-16">
          <div className="flex items-center space-x-4 mb-8">
            <Star className="text-steamboat-blue" size={32} />
            <h2 className="text-2xl font-bold text-steamboat-darkBlue">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="border-2">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-steamboat-orange" size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-steamboat-gray mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-steamboat-darkBlue">- {review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Phantom Glide Banner (full width) */}
      <section className="w-full bg-black text-white flex flex-col lg:flex-row overflow-hidden my-12">
        <div className="lg:w-3/4 p-6 flex items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-extrabold uppercase mb-4 text-steamboat-red">
              Ask About Adding a Phantom Glide To Your Next Ski Tune
            </h3>
            <p className="text-base text-white">
              PHANTOM Glide™ is the only permanent base treatment, offering unmatched glide performance and durability.
            </p>
          </div>
        </div>
        <div className="lg:w-1/4 flex items-center">
          <img
            src={`${BASE_URL}images/phantom-glide.png`}
            alt="PHANTOM Glide Single Application Kit"
            className="w-full object-contain"
          />
        </div>
      </section>

      {/* Contact Info */}
      <div className="container-custom py-16">
        <section className="mt-12 bg-gray-50 border border-steamboat-blue/20 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <MapPin className="text-steamboat-blue" size={28} />
            <div>
              <p className="font-medium text-steamboat-darkBlue">
                Have a question? Stop by 442 Lincoln Avenue in Steamboat Springs or <a href="tel:9708799144" className="text-steamboat-blue underline">call us</a>.
              </p>
              <p className="text-steamboat-gray mt-2">
                Walk-ins are always welcome.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
