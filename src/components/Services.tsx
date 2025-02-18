import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const servicii = [
  {
    titlu: "Neurofeedback",
    descriere:
      "O metodă de antrenament cerebral care ajută la îmbunătățirea concentrării, gestionarea stresului și autoreglarea emoțională prin monitorizarea undelor cerebrale.",
    imagine: "./neurofeedback.jpg",
  },
  {
    titlu: "Terapie Comportamentală",
    descriere:
      "O abordare terapeutică ce vizează reducerea comportamentelor nefuncționale și îmbunătățirea celor deficitare.",
    imagine: "./comp.jpg",
  },
  {
    titlu: "Terapie Ocupațională",
    descriere:
      "Ajută persoanele să-și recâștige independența în activitățile zilnice, îmbunătățind abilitățile cognitive, fizice și motorii.",
    imagine: "./ocupa.jpg",
  },
  {
    titlu: "Terapie prin Joc",
    descriere:
      "Contribuie la dezvoltarea abilităților copiilor prin joacă și socializare, facilitând învățarea și comunicarea.",
    imagine: "./joc.jpg",
  },
  {
    titlu: "Kinetoterapie",
    descriere:
      "Dezvoltă abilitățile motrice și oferă stabilitate prin exerciții fizice adaptate nevoilor individuale.",
    imagine: "/kineto.jpg",
  },
  {
    titlu: "Logopedie",
    descriere:
      "Se concentrează pe restaurarea și stabilizarea limbajului, aplicând tehnici specifice pentru îmbunătățirea comunicării.",
    imagine: "/logop.jpg",
  },
];

export default function Servicii() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="bg-gray-100 py-12 relative">
      {/* Top curly wave */}
      <div className="absolute -top-8 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="w-full h-8"
        >
          <path
            d="M0,40 C150,40 200,0 400,0 C600,0 650,40 800,40 C950,40 1000,0 1200,0 L1200,40 L0,40 Z"
            fill="rgb(243 244 246)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-gray-900 text-center"
        >
          Serviciile Noastre
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-xl text-gray-600 text-center"
        >
          Oferim o gamă largă de terapii și servicii pentru a sprijini
          dezvoltarea și bunăstarea beneficiarilor noștri.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicii.map((serviciu) => (
            <motion.div
              key={serviciu.titlu}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <motion.img
                src={serviciu.imagine}
                alt={serviciu.titlu}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {serviciu.titlu}
                </h3>
                <p className="mt-4 text-gray-600">{serviciu.descriere}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom curly wave */}
      <div className="absolute -bottom-8 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="w-full h-8 rotate-180"
        >
          <path
            d="M0,40 C150,40 200,0 400,0 C600,0 650,40 800,40 C950,40 1000,0 1200,0 L1200,40 L0,40 Z"
            fill="rgb(243 244 246)"
          />
        </svg>
      </div>
    </div>
  );
}
