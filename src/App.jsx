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

function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col w-full">
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
          <ServicesSection />
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
          <LogosSection />
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
