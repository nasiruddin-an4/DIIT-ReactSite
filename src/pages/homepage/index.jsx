import React from "react";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ProgramExplorer from "./components/ProgramExplorer";
import NewsSection from "./components/NewsSection";
import VirtualTourSection from "./components/VirtualTourSection";
import CredibilitySection from "./components/CredibilitySection";
import Documentary from "./components/Documentary";
import Footer from "..//..//components/ui/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section with rotating success stories */}
        <HeroSection />

        {/* Live Statistics Dashboard */}
        <StatsSection />

        {/* Interactive Program Explorer */}
        <ProgramExplorer />

        {/* Credibility & Recognition */}
        <CredibilitySection />

        {/* Real-time News & Achievements */}
        <NewsSection />

        {/* Documentary Section */}
        <Documentary />

        {/* Virtual Campus Tour */}
        <VirtualTourSection />
        
        
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
