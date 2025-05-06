// src/components/NavBar.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Bike Rentals", to: "/#bike" },
    { name: "Bike Service", to: "/bike-service" },
    { name: "Boot Fitting", to: "/boot-fitting" },
    { name: "Ski Tuning", to: "/ski-tuning" },
    { name: "Shop", to: "/shop" },
    { name: "Events", to: "/events" },
    { name: "Ski Rentals", to: "/ski-rentals" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50">
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex-shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="Steamboat Ski & Bike Kare"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="relative text-steamboat-darkGray hover:text-steamboat-blue transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-steamboat-blue transition-all duration-200 hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 text-steamboat-darkGray hover:text-steamboat-blue"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white bg-opacity-95 backdrop-blur-md z-40">
          <div className="container-custom pt-20">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="block text-xl font-medium text-steamboat-darkGray hover:text-steamboat-blue transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
