import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  // eslint-disable-next-line no-unused-vars
  motion,
} from "motion/react";
import { cn } from "../../lib/utils.js";

export const ProcessSection = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const segment = 1 / cardLength;
    setActiveCard(Math.min(Math.floor(latest / segment), cardLength - 1));
  });

  // Midnight navy — alternating slightly between two shades
  const backgroundColors = ["#0D1B2A", "#111f35", "#0D1B2A", "#111f35"];

  return (
    <div style={{ background: "var(--c-bg)" }} className="py-4">
      {/* Section heading */}
      <div className="text-center px-4 mb-2">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ background: "var(--c-hover-bg)", color: "var(--c-indigo)" }}
        >
          How We Work
        </div>
        <h2
          className="text-4xl sm:text-5xl font-bold"
          style={{ color: "var(--c-text-head)" }}
        >
          Our 6-Step Workflow
        </h2>
        <p className="mt-3 text-lg mb-10" style={{ color: "var(--c-text-body)" }}>
          A proven process from idea to delivery.
        </p>
      </div>

      <motion.div
        animate={{ backgroundColor: backgroundColors[activeCard % backgroundColors.length] }}
        transition={{ duration: 0.5 }}
        className="relative flex h-[40rem] justify-evenly overflow-y-auto rounded-2xl p-10 flex-col lg:flex-row mx-4 lg:mx-10"
        ref={ref}
      >
        {/* Step number indicator dots */}
        <div className="absolute top-5 left-0 right-0 flex justify-center gap-2 z-10">
          {content.map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: activeCard === i ? "var(--c-sky)" : "rgba(255,255,255,0.2)",
                transform: activeCard === i ? "scale(1.4)" : "scale(1)",
              }}
            />
          ))}
        </div>

        {/* Text column */}
        <div className="relative flex items-center justify-center lg:items-start lg:justify-start px-4 text-center lg:text-left hide-scrollbar">
          <div className="max-w-sm">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.span
                  animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                  className="text-4xl font-black"
                  style={{ color: "var(--c-sky)" }}
                >
                  0{item.id}
                </motion.span>
                <motion.h2
                  animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                  className="text-3xl font-bold text-white mt-1"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                  className="text-base mt-4 leading-relaxed"
                  style={{ color: "#94A3B8" }}
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-32" />
          </div>
        </div>

        {/* Sticky image */}
        <div className={cn("sticky top-4 max-h-max w-2xl overflow-hidden lg:block", contentClassName)}>
          <AnimatePresence mode="wait">
            <motion.img
              key={activeCard}
              src={content[activeCard].icon}
              alt={content[activeCard].title}
              loading="lazy"
              className="w-full h-full object-cover rounded-3xl"
              style={{ border: "1px solid rgba(79,110,247,0.2)" }}
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
