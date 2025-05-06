// src/components/Footer.tsx

import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-steamboat-darkBlue text-white py-8">
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/#bike" className="hover:underline">
                Bike Rentals
              </Link>
            </li>
            <li>
              <Link to="/bike-service" className="hover:underline">
                Bike Service
              </Link>
            </li>
            <li>
              <Link to="/boot-fitting" className="hover:underline">
                Boot Fitting
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/ski-rentals" className="hover:underline">
                Ski Rentals
              </Link>
            </li>
            <li>
              <Link to="/ski-tuning" className="hover:underline">
                Ski Tuning
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>

          <h5 className="font-semibold mb-2">Mountain Store</h5>
          <a
            href="https://maps.google.com/?q=2250+Apres+Ski+Way+Steamboat+Springs,+CO+80487"
            target="_blank"
            rel="noopener noreferrer"
            className="not-italic text-steamboat-gray hover:underline block"
          >
            2250 Apres Ski Way<br />
            Steamboat Springs, CO 80487
          </a>
          <p className="mt-1">
            <a href="tel:9708796350" className="hover:underline">
              (970) 879-6350
            </a>
          </p>

          <h5 className="font-semibold mt-4 mb-2">Downtown Store</h5>
          <a
            href="https://maps.google.com/?q=442+Lincoln+Ave+Steamboat+Springs,+CO+80487"
            target="_blank"
            rel="noopener noreferrer"
            className="not-italic text-steamboat-gray hover:underline block"
          >
            442 Lincoln Ave<br />
            Steamboat Springs, CO 80487
          </a>
          <p className="mt-1">
            <a href="tel:9708799144" className="hover:underline">
              (970) 879-9144
            </a>
          </p>

          <p className="mt-2">
            <a
              href="mailto:info@steamboatskiandbike.com"
              className="hover:underline"
            >
              info@steamboatskiandbike.com
            </a>
          </p>
        </div>

        {/* Hours & Social */}
        <div>
          <h4 className="font-semibold mb-4">Hours & Social</h4>
          <p className="mb-2 text-steamboat-gray">Mon–Sat: 9am – 6pm</p>
          <p className="mb-4 text-steamboat-gray">Sun: 9am – 5pm</p>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-steamboat-lightBlue"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-steamboat-lightBlue"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-steamboat-gray">
        © {new Date().getFullYear()} Steamboat Ski & Bike Kare. All rights reserved.
      </div>
    </footer>
  );
}
