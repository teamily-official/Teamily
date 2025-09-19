import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LogosSection } from "./components/LogosSection";
import { ProcessSection } from "./components/ProcessSection";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />

      {/* Page content */}
      <main style={{ flex: 1 }}>
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
