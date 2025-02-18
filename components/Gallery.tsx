"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface GalleryProps {
  images?: string[];
  autoplay?: boolean;
  pauseOnHover?: boolean;
}

const Gallery = ({
  images = [
    "/assets/pic-17.jpg",
    "/assets/pic-18.jpg",
    "/assets/pic-19.jpg",
    "/assets/pic-20.jpg",
    "/assets/pic-21.jpg",
    "/assets/pic-22.jpg",
    "/assets/pic-23.jpg",
    "/assets/pic-24.jpg",
    "/assets/pic-29.jpg",
    "/assets/pic-26.jpg",
    "/assets/pic-27.jpg",
    "/assets/pic-30.jpg",
  ],
}: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const controls = useAnimation();

  // Handle responsive layout
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle animation controls
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Animation variants
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

  const slideVariants = {
    enter: (direction: number) => ({
      x:
        direction > 0 ? (isMobile ? 1000 : "100%") : isMobile ? -1000 : "-100%",
      opacity: 0,
      scale: isMobile ? 1 : 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x:
        direction < 0 ? (isMobile ? 1000 : "100%") : isMobile ? -1000 : "-100%",
      opacity: 0,
      scale: isMobile ? 1 : 0.9,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex >= images.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = images.length - 1;
      return nextIndex;
    });
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <motion.div
      ref={containerRef}
      id="gallery"
      className={`relative bg-secondary-foreground ${
        isMobile ? "py-8 px-4" : "py-24 min-h-screen"
      } overflow-hidden`}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h2
        className={`font-bold tracking-tight text-primary mb-4 text-center ${
          isMobile ? "text-2xl" : "text-4xl"
        }`}
        variants={itemVariants}
      >
        Gallery
      </motion.h2>

      <motion.div
        className={`relative mx-auto ${
          isMobile ? "h-[400px] w-full" : "h-[600px] max-w-7xl"
        }`}
        variants={itemVariants}
      >
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 1 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full flex items-center justify-center"
              style={{ touchAction: "none" }}
            >
              <motion.div
                className={`relative mx-auto ${
                  isMobile ? "w-full max-w-sm" : "w-full max-w-3xl group"
                }`}
                whileHover={isMobile ? undefined : { scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`relative w-full ${
                    isMobile ? "h-[300px]" : "h-[500px]"
                  }`}
                >
                  <Image
                    src={images[currentIndex] || "/placeholder.svg"}
                    alt={`gallery-${currentIndex}`}
                    fill
                    sizes={isMobile ? "100vw" : "80vw"}
                    priority={currentIndex === 0}
                    className={`rounded-xl shadow-lg ${
                      isMobile ? "object-cover" : "object-cover rounded-2xl"
                    }`}
                    draggable="false"
                  />
                </div>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 bg-black/70 px-3 py-1 rounded-full ${
                    isMobile
                      ? "bottom-4"
                      : "bottom-6 px-6 py-2 backdrop-blur-sm"
                  }`}
                >
                  <p
                    className={`text-white ${
                      isMobile ? "text-sm" : "text-lg font-medium"
                    }`}
                  >
                    {currentIndex + 1} / {images.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <motion.button
          className={`absolute top-1/2 -translate-y-1/2 ${
            isMobile
              ? "left-2 bg-black/50 p-2"
              : "left-12 bg-primary p-4 backdrop-blur-sm hover:scale-125 transition-all duration-300 ease-in-out"
          } rounded-full text-white z-10`}
          onClick={() => paginate(-1)}
          variants={itemVariants}
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          className={`absolute top-1/2 -translate-y-1/2 ${
            isMobile
              ? "right-2 bg-black/50 p-2"
              : "right-12 bg-primary p-4 backdrop-blur-sm hover:scale-125 transition-all duration-300 ease-in-out"
          } rounded-full text-white z-10`}
          onClick={() => paginate(1)}
          variants={itemVariants}
        >
          <ChevronRight size={24} />
        </motion.button>

        {/* Thumbnail Navigation */}
        <motion.div
          className={`absolute left-0 right-0 flex justify-center ${
            isMobile ? "bottom-0 gap-2 pb-4" : "bottom-2 gap-4 px-4"
          }`}
          variants={itemVariants}
        >
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                isMobile
                  ? `${
                      index === currentIndex
                        ? "bg-primary w-4"
                        : "w-2 bg-gray-400"
                    }`
                  : `${
                      index === currentIndex
                        ? "bg-primary w-12"
                        : "bg-white w-6 hover:bg-white/60"
                    } duration-300`
              }`}
              aria-label={`Go to slide ${index + 1}`}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
