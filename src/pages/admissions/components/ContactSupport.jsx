import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    queryType: "",
    program: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const queryTypes = [
    { value: "admission", label: "Admission Process" },
    { value: "fees", label: "Fees & Scholarships" },
    { value: "programs", label: "Program Information" },
    { value: "documents", label: "Document Requirements" },
    { value: "hostel", label: "Hostel & Accommodation" },
    { value: "technical", label: "Technical Support" },
    { value: "other", label: "Other Queries" },
  ];

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

  const supportChannels = [
    {
      icon: "Phone",
      title: "Phone Support",
      description: "Speak directly with our admission counselors",
      contact: "+880-1234-567890",
      availability: "Mon-Sat: 9:00 AM - 6:00 PM",
      responseTime: "Immediate",
      color: "accent",
    },
    {
      icon: "Mail",
      title: "Email Support",
      description: "Send detailed queries and get comprehensive answers",
      contact: "admissions@diit.edu.bd",
      availability: "24/7 - We respond within 24 hours",
      responseTime: "Within 24 hours",
      color: "primary",
    },
    {
      icon: "MessageCircle",
      title: "Live Chat",
      description: "Get instant help with quick questions",
      contact: "Available on website",
      availability: "Mon-Sat: 10:00 AM - 8:00 PM",
      responseTime: "Within 5 minutes",
      color: "success",
    },
    {
      icon: "Video",
      title: "Video Counseling",
      description: "Book a one-on-one video session with counselors",
      contact: "Book appointment online",
      availability: "Mon-Fri: 11:00 AM - 5:00 PM",
      responseTime: "Scheduled sessions",
      color: "innovation",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert(
        "Your query has been submitted successfully! We will get back to you within 24 hours."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        queryType: "",
        program: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-innovation/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Headphones" size={16} color="var(--color-innovation)" />
            <span className="font-cta font-medium text-sm text-innovation">
              24/7 Support
            </span>
          </div>
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-primary mb-4">
            We're Here to Help
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Get personalized assistance throughout your admission journey. Our
            expert counselors are ready to guide you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Support Channels */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {supportChannels?.map((channel, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 bg-${channel?.color}/10 rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon
                    name={channel?.icon}
                    size={24}
                    color={`var(--color-${channel?.color})`}
                  />
                </div>

                <h3 className="font-cta font-semibold text-primary mb-2">
                  {channel?.title}
                </h3>

                <p className="font-body text-sm text-text-secondary mb-3">
                  {channel?.description}
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Clock"
                      size={12}
                      color="var(--color-slate-400)"
                    />
                    <span className="text-slate-500">
                      {channel?.availability}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Zap" size={12} color="var(--color-slate-400)" />
                    <span className="text-slate-500">
                      {channel?.responseTime}
                    </span>
                  </div>
                </div>

                <div className={`mt-4 p-3 bg-${channel?.color}/5 rounded-lg`}>
                  <p
                    className={`font-cta font-medium text-sm text-${channel?.color}`}
                  >
                    {channel?.contact}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-brand">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Send" size={20} color="var(--color-primary)" />
                </div>
                <h3 className="font-cta font-semibold text-xl text-primary">
                  Send us a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData?.name}
                    onChange={(e) =>
                      handleInputChange("name", e?.target?.value)
                    }
                    required
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                    value={formData?.email}
                    onChange={(e) =>
                      handleInputChange("email", e?.target?.value)
                    }
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData?.phone}
                    onChange={(e) =>
                      handleInputChange("phone", e?.target?.value)
                    }
                    required
                  />

                  <Select
                    label="Query Type"
                    placeholder="Select query type"
                    options={queryTypes}
                    value={formData?.queryType}
                    onChange={(value) => handleInputChange("queryType", value)}
                    required
                  />
                </div>

                <Select
                  label="Program of Interest (Optional)"
                  placeholder="Select program if applicable"
                  options={programs}
                  value={formData?.program}
                  onChange={(value) => handleInputChange("program", value)}
                  searchable
                />

                <div>
                  <label className="block font-cta font-medium text-sm text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    placeholder="Please describe your query in detail..."
                    value={formData?.message}
                    onChange={(e) =>
                      handleInputChange("message", e?.target?.value)
                    }
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  className="bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Quick Info & Map */}
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="bg-white rounded-xl p-8 shadow-brand">
                <h3 className="font-cta font-semibold text-xl text-primary mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon
                        name="MapPin"
                        size={20}
                        color="var(--color-accent)"
                      />
                    </div>
                    <div>
                      <h4 className="font-cta font-medium text-primary mb-1">
                        Campus Address
                      </h4>
                      <p className="font-body text-sm text-text-secondary">
                        DIIT Campus, Dhanmondi
                        <br />
                        Dhaka-1205, Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon
                        name="Phone"
                        size={20}
                        color="var(--color-primary)"
                      />
                    </div>
                    <div>
                      <h4 className="font-cta font-medium text-primary mb-1">
                        Phone Numbers
                      </h4>
                      <p className="font-body text-sm text-text-secondary">
                        Admission Helpline: +880-1234-567890
                        <br />
                        Main Office: +880-2-9876543210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon
                        name="Mail"
                        size={20}
                        color="var(--color-success)"
                      />
                    </div>
                    <div>
                      <h4 className="font-cta font-medium text-primary mb-1">
                        Email Addresses
                      </h4>
                      <p className="font-body text-sm text-text-secondary">
                        Admissions: admissions@diit.edu.bd
                        <br />
                        General: info@diit.edu.bd
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-innovation/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon
                        name="Clock"
                        size={20}
                        color="var(--color-innovation)"
                      />
                    </div>
                    <div>
                      <h4 className="font-cta font-medium text-primary mb-1">
                        Office Hours
                      </h4>
                      <p className="font-body text-sm text-text-secondary">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campus Map */}
              <div className="bg-white rounded-xl p-6 shadow-brand">
                <h3 className="font-cta font-semibold text-primary mb-4">
                  Find Us on Map
                </h3>
                <div className="w-full h-64 bg-slate-100 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title="DIIT Campus Location"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=23.7465,90.3765&z=14&output=embed"
                    className="border-0"
                  ></iframe>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-text-secondary">
                    DIIT Campus, Dhaka
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    View in Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-warning/5 border border-warning/20 rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon
                name="AlertTriangle"
                size={20}
                color="var(--color-warning)"
              />
            </div>
            <div>
              <h4 className="font-cta font-semibold text-warning mb-2">
                Emergency Contact
              </h4>
              <p className="font-body text-sm text-text-secondary mb-3">
                For urgent admission-related queries outside office hours, you
                can reach our emergency helpline.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Phone"
                  iconPosition="left"
                >
                  Emergency: +880-1987-654321
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="MessageSquare"
                  iconPosition="left"
                >
                  WhatsApp: +880-1876-543210
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
