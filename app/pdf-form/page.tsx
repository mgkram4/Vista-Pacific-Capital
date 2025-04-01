'use client';

import { useState } from 'react';
import Toast from '../components/Toast';

export default function FinanceApplicationPage() {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  
  return (
    <div className="max-w-4xl mx-auto py-10 px-4" style={{ paddingTop: '200px' }}>
      {showSuccessToast && (
        <Toast
          message="Your application was submitted successfully!"
          type="success"
          isVisible={showSuccessToast}
          onClose={() => setShowSuccessToast(false)}
          duration={5000}
        />
      )}
      
      <div className="w-full bg-white shadow-xl rounded-xl p-5 md:p-8 border border-gray-100">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Small Business Finance Application</h1>
          <p className="text-[#0EB5B2] text-sm font-medium">Complete the application to apply for financing</p>
        </div>

        {/* Business Form Basic */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Amount Needed <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="$50,000"
                className="w-full px-3 py-3 rounded-lg border border-gray-300"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-3 rounded-lg border border-gray-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Business Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Business Name"
                className="w-full px-3 py-3 rounded-lg border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Business Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                className="w-full px-3 py-3 rounded-lg border border-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowSuccessToast(true)}
            className="px-8 py-3 rounded-lg font-semibold text-base shadow-lg bg-[#0EB5B2] text-white hover:bg-[#0D3853]"
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
}