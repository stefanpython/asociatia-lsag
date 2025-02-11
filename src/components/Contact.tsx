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
        className="w-full max-w-[500px] md:w-1/2 bg-white p-6 rounded-lg shadow flex flex-col "
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

        {/* Google Maps Embed */}
        <div className="mt-4">
          <div
            className="mt-4 relative border border-gray-300 rounded-lg overflow-hidden"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d702.4932731616965!2d24.663298781207455!3d45.22811197790863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1739274109818!5m2!1sen!2sro&markers=color:red%7C45.22811197790863,24.663298781207455"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
