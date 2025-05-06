// src/components/Footer.tsx

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-steamboat-darkBlue text-white py-8">
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/#bike" className="hover:underline">Bike Rentals</Link></li>
            <li><Link to="/ski-rentals" className="hover:underline">Ski Rentals</Link></li>
            <li><Link to="/bike-service" className="hover:underline">Bike Service</Link></li>
            <li><Link to="/boot-fitting" className="hover:underline">Boot Fitting</Link></li>
            <li><Link to="/ski-tuning" className="hover:underline">Ski Tuning</Link></li>
            <li><Link to="/shop" className="hover:underline">Shop</Link></li>
            <li><Link to="/events" className="hover:underline">Events</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <p>Steamboat Ski & Bike Kare</p>
          <p>2250 Apres Ski Way</p>
          <p>Steamboat Springs, CO 80487</p>
          <p className="mt-2">
            <a href="tel:9708799144" className="hover:underline">(970) 879-9144</a>
          </p>
          <p>
            <a href="mailto:info@steamboatskiandbike.com" className="hover:underline">
              info@steamboatskiandbike.com
            </a>
          </p>
        </div>

        {/* Hours & Social */}
        <div>
          <h4 className="font-semibold mb-4">Hours & Social</h4>
          <p className="mb-2">Mon–Sat: 10am – 6pm</p>
          <p className="mb-4">Sun: 10am – 5pm</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-steamboat-lightBlue">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22,12A10,10,0,1,0,10.09,21.93V14.89H7.07V12H10.09V9.41c0-3.03,1.79-4.7,4.54-4.7a18.5,18.5,0,0,1,2.69.24v2.95H15.58c-1.49,0-1.94.92-1.94,1.86V12h3.3l-.53,2.89H13.64v7.05A10,10,0,0,0,22,12Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-steamboat-lightBlue">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2.16c3.2,0,3.584.012,4.85.07,1.17.054,1.8.24,2.223.402a4.6,4.6,0,0,1,1.675,1.09,4.6,4.6,0,0,1,1.09,1.675c.162.423.348,1.053.402,2.223.058,1.266.07,1.65.07,4.85s-.012,3.584-.07,4.85c-.054,1.17-.24,1.8-.402,2.223a4.6,4.6,0,0,1-1.09,1.675,4.6,4.6,0,0,1-1.675,1.09c-.423.162-1.053.348-2.223.402-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.8-.24-2.223-.402a4.6,4.6,0,0,1-1.675-1.09,4.6,4.6,0,0,1-1.09-1.675c-.162-.423-.348-1.053-.402-2.223C2.172,15.584,2.16,15.2,2.16,12s.012-3.584.07-4.85c.054-1.17.24-1.8.402-2.223a4.6,4.6,0,0,1,1.09-1.675A4.6,4.6,0,0,1,5.397,2.632c.423-.162,1.053-.348,2.223-.402,1.266-.058,1.65-.07,4.85-.07M12,0C8.741,0,8.332.014,7.052.072,5.771.13,4.946.308,4.145.608A6.6,6.6,0,0,0,1.608,1.608,6.608,6.608,0,0,0,.608,4.145C.308,4.946.13,5.771.072,7.052.014,8.332,0,8.741,0,12s.014,3.668.072,4.948c.058,1.281.236,2.106.536,2.907a6.608,6.608,0,0,0,1,1.498,6.608,6.608,0,0,0,1.498,1C4.946,23.692,5.771,23.87,7.052,23.928,8.332,23.986,8.741,24,12,24s3.668-.014,4.948-.072c1.281-.058,2.106-.236,2.907-.536a6.6,6.6,0,0,0,1.498-1,6.6,6.6,0,0,0,1-1.498c.3-.801.478-1.626.536-2.907C23.986,15.668,24,15.259,24,12s-.014-3.668-.072-4.948c-.058-1.281-.236-2.106-.536-2.907a6.6,6.6,0,0,0-1-1.498,6.6,6.6,0,0,0-1.498-1C19.054.308,18.229.13,16.948.072,15.668.014,15.259,0,12,0Z" />
                <circle cx="12" cy="12" r="3.2" />
              </svg>
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
