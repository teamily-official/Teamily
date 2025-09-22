import React, { useState } from "react";

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
    // {
    //   src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
    //   alt: "TailwindCSS",
    // },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      alt: "Docker",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      alt: "CI/CD",
    },
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-white py-6 px-8">
      <div
        className={`flex items-center gap-12 ${
          isPaused ? "animate-none" : "animate-marquee"
        }`}
      >
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="h-24 w-auto object-contain transition-all duration-300 hover:scale-110 hover:brightness-0 hover:invert hover:sepia hover:saturate-200 hover:hue-rotate-180 hover:[filter:drop-shadow(0_0_0_#1976d2)] cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
