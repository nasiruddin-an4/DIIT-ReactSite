import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const batchOptions = [
    { value: "", label: "All Batches" },
    { value: "2023", label: "Batch 2023" },
    { value: "2022", label: "Batch 2022" },
    { value: "2021", label: "Batch 2021" },
    { value: "2020", label: "Batch 2020" },
    { value: "2019", label: "Batch 2019" },
  ];

  const industryOptions = [
    { value: "", label: "All Industries" },
    { value: "software", label: "Software Development" },
    { value: "banking", label: "Banking & Finance" },
    { value: "telecom", label: "Telecommunications" },
    { value: "consulting", label: "IT Consulting" },
    { value: "startup", label: "Startups" },
    { value: "government", label: "Government" },
  ];

  const alumni = [
    {
      id: 1,
      name: "Md. Rafiqul Islam",
      batch: "2020",
      degree: "BSc in Computer Science",
      position: "Senior Software Engineer",
      company: "Grameenphone Ltd",
      industry: "telecom",
      location: "Dhaka, Bangladesh",
      experience: "4 years",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/rafiqul-islam",
      achievements: ["Team Lead", "Innovation Award 2023"],
      mentoring: true,
      skills: ["React", "Node.js", "Python", "AWS"],
    },
    {
      id: 2,
      name: "Fatema Khatun",
      batch: "2019",
      degree: "BSc in Software Engineering",
      position: "Product Manager",
      company: "bKash Limited",
      industry: "banking",
      location: "Dhaka, Bangladesh",
      experience: "5 years",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/fatema-khatun",
      achievements: ["Product Excellence Award", "Women in Tech Leader"],
      mentoring: true,
      skills: ["Product Strategy", "Agile", "Data Analysis", "UX Design"],
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      batch: "2021",
      degree: "BSc in Information Technology",
      position: "DevOps Engineer",
      company: "Pathao Ltd",
      industry: "startup",
      location: "Dhaka, Bangladesh",
      experience: "3 years",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/ahmed-hassan",
      achievements: ["Cloud Architecture Certification", "Best Employee 2024"],
      mentoring: false,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      batch: "2018",
      degree: "BSc in Computer Science",
      position: "Technical Consultant",
      company: "Accenture Bangladesh",
      industry: "consulting",
      location: "Dhaka, Bangladesh",
      experience: "6 years",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/nusrat-jahan",
      achievements: ["Client Excellence Award", "Technical Leadership"],
      mentoring: true,
      skills: ["SAP", "Business Analysis", "Project Management", "ERP"],
    },
    {
      id: 5,
      name: "Mohammad Ali",
      batch: "2022",
      degree: "BSc in Software Engineering",
      position: "Full Stack Developer",
      company: "Samsung R&D Bangladesh",
      industry: "software",
      location: "Dhaka, Bangladesh",
      experience: "2 years",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/mohammad-ali",
      achievements: ["Innovation Challenge Winner", "Patent Filed"],
      mentoring: false,
      skills: ["React Native", "Flutter", "Java", "Android"],
    },
    {
      id: 6,
      name: "Rashida Begum",
      batch: "2017",
      degree: "BSc in Information Technology",
      position: "IT Manager",
      company: "Bangladesh Bank",
      industry: "government",
      location: "Dhaka, Bangladesh",
      experience: "7 years",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/rashida-begum",
      achievements: [
        "Digital Transformation Lead",
        "Government Excellence Award",
      ],
      mentoring: true,
      skills: [
        "System Administration",
        "Cybersecurity",
        "Digital Banking",
        "Compliance",
      ],
    },
  ];

  const filteredAlumni = alumni?.filter((person) => {
    const matchesSearch =
      person?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      person?.company?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      person?.position?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    const matchesBatch = !selectedBatch || person?.batch === selectedBatch;
    const matchesIndustry =
      !selectedIndustry || person?.industry === selectedIndustry;

    return matchesSearch && matchesBatch && matchesIndustry;
  });

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Users" size={18} color="var(--color-primary)" />
            <span className="font-cta font-medium text-primary text-sm">
              Alumni Directory
            </span>
          </div>
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-text-primary mb-4">
            Connect with Our Alumni
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Discover and connect with DIIT graduates who are making their mark
            across various industries and are ready to share their experiences.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-surface rounded-2xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              type="search"
              placeholder="Search by name, company, or position..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="md:col-span-1"
            />
            <Select
              placeholder="Select batch"
              options={batchOptions}
              value={selectedBatch}
              onChange={setSelectedBatch}
            />
            <Select
              placeholder="Select industry"
              options={industryOptions}
              value={selectedIndustry}
              onChange={setSelectedIndustry}
            />
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <div className="text-sm text-text-secondary">
              Showing {filteredAlumni?.length} of {alumni?.length} alumni
            </div>
            <Button
              variant="ghost"
              size="sm"
              iconName="RotateCcw"
              iconPosition="left"
              onClick={() => {
                setSearchTerm("");
                setSelectedBatch("");
                setSelectedIndustry("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAlumni?.map((person) => (
            <div
              key={person?.id}
              className="bg-white rounded-xl border border-border p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="relative">
                  <Image
                    src={person?.avatar}
                    alt={person?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  {person?.mentoring && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                      <Icon name="Users" size={12} color="white" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-cta font-semibold text-lg text-text-primary mb-1">
                    {person?.name}
                  </h3>
                  <p className="font-body text-sm text-text-secondary mb-1">
                    {person?.degree} • Batch {person?.batch}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="MapPin"
                      size={12}
                      color="var(--color-text-secondary)"
                    />
                    <span className="font-body text-xs text-text-secondary">
                      {person?.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Position & Company */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon
                    name="Briefcase"
                    size={16}
                    color="var(--color-primary)"
                  />
                  <span className="font-cta font-medium text-text-primary">
                    {person?.position}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <Icon
                    name="Building2"
                    size={16}
                    color="var(--color-text-secondary)"
                  />
                  <span className="font-body text-text-secondary">
                    {person?.company}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon
                    name="Clock"
                    size={16}
                    color="var(--color-text-secondary)"
                  />
                  <span className="font-body text-text-secondary">
                    {person?.experience} experience
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {person?.skills?.slice(0, 3)?.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs font-cta rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                  {person?.skills?.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-text-secondary text-xs font-cta rounded-md">
                      +{person?.skills?.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Achievements */}
              {person?.achievements?.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Award" size={14} color="var(--color-accent)" />
                    <span className="font-cta font-medium text-sm text-text-primary">
                      Recent Achievements
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {person?.achievements
                      ?.slice(0, 2)
                      ?.map((achievement, index) => (
                        <li
                          key={index}
                          className="font-body text-xs text-text-secondary flex items-center space-x-2"
                        >
                          <Icon
                            name="CheckCircle"
                            size={10}
                            color="var(--color-success)"
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Linkedin"
                    iconPosition="left"
                    iconSize={14}
                    className="text-primary hover:text-primary/80"
                  >
                    LinkedIn
                  </Button>
                  {person?.mentoring && (
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Users"
                        size={12}
                        color="var(--color-success)"
                      />
                      <span className="font-body text-xs text-success">
                        Mentoring
                      </span>
                    </div>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="MessageCircle"
                  iconPosition="left"
                  iconSize={14}
                >
                  Connect
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredAlumni?.length > 0 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              iconName="ChevronDown"
              iconPosition="right"
              className="hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Load More Alumni
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredAlumni?.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Search"
              size={48}
              color="var(--color-text-secondary)"
              className="mx-auto mb-4"
            />
            <h3 className="font-headline font-semibold text-xl text-text-primary mb-2">
              No Alumni Found
            </h3>
            <p className="font-body text-text-secondary mb-6">
              Try adjusting your search criteria or filters to find more alumni.
            </p>
            <Button
              variant="default"
              iconName="RotateCcw"
              iconPosition="left"
              onClick={() => {
                setSearchTerm("");
                setSelectedBatch("");
                setSelectedIndustry("");
              }}
            >
              Reset Search
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AlumniDirectory;
