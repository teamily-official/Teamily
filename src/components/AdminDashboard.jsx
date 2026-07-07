import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, ShieldCheck, LogOut, MessageSquare, LayoutDashboard, Save, Home, Settings } from "lucide-react";

export const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("testimonials");
  const [password, setPassword] = useState("");
  const [testimonials, setTestimonials] = useState([]);
  
  // Site Content State
  const [siteContent, setSiteContent] = useState({
    heroHeading: "Your Business Deserves Digital Solutions That Work as Hard as You Do",
    heroSubHeading: "We design stunning, conversion-focused digital solutions that impress visitors and turn them into loyal customers.",
    servicesTitle: "Our Services",
    servicesSub: "Everything your business needs to thrive online."
  });

  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "true") {
      setIsAuthenticated(true);
    }
    loadTestimonials();
    loadSiteContent();
  }, []);

  const loadTestimonials = async () => {
    try {
      const response = await fetch("/testimonials.json");
      const initialData = await response.json();
      const localData = JSON.parse(localStorage.getItem("custom_testimonials") || "[]");
      setTestimonials([...initialData, ...localData]);
    } catch (error) {
      console.error("Error loading testimonials:", error);
    }
  };

  const loadSiteContent = () => {
    const savedContent = localStorage.getItem("site_content");
    if (savedContent) {
      setSiteContent(JSON.parse(savedContent));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "Admin@123") {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
    } else {
      alert("Invalid Password!");
    }
  };

  const handleDeleteTestimonial = (id) => {
    if (window.confirm("Delete this testimonial?")) {
      const localData = JSON.parse(localStorage.getItem("custom_testimonials") || "[]");
      const filtered = localData.filter(item => item.id !== id);
      localStorage.setItem("custom_testimonials", JSON.stringify(filtered));
      loadTestimonials();
    }
  };

  const handleSaveContent = (e) => {
    e.preventDefault();
    localStorage.setItem("site_content", JSON.stringify(siteContent));
    alert("Site content updated successfully!");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_auth");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 font-sans">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-slate-100">
          <div className="flex justify-center mb-6 text-indigo-600"><ShieldCheck size={48} /></div>
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" required />
            <button type="submit" className="btn-primary w-full py-4">Login</button>
          </form>
          <p className="text-center mt-6 text-xs text-slate-400">Password: Admin@123</p>
        </motion.div>
      </div>
    );
  }

  const menuItems = [
    { id: "testimonials", label: "Testimonials", icon: <MessageSquare size={20} /> },
    { id: "content", label: "Site Content", icon: <LayoutDashboard size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col sticky top-0 h-screen z-50">
        <div className="p-8 flex items-center gap-3 border-b border-slate-50">
          <div className="bg-indigo-600 p-2 rounded-lg text-white">
            <ShieldCheck size={20} />
          </div>
          <h1 className="text-lg font-bold tracking-tight">Teamily</h1>
        </div>

        <nav className="flex-grow p-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === item.id 
                ? "bg-indigo-50 text-indigo-600 shadow-sm" 
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-50 space-y-2">
          <a href="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all">
            <Home size={20} />
            View Website
          </a>
          <button 
            onClick={handleLogout} 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-400 hover:bg-red-50 hover:text-red-600 transition-all"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-10 overflow-y-auto">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            {activeTab === "testimonials" ? (
              <motion.div key="testimonials" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="mb-10">
                  <h2 className="text-4xl font-bold text-slate-800 tracking-tight">Testimonials</h2>
                  <p className="text-slate-500 mt-2">Manage customer reviews and feedback displayed on your site.</p>
                </div>
                
                <div className="grid gap-4">
                  {testimonials.map((item) => (
                    <motion.div 
                      key={item.id} 
                      className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-6 group hover:border-indigo-100 hover:shadow-xl transition-all"
                    >
                      <img src={item.image} alt="" className="w-14 h-14 rounded-full bg-slate-100 p-1 border border-slate-100" />
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-bold text-slate-800 text-lg">{item.name}</h4>
                          <span className="text-[10px] px-2 py-1 bg-slate-100 text-slate-500 rounded-md font-bold uppercase tracking-widest">{item.role}</span>
                        </div>
                        <p className="text-slate-600 italic line-clamp-1">"{item.content}"</p>
                      </div>
                      <button 
                        onClick={() => handleDeleteTestimonial(item.id)} 
                        disabled={item.id < 100} 
                        className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                      >
                        <Trash2 size={20} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="mb-10">
                  <h2 className="text-4xl font-bold text-slate-800 tracking-tight">Site Content</h2>
                  <p className="text-slate-500 mt-2">Update global text and headings without touching the code.</p>
                </div>
                
                <form onSubmit={handleSaveContent} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm space-y-10">
                  <div className="space-y-8">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Hero Main Heading</label>
                      <textarea 
                        value={siteContent.heroHeading} 
                        onChange={(e) => setSiteContent({...siteContent, heroHeading: e.target.value})}
                        className="w-full p-5 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-medium text-slate-800" 
                        rows="2" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Hero Subheading</label>
                      <textarea 
                        value={siteContent.heroSubHeading} 
                        onChange={(e) => setSiteContent({...siteContent, heroSubHeading: e.target.value})}
                        className="w-full p-5 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-medium text-slate-800" 
                        rows="3" 
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8 pt-4 border-t border-slate-50">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Services Section Title</label>
                        <input 
                          type="text" 
                          value={siteContent.servicesTitle} 
                          onChange={(e) => setSiteContent({...siteContent, servicesTitle: e.target.value})}
                          className="w-full p-5 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-medium text-slate-800" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Services Sub-description</label>
                        <input 
                          type="text" 
                          value={siteContent.servicesSub} 
                          onChange={(e) => setSiteContent({...siteContent, servicesSub: e.target.value})}
                          className="w-full p-5 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-medium text-slate-800" 
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn-primary flex items-center justify-center gap-3 px-12 py-5 text-lg font-bold shadow-indigo-200">
                    <Save size={22} /> 
                    Update Site Content
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};
