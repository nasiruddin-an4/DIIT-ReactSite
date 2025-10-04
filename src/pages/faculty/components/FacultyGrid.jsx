import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const FacultyGrid = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const departments = [
    { id: "all", name: "All Departments", count: 80 },
    { id: "cse", name: "Computer Science", count: 25 },
    { id: "eee", name: "Electrical Engineering", count: 18 },
    { id: "business", name: "Business Administration", count: 20 },
    { id: "english", name: "English Literature", count: 12 },
    { id: "mathematics", name: "Mathematics", count: 5 },
  ];

  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Mohammad Rahman",
      designation: "Professor & Head",
      department: "cse",
      specialization: "Artificial Intelligence, Machine Learning",
      education: "PhD in Computer Science, University of Toronto",
      experience: "18 years",
      publications: 45,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "m.rahman@diit.edu.bd",
      researchAreas: ["AI", "ML", "Data Science"],
      awards: ["Best Researcher 2023", "Excellence in Teaching 2022"],
    },
    {
      id: 2,
      name: "Dr. Fatima Khatun",
      designation: "Associate Professor",
      department: "business",
      specialization: "Strategic Management, Entrepreneurship",
      education: "PhD in Business Administration, Harvard Business School",
      experience: "15 years",
      publications: 32,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "f.khatun@diit.edu.bd",
      researchAreas: ["Strategy", "Innovation", "Leadership"],
      awards: ["Outstanding Faculty 2023", "Research Excellence 2021"],
    },
    {
      id: 3,
      name: "Dr. Ahmed Hassan",
      designation: "Professor",
      department: "eee",
      specialization: "Power Systems, Renewable Energy",
      education: "PhD in Electrical Engineering, MIT",
      experience: "20 years",
      publications: 58,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "a.hassan@diit.edu.bd",
      researchAreas: ["Power Systems", "Smart Grid", "Solar Energy"],
      awards: ["IEEE Fellow", "Best Paper Award 2022"],
    },
    {
      id: 4,
      name: "Dr. Rashida Begum",
      designation: "Assistant Professor",
      department: "english",
      specialization: "Contemporary Literature, Creative Writing",
      education: "PhD in English Literature, Oxford University",
      experience: "12 years",
      publications: 28,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "r.begum@diit.edu.bd",
      researchAreas: ["Modern Literature", "Cultural Studies", "Writing"],
      awards: ["Literary Excellence Award", "Teaching Innovation 2023"],
    },
    {
      id: 5,
      name: "Dr. Karim Uddin",
      designation: "Associate Professor",
      department: "mathematics",
      specialization: "Applied Mathematics, Statistics",
      education: "PhD in Mathematics, Cambridge University",
      experience: "16 years",
      publications: 41,
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "k.uddin@diit.edu.bd",
      researchAreas: ["Statistics", "Data Analysis", "Mathematical Modeling"],
      awards: ["Mathematical Society Award", "Research Grant Winner 2022"],
    },
    {
      id: 6,
      name: "Dr. Nasreen Akter",
      designation: "Professor",
      department: "cse",
      specialization: "Cybersecurity, Network Security",
      education: "PhD in Computer Science, Stanford University",
      experience: "17 years",
      publications: 52,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "n.akter@diit.edu.bd",
      researchAreas: ["Cybersecurity", "Blockchain", "Network Protocols"],
      awards: ["Security Research Excellence", "Industry Collaboration Award"],
    },
  ];

  const filteredFaculty = facultyMembers?.filter((faculty) => {
    const matchesDepartment =
      selectedDepartment === "all" ||
      faculty?.department === selectedDepartment;
    const matchesSearch =
      faculty?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      faculty?.specialization
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-primary mb-4">
            Meet Our Distinguished Faculty
          </h2>
          <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto">
            Explore profiles of our world-class educators who bring together
            academic excellence and industry expertise.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
              />
              <input
                type="text"
                placeholder="Search faculty by name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e?.target?.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {departments?.map((dept) => (
                <button
                  key={dept?.id}
                  onClick={() => setSelectedDepartment(dept?.id)}
                  className={`px-4 py-2 rounded-lg font-cta font-medium text-sm transition-all duration-200 ${
                    selectedDepartment === dept?.id
                      ? "bg-primary text-white shadow-brand"
                      : "bg-surface text-text-secondary hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {dept?.name} ({dept?.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty?.map((faculty) => (
            <div
              key={faculty?.id}
              className="bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative">
                <Image
                  src={faculty?.image}
                  alt={faculty?.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-headline font-bold text-xl text-white mb-1">
                    {faculty?.name}
                  </h3>
                  <p className="text-white/90 font-cta text-sm">
                    {faculty?.designation}
                  </p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-xs font-medium">
                      {faculty?.publications} Publications
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon
                      name="GraduationCap"
                      size={16}
                      className="text-primary"
                    />
                    <span className="text-sm text-text-secondary font-cta">
                      {faculty?.education}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Clock" size={16} className="text-accent" />
                    <span className="text-sm text-text-secondary font-cta">
                      {faculty?.experience} Experience
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-innovation" />
                    <span className="text-sm text-text-secondary font-cta">
                      {faculty?.email}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-headline font-semibold text-primary mb-2">
                    Specialization
                  </h4>
                  <p className="text-text-secondary font-body text-sm">
                    {faculty?.specialization}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-headline font-semibold text-primary mb-2">
                    Research Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {faculty?.researchAreas?.map((area, index) => (
                      <span
                        key={index}
                        className="bg-surface text-text-secondary px-2 py-1 rounded text-xs font-cta"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-headline font-semibold text-primary mb-2">
                    Recent Awards
                  </h4>
                  <ul className="space-y-1">
                    {faculty?.awards?.map((award, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Icon name="Award" size={14} className="text-accent" />
                        <span className="text-text-secondary font-body text-sm">
                          {award}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg font-cta font-medium text-sm flex items-center justify-center space-x-2 transition-all duration-200">
                    <Icon name="User" size={16} />
                    <span>View Profile</span>
                  </button>
                  <button className="bg-surface hover:bg-slate-200 text-text-secondary hover:text-primary p-2 rounded-lg transition-all duration-200">
                    <Icon name="Mail" size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFaculty?.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Search"
              size={48}
              className="text-text-secondary mx-auto mb-4"
            />
            <h3 className="font-headline font-semibold text-xl text-primary mb-2">
              No Faculty Found
            </h3>
            <p className="text-text-secondary font-body">
              Try adjusting your search criteria or department filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FacultyGrid;
