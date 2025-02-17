"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Service {
  title: string;
  leftImage: string;
  rightImage: string;
}

const services: Service[] = [
  {
    title: "Men's Hair",
    leftImage: "/assets/pic-65.jpg",
    rightImage: "/assets/pic-66.jpg",
  },
  {
    title: "Women's Hair",
    leftImage: "/assets/pic-45.jpg",
    rightImage: "/assets/pic-46.jpg",
  },
  {
    title: "Hair Colouring",
    leftImage: "/assets/pic-38.jpg",
    rightImage: "/assets/pic-40.jpg",
  },
  {
    title: "Hair Texture",
    leftImage: "/assets/pic-32.jpg",
    rightImage: "/assets/pic-54.jpg",
  },
  {
    title: "Hand & Foot Spa",
    leftImage: "/assets/pic-61.jpg",
    rightImage: "/assets/pic-58.jpg",
  },
  {
    title: "Skin Care",
    leftImage: "/assets/pic-42.jpg",
    rightImage: "/assets/pic-47.jpg",
  },
  {
    title: "Massage",
    leftImage: "/assets/pic-55.jpg",
    rightImage: "/assets/pic-41.jpg",
  },
  {
    title: "Nail Art",
    leftImage: "/assets/pic-64.jpg",
    rightImage: "/assets/pic-62.jpg",
  },
  {
    title: "Beauty Essentials",
    leftImage: "/assets/pic-39.jpg",
    rightImage: "/assets/pic-44.jpg",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const controls = useAnimation();
  const router = useRouter();

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

  const handleServiceClick = (index: number) => {
    setSelectedService(selectedService === index ? null : index);
  };

  return (
    <div
      id="services"
      className="bg-secondary-foreground min-h-screen"
      ref={containerRef}
    >
      <motion.div
        className="pt-20 text-center max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-4 text-primary"
        >
          Our Services
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-white mb-8 md:mb-16 max-w-2xl mx-auto text-sm md:text-base"
        >
          Experience luxury and excellence with our comprehensive range of
          beauty and wellness services, tailored to enhance your natural beauty
          and provide ultimate relaxation.
        </motion.p>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-20">
          <AnimatePresence>
            {selectedService !== null && (
              <motion.div
                variants={imageVariants}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="w-full md:w-3/4 lg:w-1/4 h-48 md:h-64 lg:h-[24rem]"
              >
                <Image
                  src={services[selectedService].leftImage}
                  alt={`${services[selectedService].title} Left`}
                  width={400}
                  height={600}
                  className="w-full h-full object-cover rounded-2xl"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="flex-1 flex flex-col items-center max-w-xl mx-auto w-full"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="mb-4 md:mb-8 w-full flex items-center justify-center gap-2 md:gap-4"
                variants={itemVariants}
              >
                {selectedService === index && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "40px md:width-80px" }}
                    exit={{ width: 0 }}
                    className="hidden md:block h-px bg-primary"
                  />
                )}
                <motion.h2
                  className={`text-lg md:text-2xl tracking-wide transition-colors duration-300 hover:text-primary cursor-pointer px-2 md:px-4 ${
                    selectedService === index ? "text-primary" : "text-white"
                  }`}
                  onClick={() => handleServiceClick(index)}
                >
                  {service.title}
                </motion.h2>
                {selectedService === index && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "40px md:width-80px" }}
                    exit={{ width: 0 }}
                    className="hidden md:block h-px bg-primary"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          <AnimatePresence>
            {selectedService !== null && (
              <motion.div
                variants={imageVariants}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="w-full md:w-3/4 lg:w-1/4 h-48 md:h-64 lg:h-[24rem]"
              >
                <Image
                  src={services[selectedService].rightImage}
                  alt={`${services[selectedService].title} Right`}
                  width={400}
                  height={600}
                  className="w-full h-full object-cover rounded-2xl"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Button
          className="rounded-full mt-8 w-full md:w-auto"
          onClick={() => router.push("/services")}
        >
          View All Services
        </Button>
      </motion.div>
    </div>
  );
};

export default Services;
