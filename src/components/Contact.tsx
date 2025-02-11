import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center md:flex-row gap-8 p-8 bg-gray-100 rounded-xl shadow-lg"
    >
      {/* Left: Contact Form (Slides in from the left when in view) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[500px] md:w-1/2 bg-white p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Right: Contact Details (Slides in from the right when in view) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="w-full max-w-[500px] md:w-1/2 bg-white p-6 rounded-lg shadow flex flex-col justify-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="text-gray-700">
          <strong>Address:</strong> 123 Main Street, Bucharest, Romania
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Phone:</strong> +40 123 456 789
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Email:</strong> contact@example.com
        </p>
      </motion.div>
    </div>
  );
}
