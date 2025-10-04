import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const AdmissionHero = ({ onStartApplication }) => {
  return (
    <section className="relative bg-hero-gradient text-white py-20 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Icon name="GraduationCap" size={20} color="white" />
            <span className="font-cta font-medium text-sm">
              Admission Open 2024-25
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-headline font-bold text-4xl lg:text-6xl mb-6 leading-tight">
            Start Your Journey to
            <span className="block text-accent animate-pulse-accent">
              Excellence
            </span>
          </h1>

          {/* Description */}
          <p className="font-body text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join DIIT's transformative educational experience where academic
            rigor meets industry relevance. Our streamlined admission process
            ensures you get the support you need every step of the way.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <div className="font-headline font-bold text-2xl lg:text-3xl text-accent mb-1">
                3,200+
              </div>
              <div className="font-cta text-sm text-white/80">
                Active Students
              </div>
            </div>
            <div className="text-center">
              <div className="font-headline font-bold text-2xl lg:text-3xl text-accent mb-1">
                95%
              </div>
              <div className="font-cta text-sm text-white/80">
                Placement Rate
              </div>
            </div>
            <div className="text-center">
              <div className="font-headline font-bold text-2xl lg:text-3xl text-accent mb-1">
                ₹45,000
              </div>
              <div className="font-cta text-sm text-white/80">
                Avg. Starting Salary
              </div>
            </div>
            <div className="text-center">
              <div className="font-headline font-bold text-2xl lg:text-3xl text-accent mb-1">
                50+
              </div>
              <div className="font-cta text-sm text-white/80">
                Industry Partners
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="default"
              size="lg"
              iconName="FileText"
              iconPosition="left"
              iconSize={20}
              className="bg-accent hover:bg-accent/90 text-white shadow-brand-lg hover:shadow-brand-xl hover:-translate-y-1 transition-all duration-300"
              onClick={onStartApplication}
            >
              Start Application
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Calculator"
              iconPosition="left"
              iconSize={20}
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Fee Calculator
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="font-cta text-sm text-white/70 mb-4">
              Recognized & Approved By
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-70">
              <div className="text-center">
                <Icon
                  name="Award"
                  size={24}
                  color="white"
                  className="mx-auto mb-1"
                />
                <span className="text-xs">UGC Approved</span>
              </div>
              <div className="text-center">
                <Icon
                  name="Shield"
                  size={24}
                  color="white"
                  className="mx-auto mb-1"
                />
                <span className="text-xs">NAAC Accredited</span>
              </div>
              <div className="text-center">
                <Icon
                  name="Building"
                  size={24}
                  color="white"
                  className="mx-auto mb-1"
                />
                <span className="text-xs">Govt. Recognized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionHero;
