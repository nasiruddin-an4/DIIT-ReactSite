import React from "react";
import Header from "../../components/ui/Header";
import FacultyHero from "./components/FacultyHero";
import FacultyStats from "./components/FacultyStats";
import FacultyGrid from "./components/FacultyGrid";
import ResearchHighlights from "./components/ResearchHighlights";
import FacultyTestimonials from "./components/FacultyTestimonials";
import FacultyContact from "./components/FacultyContact";
import Footer from "..//..//components/ui/Footer";

const Faculty = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <FacultyHero />
        <FacultyStats />
        <FacultyGrid />
        <ResearchHighlights />
        <FacultyTestimonials />
        <FacultyContact />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Faculty;
