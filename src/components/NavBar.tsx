// src/components/NavBar.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Home, Bike, Wrench, Calendar, ShoppingCart, Sun, Snowflake } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  name: string;
  to?: string;
  icon: React.ReactNode;
  children?: NavItem[];
}

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Determine season: April (3) to August (7) inclusive = Summer
  const month = new Date().getMonth();
  const params = new URLSearchParams(window.location.search);
  const seasonParam = params.get('season');
  const isSummer = seasonParam ? seasonParam === 'summer' : month >= 3 && month <= 7;

  const summerItems: NavItem[] = [
    { name: "Bike Rentals", to: "/#bike", icon: <Bicycle size={20} /> },
    { name: "Bike Service", to: "/bike-service", icon: <Wrench size={20} /> },
  ];
  const winterItems: NavItem[] = [
    { name: "Ski Rentals", to: "/ski-rentals", icon: <Snowflake size={20} /> },
    { name: "Ski Tuning", to: "/ski-tuning", icon: <Wrench size={20} /> },
    { name: "Boot Fitting", to: "/boot-fitting", icon: <Wrench size={20} /> },
  ];

  const navItems: NavItem[] = isSummer
    ? [
        { name: "Home", to: "/", icon: <Home size={20} /> },
        ...summerItems,
        { name: "Events", to: "/events", icon: <Calendar size={20} /> },
        { name: "Shop", to: "/shop", icon: <ShoppingCart size={20} /> },
        { name: "Winter", icon: <Snowflake size={20} />, children: winterItems },
      ]
    : [
        { name: "Home", to: "/", icon: <Home size={20} /> },
        { name: "Ski Rentals", to: "/ski-rentals", icon: <Snowflake size={20} /> },
        { name: "Ski Tuning", to: "/ski-tuning", icon: <Wrench size={20} /> },
        { name: "Boot Fitting", to: "/boot-fitting", icon: <Wrench size={20} /> },
        { name: "Events", to: "/events", icon: <Calendar size={20} /> },
        { name: "Shop", to: "/shop", icon: <ShoppingCart size={20} /> },
        { name: "Summer", icon: <Sun size={20} />, children: summerItems },
      ];

  const drawerVariants = {
    hidden: { y: '100%' },
    visible: { y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { y: '100%', transition: { ease: 'easeInOut' } },
  };
  const listVariants = {
    visible: { transition: { staggerChildren: 0.05 } },
    hidden: {},
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50">
        <div className="container-custom flex items-center justify-between h-16">
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Steamboat Ski & Bike Kare"
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button className="flex items-center text-steamboat-darkGray hover:text-steamboat-blue transition-colors duration-200">
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                ) : (
                  <Link to={item.to!} className="flex items-center text-steamboat-darkGray hover:text-steamboat-blue transition-colors duration-200">
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </Link>
                )}
                {item.children && (
                  <div className="absolute left-0 mt-2 w-40 bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50">
                    {item.children.map(child => (
                      <Link
                        key={child.name}
                        to={child.to!}
                        className="flex items-center px-4 py-2 text-steamboat-darkGray hover:bg-steamboat-blue hover:text-white transition"
                      >
                        {child.icon}
                        <span className="ml-2">{child.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <button
            className="md:hidden p-2 text-steamboat-darkGray hover:text-steamboat-blue"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-white bg-opacity-40 backdrop-blur-lg z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
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
              <motion.ul
                className="space-y-4 px-6"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={listVariants}
              >
                {navItems.map(item => (
                  <motion.li key={item.name} variants={itemVariants}>
                    {item.children ? (
                      <div>
                        <p className="flex items-center text-xl font-semibold text-steamboat-darkGray mb-2">
                          {item.icon}
                          <span className="ml-2">{item.name}</span>
                        </p>
                        <ul className="space-y-2 pl-6">
                          {item.children.map(child => (
                            <motion.li key={child.name} variants={itemVariants}>
                              <Link
                                to={child.to!}
                                className="flex items-center text-lg text-steamboat-darkGray hover:text-steamboat-blue transition-colors duration-200"
                                onClick={() => setMenuOpen(false)}
                              >
                                {child.icon}
                                <span className="ml-2">{child.name}</span>
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        to={item.to!}
                        className="flex items-center text-xl font-semibold text-steamboat-darkGray hover:text-steamboat-blue transition-colors duration-200"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.icon}
                        <span className="ml-2">{item.name}</span>
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
