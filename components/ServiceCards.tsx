// ServiceCards.tsx
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon1: string;
  index: number;
  variant: "primary" | "secondary";
  link: string;
}

type ServiceCardProps = Service;

const services: Service[] = [
  {
    title: "Hair Styling & Treatments",
    description:
      "Get the perfect cut, color, or style that suits your personality. Our expert stylists use premium products to give your hair the care it deserves.",
    icon1: "/assets/hair-1.png",
    index: 1,
    variant: "primary",
    link: "/hair-styling",
  },
  {
    title: "Skin & Beauty Care",
    description:
      "Indulge in refreshing facials, flawless makeup, and personalized skincare treatments. Glow with confidence and let your beauty shine!",
    icon1: "/assets/skin-1.png",
    index: 2,
    variant: "secondary",
    link: "/skin-care",
  },
  {
    title: "Makeup",
    description:
      "Rejuvenate your mind and body with our soothing massages and spa treatments. Experience pure relaxation and leave feeling refreshed!",
    icon1: "/assets/spa-1.png",
    index: 3,
    variant: "secondary",
    link: "/makeup",
  },
  {
    title: "Aesthetics",
    description:
      "Rejuvenate your mind and body with our soothing massages and spa treatments. Experience pure relaxation and leave feeling refreshed!",
    icon1: "/assets/spa-1.png",
    index: 4,
    variant: "secondary",
    link: "/asthetics",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
    },
  },
};

const ServiceCard = ({
  title,
  description,
  icon1,
  index,
  link,
  variant = "secondary",
}: ServiceCardProps) => {
  const router = useRouter();

  const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const handleCardClick = () => {
    router.push(link);
  };

  return (
    <div className="cursor-pointer" onClick={handleCardClick}>
      <motion.div
        variants={cardVariants}
        className="flex justify-center items-center"
      >
        <Card
          className={`relative -translate-y-40 overflow-hidden border-none rounded-2xl lg:hover:scale-110 w-80 h-96 ${
            variant === "primary"
              ? "bg-secondary text-white hover:bg-primary"
              : "bg-secondary text-white hover:bg-primary"
          } transition-all duration-300`}
        >
          <div className="p-6">
            <div className="relative z-10">
              <div className="mb-6">
                <Image
                  src={icon1}
                  alt={title}
                  width={60}
                  height={48}
                  priority
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">{title}</h3>
              <p className="text-sm leading-relaxed opacity-90 font-medium">
                {description}
              </p>
            </div>
            <div className="absolute bottom-0 right-0 text-[120px] font-bold opacity-10 leading-none -mb-6 -mr-4">
              {`0${index}`}
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

const ServiceCards = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full bg-secondary-foreground"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.index} {...service} />
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCards;
