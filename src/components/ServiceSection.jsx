import React from "react";
import {
  FaRobot,
  FaBrain,
  FaCloud,
  FaLock,
  FaChartLine,
  FaMobileAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaRobot className="text-white text-4xl mb-4" />,
    title: "AI Development",
    description:
      "We help automate businesses with AI, ML, and custom-tailored data-centric solutions to ensure digital success.",
  },
  {
    icon: <FaBrain className="text-white text-4xl mb-4" />,
    title: "Machine Learning",
    description:
      "We create ML systems that analyze and predict data while automating processes for business efficiency.",
  },
  {
    icon: <FaCloud className="text-white text-4xl mb-4" />,
    title: "Cloud Solutions",
    description:
      "Our cloud experts design scalable, secure, and reliable cloud infrastructure for your business needs.",
  },
  {
    icon: <FaLock className="text-white text-4xl mb-4" />,
    title: "Cyber Security",
    description:
      "We provide modern security solutions to protect your data and ensure safe digital transformation.",
  },
  {
    icon: <FaChartLine className="text-white text-4xl mb-4" />,
    title: "Data Analytics",
    description:
      "Our analytics services empower businesses with insights to make smart, data-driven decisions.",
  },
  {
    icon: <FaMobileAlt className="text-white text-4xl mb-4" />,
    title: "App Development",
    description:
      "We build scalable, user-friendly mobile and web apps tailored to your business goals.",
  },
];

export function ServicesSection() {
  return (
    <div className="bg-white py-12 px-6">
      <h2
        className="text-3xl font-bold text-center text-[#0080d3] mb-10 
               transition-transform duration-300 hover:scale-110"
      >
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#0080d3] text-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
