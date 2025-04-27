// src/components/Footer.tsx
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer className="bg-steamboat-darkBlue text-white">
      <div className="container-custom py-12">
        {/* Top: two columns */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* Left column: Logo + Quick Links */}
          <div>
            <img
              src={`${BASE_URL}images/logo.jpg.png`}
              alt="Steamboat Ski and Bike Kare"
              className="h-12 mb-4 object-contain"
            />
            <p className="text-gray-300 mb-6">
              Premium ski & bike rentals in Steamboat Springs. Top-quality equipment & expert service.
            </p>
            <h3 className="mb-2 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><a href="#ski" className="hover:text-white">Ski Rentals</a></li>
              <li><a href="#bike" className="hover:text-white">Bike Rentals</a></li>
              <li><Link to="/bike-service" className="hover:text-white">Bike Service</Link></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
            </ul>
          </div>

          {/* Right column: Location cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Downtown Card */}
            <div className="bg-gray-50 p-6 rounded-lg text-steamboat-darkBlue">
              <h4 className="mb-2 text-lg font-semibold">Downtown</h4>
              <a
                href="https://www.google.com/maps/place/Steamboat+Ski+%26+Bike+Kare/@40.4842758,-106.8360165,17z"
                target="_blank" rel="noopener noreferrer"
                className="block mb-2 hover:text-steamboat-blue"
              >
                442 Lincoln Ave<br/>
                Steamboat Springs, CO 80487
              </a>
              <p className="mb-4">
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:9708799144" className="hover:text-steamboat-blue">
                  (970) 879-9144
                </a>
              </p>
              <div className="text-sm space-y-1">
                <p className="font-medium">Winter Hours</p>
                <p>Mon–Sat | 8 am–6 pm</p>
                <p>Sun | 8 am–5 pm</p>
                <p className="mt-2 font-medium">Summer Hours</p>
                <p>Mon–Sat | 9 am–6 pm</p>
                <p>Sun | 9 am–5 pm</p>
              </div>
            </div>

            {/* Mountain Card */}
            <div className="bg-gray-50 p-6 rounded-lg text-steamboat-darkBlue">
              <h4 className="mb-2 text-lg font-semibold">Mountain</h4>
              <a
                href="https://www.google.com/maps/place/Steamboat+Ski+%26+Bike+Kare+-+Gondola+Square/@40.4565424,-106.804615,17z"
                target="_blank" rel="noopener noreferrer"
                className="block mb-2 hover:text-steamboat-blue"
              >
                2250 Apres Ski Way<br/>
                Steamboat Springs, CO 80487
              </a>
              <p className="mb-4">
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:9708796350" className="hover:text-steamboat-blue">
                  (970) 879-6350
                </a>
              </p>
              <div className="text-sm space-y-1">
                <p className="font-medium">Winter Hours</p>
                <p>Daily | 7:45 am–5 pm</p>
                <p className="mt-2 font-medium">Summer Hours</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} Steamboat Ski and Bike Kare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
