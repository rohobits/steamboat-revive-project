// src/components/Footer.tsx
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.BASE_URL;

const Footer = () => {
  return (
    <footer className="bg-steamboat-darkBlue text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo + Description */}
          <div>
            <div className="mb-4">
              <img
                src={`${BASE_URL}images/logo.jpg.png`}
                alt="Steamboat Ski and Bike Kare"
                className="h-12 w-auto object-contain"
              />
              <span className="sr-only">Steamboat Ski and Bike Kare</span>
            </div>
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
          
          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-6 text-gray-300">
              <li>
                <span className="font-medium">Downtown</span><br/>
                442 Lincoln Avenue<br/>
                Steamboat Springs, CO 80487<br/>
                <a href="tel:9708799144" className="hover:text-white">(970) 879-9144</a>
              </li>
              <li>
                <span className="font-medium">Mountain</span><br/>
                2250 Apres Ski Way<br/>
                Steamboat Springs, CO 80487<br/>
                <a href="tel:9708796350" className="hover:text-white">(970) 879-6350</a>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Hours</h3>
            <div className="space-y-6 text-gray-300">
              
              {/* Downtown Hours */}
              <div>
                <span className="font-medium">Downtown</span><br/>
                <span className="font-bold text-white">Winter Hours</span><br/>
                Mon–Sat | 8 am – 6 pm<br/>
                Sun | 8 am – 5 pm<br/>
                <span className="font-bold text-white mt-2 block">Summer Hours</span><br/>
                Mon–Sat | 9 am – 6 pm<br/>
                Sun | 9 am – 5 pm
              </div>
              
              {/* Mountain Hours */}
              <div>
                <span className="font-medium">Mountain</span><br/>
                <span className="font-bold text-white">Winter Hours</span><br/>
                Daily | 7:45 am – 5 pm<br/>
                <span className="font-bold text-white mt-2 block">Summer Hours</span><br/>
                Closed
              </div>
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
};

export default Footer;
