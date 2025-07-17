'use client';

import { CheckCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SuccessModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isVisible, onClose }: SuccessModalProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Small delay to trigger the animation
      setTimeout(() => setShowContent(true), 100);
    } else {
      setShowContent(false);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div 
        className={`bg-white rounded-xl shadow-2xl max-w-md w-full transform transition-all duration-300 ${
          showContent ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="relative p-6 text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
          
          {/* Success Icon with Animation */}
          <div className="mb-4 flex justify-center">
            <div 
              className={`relative transform transition-all duration-500 ${
                showContent ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
              }`}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              {/* Animated ring */}
              <div 
                className={`absolute inset-0 border-4 border-green-200 rounded-full transition-all duration-1000 ${
                  showContent ? 'scale-125 opacity-0' : 'scale-100 opacity-100'
                }`}
              />
            </div>
          </div>

          {/* Success Message */}
          <h2 
            className={`text-2xl font-bold text-gray-800 mb-2 transform transition-all duration-500 delay-200 ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Application Submitted!
          </h2>
          
          <div 
            className={`text-gray-600 space-y-3 transform transition-all duration-500 delay-300 ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <p className="text-base">
              Thank you for your submission, a copy of your application will be emailed to you.
            </p>
            <p className="text-base">
              Someone will reach out to you within one business day.
            </p>
            <p className="text-sm text-gray-500">
              If you have any questions, please feel free to call{' '}
              <a 
                href="tel:7145007017" 
                className="text-[#0EB5B2] hover:text-[#0D3853] font-medium"
              >
                (714) 500-7017
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div 
          className={`px-6 pb-6 transform transition-all duration-500 delay-400 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <button
            onClick={onClose}
            className="w-full bg-[#0EB5B2] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#0D3853] transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
} 