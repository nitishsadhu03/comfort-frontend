"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Type definitions
interface MainMenuItem {
  name: string;
  path: string;
}

interface MoreMenuItem {
  name: string;
  path: string;
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMoreDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const mainMenuItems: MainMenuItem[] = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const moreMenuItems: MoreMenuItem[] = [
    { name: "Shops", path: "/shops" },
    { name: "Academy", path: "/academy" },
    { name: "Partners", path: "/partners" },
  ];

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="flex items-center justify-between px-8 py-4 bg-secondary fixed top-0 left-0 w-full z-50"
    >
      <Image src="/assets/logo.png" alt="logo" width={120} height={50} />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {mainMenuItems.map((item) => (
          <motion.div key={item.name} variants={itemVariants}>
            <Link
              href={item.path}
              className="text-white font-medium text-lg hover:text-primary hover:scale-110 transition-all duration-300 hover:font-semibold"
            >
              {item.name}
            </Link>
          </motion.div>
        ))}

        {/* More Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsMoreDropdownOpen(true)}
          onMouseLeave={() => setIsMoreDropdownOpen(false)}
        >
          <motion.button
            ref={buttonRef}
            variants={itemVariants}
            className="text-white font-medium text-lg hover:text-primary transition-all duration-300 flex items-center space-x-1"
          >
            <span>More</span>
            <ChevronDown
              size={16}
              className={`transform transition-transform duration-300 ${
                isMoreDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </motion.button>

          <AnimatePresence>
            {isMoreDropdownOpen && (
              <motion.div
                ref={dropdownRef}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropdownVariants}
                className="absolute top-full left-0  py-2 w-40 bg-secondary-foreground rounded-md shadow-lg"
              >
                {moreMenuItems.map((item) => (
                  <motion.div key={item.name}>
                    <Link
                      href={item.path}
                      className="block px-4 py-2 text-white font-medium hover:text-primary hover:bg-secondary-dark transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Desktop Button */}
      <motion.div
        variants={itemVariants}
        className="items-center space-x-4 hidden md:flex"
      >
        <Link href="/appointment-booking">
          <Button className="text-sm">Book Appointment</Button>
        </Link>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        variants={itemVariants}
        className="md:hidden text-white"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed inset-0 top-16 bg-secondary/95 z-40"
        >
          <div className="flex flex-col items-center pt-8 space-y-8">
            {mainMenuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.path}
                  className="text-white font-medium text-lg hover:text-primary transition-all duration-300"
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {moreMenuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (mainMenuItems.length + index) * 0.1 }}
              >
                <Link
                  href={item.path}
                  className="text-white font-medium text-lg hover:text-primary transition-all duration-300"
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
