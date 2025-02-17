"use client";

import type { FC } from "react";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

interface SocialLink {
  icon: typeof Instagram | typeof Facebook | typeof Twitter;
  href: string;
  label: string;
}

interface QuickLink {
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const quickLinks: QuickLink[] = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const Footer: FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      void controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <footer
      ref={containerRef}
      className="bg-secondary-foreground text-white border-t border-gray-500"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Comfort Salon</h3>
            <p className="text-gray-400">
              Elevate your beauty experience with our expert stylists and
              premium services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <address className="not-italic">
              <p className="text-gray-400">
                123 Beauty Street, Salon City, 12345
              </p>
              <p className="text-gray-400">
                Phone:{" "}
                <a
                  href="tel:+11234567890"
                  className="hover:text-primary transition-colors"
                >
                  (123) 456-7890
                </a>
              </p>
              <p className="text-gray-400">
                Email:{" "}
                <a
                  href="mailto:info@comfortsalon.com"
                  className="hover:text-primary transition-colors"
                >
                  info@comfortsalon.com
                </a>
              </p>
            </address>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400"
        >
          © {new Date().getFullYear()} Comfort Salon. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
