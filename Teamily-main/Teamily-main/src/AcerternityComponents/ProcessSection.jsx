import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
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
    offset: ["start start", "end end"], // span full scroll of container
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const segment = 1 / cardLength;
    const index = Math.min(Math.floor(latest / segment), cardLength - 1);
    setActiveCard(index);
  });

  const backgroundColors = ["#274990", "#151F5F", "#274990", "#151F5F"];

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div>
      <h2 className="text-4xl text-center sm:text-5xl font-bold text-gray-900 my-12 transition-transform duration-300 hover:scale-105">
        Our 6-Step Workflow
      </h2>

      <motion.div
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="relative flex h-[40rem] justify-evenly space-x-10 overflow-y-auto rounded p-12 flex-col lg:flex-row"
        ref={ref}
      >
        {/* Text Section */}
        <div className="relative flex items-center justify-center lg:items-start lg:justify-start px-4 text-center lg:text-left  hide-scrollbar scroll-smooth">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-3xl max-w-sm text-slate-300"
                >
                  {item.id}.
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-3xl font-bold text-slate-100 inline px-2"
                >
                  {item.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-kg mt-10 max-w-sm text-slate-300 mx-auto lg:mx-0"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>

        <div
          className={cn(
            "sticky top-1 max-h-max w-2xl overflow-hidden  lg:block",
            contentClassName
          )}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeCard}
              src={content[activeCard].icon}
              alt={content[activeCard].title}
              className="w-full h-full object-cover rounded-4xl"
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0.8, x: 80, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
            />
          </AnimatePresence>

          {content[activeCard].content && (
            <div className="absolute bottom-2 left-2 p-2 bg-white bg-opacity-70 rounded">
              {content[activeCard].content}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
