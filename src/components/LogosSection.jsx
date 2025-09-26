import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export function LogosSection() {
  const [isPaused, setIsPaused] = useState(false);

  const logos = [
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      alt: "React",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      alt: "Next.js",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      alt: "MySQL",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      alt: "Git",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      alt: "Docker",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      alt: "CI/CD",
    },
  ];

  const scrollingLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 py-8 overflow-hidden">
      <motion.div
        className="flex items-center gap-12"
        animate={{ x: isPaused ? 0 : ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          },
        }}
      >
        {scrollingLogos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo.src}
            alt={logo.alt}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="h-16 sm:h-20 md:h-24 w-auto object-contain cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </section>
  );
}
