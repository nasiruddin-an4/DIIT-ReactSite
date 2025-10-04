import React from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={24} color="white" />
              </div>
              <span className="text-white/80 font-medium">About DIIT</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-accent font-bold mb-6 leading-tight">
              Excellence Through
              <span className="block text-accent animate-pulse-accent">
                Innovation
              </span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transforming Bangladesh's youth from potential to achievement
              through quality education with international standards, bridging
              traditional academic rigor with modern professional skills.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">25+</div>
                <div className="text-sm text-white/80">Years Legacy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">
                  3,200+
                </div>
                <div className="text-sm text-white/80">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">80+</div>
                <div className="text-sm text-white/80">Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">
                  1,300+
                </div>
                <div className="text-sm text-white/80">Graduates</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-brand-lg hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                <Icon name="Play" size={20} />
                <span>Watch Our Story</span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-200 flex items-center justify-center space-x-2">
                <Icon name="MapPin" size={20} />
                <span>Virtual Tour</span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-brand-xl">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="DIIT Campus Building"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-brand-lg animate-float-up">
              <Icon name="Award" size={32} color="white" />
            </div>
            <div
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-brand-lg animate-float-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Icon name="Users" size={24} color="var(--color-primary)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
