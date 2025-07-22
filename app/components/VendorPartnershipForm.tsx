'use client';

import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Loader2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Toast from './Toast';

interface VendorPartnershipData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  equipmentTypes: string[];
  averageDealSize: string;
  monthlyDeals: string;
  yearsInBusiness: string;
  currentFinancingPartners: string;
  partnershipGoals: string;
  additionalInfo: string;
}

interface FormError {
  field: string;
  message: string;
}

interface SubmitStatus {
  success?: boolean;
  message?: string;
}

interface SuccessModalProps {
  isVisible: boolean;
  onClose: () => void;
  companyName: string;
  contactName: string;
}

const SuccessModal = ({ isVisible, onClose, companyName, contactName }: SuccessModalProps) => {
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
            Partnership Inquiry Submitted!
          </h2>
          
          <div 
            className={`text-gray-600 space-y-3 transform transition-all duration-500 delay-300 ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <p className="text-base">
              Thank you for your interest in partnering with Vista Pacific Capital, {contactName}!
            </p>
            <p className="text-base">
              We have received your partnership inquiry for <strong>{companyName}</strong> and will review your information within 1-2 business days.
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
};

const equipmentTypeOptions = [
  'Construction Equipment',
  'Medical Equipment',
  'Restaurant Equipment',
  'Brewery Equipment',
  'Crane Equipment',
  'Dental Equipment',
  'Excavator Equipment',
  'Dump Trucks',
  'Box Truck Equipment',
  'CNC Equipment',
  'Manufacturing Equipment',
  'Material Handling Equipment',
  'Other'
];

const dealSizeOptions = [
  'Under $50,000',
  '$50,000 - $100,000',
  '$100,000 - $250,000',
  '$250,000 - $500,000',
  '$500,000 - $1,000,000',
  'Over $1,000,000'
];

const monthlyDealsOptions = [
  '1-5 deals',
  '6-10 deals',
  '11-20 deals',
  '21-50 deals',
  '50+ deals'
];

export default function VendorPartnershipForm() {
  const [formData, setFormData] = useState<VendorPartnershipData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    equipmentTypes: [],
    averageDealSize: '',
    monthlyDeals: '',
    yearsInBusiness: '',
    currentFinancingPartners: '',
    partnershipGoals: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<FormError[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({});
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState({ companyName: '', contactName: '' });

  const validateForm = (): boolean => {
    const newErrors: FormError[] = [];

    if (!formData.companyName.trim()) {
      newErrors.push({ field: 'companyName', message: 'Company name is required' });
    }

    if (!formData.contactName.trim()) {
      newErrors.push({ field: 'contactName', message: 'Contact name is required' });
    }

    if (!formData.email.trim()) {
      newErrors.push({ field: 'email', message: 'Email is required' });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.push({ field: 'email', message: 'Please enter a valid email address' });
    }

    if (!formData.phone.trim()) {
      newErrors.push({ field: 'phone', message: 'Phone number is required' });
    }

    if (formData.equipmentTypes.length === 0) {
      newErrors.push({ field: 'equipmentTypes', message: 'Please select at least one equipment type' });
    }

    if (!formData.averageDealSize) {
      newErrors.push({ field: 'averageDealSize', message: 'Average deal size is required' });
    }

    if (!formData.monthlyDeals) {
      newErrors.push({ field: 'monthlyDeals', message: 'Monthly deals volume is required' });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleInputChange = (field: keyof VendorPartnershipData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    setErrors(prev => prev.filter(error => error.field !== field));
  };

  const handleEquipmentTypeChange = (equipmentType: string) => {
    setFormData(prev => ({
      ...prev,
      equipmentTypes: prev.equipmentTypes.includes(equipmentType)
        ? prev.equipmentTypes.filter(type => type !== equipmentType)
        : [...prev.equipmentTypes, equipmentType]
    }));
    setErrors(prev => prev.filter(error => error.field !== 'equipmentTypes'));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSubmitStatus({});

    try {
      const response = await fetch('/api/submit-vendor-partnership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Store the company name and contact name for the modal
        setSubmittedData({
          companyName: formData.companyName,
          contactName: formData.contactName
        });
        
        setSubmitStatus({ success: true, message: 'Partnership inquiry submitted successfully!' });
        setShowSuccessToast(true);
        setShowSuccessModal(true);
        
        // Reset form
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          website: '',
          equipmentTypes: [],
          averageDealSize: '',
          monthlyDeals: '',
          yearsInBusiness: '',
          currentFinancingPartners: '',
          partnershipGoals: '',
          additionalInfo: ''
        });
      } else {
        setSubmitStatus({ success: false, message: result.message || 'Failed to submit partnership inquiry' });
      }
    } catch (error) {
      console.error('Error submitting partnership inquiry:', error);
      setSubmitStatus({ success: false, message: 'An error occurred while submitting your inquiry. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const getFieldError = (field: string): string | undefined => {
    return errors.find(error => error.field === field)?.message;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {showSuccessToast && (
        <Toast
          message="Your partnership inquiry was submitted successfully!"
          type="success"
          isVisible={showSuccessToast}
          onClose={() => setShowSuccessToast(false)}
          duration={5000}
        />
      )}

      <SuccessModal
        isVisible={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        companyName={submittedData.companyName}
        contactName={submittedData.contactName}
      />

      <div className="bg-white rounded-xl shadow-lg border border-[#0EB5B2]/10 p-6 md:p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0D3853] mb-4">Become a Partner</h2>
          <p className="text-lg text-[#0D3853]/80">
            Join our network of trusted equipment financing partners and start growing your business today.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-[#0D3853] mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                  getFieldError('companyName') ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your company name"
              />
              {getFieldError('companyName') && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {getFieldError('companyName')}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-[#0D3853] mb-2">
                Contact Name *
              </label>
              <input
                type="text"
                id="contactName"
                value={formData.contactName}
                onChange={(e) => handleInputChange('contactName', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                  getFieldError('contactName') ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your full name"
              />
              {getFieldError('contactName') && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {getFieldError('contactName')}
                </p>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#0D3853] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                  getFieldError('email') ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your.email@company.com"
              />
              {getFieldError('email') && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {getFieldError('email')}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#0D3853] mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                  getFieldError('phone') ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="(555) 123-4567"
              />
              {getFieldError('phone') && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {getFieldError('phone')}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium text-[#0D3853] mb-2">
              Company Website
            </label>
            <input
              type="url"
              id="website"
              value={formData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853]"
              placeholder="https://www.yourcompany.com"
            />
          </div>

          {/* Equipment Types */}
          <div>
            <label className="block text-sm font-medium text-[#0D3853] mb-2">
              Equipment Types You Sell *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {equipmentTypeOptions.map((type) => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.equipmentTypes.includes(type)}
                    onChange={() => handleEquipmentTypeChange(type)}
                    className="rounded border-gray-300 text-[#0EB5B2] focus:ring-[#0EB5B2]"
                  />
                  <span className="text-sm text-[#0D3853]">{type}</span>
                </label>
              ))}
            </div>
            {getFieldError('equipmentTypes') && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {getFieldError('equipmentTypes')}
              </p>
            )}
          </div>

          {/* Business Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="averageDealSize" className="block text-sm font-medium text-[#0D3853] mb-2">
                Average Deal Size *
              </label>
              <select
                id="averageDealSize"
                value={formData.averageDealSize}
                onChange={(e) => handleInputChange('averageDealSize', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                  getFieldError('averageDealSize') ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select deal size</option>
                {dealSizeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {getFieldError('averageDealSize') && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {getFieldError('averageDealSize')}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="monthlyDeals" className="block text-sm font-medium text-[#0D3853] mb-2">
                Monthly Deals Volume *
              </label>
              <select
                id="monthlyDeals"
                value={formData.monthlyDeals}
                onChange={(e) => handleInputChange('monthlyDeals', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                  getFieldError('monthlyDeals') ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select volume</option>
                {monthlyDealsOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {getFieldError('monthlyDeals') && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {getFieldError('monthlyDeals')}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-[#0D3853] mb-2">
                Years in Business
              </label>
              <input
                type="number"
                id="yearsInBusiness"
                value={formData.yearsInBusiness}
                onChange={(e) => handleInputChange('yearsInBusiness', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853]"
                placeholder="5"
                min="0"
              />
            </div>
          </div>

          {/* Current Partners */}
          <div>
            <label htmlFor="currentFinancingPartners" className="block text-sm font-medium text-[#0D3853] mb-2">
              Current Financing Partners
            </label>
            <textarea
              id="currentFinancingPartners"
              value={formData.currentFinancingPartners}
              onChange={(e) => handleInputChange('currentFinancingPartners', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853]"
              rows={3}
              placeholder="List any current financing partners or leave blank if none"
            />
          </div>

          {/* Partnership Goals */}
          <div>
            <label htmlFor="partnershipGoals" className="block text-sm font-medium text-[#0D3853] mb-2">
              Partnership Goals
            </label>
            <textarea
              id="partnershipGoals"
              value={formData.partnershipGoals}
              onChange={(e) => handleInputChange('partnershipGoals', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853]"
              rows={3}
              placeholder="What are your goals for this partnership? (e.g., increase sales, better customer experience, etc.)"
            />
          </div>

          {/* Additional Information */}
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-[#0D3853] mb-2">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              value={formData.additionalInfo}
              onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853]"
              rows={3}
              placeholder="Any additional information you'd like to share about your business or partnership needs"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                text-white py-4 px-8 rounded-lg font-semibold text-lg 
                shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                transform hover:-translate-y-1 transition-all duration-300
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Submitting...
                </div>
              ) : (
                'Submit Partnership Inquiry'
              )}
            </motion.button>
          </div>

          {/* Status Messages */}
          {submitStatus.message && (
            <div className={`p-4 rounded-lg ${
              submitStatus.success 
                ? 'bg-green-50 border border-green-200 text-green-800' 
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}>
              <div className="flex items-center">
                {submitStatus.success ? (
                  <CheckCircle className="h-5 w-5 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-2" />
                )}
                {submitStatus.message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
} 