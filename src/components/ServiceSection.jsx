import React from "react";
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
We build user-friendly mobile and web apps.  
Our apps are fast, secure, and scalable.  
We design apps that match your business goals.  
From idea to launch, we handle everything.  
Get modern apps that customers love to use.  
`,
  },
  {
    icon: <FaRocket className="text-white text-4xl mb-4" />,
    title: "Website Deployment",
    description: `
We ensure smooth software deployment for your business.  
Our experts make your app live without downtime.  
We handle server setup, testing, and configuration.  
Deployment is done with security and stability in mind.  
Your app goes from development to production easily.  
`,
  },
  {
    icon: <FaTools className="text-white text-4xl mb-4" />,
    title: "Website and App Maintenance",
    description: `
We keep your website updated and secure.  
Our team fixes bugs and performance issues.  
We provide regular backups and monitoring.  
Updates ensure your site stays modern and fast.  
Enjoy hassle-free website management with us.  
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
We design modern, responsive, and stylish websites.  
Our websites work on all devices and screens.  
We focus on user experience and creativity.  
Every design reflects your brand identity.  
Get websites that impress and engage customers.  
`,
  },
];

export function ServicesSection() {
  return (
    <div id="services" className="bg-gray-50 py-16 px-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 transition-transform duration-300 hover:scale-105">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700
                       text-white p-6 rounded-2xl shadow-lg transform transition-all
                       duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
          >
            <div className="text-5xl mb-4 flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl sm:text-2xl md:text-[1.5rem] font-semibold mb-3 text-center">
              {service.title}
            </h3>
            <p className="text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] leading-relaxed text-center whitespace-pre-line">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
