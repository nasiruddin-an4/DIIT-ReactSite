import React from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const FacultyShowcase = ({ faculty }) => {
  return (
    <div className="bg-white rounded-xl shadow-brand border border-slate-200 p-8 mb-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Icon name="Users" size={24} color="var(--color-primary)" />
          </div>
          <div>
            <h2 className="font-headline font-bold text-2xl text-primary">
              Meet Our Faculty
            </h2>
            <p className="text-text-secondary">
              World-class educators and industry experts
            </p>
          </div>
        </div>
      </div>
      {/* Faculty Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculty?.map((member) => (
          <div
            key={member?.id}
            className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            {/* Profile Image */}
            <div className="relative mb-4">
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-white shadow-brand">
                <Image
                  src={member?.image}
                  alt={member?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {member?.isHeadOfDepartment && (
                <div className="absolute -top-1 -right-1 bg-accent text-white p-1 rounded-full">
                  <Icon name="Crown" size={12} />
                </div>
              )}
            </div>

            {/* Basic Info */}
            <div className="text-center mb-4">
              <h3 className="font-headline font-bold text-lg text-primary mb-1">
                {member?.name}
              </h3>
              <p className="text-sm text-text-secondary mb-2">
                {member?.designation}
              </p>
              <p className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full inline-block">
                {member?.department}
              </p>
            </div>

            {/* Qualifications */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon
                  name="GraduationCap"
                  size={14}
                  color="var(--color-text-secondary)"
                />
                <span className="text-xs font-medium text-slate-700">
                  Education
                </span>
              </div>
              <div className="space-y-1">
                {member?.qualifications?.slice(0, 2)?.map((qual, index) => (
                  <p key={index} className="text-xs text-text-secondary">
                    {qual}
                  </p>
                ))}
                {member?.qualifications?.length > 2 && (
                  <p className="text-xs text-primary cursor-pointer hover:underline">
                    +{member?.qualifications?.length - 2} more qualifications
                  </p>
                )}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon
                  name="Briefcase"
                  size={14}
                  color="var(--color-text-secondary)"
                />
                <span className="text-xs font-medium text-slate-700">
                  Experience
                </span>
              </div>
              <p className="text-xs text-text-secondary">
                {member?.experience} years in academia and industry
              </p>
            </div>

            {/* Research Areas */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon
                  name="Microscope"
                  size={14}
                  color="var(--color-text-secondary)"
                />
                <span className="text-xs font-medium text-slate-700">
                  Research Areas
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {member?.researchAreas?.slice(0, 3)?.map((area, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                  >
                    {area}
                  </span>
                ))}
                {member?.researchAreas?.length > 3 && (
                  <span className="text-xs text-text-secondary px-2 py-1">
                    +{member?.researchAreas?.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Publications */}
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon
                    name="FileText"
                    size={14}
                    color="var(--color-text-secondary)"
                  />
                  <span className="text-xs font-medium text-slate-700">
                    Publications
                  </span>
                </div>
                <span className="text-sm font-bold text-primary">
                  {member?.publications}
                </span>
              </div>
            </div>

            {/* Contact */}
            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${member?.email}`}
                    className="p-2 bg-slate-100 hover:bg-primary hover:text-white rounded-lg transition-colors duration-200"
                    title="Send Email"
                  >
                    <Icon name="Mail" size={14} />
                  </a>
                  {member?.linkedIn && (
                    <a
                      href={member?.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-lg transition-colors duration-200"
                      title="LinkedIn Profile"
                    >
                      <Icon name="Linkedin" size={14} />
                    </a>
                  )}
                  {member?.researchGate && (
                    <a
                      href={member?.researchGate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-100 hover:bg-green-600 hover:text-white rounded-lg transition-colors duration-200"
                      title="ResearchGate Profile"
                    >
                      <Icon name="ExternalLink" size={14} />
                    </a>
                  )}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  iconName="User"
                  iconPosition="left"
                  iconSize={12}
                  className="text-xs"
                >
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* View All Faculty Button */}
      <div className="text-center mt-8">
        <Button
          variant="outline"
          size="lg"
          iconName="Users"
          iconPosition="left"
          iconSize={18}
          className="hover:bg-primary hover:text-white"
        >
          View All Faculty Members
        </Button>
      </div>
    </div>
  );
};

export default FacultyShowcase;
