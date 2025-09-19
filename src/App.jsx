import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import { LogosSection } from "./components/LogosSection";
import { ProcessSection } from "./components/ProcessSection";
import { ServicesSection } from './components/ServiceSection'

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />

      {/* Page content */}
      <main style={{ flex: 1 }}>
        <HeroSection/>
        <ServicesSection/>
       <FeatureSection/>
        <LogosSection />
        <ProcessSection />
        {/* Add your page content here */}
      </main>
      <div style={{ width: "215vh" }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
