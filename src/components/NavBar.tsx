import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const BASE_URL = import.meta.env.BASE_URL;

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Bike Rentals", hash: "bike" },
    { name: "Bike Service", to: "/bike-service" },
    { name: "Boot Fitting", to: "/Boot-fitting" }, 
    { name: "Ski Tuning", to: "/ski-tuning" }, 
    { name: "About", hash: "about" },
    { name: "Shop", to: "/ShopPage},
    { name: "Events", to: "/events"},
    { name: "Contact", hash: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo: 48px tall, up to 200px wide */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={`${BASE_URL}images/logo.jpg.png`}
            alt="Steamboat Ski and Bike Kare"
            className="h-12 w-auto max-w-[200px] object-contain"
          />
          <span className="sr-only">Steamboat Ski and Bike Kare</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.name}
                to={item.to}
                className="text-steamboat-darkGray hover:text-steamboat-blue font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={`${BASE_URL}#${item.hash}`}
                className="text-steamboat-darkGray hover:text-steamboat-blue font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(o => !o)}
            className="text-steamboat-darkGray hover:text-steamboat-blue"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-steamboat-darkGray hover:text-steamboat-blue hover:bg-gray-50 rounded-md"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={`${BASE_URL}#${item.hash}`}
                onClick={() => setMobileMenuOpen(false)}
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
