import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.BASE_URL;

export default function SkiRentalsPage() {
  return (
    <>
      <NavBar />

      {/* Choose Location Section */}
      <div className="container-custom py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-steamboat-darkBlue mb-16 text-center">
          Choose Your Rental Location
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-20 justify-items-center">
          {/* Mountain Link */}
          <div className="flex flex-col items-center">
            <Link
              to="/ski-rentals/mountain"
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden group shadow-lg"
            >
              <img
                src={`${BASE_URL}images/mountain.jpg`}
                alt="On The Mountain"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-3xl md:text-4xl font-semibold">
                  On The Mountain
                </span>
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
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden group shadow-lg"
            >
              <img
                src={`${BASE_URL}images/downtown.jpg`}
                alt="Downtown"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-3xl md:text-4xl font-semibold">
                  Downtown
                </span>
              </div>
            </Link>
            <p className="mt-6 text-center text-base md:text-lg text-steamboat-gray max-w-sm leading-relaxed">
              Rent near local shops and restaurants with easy access to lodging and après-ski fun.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
