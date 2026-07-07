import React from "react";
import HeroSection from "./Herosection";
import { About } from "./About";
import FeatureSection from "./FeatureSection";
import { ProcessSection } from "../AcerternityComponents/ProcessSection";
import { ServiceSection } from "../AcerternityComponents/ServiceSection";
import FaqSection from "./FaqSection";
import { TestimonialSection } from "./TestimonialSection";
import { workflowSteps } from "../data/ProcessSection";
import { servicesContent } from "../data/ServiceData";
import { LogoSection } from "../AcerternityComponents/LogoSection";
import { logos } from "../data/LogoSection";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } };
const vpOnce = { once: true, amount: 0.1 };

export const LandingPage = () => {
  const navigate = useNavigate();
  const [siteContent, setSiteContent] = React.useState({
    heroHeading: "Your Business Deserves Digital Solutions That Work as Hard as You Do",
    heroSubHeading: "We design stunning, conversion-focused digital solutions that impress visitors and turn them into loyal customers.",
    servicesTitle: "Our Services",
    servicesSub: "Everything your business needs to thrive online."
  });

  React.useEffect(() => {
    const saved = localStorage.getItem("site_content");
    if (saved) setSiteContent(JSON.parse(saved));
  }, []);

  return (
    <div className="flex flex-col w-full" style={{ background: "var(--c-bg)" }}>
      {/* ── Hero — full screen, dark ──────────────── */}
      <HeroSection heading={siteContent.heroHeading} subHeading={siteContent.heroSubHeading} />

      {/* ── Services ──────────────────────────────── */}
      <m.section
        initial="hidden" whileInView="visible"
        variants={fadeUp} transition={{ duration: 0.5 }}
        viewport={vpOnce}
        style={{ background: "var(--c-bg)" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 text-center md:text-left">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ background: "var(--c-hover-bg)", color: "var(--c-indigo)" }}
            >
              What We Offer
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: "var(--c-text-head)" }}>
              {siteContent.servicesTitle}
            </h2>
            <p className="text-lg" style={{ color: "var(--c-text-body)" }}>
              {siteContent.servicesSub}
            </p>
          </div>
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            <button
              onClick={() => navigate("/services")}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 shadow-lg cursor-pointer hover:scale-102 hover:shadow-[#4F6EF7]/20"
              style={{ background: "linear-gradient(135deg, var(--c-indigo) 0%, var(--c-indigo-dark) 100%)" }}
            >
              View All Services
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
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

      {/* ── Testimonials ──────────────────────────── */}
      {/* <TestimonialSection />

      <div className="section-divider" /> */}

      {/* ── FAQ ───────────────────────────────────── */}
      <m.div
        initial="hidden" whileInView="visible"
        variants={fadeUp} transition={{ duration: 0.5 }}
        viewport={vpOnce}
      >
        <FaqSection />
      </m.div>
    </div>
  );
};
