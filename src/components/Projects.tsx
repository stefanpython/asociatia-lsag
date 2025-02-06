import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    titlu: "Muzică și Ritm",
    descriere:
      "Copiii explorează lumea sunetelor prin diverse instrumente muzicale, dezvoltând coordonarea și creativitatea.",
    imagine: "/projects/muzica.jpg",
  },
  {
    titlu: "Exerciții Fizice",
    descriere:
      "Un program activ ce îmbunătățește sănătatea și motricitatea prin jocuri și exerciții fizice adaptate.",
    imagine: "/projects/exercitii.jpg",
  },
  {
    titlu: "Ateliere de Creativitate",
    descriere:
      "Activități artistice și de bricolaj care stimulează imaginația și încrederea în sine.",
    imagine: "/projects/arte.jpg",
  },
  {
    titlu: "Socializare și Jocuri de Grup",
    descriere:
      "Copiii învață să interacționeze și să colaboreze prin activități de echipă și jocuri interactive.",
    imagine: "/projects/socializare.jpg",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="bg-[#2e76b0] py-20 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white"
        >
          Proiectele Noastre
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-xl text-white"
        >
          Inițiative menite să îmbunătățească viața beneficiarilor noștri prin
          activități educative și recreative.
        </motion.p>
      </div>

      <div className="mt-12 overflow-x-auto flex justify-center text-center scrollbar-hide">
        <motion.div
          className="flex gap-8 px-6"
          initial={{ x: "-100vw" }}
          animate={inView ? { x: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {projects.map((proiect, index) => (
            <motion.div
              key={proiect.titlu}
              initial={{ rotateY: 180, opacity: 0 }}
              animate={inView ? { rotateY: 0, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
              }}
              className="w-80 flex-shrink-0 bg-[#82a6c5] rounded-xl shadow-xl overflow-hidden transform transition-all duration-500"
            >
              <div className="h-52 overflow-hidden">
                <motion.img
                  src={proiect.imagine}
                  alt={proiect.titlu}
                  className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="p-6 text-black">
                <h3 className="text-xl font-semibold">{proiect.titlu}</h3>
                <p className="mt-3 text-gray-900">{proiect.descriere}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
