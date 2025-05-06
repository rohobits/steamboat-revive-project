// src/pages/BikeRentalsPage.tsx

import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const BASE_URL = import.meta.env.BASE_URL;

const bikePackages = [
  {
    name: "Cruiser E-Bike",
    price: "From $74",
    description: "Finally, an e-bike for the rest of us—go faster, farther, and funner on Electra's Townie Go! 7D.",
    image: "cruiser.jpg",
    link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/cruiser-e-bike",
  },
  {
    name: "Gravel Bike Rental",
    price: "From $49",
    description: "Explore on the Giant Revolt—they’ve got the gearing and durability you need on Steamboat’s roads.",
    image: "road-bike.jpg",
    link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/gravel-bike-rental",
  },
  {
    name: "Full Suspension",
    price: "From $64",
    description: "Dual-suspension comfort to climb, descend, and charge the whole mountain with confidence.",
    image: "full-suspension.jpg",
    link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/full-suspension",
  },
  {
    name: "Mountain E-Bike",
    price: "From $74",
    description: "Rail 5 trail tech + Bosch power—go further up and down the mountain.",
    image: "electric.jpg",
    link: "https://rentals.steamboatskiandbike.com/rent/bike-rentals/mountain-e-bike",
  },
  {
    name: "Hardtail Mountain Bike",
    price: "From $45/day",
    description: "Versatile hardtail bikes ideal for cross-country and trail riding.",
    image: "hardtail.jpg",
    callToAction: "First come, first serve only",
  },
  {
    name: "Kids Bike",
    price: "From $25/day",
    description: "Quality bikes sized for young riders with options for various ages and abilities.",
    image: "kids-bike.jpg",
    callToAction: "First come, first serve only",
  },
];

export default function BikeRentalsPage() {
  return (
    <>
      <NavBar />

      <div className="container-custom py-16">
        <h1 className="text-3xl font-bold text-steamboat-darkBlue mb-8">Bike Rentals</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {bikePackages.map((pkg, idx) => (
            <Card key={idx} className="border-2">
              <CardContent className="p-6">
                <img
                  src={`${BASE_URL}images/${pkg.image}`}
                  alt={pkg.name}
                  className="w-full h-48 object-contain rounded mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{pkg.name}</h2>
                <p className="text-steamboat-blue font-semibold mb-1">{pkg.price}</p>
                <p className="text-steamboat-gray mb-4">{pkg.description}</p>
                <div className="flex justify-end">
                  {pkg.link ? (
                    <a
                      href={pkg.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-steamboat-blue text-white font-semibold rounded hover:bg-steamboat-lightBlue transition"
                    >
                      Reserve Now
                    </a>
                  ) : (
                    <span className="px-4 py-2 bg-gray-400 text-white font-semibold rounded">
                      {pkg.callToAction}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
