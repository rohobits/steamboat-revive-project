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
        <h1 className="text-3xl font-bold text-steamboat-darkBlue mb-12 text-center">
          Choose Your Rental Location
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {/* Mountain Link */}
          <Link
            to="/ski-rentals/mountain"
            className="relative w-56 h-56 rounded-full overflow-hidden group"
          >
            <img
              src={`${BASE_URL}images/mountain.jpg`}
              alt="On The Mountain"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">
                On The Mountain
              </span>
            </div>
          </Link>

          {/* Downtown Link */}
          <Link
            to="/ski-rentals/downtown"
            className="relative w-56 h-56 rounded-full overflow-hidden group"
          >
            <img
              src={`${BASE_URL}images/downtown.jpg`}
              alt="Downtown"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">
                Downtown
              </span>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
