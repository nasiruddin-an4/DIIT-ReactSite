import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const AlumniHero = () => {
  return (
    <section className="relative bg-hero-gradient text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Icon name="Award" size={20} color="white" />
            <span className="font-medium text-sm">Alumni Success Network</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-headline font-bold text-4xl lg:text-6xl mb-6 leading-tight">
            Where Excellence
            <span className="block text-accent">Continues to Grow</span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join a thriving community of 1,300+ graduates who are transforming
            industries and building Bangladesh's future through professional
            excellence.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="font-headline font-bold text-3xl lg:text-4xl text-accent mb-2">
                1,300+
              </div>
              <div className="font-body text-white/80 text-sm lg:text-base">
                Total Graduates
              </div>
            </div>
            <div className="text-center">
              <div className="font-headline font-bold text-3xl lg:text-4xl text-accent mb-2">
                800+
              </div>
              <div className="font-body text-white/80 text-sm lg:text-base">
                Currently Employed
              </div>
            </div>
            <div className="text-center">
              <div className="font-headline font-bold text-3xl lg:text-4xl text-accent mb-2">
                95%
              </div>
              <div className="font-body text-white/80 text-sm lg:text-base">
                Placement Rate
              </div>
            </div>
            <div className="text-center">
              <div className="font-headline font-bold text-3xl lg:text-4xl text-accent mb-2">
                150+
              </div>
              <div className="font-body text-white/80 text-sm lg:text-base">
                Partner Companies
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="default"
              size="lg"
              iconName="UserPlus"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90 text-white shadow-brand-lg hover:shadow-brand-xl hover:-translate-y-1 transition-all duration-300"
            >
              Join Alumni Network
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Users"
              iconPosition="left"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Browse Alumni Directory
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default AlumniHero;
