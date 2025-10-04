import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

const AdmissionFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      category: "Application Process",
      questions: [
        {
          question: "What is the application deadline for admission?",
          answer: `The application deadline varies by program:\n\n• Undergraduate Programs: June 30, 2024\n• Postgraduate Programs: July 15, 2024\n• Diploma Programs: August 15, 2024\n\nWe recommend applying early as seats are limited and filled on a first-come, first-served basis after merit consideration.`,
        },
        {
          question: "Can I apply for multiple programs simultaneously?",
          answer: `Yes, you can apply for up to 3 programs in a single application. However:\n\n• You need to pay separate application fees for each program\n• Priority will be given based on your preference order\n• Merit lists are prepared separately for each program\n• You can accept admission in only one program`,
        },
        {
          question: "What documents are required for application?",
          answer: `Required documents include:\n\n• Passport size photograph (recent)\n• Signature on white paper\n• Academic certificates (HSC/Diploma/Graduation)\n• Mark sheets of all semesters/years\n• Character certificate from last institution\n• Medical certificate (if applicable)\n• Category certificate (SC/ST/OBC)\n• Migration certificate (for students from other boards)`,
        },
      ],
    },
    {
      category: "Eligibility & Requirements",
      questions: [
        {
          question: "What are the minimum eligibility criteria?",
          answer: `Eligibility varies by program:\n\n• B.Tech: HSC with Physics, Chemistry, Mathematics (minimum 60%)\n• BCA: HSC with Mathematics (minimum 50%)\n• MCA: Graduation with Mathematics at 10+2 or graduation level\n• M.Tech: B.Tech/BE in relevant field (minimum 60%)\n• Diploma: SSC/equivalent (minimum 45%)`,
        },
        {
          question: "Is there an entrance examination?",
          answer: `Yes, we conduct entrance examinations:\n\n• Online MCQ test covering relevant subjects\n• Duration: 90 minutes for UG, 120 minutes for PG\n• Negative marking: 0.25 marks for wrong answers\n• Test centers available in major cities\n• Mock tests available on our website\n• Results declared within 48 hours`,
        },
        {
          question: "What is the selection process?",
          answer: `Our selection process includes:\n\n1. Online Application Submission\n2. Document Verification\n3. Entrance Test (60% weightage)\n4. Academic Performance (30% weightage)\n5. Personal Interview (10% weightage)\n6. Final Merit List Preparation\n7. Counseling and Seat Allocation`,
        },
      ],
    },
    {
      category: "Fees & Scholarships",
      questions: [
        {
          question: "What are the fee payment options?",
          answer: `Multiple payment options available:\n\n• Online: bKash, Nagad, Credit/Debit Cards\n• Bank Transfer: Direct bank deposit\n• Installments: Semester-wise payment allowed\n• EMI Options: 0% interest EMI for 6-12 months\n• Fee can be paid in Bangladeshi Taka (BDT)\n• Receipt generated instantly for online payments`,
        },
        {
          question: "Are scholarships available?",
          answer: `Yes, we offer various scholarships:\n\n• Merit Scholarship: Up to 50% fee waiver for top performers\n• Need-based Scholarship: For economically weaker sections\n• Sports Scholarship: For state/national level players\n• Girl Child Scholarship: Special discount for female students\n• Alumni Referral: 10% discount for alumni referrals\n• Early Bird Discount: 5% off for early applications`,
        },
        {
          question: "Is there any refund policy?",
          answer: `Our refund policy:\n\n• Application Fee: Non-refundable\n• Admission Fee: 80% refundable before classes start\n• Tuition Fee: Refundable as per semester completion\n• Caution Deposit: Fully refundable after course completion\n• Processing Time: 15-30 working days\n• Refund processed to original payment method`,
        },
      ],
    },
    {
      category: "Campus & Facilities",
      questions: [
        {
          question: "What facilities are available on campus?",
          answer: `Our campus offers:\n\n• Modern laboratories with latest equipment\n• Wi-Fi enabled campus with high-speed internet\n• Central library with 50,000+ books and e-resources\n• Hostel accommodation for boys and girls\n• Sports complex with indoor and outdoor facilities\n• Medical center with qualified doctors\n• Cafeteria serving hygienic food\n• Transportation facility from major locations`,
        },
        {
          question: "Is hostel accommodation available?",
          answer: `Yes, we provide hostel facilities:\n\n• Separate hostels for boys and girls\n• AC and non-AC rooms available\n• 24/7 security and CCTV surveillance\n• Mess facility with nutritious meals\n• Wi-Fi connectivity in all rooms\n• Common areas for recreation and study\n• Laundry and housekeeping services\n• Warden supervision and support`,
        },
      ],
    },
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const newIndex = categoryIndex * 100 + questionIndex;
    setActiveIndex(activeIndex === newIndex ? -1 : newIndex);
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-4 py-2 mb-4">
            <Icon name="HelpCircle" size={16} color="var(--color-success)" />
            <span className="font-cta font-medium text-sm text-success">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-primary mb-4">
            Got Questions? We've Got Answers
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Find answers to the most common questions about our admission
            process, requirements, and campus life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Icon
                    name={
                      categoryIndex === 0
                        ? "FileText"
                        : categoryIndex === 1
                        ? "CheckCircle"
                        : categoryIndex === 2
                        ? "CreditCard"
                        : "Building"
                    }
                    size={16}
                    color="white"
                  />
                </div>
                <h3 className="font-cta font-semibold text-xl text-primary">
                  {category?.category}
                </h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category?.questions?.map((faq, questionIndex) => {
                  const isActive =
                    activeIndex === categoryIndex * 100 + questionIndex;

                  return (
                    <div
                      key={questionIndex}
                      className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-brand transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-200"
                      >
                        <span className="font-cta font-medium text-primary pr-4">
                          {faq?.question}
                        </span>
                        <Icon
                          name={isActive ? "ChevronUp" : "ChevronDown"}
                          size={20}
                          color="var(--color-primary)"
                          className="flex-shrink-0 transition-transform duration-200"
                        />
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          isActive
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        } overflow-hidden`}
                      >
                        <div className="px-6 pb-4">
                          <div className="border-t border-slate-200 pt-4">
                            <p className="font-body text-text-secondary leading-relaxed whitespace-pre-line">
                              {faq?.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-primary/5 rounded-xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Icon
              name="MessageCircle"
              size={48}
              color="var(--color-primary)"
              className="mx-auto mb-4"
            />
            <h3 className="font-cta font-semibold text-xl text-primary mb-3">
              Still Have Questions?
            </h3>
            <p className="font-body text-text-secondary mb-6">
              Our admission counselors are available to help you with any
              specific queries about the admission process.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Icon
                  name="Phone"
                  size={24}
                  color="var(--color-accent)"
                  className="mx-auto mb-2"
                />
                <p className="font-cta font-medium text-sm text-primary mb-1">
                  Call Us
                </p>
                <p className="text-xs text-text-secondary">+880-1234-567890</p>
                <p className="text-xs text-text-secondary">Mon-Sat: 9AM-6PM</p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Icon
                  name="Mail"
                  size={24}
                  color="var(--color-accent)"
                  className="mx-auto mb-2"
                />
                <p className="font-cta font-medium text-sm text-primary mb-1">
                  Email Us
                </p>
                <p className="text-xs text-text-secondary">
                  admissions@diit.edu.bd
                </p>
                <p className="text-xs text-text-secondary">
                  Response within 24 hours
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Icon
                  name="MapPin"
                  size={24}
                  color="var(--color-accent)"
                  className="mx-auto mb-2"
                />
                <p className="font-cta font-medium text-sm text-primary mb-1">
                  Visit Us
                </p>
                <p className="text-xs text-text-secondary">
                  DIIT Campus, Dhaka
                </p>
                <p className="text-xs text-text-secondary">Mon-Sat: 10AM-5PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionFAQ;
