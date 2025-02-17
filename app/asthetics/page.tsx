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
    title: "Peel",
    description: "Advanced skin care treatment",
    image: "/assets/pic-1.jpg",
  },
  {
    title: "Mesotherapy",
    description: "Targeted skin rejuvenation",
    image: "/assets/pic-9.jpg",
  },
  {
    title: "Medicfacial",
    description: "Medical-grade facial treatment",
    image: "/assets/pic-33.jpg",
  },
  {
    title: "Platelet-Rich Plasma",
    description: "Advanced regenerative treatment",
    image: "/assets/pic-42.jpg",
  },
  {
    title: "Microdermabrasion",
    description: "Exfoliating skin renewal",
    image: "/assets/pic-47.jpg",
  },
  {
    title: "Vein Removal",
    description: "Specialized vascular treatment",
    image: "/assets/pic-51.jpg",
  },
  {
    title: "Semi Permanent Make-Up",
    description: "Long-lasting cosmetic enhancement",
    image: "/assets/pic-55.jpg",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Manikandon",
    text: "Exceptional service and results that exceeded my expectations.",
  },
  {
    name: "Kalaivani",
    text: "Professional and caring staff, truly transformative treatments.",
  },
  {
    name: "Swapna Reddy",
    text: "Amazing experience with personalized care and stunning results.",
  },
];

const Aesthetics = () => {
  return (
    <div className="bg-secondary-foreground text-white min-h-screen">
      <div className="relative h-[50vh] md:h-[60vh] bg-black">
        <Image
          src="/assets/hero-bg.jpg"
          alt="Shop Hero"
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
            Welcome to Comfort Aesthetics – Where Expertise Meets Care
          </h1>
          <p className="text-base text-white font-medium">
            Step into a doctor-led medspa dedicated to your transformation. With
            our advanced treatments and personalized touch, experience
            rejuvenation and confidence like never before
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            Our Aesthetics Services
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
              Book a Free Consultation
            </h2>
            <p className="text-gray-300 mb-6">
              Take the first step towards your aesthetic journey. Our experts
              are ready to guide you.
            </p>
            <div className="space-y-4">
              <Button className="w-full">Online Consultation</Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white w-full"
              >
                Call or WhatsApp
              </Button>
              <Button
                variant="secondary"
                className="bg-gray-700 text-gray-300 hover:bg-gray-600 w-full"
              >
                Send an Email
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/pic-11.jpg"
              alt="Consultation"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            Customer Testimonials
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
              "What services does Comfort Aesthetics offer?",
              "What makes our treatments unique?",
              "What are the clinic's operating hours?",
              "Is consultation necessary before treatment?",
              "How do I book an appointment?",
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

export default Aesthetics;
