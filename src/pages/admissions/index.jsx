import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import AdmissionHero from "./components/AdmissionHero";
import AdmissionProcess from "./components/AdmissionProcess";
import FeeCalculator from "./components/FeeCalculator";
import ApplicationForm from "./components/ApplicationForm";
import AdmissionFAQ from "./components/AdmissionFAQ";
import ContactSupport from "./components/ContactSupport";

const AdmissionsPage = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Scroll to application form when triggered
  const handleStartApplication = () => {
    setShowApplicationForm(true);
    setTimeout(() => {
      const applicationSection = document.getElementById("application-form");
      if (applicationSection) {
        applicationSection?.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Set page title and meta description
  useEffect(() => {
    document.title = "Admissions - DIIT Digital Campus";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Admissions - DIIT Digital Campus</title>
        <meta
          name="description"
          content="Apply to DIIT - Transform your potential into professional excellence. Streamlined admission process, transparent fees, scholarships available. Start your journey to success today."
        />
        <meta
          name="keywords"
          content="DIIT admission, engineering admission Bangladesh, computer science admission, scholarship, fee calculator"
        />
        <meta property="og:title" content="Admissions - DIIT Digital Campus" />
        <meta
          property="og:description"
          content="Join DIIT's transformative educational experience. Apply now for undergraduate and postgraduate programs."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <AdmissionHero onStartApplication={handleStartApplication} />

        {/* Admission Process */}
        <AdmissionProcess />

        {/* Fee Calculator */}
        <FeeCalculator />

        {/* Application Form - Conditionally rendered */}
        {showApplicationForm && (
          <div id="application-form">
            <ApplicationForm />
          </div>
        )}

        {/* FAQ Section */}
        <AdmissionFAQ />

        {/* Contact Support */}
        <ContactSupport />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Institution Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="font-headline font-bold text-white text-lg">
                    D
                  </span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg">DIIT</h3>
                  <p className="text-sm text-white/80">Digital Campus</p>
                </div>
              </div>
              <p className="font-body text-white/90 mb-4 max-w-md">
                Transforming potential into professional excellence through
                quality education and industry-relevant skills development.
              </p>
              <div className="text-sm text-white/70">
                <p>UGC Approved | NAAC Accredited | Government Recognized</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-cta font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a
                    href="/programs"
                    className="hover:text-accent transition-colors"
                  >
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="/faculty"
                    className="hover:text-accent transition-colors"
                  >
                    Faculty
                  </a>
                </li>
                <li>
                  <a
                    href="/alumni"
                    className="hover:text-accent transition-colors"
                  >
                    Alumni
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-accent transition-colors"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-cta font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>+880-1234-567890</p>
                <p>admissions@diit.edu.bd</p>
                <p>DIIT Campus, Dhaka-1205</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm text-white/70">
              © {new Date()?.getFullYear()} DIIT Digital Campus. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdmissionsPage;
