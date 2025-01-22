import React, { useState } from "react";

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
            <a href="/" className="text-xl font-bold">
              <span className="italic text-2xl sm:text-3xl">
                Lasa-ma sa-ti aud glasul
              </span>
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#4199e1] hover:text-gray-300 px-1 py-2 rounded-md text-lg font-semibold"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-[#4199e1] hover:text-white focus:outline-none"
            >
              {/* Conditionally render the Hamburger or Close Icon */}
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4199e1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4199e1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#4199e1] hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
                onClick={() => setMobileMenuOpen(false)} // Close menu on link click
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
