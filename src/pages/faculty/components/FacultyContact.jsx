import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

const FacultyContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    faculty: "",
    subject: "",
    message: "",
    meetingType: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const departments = [
    { value: "cse", label: "Computer Science & Engineering" },
    { value: "eee", label: "Electrical & Electronic Engineering" },
    { value: "business", label: "Business Administration" },
    { value: "english", label: "English Literature" },
    { value: "mathematics", label: "Mathematics" },
  ];

  const facultyByDepartment = {
    cse: [
      { value: "dr-rahman", label: "Dr. Mohammad Rahman" },
      { value: "dr-akter", label: "Dr. Nasreen Akter" },
    ],
    eee: [{ value: "dr-hassan", label: "Dr. Ahmed Hassan" }],
    business: [{ value: "dr-khatun", label: "Dr. Fatima Khatun" }],
    english: [{ value: "dr-begum", label: "Dr. Rashida Begum" }],
    mathematics: [{ value: "dr-uddin", label: "Dr. Karim Uddin" }],
  };

  const meetingTypes = [
    { value: "academic", label: "Academic Consultation" },
    { value: "research", label: "Research Collaboration" },
    { value: "career", label: "Career Guidance" },
    { value: "project", label: "Project Discussion" },
    { value: "other", label: "Other" },
  ];

  const contactMethods = [
    {
      icon: "Phone",
      title: "Phone",
      description: "Call us during office hours",
      contact: "+880-2-9138234",
      available: "Sun-Thu: 9:00 AM - 5:00 PM",
    },
    {
      icon: "Mail",
      title: "Email",
      description: "Send us an email anytime",
      contact: "faculty@diit.edu.bd",
      available: "Response within 24 hours",
    },
    {
      icon: "MapPin",
      title: "Visit Us",
      description: "Come to our campus",
      contact: "Daffodil Smart City, Ashulia",
      available: "Appointment recommended",
    },
    {
      icon: "Calendar",
      title: "Schedule Meeting",
      description: "Book a consultation",
      contact: "Online booking available",
      available: "Flexible timing",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Reset faculty selection when department changes
    if (name === "department") {
      setFormData((prev) => ({
        ...prev,
        faculty: "",
      }));
    }

    if (errors?.[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) newErrors.name = "Name is required";
    if (!formData?.email?.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/?.test(formData?.email))
      newErrors.email = "Email is invalid";
    if (!formData?.phone?.trim()) newErrors.phone = "Phone number is required";
    if (!formData?.department) newErrors.department = "Department is required";
    if (!formData?.subject?.trim()) newErrors.subject = "Subject is required";
    if (!formData?.message?.trim()) newErrors.message = "Message is required";
    if (!formData?.meetingType)
      newErrors.meetingType = "Meeting type is required";

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert(
      "Your message has been sent successfully! We will get back to you within 24 hours."
    );

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      faculty: "",
      subject: "",
      message: "",
      meetingType: "",
    });

    setIsSubmitting(false);
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-primary mb-4">
            Connect with Our Faculty
          </h2>
          <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto">
            Get in touch with our distinguished faculty members for academic
            guidance, research collaboration, or career consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-brand-lg">
            <div className="mb-8">
              <h3 className="font-headline font-bold text-2xl text-primary mb-2">
                Send a Message
              </h3>
              <p className="text-text-secondary font-body">
                Fill out the form below and we'll connect you with the right
                faculty member.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  error={errors?.name}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  error={errors?.email}
                  required
                />
              </div>

              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData?.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                error={errors?.phone}
                required
              />

              <div className="grid md:grid-cols-2 gap-4">
                <Select
                  label="Department"
                  options={departments}
                  value={formData?.department}
                  onChange={(value) => handleSelectChange("department", value)}
                  placeholder="Select department"
                  error={errors?.department}
                  required
                />
                <Select
                  label="Faculty Member (Optional)"
                  options={
                    formData?.department
                      ? facultyByDepartment?.[formData?.department] || []
                      : []
                  }
                  value={formData?.faculty}
                  onChange={(value) => handleSelectChange("faculty", value)}
                  placeholder="Select faculty member"
                  disabled={!formData?.department}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Subject"
                  type="text"
                  name="subject"
                  value={formData?.subject}
                  onChange={handleInputChange}
                  placeholder="Enter subject"
                  error={errors?.subject}
                  required
                />
                <Select
                  label="Meeting Type"
                  options={meetingTypes}
                  value={formData?.meetingType}
                  onChange={(value) => handleSelectChange("meetingType", value)}
                  placeholder="Select meeting type"
                  error={errors?.meetingType}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Message <span className="text-error">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Describe your inquiry or request..."
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 ${
                    errors?.message ? "border-error" : "border-slate-200"
                  }`}
                />
                {errors?.message && (
                  <p className="mt-1 text-sm text-error">{errors?.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                iconName="Send"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90"
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-brand-lg">
              <h3 className="font-headline font-bold text-2xl text-primary mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {contactMethods?.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={method?.icon}
                        size={20}
                        className="text-primary"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-headline font-semibold text-lg text-primary mb-1">
                        {method?.title}
                      </h4>
                      <p className="text-text-secondary font-body text-sm mb-2">
                        {method?.description}
                      </p>
                      <p className="font-cta font-semibold text-primary">
                        {method?.contact}
                      </p>
                      <p className="text-text-secondary font-body text-xs">
                        {method?.available}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-8 shadow-brand-lg">
              <h3 className="font-headline font-bold text-2xl text-primary mb-6">
                Quick Actions
              </h3>

              <div className="space-y-4">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  className="justify-start"
                >
                  Schedule Faculty Meeting
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  iconName="BookOpen"
                  iconPosition="left"
                  className="justify-start"
                >
                  Browse Research Papers
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Users"
                  iconPosition="left"
                  className="justify-start"
                >
                  Join Research Group
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  iconName="GraduationCap"
                  iconPosition="left"
                  className="justify-start"
                >
                  Academic Consultation
                </Button>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-hero-gradient rounded-2xl p-8 text-white">
              <h3 className="font-headline font-bold text-2xl mb-6">
                Faculty Office Hours
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-cta">Sunday - Thursday</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-cta">Friday</span>
                  <span className="font-semibold">9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-cta">Saturday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Info" size={16} />
                  <span className="text-sm font-cta">
                    Appointments recommended for guaranteed availability
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyContact;
