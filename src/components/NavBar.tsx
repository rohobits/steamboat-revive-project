// src/components/NavBar.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  name: string;
  to?: string;
  children?: NavItem[];
}

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeout = React.useRef<number | null>(null);

  // Determine season: April (3) to August (7) inclusive = Summer
  const month = new Date().getMonth();
  const params = new URLSearchParams(window.location.search);
  const seasonParam = params.get('season');
  const isSummer = seasonParam ? seasonParam === 'summer' : month >= 3 && month <= 7;

  const summerItems: NavItem[] = [
    { name: "Bike Rentals", to: "/#bike" },
    { name: "Bike Service", to: "/bike-service" },
  ];
  const winterItems: NavItem[] = [
    { name: "Ski Rentals", to: "/ski-rentals" },
    { name: "Ski Tuning", to: "/ski-tuning" },
    { name: "Boot Fitting", to: "/boot-fitting" },
  ];

  const navItems: NavItem[] = isSummer
    ? [
        { name: "Home", to: "/" },
        ...summerItems,
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

  function handleMouseEnter(name: string) {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setActiveDropdown(name);
  }

  function handleMouseLeave() {
    closeTimeout.current = window.setTimeout(() => {
      setActiveDropdown(null);
      closeTimeout.current = null;
    }, 200);
  }

  return (

    <>
      <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50">
        <div className="container-custom flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => item.children && setActiveDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center text-steamboat-darkGray hover:text-steamboat-blue transition-colors duration-200">
                    {item.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                ) : (
                  <Link
                    to={item.to!}
                    className="text-steamboat-darkGray hover:text-steamboat-blue transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown using JS state */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full mt-1 w-48 bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded z-50">
                    {item.children.map(child => (
                      <Link
                        key={child.name}
                        to={child.to!}
                        className="block px-4 py-2 text-steamboat-darkGray hover:bg-steamboat-blue hover:text-white transition"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-steamboat-darkGray hover:text-steamboat-blue"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-white bg-opacity-40 backdrop-blur-lg z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed left-0 right-0 bottom-0 h-3/4 bg-white bg-opacity-90 backdrop-blur-lg shadow-xl z-50 rounded-t-lg overflow-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
            >
              <div className="w-16 h-1 bg-steamboat-gray/50 rounded-full mx-auto mt-2 mb-6" />
              <button
                className="absolute top-4 right-4 text-steamboat-darkGray hover:text-steamboat-blue"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <motion.ul className="space-y-4 px-6" initial="hidden" animate="visible" exit="hidden" variants={listVariants}>
                {navItems.map(item => (
                  <motion.li key={item.name} variants={itemVariants}>
                    {item.children ? (
                      <div>
                        <p className="text-xl font-semibold text-steamboat-darkGray mb-2">
                          {item.name}
                        </p>
                        <ul className="space-y-2 pl-6">
                          {item.children.map(child => (
                            <motion.li key={child.name} variants={itemVariants}>
                              <Link
                                to={child.to!}
                                className="block text-lg text-steamboat-darkGray hover:text-steamboat-blue transition-colors duration-200"
                                onClick={() => setMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        to={item.to!}
                        className="text-xl font-semibold text-steamboat-darkGray hover:text-steamboat-blue transition-colors duration-200"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
