// src/components/NavBar.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  name: string;
  to?: string;
  children?: NavItem[];
}

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Determine season: April (3) to August (7) inclusive = Summer
  const month = new Date().getMonth();
  // Allow manual override via ?season=summer or ?season=winter for testing
  const params = new URLSearchParams(window.location.search);
  const seasonParam = params.get('season');
  const isSummer = seasonParam
    ? seasonParam === 'summer'
    : month >= 3 && month <= 7;

  // Define seasonal items
  const summerItems: NavItem[] = [
    { name: "Bike Rentals", to: "/#bike" },
    { name: "Bike Service", to: "/bike-service" },
  ];
  const winterItems: NavItem[] = [
    { name: "Boot Fitting", to: "/boot-fitting" },
    { name: "Ski Tuning", to: "/ski-tuning" },
    { name: "Ski Rentals", to: "/ski-rentals" },
  ];

  // Build nav items based on season
  const navItems: NavItem[] = isSummer
    ? [
        { name: "Home", to: "/" },
        { name: "Bike Rentals", to: "/#bike" },
        { name: "Bike Service", to: "/bike-service" },
        { name: "Events", to: "/events" },
        { name: "Shop", to: "/shop" },
        { name: "Winter", children: winterItems },
      ]
    : [
        { name: "Home", to: "/" },
        { name: "Ski Rentals", to: "/ski-rentals" },
        { name: "Ski Tuning", to: "/ski-tuning" },
        { name: "Boot Fitting", to: "/boot-fitting" },
        { name: "Events", to: "/events" },
        { name: "Shop", to: "/shop" },
        { name: "Summer", children: summerItems },
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
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <>
                  <button className="flex items-center text-steamboat-darkGray hover:text-steamboat-blue transition-colors duration-200">
                    {item.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 group-hover:pointer-events-auto">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.to!}
                        className="block px-4 py-2 text-steamboat-darkGray hover:bg-steamboat-blue hover:text-white transition"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.to!}
                  className="relative text-steamboat-darkGray hover:text-steamboat-blue transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-steamboat-blue transition-all duration-200 group-hover:w-full"></span>
                </Link>
              )}
            </div>
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
        <div className="md:hidden fixed inset-0 bg-white z-40 overflow-auto">
          <div className="container-custom pt-20">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.children ? (
                    <div>
                      <p className="text-xl font-medium text-steamboat-darkGray">{item.name}</p>
                      <ul className="mt-2 space-y-2">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              to={child.to!}
                              className="block text-lg text-steamboat-darkGray hover:text-steamboat-blue transition-colors duration-200"
                              onClick={() => setMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      to={item.to!}
                      className="block text-xl font-medium text-steamboat-darkGray hover:text-steamboat-blue transition-colors duration-200"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
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
