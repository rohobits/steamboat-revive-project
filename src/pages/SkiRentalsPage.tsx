import React from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;

export default function SkiRentalsPage() {
  return (
    <>
      <NavBar />

      {/* SVG Wave Divider */}
      <div className="-mt-1 overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            d="M0,64L48,101.3C96,139,192,213,288,202.7C384,192,480,96,576,80C672,64,768,128,864,149.3C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Choose Location Section with intro and background gradient */}
      <div className="bg-gradient-to-b from-steamboat-blue/20 to-transparent">
        <div className="container-custom py-20">
          {/* Intro Tagline */}
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl text-steamboat-gray max-w-2xl mx-auto">
              Find the perfect setup for your day on the slopes&nbsp;— drop in at the mountain or explore downtown.
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-steamboat-darkBlue mb-16 text-center">
            Choose Your Rental Location
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 justify-items-center">
            {/* Mountain Link */}
            <div className="flex flex-col items-center">
              <Link
                to="/ski-rentals/mountain"
                className="relative w-96 h-96 rounded-full overflow-hidden group shadow-lg transition-shadow duration-300 hover:shadow-2xl"
              >
                <img
                  src={`${BASE_URL}images/mountain.jpg`}
                  alt="On The Mountain"
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay Container */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  {/* Title hidden on hover */}
                  <span className="text-white text-4xl font-semibold transition-opacity duration-300 group-hover:opacity-0">
                    On The Mountain
                  </span>
                  {/* Secondary Button appears on hover */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <button className="bg-white text-steamboat-blue px-4 py-2 rounded-md shadow-lg">
                      See Package Options
                    </button>
                  </motion.div>
                </div>
              </Link>
              <p className="mt-6 text-center text-base md:text-lg text-steamboat-gray max-w-sm leading-relaxed">
                Enjoy free ski storage steps from the ticket office for ultimate convenience.
              </p>
            </div>

            {/* Downtown Link */}
            <div className="flex flex-col items-center">
              <Link
                to="/ski-rentals/downtown"
                className="relative w-96 h-96 rounded-full overflow-hidden group shadow-lg transition-shadow duration-300 hover:shadow-2xl"
              >
                <img
                  src={`${BASE_URL}images/downtown.jpg`}
                  alt="Downtown"
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay Container */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  {/* Title hidden on hover */}
                  <span className="text-white text-4xl font-semibold transition-opacity duration-300 group-hover:opacity-0">
                    Downtown
                  </span>
                  {/* Secondary Button appears on hover */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <button className="bg-white text-steamboat-blue px-4 py-2 rounded-md shadow-lg">
                      See Package Options
                    </button>
                  </motion.div>
                </div>
              </Link>
              <p className="mt-6 text-center text-base md:text-lg text-steamboat-gray max-w-sm leading-relaxed">
                Rent near local shops and restaurants with easy access to lodging and après-ski fun.
              </p>
            </div>
          </div>

          {/* Testimonial Trust Cue */}
          <section className="mt-20 text-center">
            <p className="italic text-steamboat-gray max-w-md mx-auto leading-relaxed">
              “Ski & Bike Kare truly elevates the rental experience—seamless service every time.”
            </p>
            <div className="flex justify-center mt-4 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-steamboat-orange" size={20} fill="currentColor" />
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
