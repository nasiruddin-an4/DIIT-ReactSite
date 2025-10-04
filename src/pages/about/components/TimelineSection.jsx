import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";

const TimelineSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  const timelineData = [
    {
      year: "1999",
      title: "Foundation",
      description:
        "DIIT was established with a vision to provide quality technical education in Bangladesh, starting with just 50 students and 5 faculty members.",
      icon: "Building",
      color: "bg-primary",
    },
    {
      year: "2003",
      title: "National University Affiliation",
      description:
        "Achieved affiliation with National University of Bangladesh, ensuring recognized degrees and maintaining academic standards.",
      icon: "Award",
      color: "bg-accent",
    },
    {
      year: "2008",
      title: "Campus Expansion",
      description:
        "Expanded to a modern 5-acre campus with state-of-the-art laboratories, library, and recreational facilities for holistic development.",
      icon: "MapPin",
      color: "bg-success",
    },
    {
      year: "2012",
      title: "Industry Partnerships",
      description:
        "Established partnerships with leading tech companies for internships, placements, and curriculum development aligned with industry needs.",
      icon: "Handshake",
      color: "bg-innovation",
    },
    {
      year: "2016",
      title: "Digital Transformation",
      description:
        "Launched digital learning platforms, online resources, and smart classroom technologies to enhance educational delivery.",
      icon: "Monitor",
      color: "bg-warning",
    },
    {
      year: "2020",
      title: "Research Excellence",
      description:
        "Established research centers focusing on AI, IoT, and sustainable technology, contributing to national development goals.",
      icon: "Microscope",
      color: "bg-primary",
    },
    {
      year: "2024",
      title: "Global Recognition",
      description:
        "Achieved international recognition for educational excellence and innovation, with graduates working in Fortune 500 companies worldwide.",
      icon: "Globe",
      color: "bg-accent",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems?.forEach((item) => observer?.observe(item));

    return () => observer?.disconnect();
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Clock" size={24} color="white" />
            </div>
            <span className="text-primary font-semibold">Our Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-accent font-bold text-primary mb-6">
            25 Years of Excellence
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From humble beginnings to becoming a leading institution, discover
            the milestones that shaped DIIT into the transformative educational
            powerhouse it is today.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary via-accent to-success rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {timelineData?.map((item, index) => (
              <div
                key={index}
                data-index={index}
                className={`timeline-item relative transition-all duration-700 ${
                  visibleItems?.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div
                  className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                    index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    } mb-8 lg:mb-0`}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-brand-lg hover:shadow-brand-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`w-12 h-12 ${item?.color} rounded-lg flex items-center justify-center`}
                        >
                          <Icon name={item?.icon} size={24} color="white" />
                        </div>
                        <div className="text-3xl font-bold text-primary">
                          {item?.year}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {item?.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {item?.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex justify-center">
                    <div
                      className={`w-6 h-6 ${item?.color} rounded-full border-4 border-white shadow-brand-lg relative z-10`}
                    >
                      <div
                        className={`absolute inset-0 ${item?.color} rounded-full animate-ping opacity-30`}
                      ></div>
                    </div>
                  </div>

                  {/* Mobile Timeline Node */}
                  <div className="lg:hidden flex items-center space-x-4 mb-4">
                    <div
                      className={`w-4 h-4 ${item?.color} rounded-full`}
                    ></div>
                    <div className="flex-1 h-px bg-slate-200"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
