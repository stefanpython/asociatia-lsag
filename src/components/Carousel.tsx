import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/5.jpeg", "/2.jpeg", "/3.jpeg"];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative mx-auto">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full relative">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[880px] object-cover object-[center_30%] filter brightness-75 contrast-110"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-30"></div>

              {/* First Text Animation */}
              <motion.div
                className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-semibold -ml-16"
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 50,
                  damping: 25,
                }}
                key={`text-1-${currentIndex}`}
              >
                First Text
              </motion.div>

              {/* Second Text Animation */}
              <motion.div
                className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-semibold mt-10 -ml-16"
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2,
                  type: "spring",
                  stiffness: 50,
                  damping: 25,
                }}
                key={`text-2-${currentIndex}`}
              >
                <div className="bg-[#4199e1] max-w-[840px] -ml-[340px] p-8 rounded-tr-3xl rounded-bl-3xl">
                  <p className="text-5xl font-normal">
                    Asociatia "Lasa-ma sa-ti aud glasul"
                  </p>
                </div>
              </motion.div>

              {/* Third Text Animation */}
              <motion.div
                className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-semibold mt-36 -ml-16"
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 3,
                  type: "spring",
                  stiffness: 50,
                  damping: 25,
                }}
                key={`text-3-${currentIndex}`}
              >
                <div className="bg-white max-w-[840px] -ml-[160px] p-2 rounded-b-3xl ">
                  <p className="text-3xl font-normal text-gray-700">
                    Împreună, dăm voce fiecărei ființe.
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev and Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
}
