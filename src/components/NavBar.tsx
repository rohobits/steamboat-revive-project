import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  // mix of real routes (to) and in‐page anchors (hash)
  const navItems = [
    { name: "Home", to: "/" },
    { name: "Bike Rentals", hash: "bike" },
    { name: "Bike Service", to: "/bike-service" },
    { name: "Boot Fitting", to: "/boot-fitting" },
    { name: "Ski Tuning", to: "/ski-tuning" },
    { name: "Shop", to: "/shop" },
    { name: "Events", to: "/events" },
    { name: "About", hash: "about" },
    { name: "Contact", hash: "contact" },
  ];

  function handleScroll(hash: string) {
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <img src="/logo.svg" alt="Steamboat Ski and Bike Kare" className="h-12 w-auto" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === item.to ? "text-steamboat-blue" : "text-steamboat-darkGray"
                } hover:text-steamboat-blue`}
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => handleScroll(item.hash!)}
                className="px-3 py-2 rounded-md text-sm font-medium text-steamboat-darkGray hover:text-steamboat-blue"
              >
                {item.name}
              </button>
            )
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="text-steamboat-darkGray hover:text-steamboat-blue p-2 rounded-md focus:outline-none"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu list */}
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
                onClick={() => handleScroll(item.hash!)}
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
