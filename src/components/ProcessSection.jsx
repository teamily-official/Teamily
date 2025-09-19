// src/components/ProcessSection.jsx
import React from "react";
import { FaSearch, FaRocket, FaPhoneAlt } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineReload } from "react-icons/ai";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export function ProcessSection() {
  const steps = [
    {
      icon: <MdAnalytics className="text-4xl text-white" />,
      title: "Analysis",
      direction: "left",
    },
    {
      icon: <FaSearch className="text-4xl text-white" />,
      title: "Search",
      direction: "right",
    },
    {
      icon: <BiCodeAlt className="text-4xl text-white" />,
      title: "Development",
      direction: "left",
    },
    {
      icon: <AiOutlineReload className="text-4xl text-white" />,
      title: "Implementation",
      direction: "right",
    },
    {
      icon: <FaRocket className="text-4xl text-white" />,
      title: "Delivery",
      direction: "left",
    },
    {
      icon: <FaPhoneAlt className="text-4xl text-white" />,
      title: "Support",
      direction: "right",
    },
  ];

  // Animation variants
  const itemVariants = {
    hiddenLeft: { opacity: 0, x: -200 }, // left se aur door
    hiddenRight: { opacity: 0, x: 200 }, // right se aur door
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-[#0080d3] text-black py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Tech-Savvy <span className="text-[#FFF]">Process</span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
          At Teamily, efficiency isn’t just a goal—it’s our standard. With a
          flexible, time-driven IT delivery process, we ensure seamless
          execution, hitting every deadline with precision while fueling
          innovation at every stage. In technology, timing isn’t just
          important—it defines success.
        </p>

        {/* Steps */}
        <div className="mt-16 flex flex-wrap justify-center gap-20 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center relative"
              initial={step.direction === "left" ? "hiddenLeft" : "hiddenRight"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={itemVariants}
            >
              {/* Circle */}
              <div
                className="w-24 h-24 flex items-center justify-center rounded-full border-2 
                border-dashed border-amber-50"
              >
                {step.icon}
              </div>
              <p className="mt-3 text-[#FFF] font-medium">{step.title}</p>

              {/* Dotted Line (except last) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-12 left-[100px] w-20
                   border-t-2 border-dashed border-amber-50"
                ></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
