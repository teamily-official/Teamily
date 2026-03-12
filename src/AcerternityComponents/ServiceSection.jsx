import { cn } from "../../lib/utils";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

export const ServiceSection = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      id="services"
      className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8", className)}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link || idx}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Card>
            <CardImage>{item.image}</CardImage>
            <CardTitle>{item.title}</CardTitle>

            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex items-center justify-center p-6 rounded-3xl"
                style={{ background: "rgba(13,27,42,0.88)", backdropFilter: "blur(8px)" }}
              >
                <CardDescription>{item.description}</CardDescription>
              </motion.div>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 220, damping: 18 }}
    className={cn(
      "relative rounded-3xl h-72 w-full cursor-pointer overflow-hidden flex flex-col items-center justify-center text-center",
      className
    )}
    style={{
      background: "linear-gradient(145deg, #0D1B2A 0%, #162340 45%, #1e3058 100%)",
      border: "1px solid rgba(79,110,247,0.25)",
      boxShadow: "0 4px 24px rgba(13,27,42,0.25)",
    }}
  >
    {/* Subtle inner glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
      style={{
        background: "radial-gradient(circle at 50% 0%, rgba(79,110,247,0.15) 0%, transparent 60%)",
      }}
    />
    {children}
  </motion.div>
);

export const CardTitle = ({ className, children }) => (
  <h4
    className={cn("font-semibold tracking-wide text-base lg:text-lg mt-4 px-4", className)}
    style={{ color: "#E2E8F0" }}
  >
    {children}
  </h4>
);

export const CardDescription = ({ className, children }) => (
  <p
    className={cn("text-sm lg:text-base leading-relaxed text-center", className)}
    style={{ color: "#CBD5E1" }}
  >
    {children}
  </p>
);

export const CardImage = ({ children, className }) => (
  <div className="w-28 h-28 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-2xl"
    style={{ background: "rgba(79,110,247,0.12)", border: "1px solid rgba(79,110,247,0.2)" }}
  >
    <img
      src={children}
      alt="Service"
      loading="lazy"
      className={cn("w-full h-full object-cover transition-transform duration-300 group-hover:scale-110", className)}
    />
  </div>
);
