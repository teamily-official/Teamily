import { cn } from "../../lib/utils.js";
import React, { useEffect, useState } from "react";

export const LogoSection = ({
  items,
  direction = "left",
  speed = "",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      Array.from(scrollerRef.current.children).forEach((item) => {
        scrollerRef.current.appendChild(item.cloneNode(true));
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    const dur = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current?.style.setProperty("--animation-duration", dur);
  };

  return (
    <div style={{ background: "var(--c-bg)" }} className="py-6">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ background: "var(--c-hover-bg)", color: "var(--c-indigo)" }}
        >
          Tech Stack
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "var(--c-text-head)" }}>
          Our Development Stack
        </h2>
        <p className="mt-3 text-lg" style={{ color: "var(--c-text-body)" }}>
          Modern tools for modern solutions.
        </p>
      </div>

      {/* Marquee track */}
      <div
        ref={containerRef}
        className={cn("scroller relative z-20 max-w-full overflow-hidden", className)}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-5 py-4 px-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="relative shrink-0 flex flex-col items-center justify-center gap-3
                rounded-2xl px-8 py-5 transition-all duration-300 cursor-pointer group"
              style={{
                background: "var(--c-card)",
                border: "1px solid var(--c-border)",
                boxShadow: "var(--shadow-card)",
                minWidth: "160px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--c-indigo)";
                e.currentTarget.style.boxShadow = "var(--shadow-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--c-border)";
                e.currentTarget.style.boxShadow = "var(--shadow-card)";
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-12 w-auto object-contain"
              />
              <span className="text-xs font-medium" style={{ color: "var(--c-text-body)" }}>
                {item.alt}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
