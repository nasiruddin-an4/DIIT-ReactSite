import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

const ApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    category: "",

    // Academic Information
    program: "",
    previousEducation: "",
    institution: "",
    passingYear: "",
    percentage: "",

    // Address Information
    address: "",
    city: "",
    state: "",
    pincode: "",

    // Documents
    photo: null,
    signature: null,
    certificates: null,
    marksheets: null,
  });

  const [errors, setErrors] = useState({});
  const [uploadProgress, setUploadProgress] = useState({});

  const totalSteps = 4;

  const programs = [
    { value: "btech-cse", label: "B.Tech Computer Science & Engineering" },
    { value: "btech-ece", label: "B.Tech Electronics & Communication" },
    { value: "btech-me", label: "B.Tech Mechanical Engineering" },
    { value: "bca", label: "Bachelor of Computer Applications" },
    { value: "mca", label: "Master of Computer Applications" },
    { value: "mtech-cse", label: "M.Tech Computer Science" },
    { value: "diploma-cse", label: "Diploma in Computer Science" },
    { value: "diploma-ece", label: "Diploma in Electronics" },
  ];

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const categoryOptions = [
    { value: "general", label: "General" },
    { value: "obc", label: "OBC" },
    { value: "sc", label: "SC" },
    { value: "st", label: "ST" },
    { value: "pwd", label: "Person with Disability" },
  ];

  const educationOptions = [
    { value: "hsc", label: "Higher Secondary (HSC)" },
    { value: "diploma", label: "Diploma" },
    { value: "graduation", label: "Graduation" },
    { value: "postgraduation", label: "Post Graduation" },
  ];

  const stateOptions = [
    { value: "dhaka", label: "Dhaka" },
    { value: "chittagong", label: "Chittagong" },
    { value: "sylhet", label: "Sylhet" },
    { value: "rajshahi", label: "Rajshahi" },
    { value: "khulna", label: "Khulna" },
    { value: "barisal", label: "Barisal" },
    { value: "rangpur", label: "Rangpur" },
    { value: "mymensingh", label: "Mymensingh" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleFileUpload = (field, file) => {
    if (file) {
      // Simulate upload progress
      setUploadProgress((prev) => ({ ...prev, [field]: 0 }));

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          const currentProgress = prev?.[field] || 0;
          if (currentProgress >= 100) {
            clearInterval(interval);
            setFormData((prevData) => ({
              ...prevData,
              [field]: file,
            }));
            return prev;
          }
          return { ...prev, [field]: currentProgress + 10 };
        });
      }, 200);
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1: // Personal Information
        if (!formData?.firstName)
          newErrors.firstName = "First name is required";
        if (!formData?.lastName) newErrors.lastName = "Last name is required";
        if (!formData?.email) newErrors.email = "Email is required";
        if (!formData?.phone) newErrors.phone = "Phone number is required";
        if (!formData?.dateOfBirth)
          newErrors.dateOfBirth = "Date of birth is required";
        if (!formData?.gender) newErrors.gender = "Gender is required";
        if (!formData?.category) newErrors.category = "Category is required";
        break;

      case 2: // Academic Information
        if (!formData?.program)
          newErrors.program = "Program selection is required";
        if (!formData?.previousEducation)
          newErrors.previousEducation = "Previous education is required";
        if (!formData?.institution)
          newErrors.institution = "Institution name is required";
        if (!formData?.passingYear)
          newErrors.passingYear = "Passing year is required";
        if (!formData?.percentage)
          newErrors.percentage = "Percentage is required";
        break;

      case 3: // Address Information
        if (!formData?.address) newErrors.address = "Address is required";
        if (!formData?.city) newErrors.city = "City is required";
        if (!formData?.state) newErrors.state = "State is required";
        if (!formData?.pincode) newErrors.pincode = "Pin code is required";
        break;

      case 4: // Documents
        if (!formData?.photo) newErrors.photo = "Photo is required";
        if (!formData?.signature) newErrors.signature = "Signature is required";
        if (!formData?.certificates)
          newErrors.certificates = "Certificates are required";
        if (!formData?.marksheets)
          newErrors.marksheets = "Mark sheets are required";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      // Simulate form submission
      alert(
        "Application submitted successfully! You will receive a confirmation email shortly."
      );
      console.log("Form Data:", formData);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="font-cta font-semibold text-xl text-primary mb-4">
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                type="text"
                placeholder="Enter your first name"
                value={formData?.firstName}
                onChange={(e) =>
                  handleInputChange("firstName", e?.target?.value)
                }
                error={errors?.firstName}
                required
              />

              <Input
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
                value={formData?.lastName}
                onChange={(e) =>
                  handleInputChange("lastName", e?.target?.value)
                }
                error={errors?.lastName}
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={formData?.email}
                onChange={(e) => handleInputChange("email", e?.target?.value)}
                error={errors?.email}
                required
              />

              <Input
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone number"
                value={formData?.phone}
                onChange={(e) => handleInputChange("phone", e?.target?.value)}
                error={errors?.phone}
                required
              />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Input
                label="Date of Birth"
                type="date"
                value={formData?.dateOfBirth}
                onChange={(e) =>
                  handleInputChange("dateOfBirth", e?.target?.value)
                }
                error={errors?.dateOfBirth}
                required
              />

              <Select
                label="Gender"
                placeholder="Select gender"
                options={genderOptions}
                value={formData?.gender}
                onChange={(value) => handleInputChange("gender", value)}
                error={errors?.gender}
                required
              />

              <Select
                label="Category"
                placeholder="Select category"
                options={categoryOptions}
                value={formData?.category}
                onChange={(value) => handleInputChange("category", value)}
                error={errors?.category}
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="font-cta font-semibold text-xl text-primary mb-4">
              Academic Information
            </h3>
            <Select
              label="Program"
              placeholder="Select your desired program"
              options={programs}
              value={formData?.program}
              onChange={(value) => handleInputChange("program", value)}
              error={errors?.program}
              searchable
              required
            />
            <div className="grid md:grid-cols-2 gap-4">
              <Select
                label="Previous Education"
                placeholder="Select your qualification"
                options={educationOptions}
                value={formData?.previousEducation}
                onChange={(value) =>
                  handleInputChange("previousEducation", value)
                }
                error={errors?.previousEducation}
                required
              />

              <Input
                label="Institution Name"
                type="text"
                placeholder="Enter institution name"
                value={formData?.institution}
                onChange={(e) =>
                  handleInputChange("institution", e?.target?.value)
                }
                error={errors?.institution}
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Passing Year"
                type="number"
                placeholder="Enter passing year"
                value={formData?.passingYear}
                onChange={(e) =>
                  handleInputChange("passingYear", e?.target?.value)
                }
                error={errors?.passingYear}
                min="2000"
                max="2024"
                required
              />

              <Input
                label="Percentage/CGPA"
                type="number"
                placeholder="Enter percentage or CGPA"
                value={formData?.percentage}
                onChange={(e) =>
                  handleInputChange("percentage", e?.target?.value)
                }
                error={errors?.percentage}
                step="0.01"
                required
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="font-cta font-semibold text-xl text-primary mb-4">
              Address Information
            </h3>
            <Input
              label="Address"
              type="text"
              placeholder="Enter your complete address"
              value={formData?.address}
              onChange={(e) => handleInputChange("address", e?.target?.value)}
              error={errors?.address}
              required
            />
            <div className="grid md:grid-cols-3 gap-4">
              <Input
                label="City"
                type="text"
                placeholder="Enter city"
                value={formData?.city}
                onChange={(e) => handleInputChange("city", e?.target?.value)}
                error={errors?.city}
                required
              />

              <Select
                label="State/Division"
                placeholder="Select state"
                options={stateOptions}
                value={formData?.state}
                onChange={(value) => handleInputChange("state", value)}
                error={errors?.state}
                required
              />

              <Input
                label="Pin Code"
                type="text"
                placeholder="Enter pin code"
                value={formData?.pincode}
                onChange={(e) => handleInputChange("pincode", e?.target?.value)}
                error={errors?.pincode}
                required
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="font-cta font-semibold text-xl text-primary mb-4">
              Document Upload
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Photo Upload */}
              <div>
                <label className="block font-cta font-medium text-sm text-primary mb-2">
                  Passport Size Photo *
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleFileUpload("photo", e?.target?.files?.[0])
                    }
                    className="hidden"
                    id="photo-upload"
                  />
                  <label htmlFor="photo-upload" className="cursor-pointer">
                    <Icon
                      name="Upload"
                      size={32}
                      color="var(--color-slate-400)"
                      className="mx-auto mb-2"
                    />
                    <p className="font-body text-sm text-slate-600">
                      Click to upload photo
                    </p>
                    <p className="text-xs text-slate-500">JPG, PNG (Max 2MB)</p>
                  </label>
                  {uploadProgress?.photo !== undefined && (
                    <div className="mt-2">
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress?.photo}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
                {errors?.photo && (
                  <p className="text-error text-xs mt-1">{errors?.photo}</p>
                )}
              </div>

              {/* Signature Upload */}
              <div>
                <label className="block font-cta font-medium text-sm text-primary mb-2">
                  Signature *
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleFileUpload("signature", e?.target?.files?.[0])
                    }
                    className="hidden"
                    id="signature-upload"
                  />
                  <label htmlFor="signature-upload" className="cursor-pointer">
                    <Icon
                      name="PenTool"
                      size={32}
                      color="var(--color-slate-400)"
                      className="mx-auto mb-2"
                    />
                    <p className="font-body text-sm text-slate-600">
                      Click to upload signature
                    </p>
                    <p className="text-xs text-slate-500">JPG, PNG (Max 1MB)</p>
                  </label>
                  {uploadProgress?.signature !== undefined && (
                    <div className="mt-2">
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress?.signature}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
                {errors?.signature && (
                  <p className="text-error text-xs mt-1">{errors?.signature}</p>
                )}
              </div>

              {/* Certificates Upload */}
              <div>
                <label className="block font-cta font-medium text-sm text-primary mb-2">
                  Academic Certificates *
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    multiple
                    onChange={(e) =>
                      handleFileUpload("certificates", e?.target?.files)
                    }
                    className="hidden"
                    id="certificates-upload"
                  />
                  <label
                    htmlFor="certificates-upload"
                    className="cursor-pointer"
                  >
                    <Icon
                      name="FileText"
                      size={32}
                      color="var(--color-slate-400)"
                      className="mx-auto mb-2"
                    />
                    <p className="font-body text-sm text-slate-600">
                      Click to upload certificates
                    </p>
                    <p className="text-xs text-slate-500">
                      PDF, JPG, PNG (Max 5MB each)
                    </p>
                  </label>
                  {uploadProgress?.certificates !== undefined && (
                    <div className="mt-2">
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress?.certificates}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
                {errors?.certificates && (
                  <p className="text-error text-xs mt-1">
                    {errors?.certificates}
                  </p>
                )}
              </div>

              {/* Mark Sheets Upload */}
              <div>
                <label className="block font-cta font-medium text-sm text-primary mb-2">
                  Mark Sheets *
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    multiple
                    onChange={(e) =>
                      handleFileUpload("marksheets", e?.target?.files)
                    }
                    className="hidden"
                    id="marksheets-upload"
                  />
                  <label htmlFor="marksheets-upload" className="cursor-pointer">
                    <Icon
                      name="Award"
                      size={32}
                      color="var(--color-slate-400)"
                      className="mx-auto mb-2"
                    />
                    <p className="font-body text-sm text-slate-600">
                      Click to upload mark sheets
                    </p>
                    <p className="text-xs text-slate-500">
                      PDF, JPG, PNG (Max 5MB each)
                    </p>
                  </label>
                  {uploadProgress?.marksheets !== undefined && (
                    <div className="mt-2">
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress?.marksheets}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
                {errors?.marksheets && (
                  <p className="text-error text-xs mt-1">
                    {errors?.marksheets}
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="FileText" size={16} color="var(--color-primary)" />
            <span className="font-cta font-medium text-sm text-primary">
              Online Application
            </span>
          </div>
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-primary mb-4">
            Apply Now
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Complete your application in simple steps. All information is secure
            and encrypted.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {Array.from({ length: totalSteps }, (_, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-cta font-semibold text-sm transition-all duration-300 ${
                      index + 1 <= currentStep
                        ? "bg-primary text-white shadow-brand"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {index + 1 < currentStep ? (
                      <Icon name="Check" size={16} color="white" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  {index < totalSteps - 1 && (
                    <div
                      className={`w-full h-1 mx-4 rounded transition-all duration-300 ${
                        index + 1 < currentStep ? "bg-primary" : "bg-slate-200"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <span className="font-cta text-sm text-text-secondary">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white rounded-xl shadow-brand p-8">
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
              <Button
                variant="outline"
                iconName="ChevronLeft"
                iconPosition="left"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                Previous
              </Button>

              <div className="text-center">
                <span className="font-cta text-sm text-text-secondary">
                  {Math.round((currentStep / totalSteps) * 100)}% Complete
                </span>
              </div>

              {currentStep < totalSteps ? (
                <Button
                  variant="default"
                  iconName="ChevronRight"
                  iconPosition="right"
                  onClick={nextStep}
                  className="bg-primary hover:bg-primary/90"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  variant="default"
                  iconName="Send"
                  iconPosition="right"
                  onClick={handleSubmit}
                  className="bg-accent hover:bg-accent/90"
                >
                  Submit Application
                </Button>
              )}
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-brand">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="HelpCircle" size={20} color="var(--color-accent)" />
              </div>
              <div>
                <h4 className="font-cta font-semibold text-primary mb-2">
                  Need Help?
                </h4>
                <p className="font-body text-sm text-text-secondary mb-3">
                  Our admission counselors are here to assist you throughout the
                  application process.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Phone"
                    iconPosition="left"
                  >
                    Call: +880-1234-567890
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Mail"
                    iconPosition="left"
                  >
                    Email: admissions@diit.edu.bd
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="MessageCircle"
                    iconPosition="left"
                  >
                    Live Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
