// src/components/NavBar.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Bike Rentals", hash: "bike" },
    { name: "Bike Service", to: "/bike-service" },
    { name: "Boot Fitting", to: "/Boot-fitting" },
    { name: "Ski Tuning", to: "/ski-tuning" },
    { name: "About", hash: "about" },
    { name: "Shop", to: "/ShopPage" },
    { name: "Events", to: "/events" },
    { name: "Contact", hash: "contact" },
  ];

  const scrollToHash = (hash: string) => {
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="/logo.svg" alt="Steamboat Ski and Bike Kare" className="h-12 w-auto" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.name}
                to={item.to}
                className="text-steamboat-darkGray hover:text-steamboat-blue px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => scrollToHash(item.hash!)}
                className="text-steamboat-darkGray hover:text-steamboat-blue px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </button>
            )
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="text-steamboat-darkGray hover:text-steamboat-blue p-2 rounded-md focus:outline-none"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white shadow">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-steamboat-darkGray hover:text-steamboat-blue"
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => {
                  setMobileOpen(false);
                  scrollToHash(item.hash!);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-steamboat-darkGray hover:text-steamboat-blue"
              >
                {item.name}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
