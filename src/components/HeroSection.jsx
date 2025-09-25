import { useEffect, useRef } from "react";
import { Renderer, Camera, Transform, Geometry, Program, Mesh } from "ogl";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const defaultColors = ["#38BDF8", "#10B981", "#ffffff"];

const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3)
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  const int = parseInt(hex, 16);
  const r = ((int >> 16) & 255) / 255;
  const g = ((int >> 8) & 255) / 255;
  const b = (int & 255) / 255;
  return [r, g, b];
};

// Vertex Shader
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

// Fragment Shader
const fragment = `
precision highp float;
uniform float uTime;
varying vec4 vRandom;
varying vec3 vColor;

void main() {
  vec2 uv = gl_PointCoord.xy;
  float d = length(uv - vec2(0.5));
  if(d > 0.5) discard;
  gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
}
`;

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, 20);

    const scene = new Transform();

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener("resize", resize);
    resize();

    // Particle Data
    const count = 250;
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 4);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      let x, y, z, len;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);
      const r = Math.cbrt(Math.random());
      positions.set([x * r, y * r, z * r], i * 3);
      randoms.set(
        [Math.random(), Math.random(), Math.random(), Math.random()],
        i * 4
      );
      const col = hexToRgb(
        defaultColors[Math.floor(Math.random() * defaultColors.length)]
      );
      colors.set(col, i * 3);
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: 10 },
        uBaseSize: { value: 120 },
        uSizeRandomness: { value: 1 },
      },
      transparent: true,
      depthTest: false,
    });

    const particles = new Mesh(gl, { geometry, program, mode: gl.POINTS });
    particles.setParent(scene);

    let elapsed = 0;
    let frameId;
    const update = () => {
      frameId = requestAnimationFrame(update);
      elapsed += 0.016;
      program.uniforms.uTime.value = elapsed;
      particles.rotation.y += 0.0015;
      renderer.render({ scene, camera });
    };
    update();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[90vh] xl:h-screen 2xl:h-screen 
             bg-[#001f3f] text-white flex items-center justify-center overflow-hidden"
      // 👆 overflow-hidden पहले से लगा है (कोई extra scroll नहीं आएगा)
    >
      <div className="absolute inset-0 pointer-events-none"></div>
      {/* 👆 अब अंदर का canvas pointer events नहीं लेगा */}

      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center 
                    px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 
                   font-bold mb-6 cursor-pointer leading-tight"
        >
          Your Vision, Our Technology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 
                   text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl mb-8 cursor-pointer leading-relaxed"
        >
          Collaborate smarter, grow faster, and achieve more together with
          Teamily’s modern platform.
        </motion.p>
      </div>
    </div>
  );
}
