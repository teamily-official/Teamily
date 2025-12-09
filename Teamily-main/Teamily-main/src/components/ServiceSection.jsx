
import {
  FaMobileAlt,
  FaRocket,
  FaTools,
  FaCogs,
  FaShoppingCart,
  FaLaptopCode,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt className="text-white text-4xl mb-4" />,
    title: "App Development",
    description: `
We create cross-platform mobile applications that ensure a seamless user
experience, featuring intuitive UI, scalable performance, and robust functionality tailored to
your business needs.  
`,
  },
  {
    icon: <FaRocket className="text-white text-4xl mb-4" />,
    title: "Website Deployment",
    description: `We provide comprehensive web application development services, delivering
custom-built, responsive, and fast-loading websites designed to drive business growth and
enhance user experience.  
`,
  },
  {
    icon: <FaTools className="text-white text-4xl mb-4" />,
    title: "Website and App Maintenance",
    description: `
We provide reliable maintenance services for websites and apps, including
regular updates, bug fixes, performance optimization, and security enhancements to ensure
your digital solutions run smoothly and efficiently.  
`,
  },
  {
    icon: <FaCogs className="text-white text-4xl mb-4" />,
    title: "Optimization Management",
    description: `
We optimize websites for better speed and SEO.  
Faster websites improve customer experience.  
Our team manages load time and performance.  
We boost search engine rankings with techniques.  
Optimization helps grow traffic and conversions.  
`,
  },
  {
    icon: <FaShoppingCart className="text-white text-4xl mb-4" />,
    title: "Ecommerce Development",
    description: `
We build professional ecommerce platforms.  
Our stores are secure, fast, and easy to use.  
We integrate payment gateways and shipping tools.  
Ecommerce sites are designed for more sales.  
Grow your online business with our solutions.  
`,
  },
  {
    icon: <FaLaptopCode className="text-white text-4xl mb-4" />,
    title: "Web Designing & Development",
    description: `
We craft visually appealing and user-friendly designs for websites and apps,
ensuring a seamless user experience while maintaining consistent branding that reflects your
business identity.  
`,
  },
];

export function ServicesSection() {
  return (
    <div id="services" className="">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 transition-transform duration-300 hover:scale-105">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-600 via-blue-500 to-red-700
                       text-white p-6 rounded-2xl shadow-lg transform transition-all
                       duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
          >
            <div className="text-5xl mb-4 flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl sm:text-2xl md:text-[1.5rem] font-semibold mb-3 text-center">
              {service.title}
            </h3>
            <p className="text-[0.95rem] sm:text-[1rem] md:text-[1.05rem]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
