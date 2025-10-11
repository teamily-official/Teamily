import { cn } from "../../lib/utils";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

export const ServiceSection = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      id="services"
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12",
        className
      )}
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

            {/* Hover Description Overlay */}
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-3xl p-4 rounded-3xl"
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

export const Card = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={cn(
        "relative rounded-3xl h-72 w-full bg-gradient-to-br from-[#151F5F] via-[#274990] to-[#3CAAE7] shadow-xl cursor-pointer overflow-hidden flex flex-col items-center justify-center text-center",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-white font-semibold tracking-wide text-lg lg:text-xl mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "text-zinc-300 text-sm lg:text-base leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardImage = ({ children, className }) => {
  return (
    <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-2xl ">
      <img
        src={children}
        alt="ServiceSectionImages"
        className={cn(
          "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ",
          className
        )}
      />
    </div>
  );
};
