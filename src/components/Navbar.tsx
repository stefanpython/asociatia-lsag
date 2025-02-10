import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Despre noi", href: "/" },
  { label: "Servicii", href: "/about" },
  { label: "Proiecte", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[rgba(255,255,255,0.5)] text-[#4199e1] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/original.png"
                alt="Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 mr-2"
              />
            </div>
            <a href="/" className="text-xl font-bold">
              <span className="italic text-2xl sm:text-3xl">
                Lasa-ma sa-ti aud glasul
              </span>
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-[#4199e1] px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out hover:underline hover:bg-[#2563eb] hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
          <div className="md:hidden">
            <motion.button
              type="button"
              onClick={toggleMobileMenu}
              className="text-[#4199e1] focus:outline-none"
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <motion.svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4199e1"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4199e1"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </motion.svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-[#4199e1] block px-3 py-2 rounded-md text-base font-semibold transition duration-300 ease-in-out hover:underline hover:bg-[#2563eb] hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
