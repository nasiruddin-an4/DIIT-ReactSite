import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";
import HeroSlides from "..//..//../Data/homePage.json";

const HeroSection = () => {
  const { heroSlides } = HeroSlides;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentHero = heroSlides?.[currentSlide];

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % heroSlides?.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, heroSlides?.length]);

  const handleSlideChange = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % heroSlides?.length);
  };

  const prevSlide = () => {
    handleSlideChange(
      (currentSlide - 1 + heroSlides?.length) % heroSlides?.length
    );
  };

  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Background Images with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        {heroSlides?.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={slide?.image}
              alt={slide?.title}
              className="w-full h-full object-cover animate-ken-burns"
            />
            {/* Multi-layer Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/50 to-slate-900/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-900/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-purple-950/10"></div>
          </div>
        ))}
      </div>

      {/* Animated Particles/Dots Background */}
      <div className="absolute inset-0 z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float-slower"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-purple-400 rounded-full animate-float-medium"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-float-fast"></div>
      </div>

      {/* Previous Button - Left Middle */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-40 group disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <div className="relative">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 group-hover:border-white/40 group-active:scale-95">
            <Icon
              name="ChevronLeft"
              size={24}
              color="white"
              strokeWidth={2.5}
            />
          </div>
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </button>

      {/* Next Button - Right Middle */}
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-40 group disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <div className="relative">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 group-hover:border-white/40 group-active:scale-95">
            <Icon
              name="ChevronRight"
              size={24}
              color="white"
              strokeWidth={2.5}
            />
          </div>
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </button>

      {/* Main Content - Bottom Left */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-0 pb-20 lg:pb-36">
        <div className="max-w-4xl">
          {/* Main Heading with Stagger Animation */}
          <div className="space-y-4 mb-4">
            <h1
              className="font-headline font-bold text-3xl lg:text-4xl leading-tight text-white animate-slide-in-left"
              style={{ animationDelay: "0.2s" }}
            >
              {currentHero?.title}
            </h1>
          </div>

          {/* Description */}
          <p
            className="font-body text-lg lg:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl animate-slide-in-left"
            style={{ animationDelay: "0.4s" }}
          >
            {currentHero?.description?.length > 100
              ? currentHero.description.slice(0, 100) + "..."
              : currentHero?.description}
          </p>

          {/* Call to Action Button */}
          <div
            className="flex items-center space-x-4 animate-slide-in-left"
            style={{ animationDelay: "0.5s" }}
          >
            <Link to={currentHero?.ctaLink || "#"} className="group">
              <Button
                variant="primary"
                className="relative bg-accent hover:bg-accent text-white shadow-2xl hover:shadow-accent/50 transition-all duration-300 px-8 py-6 text-lg font-semibold overflow-hidden group-hover:scale-105 group-active:scale-95"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{currentHero?.ctaText || "Get Started"}</span>
                  <Icon
                    name="ArrowRight"
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
          {heroSlides?.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              disabled={isAnimating}
              className="group relative disabled:cursor-not-allowed"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "w-12 h-3 bg-accent"
                    : "w-3 h-3 bg-white/40 group-hover:bg-white/60 group-hover:scale-125"
                }`}
              />
              {index === currentSlide && (
                <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-50"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes ken-burns {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(-15px);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-25px) translateX(20px);
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out both;
        }

        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 7s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 5s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
