import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", role: "", content: "", rating: 5 });

  // Fetch from "API" (Local JSON) and merge with LocalStorage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/testimonials.json");
        const initialData = await response.json();
        
        // Ensure initial data has a rating field
        const formattedInitial = initialData.map(item => ({ ...item, rating: item.rating || 5 }));
        
        // Get added testimonials from localStorage
        const localData = JSON.parse(localStorage.getItem("custom_testimonials") || "[]");
        
        setTestimonials([...formattedInitial, ...localData]);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddTestimonial = (e) => {
    e.preventDefault();
    const newEntry = {
      ...formData,
      id: Date.now(),
      image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`,
    };

    const updatedLocal = [...JSON.parse(localStorage.getItem("custom_testimonials") || "[]"), newEntry];
    localStorage.setItem("custom_testimonials", JSON.stringify(updatedLocal));
    
    setTestimonials((prev) => [...prev, newEntry]);
    setFormData({ name: "", role: "", content: "", rating: 5 });
    setShowForm(false);
  };

  return (
    <section id="testimonials" className="py-20 px-6" style={{ background: "var(--c-bg)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "var(--c-hover-bg)", color: "var(--c-indigo)" }}
          >
            Client Success
          </motion.div>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "var(--c-text-head)" }}
          >
            Trusted by Innovators
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--c-text-body)" }}
          >
            Don't just take our word for it. Here's what our partners have to say about working with Teamily.
          </motion.p>
          
          <button 
            onClick={() => setShowForm(!showForm)}
            className="mt-8 text-sm font-semibold underline cursor-pointer"
            style={{ color: "var(--c-indigo)" }}
          >
            {showForm ? "Cancel" : "+ Add Your Feedback"}
          </button>
        </div>

        {/* Add Testimonial Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-12"
            >
              <form onSubmit={handleAddTestimonial} className="card-base p-8 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input 
                    type="text" placeholder="Your Name" required
                    className="p-3 rounded-xl border border-gray-200 outline-none focus:border-indigo-500"
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    type="text" placeholder="Your Role (e.g. CEO, Developer)" required
                    className="p-3 rounded-xl border border-gray-200 outline-none focus:border-indigo-500"
                    value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}
                  />
                </div>
                
                {/* Star Rating Selection */}
                <div className="flex items-center gap-3 mb-4 px-1">
                  <span className="text-sm font-medium text-gray-600">Rating:</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star} type="button"
                        onClick={() => setFormData({...formData, rating: star})}
                        className="transition-transform hover:scale-110"
                      >
                        <svg 
                          className="w-6 h-6" 
                          fill={star <= formData.rating ? "var(--c-sky)" : "none"} 
                          stroke={star <= formData.rating ? "var(--c-sky)" : "#CBD5E1"}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                <textarea 
                  placeholder="Share your experience..." required rows="3"
                  className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:border-indigo-500 mb-4"
                  value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})}
                ></textarea>
                <button type="submit" className="btn-primary w-full">Submit Testimonial</button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {loading ? (
          <div className="text-center py-10">Loading testimonials...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <motion.div
                key={item.id || idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} transition={{ delay: (idx % 3) * 0.1 }}
                className="card-base p-8 flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full bg-indigo-100 p-1 border border-indigo-200"
                  />
                  <div>
                    <h4 className="font-bold text-lg" style={{ color: "var(--c-text-head)" }}>
                      {item.name}
                    </h4>
                    <p className="text-sm" style={{ color: "var(--c-indigo)" }}>
                      {item.role}
                    </p>
                  </div>
                </div>
                <p className="text-lg italic leading-relaxed flex-grow" style={{ color: "var(--c-text-body)" }}>
                  "{item.content}"
                </p>
                <div className="mt-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5" 
                      fill={i < (item.rating || 5) ? "var(--c-sky)" : "none"} 
                      stroke={i < (item.rating || 5) ? "var(--c-sky)" : "#E2E8F0"}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
