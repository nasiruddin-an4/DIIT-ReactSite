import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const MentorshipProgram = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const mentors = [
    {
      id: 1,
      name: "Md. Shahidul Islam",
      position: "Senior Software Architect",
      company: "Brain Station 23",
      experience: "8 years",
      expertise: ["System Design", "Microservices", "Cloud Architecture"],
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      mentees: 15,
      rating: 4.9,
      availability: "Weekends",
    },
    {
      id: 2,
      name: "Nusrat Jahan",
      position: "Product Manager",
      company: "Pathao Ltd",
      experience: "6 years",
      expertise: ["Product Strategy", "User Research", "Agile Methodology"],
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      mentees: 12,
      rating: 4.8,
      availability: "Evenings",
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      position: "Data Science Lead",
      company: "Samsung R&D",
      experience: "7 years",
      expertise: ["Machine Learning", "Data Analytics", "Python"],
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      mentees: 10,
      rating: 4.9,
      availability: "Flexible",
    },
  ];

  const programs = [
    {
      id: 1,
      title: "Career Guidance Program",
      duration: "3 months",
      sessions: "Bi-weekly",
      participants: "1-on-1",
      description:
        "Personalized career counseling and professional development guidance from industry experts.",
      features: [
        "Resume and portfolio review",
        "Interview preparation",
        "Career path planning",
        "Industry insights sharing",
      ],
      icon: "Compass",
    },
    {
      id: 2,
      title: "Technical Mentorship",
      duration: "6 months",
      sessions: "Weekly",
      participants: "1-on-1 or Small Groups",
      description:
        "Deep technical guidance on specific technologies and project development.",
      features: [
        "Code review sessions",
        "Technical skill development",
        "Project guidance",
        "Best practices sharing",
      ],
      icon: "Code",
    },
    {
      id: 3,
      title: "Entrepreneurship Support",
      duration: "4 months",
      sessions: "Monthly",
      participants: "Group Sessions",
      description:
        "Support for aspiring entrepreneurs with business development guidance.",
      features: [
        "Business plan development",
        "Funding guidance",
        "Network building",
        "Market analysis support",
      ],
      icon: "Lightbulb",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Md. Rakib Hasan",
      batch: "Current Student",
      program: "Technical Mentorship",
      mentor: "Shahidul Islam",
      feedback: `The mentorship program has been transformative for my career preparation. My mentor helped me understand industry standards and guided me through complex projects. I feel much more confident about my technical skills now.`,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: 2,
      name: "Fatema Khatun",
      batch: "Recent Graduate",
      program: "Career Guidance",
      mentor: "Nusrat Jahan",
      feedback: `Thanks to the career guidance program, I landed my dream job at a top tech company. The interview preparation and resume review sessions were incredibly valuable. My mentor's industry insights made all the difference.`,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
  ];

  const stats = [
    { label: "Active Mentors", value: "500+", icon: "Users" },
    { label: "Students Mentored", value: "2,000+", icon: "GraduationCap" },
    { label: "Success Rate", value: "95%", icon: "TrendingUp" },
    { label: "Average Rating", value: "4.8/5", icon: "Star" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Users" size={18} color="var(--color-success)" />
            <span className="font-cta font-medium text-success text-sm">
              Mentorship Program
            </span>
          </div>
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-text-primary mb-4">
            Learn from Industry Leaders
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Connect with successful DIIT alumni who are ready to share their
            expertise and guide you towards professional excellence.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={stat?.icon}
                  size={24}
                  color="var(--color-primary)"
                />
              </div>
              <div className="font-headline font-bold text-2xl lg:text-3xl text-primary mb-2">
                {stat?.value}
              </div>
              <div className="font-body text-text-secondary text-sm">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-surface rounded-2xl p-2">
          {[
            { id: "overview", label: "Program Overview", icon: "Info" },
            { id: "mentors", label: "Meet Mentors", icon: "Users" },
            {
              id: "testimonials",
              label: "Success Stories",
              icon: "MessageSquare",
            },
          ]?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-cta font-medium text-sm transition-all duration-200 ${
                activeTab === tab?.id
                  ? "bg-white text-primary shadow-brand"
                  : "text-text-secondary hover:text-primary hover:bg-white/50"
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs?.map((program) => (
              <div
                key={program?.id}
                className="bg-surface rounded-2xl p-8 hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon
                    name={program?.icon}
                    size={24}
                    color="var(--color-primary)"
                  />
                </div>

                <h3 className="font-headline font-bold text-xl text-text-primary mb-4">
                  {program?.title}
                </h3>

                <p className="font-body text-text-secondary mb-6 leading-relaxed">
                  {program?.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="font-cta font-medium text-sm text-text-secondary mb-1">
                      Duration
                    </div>
                    <div className="font-cta font-semibold text-text-primary">
                      {program?.duration}
                    </div>
                  </div>
                  <div>
                    <div className="font-cta font-medium text-sm text-text-secondary mb-1">
                      Sessions
                    </div>
                    <div className="font-cta font-semibold text-text-primary">
                      {program?.sessions}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {program?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon
                        name="Check"
                        size={16}
                        color="var(--color-success)"
                      />
                      <span className="font-body text-text-secondary text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  Apply for Program
                </Button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "mentors" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {mentors?.map((mentor) => (
                <div
                  key={mentor?.id}
                  className="bg-surface rounded-2xl p-6 hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <Image
                      src={mentor?.avatar}
                      alt={mentor?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-cta font-semibold text-lg text-text-primary mb-1">
                        {mentor?.name}
                      </h3>
                      <p className="font-body text-sm text-text-secondary mb-1">
                        {mentor?.position}
                      </p>
                      <p className="font-body text-sm text-primary font-medium">
                        {mentor?.company}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="font-cta font-medium text-sm text-text-secondary mb-1">
                        Experience
                      </div>
                      <div className="font-cta font-semibold text-text-primary">
                        {mentor?.experience}
                      </div>
                    </div>
                    <div>
                      <div className="font-cta font-medium text-sm text-text-secondary mb-1">
                        Mentees
                      </div>
                      <div className="font-cta font-semibold text-text-primary">
                        {mentor?.mentees}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="font-cta font-medium text-sm text-text-secondary mb-2">
                      Expertise
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {mentor?.expertise?.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs font-cta rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Icon name="Star" size={16} color="var(--color-accent)" />
                      <span className="font-cta font-medium text-text-primary">
                        {mentor?.rating}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="Clock"
                        size={16}
                        color="var(--color-text-secondary)"
                      />
                      <span className="font-body text-sm text-text-secondary">
                        {mentor?.availability}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="default"
                    fullWidth
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="bg-primary hover:bg-primary/90"
                  >
                    Request Mentorship
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                iconName="Users"
                iconPosition="left"
                className="hover:bg-primary hover:text-white transition-colors duration-300"
              >
                View All Mentors
              </Button>
            </div>
          </div>
        )}

        {activeTab === "testimonials" && (
          <div className="space-y-8">
            {testimonials?.map((testimonial) => (
              <div
                key={testimonial?.id}
                className="bg-surface rounded-2xl p-8 hover:shadow-brand-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div>
                        <h3 className="font-cta font-semibold text-lg text-text-primary">
                          {testimonial?.name}
                        </h3>
                        <p className="font-body text-sm text-text-secondary">
                          {testimonial?.batch} • {testimonial?.program}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial?.rating)]?.map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={16}
                            color="var(--color-accent)"
                          />
                        ))}
                      </div>
                    </div>

                    <blockquote className="font-body text-text-secondary leading-relaxed mb-4">
                      "{testimonial?.feedback}"
                    </blockquote>

                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Icon name="User" size={14} />
                      <span>Mentored by {testimonial?.mentor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-headline font-bold text-2xl text-text-primary mb-4">
              Ready to Accelerate Your Career?
            </h3>
            <p className="font-body text-text-secondary mb-6">
              Join our mentorship program and get personalized guidance from
              industry experts who have walked the path to success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                iconName="UserPlus"
                iconPosition="left"
                className="bg-success hover:bg-success/90"
              >
                Apply for Mentorship
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipProgram;
