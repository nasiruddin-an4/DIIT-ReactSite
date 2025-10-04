import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Select from "../../../components/ui/Select";

const FeeCalculator = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [selectedPayment, setSelectedPayment] = useState("semester");
  const [calculatedFee, setCalculatedFee] = useState(null);
  const [scholarshipApplied, setScholarshipApplied] = useState(false);

  const programs = [
    {
      value: "btech-cse",
      label: "B.Tech Computer Science & Engineering",
      baseFee: 85000,
    },
    {
      value: "btech-ece",
      label: "B.Tech Electronics & Communication",
      baseFee: 80000,
    },
    {
      value: "btech-me",
      label: "B.Tech Mechanical Engineering",
      baseFee: 75000,
    },
    {
      value: "bca",
      label: "Bachelor of Computer Applications",
      baseFee: 45000,
    },
    { value: "mca", label: "Master of Computer Applications", baseFee: 55000 },
    { value: "mtech-cse", label: "M.Tech Computer Science", baseFee: 65000 },
    {
      value: "diploma-cse",
      label: "Diploma in Computer Science",
      baseFee: 35000,
    },
    { value: "diploma-ece", label: "Diploma in Electronics", baseFee: 32000 },
  ];

  const categories = [
    { value: "general", label: "General Category", discount: 0 },
    { value: "obc", label: "OBC Category", discount: 10 },
    { value: "sc", label: "SC Category", discount: 25 },
    { value: "st", label: "ST Category", discount: 30 },
    { value: "pwd", label: "Person with Disability", discount: 20 },
  ];

  const paymentModes = [
    { value: "semester", label: "Per Semester", multiplier: 0.5 },
    { value: "annual", label: "Annual Payment", multiplier: 1, discount: 5 },
    {
      value: "full",
      label: "Full Course Payment",
      multiplier: 4,
      discount: 15,
    },
  ];

  const scholarships = [
    { name: "Merit Scholarship", criteria: "Above 90% in HSC", discount: 25 },
    {
      name: "Need-based Scholarship",
      criteria: "Family income &lt; ₹2 Lakhs",
      discount: 30,
    },
    {
      name: "Sports Scholarship",
      criteria: "State/National level player",
      discount: 20,
    },
    {
      name: "Girl Child Scholarship",
      criteria: "Female students",
      discount: 15,
    },
  ];

  useEffect(() => {
    if (selectedProgram && selectedCategory && selectedPayment) {
      calculateFee();
    }
  }, [selectedProgram, selectedCategory, selectedPayment, scholarshipApplied]);

  const calculateFee = () => {
    const program = programs?.find((p) => p?.value === selectedProgram);
    const category = categories?.find((c) => c?.value === selectedCategory);
    const payment = paymentModes?.find((p) => p?.value === selectedPayment);

    if (!program || !category || !payment) return;

    let baseFee = program?.baseFee;

    // Apply category discount
    baseFee = baseFee - (baseFee * category?.discount) / 100;

    // Apply payment mode discount
    if (payment?.discount) {
      baseFee = baseFee - (baseFee * payment?.discount) / 100;
    }

    // Calculate total based on payment mode
    let totalFee = baseFee * payment?.multiplier;

    // Apply scholarship if selected
    if (scholarshipApplied) {
      totalFee = totalFee - (totalFee * 20) / 100; // Average scholarship discount
    }

    setCalculatedFee({
      program: program?.label,
      baseFee: program?.baseFee,
      categoryDiscount: category?.discount,
      paymentDiscount: payment?.discount || 0,
      scholarshipDiscount: scholarshipApplied ? 20 : 0,
      finalAmount: Math.round(totalFee),
      paymentMode: payment?.label,
      breakdown: {
        tuitionFee: Math.round(totalFee * 0.7),
        developmentFee: Math.round(totalFee * 0.15),
        examFee: Math.round(totalFee * 0.1),
        otherFees: Math.round(totalFee * 0.05),
      },
    });
  };

  const resetCalculator = () => {
    setSelectedProgram("");
    setSelectedCategory("general");
    setSelectedPayment("semester");
    setCalculatedFee(null);
    setScholarshipApplied(false);
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Calculator" size={16} color="var(--color-accent)" />
            <span className="font-cta font-medium text-sm text-accent">
              Fee Calculator
            </span>
          </div>
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-primary mb-4">
            Calculate Your Investment
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Get transparent fee breakdown with scholarship options. No hidden
            charges, complete clarity.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="font-cta font-semibold text-xl text-primary mb-6">
                Fee Calculator
              </h3>

              <div className="space-y-6">
                {/* Program Selection */}
                <div>
                  <Select
                    label="Select Program"
                    placeholder="Choose your program"
                    options={programs}
                    value={selectedProgram}
                    onChange={setSelectedProgram}
                    searchable
                    required
                  />
                </div>

                {/* Category Selection */}
                <div>
                  <Select
                    label="Category"
                    placeholder="Select your category"
                    options={categories}
                    value={selectedCategory}
                    onChange={setSelectedCategory}
                    required
                  />
                </div>

                {/* Payment Mode */}
                <div>
                  <Select
                    label="Payment Mode"
                    placeholder="Choose payment option"
                    options={paymentModes}
                    value={selectedPayment}
                    onChange={setSelectedPayment}
                    required
                  />
                </div>

                {/* Scholarship Option */}
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="scholarship"
                    checked={scholarshipApplied}
                    onChange={(e) => setScholarshipApplied(e?.target?.checked)}
                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                  />
                  <label
                    htmlFor="scholarship"
                    className="font-cta text-sm text-text-secondary"
                  >
                    Apply for Scholarship (Average 20% discount)
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button
                    variant="default"
                    iconName="Calculator"
                    iconPosition="left"
                    onClick={calculateFee}
                    disabled={!selectedProgram}
                    className="flex-1"
                  >
                    Calculate Fee
                  </Button>
                  <Button
                    variant="outline"
                    iconName="RotateCcw"
                    iconPosition="left"
                    onClick={resetCalculator}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {calculatedFee ? (
                <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-brand">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-cta font-semibold text-xl text-primary">
                      Fee Breakdown
                    </h3>
                    <div className="flex items-center space-x-2 text-success">
                      <Icon name="CheckCircle" size={20} />
                      <span className="font-cta text-sm">Calculated</span>
                    </div>
                  </div>

                  {/* Program Info */}
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-cta font-medium text-primary mb-1">
                      {calculatedFee?.program}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      Payment Mode: {calculatedFee?.paymentMode}
                    </p>
                  </div>

                  {/* Fee Breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-body text-text-secondary">
                        Tuition Fee
                      </span>
                      <span className="font-cta font-medium">
                        ₹
                        {calculatedFee?.breakdown?.tuitionFee?.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-text-secondary">
                        Development Fee
                      </span>
                      <span className="font-cta font-medium">
                        ₹
                        {calculatedFee?.breakdown?.developmentFee?.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-text-secondary">
                        Examination Fee
                      </span>
                      <span className="font-cta font-medium">
                        ₹{calculatedFee?.breakdown?.examFee?.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-text-secondary">
                        Other Fees
                      </span>
                      <span className="font-cta font-medium">
                        ₹{calculatedFee?.breakdown?.otherFees?.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Discounts Applied */}
                  {(calculatedFee?.categoryDiscount > 0 ||
                    calculatedFee?.paymentDiscount > 0 ||
                    calculatedFee?.scholarshipDiscount > 0) && (
                    <div className="mb-6 p-4 bg-success/5 rounded-lg border border-success/20">
                      <h5 className="font-cta font-medium text-success mb-2">
                        Discounts Applied
                      </h5>
                      <div className="space-y-1 text-sm">
                        {calculatedFee?.categoryDiscount > 0 && (
                          <div className="flex justify-between">
                            <span>Category Discount</span>
                            <span className="text-success">
                              -{calculatedFee?.categoryDiscount}%
                            </span>
                          </div>
                        )}
                        {calculatedFee?.paymentDiscount > 0 && (
                          <div className="flex justify-between">
                            <span>Payment Discount</span>
                            <span className="text-success">
                              -{calculatedFee?.paymentDiscount}%
                            </span>
                          </div>
                        )}
                        {calculatedFee?.scholarshipDiscount > 0 && (
                          <div className="flex justify-between">
                            <span>Scholarship Discount</span>
                            <span className="text-success">
                              -{calculatedFee?.scholarshipDiscount}%
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Total Amount */}
                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-cta font-semibold text-lg text-primary">
                        Total Amount
                      </span>
                      <span className="font-headline font-bold text-2xl text-accent">
                        ₹{calculatedFee?.finalAmount?.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <h5 className="font-cta font-medium text-primary mb-3">
                      Payment Options
                    </h5>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2 p-2 bg-slate-50 rounded">
                        <Icon
                          name="Smartphone"
                          size={16}
                          color="var(--color-primary)"
                        />
                        <span className="text-sm">bKash</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 bg-slate-50 rounded">
                        <Icon
                          name="Smartphone"
                          size={16}
                          color="var(--color-primary)"
                        />
                        <span className="text-sm">Nagad</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 bg-slate-50 rounded">
                        <Icon
                          name="CreditCard"
                          size={16}
                          color="var(--color-primary)"
                        />
                        <span className="text-sm">Card</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 bg-slate-50 rounded">
                        <Icon
                          name="Building"
                          size={16}
                          color="var(--color-primary)"
                        />
                        <span className="text-sm">Bank</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 rounded-xl p-8 text-center">
                  <Icon
                    name="Calculator"
                    size={48}
                    color="var(--color-slate-400)"
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-cta font-medium text-slate-600 mb-2">
                    Ready to Calculate?
                  </h3>
                  <p className="font-body text-sm text-slate-500">
                    Select your program and preferences to see the fee breakdown
                  </p>
                </div>
              )}

              {/* Scholarship Information */}
              <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
                <h4 className="font-cta font-semibold text-accent mb-4">
                  Available Scholarships
                </h4>
                <div className="space-y-3">
                  {scholarships?.map((scholarship, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon
                        name="Award"
                        size={16}
                        color="var(--color-accent)"
                        className="mt-0.5"
                      />
                      <div>
                        <h5 className="font-cta font-medium text-sm text-primary">
                          {scholarship?.name} ({scholarship?.discount}% off)
                        </h5>
                        <p className="text-xs text-text-secondary">
                          {scholarship?.criteria}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeCalculator;
