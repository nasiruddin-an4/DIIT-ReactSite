import React from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const FacultyHero = () => {
  return (
    <section className="relative bg-hero-gradient text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse-accent"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-float-up"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-innovation/30 rounded-full blur-md"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Users" size={24} color="white" />
                </div>
                <span className="text-white/80 font-cta font-medium">
                  Faculty Excellence Center
                </span>
              </div>

              <h1 className="font-headline font-bold text-4xl lg:text-6xl leading-tight">
                World-Class
                <span className="block text-accent">Educators</span>
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 font-body leading-relaxed">
                Meet our distinguished faculty of 80+ experts who bridge
                academic excellence with industry innovation, shaping
                Bangladesh's future leaders.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent">
                  80+
                </div>
                <div className="text-white/80 font-cta text-sm">
                  Expert Faculty
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent">
                  200+
                </div>
                <div className="text-white/80 font-cta text-sm">
                  Publications
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent">
                  15+
                </div>
                <div className="text-white/80 font-cta text-sm">
                  Years Experience
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-cta font-semibold flex items-center justify-center space-x-2 transition-all duration-200 hover:shadow-brand-xl hover:-translate-y-1">
                <Icon name="Search" size={20} />
                <span>Find Faculty</span>
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-cta font-semibold flex items-center justify-center space-x-2 transition-all duration-200 backdrop-blur-sm">
                <Icon name="BookOpen" size={20} />
                <span>Research Papers</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Faculty members collaborating"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-brand-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-brand-lg max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Award" size={24} color="white" />
                </div>
                <div>
                  <div className="font-headline font-bold text-primary text-lg">
                    Excellence Award
                  </div>
                  <div className="text-text-secondary text-sm">
                    Best Faculty 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyHero;
