'use client';

import { pdf } from '@react-pdf/renderer';
import { AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import VendorPartnershipPDF from './VendorPartnershipPDF';

export interface VendorPartnershipData {
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
//   const [showSuccessToast, setShowSuccessToast] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [submittedData, setSubmittedData] = useState({ companyName: '', contactName: '' });

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
      const blob = await pdf(<VendorPartnershipPDF formData={formData} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `VPC_Vendor_Partnership_Inquiry_${formData.companyName.replace(/ /g, '_')}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      setSubmitStatus({ success: true, message: 'Partnership inquiry PDF downloaded successfully!' });
        
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
    } catch (error) {
      console.error('Error generating or downloading PDF:', error);
      setSubmitStatus({ success: false, message: 'An error occurred while generating or downloading the PDF. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const getFieldError = (field: string): string | undefined => {
    return errors.find(error => error.field === field)?.message;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* {showSuccessToast && (
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
      /> */}

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