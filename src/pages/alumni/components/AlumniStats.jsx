import React from "react";
import Icon from "../../../components/AppIcon";

const AlumniStats = () => {
  const stats = [
    {
      id: 1,
      icon: "TrendingUp",
      value: "৳85,000",
      label: "Average Starting Salary",
      description: "Fresh graduates begin with competitive packages",
      color: "text-success",
    },
    {
      id: 2,
      icon: "Award",
      value: "৳2,50,000",
      label: "Average Salary (5+ Years)",
      description: "Significant career growth within 5 years",
      color: "text-accent",
    },
    {
      id: 3,
      icon: "Building2",
      value: "150+",
      label: "Partner Companies",
      description: "Leading organizations hiring our graduates",
      color: "text-primary",
    },
    {
      id: 4,
      icon: "Globe",
      value: "25+",
      label: "Countries",
      description: "Global presence of DIIT alumni",
      color: "text-innovation",
    },
    {
      id: 5,
      icon: "Briefcase",
      value: "92%",
      label: "Job Satisfaction Rate",
      description: "Alumni satisfied with career progression",
      color: "text-success",
    },
    {
      id: 6,
      icon: "Users",
      value: "500+",
      label: "Active Mentors",
      description: "Alumni actively mentoring current students",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="BarChart3" size={18} color="var(--color-primary)" />
            <span className="font-cta font-medium text-primary text-sm">
              Success Metrics
            </span>
          </div>
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-text-primary mb-4">
            Measuring Our Impact
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Real numbers that showcase the career success and professional
            growth of our alumni community across various industries and
            regions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats?.map((stat) => (
            <div
              key={stat?.id}
              className="bg-white rounded-xl p-8 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon name={stat?.icon} size={24} className={stat?.color} />
                </div>
                <div className="flex-1">
                  <div
                    className={`font-headline font-bold text-2xl lg:text-3xl ${stat?.color} mb-2`}
                  >
                    {stat?.value}
                  </div>
                  <h3 className="font-cta font-semibold text-text-primary text-lg mb-2">
                    {stat?.label}
                  </h3>
                  <p className="font-body text-text-secondary text-sm leading-relaxed">
                    {stat?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-brand max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Icon name="TrendingUp" size={24} color="var(--color-success)" />
              <h3 className="font-headline font-bold text-xl text-text-primary">
                Ready to Join Our Success Story?
              </h3>
            </div>
            <p className="font-body text-text-secondary mb-6">
              Become part of a network that's transforming careers and building
              Bangladesh's future through excellence in education and
              professional development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon
                  name="CheckCircle"
                  size={16}
                  color="var(--color-success)"
                />
                <span className="font-cta text-sm">Career Support</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon
                  name="CheckCircle"
                  size={16}
                  color="var(--color-success)"
                />
                <span className="font-cta text-sm">Networking Events</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon
                  name="CheckCircle"
                  size={16}
                  color="var(--color-success)"
                />
                <span className="font-cta text-sm">Mentorship Program</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniStats;
