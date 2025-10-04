import React from "react";
import Header from "../../components/ui/Header";
import AlumniHero from "./components/AlumniHero";
import AlumniStats from "./components/AlumniStats";
import AlumniDirectory from "./components/AlumniDirectory";
import SuccessStories from "./components/SuccessStories";
import MentorshipProgram from "./components/MentorshipProgram";
import AlumniEvents from "./components/AlumniEvents";

const Alumni = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        <AlumniHero />
        <AlumniStats />
        <SuccessStories />
        <AlumniDirectory />
        <MentorshipProgram />
        <AlumniEvents />
      </main>
      {/* Footer */}
      <footer className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <span className="font-headline font-bold text-white text-lg">
                    D
                  </span>
                </div>
                <div>
                  <div className="font-headline font-bold text-xl text-white">
                    DIIT
                  </div>
                  <div className="font-body text-sm text-white/80">
                    Digital Campus
                  </div>
                </div>
              </div>
              <p className="font-body text-white/80 text-sm leading-relaxed mb-6">
                Transforming potential into professional excellence through
                quality education and industry-aligned programs.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-white text-sm font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-white text-sm font-bold">in</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-white text-sm font-bold">@</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-cta font-semibold text-white text-lg mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  "About DIIT",
                  "Academic Programs",
                  "Admissions",
                  "Faculty",
                  "Campus Life",
                ]?.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-white/80 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Alumni Services */}
            <div>
              <h3 className="font-cta font-semibold text-white text-lg mb-6">
                Alumni Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Alumni Directory",
                  "Mentorship Program",
                  "Career Services",
                  "Networking Events",
                  "Success Stories",
                ]?.map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="font-body text-white/80 text-sm hover:text-white transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-cta font-semibold text-white text-lg mb-6">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <div className="font-body text-white/80 text-sm">
                    Daffodil Smart City, Ashulia,
                    <br />
                    Dhaka-1341, Bangladesh
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                    <span className="text-white text-xs">📞</span>
                  </div>
                  <div className="font-body text-white/80 text-sm">
                    +880-2-55668200
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                    <span className="text-white text-xs">✉️</span>
                  </div>
                  <div className="font-body text-white/80 text-sm">
                    alumni@diit.edu.bd
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="font-body text-white/60 text-sm mb-4 md:mb-0">
                © {new Date()?.getFullYear()} Daffodil Institute of Information
                Technology. All rights reserved.
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="font-body text-white/60 text-sm hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="font-body text-white/60 text-sm hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="font-body text-white/60 text-sm hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Alumni;
