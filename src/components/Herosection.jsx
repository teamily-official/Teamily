import { useEffect, useRef } from "react";
import { Renderer, Camera, Transform, Geometry, Program, Mesh } from "ogl";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Indigo Slate particle colors — soft, matching the new design system
const defaultColors = ["#4F6EF7", "#6B85F8", "#38BDF8", "#93C5FD", "#ffffff"];

const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  const int = parseInt(hex, 16);
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255];
};

const vertex = `
attribute vec3 position;
attribute vec4 random;
attribute vec3 color;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform float uSpread;
uniform float uBaseSize;
uniform float uSizeRandomness;
varying vec4 vRandom;
varying vec3 vColor;
void main() {
  vRandom = random;
  vColor = color;
  vec3 pos = position * uSpread;
  pos.z *= 10.0;
  vec4 mPos = vec4(pos, 1.0);
  float t = uTime;
  mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
  mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
  mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
  gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mPos.xyz);
  gl_Position = projectionMatrix * modelViewMatrix * mPos;
}
`;

const fragment = `
precision highp float;
uniform float uTime;
varying vec4 vRandom;
varying vec3 vColor;
void main() {
  vec2 uv = gl_PointCoord.xy;
  float d = length(uv - vec2(0.5));
  if(d > 0.5) discard;
  gl_FragColor = vec4(vColor + 0.15 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
}
`;

const content = {
  Heading: "Your Business Deserves Digital Solutions That Work as Hard as You Do",
  subHeading: "We design stunning, conversion-focused digital solutions that impress visitors and turn them into loyal customers.",
  button: "Get Started Today",
  micro: "From web and app development to ongoing maintenance, our expert team delivers solutions tailored for your business success.",
};

export default function HeroSection({ heading, subHeading }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    Object.assign(gl.canvas.style, {
      position: "absolute", top: 0, left: 0,
      width: "100%", height: "100%", zIndex: 0,
    });

    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, 20);
    const scene = new Transform();

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener("resize", resize);
    resize();

    const count = 220;
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 4);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      let x, y, z, len;
      do {
        x = Math.random() * 2 - 1; y = Math.random() * 2 - 1; z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);
      const r = Math.cbrt(Math.random());
      positions.set([x * r, y * r, z * r], i * 3);
      randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
      colors.set(hexToRgb(defaultColors[Math.floor(Math.random() * defaultColors.length)]), i * 3);
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors },
    });
    const program = new Program(gl, {
      vertex, fragment,
      uniforms: { uTime: { value: 0 }, uSpread: { value: 10 }, uBaseSize: { value: 110 }, uSizeRandomness: { value: 1 } },
      transparent: true, depthTest: false,
    });
    const particles = new Mesh(gl, { geometry, program, mode: gl.POINTS });
    particles.setParent(scene);

    let elapsed = 0, frameId;
    let isVisible = true;
    const update = () => {
      frameId = requestAnimationFrame(update);
      if (!isVisible) return;
      elapsed += 0.014;
      program.uniforms.uTime.value = elapsed;
      particles.rotation.y += 0.0012;
      renderer.render({ scene, camera });
    };
    update();

    const onVisibility = () => { isVisible = !document.hidden; };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(frameId);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
    };
  }, []);

  return (
    <div
      id="home"
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--grad-hero)" }}
    >
      {/* Radial indigo glow — subtle depth */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 60%, rgba(79,110,247,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-14 lg:px-24 z-10">

        {/* Tag pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 text-sm text-white/70"
          style={{ background: "rgba(79,110,247,0.18)" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#38BDF8" }}
          />
          IT &amp; Software Development Company
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[4.5rem] font-bold mb-5 leading-tight text-white"
        >
          {heading || content.Heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
          className="text-base sm:text-lg md:text-xl max-w-2xl mb-9 leading-relaxed"
          style={{ color: "#CBD5E1" }}
        >
          {subHeading || content.subHeading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 items-center"
        >
          <a
            href="https://forms.zohopublic.in/teamilyofficialzoho1/form/ContactUs/formperma/1P9DiLkxIiUgw_urpS6C7d8ATYzEZMINvxTIhXtN0r0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base"
          >
            {content.button}
          </a>
          <a
            href="#about"
            className="text-white/70 hover:text-white text-base font-medium flex items-center gap-2 transition-colors duration-200"
          >
            Learn more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.65 }}
          className="text-xs sm:text-sm mt-8 max-w-lg leading-relaxed"
          style={{ color: "#94A3B8" }}
        >
          {content.micro}
        </motion.p>
      </div>
    </div>
  );
}
