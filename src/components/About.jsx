// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AboutUsImage from "../assets/AboutUsImages/AboutUs.png";
const contentData = [
  {
    title: "Empowering Ideas, Driving Growth",
    desc: "At Teamily, we transform innovative ideas into impactful digital solutions. Every project we undertake is fueled by creativity, quality, and a commitment to help your business achieve tangible growth and lasting success.",
  },
  {
    title: "Experts in Digital Innovation",
    desc: "Our team combines creativity with cutting-edge technology to craft seamless digital experiences. From tailored strategies to flawless execution, we ensure your brand stands out in today’s fast-paced digital world.",
  },
  {
    title: "Building Partnerships, Shaping Futures",
    desc: "We go beyond delivering services — we build lasting partnerships. Whether you’re a startup or an established business, Teamily is your trusted ally in navigating the digital landscape and achieving meaningful results.",
  },
];

export function About() {
  const cardVariants = {
    hiddenDown: { opacity: 0, y: 100 },
    hiddenUp: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="relative w-full py-16 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden bg-gray-50"
    >
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 opacity-20 blur-3xl"
        animate={{ x: [0, 40, -40, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-700 via-blue-800 to-blue-900 opacity-20 blur-3xl"
        animate={{ x: [0, -50, 50, 0], y: [0, -40, 40, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-2xl"
        animate={{ scale: [1, 1.2, 1, 0.8, 1] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />

      {/* Section Title */}
      <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 transition-transform duration-300 hover:scale-105">
        About Us
      </h2>

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Top: Image (hidden on tablet) */}
        <div className="w-full rounded-3xl shadow-3xl ">
          <motion.img
            src={AboutUsImage}
            alt="AboutUs Image"
            className="w-full rounded-3xl shadow-blue-300 shadow-xl h-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Bottom: Cards */}
        <div className="w-full flex flex-col gap-6">
          {contentData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hiddenDown"
              whileInView="visible"
              exit="hiddenUp"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:border-blue-500
                   transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-blue-200 cursor-pointer"
            >
              <h3 className="text-xl sm:text-2xl md:text-[1.5rem] font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-[1rem] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
