import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const base = import.meta.env.BASE_URL; // "/steamboat-revive-project/"

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Bike Rentals", anchor: "bike" },
    { name: "Bike Service", to: "/bike-service" },
    { name: "About", anchor: "about" },
    { name: "Contact", anchor: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
          <span className="text-2xl font-bold text-steamboat-blue">Steamboat</span>
          <span className="text-2xl font-bold text-steamboat-red">Ski&Bike</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => window.scrollTo(0, 0)}
                className="text-steamboat-darkGray hover:text-steamboat-blue font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={`${base}#${item.anchor}`}
                onClick={() => window.scrollTo(0, 0)}
                className="text-steamboat-darkGray hover:text-steamboat-blue font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            )
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden text-steamboat-darkGray hover:text-steamboat-blue"
          onClick={() => setMobileMenuOpen((o) => !o)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-white transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setMobileMenuOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-steamboat-darkGray hover:text-steamboat-blue hover:bg-gray-50 rounded-md"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={`${base}#${item.anchor}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setMobileMenuOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-steamboat-darkGray hover:text-steamboat-blue hover:bg-gray-50 rounded-md"
              >
                {item.name}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
