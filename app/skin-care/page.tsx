import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface Testimonial {
  name: string;
  text: string;
}

const services: Service[] = [
  {
    title: "Advanced Facials",
    description:
      "Customized facial treatments using premium products and techniques for radiant, healthy skin",
    image: "/assets/pic-7.jpg",
  },
  {
    title: "Body Treatments",
    description:
      "Luxurious body wraps, scrubs, and massage treatments for total body rejuvenation",
    image: "/assets/pic-6.jpg",
  },
  {
    title: "Anti-Aging Solutions",
    description:
      "Targeted treatments to reduce fine lines, wrinkles, and restore youthful glow",
    image: "/assets/pic-40.jpg",
  },
  {
    title: "Bridal Beauty",
    description:
      "Comprehensive beauty packages for brides, including makeup trials and skin prep",
    image: "/assets/pic-36.jpg",
  },
  {
    title: "Lash & Brow Bar",
    description:
      "Expert shaping, tinting, and enhancement services for perfect brows and lashes",
    image: "/assets/pic-46.jpg",
  },
  {
    title: "Wellness Therapies",
    description:
      "Holistic treatments combining skincare with relaxation techniques for mind-body harmony",
    image: "/assets/pic-62.jpg",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Rachel Anderson",
    text: "Their anti-aging treatments have completely transformed my skin. I've never felt more confident!",
  },
  {
    name: "Lisa Martinez",
    text: "The bridal package was perfect. My skin was glowing on my special day.",
  },
  {
    name: "Jennifer Liu",
    text: "The wellness therapies are amazing. Both my skin and stress levels have improved.",
  },
];

const SkinCare = () => {
  return (
    <div className="bg-secondary-foreground text-white min-h-screen">
      <div className="relative h-[50vh] md:h-[60vh] bg-black">
        <Image
          src="/assets/hero-bg.jpg"
          alt="Beauty Salon Hero"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
          <Link href="/" passHref>
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-gray-800 hover:bg-gray-300 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Discover Your Natural Radiance
          </h1>
          <p className="text-base text-white font-medium">
            Experience the perfect harmony of science and nature in our luxury
            beauty treatments. Let our expert estheticians reveal your
            skin&apos;s true potential.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            Our Beauty Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900">
                <div className="relative h-72 w-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-primary text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-gray-800 rounded-lg p-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Start Your Beauty Journey
            </h2>
            <p className="text-gray-300 mb-6">
              Begin with a personalized skin consultation. Our experts will
              create a customized treatment plan just for you.
            </p>
            <div className="space-y-4">
              <Button className="w-full">Schedule Consultation</Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white w-full"
              >
                View Treatment Menu
              </Button>
              <Button
                variant="secondary"
                className="bg-gray-700 text-gray-300 hover:bg-gray-600 w-full"
              >
                Gift Cards
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/pic-55.jpg"
              alt="Beauty Treatment"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            Client Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800">
                <CardContent className="pt-6">
                  <p className="text-gray-300 italic mb-4">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full mr-4"></div>
                    <span className="text-primary font-semibold">
                      {testimonial.name}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-24">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              "How should I prepare for my first treatment?",
              "How often should I get facial treatments?",
              "What products do you use in your treatments?",
              "Are your treatments suitable for sensitive skin?",
              "How long do results typically last?",
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{faq}</span>
                  <span className="text-primary text-2xl">+</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkinCare;
