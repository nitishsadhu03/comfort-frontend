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
    title: "Men's Hair",
    description: "Expert cuts, styling, and grooming services tailored for men",
    image: "/assets/pic-14.jpg",
  },
  {
    title: "Women's Hair",
    description:
      "Professional cuts, styling, and treatments for all hair types",
    image: "/assets/pic-45.jpg",
  },
  {
    title: "Hair Colouring",
    description:
      "Premium coloring services from highlights to full transformations",
    image: "/assets/pic-38.jpg",
  },
  {
    title: "Hair Texture",
    description:
      "Specialized treatments for straightening, perming, and texture management",
    image: "/assets/pic-32.jpg",
  },
  {
    title: "Children Hair",
    description: "Gentle and fun hair care services for our youngest clients",
    image: "/assets/pic-15.jpg",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    text: "The best salon experience I've ever had. My hair has never looked better!",
  },
  {
    name: "Michael Chen",
    text: "Professional service and amazing attention to detail. Highly recommended.",
  },
  {
    name: "Emma Williams",
    text: "My kids love coming here! The stylists are so patient and skilled.",
  },
];

const HairStyling = () => {
  return (
    <div className="bg-secondary-foreground text-white min-h-screen">
      <div className="relative h-[50vh] md:h-[60vh] bg-black">
        <Image
          src="/assets/hero-bg.jpg"
          alt="Salon Hero"
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
            Transform Your Look at Our Premier Hair Salon
          </h1>
          <p className="text-base text-white font-medium">
            Experience the perfect blend of creativity and expertise. Our master
            stylists are here to help you achieve your dream hairstyle.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            Our Hair Styling Services
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
              Book Your Appointment Today
            </h2>
            <p className="text-gray-300 mb-6">
              Ready for a new look? Our expert stylists are here to make your
              hair dreams come true.
            </p>
            <div className="space-y-4">
              <Button className="w-full">Book Online</Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white w-full"
              >
                Call Now
              </Button>
              <Button
                variant="secondary"
                className="bg-gray-700 text-gray-300 hover:bg-gray-600 w-full"
              >
                Request Callback
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/pic-3.jpg"
              alt="Salon Interior"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            What Our Clients Say
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
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              "How long does a typical appointment take?",
              "What hair products do you use?",
              "Do you offer hair consultations?",
              "What are your pricing ranges?",
              "Do I need to bring reference photos?",
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

export default HairStyling;
