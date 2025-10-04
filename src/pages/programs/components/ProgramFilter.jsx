import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Select from "../../../components/ui/Select";
import Input from "../../../components/ui/Input";

const ProgramFilter = ({ onFilterChange, onClearFilters, activeFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const departmentOptions = [
    { value: "all", label: "All Departments" },
    { value: "cse", label: "Computer Science & Engineering" },
    { value: "eee", label: "Electrical & Electronics Engineering" },
    { value: "bba", label: "Business Administration" },
    { value: "english", label: "English Literature" },
    { value: "textile", label: "Textile Engineering" },
    { value: "pharmacy", label: "Pharmacy" },
  ];

  const degreeOptions = [
    { value: "all", label: "All Degrees" },
    { value: "bachelor", label: "Bachelor's Degree" },
    { value: "master", label: "Master's Degree" },
    { value: "diploma", label: "Diploma" },
  ];

  const durationOptions = [
    { value: "all", label: "Any Duration" },
    { value: "1-2", label: "1-2 Years" },
    { value: "3-4", label: "3-4 Years" },
    { value: "4+", label: "4+ Years" },
  ];

  const feeRangeOptions = [
    { value: "all", label: "Any Fee Range" },
    { value: "0-50000", label: "Under ৳50,000" },
    { value: "50000-100000", label: "৳50,000 - ৳1,00,000" },
    { value: "100000-150000", label: "৳1,00,000 - ৳1,50,000" },
    { value: "150000+", label: "Above ৳1,50,000" },
  ];

  const sortOptions = [
    { value: "relevance", label: "Most Relevant" },
    { value: "name", label: "Program Name" },
    { value: "fee-low", label: "Fee: Low to High" },
    { value: "fee-high", label: "Fee: High to Low" },
    { value: "placement", label: "Highest Placement Rate" },
    { value: "salary", label: "Highest Starting Salary" },
  ];

  const handleFilterChange = (key, value) => {
    onFilterChange({ ...activeFilters, [key]: value });
  };

  const handleSearchChange = (e) => {
    handleFilterChange("search", e?.target?.value);
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters)?.filter(
      (value) => value && value !== "all" && value !== ""
    )?.length;
  };

  return (
    <div className="bg-white rounded-xl shadow-brand border border-slate-200 p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name="Filter" size={20} color="var(--color-primary)" />
          </div>
          <div>
            <h2 className="font-headline font-bold text-lg text-primary">
              Filter Programs
            </h2>
            <p className="text-sm text-text-secondary">
              Find your perfect academic path
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {getActiveFilterCount() > 0 && (
            <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
              {getActiveFilterCount()} active
            </span>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            iconSize={16}
          >
            {isExpanded ? "Less Filters" : "More Filters"}
          </Button>
        </div>
      </div>
      {/* Search Bar */}
      <div className="mb-6">
        <Input
          type="search"
          placeholder="Search programs, departments, or keywords..."
          value={activeFilters?.search || ""}
          onChange={handleSearchChange}
          className="w-full"
        />
      </div>
      {/* Quick Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Select
          label="Department"
          options={departmentOptions}
          value={activeFilters?.department || "all"}
          onChange={(value) => handleFilterChange("department", value)}
        />

        <Select
          label="Degree Level"
          options={degreeOptions}
          value={activeFilters?.degree || "all"}
          onChange={(value) => handleFilterChange("degree", value)}
        />

        <Select
          label="Duration"
          options={durationOptions}
          value={activeFilters?.duration || "all"}
          onChange={(value) => handleFilterChange("duration", value)}
        />

        <Select
          label="Sort By"
          options={sortOptions}
          value={activeFilters?.sort || "relevance"}
          onChange={(value) => handleFilterChange("sort", value)}
        />
      </div>
      {/* Advanced Filters */}
      {isExpanded && (
        <div className="border-t border-slate-200 pt-6 animate-float-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Select
              label="Fee Range"
              options={feeRangeOptions}
              value={activeFilters?.feeRange || "all"}
              onChange={(value) => handleFilterChange("feeRange", value)}
            />

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                Minimum Placement Rate (%)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={activeFilters?.minPlacement || 0}
                onChange={(e) =>
                  handleFilterChange("minPlacement", e?.target?.value)
                }
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-text-secondary">
                <span>0%</span>
                <span className="font-medium text-primary">
                  {activeFilters?.minPlacement || 0}%
                </span>
                <span>100%</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                Features
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={activeFilters?.scholarshipAvailable || false}
                    onChange={(e) =>
                      handleFilterChange(
                        "scholarshipAvailable",
                        e?.target?.checked
                      )
                    }
                    className="rounded border-slate-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-slate-700">
                    Scholarship Available
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={activeFilters?.newProgram || false}
                    onChange={(e) =>
                      handleFilterChange("newProgram", e?.target?.checked)
                    }
                    className="rounded border-slate-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-slate-700">New Programs</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={activeFilters?.industryPartnership || false}
                    onChange={(e) =>
                      handleFilterChange(
                        "industryPartnership",
                        e?.target?.checked
                      )
                    }
                    className="rounded border-slate-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-slate-700">
                    Industry Partnership
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          iconName="X"
          iconPosition="left"
          iconSize={14}
          className="text-text-secondary hover:text-error"
        >
          Clear All Filters
        </Button>

        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <Icon name="Info" size={14} />
          <span>Use filters to narrow down your program options</span>
        </div>
      </div>
    </div>
  );
};

export default ProgramFilter;
