// src/components/NavBar.tsx

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Bike Rentals", to: "/#bike" },
    { name: "Bike Service", to: "/bike-service" },
    { name: "Boot Fitting", to: "/boot-fitting" },
    { name: "Ski Tuning", to: "/ski-tuning" },
    { name: "Shop", to: "/shop" },
    { name: "Events", to: "/events" },
    { name: "About", to: "/#about" },
    { name: "Contact", to: "/#contact" },
  ];

  return (
    <>
      {/* Fixed nav bar */}
      <nav className="bg-white shadow fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img
              src="/logo.svg"
              alt="Steamboat Ski and Bike Kare"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const linkIsActive =
                (item.to === "/" && pathname === "/") ||
                (item.to !== "/" && pathname + hash === item.to);

              return (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    linkIsActive
                      ? "text-steamboat-blue"
                      : "text-steamboat-darkGray"
                  } hover:text-steamboat-blue`}
                >
                  {item.name}
                </Link>
              );
            })}
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

        {/* Mobile menu list */}
        {mobileOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white shadow">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-steamboat-darkGray hover:text-steamboat-blue"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Only add this spacer on non-home pages */}
      {pathname !== "/" && <div className="h-16" />}
    </>
  );
};

export default NavBar;
