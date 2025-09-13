'use client';

import { AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import SuccessModal from './SuccessModal';

export interface VendorPartnershipData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  equipmentType: string;
  averageTicketSize: string;
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

const ticketSizeOptions = [
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
    equipmentType: '',
    averageTicketSize: '',
    monthlyDeals: '',
    yearsInBusiness: '',
    currentFinancingPartners: '',
    partnershipGoals: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<FormError[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({});
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

    if (!formData.equipmentType) {
      newErrors.push({ field: 'equipmentType', message: 'Please select an equipment type' });
    }

    if (!formData.averageTicketSize) {
      newErrors.push({ field: 'averageTicketSize', message: 'Average ticket size is required' });
    }

    if (!formData.monthlyDeals) {
      newErrors.push({ field: 'monthlyDeals', message: 'Monthly deals volume is required' });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleInputChange = (field: keyof VendorPartnershipData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    setErrors(prev => prev.filter(error => error.field !== field));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSubmitStatus({});

    try {
      // Send data to API (uses SMTP)
      const response = await fetch('/api/submit-vendor-partnership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmittedData({
          companyName: formData.companyName,
          contactName: formData.contactName
        });
        setShowSuccessModal(true);
        
        // Reset form
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          website: '',
          equipmentType: '',
          averageTicketSize: '',
          monthlyDeals: '',
          yearsInBusiness: '',
          currentFinancingPartners: '',
          partnershipGoals: '',
          additionalInfo: ''
        });
      } else {
        setSubmitStatus({ success: false, message: result.message || 'An error occurred while submitting your inquiry. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting vendor partnership inquiry:', error);
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
      <SuccessModal
        isVisible={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        isVendorForm={true}
      />

      <div className="bg-white rounded-xl shadow-lg border border-[#0EB5B2]/10 p-6 md:p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0D3853] mb-4">Vendor Partner Form</h2>
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
              type="text"
              id="website"
              value={formData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853]"
              placeholder="www.yourcompany.com"
            />
          </div>

          {/* Equipment Type */}
          <div>
            <label htmlFor="equipmentType" className="block text-sm font-medium text-[#0D3853] mb-2">
              Equipment Type You Sell *
            </label>
            <select
              id="equipmentType"
              value={formData.equipmentType}
              onChange={(e) => handleInputChange('equipmentType', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                getFieldError('equipmentType') ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select equipment type</option>
              {equipmentTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {getFieldError('equipmentType') && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {getFieldError('equipmentType')}
              </p>
            )}
          </div>

          {/* Business Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="averageTicketSize" className="block text-sm font-medium text-[#0D3853] mb-2">
                Average Ticket Size *
              </label>
              <select
                id="averageTicketSize"
                value={formData.averageTicketSize}
                onChange={(e) => handleInputChange('averageTicketSize', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                  getFieldError('averageTicketSize') ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select ticket size</option>
                {ticketSizeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {getFieldError('averageTicketSize') && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {getFieldError('averageTicketSize')}
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
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                text-white py-4 px-8 rounded-lg font-semibold text-lg 
                shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                transform hover:-translate-y-1 transition-all duration-300
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Submitting...
                </div>
              ) : (
                'Submit Partnership Inquiry'
              )}
            </button>
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
                  <AlertCircle className="h-5 w-5 mr-2 text-green-600" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-2 text-red-600" />
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