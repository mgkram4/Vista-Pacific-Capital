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

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: typeof value === 'string' ? parseFloat(value) || 0 : value
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
        <h2 className="text-4xl font-bold text-[#0D3853] mb-4">Section 179 Calculator</h2>
        <p className="text-xl text-[#0D3853]/80 max-w-3xl mx-auto">
          Calculate your potential tax savings with our interactive Section 179 calculator
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
                <input
                  type="number"
                  value={inputs.equipmentPrice || ''}
                  onChange={(e) => handleInputChange('equipmentPrice', e.target.value)}
                  className="w-full px-4 py-3 border border-[#0EB5B2]/20 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all duration-300 text-black"
                  placeholder="Enter equipment cost"
                  min="0"
                  step="1000"
                />
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
    </div>
  );
};

export default Section179Calculator; 