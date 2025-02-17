"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Post {
  id: number;
  platform: "instagram" | "facebook";
  imageUrl: string;
  caption: string;
  link: string;
}

interface SocialMediaCardProps {
  post: Post;
}

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ post }) => {
  const PlatformIcon = post.platform === "instagram" ? Instagram : Facebook;

  const cardVariants = {
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
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="h-full w-full"
    >
      <Card className="overflow-hidden shadow-lg bg-gray-900 text-white h-full border-0">
        <CardContent className="p-0 h-full flex flex-col">
          <div className="relative w-full aspect-square">
            <Image
              src={post.imageUrl || "/placeholder.svg"}
              alt={post.caption}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority
            />
          </div>
          <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
            <div>
              <motion.div
                className="flex items-center mb-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <PlatformIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
                <span className="font-semibold text-primary text-sm sm:text-base">
                  {post.platform.charAt(0).toUpperCase() +
                    post.platform.slice(1)}
                </span>
              </motion.div>
              <motion.p
                className="text-gray-300 text-sm sm:text-base mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {post.caption}
              </motion.p>
            </div>
            <motion.a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-sm sm:text-base bg-primary text-white font-semibold py-2 px-4 rounded-full hover:bg-primary/80 transition duration-300 text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              View on{" "}
              {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
            </motion.a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SocialMediaCard;
