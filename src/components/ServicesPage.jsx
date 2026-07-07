import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  Smartphone, 
  Globe, 
  Wrench, 
  Zap, 
  Megaphone, 
  Palette, 
  ArrowRight, 
  HelpCircle,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { servicesContent } from "../data/ServiceData";

// Slugify helper
export const slugify = (text) => 
  text.toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

// Map service titles to Lucide icons
const iconMap = {
  "App Development": Smartphone,
  "Website Deployment": Globe,
  "Website & App Maintenance": Wrench,
  "Web Optimization": Zap,
  "Digital Marketing": Megaphone,
  "Web & App Designing": Palette,
};

export function ServicesPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find active service based on slug, default to first service
  const activeService = servicesContent.find(
    (s) => slugify(s.title) === slug
  ) || servicesContent[0];

  // Scroll to top when page loaded or active service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const ActiveIcon = iconMap[activeService.title] || HelpCircle;

  const handleTabClick = (title) => {
    navigate(`/services/${slugify(title)}`);
  };

  return (
    <main className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 w-full" style={{ background: "var(--c-bg)" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center md:text-left mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ background: "var(--c-hover-bg)", color: "var(--c-indigo)" }}
          >
            <Sparkles size={12} /> Tech Solutions Guide
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3" style={{ color: "var(--c-text-head)" }}>
            Our Services &amp; Tech Stack
          </h1>
          <p className="text-base sm:text-lg max-w-2xl" style={{ color: "var(--c-text-body)" }}>
            Explore our comprehensive range of services, core deliverables, business impacts, and the modern technologies we use to build them.
          </p>
        </div>

        {/* Desktop Split Layout & Mobile Stacked Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Navigation Sidebar / Mobile Horizontal Tabs */}
          <nav className="w-full lg:w-80 flex-shrink-0 bg-white border border-slate-200 rounded-3xl p-3 md:p-4 shadow-sm flex flex-col gap-1">
            <div className="px-3 py-2 border-b border-slate-100 hidden lg:block mb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Explore Solutions</span>
            </div>
            
            {/* Scrollable Tabs */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto hide-scrollbar gap-2 w-full">
              {servicesContent.map((service, index) => {
                const Icon = iconMap[service.title] || HelpCircle;
                const isActive = activeService.title === service.title;
                return (
                  <button
                    key={index}
                    onClick={() => handleTabClick(service.title)}
                    className={`flex items-center justify-between gap-3 px-4 py-3 rounded-2xl text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300 group flex-shrink-0 cursor-pointer w-auto lg:w-full ${
                      isActive 
                        ? "bg-[#4F6EF7] text-white shadow-md shadow-[#4F6EF7]/20" 
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-xl flex-shrink-0 transition-colors duration-200 ${
                        isActive ? "bg-white/20 text-white" : "bg-slate-100 text-[#4F6EF7] group-hover:bg-[#4F6EF7]/10"
                      }`}>
                        <Icon size={16} />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold tracking-wide">{service.title}</span>
                    </div>
                    <ChevronRight size={14} className={`hidden lg:block transition-transform duration-200 ${
                      isActive ? "translate-x-0.5 text-white" : "opacity-0 group-hover:opacity-100 text-slate-400 group-hover:translate-x-0.5"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Consultation Banner in Sidebar */}
            <div className="mt-4 p-4 rounded-2xl bg-[#0D1B2A] text-white hidden lg:block border border-white/5">
              <span className="text-[10px] text-[#38BDF8] font-bold uppercase tracking-wider block mb-1">Tailored Package</span>
              <p className="text-xs text-slate-300 leading-normal mb-3">Need a custom feature set or a dedicated development team?</p>
              <button 
                onClick={() => window.open("https://forms.zohopublic.in/teamilyofficialzoho1/form/ContactUs/formperma/1P9DiLkxIiUgw_urpS6C7d8ATYzEZMINvxTIhXtN0r0", "_blank")}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold text-white bg-[#4F6EF7] hover:bg-[#4338CA] transition-all duration-300 shadow-sm cursor-pointer"
              >
                Consult Our Team
                <ArrowRight size={12} />
              </button>
            </div>
          </nav>

          {/* Right Main Details Card */}
          <div className="flex-1 w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col justify-between min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Header with Title and Big Icon */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-slate-100 pb-6">
                  <div className="p-4 rounded-2xl flex-shrink-0 self-start sm:self-center" style={{ background: "var(--c-hover-bg)", border: "1px solid rgba(79, 110, 247, 0.15)" }}>
                    <ActiveIcon className="text-[#4F6EF7] w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#4F6EF7] uppercase mb-1 block">Selected Service</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 leading-tight">{activeService.title}</h2>
                  </div>
                </div>

                {/* Main Description */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Description</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                    {activeService.description.trim()}
                  </p>
                </div>

                {/* Business Value Highlight Box */}
                {activeService.benefits && (
                  <div className="p-4 rounded-2xl border border-[#4F6EF7]/15 flex items-start gap-3 bg-gradient-to-r from-[#4F6EF7]/5 via-[#38BDF8]/5 to-transparent">
                    <div className="mt-0.5 text-[#4F6EF7]">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F6EF7] block mb-0.5">Business Impact</span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">{activeService.benefits}</p>
                    </div>
                  </div>
                )}

                {/* Grid for Features Checklist and Tech Stack */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  {/* Features list */}
                  {activeService.features && (
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Deliverables</h4>
                      <ul className="space-y-3">
                        {activeService.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-medium">
                            <span className="p-0.5 rounded bg-emerald-50 text-emerald-600 flex-shrink-0 mt-0.5 border border-emerald-200">
                              <Check size={12} strokeWidth={3} />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack section */}
                  {activeService.technologies && (
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Technologies &amp; Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeService.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 border border-slate-200 transition-all duration-300 hover:border-[#4F6EF7] hover:bg-[#4F6EF7]/5 cursor-default"
                            style={{ background: "#F8FAFC" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Actions Panel */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src={activeService.image} 
                  alt={activeService.title} 
                  className="w-12 h-12 object-cover rounded-xl border border-slate-200 hidden sm:block shadow-sm" 
                />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Ready to launch?</span>
                  <span className="text-xs font-bold text-slate-800">Let's build your custom {activeService.title} solution.</span>
                </div>
              </div>
              <button
                onClick={() => window.open("https://forms.zohopublic.in/teamilyofficialzoho1/form/ContactUs/formperma/1P9DiLkxIiUgw_urpS6C7d8ATYzEZMINvxTIhXtN0r0", "_blank")}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#4F6EF7] hover:bg-[#4338CA] transition-all duration-300 shadow-md shadow-[#4F6EF7]/20 flex items-center justify-center gap-2 group cursor-pointer"
              >
                Inquire About Service
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
