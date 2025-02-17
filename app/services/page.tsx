"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  heroImage: string;
  details: string;
  rateCard: Record<string, number>;
}

const services: Service[] = [
  {
    id: "service-1",
    title: "Men's Hair",
    description: "Expert haircuts, styling, and grooming services for men.",
    image: "/assets/pic-65.jpg",
    heroImage: "/assets/hero-men.jpg",
    details:
      "Up your Style Game. Here at Vurve, men’s hair & styling is a distinct priority and specialization of its own. We offer a diverse range of services for men such as beard shaping, hair styling & general grooming. We also offer a variety of trained, professional stylists to choose from, each with their own distinct sense of style. Get groomin’ by booking an appointment with us today!",
    rateCard: {
      "Hair Cut - Stylist": 900,
      "Hair Cut - Premier Stylist": 1100,
      "Hair Cut - Top Stylist": 1400,
      "Salon Director Cut": 1700,
      "Vurve Director Cut": 2200,
    },
  },
  {
    id: "service-2",
    title: "Women's Hair",
    description: "Trendy haircuts, styling, and treatments for women.",
    image: "/assets/pic-46.jpg",
    heroImage: "/assets/hero-women.jpg",
    details:
      "Transform your look with our expert women's hair services. From chic haircuts to luxurious treatments, we bring the latest trends to you.",
    rateCard: {
      "Hair Cut - Stylist": 1000,
      "Hair Cut - Premier Stylist": 1300,
      "Hair Cut - Top Stylist": 1600,
      "Salon Director Cut": 2000,
      "Vurve Director Cut": 2500,
    },
  },
  {
    id: "service-3",
    title: "Hair Colouring",
    description: "Professional hair coloring services for a fresh new look.",
    image: "/assets/pic-38.jpg",
    heroImage: "/assets/hero-colour.jpg",
    details:
      "Enhance your beauty with our professional hair coloring services. Whether you want a subtle change or a bold transformation, our experts have you covered!",
    rateCard: {
      "Global Coloring": 2500,
      Highlights: 3500,
      Balayage: 4500,
      "Root Touch Up": 1500,
    },
  },
  {
    id: "service-4",
    title: "Hair Texture",
    description: "Smoothing, straightening, and texturizing treatments.",
    image: "/assets/pic-32.jpg",
    heroImage: "/assets/hero-texture.jpg",
    details:
      "Achieve the perfect hair texture with our premium treatments. Whether you want smooth, straight, or voluminous hair, we have the solution!",
    rateCard: {
      "Keratin Treatment": 5000,
      Smoothening: 4500,
      Straightening: 5500,
    },
  },
  {
    id: "service-5",
    title: "Hand & Foot Spa",
    description: "Relaxing spa treatments for hands and feet.",
    image: "/assets/pic-58.jpg",
    heroImage: "/assets/hero-spa.jpg",
    details:
      "Pamper yourself with our luxurious hand and foot spa treatments. Relax, refresh, and rejuvenate for a complete self-care experience.",
    rateCard: {
      Manicure: 1200,
      Pedicure: 1500,
      "Spa Manicure & Pedicure": 2500,
    },
  },
  {
    id: "service-6",
    title: "Skin Care",
    description: "Rejuvenating facials and skincare treatments.",
    image: "/assets/pic-47.jpg",
    heroImage: "/assets/hero-skincare.jpg",
    details:
      "Glow with our advanced skin care treatments. From facials to skin rejuvenation, we offer personalized care for radiant skin.",
    rateCard: {
      "Basic Facial": 2000,
      "Advanced Facial": 3000,
      "Hydration Therapy": 4000,
    },
  },
  {
    id: "service-7",
    title: "Massage",
    description: "Therapeutic massages for relaxation and stress relief.",
    image: "/assets/pic-55.jpg",
    heroImage: "/assets/hero-massage.jpg",
    details:
      "Unwind with our professional massage services. From deep tissue to relaxation massages, we provide ultimate stress relief.",
    rateCard: {
      "Relaxation Massage": 2000,
      "Deep Tissue Massage": 2500,
      "Aromatherapy Massage": 3000,
    },
  },
  {
    id: "service-8",
    title: "Nail Art",
    description: "Creative and stylish nail art and manicure services.",
    image: "/assets/pic-64.jpg",
    heroImage: "/assets/hero-nail.jpg",
    details:
      "Express yourself with our stunning nail art designs. From classic styles to trendy patterns, we offer a variety of creative options.",
    rateCard: {
      "Basic Nail Art": 1000,
      "Premium Nail Art": 2000,
      "Acrylic Nail Extensions": 3000,
    },
  },
  {
    id: "service-9",
    title: "Beauty Essentials",
    description: "A range of essential beauty services for a complete look.",
    image: "/assets/pic-39.jpg",
    heroImage: "/assets/hero-beauty.jpg",
    details:
      "Complete your beauty routine with our essential services. From waxing to threading, we provide everything you need for a polished look.",
    rateCard: {
      "Eyebrow Threading": 300,
      "Full Body Waxing": 3500,
      "Makeup Application": 4000,
    },
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

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-secondary-foreground py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-4"
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

        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
          <p className="text-lg text-gray-300">
            Experience luxury and excellence with our comprehensive range of
            beauty and wellness services, tailored to enhance your natural
            beauty and provide ultimate relaxation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="overflow-hidden shadow-2xl bg-gray-900 h-[28rem] flex flex-col border-0 outline-none">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative h-72 overflow-hidden"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-primary mb-3 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 flex-grow line-clamp-3">
                    {service.description}
                  </p>

                  <div className="mt-2 flex justify-start">
                    <Link
                      href={`/services/${service.id}`}
                      className="text-primary hover:underline"
                    >
                      Know More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
