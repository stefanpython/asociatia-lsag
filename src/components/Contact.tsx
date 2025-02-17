import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("Missing EmailJS credentials");
      setIsSubmitting(false);
      return;
    }

    // Construct the payload for EmailJS with template params
    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    };

    console.log(payload); // Log the payload to verify data

    try {
      await emailjs.send(
        serviceId,
        templateId,
        payload.template_params,
        publicKey
      );
      setStatus("Message sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center md:flex-row gap-8 p-8 bg-gray-100 rounded-xl shadow-lg"
    >
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[500px] md:w-1/2 bg-white p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {status && <p className="text-center text-gray-700 mt-2">{status}</p>}
        </form>
      </motion.div>

      {/* Contact Details */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="w-full max-w-[500px] md:w-1/2 bg-white p-6 rounded-lg shadow flex flex-col"
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

        <div className="mt-4 relative" style={{ paddingBottom: "56.25%" }}>
          {/* Google Maps iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d702.4932731616965!2d24.663298781207455!3d45.22811197790863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1739274109818!5m2!1sen!2sro"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
