export default function FeatureSection() {
  const features = [
    {
      title: "Expertise You Can Trust",
      desc: "With years of experience and a skilled team, we deliver solutions that combine creativity, precision, and industry best practices to help your business succeed.",
    },
    {
      title: "Innovative Solutions",
      desc: "“We harness the latest technologies and creative strategies to provide forward-thinking solutions that keep your business ahead in a constantly evolving digital world.",
    },
    {
      title: "Client-Centric Approach",
      desc: "Your goals are our priority. From clear communication to timely delivery, we ensure every project is tailored to meet your unique needs and drive real results.",
    },
    
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl w-full mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-14 transition-transform duration-300 hover:scale-105">
          Why Choose Teamily?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-25 justify-items-center  ">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700
                         text-white rounded-2xl shadow-lg border border-transparent
                         transform transition-all duration-300 hover:-translate-y-2
                         hover:shadow-2xl hover:border-white w-full sm:w-80 md:w-72 lg:w-80 xl:w-96 2xl:w-[22vw]"
            >
              <h3 className="text-xl sm:text-2xl md:text-[1.4rem] font-semibold mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-white text-sm sm:text-base md:text-[1rem] text-center leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
