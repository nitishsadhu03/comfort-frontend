// app/aboutus/page.tsx
"use client";

import { Check, ArrowLeft } from "lucide-react"; // Import ArrowLeft
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Import your Button component

const AboutUsPage = () => {
  const services = ["Hair Styling", "Skin Care", "Wedding Makeup"];

  return (
    <div className="min-h-screen bg-secondary-foreground text-white px-4 py-4 md:px-8 lg:px-16 xl:px-24 lg:py-8">
      <div className="max-w-7xl mx-auto">
        {/* Add the "Back to Home" button here */}
        <div className="mb-4">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-gray-800 hover:bg-gray-300 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-primary mb-4 font-semibold text-sm md:text-base">
                ABOUT US
              </h2>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white">
                Comfort Salon
              </h1>
            </div>

            <div className="space-y-4 text-gray-300 font-medium text-sm md:text-base">
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
              <p className="text-center lg:text-left">
                Our mission is to create a space where you can relax, unwind, and
                feel your best. Whether you&apos;re here for a quick trim or a
                full makeover, we tailor our services to meet your unique needs.
                We believe that everyone deserves to feel beautiful, and we&apos;re
                here to make that happen.
              </p>
            </div>

            {/* Services */}
            <div className="flex flex-col md:flex-row lg:flex-col justify-center lg:justify-start gap-3 md:gap-6 lg:gap-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center justify-center lg:justify-start space-x-2"
                >
                  <Check className="text-primary h-4 w-4" />
                  <span className="font-medium text-sm md:text-base">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;