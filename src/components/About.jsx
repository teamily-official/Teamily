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
    desc: "Our team combines creativity with cutting-edge technology to craft seamless digital experiences. From tailored strategies to flawless execution, we ensure your brand stands out in today's fast-paced digital world.",
  },
  {
    title: "Building Partnerships, Shaping Futures",
    desc: "We go beyond delivering services — we build lasting partnerships. Whether you're a startup or an established business, Teamily is your trusted ally in navigating the digital landscape and achieving meaningful results.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative w-full py-24 px-5 sm:px-8 md:px-12 lg:px-20 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* Soft decorative blobs */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "var(--c-hover-bg)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "#E0F2FE" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "var(--c-hover-bg)", color: "var(--c-indigo)" }}
          >
            Our Story
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "var(--c-text-head)" }}>
            About Us
          </h2>
          <p className="mt-3 text-lg" style={{ color: "var(--c-text-body)" }}>
            Who we are and what drives us.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={AboutUsImage}
              alt="About Teamily — Our Team"
              loading="lazy"
              className="w-full h-auto rounded-3xl shadow-xl object-cover"
              style={{ border: "1px solid var(--c-border)" }}
            />
          </motion.div>

          {/* Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            {contentData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="card-base p-6 cursor-pointer"
              >
                {/* Mini accent bar */}
                <div
                  className="w-10 h-[3px] rounded-full mb-4"
                  style={{ background: "var(--grad-accent)" }}
                />
                <h3
                  className="text-lg sm:text-xl font-bold mb-2"
                  style={{ color: "var(--c-text-head)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--c-text-body)" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
