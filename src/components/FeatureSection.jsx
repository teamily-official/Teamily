export default function FeatureSection() {
  const features = [
    {
      icon: "🏆",
      label: "Excellence",
      title: "Expertise You Can Trust",
      desc: "With years of experience and a skilled team, we deliver solutions that combine creativity, precision, and industry best practices to help your business succeed.",
    },
    {
      icon: "💡",
      label: "Innovation",
      title: "Innovative Solutions",
      desc: "We harness the latest technologies and creative strategies to provide forward-thinking solutions that keep your business ahead in a constantly evolving digital world.",
    },
    {
      icon: "🤝",
      label: "Partnership",
      title: "Client-Centric Approach",
      desc: "Your goals are our priority. From clear communication to timely delivery, we ensure every project is tailored to meet your unique needs and drive real results.",
    },
  ];

  return (
    <section style={{ background: "var(--c-bg)" }} className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
          style={{ background: "var(--c-hover-bg)", color: "var(--c-indigo)" }}
        >
          Why Teamily
        </div>
        <h2
          className="text-4xl sm:text-5xl font-bold mb-3"
          style={{ color: "var(--c-text-head)" }}
        >
          Why Choose Teamily?
        </h2>
        <p className="text-lg mb-14" style={{ color: "var(--c-text-body)" }}>
          Built on trust, powered by innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="card-base p-8 text-left relative overflow-hidden group">
              {/* Top gradient accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px]"
                style={{ background: "var(--grad-accent)" }}
              />

              {/* Icon badge */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: "var(--c-hover-bg)" }}
              >
                {feature.icon}
              </div>

              {/* Label */}
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--c-indigo)" }}
              >
                {feature.label}
              </span>

              <h3
                className="text-xl font-bold mt-2 mb-3 transition-colors duration-300 group-hover:text-[var(--c-indigo)]"
                style={{ color: "var(--c-text-head)" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--c-text-body)" }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
