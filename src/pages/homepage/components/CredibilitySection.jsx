import React from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const CredibilitySection = () => {
  const accreditations = [
    {
      id: 1,
      name: "University Grants Commission",
      shortName: "UGC",
      description: "Approved by Bangladesh UGC",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      verified: true,
      category: "government",
    },
    {
      id: 2,
      name: "National University",
      shortName: "NU",
      description: "Affiliated with National University",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      verified: true,
      category: "academic",
    },
    {
      id: 3,
      name: "Ministry of Education",
      shortName: "MoE",
      description: "Recognized by Ministry of Education",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      verified: true,
      category: "government",
    },
    {
      id: 4,
      name: "ISO 9001:2015",
      shortName: "ISO",
      description: "Quality Management Certified",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      verified: true,
      category: "quality",
    },
  ];

  const industryPartners = [
    {
      id: 1,
      name: "Google",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      partnership: "Education Partner",
      category: "tech",
    },
    {
      id: 2,
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      partnership: "Azure Education",
      category: "tech",
    },
    {
      id: 3,
      name: "Amazon Web Services",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      partnership: "AWS Academy",
      category: "cloud",
    },
    {
      id: 4,
      name: "IBM",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      partnership: "SkillsBuild Partner",
      category: "ai",
    },
    {
      id: 5,
      name: "Oracle",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      partnership: "Database Training",
      category: "database",
    },
    {
      id: 6,
      name: "Cisco",
      logo: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      partnership: "Networking Academy",
      category: "networking",
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Top 10 IT Institute",
      description: "Ranked among Bangladesh's leading technology institutes",
      icon: "Trophy",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      year: "2024",
    },
    {
      id: 2,
      title: "Excellence in Education",
      description: "National Education Excellence Award recipient",
      icon: "Award",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      year: "2023",
    },
    {
      id: 3,
      title: "Industry Recognition",
      description: "Best Industry-Academia Collaboration Award",
      icon: "Star",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      year: "2023",
    },
    {
      id: 4,
      title: "Innovation Leader",
      description: "Technology Innovation in Education Award",
      icon: "Lightbulb",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      year: "2024",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Dr. Abdul Karim",
      role: "Former Education Secretary",
      organization: "Ministry of Education, Bangladesh",
      quote:
        "DIIT has consistently demonstrated excellence in technical education and has become a model institution for other institutes to follow.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Ahmed",
      role: "HR Director",
      organization: "Grameenphone Ltd.",
      quote:
        "DIIT graduates consistently demonstrate strong technical skills and professional attitude. They are among our preferred candidates.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-innovation/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Shield" size={20} className="text-success" />
            <span className="text-success font-medium text-sm">
              Trusted & Verified
            </span>
          </div>
          <h2 className="font-headline font-bold text-4xl lg:text-5xl text-primary mb-6">
            Credibility & Recognition
          </h2>
          <p className="font-body text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is recognized by government bodies,
            industry leaders, and educational authorities, ensuring you receive
            quality education with credible credentials.
          </p>
        </div>

        {/* Accreditations & Approvals */}
        <div className="mb-16">
          <h3 className="font-headline font-bold text-2xl text-primary text-center mb-8">
            Official Accreditations & Approvals
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {accreditations?.map((accreditation) => (
              <div
                key={accreditation?.id}
                className="group bg-white rounded-2xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2 border border-slate-200 text-center"
              >
                {/* Logo */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-slate-100 rounded-xl overflow-hidden">
                    <Image
                      src={accreditation?.logo}
                      alt={accreditation?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {accreditation?.verified && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                      <Icon
                        name="Check"
                        size={12}
                        color="white"
                        strokeWidth={3}
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h4 className="font-headline font-bold text-lg text-primary mb-2">
                  {accreditation?.shortName}
                </h4>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  {accreditation?.description}
                </p>

                {/* Category Badge */}
                <div className="mt-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize ${
                      accreditation?.category === "government"
                        ? "bg-blue-100 text-blue-700"
                        : accreditation?.category === "academic"
                        ? "bg-green-100 text-green-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {accreditation?.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Partnerships */}
        <div className="mb-16">
          <h3 className="font-headline font-bold text-2xl text-primary text-center mb-8">
            Industry Partnerships
          </h3>
          <div className="bg-white rounded-2xl p-8 shadow-brand border border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {industryPartners?.map((partner) => (
                <div
                  key={partner?.id}
                  className="group text-center hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-16 h-16 mx-auto bg-slate-100 rounded-xl overflow-hidden mb-3 group-hover:shadow-brand-lg transition-shadow duration-300">
                    <Image
                      src={partner?.logo}
                      alt={partner?.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h4 className="font-headline font-semibold text-sm text-primary mb-1">
                    {partner?.name}
                  </h4>
                  <p className="text-xs text-text-secondary">
                    {partner?.partnership}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 pt-6 border-t border-slate-200">
              <p className="text-text-secondary mb-4">
                <strong className="text-primary">200+</strong> industry partners
                providing internships, placements, and curriculum guidance
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="Building2" size={16} className="text-primary" />
                  <span>Fortune 500 Companies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Globe" size={16} className="text-primary" />
                  <span>International Partnerships</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Briefcase" size={16} className="text-primary" />
                  <span>Direct Recruitment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Achievements */}
        <div className="mb-16">
          <h3 className="font-headline font-bold text-2xl text-primary text-center mb-8">
            Awards & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements?.map((achievement, index) => (
              <div
                key={achievement?.id}
                className="group bg-white rounded-2xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2 border border-slate-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 ${achievement?.bgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={achievement?.icon}
                    size={24}
                    className={achievement?.color}
                    strokeWidth={2}
                  />
                </div>

                {/* Content */}
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-headline font-bold text-lg text-primary group-hover:text-accent transition-colors duration-300">
                    {achievement?.title}
                  </h4>
                  <span className="text-xs font-medium text-text-secondary bg-slate-100 px-2 py-1 rounded-md">
                    {achievement?.year}
                  </span>
                </div>
                <p className="font-body text-text-secondary leading-relaxed text-sm">
                  {achievement?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="font-headline font-bold text-2xl text-primary text-center mb-8">
            What Leaders Say About Us
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials?.map((testimonial) => (
              <div
                key={testimonial?.id}
                className="bg-white rounded-2xl p-8 shadow-brand border border-slate-200 hover:shadow-brand-lg transition-shadow duration-300"
              >
                {/* Quote */}
                <div className="mb-6">
                  <Icon
                    name="Quote"
                    size={32}
                    className="text-primary/20 mb-4"
                  />
                  <p className="font-body text-lg text-text-secondary leading-relaxed italic">
                    "{testimonial?.quote}"
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-500 fill-current"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden">
                    <Image
                      src={testimonial?.image}
                      alt={testimonial?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-primary">
                      {testimonial?.name}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {testimonial?.role}
                    </p>
                    <p className="text-xs text-text-secondary font-medium">
                      {testimonial?.organization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators Summary */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-brand border border-slate-200">
          <div className="text-center mb-8">
            <h3 className="font-headline font-bold text-2xl text-primary mb-4">
              Why Choose DIIT?
            </h3>
            <p className="font-body text-text-secondary max-w-2xl mx-auto">
              Our credibility is built on official recognition, industry
              partnerships, and proven track record of student success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Shield" size={28} className="text-success" />
              </div>
              <h4 className="font-headline font-bold text-lg text-primary mb-2">
                Government Approved
              </h4>
              <p className="text-sm text-text-secondary">
                UGC & Ministry recognized
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Building2" size={28} className="text-primary" />
              </div>
              <h4 className="font-headline font-bold text-lg text-primary mb-2">
                Industry Connected
              </h4>
              <p className="text-sm text-text-secondary">
                200+ partner companies
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Trophy" size={28} className="text-accent" />
              </div>
              <h4 className="font-headline font-bold text-lg text-primary mb-2">
                Award Winning
              </h4>
              <p className="text-sm text-text-secondary">
                Multiple excellence awards
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-innovation/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Users" size={28} className="text-innovation" />
              </div>
              <h4 className="font-headline font-bold text-lg text-primary mb-2">
                Proven Results
              </h4>
              <p className="text-sm text-text-secondary">
                98% placement success
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
