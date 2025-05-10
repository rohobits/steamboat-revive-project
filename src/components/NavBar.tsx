// src/components/NavBar.tsx

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const drawerVariants = {
  hidden: { y: "100%" },
  visible: { y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { y: "100%", transition: { ease: "easeInOut" } },
};
const listVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const itemVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } };

interface NavItem {
  name: string;
  to?: string;
  children?: NavItem[];
}

// Helper for smooth scrolling to in-page anchors
function scrollToAnchor(hash: string) {
  const id = hash.startsWith("/#") ? hash.slice(2) : hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeout = useRef<number | null>(null);

  // Season logic
  const month = new Date().getMonth();
  const params = new URLSearchParams(window.location.search);
  const seasonParam = params.get("season");
  const isSummer = seasonParam ? seasonParam === "summer" : month >= 3 && month <= 7;

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
        {
          name: "About",
          children: [
            { name: "About Us", to: "/#about" },
            { name: "Contact Us", to: "/#contact" },
          ],
        },
      ]
    : [
        { name: "Home", to: "/" },
        ...winterItems,
        { name: "Events", to: "/events" },
        { name: "Shop", to: "/shop" },
        { name: "Summer", children: summerItems },
        {
          name: "About",
          children: [
            { name: "About Us", to: "/#about" },
            { name: "Contact Us", to: "/#contact" },
          ],
        },
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
      <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <div className="container-custom flex items-center justify-between h-20">
          <Link
            to="/"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
            className="flex-shrink-0"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.name)}
                onMouseLeave={() => item.children && handleMouseLeave()}
              >
                {!item.children ? (
                  // Regular link or in-page anchor
                  item.to?.startsWith("/#") ? (
                    <button
                      className="text-steamboat-darkBlue hover:text-steamboat-blue transition-colors duration-200 text-lg font-semibold"
                      onClick={() => scrollToAnchor(item.to!)}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.to!}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-steamboat-darkBlue hover:text-steamboat-blue transition-colors duration-200 text-lg font-semibold"
                    >
                      {item.name}
                    </Link>
                  )
                ) : (
                  <>  
                    <button className="flex items-center text-steamboat-darkBlue hover:text-steamboat-blue transition-colors duration-200 text-lg font-semibold">
                      {item.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute left-0 top-full mt-0 w-48 bg-white shadow-xl rounded-md z-50">
                        {item.children.map((child) => (
                          <div key={child.name}>
                            {child.to!.startsWith("/#") ? (
                              <button
                                className="block w-full text-left px-4 py-2 text-steamboat-darkBlue hover:bg-steamboat-blue hover:text-white transition-colors duration-200 text-base"
                                onClick={() => {
                                  scrollToAnchor(child.to!);
                                  setActiveDropdown(null);
                                }}
                              >
                                {child.name}
                              </button>
                            ) : (
                              <Link
                                to={child.to!}
                                onClick={() => setActiveDropdown(null)}
                                className="block px-4 py-2 text-steamboat-darkBlue hover:bg-steamboat-blue hover:text-white transition-colors duration-200 text-base"
                              >
                                {child.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-steamboat-darkBlue hover:text-steamboat-blue"
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
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed bottom-0 left-0 right-0 h-3/4 bg-white z-50 rounded-t-lg shadow-lg overflow-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
            >
              <div className="w-16 h-1 bg-steamboat-gray/50 rounded-full mx-auto mt-2 mb-6" />
              <button
                className="absolute top-4 right-4 text-steamboat-darkBlue hover:text-steamboat-blue"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <motion.ul
                className="space-y-4 px-6"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={listVariants}
              >
                {navItems.map((item) => (
                  <motion.li key={item.name} variants={itemVariants}>
                    {!item.children ? (
                      item.to!.startsWith("/#") ? (
                        <button
                          className="text-xl font-semibold text-steamboat-darkBlue hover:text-steamboat-blue transition-colors duration-200"
                          onClick={() => {
                            scrollToAnchor(item.to!);
                            setMenuOpen(false);
                          }}
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          to={item.to!}
                          onClick={() => {
                            setMenuOpen(false);
                            window.scrollTo(0, 0);
                          }}
                          className="text-xl font-semibold text-steamboat-darkBlue hover:text-steamboat-blue transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      )
                    ) : (
                      <div>
                        <p className="text-xl font-semibold text-steamboat-darkBlue mb-2">
                          {item.name}
                        </p>
                        <ul className="space-y-2 pl-6">
                          {item.children.map((child) => (
                            <motion.li key={child.name} variants={itemVariants}>
                              {child.to!.startsWith("/#") ? (
                                <button
                                  className="block text-lg text-steamboat-darkBlue hover:text-steamboat-blue transition-colors duration-200"
                                  onClick={() => {
                                    scrollToAnchor(child.to!);
                                    setMenuOpen(false);
                                  }}
                                >
                                  {child.name}
                                </button>
                              ) : (
                                <Link
                                  to={child.to!}
                                  onClick={() => setMenuOpen(false)}
                                  className="block text-lg text-steamboat-darkBlue hover:text-steamboat-blue transition-colors duration-200"
                                >
                                  {child.name}
                                </Link>
                              )}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
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
}
