import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/LandingPage";
import { AdminDashboard } from "./components/AdminDashboard";
import { ServicesPage } from "./components/ServicesPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col w-full" style={{ background: "var(--c-bg)" }}>
        <Routes>
          {/* Main Website Route */}
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <LandingPage />
                <Footer />
              </>
            } 
          />

          {/* Dedicated Services Details Routes */}
          <Route 
            path="/services" 
            element={
              <>
                <Header />
                <ServicesPage />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/services/:slug" 
            element={
              <>
                <Header />
                <ServicesPage />
                <Footer />
              </>
            } 
          />
          
          {/* Admin Dashboard Route */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
