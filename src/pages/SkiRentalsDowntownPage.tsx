import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const BASE_URL = import.meta.env.BASE_URL;

const mountainPackages = [
  {
    name: "Sport Ski Package",
    price: "$49.99/Day",
    sizes: "130-170",
    description:
      "The Sport Ski Package is perfect for someone new to skiing or with only a few days on the mountain. A soft flex lets the edges engage easily to inspire confidence.",
    image: "sport-ski.png",
    link: "https://rentals.steamboatskiandbike.com/product/12",
  },
  {
    name: "Premium Ski Package",
    price: "$59.99/Day",
    sizes: "130-176",
    description:
      "Featuring brand-new skis this season: wider for deeper snow, quicker turns, and playful performance.",
    image: "premium-ski.png",
    link: "https://rentals.steamboatskiandbike.com/product/10",
  },
  {
    name: "Demo Ski Rental Package",
    price: "$69.99/Day",
    sizes: "148-184",
    description:
      "For skiers of all levels. Choose from a wide range of demo skis for hard-packed or powder conditions—our staff will pick the perfect model.",
    image: "demo-ski.png",
    link: "https://rentals.steamboatskiandbike.com/rent/mountain-location-only/demo-ski-package-mountain",
  },
  {
    name: "Kids Ski Package",
    price: "$31.99/Day",
    sizes: "67-151cm",
    description:
      "Great for first-timers or seasoned young skiers alike, with boots and poles sized just right.",
    image: "kids-ski.png",
    link: "https://rentals.steamboatskiandbike.com/product/13",
  },
  {
    name: "Snowboard Package",
    price: "$34.95/Day",
    sizes: "115-163cm",
    description: "Versatile snowboard for all conditions, with boots included.",
    image: "snowboard.png",
    link: "https://rentals.steamboatskiandbike.com/product/15",
  },
  {
    name: "Kids Snowboard Package",
    price: "$31.99/Day",
    sizes: "80-120cm",
    description:
      "Perfect for kids of all ages, with boots sized for young riders.",
    image: "kids-snowboard.png",
    link: "https://rentals.steamboatskiandbike.com/product/14",
  },
];

export default function SkiRentalsMountainPage() {
  return (
    <>
      <NavBar />

      <div className="container-custom py-16">
        <h1 className="text-3xl font-bold text-steamboat-darkBlue mb-8">
          Ski Rentals: On The Mountain
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mountainPackages.map((pkg, idx) => (
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
                <p className="italic text-sm mb-4">
                  Package includes free storage steps away from the base area
                </p>
                <a
                  href={pkg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-steamboat-blue text-white font-semibold rounded hover:bg-steamboat-lightBlue transition"
                >
                  Reserve Now
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-steamboat-darkBlue mb-4">
            Location Details
          </h2>
          <p>2250 Apres Ski Way<br />Steamboat Springs, CO 80487</p>
          <p>
            <a
              href="tel:9708796350"
              className="text-steamboat-blue hover:underline"
            >
              (970) 879-6350
            </a>
          </p>
          <p>
            <a
              href="https://maps.google.com/?q=2250+Apres+Ski+Way+Steamboat+Springs,+CO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steamboat-blue hover:underline"
            >
              Get Directions
            </a>
          </p>
          <ul className="mt-2 text-steamboat-gray">
            <li>Closed for summer season</li>
            <li>Reopening Nov 27, 2025</li>
          </ul>
        </section>
      </div>

      <Footer />
    </>
  );
}
