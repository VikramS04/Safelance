import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import PaymentPlatform from "./components/PaymentPlatform.jsx";
import ContactSection from "./components/ContactSection.jsx";
import FAQSection from "./components/FAQSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PaymentPlatform />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
