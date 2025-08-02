'use client';

import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function PaymentCalculator() {
  const [amount, setAmount] = useState<string>('25000');
  
  // Calculate monthly payments based on the terms
  const calculatePayment = (months: number) => {
    const rates: { [key: number]: number } = {
      24: 0.048,  // Factor for calculation
      36: 0.0334, // Factor for calculation
      48: 0.0263, // Factor for calculation
      60: 0.022,  // Factor for calculation
      72: 0.0188,  // Factor for calculation
    };
    
    const rate = rates[months];
    const payment = parseFloat(amount) * rate;
    return Math.round(payment);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden
      border border-gray-200 shadow-lg">
      {/* Calculator Header */}
      <div className="bg-[#1B365D] p-8">
        <h2 className="text-2xl font-bold text-white">
          Payment Calculator
        </h2>
        <p className="text-cyan-400 mt-2">Compare monthly payments across different terms</p>
      </div>

      {/* Calculator Body */}
      <div className="p-8">
        {/* Amount Input */}
        <div className="mb-8">
          <label htmlFor="equipmentCost" className="block text-[#1B365D] text-sm font-medium mb-2">
            Equipment Cost
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
            <input
              id="equipmentCost"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                transition-all bg-white text-[#1B365D]"
              min="20000"
              step="1000"
              placeholder="Enter amount"
            />
          </div>
        </div>

        {/* Payment Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-6 py-3 text-[#1B365D] font-medium text-sm">
                  Terms
                </th>
                {[24, 36, 48, 60, 72].map(months => (
                  <th key={months} className="px-6 py-3 text-[#1B365D] font-medium text-sm text-center">
                    {months} months
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 text-[#2C4C7C] font-medium">Monthly Payment</td>
                {[24, 36, 48, 60, 72].map(months => (
                  <td key={months} className="px-6 py-4 text-center">
                    <span className="text-[#1B365D] font-semibold bg-blue-50 px-4 py-2 rounded-lg">
                      ${calculatePayment(months).toLocaleString()}
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile-friendly Payment Options */}
        <div className="md:hidden mt-6 space-y-4">
          <h3 className="text-[#1B365D] font-medium text-lg">Monthly Payments</h3>
          <div className="grid grid-cols-2 gap-4">
            {[24, 36, 48, 60, 72].map(months => (
              <div key={months} className="bg-gray-50 p-4 rounded-lg">
                <div className="text-[#1B365D] font-medium text-sm mb-2">
                  {months} months
                </div>
                <div className="text-[#1B365D] font-semibold bg-blue-50 px-3 py-2 rounded-lg text-center">
                  ${calculatePayment(months).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            ["Fast Approval", "bg-cyan-50"],
            ["Flexible Terms", "bg-blue-50"],
            ["No Hidden Fees", "bg-blue-50"],
            ["Quick Process", "bg-cyan-50"]
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 p-3 rounded-lg ${item[1]}`}
            >
              <CheckCircle2 className="text-cyan-600 h-5 w-5 flex-shrink-0" />
              <span className="text-sm font-medium text-[#1B365D]">{item[0]}</span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-600 mt-6 italic">
          *Payments are estimated and subject to credit approval. Financing from $20,000 to $50 million available.
        </p>
      </div>
    </div>
  );
} 