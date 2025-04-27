// src/components/Footer.tsx
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.BASE_URL;

const Footer = () => (
  <footer className="bg-steamboat-darkBlue text-white">
    <div className="container-custom py-12">
      {/* 4 columns: Logo, Quick Links, Downtown, Mountain */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        
        {/* Logo + Description */}
        <div>
          <img
            src={`${BASE_URL}images/logo.jpg.png`}
            alt="Steamboat Ski and Bike Kare"
            className="h-12 w-auto mb-4 object-contain"
          />
          <p className="text-gray-300">
            Premium ski and bike rentals in the heart of Steamboat Springs, Colorado. Experience top-quality equipment and expert service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
            <li><a href="#ski" className="text-gray-300 hover:text-white">Ski Rentals</a></li>
            <li><a href="#bike" className="text-gray-300 hover:text-white">Bike Rentals</a></li>
            <li><Link to="/bike-service" className="text-gray-300 hover:text-white">Bike Service</Link></li>
            <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
          </ul>
        </div>

        {/* Downtown */}
        <div>
          <h3 className="mb-2 text-lg font-semibold text-white">Downtown</h3>
          <a
            href="https://www.google.com/maps/place/Steamboat+Ski+%26+Bike+Kare/@40.4842758,-106.8360165,17z/data=!3m1!4b1!4m6!3m5!1s0x874268da15fbba5f:0x7a95cdcaa994ae5b!8m2!3d40.4842759!4d-106.8311456!16s%2Fg%2F1tff8264?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white block mb-2"
          >
            442 Lincoln Avenue<br/>
            Steamboat Springs, CO 80487
          </a>
          <p className="text-gray-300 mb-4">
            <span className="font-medium">Phone:</span>{' '}
            <a href="tel:9708799144" className="hover:text-white">(970) 879-9144</a>
          </p>
          <div className="text-gray-300">
            <p className="font-bold text-white">Winter Hours</p>
            <p>Mon–Sat | 8 am – 6 pm</p>
            <p>Sun | 8 am – 5 pm</p>
            <p className="mt-2 font-bold text-white">Summer Hours</p>
            <p>Mon–Sat | 9 am – 6 pm</p>
            <p>Sun | 9 am – 5 pm</p>
          </div>
        </div>

        {/* Mountain */}
        <div>
          <h3 className="mb-2 text-lg font-semibold text-white">Mountain</h3>
          <a
            href="https://www.google.com/maps/place/Steamboat+Ski+%26+Bike+Kare+-+Gondola+Square/@40.4565424,-106.804615,17z/data=!3m1!4b1!4m6!3m5!1s0x87426eba1111b891:0xf42b39da70b52b27!8m2!3d40.4565424!4d-106.804615!16s%2Fg%2F11g9vxtwmb?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white block mb-2"
          >
            2250 Apres Ski Way<br/>
            Steamboat Springs, CO 80487
          </a>
          <p className="text-gray-300 mb-4">
            <span className="font-medium">Phone:</span>{' '}
            <a href="tel:9708796350" className="hover:text-white">(970) 879-6350</a>
          </p>
          <div className="text-gray-300">
            <p className="font-bold text-white">Winter Hours</p>
            <p>Daily | 7:45 am – 5 pm</p>
            <p className="mt-2 font-bold text-white">Summer Hours</p>
            <p>Closed</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 mt-8 border-t border-gray-700">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Steamboat Ski and Bike Kare. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
