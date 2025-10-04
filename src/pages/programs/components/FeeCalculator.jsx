import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Select from "../../../components/ui/Select";

const FeeCalculator = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [scholarshipType, setScholarshipType] = useState("none");
  const [paymentPlan, setPaymentPlan] = useState("semester");
  const [calculation, setCalculation] = useState(null);

  const programOptions = [
    { value: "", label: "Select a Program" },
    { value: "cse", label: "Computer Science & Engineering", baseFee: 120000 },
    {
      value: "eee",
      label: "Electrical & Electronics Engineering",
      baseFee: 115000,
    },
    { value: "bba", label: "Business Administration", baseFee: 95000 },
    { value: "english", label: "English Literature", baseFee: 75000 },
    { value: "textile", label: "Textile Engineering", baseFee: 110000 },
    { value: "pharmacy", label: "Pharmacy", baseFee: 130000 },
  ];

  const durationOptions = [
    { value: "", label: "Select Duration" },
    { value: "4", label: "4 Years (8 Semesters)" },
    { value: "3", label: "3 Years (6 Semesters)" },
    { value: "2", label: "2 Years (4 Semesters)" },
    { value: "1", label: "1 Year (2 Semesters)" },
  ];

  const scholarshipOptions = [
    { value: "none", label: "No Scholarship", discount: 0 },
    { value: "merit", label: "Merit Scholarship (25%)", discount: 0.25 },
    { value: "need", label: "Need-based Scholarship (40%)", discount: 0.4 },
    { value: "sports", label: "Sports Scholarship (30%)", discount: 0.3 },
    { value: "full", label: "Full Scholarship (100%)", discount: 1.0 },
  ];

  const paymentPlanOptions = [
    { value: "semester", label: "Per Semester" },
    { value: "annual", label: "Annual Payment (5% discount)" },
    { value: "full", label: "Full Payment (10% discount)" },
  ];

  useEffect(() => {
    if (selectedProgram && selectedDuration) {
      calculateFees();
    }
  }, [selectedProgram, selectedDuration, scholarshipType, paymentPlan]);

  const calculateFees = () => {
    const program = programOptions?.find((p) => p?.value === selectedProgram);
    const scholarship = scholarshipOptions?.find(
      (s) => s?.value === scholarshipType
    );

    if (!program || !scholarship) return;

    const baseFeePerSemester = program?.baseFee;
    const totalSemesters = parseInt(selectedDuration) * 2;
    const totalBaseFee = baseFeePerSemester * totalSemesters;

    // Apply scholarship discount
    const scholarshipDiscount = totalBaseFee * scholarship?.discount;
    const feeAfterScholarship = totalBaseFee - scholarshipDiscount;

    // Apply payment plan discount
    let finalFee = feeAfterScholarship;
    let paymentDiscount = 0;

    if (paymentPlan === "annual") {
      paymentDiscount = feeAfterScholarship * 0.05;
      finalFee = feeAfterScholarship - paymentDiscount;
    } else if (paymentPlan === "full") {
      paymentDiscount = feeAfterScholarship * 0.1;
      finalFee = feeAfterScholarship - paymentDiscount;
    }

    // Additional fees
    const admissionFee = 15000;
    const labFee = 5000 * totalSemesters;
    const libraryFee = 2000 * totalSemesters;
    const examFee = 3000 * totalSemesters;
    const totalAdditionalFees = admissionFee + labFee + libraryFee + examFee;

    const grandTotal = finalFee + totalAdditionalFees;

    setCalculation({
      programName: program?.label,
      baseFeePerSemester,
      totalSemesters,
      totalBaseFee,
      scholarshipDiscount,
      paymentDiscount,
      feeAfterScholarship,
      finalTuitionFee: finalFee,
      additionalFees: {
        admission: admissionFee,
        lab: labFee,
        library: libraryFee,
        exam: examFee,
        total: totalAdditionalFees,
      },
      grandTotal,
      monthlyPayment:
        paymentPlan === "semester"
          ? finalFee / (totalSemesters * 6)
          : grandTotal / (parseInt(selectedDuration) * 12),
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-brand border border-slate-200 p-8 mb-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="p-3 bg-accent/10 rounded-xl">
            <Icon name="Calculator" size={24} color="var(--color-accent)" />
          </div>
          <div>
            <h2 className="font-headline font-bold text-2xl text-primary">
              Fee Calculator
            </h2>
            <p className="text-text-secondary">
              Calculate your total education cost with scholarships
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <Select
            label="Select Program"
            options={programOptions}
            value={selectedProgram}
            onChange={setSelectedProgram}
            required
          />

          <Select
            label="Program Duration"
            options={durationOptions}
            value={selectedDuration}
            onChange={setSelectedDuration}
            required
          />

          <Select
            label="Scholarship Type"
            options={scholarshipOptions}
            value={scholarshipType}
            onChange={setScholarshipType}
          />

          <Select
            label="Payment Plan"
            options={paymentPlanOptions}
            value={paymentPlan}
            onChange={setPaymentPlan}
          />

          {/* Scholarship Info */}
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Icon
                name="Info"
                size={16}
                color="var(--color-primary)"
                className="mt-0.5"
              />
              <div>
                <h4 className="font-medium text-sm text-primary mb-1">
                  Scholarship Information
                </h4>
                <ul className="text-xs text-text-secondary space-y-1">
                  <li>
                    • Merit Scholarship: Based on HSC/SSC results (GPA 4.5+)
                  </li>
                  <li>• Need-based: Family income verification required</li>
                  <li>• Sports: National/divisional level participation</li>
                  <li>• Full Scholarship: Exceptional academic performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Calculation Results */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200">
          {calculation ? (
            <div className="space-y-6">
              {/* Program Info */}
              <div className="text-center pb-4 border-b border-slate-200">
                <h3 className="font-headline font-bold text-lg text-primary mb-1">
                  {calculation?.programName}
                </h3>
                <p className="text-sm text-text-secondary">
                  {calculation?.totalSemesters} Semesters • {selectedDuration}{" "}
                  Years
                </p>
              </div>

              {/* Fee Breakdown */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-700">
                    Base Tuition Fee
                  </span>
                  <span className="font-medium">
                    ৳{calculation?.totalBaseFee?.toLocaleString()}
                  </span>
                </div>

                {calculation?.scholarshipDiscount > 0 && (
                  <div className="flex justify-between items-center text-success">
                    <span className="text-sm">Scholarship Discount</span>
                    <span className="font-medium">
                      -৳{calculation?.scholarshipDiscount?.toLocaleString()}
                    </span>
                  </div>
                )}

                {calculation?.paymentDiscount > 0 && (
                  <div className="flex justify-between items-center text-success">
                    <span className="text-sm">Payment Plan Discount</span>
                    <span className="font-medium">
                      -৳{calculation?.paymentDiscount?.toLocaleString()}
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                  <span className="text-sm font-medium text-slate-800">
                    Net Tuition Fee
                  </span>
                  <span className="font-bold text-primary">
                    ৳{calculation?.finalTuitionFee?.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Additional Fees */}
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-medium text-sm text-slate-800 mb-3">
                  Additional Fees
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Admission Fee</span>
                    <span>
                      ৳
                      {calculation?.additionalFees?.admission?.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Lab Fee</span>
                    <span>
                      ৳{calculation?.additionalFees?.lab?.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Library Fee</span>
                    <span>
                      ৳{calculation?.additionalFees?.library?.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Exam Fee</span>
                    <span>
                      ৳{calculation?.additionalFees?.exam?.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="bg-primary/5 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg text-primary">
                    Total Cost
                  </span>
                  <span className="font-bold text-xl text-primary">
                    ৳{calculation?.grandTotal?.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm text-text-secondary">
                  <span>Estimated Monthly Payment</span>
                  <span>
                    ৳{Math.round(calculation?.monthlyPayment)?.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  iconName="Download"
                  iconPosition="left"
                  iconSize={14}
                >
                  Download PDF
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
          ) : (
            <div className="text-center py-12">
              <div className="p-4 bg-slate-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon
                  name="Calculator"
                  size={24}
                  color="var(--color-text-secondary)"
                />
              </div>
              <h3 className="font-medium text-slate-800 mb-2">
                Select Program & Duration
              </h3>
              <p className="text-sm text-text-secondary">
                Choose your program and duration to calculate fees
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeeCalculator;
