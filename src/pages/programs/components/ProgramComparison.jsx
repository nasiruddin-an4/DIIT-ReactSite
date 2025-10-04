import React from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const ProgramComparison = ({
  programs,
  onRemoveProgram,
  onClearAll,
  isVisible,
}) => {
  if (!isVisible || programs?.length === 0) return null;

  const comparisonFields = [
    { key: "duration", label: "Duration", icon: "Clock" },
    { key: "degree", label: "Degree", icon: "GraduationCap" },
    { key: "totalCredits", label: "Total Credits", icon: "BookOpen" },
    {
      key: "tuitionFee",
      label: "Tuition Fee (per semester)",
      icon: "DollarSign",
    },
    { key: "placementRate", label: "Placement Rate", icon: "TrendingUp" },
    {
      key: "averageSalary",
      label: "Average Starting Salary",
      icon: "Banknote",
    },
  ];

  const formatValue = (key, value) => {
    switch (key) {
      case "tuitionFee":
      case "averageSalary":
        return `৳${value?.toLocaleString()}`;
      case "placementRate":
        return `${value}%`;
      case "totalCredits":
        return `${value} Credits`;
      default:
        return value;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-brand-xl z-50 transform transition-transform duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon name="GitCompare" size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h3 className="font-headline font-bold text-lg text-primary">
                Compare Programs ({programs?.length}/3)
              </h3>
              <p className="text-sm text-text-secondary">
                Side-by-side comparison of selected programs
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearAll}
              iconName="X"
              iconPosition="left"
              iconSize={14}
              className="text-text-secondary hover:text-error"
            >
              Clear All
            </Button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Program Headers */}
            <div
              className="grid gap-4 mb-4"
              style={{
                gridTemplateColumns: `200px repeat(${programs?.length}, 1fr)`,
              }}
            >
              <div></div>
              {programs?.map((program) => (
                <div
                  key={program?.id}
                  className="bg-slate-50 rounded-lg p-4 relative"
                >
                  <button
                    onClick={() => onRemoveProgram(program?.id)}
                    className="absolute top-2 right-2 p-1 rounded-full bg-white shadow-sm hover:bg-error hover:text-white transition-colors duration-200"
                  >
                    <Icon name="X" size={12} />
                  </button>

                  <div className="mb-3">
                    <Image
                      src={program?.image}
                      alt={program?.title}
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                  </div>

                  <h4 className="font-headline font-bold text-sm text-primary mb-1 line-clamp-2">
                    {program?.title}
                  </h4>
                  <p className="text-xs text-text-secondary">
                    {program?.department}
                  </p>
                </div>
              ))}
            </div>

            {/* Comparison Fields */}
            <div className="space-y-3">
              {comparisonFields?.map((field) => (
                <div
                  key={field?.key}
                  className="grid gap-4 py-3 border-b border-slate-100 last:border-b-0"
                  style={{
                    gridTemplateColumns: `200px repeat(${programs?.length}, 1fr)`,
                  }}
                >
                  <div className="flex items-center gap-2 font-medium text-sm text-slate-700">
                    <Icon
                      name={field?.icon}
                      size={14}
                      color="var(--color-text-secondary)"
                    />
                    <span>{field?.label}</span>
                  </div>

                  {programs?.map((program) => (
                    <div
                      key={program?.id}
                      className="text-sm text-slate-800 font-medium"
                    >
                      {formatValue(field?.key, program?.[field?.key])}
                    </div>
                  ))}
                </div>
              ))}

              {/* Career Outcomes */}
              <div
                className="grid gap-4 py-3 border-b border-slate-100"
                style={{
                  gridTemplateColumns: `200px repeat(${programs?.length}, 1fr)`,
                }}
              >
                <div className="flex items-center gap-2 font-medium text-sm text-slate-700">
                  <Icon
                    name="Target"
                    size={14}
                    color="var(--color-text-secondary)"
                  />
                  <span>Career Outcomes</span>
                </div>

                {programs?.map((program) => (
                  <div key={program?.id} className="space-y-1">
                    {program?.careerOutcomes
                      ?.slice(0, 3)
                      ?.map((career, index) => (
                        <span
                          key={index}
                          className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-1 mb-1"
                        >
                          {career}
                        </span>
                      ))}
                    {program?.careerOutcomes?.length > 3 && (
                      <span className="text-xs text-text-secondary">
                        +{program?.careerOutcomes?.length - 3} more
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Top Recruiters */}
              <div
                className="grid gap-4 py-3"
                style={{
                  gridTemplateColumns: `200px repeat(${programs?.length}, 1fr)`,
                }}
              >
                <div className="flex items-center gap-2 font-medium text-sm text-slate-700">
                  <Icon
                    name="Building2"
                    size={14}
                    color="var(--color-text-secondary)"
                  />
                  <span>Top Recruiters</span>
                </div>

                {programs?.map((program) => (
                  <div key={program?.id} className="space-y-1">
                    {program?.topRecruiters
                      ?.slice(0, 3)
                      ?.map((recruiter, index) => (
                        <span
                          key={index}
                          className="inline-block bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs mr-1 mb-1"
                        >
                          {recruiter}
                        </span>
                      ))}
                    {program?.topRecruiters?.length > 3 && (
                      <span className="text-xs text-text-secondary">
                        +{program?.topRecruiters?.length - 3} more
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-200">
              <div
                className="grid gap-2"
                style={{
                  gridTemplateColumns: `200px repeat(${programs?.length}, 1fr)`,
                }}
              >
                <div></div>
                {programs?.map((program) => (
                  <div key={program?.id} className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      iconName="Eye"
                      iconPosition="left"
                      iconSize={14}
                    >
                      Details
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 bg-accent hover:bg-accent/90"
                      iconName="UserPlus"
                      iconPosition="left"
                      iconSize={14}
                    >
                      Apply
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramComparison;
