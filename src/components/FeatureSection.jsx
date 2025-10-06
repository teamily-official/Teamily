import React from "react";

export default function FeatureSection() {
  const features = [
    {
      title: "Seamless Collaboration",
      desc: "Work together with ease and keep your projects organized.",
    },
    {
      title: "Smart Technology",
      desc: "AI-driven tools to optimize workflows and decision-making.",
    },
    {
      title: "Scalable Growth",
      desc: "From startups to enterprises, Teamily grows with you.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 ">
      {/* #151F5F to#3CAAE7  */}
      {/* #274990 */}
      <div className="max-w-7xl w-full mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-14 transition-transform duration-300 hover:scale-105">
          Why Choose Teamily ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-25 justify-items-center  ">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-bl from-[#3CAAE7] via-[#274990] to-[#151F5F]
                         text-white rounded-2xl shadow-xl  shadow-black
                         transform transition-all duration-300 hover:-translate-y-2
                         hover:shadow-2xl hover:border-white w-full sm:w-80 md:w-72 lg:w-80 xl:w-96 2xl:w-[22vw] cursor-pointer "
            >
              <h3 className="text-xl sm:text-2xl md:text-[1.4rem] font-semibold mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-white text-sm sm:text-base md:text-[1rem] text-center leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
