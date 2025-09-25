import React from "react";

export default function FeatureSection() {
  return (
    <div>
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl w-full mx-auto text-center">
          <h2 className="text-4xl font-bold text-navy mb-12">
            Why Choose Teamily?
          </h2>

          {/* Responsive grid with better gap & width control */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8
           xl:gap-10 2xl:gap-14 justify-items-center">
            {[
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
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-neutral rounded-xl shadow border border-black
       hover:shadow-lg hover:border-[#0080cb] hover:border transition
        hover:text-[#0080cb] w-full sm:w-[80%] md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[22vw]"
              >
                <h3 className="text-xl 2xl:text-[1.3vw] font-semibold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-dark 2xl:text-[1.1vw]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
