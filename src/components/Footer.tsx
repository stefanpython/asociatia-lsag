const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">
            Asociatia Lasa-ma sa-ti aud glasul
          </h2>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right Section - Links */}
        <div className="text-center md:text-right">
          <a href="#" className="text-sm hover:text-gray-400">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="text-sm hover:text-gray-400">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
