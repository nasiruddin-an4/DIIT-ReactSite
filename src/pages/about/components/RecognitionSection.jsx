import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const RecognitionSection = () => {
  const [activeTab, setActiveTab] = useState("affiliations");
  const [visibleItems, setVisibleItems] = useState(new Set());

  const tabs = [
    { id: "affiliations", name: "Affiliations", icon: "Award" },
    { id: "rankings", name: "Rankings", icon: "TrendingUp" },
    { id: "media", name: "Media Coverage", icon: "Newspaper" },
    { id: "milestones", name: "Milestones", icon: "Flag" },
  ];

  const recognitionData = {
    affiliations: [
      {
        id: 1,
        title: "National University of Bangladesh",
        description:
          "Official affiliation ensuring recognized degrees and maintaining national academic standards.",
        logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        year: "2003",
        type: "Primary Affiliation",
      },
      {
        id: 2,
        title: "University Grants Commission",
        description:
          "Approved by UGC Bangladesh for quality assurance and academic excellence standards.",
        logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        year: "2004",
        type: "Government Approval",
      },
      {
        id: 3,
        title: "Bangladesh Technical Education Board",
        description:
          "Recognition for technical and vocational education programs with industry alignment.",
        logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        year: "2005",
        type: "Technical Recognition",
      },
      {
        id: 4,
        title: "Association of Commonwealth Universities",
        description:
          "Member of ACU promoting international collaboration and academic exchange.",
        logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        year: "2018",
        type: "International Membership",
      },
    ],
    rankings: [
      {
        id: 1,
        title: "Top 10 Private Universities in Bangladesh",
        description:
          "Ranked among the top 10 private universities for academic excellence and student satisfaction.",
        source: "Bangladesh Education Rankings 2024",
        rank: "8th",
        category: "Overall Excellence",
      },
      {
        id: 2,
        title: "Best Engineering Programs",
        description:
          "Recognized for outstanding engineering education and industry-ready graduates.",
        source: "Technical Education Review 2023",
        rank: "5th",
        category: "Engineering Excellence",
      },
      {
        id: 3,
        title: "Highest Graduate Employment Rate",
        description:
          "Leading in graduate employment with 92% placement rate within 6 months of graduation.",
        source: "Career Services Report 2024",
        rank: "2nd",
        category: "Employment Success",
      },
      {
        id: 4,
        title: "Innovation in Digital Learning",
        description:
          "Awarded for pioneering digital learning methodologies and technology integration.",
        source: "EdTech Innovation Awards 2023",
        rank: "1st",
        category: "Digital Innovation",
      },
    ],
    media: [
      {
        id: 1,
        title: "The Daily Star Features DIIT's Innovation Lab",
        description:
          "Major coverage of our AI and IoT research initiatives contributing to national technology development.",
        publication: "The Daily Star",
        date: "March 15, 2024",
        type: "Research Feature",
      },
      {
        id: 2,
        title: "Prothom Alo Highlights Graduate Success Stories",
        description:
          "Feature story on DIIT alumni working in Fortune 500 companies and leading tech startups.",
        publication: "Prothom Alo",
        date: "February 28, 2024",
        type: "Alumni Success",
      },
      {
        id: 3,
        title: "Bangladesh Television Documentary",
        description:
          "BTV documentary showcasing DIIT's contribution to Bangladesh's digital transformation.",
        publication: "Bangladesh Television",
        date: "January 20, 2024",
        type: "Documentary",
      },
      {
        id: 4,
        title: "Channel i Campus Report",
        description:
          "Special campus report highlighting student life, facilities, and academic programs at DIIT.",
        publication: "Channel i",
        date: "December 10, 2023",
        type: "Campus Feature",
      },
    ],
    milestones: [
      {
        id: 1,
        title: "25th Anniversary Celebration",
        description:
          "Celebrating 25 years of educational excellence with a grand ceremony attended by education ministers and industry leaders.",
        date: "October 2024",
        impact: "1,300+ graduates, 800+ employed",
      },
      {
        id: 2,
        title: "New Research Center Launch",
        description:
          "Inauguration of the Advanced Technology Research Center focusing on AI, Machine Learning, and Sustainable Technology.",
        date: "August 2024",
        impact: "₹50 lakh investment, 20+ research projects",
      },
      {
        id: 3,
        title: "International Partnership Expansion",
        description:
          "Signed MOUs with 5 international universities for student exchange and collaborative research programs.",
        date: "June 2024",
        impact: "50+ exchange opportunities annually",
      },
      {
        id: 4,
        title: "Industry 4.0 Lab Establishment",
        description:
          "State-of-the-art Industry 4.0 laboratory equipped with IoT, robotics, and automation technologies.",
        date: "April 2024",
        impact: "500+ students benefited, 15+ industry projects",
      },
    ],
  };

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

    const items = document.querySelectorAll(".recognition-item");
    items?.forEach((item) => observer?.observe(item));

    return () => observer?.disconnect();
  }, [activeTab]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Shield" size={24} color="white" />
            </div>
            <span className="text-primary font-semibold">Recognition</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-accent font-bold text-primary mb-6">
            Awards & Accreditations
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our commitment to excellence is recognized by national and
            international bodies, media coverage, and significant milestones in
            our educational journey.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab?.id
                  ? "bg-accent text-white shadow-brand-lg"
                  : "bg-slate-100 text-text-secondary hover:bg-slate-200 hover:text-primary"
              }`}
            >
              <Icon name={tab?.icon} size={20} />
              <span>{tab?.name}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {recognitionData?.[activeTab]?.map((item, index) => (
            <div
              key={item?.id}
              data-index={index}
              className={`recognition-item transition-all duration-700 ${
                visibleItems?.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1 h-full">
                {activeTab === "affiliations" && (
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item?.logo}
                        alt={item?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
                          {item?.year}
                        </span>
                        <span className="text-sm text-text-secondary">
                          {item?.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3">
                        {item?.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "rankings" && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {item?.rank}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {item?.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {item?.title}
                    </h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {item?.description}
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Icon name="ExternalLink" size={16} />
                      <span>{item?.source}</span>
                    </div>
                  </div>
                )}

                {activeTab === "media" && (
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <Icon name="Newspaper" size={20} color="white" />
                      </div>
                      <div>
                        <div className="font-semibold text-primary">
                          {item?.publication}
                        </div>
                        <div className="text-sm text-text-secondary">
                          {item?.date}
                        </div>
                      </div>
                      <span className="ml-auto text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
                        {item?.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {item?.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {item?.description}
                    </p>
                  </div>
                )}

                {activeTab === "milestones" && (
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                        <Icon name="Flag" size={24} color="white" />
                      </div>
                      <div>
                        <div className="font-semibold text-success">
                          {item?.date}
                        </div>
                        <div className="text-sm text-text-secondary">
                          Milestone Achievement
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {item?.title}
                    </h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {item?.description}
                    </p>
                    <div className="flex items-center space-x-2 text-sm font-semibold text-success">
                      <Icon name="TrendingUp" size={16} />
                      <span>{item?.impact}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-slate-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Trusted by Leading Organizations
            </h3>
            <p className="text-text-secondary">
              Our partnerships and recognitions reflect our commitment to
              educational excellence and industry relevance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6, 7, 8]?.map((index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-brand mx-auto mb-3 flex items-center justify-center">
                  <Icon name="Award" size={24} color="var(--color-primary)" />
                </div>
                <div className="text-sm font-medium text-text-secondary">
                  Partner {index}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
