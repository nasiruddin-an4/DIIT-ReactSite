import React from "react";
import Icon from "../../../components/AppIcon";

const FacultyStats = () => {
  const stats = [
    {
      icon: "Users",
      number: "80+",
      label: "Expert Faculty Members",
      description: "Highly qualified educators with advanced degrees",
      color: "text-primary",
    },
    {
      icon: "BookOpen",
      number: "200+",
      label: "Research Publications",
      description: "Published papers in international journals",
      color: "text-accent",
    },
    {
      icon: "Award",
      number: "50+",
      label: "Industry Certifications",
      description: "Professional certifications and recognitions",
      color: "text-innovation",
    },
    {
      icon: "GraduationCap",
      number: "15+",
      label: "Average Experience",
      description: "Years of teaching and industry experience",
      color: "text-success",
    },
    {
      icon: "Globe",
      number: "25+",
      label: "International Collaborations",
      description: "Global partnerships and research projects",
      color: "text-warning",
    },
    {
      icon: "TrendingUp",
      number: "95%",
      label: "Student Satisfaction",
      description: "Positive feedback from student evaluations",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-primary mb-4">
            Faculty Excellence by Numbers
          </h2>
          <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto">
            Our distinguished faculty brings together academic excellence and
            industry expertise to deliver world-class education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats?.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center ${stat?.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon name={stat?.icon} size={28} className={stat?.color} />
                </div>
                <div className="flex-1">
                  <div
                    className={`text-3xl lg:text-4xl font-bold ${stat?.color} mb-2`}
                  >
                    {stat?.number}
                  </div>
                  <h3 className="font-headline font-semibold text-lg text-primary mb-2">
                    {stat?.label}
                  </h3>
                  <p className="text-text-secondary font-body text-sm leading-relaxed">
                    {stat?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-brand-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="font-headline font-bold text-2xl lg:text-3xl text-primary mb-4">
                  Join Our Academic Community
                </h3>
                <p className="text-text-secondary font-body mb-6">
                  Connect with our faculty members, explore research
                  opportunities, and be part of Bangladesh's leading educational
                  institution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-cta font-semibold flex items-center justify-center space-x-2 transition-all duration-200">
                    <Icon name="Mail" size={18} />
                    <span>Contact Faculty</span>
                  </button>
                  <button className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-cta font-semibold flex items-center justify-center space-x-2 transition-all duration-200">
                    <Icon name="Calendar" size={18} />
                    <span>Schedule Meeting</span>
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-32 h-32 bg-hero-gradient rounded-full mx-auto flex items-center justify-center">
                  <Icon name="Users" size={48} color="white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full animate-pulse-accent"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-innovation rounded-full animate-float-up"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyStats;
