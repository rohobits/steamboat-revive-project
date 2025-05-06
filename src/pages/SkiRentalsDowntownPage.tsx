import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const BASE_URL = import.meta.env.BASE_URL;

const downtownPackages = [
  {
    name: "Sport Ski Package",
    price: "$29.99/Day",
    sizes: "130-170",
    description:
      "Perfect for beginner to intermediate skiers: soft flex for smooth, confidence-building turns.",
    image: "downtown-sport-ski.png",
    link: "https://rentals.steamboatskiandbike.com/product/7",
  },
  {
    name: "A/T Ski Package",
    price: "$62.99/Day",
    sizes: "140-185",
    description:
      "Our newest backcountry package: includes adjustable poles, premium A/T boots, skins, and top touring skis.",
    image: "at-ski.png",
    callToAction: "Call For Availability",
  },
  {
    name: "Kids Ski Package",
    price: "$24.99/Day",
    sizes: "67-151cm",
    description:
      "Great for young skiers: sized boots and poles for ages 3–12.",
    image: "downtown-kids.png",
    link: "https://rentals.steamboatskiandbike.com/product/11",
  },
  {
    name: "Snowboard Package",
    price: "$29.99/Day",
    sizes: "115-163cm",
    description: "Versatile snowboard for all conditions, with boots included.",
    image: "downtown-snowboard.png",
    link: "https://rentals.steamboatskiandbike.com/product/8",
  },
  {
    name: "Kids Snowboard Package",
    price: "$24.99/Day",
    sizes: "80-120cm",
    description:
      "Perfect for kids: boots sized for young riders, versatile board for all ages.",
    image: "kids-snowboard.png",
    link: "https://rentals.steamboatskiandbike.com/product/9",
  },
];

export default function SkiRentalsDowntownPage() {
  return (
    <>
      <NavBar />

      <div className="container-custom py-16">
        <h1 className="text-3xl font-bold text-steamboat-darkBlue mb-8">
          Ski Rentals: Downtown
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {downtownPackages.map((pkg, idx) => (
            <Card key={idx} className="border-2">
              <CardContent className="p-6">
                {/* Package image placeholder */}
                <img
                  src={`${BASE_URL}images/${pkg.image}`}
                  alt={pkg.name}
                  className="w-full h-64 object-contain rounded mb-4"
                />

                <h2 className="text-xl font-semibold mb-2">{pkg.name}</h2>
                <p className="text-steamboat-blue font-semibold mb-1">{pkg.price}</p>
                <p className="text-steamboat-gray mb-4">Sizes: {pkg.sizes}</p>
                <p className="text-steamboat-gray mb-4">{pkg.description}</p>

                {pkg.link ? (
                  <a
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-steamboat-blue text-white font-semibold rounded hover:bg-steamboat-lightBlue transition"
                  >
                    Reserve Now
                  </a>
                ) : (
                  <button
                    className="inline-block px-4 py-2 bg-steamboat-blue text-white font-semibold rounded hover:bg-steamboat-lightBlue transition"
                  >
                    {pkg.callToAction}
                  </button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-steamboat-darkBlue mb-4">
            Location Details
          </h2>
          <p>
            442 Lincoln Ave<br />Steamboat Springs, CO 80487
          </p>
          <p>
            <a href="tel:9708799144" className="text-steamboat-blue hover:underline">
              (970) 879-9144
            </a>
          </p>
          <p>
            <a
              href="https://maps.google.com/?q=442+Lincoln+Ave+Steamboat+Springs,+CO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steamboat-blue hover:underline"
            >
              Get Directions
            </a>
          </p>
          <ul className="mt-2 text-steamboat-gray">
            <li>Mon–Sat: 10am – 6pm</li>
            <li>Sun: 10am – 5pm</li>
          </ul>
        </section>
      </div>

      <Footer />
    </>
  );
}
