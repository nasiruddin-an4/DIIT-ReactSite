import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      id: 1,
      name: "Md. Karim Rahman",
      batch: "2018",
      degree: "BSc in Computer Science",
      currentPosition: "Chief Technology Officer",
      company: "TechnoNext Ltd",
      previousPosition: "Junior Developer",
      salaryGrowth: "1200%",
      yearsOfGrowth: "6",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      companyLogo:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop",
      story: `Starting as a junior developer with a monthly salary of ৳25,000, Karim's journey at DIIT equipped him with both technical skills and leadership qualities. Today, as CTO of TechnoNext Ltd, he leads a team of 50+ engineers and has been instrumental in developing Bangladesh's largest e-commerce platform.\n\nHis transformation from a curious student to a tech leader showcases the power of DIIT's comprehensive education approach. Karim credits his success to the practical project-based learning and mentorship he received during his time at DIIT.`,
      achievements: [
        "Led development of Bangladesh's largest e-commerce platform",
        "Managed ৳50 crore technology budget",
        "Built and scaled engineering team from 5 to 50+ members",
        "Received 'Tech Leader of the Year 2023' award",
      ],
      skills: [
        "Strategic Leadership",
        "System Architecture",
        "Team Management",
        "Product Development",
      ],
      mentoring: true,
      linkedin: "https://linkedin.com/in/karim-rahman",
    },
    {
      id: 2,
      name: "Fatema Sultana",
      batch: "2019",
      degree: "BSc in Software Engineering",
      currentPosition: "Senior Product Manager",
      company: "Robi Axiata Limited",
      previousPosition: "Software Developer",
      salaryGrowth: "800%",
      yearsOfGrowth: "5",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      companyLogo:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop",
      story: `Fatema's journey from a software developer earning ৳30,000 to a Senior Product Manager with ৳2,70,000 monthly salary exemplifies the career transformation possible through dedication and quality education. At Robi Axiata, she has launched 5 major digital products that serve over 2 million customers.\n\nHer success story highlights how DIIT's focus on both technical excellence and business acumen prepares students for leadership roles. Fatema now mentors junior colleagues and actively participates in DIIT's industry advisory board.`,
      achievements: [
        "Launched 5 major digital products serving 2M+ customers",
        "Increased product revenue by 300% in 2 years",
        "Led cross-functional teams of 25+ members",
        "Recognized as 'Product Manager of the Year 2024'",
      ],
      skills: [
        "Product Strategy",
        "Data Analytics",
        "User Experience",
        "Market Research",
      ],
      mentoring: true,
      linkedin: "https://linkedin.com/in/fatema-sultana",
    },
    {
      id: 3,
      name: "Rashidul Hasan",
      batch: "2020",
      degree: "BSc in Information Technology",
      currentPosition: "Founder & CEO",
      company: "EduTech Solutions BD",
      previousPosition: "System Analyst",
      salaryGrowth: "2000%",
      yearsOfGrowth: "4",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      companyLogo:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      story: `Rashidul's entrepreneurial journey began during his final year at DIIT when he developed an educational app as his thesis project. What started as an academic exercise has now grown into EduTech Solutions BD, serving 100,000+ students across Bangladesh with innovative learning solutions.\n\nFrom earning ৳35,000 as a system analyst to building a company valued at ৳10 crore, Rashidul's story demonstrates how DIIT nurtures not just employees but future entrepreneurs who contribute to Bangladesh's digital economy.`,
      achievements: [
        "Built company serving 100,000+ students nationwide",
        "Raised ৳2 crore in seed funding",
        "Created 50+ direct employment opportunities",
        "Won 'Young Entrepreneur Award 2024'",
      ],
      skills: [
        "Entrepreneurship",
        "Business Development",
        "EdTech Innovation",
        "Strategic Planning",
      ],
      mentoring: true,
      linkedin: "https://linkedin.com/in/rashidul-hasan",
    },
  ];

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % stories?.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + stories?.length) % stories?.length);
  };

  const currentStory = stories?.[activeStory];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Star" size={18} color="var(--color-accent)" />
            <span className="font-cta font-medium text-accent text-sm">
              Success Stories
            </span>
          </div>
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-text-primary mb-4">
            From Potential to Excellence
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Discover how DIIT graduates have transformed their careers and are
            making significant contributions to Bangladesh's technology sector.
          </p>
        </div>

        {/* Story Showcase */}
        <div className="bg-white rounded-3xl shadow-brand-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Story Content */}
            <div className="p-8 lg:p-12">
              {/* Header */}
              <div className="flex items-start space-x-4 mb-8">
                <Image
                  src={currentStory?.avatar}
                  alt={currentStory?.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-headline font-bold text-2xl text-text-primary mb-2">
                    {currentStory?.name}
                  </h3>
                  <p className="font-body text-text-secondary mb-2">
                    {currentStory?.degree} • Batch {currentStory?.batch}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={currentStory?.companyLogo}
                      alt={currentStory?.company}
                      className="w-6 h-6 rounded object-cover"
                    />
                    <span className="font-cta font-medium text-primary">
                      {currentStory?.company}
                    </span>
                  </div>
                </div>
              </div>

              {/* Career Progression */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 mb-8">
                <h4 className="font-cta font-semibold text-lg text-text-primary mb-4">
                  Career Transformation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-text-secondary mb-1">
                      Started as
                    </div>
                    <div className="font-cta font-medium text-text-primary">
                      {currentStory?.previousPosition}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary mb-1">Now</div>
                    <div className="font-cta font-medium text-primary">
                      {currentStory?.currentPosition}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary mb-1">
                      Salary Growth
                    </div>
                    <div className="font-headline font-bold text-success text-xl">
                      {currentStory?.salaryGrowth}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary mb-1">
                      Time Period
                    </div>
                    <div className="font-cta font-medium text-text-primary">
                      {currentStory?.yearsOfGrowth} years
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Text */}
              <div className="mb-8">
                <h4 className="font-cta font-semibold text-lg text-text-primary mb-4">
                  Success Journey
                </h4>
                <div className="font-body text-text-secondary leading-relaxed space-y-4">
                  {currentStory?.story
                    ?.split("\n\n")
                    ?.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h4 className="font-cta font-semibold text-lg text-text-primary mb-4">
                  Key Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentStory?.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-cta rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="default"
                  iconName="Linkedin"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90"
                >
                  Connect on LinkedIn
                </Button>
                {currentStory?.mentoring && (
                  <div className="flex items-center space-x-2 text-success">
                    <Icon name="Users" size={16} />
                    <span className="font-cta text-sm">
                      Available for Mentoring
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 lg:p-12">
              <h4 className="font-cta font-semibold text-xl text-text-primary mb-6">
                Key Achievements
              </h4>
              <div className="space-y-4 mb-8">
                {currentStory?.achievements?.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-success rounded-full flex items-center justify-center mt-0.5">
                      <Icon name="Check" size={14} color="white" />
                    </div>
                    <p className="font-body text-text-secondary leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {stories?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStory(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === activeStory ? "bg-primary" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ChevronLeft"
                    onClick={prevStory}
                    className="w-10 h-10 p-0"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ChevronRight"
                    onClick={nextStory}
                    className="w-10 h-10 p-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-brand max-w-4xl mx-auto">
            <h3 className="font-headline font-bold text-2xl text-text-primary mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="font-body text-text-secondary mb-6">
              Join DIIT and transform your potential into professional
              excellence. Our comprehensive programs and industry connections
              will help you achieve similar career growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                iconName="GraduationCap"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90"
              >
                Explore Programs
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Talk to Alumni
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
