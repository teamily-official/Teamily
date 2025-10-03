
import { cn } from "../../lib/utils.js";
import React, { useEffect, useState } from "react";

export const LogoSection = ({
  items,
  direction = "left",
  speed = "",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (

    <div className="">
<h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 transition-transform duration-300 hover:scale-105 my-10 py-15">
        Our Development Stack
      </h1>
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full overflow-hidden my-3 backdrop-blur-3xl bg-blue-200/20",
        className
      )}>
        
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 ",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <img
          src={item.src}
            className=" relative w-full h-46  shrink-0 rounded-2xl  bg-white px-8 py-6 md:w-[350px] cursor-pointer  shadow-lg shadow-blue-300 "
            key={idx}  > 
          </img>
        ))}
      </ul>
    </div>
    </div>

  );
};
