
import { FaSearch, FaRocket, FaPhoneAlt } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineReload } from "react-icons/ai";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export function ProcessSection() {
  const steps = [
    {
      icon: <MdAnalytics className="text-4xl md:text-5xl text-white" />,
      title: "Analysis",
    },
    {
      icon: <FaSearch className="text-4xl md:text-5xl text-white" />,
      title: "Search",
    },
    {
      icon: <BiCodeAlt className="text-4xl md:text-5xl text-white" />,
      title: "Development",
    },
    {
      icon: <AiOutlineReload className="text-4xl md:text-5xl text-white" />,
      title: "Implementation",
    },
    {
      icon: <FaRocket className="text-4xl md:text-5xl text-white" />,
      title: "Delivery",
    },
    {
      icon: <FaPhoneAlt className="text-4xl md:text-5xl text-white" />,
      title: "Support",
    },
  ];

  return (
    <section className="bg-[#0080d3] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Tech-Savvy <span className="text-[#00ffff]">Process</span>
        </h2>

        <div className="mt-16 flex flex-wrap justify-center gap-12 md:gap-20 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {/* Circle */}
              <svg className="w-20 h-20 md:w-24 md:h-24">
                <circle
                  cx="50%"
                  cy="50%"
                  r="46%"
                  stroke="#ffffff33"
                  strokeWidth="4"
                  fill="none"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="46%"
                  stroke="#00ffff"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="10 290"
                  animate={{ strokeDashoffset: [0, -300] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  style={{ filter: "drop-shadow(0 0 6px #00ffff)" }}
                />
              </svg>

              {/* Icon */}
              <div className="absolute inset-0 -top-8 flex items-center justify-center">
                {step.icon}
              </div>

              {/* Title */}
              <p className="mt-3 text-white text-sm md:text-base 2xl:text-[1.2vw] font-medium">
                {step.title}
              </p>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <svg
                  className="hidden md:block absolute top-10 left-[100px] w-20 h-1"
                  viewBox="0 0 80 4"
                  fill="none"
                >
                  <motion.line
                    x1="0"
                    y1="2"
                    x2="80"
                    y2="2"
                    stroke="#00ffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="8 8"
                    animate={{ strokeDashoffset: [16, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                    }}
                    style={{ filter: "drop-shadow(0 0 8px #00ffff)" }}
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
