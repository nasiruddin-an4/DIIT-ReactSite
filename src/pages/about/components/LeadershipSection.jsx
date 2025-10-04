import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const LeadershipSection = () => {
  const [activeLeader, setActiveLeader] = useState(0);

  const leaders = [
    {
      id: 1,
      name: "Dr. Mohammad Rahman",
      position: "Vice Chancellor",
      department: "Computer Science & Engineering",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: `Dr. Rahman brings over 25 years of academic excellence and industry experience to DIIT. His vision of 'Excellence Through Innovation' has transformed thousands of students into industry leaders.\n\nUnder his leadership, DIIT has achieved national recognition and established partnerships with leading technology companies across Bangladesh and internationally.`,
      achievements: [
        "PhD in Computer Science from University of Dhaka",
        "Former Senior Software Architect at Samsung R&D",
        "Published 50+ research papers in international journals",
        "Recipient of National Education Excellence Award 2023",
      ],
      videoThumbnail:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Prof. Fatima Khatun",
      position: "Pro Vice Chancellor",
      department: "Academic Affairs",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c9c0b8e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: `Prof. Khatun is instrumental in developing DIIT's academic programs that bridge theoretical knowledge with practical industry applications.\n\nHer innovative curriculum design ensures our graduates are job-ready and equipped with cutting-edge skills demanded by the modern technology sector.`,
      achievements: [
        "Master's in Educational Leadership from BRAC University",
        "15+ years in curriculum development and academic administration",
        "Pioneered industry-integrated learning programs",
        "Women in Tech Leadership Award 2022",
      ],
      videoThumbnail:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Dr. Ahmed Hassan",
      position: "Dean of Engineering",
      department: "Electrical & Electronics Engineering",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: `Dr. Hassan leads our engineering programs with a focus on sustainable technology and innovation. His research in renewable energy systems has contributed significantly to Bangladesh's green technology initiatives.\n\nHe ensures our engineering graduates are prepared to tackle real-world challenges with innovative solutions.`,
      achievements: [
        "PhD in Electrical Engineering from BUET",
        "Former Research Scientist at Siemens AG, Germany",
        "30+ patents in renewable energy technology",
        "IEEE Fellow and Distinguished Lecturer",
      ],
      videoThumbnail:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleVideoPlay = (leaderId) => {
    // Mock video play functionality
    console.log(`Playing video message from leader ${leaderId}`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Users" size={24} color="white" />
            </div>
            <span className="text-primary font-semibold">Leadership</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-accent font-bold text-primary mb-6">
            Visionary Leaders
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Meet the distinguished leaders who guide DIIT's mission of
            transforming education and shaping the future of technology in
            Bangladesh.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {leaders?.map((leader, index) => (
            <div
              key={leader?.id}
              onClick={() => setActiveLeader(index)}
              className={`cursor-pointer transition-all duration-300 ${
                activeLeader === index
                  ? "transform scale-105"
                  : "hover:transform hover:scale-102"
              }`}
            >
              <div
                className={`bg-white rounded-2xl p-6 shadow-brand-lg hover:shadow-brand-xl transition-all duration-300 border-2 ${
                  activeLeader === index
                    ? "border-accent shadow-brand-xl"
                    : "border-transparent"
                }`}
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                    <Image
                      src={leader?.image}
                      alt={leader?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {activeLeader === index && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-pulse-accent">
                      <Icon name="Crown" size={16} color="white" />
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {leader?.name}
                  </h3>
                  <p className="text-accent font-semibold mb-1">
                    {leader?.position}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {leader?.department}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Leader Details */}
        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Leader Info */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={leaders?.[activeLeader]?.image}
                    alt={leaders?.[activeLeader]?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">
                    {leaders?.[activeLeader]?.name}
                  </h3>
                  <p className="text-accent font-semibold">
                    {leaders?.[activeLeader]?.position}
                  </p>
                </div>
              </div>

              <div className="prose prose-lg text-text-secondary mb-8">
                {leaders?.[activeLeader]?.bio
                  ?.split("\n\n")
                  ?.map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
              </div>

              <div>
                <h4 className="text-lg font-bold text-primary mb-4">
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {leaders?.[activeLeader]?.achievements?.map(
                    (achievement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-text-secondary">
                          {achievement}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Video Message */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-brand-lg">
                <Image
                  src={leaders?.[activeLeader]?.videoThumbnail}
                  alt={`${leaders?.[activeLeader]?.name} Video Message`}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button
                    onClick={() => handleVideoPlay(leaders?.[activeLeader]?.id)}
                    className="w-20 h-20 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center shadow-brand-lg hover:shadow-brand-xl transition-all duration-300 hover:scale-110 group"
                  >
                    <Icon
                      name="Play"
                      size={32}
                      color="white"
                      className="ml-1 group-hover:scale-110 transition-transform duration-200"
                    />
                  </button>
                </div>
              </div>

              <div className="mt-6 text-center">
                <h4 className="text-lg font-bold text-primary mb-2">
                  Personal Message
                </h4>
                <p className="text-text-secondary">
                  Watch {leaders?.[activeLeader]?.name}'s inspiring message
                  about DIIT's vision and commitment to student success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
