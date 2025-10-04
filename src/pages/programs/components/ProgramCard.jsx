import React from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const ProgramCard = ({
  program,
  onCompare,
  onViewDetails,
  isComparing = false,
}) => {
  const {
    id,
    title,
    department,
    duration,
    degree,
    totalCredits,
    tuitionFee,
    image,
    description,
    careerOutcomes,
    placementRate,
    averageSalary,
    topRecruiters,
    isNew,
    scholarshipAvailable,
    nextIntake,
  } = program;

  return (
    <div className="bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200 overflow-hidden group">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {isNew && (
            <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
              New Program
            </span>
          )}
          {scholarshipAvailable && (
            <span className="bg-success text-white px-2 py-1 rounded-full text-xs font-medium">
              Scholarship Available
            </span>
          )}
        </div>

        {/* Compare Button */}
        <button
          onClick={() => onCompare(program)}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${
            isComparing
              ? "bg-primary text-white shadow-brand"
              : "bg-white/90 text-slate-600 hover:bg-white hover:text-primary"
          }`}
          title={isComparing ? "Remove from comparison" : "Add to comparison"}
        >
          <Icon name={isComparing ? "Check" : "Plus"} size={16} />
        </button>

        {/* Department Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
            {department}
          </span>
        </div>
      </div>
      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="font-headline font-bold text-xl text-primary mb-2 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={14} />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="GraduationCap" size={14} />
              <span>{degree}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="BookOpen" size={14} />
              <span>{totalCredits} Credits</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-slate-50 rounded-lg">
          <div className="text-center">
            <div className="font-bold text-lg text-success">
              {placementRate}%
            </div>
            <div className="text-xs text-text-secondary">Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-primary">
              ৳{averageSalary?.toLocaleString()}
            </div>
            <div className="text-xs text-text-secondary">
              Avg. Starting Salary
            </div>
          </div>
        </div>

        {/* Career Outcomes */}
        <div className="mb-4">
          <h4 className="font-medium text-sm text-slate-800 mb-2">
            Career Paths:
          </h4>
          <div className="flex flex-wrap gap-1">
            {careerOutcomes?.slice(0, 3)?.map((career, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
              >
                {career}
              </span>
            ))}
            {careerOutcomes?.length > 3 && (
              <span className="text-xs text-text-secondary px-2 py-1">
                +{careerOutcomes?.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Top Recruiters */}
        <div className="mb-4">
          <h4 className="font-medium text-sm text-slate-800 mb-2">
            Top Recruiters:
          </h4>
          <div className="flex flex-wrap gap-1">
            {topRecruiters?.slice(0, 2)?.map((recruiter, index) => (
              <span
                key={index}
                className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs"
              >
                {recruiter}
              </span>
            ))}
            {topRecruiters?.length > 2 && (
              <span className="text-xs text-text-secondary px-2 py-1">
                +{topRecruiters?.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Fee and Intake */}
        <div className="flex items-center justify-between mb-4 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
          <div>
            <div className="font-bold text-lg text-primary">
              ৳{tuitionFee?.toLocaleString()}
            </div>
            <div className="text-xs text-text-secondary">Per Semester</div>
          </div>
          <div className="text-right">
            <div className="font-medium text-sm text-slate-800">
              Next Intake
            </div>
            <div className="text-xs text-text-secondary">{nextIntake}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(program)}
            className="flex-1"
            iconName="Eye"
            iconPosition="left"
            iconSize={14}
          >
            View Details
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex-1 bg-accent hover:bg-accent/90"
            iconName="UserPlus"
            iconPosition="left"
            iconSize={14}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
