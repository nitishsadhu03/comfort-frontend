"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  rating: number;
  featured: string[];
  website: string;
}

const partnerData: Partner[] = [
  {
    id: 1,
    name: "LuxeGlow Cosmetics",
    logo: "/assets/hair-1.png",
    description:
      "Premium skincare and makeup products for a radiant complexion.",
    rating: 4.8,
    featured: ["Illuminating Serum", "Velvet Matte Lipstick"],
    website: "https://luxeglow.example.com",
  },
  {
    id: 2,
    name: "TressEnvy Hair Care",
    logo: "/assets/skin-1.png",
    description:
      "Professional-grade hair products for salon-quality results at home.",
    rating: 4.9,
    featured: ["Keratin Smoothing Treatment", "Volume Boost Shampoo"],
    website: "https://tressenvy.example.com",
  },
  {
    id: 3,
    name: "NailNova",
    logo: "/assets/spa-1.png",
    description:
      "Innovative nail care and art supplies for stunning manicures.",
    rating: 4.7,
    featured: ["Long-Wear Gel Polish", "Nail Strengthening Oil"],
    website: "https://nailnova.example.com",
  },
  {
    id: 4,
    name: "AromaZen Spa Essentials",
    logo: "/assets/hair-1.png",
    description:
      "Luxurious spa products infused with natural aromatherapy blends.",
    rating: 4.9,
    featured: ["Lavender Dream Body Oil", "Eucalyptus Mint Foot Scrub"],
    website: "https://aromazen.example.com",
  },
  {
    id: 5,
    name: "EcoChic Beauty",
    logo: "/assets/skin-1.png",
    description:
      "Sustainable and eco-friendly beauty products for conscious consumers.",
    rating: 4.6,
    featured: ["Bamboo Fiber Makeup Brushes", "Refillable Mineral Foundation"],
    website: "https://ecochic.example.com",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Partners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-foreground to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <Link href="/">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-gray-800 hover:bg-gray-300 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h1 className="text-4xl font-bold text-primary mb-4">
              Our Trusted Partners
            </h1>
            <p className="text-lg text-gray-300">
              Discover the premium brands we use to deliver exceptional beauty
              experiences
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {partnerData.map((partner) => (
              <motion.div key={partner.id} variants={itemVariants}>
                <Card className="bg-gray-800 hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className="relative w-16 h-16"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain"
                          sizes="64px"
                        />
                      </motion.div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="ml-1 text-yellow-400">
                          {partner.rating}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-gray-300 mb-6">{partner.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">
                        Featured Products:
                      </h4>
                      <ul className="list-disc list-inside text-gray-300">
                        {partner.featured.map((product, index) => (
                          <li key={index}>{product}</li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:font-semibold transition-all"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
