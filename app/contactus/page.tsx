// components/ContactUs.tsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import StarsBackground from "@/components/StarsBackground";
import Link from "next/link";
import emailjs from "@emailjs/browser"; 
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Replace these with your EmailJS credentials
      const serviceId = "service_sggsiyr";
      const templateId = "template_4rajmlg";
      const publicKey = "O_bd1etaGWo--bved";

      // Send the email
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    } catch (err) {
      setError("Failed to send the message. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-secondary-foreground text-white">
      <StarsBackground/>
      
      {/* Contact Us Section */}
      <div className="py-16 px-4 md:px-8 lg:px-16 xl:px-24">
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
          
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-primary font-semibold text-sm md:text-base mb-2">
              GET IN TOUCH
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Contact Us
            </h1>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Contact Form */}
            <motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="bg-gradient-to-r from-primary/10 to-secondary p-8 rounded-lg shadow-lg"
>
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-secondary-foreground border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-secondary-foreground border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-secondary-foreground border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-secondary-foreground border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                  required
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
                {isSent && (
                  <p className="text-green-500 text-center mt-4">
                    Message sent successfully!
                  </p>
                )}
                {error && (
                  <p className="text-red-500 text-center mt-4">{error}</p>
                )}
              </form>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Address</h3>
                  <p className="text-gray-300">
                    123 Beauty Street, Salon City, SC 12345
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
                  <p className="text-gray-300">+1 (123) 456-7890</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Address</h3>
                  <p className="text-gray-300">info@comfortsalon.com</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                  <p className="text-gray-300">
                    Mon - Fri: 9:00 AM - 7:00 PM
                  </p>
                  <p className="text-gray-300">
                    Sat - Sun: 10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ContactUs;