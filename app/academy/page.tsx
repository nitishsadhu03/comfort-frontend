"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Download,
  GraduationCap,
  Clock,
  Users,
  ArrowRight,
  Mail,
  Phone,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

interface Course {
  title: string;
  duration: string;
  students: string;
  description: string;
  topics: string[];
  image: string;
}

const courses: Course[] = [
  {
    title: "Professional Hair Styling",
    duration: "6 months",
    students: "15 per batch",
    description:
      "Master the art of hair styling, from cutting techniques to advanced coloring methods.",
    topics: ["Hair Cutting", "Coloring", "Styling", "Client Consultation"],
    image: "/assets/service-1.jpg",
  },
  {
    title: "Advanced Skincare & Facial Treatments",
    duration: "4 months",
    students: "12 per batch",
    description:
      "Learn comprehensive skincare techniques and professional facial treatments.",
    topics: [
      "Skin Analysis",
      "Treatment Planning",
      "Product Knowledge",
      "Advanced Techniques",
    ],
    image: "/assets/service-2.jpg",
  },
  {
    title: "Nail Art & Technology",
    duration: "3 months",
    students: "10 per batch",
    description: "Become an expert in nail care, art, and advanced techniques.",
    topics: [
      "Manicure/Pedicure",
      "Nail Art",
      "Gel Applications",
      "Safety & Hygiene",
    ],
    image: "/assets/service-3.jpg",
  },
];

const Academy = () => {
  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-secondary-foreground">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <div className="relative w-full h-full">
          <Image
            src="/assets/hero-bg.jpg"
            alt="Academy Hero"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute top-8 left-8 z-20">
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
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Comfort Beauty Academy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Transform your passion for beauty into a successful career
          </p>
        </div>
      </div>

      {/* About Academy Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              About Our Academy
            </h2>
            <p className="text-gray-400 mb-6">
              At Comfort Beauty Academy, we provide world-class education in
              beauty and wellness. Our experienced instructors and
              state-of-the-art facilities ensure you receive the best training
              to excel in the beauty industry.
            </p>
            <ul className="space-y-4">
              {[
                "Industry-experienced instructors",
                "Hands-on practical training",
                "Modern facilities and equipment",
                "Job placement assistance",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-400">
                  <ArrowRight className="w-4 h-4 text-primary mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-[200px]">
              <Image
                src="/assets/service-1.jpg"
                alt="Academy 1"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full h-[200px] mt-8">
              <Image
                src="/assets/service-2.jpg"
                alt="Academy 2"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="bg-gray-800 hover:scale-105 duration-300 transition-all shadow-2xl"
            >
              <div className="relative w-full h-48">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    Duration: {course.duration}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-2" />
                    Class Size: {course.students}
                  </div>
                  <div className="mt-4">
                    <h4 className="text-white mb-2">Key Topics:</h4>
                    <ul className="list-disc list-inside text-gray-400">
                      {course.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Brochure Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Download Our Course Brochure
          </h2>
          <p className="text-gray-400 mb-8">
            Get detailed information about our courses, fees, and admission
            process
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 mx-auto">
            <Download className="w-4 h-4" />
            Download Brochure
          </Button>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Course Enquiry
              </CardTitle>
              <CardDescription className="text-center text-gray-400">
                Fill out the form below and we&apos;ll get back to you shortly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEnquirySubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course" className="text-white">
                      Interested Course
                    </Label>
                    <Input
                      id="course"
                      placeholder="Enter course name"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message or questions..."
                    className="bg-gray-800 border-gray-700 text-white h-32"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  Submit Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-900">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-primary" />
            <span className="text-gray-400">academy@comfort.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-primary" />
            <span className="text-gray-400">+1 (555) 123-4567</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;
