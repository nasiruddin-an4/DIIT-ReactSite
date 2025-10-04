import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const VirtualTourSection = () => {
  const [activeLocation, setActiveLocation] = useState("campus");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const tourLocations = [
    {
      id: "campus",
      name: "Main Campus",
      description:
        "Explore our modern 15-acre campus with state-of-the-art facilities",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80",
      icon: "Building2",
      highlights: [
        "Modern Architecture",
        "Green Spaces",
        "Student Plaza",
        "Parking Facilities",
      ],
    },
    {
      id: "library",
      name: "Digital Library",
      description: "24/7 access to 50,000+ books and digital resources",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80",
      icon: "BookOpen",
      highlights: [
        "Digital Resources",
        "Study Rooms",
        "Research Areas",
        "Silent Zones",
      ],
    },
    {
      id: "labs",
      name: "Tech Labs",
      description: "Advanced computer labs with latest technology and software",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: "Monitor",
      highlights: [
        "Latest Hardware",
        "Software Licenses",
        "Project Spaces",
        "Innovation Hub",
      ],
    },
    {
      id: "auditorium",
      name: "Auditorium",
      description: "500-seat modern auditorium for events and presentations",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: "Presentation",
      highlights: [
        "HD Projection",
        "Sound System",
        "Live Streaming",
        "Recording Studio",
      ],
    },
    {
      id: "cafeteria",
      name: "Student Cafeteria",
      description: "Spacious dining area with diverse food options",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      icon: "Coffee",
      highlights: [
        "Healthy Options",
        "Social Spaces",
        "Outdoor Seating",
        "Affordable Prices",
      ],
    },
    {
      id: "sports",
      name: "Sports Complex",
      description:
        "Complete sports facilities for physical fitness and recreation",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: "Dumbbell",
      highlights: [
        "Indoor Gym",
        "Basketball Court",
        "Cricket Ground",
        "Fitness Equipment",
      ],
    },
  ];

  const currentLocation = tourLocations?.find(
    (location) => location?.id === activeLocation
  );

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-innovation/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Camera" size={20} className="text-innovation" />
            <span className="text-innovation font-medium text-sm">
              360° Virtual Experience
            </span>
          </div>
          <h2 className="font-headline font-bold text-4xl lg:text-5xl text-primary mb-6">
            Explore Our Campus Virtually
          </h2>
          <p className="font-body text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Take an immersive virtual tour of our modern facilities and discover
            why DIIT provides the perfect environment for academic excellence
            and personal growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location Navigation */}
          <div className="lg:col-span-1">
            <h3 className="font-headline font-bold text-xl text-primary mb-6">
              Campus Locations
            </h3>
            <div className="space-y-3">
              {tourLocations?.map((location) => (
                <button
                  key={location?.id}
                  onClick={() => setActiveLocation(location?.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeLocation === location?.id
                      ? "bg-primary text-white shadow-brand-lg"
                      : "bg-slate-50 hover:bg-slate-100 text-text-secondary hover:text-primary"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activeLocation === location?.id
                          ? "bg-white/20"
                          : "bg-white"
                      }`}
                    >
                      <Icon
                        name={location?.icon}
                        size={20}
                        className={
                          activeLocation === location?.id
                            ? "text-white"
                            : "text-primary"
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-headline font-semibold text-lg">
                        {location?.name}
                      </h4>
                      <p
                        className={`text-sm ${
                          activeLocation === location?.id
                            ? "text-white/80"
                            : "text-text-secondary"
                        }`}
                      >
                        {location?.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-innovation/5 rounded-xl border border-primary/10">
              <h4 className="font-headline font-bold text-lg text-primary mb-4">
                Campus Facts
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Total Area</span>
                  <span className="font-semibold text-primary">15 Acres</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Buildings</span>
                  <span className="font-semibold text-primary">8 Modern</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Labs</span>
                  <span className="font-semibold text-primary">
                    25+ Advanced
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Capacity</span>
                  <span className="font-semibold text-primary">
                    5,000 Students
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Virtual Tour Display */}
          <div className="lg:col-span-2">
            {/* Main Tour View */}
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-brand-xl">
              <div className="aspect-video relative">
                <Image
                  src={currentLocation?.image}
                  alt={currentLocation?.name}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20">
                  {/* Top Controls */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-white font-medium text-sm">
                        {currentLocation?.name}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={openFullscreen}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                      >
                        <Icon name="Maximize" size={20} color="white" />
                      </button>
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                        <Icon name="Share" size={20} color="white" />
                      </button>
                    </div>
                  </div>

                  {/* Center Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <Icon name="Play" size={32} color="white" />
                    </button>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                      <h4 className="font-headline font-bold text-xl text-white mb-2">
                        {currentLocation?.name}
                      </h4>
                      <p className="text-white/80 text-sm mb-3">
                        {currentLocation?.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {currentLocation?.highlights?.map(
                          (highlight, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-white/20 rounded-md text-white text-xs"
                            >
                              {highlight}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 360° Indicators */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-accent">
                    <Icon name="RotateCcw" size={20} color="white" />
                  </div>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-accent">
                    <Icon name="RotateCw" size={20} color="white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Tour Controls */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Download"
                  iconPosition="left"
                  iconSize={16}
                >
                  Download Brochure
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="MapPin"
                  iconPosition="left"
                  iconSize={16}
                >
                  Get Directions
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">Share tour:</span>
                <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors duration-200">
                  <Icon name="Facebook" size={16} className="text-blue-600" />
                </button>
                <button className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center hover:bg-sky-200 transition-colors duration-200">
                  <Icon name="Twitter" size={16} className="text-sky-600" />
                </button>
                <button className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors duration-200">
                  <Icon
                    name="MessageCircle"
                    size={16}
                    className="text-green-600"
                  />
                </button>
              </div>
            </div>

            {/* Additional Features */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/5 to-innovation/5 rounded-xl p-6 border border-primary/10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="Calendar" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-lg text-primary">
                      Schedule Campus Visit
                    </h4>
                    <p className="text-text-secondary text-sm">
                      Book a guided tour
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Book Visit
                </Button>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-orange-100/50 rounded-xl p-6 border border-accent/10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Icon name="Headphones" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-lg text-primary">
                      Virtual Counseling
                    </h4>
                    <p className="text-text-secondary text-sm">
                      Talk to our advisors
                    </p>
                  </div>
                </div>
                <Button
                  variant="default"
                  size="sm"
                  iconName="Video"
                  iconPosition="right"
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  Start Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={currentLocation?.image}
              alt={currentLocation?.name}
              className="w-full h-full object-cover"
            />

            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
            >
              <Icon name="X" size={24} color="white" />
            </button>

            {/* Fullscreen Controls */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
                <h3 className="font-headline font-bold text-2xl text-white mb-2">
                  {currentLocation?.name}
                </h3>
                <p className="text-white/80 mb-4">
                  Use mouse to drag and explore the 360° view
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-2 text-white/80">
                    <Icon name="Mouse" size={16} />
                    <span className="text-sm">Drag to look around</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/80">
                    <Icon name="ZoomIn" size={16} />
                    <span className="text-sm">Scroll to zoom</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VirtualTourSection;
