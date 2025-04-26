import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // "/" and "/bike-service" become <Link>; "#…" stay as anchors
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Bike Rentals", href: "#bike" },
    { name: "Bike Service", href: "/bike-service" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-steamboat-blue">Steamboat</span>
            <span className="text-2xl font-bold text-steamboat-red">Ski&Bike</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-8">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-steamboat-darkGray hover:text-steamboat-blue font-medium transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-steamboat-darkGray hover:text-steamboat-blue font-medium transition-colors duration-300"
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button type="button" onClick={toggleMobileMenu} className="text-steamboat-darkGray hover:text-steamboat-blue">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white sm:px-3">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-base font-medium text-steamboat-darkGray hover:text-steamboat-blue hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-steamboat-darkGray hover:text-steamboat-blue hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
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
