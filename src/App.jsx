// src/App.jsx
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import { LogosSection } from "./components/LogosSection";
import { ProcessSection } from "./components/ProcessSection";
import { ServicesSection } from "./components/ServiceSection";
// eslint-disable-next-line no-unused-vars
import { motion as m } from "framer-motion";
// import SplashCursor from "./reusable/SplashCursor";
import { About } from "./components/About";
import { CardDescription, HoverEffect } from "./AcerternityComponents/CardHoverEffect";

import {
  FaMobileAlt,
  FaRocket,
  FaTools,
  FaCogs,
  FaShoppingCart,
  FaLaptopCode,
} from "react-icons/fa";
import { servicesContent } from "./data/ServiceData";
import { LogoSection } from "./AcerternityComponents/LogoSection";
import { logos } from "./data/LogoSection";




function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col w-full ">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main>
        {/* Hero Section */}
        <m.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <HeroSection />
        </m.div>

        {/* Services Section */}
        <m.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          {/* <ServicesSection /> */}
      <div className="bg-gray-50 py-16 px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 transition-transform duration-300 hover:scale-105">
        Our Services
      </h2>
            <HoverEffect items={servicesContent}/>
      </div>
        </m.div>

        {/* About Section */}
        <m.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <About />
        </m.div>

        {/* Logos Section */}
        <m.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <LogoSection items={logos}/>
          
        </m.div>


        {/* Feature Section */}
        <m.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <FeatureSection />
        </m.div>

        {/* Process Section */}
        <m.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: false }}
        >
          <ProcessSection />
        </m.div>
      </main>

      {/* Footer */}
      <m.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <Footer />
      </m.div>
      {/* <SplashCursor /> */}
    </div>
  );
}

export default App;
