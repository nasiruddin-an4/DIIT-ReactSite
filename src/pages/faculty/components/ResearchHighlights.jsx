import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

const ResearchHighlights = () => {
  const [activeTab, setActiveTab] = useState("publications");

  const tabs = [
    { id: "publications", name: "Recent Publications", icon: "BookOpen" },
    { id: "projects", name: "Research Projects", icon: "Microscope" },
    { id: "collaborations", name: "Collaborations", icon: "Users" },
  ];

  const publications = [
    {
      id: 1,
      title:
        "Advanced Machine Learning Algorithms for Healthcare Data Analysis",
      authors: "Dr. Mohammad Rahman, Dr. Nasreen Akter",
      journal: "IEEE Transactions on Biomedical Engineering",
      year: "2024",
      citations: 45,
      impact: "High Impact",
      abstract: `This research presents novel machine learning algorithms specifically designed for healthcare data analysis, focusing on predictive modeling for patient outcomes and treatment optimization.`,
      keywords: ["Machine Learning", "Healthcare", "Predictive Modeling"],
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "Sustainable Energy Management in Smart Grid Systems",
      authors: "Dr. Ahmed Hassan, Dr. Karim Uddin",
      journal: "Renewable Energy Journal",
      year: "2024",
      citations: 32,
      impact: "Medium Impact",
      abstract: `A comprehensive study on implementing sustainable energy management strategies in smart grid systems, with focus on renewable energy integration and optimization.`,
      keywords: ["Smart Grid", "Renewable Energy", "Sustainability"],
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Digital Transformation in Bangladesh's SME Sector",
      authors: "Dr. Fatima Khatun",
      journal: "Journal of Business Research",
      year: "2024",
      citations: 28,
      impact: "High Impact",
      abstract: `An empirical analysis of digital transformation initiatives in Bangladesh's small and medium enterprises, examining adoption patterns and success factors.`,
      keywords: ["Digital Transformation", "SME", "Bangladesh"],
      downloadUrl: "#",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "AI-Powered Educational Platform for Rural Bangladesh",
      lead: "Dr. Mohammad Rahman",
      team: ["Dr. Nasreen Akter", "Dr. Rashida Begum"],
      funding: "৳50,00,000",
      duration: "2023-2025",
      status: "Ongoing",
      description: `Developing an AI-powered educational platform to provide quality education access to rural areas of Bangladesh, incorporating local language support and adaptive learning technologies.`,
      objectives: [
        "Develop multilingual AI tutoring system",
        "Create offline-capable learning modules",
        "Implement adaptive assessment tools",
      ],
      impact: "Expected to reach 10,000+ rural students",
    },
    {
      id: 2,
      title: "Blockchain-Based Supply Chain Management for Agriculture",
      lead: "Dr. Ahmed Hassan",
      team: ["Dr. Karim Uddin"],
      funding: "৳35,00,000",
      duration: "2024-2026",
      status: "Planning",
      description: `Research project focused on implementing blockchain technology for transparent and efficient agricultural supply chain management in Bangladesh.`,
      objectives: [
        "Design blockchain architecture for agriculture",
        "Develop farmer-friendly mobile applications",
        "Create transparent pricing mechanisms",
      ],
      impact: "Targeting 5,000+ farmers in pilot phase",
    },
  ];

  const collaborations = [
    {
      id: 1,
      title: "International AI Research Consortium",
      partners: ["MIT", "University of Toronto", "IIT Delhi"],
      lead: "Dr. Mohammad Rahman",
      focus: "Artificial Intelligence in Education",
      duration: "2023-2026",
      funding: "$200,000",
      description: `Multi-institutional research collaboration focusing on developing AI solutions for educational challenges in developing countries.`,
      outcomes: [
        "5 joint publications",
        "2 patent applications",
        "Student exchange program",
      ],
    },
    {
      id: 2,
      title: "Bangladesh-Germany Energy Partnership",
      partners: ["Technical University of Munich", "Fraunhofer Institute"],
      lead: "Dr. Ahmed Hassan",
      focus: "Renewable Energy Systems",
      duration: "2024-2027",
      funding: "€150,000",
      description: `Bilateral research partnership focusing on renewable energy integration and smart grid technologies for Bangladesh's energy sector.`,
      outcomes: [
        "Technology transfer program",
        "Joint research facility",
        "PhD student scholarships",
      ],
    },
  ];

  const renderPublications = () => (
    <div className="space-y-6">
      {publications?.map((pub) => (
        <div
          key={pub?.id}
          className="bg-white rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
            <div className="flex-1">
              <h3 className="font-headline font-bold text-xl text-primary mb-2 hover:text-accent transition-colors duration-200 cursor-pointer">
                {pub?.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-3">
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={14} />
                  <span>{pub?.authors}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={14} />
                  <span>{pub?.year}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Quote" size={14} />
                  <span>{pub?.citations} citations</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  pub?.impact === "High Impact"
                    ? "bg-success/10 text-success"
                    : "bg-warning/10 text-warning"
                }`}
              >
                {pub?.impact}
              </span>
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-cta font-medium text-sm flex items-center space-x-2 transition-all duration-200">
                <Icon name="Download" size={14} />
                <span>Download</span>
              </button>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-text-secondary font-body leading-relaxed">
              {pub?.abstract}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {pub?.keywords?.map((keyword, index) => (
                <span
                  key={index}
                  className="bg-surface text-text-secondary px-2 py-1 rounded text-xs font-cta"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <div className="text-sm text-text-secondary font-cta">
              Published in:{" "}
              <span className="font-semibold text-primary">{pub?.journal}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      {projects?.map((project) => (
        <div
          key={project?.id}
          className="bg-white rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
            <div className="flex-1">
              <h3 className="font-headline font-bold text-xl text-primary mb-2">
                {project?.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-3">
                <div className="flex items-center space-x-1">
                  <Icon name="User" size={14} />
                  <span>Lead: {project?.lead}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={14} />
                  <span>{project?.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="DollarSign" size={14} />
                  <span>{project?.funding}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project?.status === "Ongoing"
                    ? "bg-success/10 text-success"
                    : "bg-warning/10 text-warning"
                }`}
              >
                {project?.status}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-text-secondary font-body leading-relaxed mb-4">
              {project?.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-headline font-semibold text-primary mb-2">
                  Team Members
                </h4>
                <ul className="space-y-1">
                  {project?.team?.map((member, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Icon name="User" size={14} className="text-accent" />
                      <span className="text-text-secondary font-body text-sm">
                        {member}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-headline font-semibold text-primary mb-2">
                  Key Objectives
                </h4>
                <ul className="space-y-1">
                  {project?.objectives?.map((objective, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Icon
                        name="CheckCircle"
                        size={14}
                        className="text-success"
                      />
                      <span className="text-text-secondary font-body text-sm">
                        {objective}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Icon name="Target" size={16} className="text-accent" />
              <span className="font-headline font-semibold text-primary">
                Expected Impact:
              </span>
              <span className="text-text-secondary font-body">
                {project?.impact}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCollaborations = () => (
    <div className="space-y-6">
      {collaborations?.map((collab) => (
        <div
          key={collab?.id}
          className="bg-white rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
            <div className="flex-1">
              <h3 className="font-headline font-bold text-xl text-primary mb-2">
                {collab?.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-3">
                <div className="flex items-center space-x-1">
                  <Icon name="User" size={14} />
                  <span>Lead: {collab?.lead}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={14} />
                  <span>{collab?.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="DollarSign" size={14} />
                  <span>{collab?.funding}</span>
                </div>
              </div>
            </div>
            <div className="bg-innovation/10 text-innovation px-3 py-1 rounded-full text-xs font-medium">
              International
            </div>
          </div>

          <div className="mb-4">
            <p className="text-text-secondary font-body leading-relaxed mb-4">
              {collab?.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-headline font-semibold text-primary mb-2">
                  Partner Institutions
                </h4>
                <ul className="space-y-1">
                  {collab?.partners?.map((partner, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Icon
                        name="Globe"
                        size={14}
                        className="text-innovation"
                      />
                      <span className="text-text-secondary font-body text-sm">
                        {partner}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-headline font-semibold text-primary mb-2">
                  Key Outcomes
                </h4>
                <ul className="space-y-1">
                  {collab?.outcomes?.map((outcome, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Icon name="Award" size={14} className="text-accent" />
                      <span className="text-text-secondary font-body text-sm">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Icon name="Focus" size={16} className="text-primary" />
              <span className="font-headline font-semibold text-primary">
                Research Focus:
              </span>
              <span className="text-text-secondary font-body">
                {collab?.focus}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-primary mb-4">
            Research Excellence & Innovation
          </h2>
          <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto">
            Discover our faculty's groundbreaking research, innovative projects,
            and international collaborations that drive academic excellence.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-cta font-semibold transition-all duration-200 ${
                activeTab === tab?.id
                  ? "bg-primary text-white shadow-brand"
                  : "bg-white text-text-secondary hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <Icon name={tab?.icon} size={18} />
              <span>{tab?.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === "publications" && renderPublications()}
          {activeTab === "projects" && renderProjects()}
          {activeTab === "collaborations" && renderCollaborations()}
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlights;
