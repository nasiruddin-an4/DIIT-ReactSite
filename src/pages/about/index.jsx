import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import TimelineSection from "./components/TimelineSection";
import LeadershipSection from "./components/LeadershipSection";
import MissionSection from "./components/MissionSection";
import CampusLifeSection from "./components/CampusLifeSection";
import RecognitionSection from "./components/RecognitionSection";

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About DIIT - Excellence Through Innovation | Daffodil Institute of
          Information Technology
        </title>
        <meta
          name="description"
          content="Discover DIIT's 25-year journey of transforming Bangladesh's youth through quality education. Learn about our mission, leadership, campus life, and recognition in technical education excellence."
        />
        <meta
          name="keywords"
          content="DIIT about, Bangladesh technical education, computer science institute, engineering college Dhaka, university affiliation, campus life, educational excellence"
        />
        <meta
          property="og:title"
          content="About DIIT - Excellence Through Innovation"
        />
        <meta
          property="og:description"
          content="25 years of educational excellence, transforming potential into achievement through quality technical education in Bangladesh."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16">
          <HeroSection />
          <TimelineSection />
          <LeadershipSection />
          <MissionSection />
          <CampusLifeSection />
          <RecognitionSection />
        </main>
      </div>
    </>
  );
};

export default About;
