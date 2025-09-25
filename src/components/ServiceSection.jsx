import React from "react";
import {
  FaRobot,
  FaBrain,
  FaCloud,
  FaLock,
  FaChartLine,
  FaMobileAlt,
  FaRocket, // Deployment
  FaTools, // Website Maintenance
  FaCogs, // Optimization Management
  FaShoppingCart, // Ecommerce Development
  FaLaptopCode, // Web Designing & Development
} from "react-icons/fa";

const services = [
  //   {
  //     icon: <FaRobot className="text-white text-4xl mb-4" />,
  //     title: "AI Development",
  //     description: `
  // We design intelligent AI solutions that simplify business operations.
  // Our team creates smart algorithms that solve real problems.
  // AI helps automate tasks and reduces human errors.
  // We build AI tools that improve decision-making.
  // With our AI expertise, your business becomes future-ready.
  // `,
  //   },
  //   {
  //     icon: <FaBrain className="text-white text-4xl mb-4" />,
  //     title: "Machine Learning",
  //     description: `
  // We create machine learning systems that learn from your data.
  // ML helps your business predict outcomes and trends.
  // Our models can improve accuracy and efficiency in work.
  // We design solutions that adapt and grow over time.
  // With ML, businesses save time, money, and effort.
  // `,
  //   },
  //   {
  //     icon: <FaCloud className="text-white text-4xl mb-4" />,
  //     title: "Cloud Solutions",
  //     description: `
  // We build secure and scalable cloud environments.
  // Your business data stays safe and always available.
  // Our team helps you reduce IT costs with cloud adoption.
  // We provide storage, hosting, and backup solutions.
  // Cloud ensures flexibility to grow your business fast.
  // `,
  //   },
  //   {
  //     icon: <FaLock className="text-white text-4xl mb-4" />,
  //     title: "Cyber Security",
  //     description: `
  // We protect your business from digital threats.
  // Our experts secure websites, apps, and networks.
  // We provide firewall, encryption, and monitoring tools.
  // Cyber security ensures safe online transactions.
  // Stay worry-free with our 24/7 protection system.
  // `,
  //   },
  //   {
  //     icon: <FaChartLine className="text-white text-4xl mb-4" />,
  //     title: "Data Analytics",
  //     description: `
  // We turn your data into meaningful insights.
  // Analytics helps understand customer behavior.
  // Our reports improve decision-making and planning.
  // We design dashboards for real-time monitoring.
  // Data-driven strategy leads to business growth.
  // `,
  //   },
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
    <div className="bg-white py-12 px-6">
      <h2
        className="text-3xl 2xl:text-[1.5vw] font-bold text-center text-[#000] mb-10 
               transition-transform duration-300 hover:scale-110"
      >
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#0080d3] text-white p-6 rounded-2xl shadow-lg 
            transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl
             hover:border-2 hover:border-black "
          >
            {service.icon}
            <h3 className="text-xl 2xl:text-[1.3vw] font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-[1rem] 2xl:text-[1.1vw] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
