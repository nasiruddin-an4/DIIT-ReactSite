import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const FacultyTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Ahmed",
      role: "Computer Science Graduate, 2023",
      company: "Google Bangladesh",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: `Dr. Rahman's AI course completely transformed my understanding of machine learning. His practical approach and industry connections helped me land my dream job at Google. The research opportunities he provided were invaluable.`,
      rating: 5,
      course: "Advanced AI & Machine Learning",
      faculty: "Dr. Mohammad Rahman",
    },
    {
      id: 2,
      name: "Mahmud Hassan",
      role: "Business Administration Graduate, 2022",
      company: "Grameenphone Ltd.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: `Dr. Khatun's strategic management classes were eye-opening. Her real-world case studies and mentorship helped me develop critical thinking skills that I use every day in my corporate role.`,
      rating: 5,
      course: "Strategic Management",
      faculty: "Dr. Fatima Khatun",
    },
    {
      id: 3,
      name: "Rashida Sultana",
      role: "Electrical Engineering Graduate, 2023",
      company: "BPDB",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: `Professor Hassan's renewable energy research lab gave me hands-on experience with cutting-edge technology. His guidance in my thesis project on solar energy systems was exceptional.`,
      rating: 5,
      course: "Renewable Energy Systems",
      faculty: "Dr. Ahmed Hassan",
    },
    {
      id: 4,
      name: "Kamal Uddin",
      role: "English Literature Graduate, 2022",
      company: "The Daily Star",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: `Dr. Begum's creative writing workshops and literature analysis sessions shaped my writing career. Her feedback and encouragement gave me the confidence to pursue journalism professionally.`,
      rating: 5,
      course: "Creative Writing & Literature",
      faculty: "Dr. Rashida Begum",
    },
  ];

  const industryFeedback = [
    {
      id: 1,
      company: "Grameenphone Ltd.",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      representative: "Md. Yasir Azman",
      position: "Chief Executive Officer",
      feedback: `DIIT graduates consistently demonstrate exceptional technical skills and professional attitude. The faculty's industry-aligned curriculum produces job-ready professionals who contribute from day one.`,
      partnership: "Campus Recruitment Partner since 2018",
    },
    {
      id: 2,
      company: "bKash Limited",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      representative: "Kamal Quadir",
      position: "Chief Executive Officer",
      feedback: `The quality of DIIT's computer science graduates is remarkable. Their problem-solving abilities and innovative thinking align perfectly with our fintech requirements.`,
      partnership: "Strategic Academic Partner since 2020",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials?.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials?.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials?.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials?.length) % testimonials?.length
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-primary mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto">
            Hear from our graduates about how our distinguished faculty shaped
            their careers and transformed their lives.
          </p>
        </div>

        {/* Student Testimonials Carousel */}
        <div className="relative mb-20">
          <div className="bg-surface rounded-2xl p-8 lg:p-12 shadow-brand-lg overflow-hidden">
            <div className="relative">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials?.map((testimonial) => (
                  <div key={testimonial?.id} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="relative">
                        <div className="relative z-10">
                          <Image
                            src={testimonial?.image}
                            alt={testimonial?.name}
                            className="w-full h-96 lg:h-[400px] object-cover rounded-xl shadow-brand"
                          />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-brand-lg">
                          <div className="flex items-center space-x-2">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                              <Icon name="Quote" size={20} color="white" />
                            </div>
                            <div>
                              <div className="font-headline font-bold text-primary">
                                {testimonial?.rating}/5
                              </div>
                              <div className="flex space-x-1">
                                {[...Array(testimonial?.rating)]?.map(
                                  (_, i) => (
                                    <Icon
                                      key={i}
                                      name="Star"
                                      size={14}
                                      className="text-accent fill-current"
                                    />
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <blockquote className="text-xl lg:text-2xl text-text-primary font-body leading-relaxed mb-6">
                            "{testimonial?.quote}"
                          </blockquote>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h3 className="font-headline font-bold text-xl text-primary">
                              {testimonial?.name}
                            </h3>
                            <p className="text-text-secondary font-cta">
                              {testimonial?.role}
                            </p>
                            <p className="text-accent font-cta font-semibold">
                              {testimonial?.company}
                            </p>
                          </div>

                          <div className="bg-white rounded-lg p-4 shadow-brand">
                            <div className="flex items-center space-x-3">
                              <Icon
                                name="BookOpen"
                                size={20}
                                className="text-primary"
                              />
                              <div>
                                <div className="font-cta font-semibold text-primary">
                                  {testimonial?.course}
                                </div>
                                <div className="text-text-secondary text-sm">
                                  Taught by {testimonial?.faculty}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white hover:bg-primary text-primary hover:text-white rounded-full flex items-center justify-center shadow-brand hover:shadow-brand-lg transition-all duration-200"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>

            <div className="flex space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? "bg-primary" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white hover:bg-primary text-primary hover:text-white rounded-full flex items-center justify-center shadow-brand hover:shadow-brand-lg transition-all duration-200"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        {/* Industry Feedback */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-headline font-bold text-2xl lg:text-3xl text-primary mb-4">
              Industry Recognition
            </h3>
            <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
              Leading companies in Bangladesh recognize the quality of our
              faculty and graduates.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {industryFeedback?.map((feedback) => (
              <div
                key={feedback?.id}
                className="bg-surface rounded-xl p-8 shadow-brand hover:shadow-brand-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <Image
                    src={feedback?.logo}
                    alt={feedback?.company}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-headline font-bold text-lg text-primary">
                      {feedback?.company}
                    </h4>
                    <p className="text-text-secondary font-cta text-sm">
                      {feedback?.partnership}
                    </p>
                  </div>
                </div>

                <blockquote className="text-text-primary font-body leading-relaxed mb-6">
                  "{feedback?.feedback}"
                </blockquote>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="User" size={18} color="white" />
                  </div>
                  <div>
                    <div className="font-cta font-semibold text-primary">
                      {feedback?.representative}
                    </div>
                    <div className="text-text-secondary text-sm">
                      {feedback?.position}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyTestimonials;
