"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { notFound } from "next/navigation";
import React from "react";

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
    heroImage: "/assets/pic-66.jpg",
    details:
      "Up your Style Game. Here at Vurve, men's hair & styling is a distinct priority and specialization of its own. We offer a diverse range of services for men such as beard shaping, hair styling & general grooming. We also offer a variety of trained, professional stylists to choose from, each with their own distinct sense of style. Get groomin' by booking an appointment with us today!",
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
    heroImage: "/assets/pic-45.jpg",
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
    heroImage: "/assets/pic-40.jpg",
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
    heroImage: "/assets/pic-54.jpg",
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
    heroImage: "/assets/pic-61.jpg",
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
    heroImage: "/assets/pic-42.jpg",
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
    heroImage: "/assets/pic-41.jpg",
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
    heroImage: "/assets/pic-62.jpg",
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
    heroImage: "/assets/pic-44.jpg",
    details:
      "Complete your beauty routine with our essential services. From waxing to threading, we provide everything you need for a polished look.",
    rateCard: {
      "Eyebrow Threading": 300,
      "Full Body Waxing": 3500,
      "Makeup Application": 4000,
    },
  },
];

interface ServiceDetailsPageProps {
  params: Promise<{
    serviceId: string;
  }>;
}

const ServiceDetailsPage = ({ params }: ServiceDetailsPageProps) => {
  const { serviceId } = React.use(params);
  const service = services.find((s) => s.id === serviceId);
  const otherServices = services.filter((s) => s.id !== serviceId);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-secondary-foreground text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] bg-black">
        <div className="relative w-full h-full">
          <Image
            src={service.heroImage}
            alt="Shop Hero"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
          <Link href="/services">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-gray-800 hover:bg-gray-300 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Button>
          </Link>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white font-medium"
          >
            {service.description}
          </motion.p>
        </div>
      </div>

      {/* Service Details Card */}
      <div className="container mx-auto px-4 -mt-24 relative z-10 shadow-2xl">
        <Card className="bg-gray-900 shadow-2xl overflow-hidden">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="order-1 md:order-first relative h-[400px] md:h-[500px]"
              >
                <Image
                  src={service.image}
                  alt="Service"
                  fill
                  className="rounded-xl object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-primary">
                  About this service
                </h2>
                <p className="text-white">{service.details}</p>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rate Card */}
      <div className="container mx-auto px-4 mt-12">
        <Card className="bg-gray-900 shadow-2xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Rate Card
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(service.rateCard).map(([service, price]) => (
                <motion.div
                  key={service}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-800 p-4 rounded-lg"
                >
                  <h3 className="text-gray-300 mb-2">{service}</h3>
                  <p className="text-primary font-semibold text-xl">₹{price}</p>
                </motion.div>
              ))}
            </div>
            <Button
              className="w-44 mt-8 bg-primary text-secondary-foreground hover:bg-primary/90"
              onClick={() => {
                /* Add booking functionality */
              }}
            >
              Book Now
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Other Services Carousel */}
      <div className="py-24 pb-36">
        <h2 className="text-2xl font-bold text-primary text-center mb-12">
          Other Services
        </h2>
        <div className="container mx-auto px-4">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={4}
            navigation
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="service-swiper"
          >
            {otherServices.map((s) => (
              <SwiperSlide key={s.id}>
                <motion.div className="bg-gray-900 shadow-2xl rounded-lg overflow-hidden h-full">
                  <div className="relative h-64 w-full">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover hover:scale-105 duration-300 transition-transform"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {s.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {s.description}
                    </p>
                    <Link
                      href={`/services/${s.id}`}
                      className="text-primary hover:underline"
                    >
                      Know More
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .service-swiper .swiper-button-next,
        .service-swiper .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .service-swiper .swiper-button-next:after,
        .service-swiper .swiper-button-prev:after {
          font-size: 20px;
        }

        .service-swiper .swiper-pagination-bullet {
          background: white;
        }

        .service-swiper .swiper-pagination-bullet-active {
          background: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default ServiceDetailsPage;
