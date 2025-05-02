// src/pages/SkiRentalsPage.tsx
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function SkiRentalsPage() {
  return (
    <>
      <NavBar />

      <div className="container-custom py-16">
        <div className="flex items-center space-x-3 mb-8">
          <MapPin className="text-steamboat-blue" size={32} />
          <h1 className="section-title mb-0">Choose Your Rental Location</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Card className="border-2">
            <CardContent className="p-6 text-center">
              <h2 className="text-xl font-semibold text-steamboat-darkBlue mb-2">
                On The Mountain
              </h2>
              <p className="text-steamboat-gray mb-4">
                Enjoy Free Ski-Only Storage Next To The Ticket Office.
              </p>
              <Link
                to="/ski-rentals/mountain"
                className="inline-block px-6 py-3 bg-steamboat-blue text-white font-semibold rounded hover:bg-steamboat-lightBlue transition"
              >
                Rent Here
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6 text-center">
              <h2 className="text-xl font-semibold text-steamboat-darkBlue mb-2">
                Downtown
              </h2>
              <p className="text-steamboat-gray mb-4">
                A convenient place to rent if you’re staying near Downtown.
              </p>
              <Link
                to="/ski-rentals/downtown"
                className="inline-block px-6 py-3 bg-steamboat-blue text-white font-semibold rounded hover:bg-steamboat-lightBlue transition"
              >
                Rent Here
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </>
  );
}
