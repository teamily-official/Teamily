// All Files data is here

import AppDevelopmentImage from "../assets/ServiceImages/AppDevelopmentImage.png";
import EcommerceDevelopmentImage from "../assets/ServiceImages/EcommerceDevelopmentImage.png";
import OptimizationManagementImage from "../assets/ServiceImages/OptimizationManagementImage.png";
import WebDesignDevelopmentImage from "../assets/ServiceImages/WebDesignDevelopmentImage.png";
import WebsiteAppMaintenanceImage from "../assets/ServiceImages/WebsiteAppMaintenanceImage.png";
import WebsiteDeploymentImage from "../assets/ServiceImages/WebsiteDeploymentImage.png";

// Service File Data
export const servicesContent = [
  {
    image: AppDevelopmentImage,
    title: "App Development",
    description: `
We create cross-platform mobile applications that ensure a seamless user
experience, featuring intuitive UI, scalable performance, and robust functionality tailored to
your business needs.
`,
    benefits: "Expand your reach and drive customer engagement with high-performance, custom-built mobile products.",
    features: [
      "Cross-platform iOS & Android development",
      "Highly intuitive UI/UX design & smooth gestures",
      "Offline capabilities, caching & secure local storage",
      "Integration with secure REST APIs & cloud databases"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js"]
  },
  {
    image: WebsiteDeploymentImage,
    title: "Website Deployment",
    description: `
We provide comprehensive web application development services, delivering
custom-built, responsive, and fast-loading websites designed to drive business growth and
enhance user experience.  
`,
    benefits: "Deliver a seamless, high-speed experience that drives conversions, establishes credibility, and builds user trust.",
    features: [
      "Responsive custom web applications (SPA / SSR)",
      "SEO-friendly semantic HTML markup & structured schema",
      "Blazing-fast load times & Core Web Vitals optimization",
      "Modern headless CMS & database integrations"
    ],
    technologies: ["ReactJS", "Next.js", "Vite", "Tailwind CSS", "TypeScript", "Vercel"]
  },
  {
    image: WebsiteAppMaintenanceImage,
    title: "Website & App Maintenance",
    description: `
We provide reliable maintenance services for websites and apps, including
regular updates, bug fixes, performance optimization, and security enhancements to ensure
your digital solutions run smoothly and efficiently.  
`,
    benefits: "Keep your digital products secure, modern, and running continuously without any costly business interruptions.",
    features: [
      "24/7 uptime monitoring & alert configuration",
      "Regular dependency, framework & security updates",
      "Proactive bug resolution & performance health checks",
      "Automated cloud backups & disaster recovery planning"
    ],
    technologies: ["Git / GitHub Actions", "Docker", "Sentry", "AWS CloudWatch", "PM2"]
  },
  {
    image: OptimizationManagementImage,
    title: "Web Optimization",
    description: `
We optimize your website for speed, responsiveness, and conversions,
ensuring a seamless experience for users and maximizing your business results.
`,
    benefits: "Rank higher on search engines and keep users engaged, reducing bounce rates and maximizing customer conversion rates.",
    features: [
      "Google PageSpeed Insights & Lighthouse optimization",
      "Advanced image compression & dynamic asset lazy loading",
      "Code splitting, bundle minification & server-side tweaks",
      "UX/UI micro-adjustments for friction-free conversion funnels"
    ],
    technologies: ["Lighthouse", "Web Vitals", "Gzip / Brotli", "CDN (Cloudflare)", "Google Search Console"]
  },
  {
    image: EcommerceDevelopmentImage,
    title: "Digital Marketing",
    description: `
We craft comprehensive digital marketing strategies to promote your brand,
engage your audience, and drive measurable growth across multiple online channels.  
`,
    benefits: "Grow your online presence, attract high-quality leads, and increase customer lifetime value through targeted marketing campaigns.",
    features: [
      "Comprehensive Search Engine Optimization (SEO)",
      "Social Media Management & dynamic brand campaigns",
      "PPC Advertising & retargeting (Google & Meta Ads)",
      "Advanced Web Analytics, reporting & pixel setup"
    ],
    technologies: ["Google Analytics 4", "Meta Pixel", "Google Ads", "SEMrush", "Hotjar"]
  },
  {
    image: WebDesignDevelopmentImage,
    title: "Web & App Designing",
    description: `
We craft visually appealing and user-friendly designs for websites and apps,
ensuring a seamless user experience while maintaining consistent branding that reflects your
business identity. 
`,
    benefits: "Create a memorable first impression with high-end, intuitive visual design systems that delight users.",
    features: [
      "Figma wireframing & high-fidelity prototyping",
      "In-depth user journey mapping & UX interaction research",
      "Consistent design systems & branding style guides",
      "Modern animations, typography & custom iconography"
    ],
    technologies: ["Figma", "Adobe Illustrator", "Framer", "CSS Variables", "Tailwind CSS"]
  },
];
