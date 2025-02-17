// About.tsx
"use client";

import Link from "next/link"; // Import the Link component
import { Check } from "lucide-react";
import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

interface Brand {
  name: string;
  width: number;
}

const About = () => {
  const services = ["Hair Styling", "Skin Care", "Wedding Makeup"];

  const brands: Brand[] = [
    { name: "CASMARA", width: 100 },
    { name: "LOTUS", width: 100 },
    { name: "SCWARZKOPF", width: 100 },
    { name: "WELLA", width: 100 },
    { name: "LOREAL", width: 100 },
    { name: "MATRIX", width: 100 },
    { name: "O3+", width: 100 },
    { name: "KEVIN MURPHY", width: 100 },
    { name: "COLOR BAR", width: 100 },
    { name: "MAKEUP STUDIO", width: 100 },
    { name: "CRYOLAN", width: 100 },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5,
      },
    },
  };

  return (
    <div
      ref={containerRef}
      id="aboutus"
      className="min-h-screen bg-secondary-foreground text-white px-4 py-4 md:px-8 lg:px-16 xl:px-24 lg:py-8"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <h2 className="text-primary mb-4 font-semibold text-sm md:text-base">
                ABOUT US
              </h2>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white">
                Comfort Salon
              </h1>
            </motion.div>

            <motion.div
              className="space-y-4 text-gray-300 font-medium text-sm md:text-base"
              variants={itemVariants}
            >
              <p className="text-center lg:text-left">
                At Comfort Salon, beauty is more than a service, it&apos;s an
                experience. We provide expert hairstyling, skincare, and makeup
                in a warm, luxurious ambiance. Our skilled professionals use
                high-quality products to enhance your natural beauty, ensuring
                you leave refreshed and confident. With a welcoming atmosphere,
                top-tier expertise, and premium products, we make every visit a
                rejuvenating escape. Let us pamper you with the care you
                deserve—because at Comfort Salon, beauty begins with comfort. 🌿
              </p>
              <div className="text-center lg:text-left">
                <Link
                  href="/aboutus" // Link to the dedicated about page
                  className="text-primary hover:text-primary-dark font-semibold underline transition-colors duration-300"
                >
                  Read more
                </Link>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              className="flex flex-col md:flex-row lg:flex-col justify-center lg:justify-start gap-3 md:gap-6 lg:gap-3"
              variants={containerVariants}
            >
              {services.map((service) => (
                <motion.div
                  key={service}
                  className="flex items-center justify-center lg:justify-start space-x-2"
                  variants={itemVariants}
                >
                  <Check className="text-primary h-4 w-4" />
                  <span className="font-medium text-sm md:text-base">
                    {service}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Brands Marquee - Hidden on mobile */}
            <motion.div
              className="hidden md:block border border-primary rounded-lg py-4"
              variants={itemVariants}
            >
              <Marquee>
                {brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="text-gray-400 font-semibold text-xs md:text-sm mx-4"
                  >
                    {brand.name}
                  </div>
                ))}
              </Marquee>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
            variants={imageVariants}
          >
            <div className="relative">
              <div className="border-2 border-primary rounded-[6rem] sm:rounded-[8rem] md:rounded-[10rem] lg:rounded-[12rem] h-[22rem] sm:h-[28rem] md:h-[34rem] lg:h-[40rem] xl:h-[44rem] w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[22rem] xl:w-[24rem] p-2 flex items-center justify-center">
                <div>
                  <Image
                    src="/assets/pic-1.jpg"
                    alt="Professional makeup artist portrait"
                    width={800}
                    height={1200}
                    className="object-cover h-[20rem] sm:h-[26rem] md:h-[32rem] lg:h-[38rem] xl:h-[40rem] w-[10rem] sm:w-[14rem] md:w-[18rem] lg:w-[20rem] rounded-[6rem] sm:rounded-[8rem] md:rounded-[10rem] lg:rounded-[12rem]"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
