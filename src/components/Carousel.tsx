import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/2a.jpg", "/2.jpeg", "/3.jpeg"];

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
            <div key={index} className="flex-shrink-0 w-full relative ">
              <img
                src={image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                className="w-full h-[880px] object-cover object-[center_30%] filter brightness-75 contrast-110"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 opacity-30"></div>

              {index === 0 && (
                <>
                  {/* First Slide Animations */}
                  <motion.div
                    className="absolute top-[250px] lg:top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-4xl font-extrabold sm:leading-tight"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100,
                      damping: 30,
                    }}
                    key={`text-1-${currentIndex}`}
                  >
                    Explorează-ți viitorul
                  </motion.div>

                  <motion.div
                    className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl font-semibold mt-6 sm:mt-10"
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 1,
                      type: "spring",
                      stiffness: 80,
                      damping: 25,
                    }}
                    key={`text-2-${currentIndex}`}
                  >
                    <div
                      className="bg-gradient-to-r from-teal-400 to-cyan-500 max-w-[640px] sm:max-w-[840px]
                     p-6 sm:p-8 rounded-tr-3xl -ml-24 sm:ml-0"
                    >
                      <p className="text-xl sm:text-5xl md:text-[34px] font-normal">
                        Transformă-ți cuvintele în acțiune.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2
                     text-white text-2xl sm:text-3xl font-semibold mt-[65px] sm:mt-36 -ml-24 sm:ml-0 "
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.5,
                      type: "spring",
                      stiffness: 50,
                      damping: 25,
                    }}
                    key={`text-3-${currentIndex}`}
                  >
                    <div className="bg-white max-w-[640px] sm:max-w-[840px] mt-8 md:-mt-2  sm:-ml-[160px] p-4 sm:p-6 rounded-b-3xl">
                      <p className="text-xl sm:text-3xl font-normal text-gray-700">
                        Împreună, dăm voce fiecărei ființe.
                      </p>
                    </div>
                  </motion.div>
                </>
              )}

              {index === 1 && (
                <>
                  {/* Second Slide Animations */}
                  <motion.div
                    className="absolute top-1/4 left-[14%] sm:left-1/3 transform -translate-x-1/2 text-white text-4xl sm:text-5xl font-bold text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    key={`text-1-${currentIndex}`}
                  >
                    Inovație în Acțiune
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 left-[6%] sm:left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl text-center max-w-[90%] sm:max-w-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    key={`text-2-${currentIndex}`}
                  >
                    <p className="bg-black bg-opacity-50 p-4 sm:p-6 rounded-lg">
                      Descoperă soluții revoluționare care transformă și
                      îmbunătățesc vieți.
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-1/4 left-[6%] sm:left-1/3 transform -translate-x-1/2 flex flex-wrap justify-center items-center space-x-4 sm:space-x-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    key={`text-3-${currentIndex}`}
                  >
                    {["Tehnologie", "Sustenabilitate", "Progres"].map(
                      (item, i) => (
                        <motion.div
                          key={i}
                          className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold text-sm sm:text-base"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.5 + i * 0.2, duration: 0.5 }}
                        >
                          {item}
                        </motion.div>
                      )
                    )}
                  </motion.div>
                </>
              )}

              {index === 2 && (
                <>
                  {/* Third Slide Animations */}
                  <motion.div
                    className="absolute top-1/4 left-[10%] sm:left-1/3 transform -translate-x-1/2 text-white text-4xl sm:text-5xl md:text-6xl font-extrabold text-center"
                    initial={{ opacity: 0, rotateX: 90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ delay: 0.5, duration: 1, type: "spring" }}
                    key={`text-1-${currentIndex}`}
                  >
                    Viitorul Este Acum
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 left-[50%] sm:left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center sm:text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    key={`text-2-${currentIndex}`}
                  >
                    {["Conectează", "Inovează", "Transformă"].map((item, i) => (
                      <motion.div
                        key={i}
                        className="text-white text-3xl sm:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + i * 0.3, duration: 0.5 }}
                      >
                        {item}
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="absolute bottom-1/4 left-[20%] sm:left-1/3 transform -translate-x-1/2 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-xl sm:text-2xl font-bold"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 2.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    key={`text-3-${currentIndex}`}
                  >
                    Alătură-te Revoluției
                  </motion.div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Prev and Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        &#10095;
      </button>
    </div>
  );
}
