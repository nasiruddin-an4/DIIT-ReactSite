import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProgramCard from './components/ProgramCard';
import ProgramFilter from './components/ProgramFilter';
import ProgramComparison from './components/ProgramComparison';
import FacultyShowcase from './components/FacultyShowcase';
import FeeCalculator from './components/FeeCalculator';
import AcademicCalendar from './components/AcademicCalendar';

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [filteredPrograms, setFilteredPrograms] = useState([]);
  const [comparePrograms, setComparePrograms] = useState([]);
  const [activeFilters, setActiveFilters] = useState({
    search: '',
    department: 'all',
    degree: 'all',
    duration: 'all',
    feeRange: 'all',
    sort: 'relevance',
    minPlacement: 0,
    scholarshipAvailable: false,
    newProgram: false,
    industryPartnership: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  // Mock Programs Data
  const mockPrograms = [
    {
      id: 1,
      title: 'Bachelor of Science in Computer Science & Engineering',
      department: 'Computer Science & Engineering',
      duration: '4 Years',
      degree: "Bachelor's Degree",
      totalCredits: 144,
      tuitionFee: 120000,
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop',
      description: `Comprehensive program combining theoretical foundations with practical applications in software development, artificial intelligence, and system design. Students gain expertise in programming, algorithms, database systems, and emerging technologies.`,
      careerOutcomes: [
        'Software Engineer',
        'Data Scientist',
        'AI Specialist',
        'System Architect',
        'Product Manager',
        'Tech Entrepreneur',
      ],
      placementRate: 95,
      averageSalary: 450000,
      topRecruiters: ['Google', 'Microsoft', 'Samsung', 'Grameenphone', 'BRAC Bank', 'Pathao'],
      isNew: false,
      scholarshipAvailable: true,
      nextIntake: 'Spring 2025',
      industryPartnership: true,
    },
    {
      id: 2,
      title: 'Bachelor of Science in Electrical & Electronics Engineering',
      department: 'Electrical & Electronics Engineering',
      duration: '4 Years',
      degree: "Bachelor's Degree",
      totalCredits: 144,
      tuitionFee: 115000,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      description: `Advanced engineering program focusing on power systems, electronics, telecommunications, and renewable energy technologies. Hands-on laboratory experience with cutting-edge equipment and industry-standard tools.`,
      careerOutcomes: [
        'Electrical Engineer',
        'Electronics Designer',
        'Power Systems Engineer',
        'Telecommunications Engineer',
        'Automation Specialist',
        'Research Engineer',
      ],
      placementRate: 92,
      averageSalary: 420000,
      topRecruiters: ['Siemens', 'ABB', 'Schneider Electric', 'PGCB', 'DESCO', 'Walton'],
      isNew: false,
      scholarshipAvailable: true,
      nextIntake: 'Spring 2025',
      industryPartnership: true,
    },
    {
      id: 3,
      title: 'Bachelor of Business Administration',
      department: 'Business Administration',
      duration: '4 Years',
      degree: "Bachelor's Degree",
      totalCredits: 120,
      tuitionFee: 95000,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      description: `Comprehensive business education covering management, marketing, finance, and entrepreneurship. Strong emphasis on leadership development, strategic thinking, and practical business problem-solving skills.`,
      careerOutcomes: [
        'Business Analyst',
        'Marketing Manager',
        'Financial Analyst',
        'Operations Manager',
        'Consultant',
        'Entrepreneur',
      ],
      placementRate: 88,
      averageSalary: 350000,
      topRecruiters: [
        'Unilever',
        'Nestle',
        'BRAC Bank',
        'Dutch-Bangla Bank',
        'Grameenphone',
        'Robi',
      ],
      isNew: false,
      scholarshipAvailable: true,
      nextIntake: 'Spring 2025',
      industryPartnership: true,
    },
    {
      id: 4,
      title: 'Bachelor of Arts in English Literature',
      department: 'English Literature',
      duration: '4 Years',
      degree: "Bachelor's Degree",
      totalCredits: 120,
      tuitionFee: 75000,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      description: `Rich exploration of English literature, creative writing, and linguistic studies. Develops critical thinking, communication skills, and cultural understanding through analysis of classic and contemporary works.`,
      careerOutcomes: [
        'Content Writer',
        'Editor',
        'Journalist',
        'Teacher',
        'Translator',
        'Communications Specialist',
      ],
      placementRate: 82,
      averageSalary: 280000,
      topRecruiters: [
        'The Daily Star',
        'Prothom Alo',
        'BBC Media',
        'British Council',
        'UNDP',
        'Save the Children',
      ],
      isNew: false,
      scholarshipAvailable: true,
      nextIntake: 'Spring 2025',
      industryPartnership: false,
    },
    {
      id: 5,
      title: 'Bachelor of Science in Textile Engineering',
      department: 'Textile Engineering',
      duration: '4 Years',
      degree: "Bachelor's Degree",
      totalCredits: 144,
      tuitionFee: 110000,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      description: `Specialized engineering program focusing on textile manufacturing, quality control, and sustainable production methods. Strong industry connections with Bangladesh's leading textile manufacturers.`,
      careerOutcomes: [
        'Textile Engineer',
        'Production Manager',
        'Quality Control Specialist',
        'Export Manager',
        'Sustainability Consultant',
        'Fashion Technologist',
      ],
      placementRate: 94,
      averageSalary: 380000,
      topRecruiters: [
        'Square Textiles',
        'Beximco Textiles',
        'DBL Group',
        'Akij Textiles',
        'Envoy Textiles',
        'Dekko Group',
      ],
      isNew: false,
      scholarshipAvailable: true,
      nextIntake: 'Spring 2025',
      industryPartnership: true,
    },
    {
      id: 6,
      title: 'Bachelor of Pharmacy',
      department: 'Pharmacy',
      duration: '4 Years',
      degree: "Bachelor's Degree",
      totalCredits: 144,
      tuitionFee: 130000,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      description: `Comprehensive pharmaceutical education covering drug development, clinical pharmacy, and healthcare management. State-of-the-art laboratories and clinical training partnerships with leading hospitals.`,
      careerOutcomes: [
        'Clinical Pharmacist',
        'Drug Inspector',
        'Pharmaceutical Sales',
        'Research Scientist',
        'Hospital Pharmacist',
        'Regulatory Affairs Specialist',
      ],
      placementRate: 90,
      averageSalary: 400000,
      topRecruiters: [
        'Square Pharmaceuticals',
        'Beximco Pharma',
        'Incepta Pharma',
        'Apollo Hospitals',
        'United Hospital',
        'DGDA',
      ],
      isNew: true,
      scholarshipAvailable: true,
      nextIntake: 'Spring 2025',
      industryPartnership: true,
    },
    {
      id: 7,
      title: 'Master of Science in Computer Science',
      department: 'Computer Science & Engineering',
      duration: '2 Years',
      degree: "Master's Degree",
      totalCredits: 36,
      tuitionFee: 140000,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
      description: `Advanced graduate program in computer science with specializations in artificial intelligence, machine learning, cybersecurity, and software engineering. Research-oriented curriculum with thesis requirement.`,
      careerOutcomes: [
        'Senior Software Engineer',
        'Research Scientist',
        'AI/ML Engineer',
        'Technical Lead',
        'Data Architect',
        'University Professor',
      ],
      placementRate: 97,
      averageSalary: 650000,
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Facebook', 'IBM', 'Oracle'],
      isNew: true,
      scholarshipAvailable: true,
      nextIntake: 'Fall 2025',
      industryPartnership: true,
    },
    {
      id: 8,
      title: 'Master of Business Administration (MBA)',
      department: 'Business Administration',
      duration: '2 Years',
      degree: "Master's Degree",
      totalCredits: 60,
      tuitionFee: 150000,
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop',
      description: `Executive MBA program designed for working professionals. Focus on strategic management, leadership, and global business practices. Weekend classes and flexible scheduling options available.`,
      careerOutcomes: [
        'Senior Manager',
        'Director',
        'CEO',
        'Management Consultant',
        'Investment Banker',
        'Business Development Head',
      ],
      placementRate: 93,
      averageSalary: 750000,
      topRecruiters: [
        'McKinsey & Company',
        'Deloitte',
        'PwC',
        'KPMG',
        'Standard Chartered',
        'HSBC',
      ],
      isNew: false,
      scholarshipAvailable: false,
      nextIntake: 'Fall 2025',
      industryPartnership: true,
    },
  ];

  // Mock Faculty Data
  const mockFaculty = [
    {
      id: 1,
      name: 'Dr. Mohammad Rahman',
      designation: 'Professor & Head',
      department: 'Computer Science & Engineering',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      qualifications: ['Ph.D. in Computer Science, MIT', 'M.S. in Software Engineering, Stanford'],
      experience: 15,
      researchAreas: ['Artificial Intelligence', 'Machine Learning', 'Data Mining'],
      publications: 45,
      email: 'm.rahman@diit.edu.bd',
      linkedIn: 'https://linkedin.com/in/mohammad-rahman',
      researchGate: 'https://researchgate.net/profile/Mohammad-Rahman',
      isHeadOfDepartment: true,
    },
    {
      id: 2,
      name: 'Dr. Fatima Khatun',
      designation: 'Associate Professor',
      department: 'Electrical & Electronics Engineering',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      qualifications: [
        'Ph.D. in Electrical Engineering, BUET',
        'M.Sc. in Power Systems, University of Toronto',
      ],
      experience: 12,
      researchAreas: ['Renewable Energy', 'Power Systems', 'Smart Grid'],
      publications: 38,
      email: 'f.khatun@diit.edu.bd',
      linkedIn: 'https://linkedin.com/in/fatima-khatun',
      researchGate: 'https://researchgate.net/profile/Fatima-Khatun',
      isHeadOfDepartment: false,
    },
    {
      id: 3,
      name: 'Prof. Ahmed Hassan',
      designation: 'Professor',
      department: 'Business Administration',
      image: 'https://randomuser.me/api/portraits/men/56.jpg',
      qualifications: ['Ph.D. in Management, Harvard Business School', 'MBA, Wharton School'],
      experience: 20,
      researchAreas: ['Strategic Management', 'Organizational Behavior', 'Leadership'],
      publications: 52,
      email: 'a.hassan@diit.edu.bd',
      linkedIn: 'https://linkedin.com/in/ahmed-hassan',
      researchGate: 'https://researchgate.net/profile/Ahmed-Hassan',
      isHeadOfDepartment: true,
    },
    {
      id: 4,
      name: 'Dr. Sarah Johnson',
      designation: 'Assistant Professor',
      department: 'English Literature',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      qualifications: [
        'Ph.D. in English Literature, Oxford University',
        'M.A. in Creative Writing, Cambridge',
      ],
      experience: 8,
      researchAreas: ['Contemporary Literature', 'Postcolonial Studies', 'Creative Writing'],
      publications: 25,
      email: 's.johnson@diit.edu.bd',
      linkedIn: 'https://linkedin.com/in/sarah-johnson',
      researchGate: 'https://researchgate.net/profile/Sarah-Johnson',
      isHeadOfDepartment: false,
    },
    {
      id: 5,
      name: 'Dr. Karim Uddin',
      designation: 'Professor',
      department: 'Textile Engineering',
      image: 'https://randomuser.me/api/portraits/men/42.jpg',
      qualifications: [
        'Ph.D. in Textile Engineering, NC State University',
        'M.Sc. in Materials Science, BUET',
      ],
      experience: 18,
      researchAreas: ['Sustainable Textiles', 'Smart Fabrics', 'Quality Control'],
      publications: 41,
      email: 'k.uddin@diit.edu.bd',
      linkedIn: 'https://linkedin.com/in/karim-uddin',
      researchGate: 'https://researchgate.net/profile/Karim-Uddin',
      isHeadOfDepartment: true,
    },
    {
      id: 6,
      name: 'Dr. Rashida Begum',
      designation: 'Associate Professor',
      department: 'Pharmacy',
      image: 'https://randomuser.me/api/portraits/women/35.jpg',
      qualifications: [
        'Ph.D. in Pharmaceutical Sciences, University of London',
        'Pharm.D., Dhaka University',
      ],
      experience: 14,
      researchAreas: ['Drug Development', 'Clinical Pharmacy', 'Pharmacokinetics'],
      publications: 33,
      email: 'r.begum@diit.edu.bd',
      linkedIn: 'https://linkedin.com/in/rashida-begum',
      researchGate: 'https://researchgate.net/profile/Rashida-Begum',
      isHeadOfDepartment: false,
    },
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setPrograms(mockPrograms);
      setFilteredPrograms(mockPrograms);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filterPrograms();
  }, [activeFilters, programs]);

  const filterPrograms = () => {
    let filtered = [...programs];

    // Search filter
    if (activeFilters?.search) {
      filtered = filtered?.filter(
        program =>
          program?.title?.toLowerCase()?.includes(activeFilters?.search?.toLowerCase()) ||
          program?.department?.toLowerCase()?.includes(activeFilters?.search?.toLowerCase()) ||
          program?.careerOutcomes?.some(career =>
            career?.toLowerCase()?.includes(activeFilters?.search?.toLowerCase())
          )
      );
    }

    // Department filter
    if (activeFilters?.department !== 'all') {
      filtered = filtered?.filter(program =>
        program?.department?.toLowerCase()?.includes(activeFilters?.department?.toLowerCase())
      );
    }

    // Degree filter
    if (activeFilters?.degree !== 'all') {
      filtered = filtered?.filter(program => {
        if (activeFilters?.degree === 'bachelor') {
          return program?.degree?.includes("Bachelor's");
        } else if (activeFilters?.degree === 'master') {
          return program?.degree?.includes("Master's");
        } else if (activeFilters?.degree === 'diploma') {
          return program?.degree?.includes('Diploma');
        }
        return true;
      });
    }

    // Duration filter
    if (activeFilters?.duration !== 'all') {
      filtered = filtered?.filter(program => {
        const duration = parseInt(program?.duration);
        if (activeFilters?.duration === '1-2') {
          return duration >= 1 && duration <= 2;
        } else if (activeFilters?.duration === '3-4') {
          return duration >= 3 && duration <= 4;
        } else if (activeFilters?.duration === '4+') {
          return duration >= 4;
        }
        return true;
      });
    }

    // Fee range filter
    if (activeFilters?.feeRange !== 'all') {
      filtered = filtered?.filter(program => {
        const fee = program?.tuitionFee;
        if (activeFilters?.feeRange === '0-50000') {
          return fee <= 50000;
        } else if (activeFilters?.feeRange === '50000-100000') {
          return fee > 50000 && fee <= 100000;
        } else if (activeFilters?.feeRange === '100000-150000') {
          return fee > 100000 && fee <= 150000;
        } else if (activeFilters?.feeRange === '150000+') {
          return fee > 150000;
        }
        return true;
      });
    }

    // Placement rate filter
    if (activeFilters?.minPlacement > 0) {
      filtered = filtered?.filter(
        program => program?.placementRate >= parseInt(activeFilters?.minPlacement)
      );
    }

    // Feature filters
    if (activeFilters?.scholarshipAvailable) {
      filtered = filtered?.filter(program => program?.scholarshipAvailable);
    }

    if (activeFilters?.newProgram) {
      filtered = filtered?.filter(program => program?.isNew);
    }

    if (activeFilters?.industryPartnership) {
      filtered = filtered?.filter(program => program?.industryPartnership);
    }

    // Sort programs
    filtered?.sort((a, b) => {
      switch (activeFilters?.sort) {
        case 'name':
          return a?.title?.localeCompare(b?.title);
        case 'fee-low':
          return a?.tuitionFee - b?.tuitionFee;
        case 'fee-high':
          return b?.tuitionFee - a?.tuitionFee;
        case 'placement':
          return b?.placementRate - a?.placementRate;
        case 'salary':
          return b?.averageSalary - a?.averageSalary;
        default:
          return 0;
      }
    });

    setFilteredPrograms(filtered);
  };

  const handleFilterChange = newFilters => {
    setActiveFilters(newFilters);
  };

  const handleClearFilters = () => {
    setActiveFilters({
      search: '',
      department: 'all',
      degree: 'all',
      duration: 'all',
      feeRange: 'all',
      sort: 'relevance',
      minPlacement: 0,
      scholarshipAvailable: false,
      newProgram: false,
      industryPartnership: false,
    });
  };

  const handleCompareProgram = program => {
    const isAlreadyComparing = comparePrograms?.some(p => p?.id === program?.id);

    if (isAlreadyComparing) {
      setComparePrograms(comparePrograms?.filter(p => p?.id !== program?.id));
    } else if (comparePrograms?.length < 3) {
      setComparePrograms([...comparePrograms, program]);
    }
  };

  const handleRemoveFromComparison = programId => {
    setComparePrograms(comparePrograms?.filter(p => p?.id !== programId));
  };

  const handleClearComparison = () => {
    setComparePrograms([]);
  };

  const handleViewDetails = program => {
    // Navigate to program details page
    console.log('View details for:', program?.title);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-text-secondary">Loading programs...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-16 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <Icon name="BookOpen" size={32} color="white" />
              </div>
              <div className="text-left">
                <h1 className="font-headline font-bold text-4xl md:text-5xl mb-2">
                  Academic Programs
                </h1>
                <p className="text-xl text-white/90">Discover Your Perfect Academic Path</p>
              </div>
            </div>

            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
              Explore our comprehensive range of undergraduate and graduate programs designed to
              prepare you for global opportunities while maintaining cultural pride in Bengali
              heritage. Transform your potential into professional excellence.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{programs?.length}+</div>
                <div className="text-sm text-white/80">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">95%</div>
                <div className="text-sm text-white/80">Avg. Placement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">80+</div>
                <div className="text-sm text-white/80">Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">3,200+</div>
                <div className="text-sm text-white/80">Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Filter Section */}
        <ProgramFilter
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          activeFilters={activeFilters}
        />

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-headline font-bold text-2xl text-primary mb-2">
              Available Programs
            </h2>
            <p className="text-text-secondary">
              Showing {filteredPrograms?.length} of {programs?.length} programs
            </p>
          </div>

          {comparePrograms?.length > 0 && (
            <Button
              variant="outline"
              iconName="GitCompare"
              iconPosition="left"
              iconSize={16}
              className="hover:bg-primary hover:text-white"
            >
              Compare ({comparePrograms?.length})
            </Button>
          )}
        </div>

        {/* Programs Grid */}
        {filteredPrograms?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPrograms?.map(program => (
              <ProgramCard
                key={program?.id}
                program={program}
                onCompare={handleCompareProgram}
                onViewDetails={handleViewDetails}
                isComparing={comparePrograms?.some(p => p?.id === program?.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="p-4 bg-slate-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Icon name="Search" size={24} color="var(--color-text-secondary)" />
            </div>
            <h3 className="font-headline font-bold text-xl text-slate-800 mb-2">
              No Programs Found
            </h3>
            <p className="text-text-secondary mb-6">
              Try adjusting your filters to find more programs
            </p>
            <Button
              variant="outline"
              onClick={handleClearFilters}
              iconName="RotateCcw"
              iconPosition="left"
              iconSize={16}
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Faculty Showcase */}
        <FacultyShowcase faculty={mockFaculty} />

        {/* Fee Calculator */}
        <FeeCalculator />

        {/* Academic Calendar */}
        <AcademicCalendar />

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-innovation rounded-xl p-8 text-white text-center">
          <h2 className="font-headline font-bold text-2xl mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands of successful graduates who transformed their potential into professional
            excellence at DIIT. Your future starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              iconName="UserPlus"
              iconPosition="left"
              iconSize={18}
              className="bg-white text-primary hover:bg-white/90"
            >
              Apply Now
            </Button>
            <Button
              variant="ghost"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              iconSize={18}
              className="text-white border-white hover:bg-white/10"
            >
              Contact Admissions
            </Button>
          </div>
        </div>
      </main>
      {/* Program Comparison Panel */}
      <ProgramComparison
        programs={comparePrograms}
        onRemoveProgram={handleRemoveFromComparison}
        onClearAll={handleClearComparison}
        isVisible={comparePrograms?.length > 0}
      />
    </div>
  );
};

export default Programs;
