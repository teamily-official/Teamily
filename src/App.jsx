// src/App.jsx
import "./App.css";
import { Header } from "./components/Header";
import HeroSection from "./components/Herosection";
import { Footer } from "./components/Footer";
import FeatureSection from "./components/FeatureSection";
import { ProcessSection } from "./AcerternityComponents/ProcessSection";
// eslint-disable-next-line no-unused-vars
import { motion as m } from "framer-motion";
import { About } from "./components/About";
import { ServiceSection } from "./AcerternityComponents/ServiceSection";
import { workflowSteps } from "./data/ProcessSection";
import { servicesContent } from "./data/ServiceData";
import { LogoSection } from "./AcerternityComponents/LogoSection";
import { logos } from "./data/LogoSection";
import FaqSection from "./components/FaqSection";

// Shared fade-up animation — animate once for performance
const fadeUp = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } };
const vpOnce = { once: true, amount: 0.1 };

function App() {
  return (
    <div className="flex flex-col w-full" style={{ background: "var(--c-bg)" }}>

      {/* ── Sticky Header ─────────────────────────── */}
      <Header />

      {/* ── Hero — full screen, dark ──────────────── */}
      <HeroSection />

      {/* ── Services ──────────────────────────────── */}
      <m.section
        initial="hidden" whileInView="visible"
        variants={fadeUp} transition={{ duration: 0.5 }}
        viewport={vpOnce}
        style={{ background: "var(--c-bg)" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "var(--c-hover-bg)", color: "var(--c-indigo)" }}
          >
            What We Offer
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: "var(--c-text-head)" }}>
            Our Services
          </h2>
          <p className="text-lg mb-2" style={{ color: "var(--c-text-body)" }}>
            Everything your business needs to thrive online.
          </p>
        </div>
        <ServiceSection items={servicesContent} className="max-w-6xl mx-auto" />
      </m.section>

      <div className="section-divider" />

      {/* ── About ─────────────────────────────────── */}
      <m.div
        initial="hidden" whileInView="visible"
        variants={fadeUp} transition={{ duration: 0.5 }}
        viewport={vpOnce}
      >
        <About />
      </m.div>

      <div className="section-divider" />

      {/* ── Tech Stack Marquee ────────────────────── */}
      <m.div
        initial="hidden" whileInView="visible"
        variants={fadeUp} transition={{ duration: 0.5 }}
        viewport={vpOnce}
      >
        <LogoSection items={logos} />
      </m.div>

      <div className="section-divider" />

      {/* ── Why Choose Teamily ────────────────────── */}
      <m.div
        initial="hidden" whileInView="visible"
        variants={fadeUp} transition={{ duration: 0.5 }}
        viewport={vpOnce}
      >
        <FeatureSection />
      </m.div>

      <div className="section-divider" />

      {/* ── Workflow ──────────────────────────────── */}
      <m.div
        initial="hidden" whileInView="visible"
        variants={fadeUp} transition={{ duration: 0.5 }}
        viewport={vpOnce}
        className="py-4"
      >
        <ProcessSection content={workflowSteps} />
      </m.div>

      <div className="section-divider" />

      {/* ── FAQ ───────────────────────────────────── */}
      <m.div
        initial="hidden" whileInView="visible"
        variants={fadeUp} transition={{ duration: 0.5 }}
        viewport={vpOnce}
      >
        <FaqSection />
      </m.div>

      {/* ── Footer — dark, mirrors hero ───────────── */}
      <Footer />
    </div>
  );
}

export default App;
