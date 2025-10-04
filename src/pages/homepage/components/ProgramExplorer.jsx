import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const ProgramExplorer = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: "Computer Science & Engineering",
      category: "engineering",
      duration: "4 Years",
      degree: "B.Sc. in CSE",
      description:
        "Comprehensive program covering software development, AI, machine learning, and system design with hands-on industry projects.",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
    {
      id: 2,
      title: "Business Administration",
      category: "business",
      duration: "4 Years",
      degree: "BBA",
      description:
        "Strategic business education focusing on leadership, entrepreneurship, digital marketing, and global business practices.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 3,
      title: "Electrical & Electronic Engineering",
      category: "engineering",
      duration: "4 Years",
      degree: "B.Sc. in EEE",
      description:
        "Advanced engineering program covering power systems, electronics, telecommunications, and renewable energy technologies.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 4,
      title: "Graphic Design & Multimedia",
      category: "design",
      duration: "4 Years",
      degree: "B.Des",
      description:
        "Creative program combining traditional design principles with modern digital tools, UX/UI design, and multimedia production.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    },
    {
      id: 5,
      title: "Data Science & Analytics",
      category: "science",
      duration: "4 Years",
      degree: "B.Sc. in Data Science",
      description:
        "Cutting-edge program focusing on big data, statistical analysis, machine learning, and business intelligence.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 6,
      title: "Digital Marketing",
      category: "business",
      duration: "4 Years",
      degree: "BBA in Digital Marketing",
      description:
        "Modern marketing program covering social media, SEO, content marketing, analytics, and e-commerce strategies.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    },
  ];

  const filteredPrograms =
    activeCategory === "all"
      ? programs
      : programs?.filter((program) => program?.category === activeCategory);

  const openProgramModal = (program) => {
    setSelectedProgram(program);
  };

  const closeProgramModal = () => {
    setSelectedProgram(null);
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        {/* Section Header */}
        <div className="flex justify-between gap-4 mb-16">
          <div>
            <h2 className="font-headline font-bold text-4xl lg:text-5xl text-primary mb-2">
              Discover Your Perfect Program
            </h2>
            <p className="font-body text-xl text-text-secondary leading-relaxed">
              38 programs • 6 faculties • Undergraduate & Graduate pathways
            </p>
          </div>
          <div>
            <Link
              to="/programs"
              className="group inline-flex items-center gap-2 border border-primary px-4 py-3 rounded-lg font-medium text-primary transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-800 hover:to-black hover:text-white"
            >
              View All Programs
              <Icon
                name="ArrowRight"
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPrograms?.map((program, index) => (
            <div
              key={program?.id}
              className={`group relative bg-white rounded-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 overflow-hidden ${
                program?.featured ? "ring-2 ring-accent/20" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Program Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={program?.image}
                  alt={program?.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Quick Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{program?.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="TrendingUp" size={14} />
                      <span>{program?.placementRate}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-headline font-bold text-xl text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {program?.title}
                  </h3>
                  <p className="text-text-secondary text-sm font-medium mb-3">
                    {program?.degree}
                  </p>
                  <p className="font-body text-text-secondary leading-relaxed text-sm">
                    {program?.description}
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {program?.skills?.slice(0, 3)?.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-slate-100 text-text-secondary text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                  {program?.skills?.length > 3 && (
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md">
                      +{program?.skills?.length - 3} more
                    </span>
                  )}
                </div>

                {/* Program Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center">
                    <div className="font-bold text-lg text-success">
                      {program?.avgSalary}
                    </div>
                    <div className="text-xs text-text-secondary">
                      Avg. Salary
                    </div>
                  </div>
                  <div className="w-px h-8 bg-slate-200"></div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-primary">
                      {program?.placementRate}
                    </div>
                    <div className="text-xs text-text-secondary">Placement</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openProgramModal(program)}
                    iconName="Eye"
                    iconPosition="left"
                    iconSize={16}
                    className="flex-1"
                  >
                    View Details
                  </Button>
                  <Link to="/admissions" className="flex-1">
                    <Button
                      variant="default"
                      size="sm"
                      iconName="ArrowRight"
                      iconPosition="right"
                      iconSize={16}
                      className="w-full bg-accent hover:bg-accent/90"
                    >
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Programs CTA */}
        <div className="text-center mt-12">
          <Link to="/programs">
            <Button
              variant="outline"
              size="lg"
              iconName="Grid3X3"
              iconPosition="left"
              iconSize={20}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              View All Programs
            </Button>
          </Link>
        </div>
      </div>
      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <div className="h-64 overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedProgram?.image}
                  alt={selectedProgram?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <button
                onClick={closeProgramModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                <Icon name="X" size={20} color="white" />
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-headline font-bold text-3xl mb-2">
                  {selectedProgram?.title}
                </h3>
                <p className="text-lg opacity-90">{selectedProgram?.degree}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <h4 className="font-headline font-bold text-xl text-primary mb-4">
                    Program Overview
                  </h4>
                  <p className="font-body text-text-secondary leading-relaxed mb-6">
                    {selectedProgram?.description}
                  </p>

                  <h4 className="font-headline font-bold text-xl text-primary mb-4">
                    Key Skills You'll Learn
                  </h4>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {selectedProgram?.skills?.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="text-text-secondary">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <h4 className="font-headline font-bold text-xl text-primary mb-4">
                    Career Opportunities
                  </h4>
                  <div className="space-y-3 mb-6">
                    {selectedProgram?.careerPaths?.map((career, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg"
                      >
                        <Icon
                          name="Briefcase"
                          size={16}
                          className="text-accent"
                        />
                        <span className="font-medium text-primary">
                          {career}
                        </span>
                      </div>
                    ))}
                  </div>

                  <h4 className="font-headline font-bold text-xl text-primary mb-4">
                    Program Statistics
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-success/10 rounded-lg">
                      <div className="font-bold text-2xl text-success">
                        {selectedProgram?.avgSalary}
                      </div>
                      <div className="text-sm text-text-secondary">
                        Average Starting Salary
                      </div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="font-bold text-2xl text-primary">
                        {selectedProgram?.placementRate}
                      </div>
                      <div className="text-sm text-text-secondary">
                        Placement Rate
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex space-x-4 mt-8 pt-6 border-t border-slate-200">
                <Button
                  variant="outline"
                  onClick={closeProgramModal}
                  className="flex-1"
                >
                  Close
                </Button>
                <Link to="/admissions" className="flex-1">
                  <Button
                    variant="default"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="w-full bg-accent hover:bg-accent/90"
                  >
                    Apply for This Program
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProgramExplorer;
