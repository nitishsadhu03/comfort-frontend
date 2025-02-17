"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6, // Delay to let navbar animation complete
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image with Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-right md:bg-center lg:bg-center bg-no-repeat min-h-screen"
      >
        <div className="absolute inset-0 bg-black/60 lg:bg-black/40"></div>
      </motion.div>

      {/* Content Container */}
      <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex items-center min-h-screen justify-center lg:justify-start"
        >
          {/* Text Content */}
          <div className="max-w-xl text-white text-center lg:text-left pt-16 md:pt-0">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            >
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  cursor: "|",
                  cursorClassName: "typewriter-cursor",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      'Revamp Your <span style="color: #F24462;">Look</span>'
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      'Refresh Your <span style="color: #F24462;">Soul</span>'
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
              />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base font-medium mb-6 sm:mb-8 px-4 sm:px-6 lg:px-0"
            >
              Step into elegance with expert styling and spa treatments. Book
              your appointment today for a touch of beauty and relaxation!
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start"
            >
              <Link href="/appointment-booking">
                <Button className="text-base sm:text-lg p-4 sm:p-5 bg-gradient-to-r from-[#FD2D00] to-[#DF007C] hover:scale-110 transition-all duration-300">
                  Book Appointment
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
