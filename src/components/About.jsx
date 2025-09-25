import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const contentData = [
  {
    title: "Your Success, Our Ultimate Goal",
    desc: "At Teamily, we believe every idea — whether big or small — has the potential to create lasting impact. Your growth fuels our passion, and with a focus on innovation, creativity, and quality, we deliver digital solutions that elevate your brand and drive real results.",
  },
  {
    title: "Masters of the Digital World",
    desc: "Fueled by creativity and powered by technology, our team crafts meaningful experiences that transform brand connections. From seamless collaboration to tailored strategies, we help businesses thrive in the ever-changing digital landscape.",
  },
  {
    title: "Turning Clicks into Brand Triumphs",
    desc: "Whether you’re a startup taking the first step or an enterprise scaling new heights, Teamily is your trusted partner. We’re not just about delivering services — we’re about building lasting partnerships and shaping the digital future together.",
  },
];

export function About() {
  const cardVariants = {
    hiddenDown: { opacity: 0, y: 100 },
    hiddenUp: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <h2
        className="text-3xl 2xl:text-[1.5vw] font-bold text-center text-[#000] mb-10 
               transition-transform duration-300 hover:scale-110"
      >
        About Us
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Video */}
        <div className="w-full flex justify-center">
          <motion.video
            src="https://www.w3schools.com/html/mov_bbb.mp4" // yaha apna about video dalna
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Right Side: Cards */}
        <div className="flex flex-col gap-6">
          {contentData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hiddenDown"
              whileInView="visible"
              exit="hiddenUp"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
