import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

const AdmissionProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Online Application",
      description:
        "Fill out the comprehensive application form with your academic and personal details.",
      icon: "FileText",
      duration: "15-20 minutes",
      requirements: [
        "Valid Email ID",
        "Academic Certificates",
        "Passport Size Photo",
      ],
      status: "active",
    },
    {
      id: 2,
      title: "Document Upload",
      description:
        "Upload all required documents including academic transcripts and certificates.",
      icon: "Upload",
      duration: "10-15 minutes",
      requirements: [
        "HSC/Diploma Certificate",
        "Mark Sheets",
        "ID Proof",
        "Photo",
      ],
      status: "pending",
    },
    {
      id: 3,
      title: "Application Review",
      description:
        "Our admission team reviews your application and documents for completeness.",
      icon: "Search",
      duration: "2-3 working days",
      requirements: ["Complete Application", "All Documents", "Fee Payment"],
      status: "pending",
    },
    {
      id: 4,
      title: "Entrance Test",
      description:
        "Appear for the online entrance examination based on your chosen program.",
      icon: "BookOpen",
      duration: "60-90 minutes",
      requirements: ["Admit Card", "Valid ID", "Stable Internet"],
      status: "pending",
    },
    {
      id: 5,
      title: "Interview Round",
      description:
        "Personal interview with faculty members to assess your motivation and fit.",
      icon: "Users",
      duration: "20-30 minutes",
      requirements: [
        "Test Qualification",
        "Interview Slot",
        "Professional Attire",
      ],
      status: "pending",
    },
    {
      id: 6,
      title: "Final Selection",
      description:
        "Receive your admission decision and complete the enrollment process.",
      icon: "CheckCircle",
      duration: "1-2 working days",
      requirements: ["Merit List", "Seat Confirmation", "Fee Payment"],
      status: "pending",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Route" size={16} color="var(--color-primary)" />
            <span className="font-cta font-medium text-sm text-primary">
              Admission Process
            </span>
          </div>
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-primary mb-4">
            Your Path to DIIT
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Follow our simple 6-step admission process designed to make your
            journey smooth and transparent.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-slate-200">
                <div
                  className="h-full bg-primary transition-all duration-1000 ease-out"
                  style={{
                    width: `${(activeStep / (steps?.length - 1)) * 100}%`,
                  }}
                ></div>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-6 gap-4">
                {steps?.map((step, index) => (
                  <div
                    key={step?.id}
                    className="relative cursor-pointer"
                    onClick={() => setActiveStep(index)}
                  >
                    {/* Step Circle */}
                    <div
                      className={`w-12 h-12 rounded-full border-4 flex items-center justify-center mb-4 mx-auto transition-all duration-300 ${
                        index <= activeStep
                          ? "bg-primary border-primary text-white shadow-brand-lg"
                          : "bg-white border-slate-200 text-slate-400 hover:border-primary/30"
                      }`}
                    >
                      <Icon
                        name={step?.icon}
                        size={20}
                        color={index <= activeStep ? "white" : "currentColor"}
                      />
                    </div>

                    {/* Step Content */}
                    <div className="text-center">
                      <h3
                        className={`font-cta font-semibold text-sm mb-2 transition-colors duration-200 ${
                          index === activeStep
                            ? "text-primary"
                            : "text-slate-600"
                        }`}
                      >
                        {step?.title}
                      </h3>
                      <p className="font-body text-xs text-slate-500 leading-relaxed">
                        {step?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Step Details */}
            <div className="mt-12 bg-white rounded-xl shadow-brand p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-cta font-semibold text-lg text-primary mb-3">
                    Step {steps?.[activeStep]?.id}: {steps?.[activeStep]?.title}
                  </h4>
                  <p className="font-body text-text-secondary mb-4">
                    {steps?.[activeStep]?.description}
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <Icon name="Clock" size={16} />
                    <span>Duration: {steps?.[activeStep]?.duration}</span>
                  </div>
                </div>

                <div>
                  <h5 className="font-cta font-semibold text-primary mb-3">
                    Requirements
                  </h5>
                  <ul className="space-y-2">
                    {steps?.[activeStep]?.requirements?.map((req, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-sm text-text-secondary"
                      >
                        <Icon
                          name="Check"
                          size={14}
                          color="var(--color-success)"
                        />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <Icon
                        name={steps?.[activeStep]?.icon}
                        size={32}
                        color="var(--color-primary)"
                      />
                    </div>
                    <span className="font-cta text-sm text-slate-500">
                      Current Step
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {steps?.map((step, index) => (
              <div
                key={step?.id}
                className={`bg-white rounded-xl p-6 shadow-brand transition-all duration-300 ${
                  index === activeStep
                    ? "ring-2 ring-primary/20 shadow-brand-lg"
                    : ""
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full border-4 flex items-center justify-center flex-shrink-0 ${
                      index <= activeStep
                        ? "bg-primary border-primary text-white"
                        : "bg-slate-100 border-slate-200 text-slate-400"
                    }`}
                  >
                    <Icon
                      name={step?.icon}
                      size={20}
                      color={index <= activeStep ? "white" : "currentColor"}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-cta font-semibold text-primary">
                        Step {step?.id}: {step?.title}
                      </h3>
                      <span className="text-xs text-slate-500">
                        {step?.duration}
                      </span>
                    </div>
                    <p className="font-body text-sm text-text-secondary mb-3">
                      {step?.description}
                    </p>

                    {index === activeStep && (
                      <div className="border-t border-slate-100 pt-3">
                        <h5 className="font-cta font-medium text-sm text-primary mb-2">
                          Requirements:
                        </h5>
                        <ul className="space-y-1">
                          {step?.requirements?.map((req, reqIndex) => (
                            <li
                              key={reqIndex}
                              className="flex items-center space-x-2 text-xs text-text-secondary"
                            >
                              <Icon
                                name="Check"
                                size={12}
                                color="var(--color-success)"
                              />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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

export default AdmissionProcess;
