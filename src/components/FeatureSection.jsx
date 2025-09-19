import React from 'react'

export default function FeatureSection() {
  return (
    <div>
        <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-navy mb-12">
            Why Choose Teamily?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
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
                className="p-6 bg-neutral rounded-xl shadow hover:shadow-lg hover:border-[#0080cb] hover:border transition hover:text-[#0080cb]"
              >
                <h3 className="text-xl font-semibold text-navy mb-3 ">
                  {feature.title}
                </h3>
                <p className="text-dark">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
