"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

export function IndiaMap({ dots = [], lineColor = "#0ea5e9" }) {
  const svgRef = useRef(null);
  const { theme } = useTheme();

  // Projection for India (bounding box: lat 6–37, lng 68–97)
  const projectPoint = (lat, lng) => {
    const minLat = 6;
    const maxLat = 37;
    const minLng = 68;
    const maxLng = 97;

    const x = ((lng - minLng) / (maxLng - minLng)) * 800; // width of svg
    const y = ((maxLat - lat) / (maxLat - minLat)) * 400; // height of svg
    return { x, y };
  };

  // Create curved arc path
  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
      {/* Custom dotted background for India */}
      <svg
        viewBox="0 0 800 400"
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
      >
        {Array.from({ length: 40 }).map((_, row) =>
          Array.from({ length: 80 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 10}
              cy={row * 10}
              r="1"
              fill={theme === "dark" ? "#FFFFFF40" : "#00000040"}
            />
          ))
        )}
      </svg>

      {/* Overlay arcs and dots */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {/* Arcs */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <motion.path
              key={`path-${i}`}
              d={createCurvedPath(startPoint, endPoint)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1,
                delay: 0.5 * i,
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* Gradient for arcs */}
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Points */}
        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`points-${i}`}>
              {[start, end].map((point, j) => (
                <g key={j}>
                  <circle cx={point.x} cy={point.y} r="2" fill={lineColor} />
                  <circle cx={point.x} cy={point.y} r="2" fill={lineColor} opacity="0.5">
                    <animate
                      attributeName="r"
                      from="2"
                      to="8"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
