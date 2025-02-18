"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const inputClasses =
    "w-full px-3 py-2 text-gray-100 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 bg-secondary-foreground";
  const labelClasses = "block mb-2 text-sm font-medium text-gray-200";
  const errorClasses = "text-red-500 text-xs mt-1";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="bg-secondary-foreground py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8 sm:mb-16"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-400 mb-4">
              We&apos;d love to hear from you. Drop by our salon or reach out to us
              using the information below.
            </p>
            <div className="space-y-4">
              <motion.div className="flex items-center" variants={itemVariants}>
                <MapPin className="w-6 h-6 text-primary mr-3" />
                <span className="text-gray-400">SB Gorai Road, Asansol, 713301</span>
              </motion.div>
              <motion.div className="flex items-center" variants={itemVariants}>
                <Phone className="w-6 h-6 text-primary mr-3" />
                <span className="text-gray-400">+91-7001707740</span>
              </motion.div>
              <motion.div className="flex items-center" variants={itemVariants}>
                <Mail className="w-6 h-6 text-primary mr-3" />
                <span className="text-gray-400">info@comfortsalon.com</span>
              </motion.div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className={labelClasses}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className={inputClasses}
                />
                {errors.name && (
                  <p className={errorClasses}>{errors.name.message}</p>
                )}
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className={labelClasses}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={inputClasses}
                />
                {errors.email && (
                  <p className={errorClasses}>{errors.email.message}</p>
                )}
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="phone" className={labelClasses}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number, please use 10 digits",
                    },
                  })}
                  className={inputClasses}
                />
                {errors.phone && (
                  <p className={errorClasses}>{errors.phone.message}</p>
                )}
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className={labelClasses}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  className={inputClasses}
                />
                {errors.message && (
                  <p className={errorClasses}>{errors.message.message}</p>
                )}
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/80 transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="mt-8 p-4 bg-green-100 text-green-700 rounded-lg text-center"
          >
            Thank you for your message! We&apos;ll get back to you soon.
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ContactSection;