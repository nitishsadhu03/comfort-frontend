"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styled from 'styled-components';

// Type definitions
interface MainMenuItem {
  name: string;
  path: string;
}

interface MoreMenuItem {
  name: string;
  path: string;
}

const LogoContainer = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0) 80%
    );
    transform: translate(-50%, -50%) rotate(45deg);
    animation: lightStreak 3s infinite;
    opacity: 0;
  }

  @keyframes lightStreak {
    0% {
      opacity: 0;
      transform: translate(-150%, -50%) rotate(45deg);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(50%, -50%) rotate(45deg);
    }
  }
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false); // Track scroll state
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Apply rounded edges and shining effect
      } else {
        setIsScrolled(false); // Reset to default
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    // { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contactus" },
  ];

  const moreMenuItems: MoreMenuItem[] = [
    { name: "Shops", path: "/shops" },
    { name: "Academy", path: "/academy" },
    { name: "Partners", path: "/partners" },
    { name: "Membership", path: "/membership" },
  ];

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`flex items-center justify-between px-8 py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "rounded-b-lg shadow-lg backdrop-blur-sm bg-opacity-90 bg-gradient-to-r from-secondary/90 to-primary/10" // Gradient background on scroll
          : "bg-transparent" // Transparent background initially
      }`}
    >
      {/* Shining light effect */}
      {isScrolled && (
        <div className="absolute inset-0 overflow-hidden rounded-b-lg">
          <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30 animate-shine" />
        </div>
      )}

      {/* Logo with hover effect */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer"
      >
         <LogoContainer>
        <Image src="/assets/logo.png" alt="logo" width={120} height={50} />
      </LogoContainer>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {mainMenuItems.map((item) => (
          <motion.div
            key={item.name}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href={item.path}
              className="text-white font-medium text-lg hover:text-primary hover:scale-110 transition-all duration-300 hover:font-semibold relative group"
            >
              {item.name}
              {/* Underline effect on hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white font-medium text-lg hover:text-primary transition-all duration-300 flex items-center space-x-1 relative group"
          >
            <span>More</span>
            <ChevronDown
              size={16}
              className={`transform transition-transform duration-300 ${
                isMoreDropdownOpen ? "rotate-180" : ""
              }`}
            />
            {/* Underline effect on hover */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </motion.button>

          <AnimatePresence>
            {isMoreDropdownOpen && (
              <motion.div
                ref={dropdownRef}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropdownVariants}
                className="absolute top-full left-0 py-2 w-40 bg-secondary-foreground rounded-md shadow-lg"
              >
                {moreMenuItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
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
          <Button
            className="text-sm bg-primary hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-primary/40"
            // whilehover={{ scale: 1.05 }}
            // whiletap={{ scale: 0.95 }}
          >
            Book Appointment
          </Button>
        </Link>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        variants={itemVariants}
        className="md:hidden text-white"
        onClick={toggleMobileMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
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