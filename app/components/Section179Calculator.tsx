"use client"

import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

interface CalculatorInputs {
  equipmentPrice: number;
  taxRate: number;
}

interface CalculatorResults {
  section179Deduction: number;
  taxSavings: number;
  effectiveCost: number;
}

const Section179Calculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    equipmentPrice: 0,
    taxRate: 21
  });

  const [results, setResults] = useState<CalculatorResults>({
    section179Deduction: 0,
    taxSavings: 0,
    effectiveCost: 0
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateSection179 = useCallback(() => {
    const { equipmentPrice, taxRate } = inputs;

    // Section 179 limits for 2024
    const SECTION179_LIMIT = 1160000;

    // Determine Section 179 deduction
    let section179Deduction = Math.min(equipmentPrice, SECTION179_LIMIT);

    // Calculate tax savings
    const taxSavings = section179Deduction * (taxRate / 100);
    
    // Calculate effective equipment cost
    const effectiveCost = equipmentPrice - taxSavings;

    setResults({
      section179Deduction,
      taxSavings,
      effectiveCost
    });
  }, [inputs]);

  useEffect(() => {
    calculateSection179();
  }, [calculateSection179]);

  const formatInputValue = (value: number) => {
    return value ? value.toLocaleString() : '';
  };

  const parseInputValue = (value: string) => {
    // Remove commas and parse as number
    const cleanValue = value.replace(/,/g, '');
    return parseFloat(cleanValue) || 0;
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: typeof value === 'string' ? parseInputValue(value) : value
    }));
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-[#0D3853] mb-4">Your Potential Tax Savings</h2>
        <p className="text-xl text-[#0D3853]/80 max-w-3xl mx-auto">
          Calculate your potential tax savings with our interactive Section 179 calculator
        </p>
        <p className="text-sm text-gray-600 mt-4">
          <span className="text-red-500 text-lg font-bold">*</span> This calculator provides estimates only. Consult with your tax advisor for specific tax advice and to ensure compliance with current tax laws.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-2xl p-8 border border-[#0EB5B2]/10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#0D3853] mb-6">Equipment Details</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#0D3853] mb-2">
                  Equipment Purchase Price ($)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0D3853] font-medium pointer-events-none select-none">$</span>
                  <input
                    type="text"
                    value={formatInputValue(inputs.equipmentPrice)}
                    onChange={(e) => {
                      handleInputChange('equipmentPrice', e.target.value);
                    }}
                    className="w-full pl-10 pr-4 py-3 border border-[#0EB5B2]/20 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all duration-300 text-black"
                    placeholder="Enter equipment cost"
                    aria-label="Equipment Purchase Price"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0D3853] mb-2">
                  Business Tax Rate (%)
                </label>
                <select
                  value={inputs.taxRate}
                  onChange={(e) => handleInputChange('taxRate', parseFloat(e.target.value))}
                  className="w-full px-4 py-3 border border-[#0EB5B2]/20 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all duration-300 text-black"
                >
                  <option value={21}>21% (C-Corporation)</option>
                  <option value={37}>37% (Individual - Highest Bracket)</option>
                  <option value={24}>24% (Individual - Common Bracket)</option>
                  <option value={15.3}>15.3% (Self-Employment)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-br from-[#0EB5B2]/5 to-[#0D3853]/5 rounded-lg p-6 border border-[#0EB5B2]/20">
            <h3 className="text-2xl font-semibold text-[#0D3853] mb-6">Your Tax Savings</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-[#0EB5B2]/10">
                <div className="flex justify-between items-center">
                  <span className="text-[#0D3853]/80">Section 179 Deduction:</span>
                  <span className="font-semibold text-[#0D3853]">{formatCurrency(results.section179Deduction)}</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-[#0EB5B2]/10">
                <div className="flex justify-between items-center">
                  <span className="text-[#0D3853]/80">Tax Savings:</span>
                  <span className="font-semibold text-[#0EB5B2]">{formatCurrency(results.taxSavings)}</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-[#0EB5B2]/10">
                <div className="flex justify-between items-center">
                  <span className="text-[#0D3853]/80">Effective Equipment Cost:</span>
                  <span className="font-semibold text-[#0D3853]">{formatCurrency(results.effectiveCost)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Understanding Section 179 Article */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 bg-gray-50 rounded-xl p-8"
      >
        <h3 className="text-3xl font-bold text-[#0D3853] mb-6">Understanding Section 179</h3>
        
        <div className="prose prose-lg max-w-none text-[#0D3853]/90 space-y-6">
          <p>
            Section 179 of the IRS tax code allows businesses to deduct the full purchase price of qualifying equipment and/or software purchased or financed during the tax year. This means that if you buy (or lease) a piece of qualifying equipment, you can deduct the FULL PURCHASE PRICE from your gross income.
          </p>
          
          <p>
            This is an especially powerful tax strategy for small and medium-sized businesses looking to invest in equipment while reducing their tax burden. Instead of depreciating the equipment over several years, Section 179 allows you to take the entire deduction in the year of purchase.
          </p>
          
          <h4 className="text-2xl font-semibold text-[#0D3853] mt-8 mb-4">Key Benefits:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Immediate tax deduction for the full purchase price</li>
            <li>Reduces taxable income dollar-for-dollar</li>
            <li>Applies to both new and used equipment</li>
            <li>Can be combined with equipment financing</li>
            <li>Helps improve cash flow through tax savings</li>
          </ul>
          
          <h4 className="text-2xl font-semibold text-[#0D3853] mt-8 mb-4">2024 Limits:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maximum deduction: $1,160,000</li>
            <li>Total equipment purchases threshold: $2,890,000</li>
            <li>Deduction phases out dollar-for-dollar above the threshold</li>
          </ul>
          
          <p>
            <strong>Important:</strong> This article provides general information about Section 179 and should not be considered tax advice. Tax laws are complex and change frequently. Always consult with a qualified tax professional to understand how Section 179 applies to your specific situation.
          </p>
        </div>
      </motion.div>

      {/* About the Author Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-[#0EB5B2]/10"
      >
        <h3 className="text-2xl font-bold text-[#0D3853] mb-6">About the Author</h3>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-32 md:h-32 w-24 h-24 rounded-full bg-gradient-to-br from-[#0EB5B2] to-[#0D3853] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
            AJ
          </div>
          
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-[#0D3853] mb-3">Alan Johnson</h4>
            <p className="text-[#0D3853]/80 mb-4">
              Alan Johnson is the founder and CEO of Vista Pacific Capital, bringing over 15 years of experience in equipment financing and business development. He specializes in helping businesses understand complex financing options and tax strategies to maximize their growth potential.
            </p>
            <p className="text-[#0D3853]/80">
              For personalized equipment financing advice and to discuss how Section 179 can benefit your business, contact Alan directly at{' '}
              <a 
                href="mailto:alanj@vistapacificcapital.com" 
                className="text-[#0EB5B2] hover:text-[#0D3853] font-medium transition-colors"
              >
                alanj@vistapacificcapital.com
              </a>
              .
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Section179Calculator; 