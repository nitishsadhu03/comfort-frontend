"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import SocialMediaCard from "./SocialMediaCard";

interface Post {
  id: number;
  platform: "instagram" | "facebook";
  imageUrl: string;
  caption: string;
  link: string;
}

const SocialMediaFeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.1 }); // Reduced threshold for mobile
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const fetchPosts = async () => {
      const mockPosts: Post[] = [
        {
          id: 1,
          platform: "instagram",
          imageUrl: "/assets/pic-34.jpg",
          caption: "New hairstyle trend for summer!",
          link: "https://instagram.com/p/1",
        },
        {
          id: 2,
          platform: "facebook",
          imageUrl: "/assets/pic-59.jpg",
          caption: "Check out our latest salon makeover",
          link: "https://facebook.com/p/2",
        },
        {
          id: 3,
          platform: "instagram",
          imageUrl: "/assets/pic-61.jpg",
          caption: "Hair care tips for the weekend",
          link: "https://instagram.com/p/3",
        },
        {
          id: 4,
          platform: "facebook",
          imageUrl: "/assets/pic-56.jpg",
          caption: "Behind the scenes at our salon",
          link: "https://facebook.com/p/4",
        },
        {
          id: 5,
          platform: "instagram",
          imageUrl: "/assets/pic-12.jpg",
          caption: "Colorful hair transformations",
          link: "https://instagram.com/p/5",
        },
        {
          id: 6,
          platform: "facebook",
          imageUrl: "/assets/pic-5.jpg",
          caption: "Meet our talented stylists",
          link: "https://facebook.com/p/6",
        },
      ];
      setPosts(mockPosts);
    };

    fetchPosts();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <motion.section
      ref={containerRef}
      className="py-8 md:py-16 lg:py-24 bg-secondary-foreground text-white w-full overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-6 md:mb-8 lg:mb-12 text-center"
          variants={itemVariants}
        >
          Follow Us on Social Media
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          variants={containerVariants}
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="w-full"
            >
              <SocialMediaCard post={post} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-8 md:mt-10 lg:mt-12"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="text-white font-semibold py-2 px-6 rounded-full transition duration-300">
              View More Posts
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SocialMediaFeed;
