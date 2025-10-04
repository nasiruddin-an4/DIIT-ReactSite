import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";

const MissionSection = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({});

  const missionPillars = [
    {
      icon: "Zap",
      title: "Transformative Education",
      description:
        "Converting population burden into national strength through quality education that bridges academic excellence with practical skills.",
      color: "bg-primary",
      metrics: [
        { label: "Graduate Employment Rate", value: 92, suffix: "%" },
        { label: "Industry Partnerships", value: 150, suffix: "+" },
        { label: "Skill Development Programs", value: 25, suffix: "+" },
      ],
    },
    {
      icon: "Award",
      title: "Professional Excellence",
      description:
        "Combining academic theory with real-world application to create industry-ready professionals who excel in their chosen fields.",
      color: "bg-accent",
      metrics: [
        { label: "Average Starting Salary", value: 45, suffix: "K BDT" },
        { label: "Professional Certifications", value: 500, suffix: "+" },
        { label: "Industry Projects", value: 200, suffix: "+" },
      ],
    },
    {
      icon: "Users",
      title: "Community Building",
      description:
        "Creating lasting connections between students, faculty, and industry to foster a supportive ecosystem for lifelong learning.",
      color: "bg-success",
      metrics: [
        { label: "Alumni Network", value: 1300, suffix: "+" },
        { label: "Mentorship Programs", value: 15, suffix: "+" },
        { label: "Community Events", value: 50, suffix: "/year" },
      ],
    },
    {
      icon: "Lightbulb",
      title: "Innovation Leadership",
      description:
        "Pioneering modern teaching methods and digital learning to stay ahead of technological advancement and industry trends.",
      color: "bg-innovation",
      metrics: [
        { label: "Research Publications", value: 120, suffix: "+" },
        { label: "Innovation Labs", value: 8, suffix: "" },
        { label: "Tech Startups Incubated", value: 25, suffix: "+" },
      ],
    },
    {
      icon: "Heart",
      title: "Cultural Pride",
      description:
        "Celebrating Bengali heritage while preparing students for global opportunities, maintaining cultural identity in a modern context.",
      color: "bg-warning",
      metrics: [
        { label: "Cultural Events", value: 30, suffix: "/year" },
        { label: "International Collaborations", value: 12, suffix: "+" },
        { label: "Global Alumni", value: 200, suffix: "+" },
      ],
    },
  ];

  useEffect(() => {
    const animateValue = (start, end, duration, key) => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (end - start) * progress);

        setAnimatedValues((prev) => ({ ...prev, [key]: current }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    };

    // Animate metrics for active pillar
    const activePillar = missionPillars?.[activeMetric];
    activePillar?.metrics?.forEach((metric, index) => {
      const key = `${activeMetric}-${index}`;
      animateValue(0, metric?.value, 2000, key);
    });
  }, [activeMetric]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Target" size={24} color="white" />
            </div>
            <span className="text-primary font-semibold">Our Mission</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-accent font-bold text-primary mb-6">
            Five Pillars of Excellence
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our mission is built on five fundamental pillars that guide every
            aspect of education and development at DIIT, ensuring holistic
            growth and success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mission Pillars */}
          <div className="space-y-6">
            {missionPillars?.map((pillar, index) => (
              <div
                key={index}
                onClick={() => setActiveMetric(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  activeMetric === index
                    ? "transform scale-105"
                    : "hover:transform hover:scale-102"
                }`}
              >
                <div
                  className={`bg-white rounded-2xl p-6 shadow-brand-lg hover:shadow-brand-xl transition-all duration-300 border-2 ${
                    activeMetric === index
                      ? "border-accent shadow-brand-xl"
                      : "border-transparent"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 ${pillar?.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon name={pillar?.icon} size={24} color="white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3">
                        {pillar?.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {pillar?.description}
                      </p>
                    </div>
                    {activeMetric === index && (
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center animate-pulse-accent">
                        <Icon name="Check" size={16} color="white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Metrics */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-slate-50 rounded-3xl p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div
                  className={`w-16 h-16 ${missionPillars?.[activeMetric]?.color} rounded-lg flex items-center justify-center`}
                >
                  <Icon
                    name={missionPillars?.[activeMetric]?.icon}
                    size={32}
                    color="white"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">
                    {missionPillars?.[activeMetric]?.title}
                  </h3>
                  <p className="text-text-secondary">Impact Metrics</p>
                </div>
              </div>

              <div className="space-y-8">
                {missionPillars?.[activeMetric]?.metrics?.map(
                  (metric, index) => {
                    const key = `${activeMetric}-${index}`;
                    const animatedValue = animatedValues?.[key] || 0;

                    return (
                      <div key={index} className="relative">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-medium text-text-secondary">
                            {metric?.label}
                          </span>
                          <span className="text-2xl font-bold text-primary">
                            {animatedValue?.toLocaleString()}
                            {metric?.suffix}
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className={`h-2 ${missionPillars?.[activeMetric]?.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: `${
                                (animatedValue / metric?.value) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl border border-slate-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon
                    name="TrendingUp"
                    size={20}
                    color="var(--color-success)"
                  />
                  <span className="font-semibold text-success">
                    Continuous Growth
                  </span>
                </div>
                <p className="text-sm text-text-secondary">
                  These metrics represent our ongoing commitment to excellence
                  and continuous improvement in all aspects of education and
                  student development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
