import React from "react";

const aboutSections = [
  {
    title: "Cine suntem?",
    content:
      "Asociația noastră sprijină copiii cu dizabilități, oferindu-le acces la educație, terapie și resurse comunitare.",
  },
  {
    title: "Ce facem?",
    content:
      "Oferim consiliere, ateliere și suport practic pentru familii și copii, ajutându-i să depășească provocările cu încredere.",
  },
  {
    title: "Cine ne ajută?",
    content:
      "Echipa noastră este formată din profesioniști în psihologie, educație specială și terapie, alături de voluntari dedicați și parteneri strategici.",
  },
];

const About: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden mb-20">
      {/* Purple background with curved top */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 clip-top z-20 "></div>

      {/* Elemente animate în fundal */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-20 rounded-full animate-bounce z-20"></div>

      {/* Second animation */}
      <div className="absolute top-60 sm:top-10 right-10 w-32 h-32 bg-white opacity-20 rounded-full animate-bounce z-20"></div>

      {/* Hero Section */}
      <div className="relative max-w-4xl mx-auto text-center py-16 px-6 z-20">
        <h2 className="text-yellow-300 text-2xl uppercase font-medium mb-2">
          Despre Noi
        </h2>
        <h1 className="text-4xl font-bold mb-4">
          Află mai multe despre misiunea și activitatea noastră
        </h1>
        <p className="text-xl text-white opacity-90">
          Suntem dedicați să facem o diferență prin educație, sprijin și
          implicare activă în comunitate.
        </p>
      </div>

      {/* Secțiunile de informații */}
      <div className="relative bg-white py-12  rounded-t-3xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {aboutSections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 z-30 text-center shadow-xl hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <p className="text-gray-600 text-lg">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
