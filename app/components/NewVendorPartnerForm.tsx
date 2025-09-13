'use client';

import { AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import SuccessModal from './SuccessModal';

export interface NewVendorPartnerData {
  // Company Information
  businessName: string;
  contactPersonFirstName: string;
  contactPersonLastName: string;
  businessAddress: string;
  phoneNumber: string;
  emailAddress: string;
  websiteUrl: string;
  yearsInBusiness: string;
  numberOfSalesReps: string;
  
  // Equipment Sales Information
  typesOfEquipmentSold: string;
  newOrUsedEquipment: string;
  averageTicketLowPrice: string;
  averageTicketHighPrice: string;
  manufacturerInformation: string;
  averageLeadTime: string;
  termsOfPayment: string;
  
  // Financing Information
  currentlyOfferFinancing: string;
  financingDescription: string;
  
  // Vendor Interest Options
  currentCustomerLookingForFinancing: boolean;
  lookingForInformationAboutPrograms: boolean;
  wantToAddFinancingTabToWebsite: boolean;
  lookingForCoBranding: boolean;
  lookingForMeetingWithSalesStaff: boolean;
  
  // Additional Information
  additionalInformation: string;
}

interface FormError {
  field: string;
  message: string;
}

interface SubmitStatus {
  success?: boolean;
  message?: string;
}

const salesRepsOptions = [
  '1–3',
  '4–10',
  '10–25',
  '25+'
];

const newOrUsedOptions = [
  'New',
  'Used',
  'Both'
];

const manufacturerOptions = [
  'Manufacturer',
  'Reseller'
];

const formatCurrency = (value: string) => {
  // Remove all non-digits
  const digits = value.replace(/\D/g, '');
  if (!digits) return '';
  
  // Add commas for thousands
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const parseCurrency = (value: string) => {
  return value.replace(/,/g, '');
};

interface TeamMember {
  name: string;
  email: string;
  phone: string;
  endpoint: string;
}

// Default team members (matching other forms)
const TEAM_MEMBERS = {
  alan: {
    name: "Alan Johnson",
    email: "alanj@vistapacificcapital.com",
    phone: "(714)500-7017",
    endpoint: "/api/submit-vendor-partnership"
  },
  johnMirabal: {
    name: "John Mirabal",
    email: "johnm@vistapacificcapital.com",
    phone: "(714)551-9955",
    endpoint: "/api/submit-vendor-partnership"
  },
  ianWhitelaw: {
    name: "Ian Whitelaw",
    email: "ianw@vistapacificcapital.com",
    phone: "(714) 408-4574",
    endpoint: "/api/submit-vendor-partnership"
  }
};

interface NewVendorPartnerFormProps {
  teamMember?: TeamMember;
}

export default function NewVendorPartnerForm({ teamMember = TEAM_MEMBERS.alan }: NewVendorPartnerFormProps) {
  const [formData, setFormData] = useState<NewVendorPartnerData>({
    // Company Information
    businessName: '',
    contactPersonFirstName: '',
    contactPersonLastName: '',
    businessAddress: '',
    phoneNumber: '',
    emailAddress: '',
    websiteUrl: '',
    yearsInBusiness: '',
    numberOfSalesReps: '',
    
    // Equipment Sales Information
    typesOfEquipmentSold: '',
    newOrUsedEquipment: '',
    averageTicketLowPrice: '',
    averageTicketHighPrice: '',
    manufacturerInformation: '',
    averageLeadTime: '',
    termsOfPayment: '',
    
    // Financing Information
    currentlyOfferFinancing: '',
    financingDescription: '',
    
    // Vendor Interest Options
    currentCustomerLookingForFinancing: false,
    lookingForInformationAboutPrograms: false,
    wantToAddFinancingTabToWebsite: false,
    lookingForCoBranding: false,
    lookingForMeetingWithSalesStaff: false,
    
    // Additional Information
    additionalInformation: ''
  });

  const [errors, setErrors] = useState<FormError[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormError[] = [];

    // Required fields validation
    if (!formData.businessName.trim()) {
      newErrors.push({ field: 'businessName', message: 'Business name is required' });
    }

    if (!formData.contactPersonFirstName.trim()) {
      newErrors.push({ field: 'contactPersonFirstName', message: 'First name is required' });
    }

    if (!formData.contactPersonLastName.trim()) {
      newErrors.push({ field: 'contactPersonLastName', message: 'Last name is required' });
    }

    if (!formData.businessAddress.trim()) {
      newErrors.push({ field: 'businessAddress', message: 'Business address is required' });
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.push({ field: 'phoneNumber', message: 'Phone number is required' });
    } else if (formData.phoneNumber.replace(/\D/g, '').length !== 10) {
      newErrors.push({ field: 'phoneNumber', message: 'Please enter a valid 10-digit phone number' });
    }

    if (!formData.emailAddress.trim()) {
      newErrors.push({ field: 'emailAddress', message: 'Email address is required' });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.push({ field: 'emailAddress', message: 'Please enter a valid email address' });
    }

    if (!formData.yearsInBusiness.trim()) {
      newErrors.push({ field: 'yearsInBusiness', message: 'Years in business is required' });
    }

    if (!formData.numberOfSalesReps) {
      newErrors.push({ field: 'numberOfSalesReps', message: 'Number of sales representatives is required' });
    }

    if (!formData.typesOfEquipmentSold.trim()) {
      newErrors.push({ field: 'typesOfEquipmentSold', message: 'Types of equipment sold is required' });
    }

    if (!formData.newOrUsedEquipment) {
      newErrors.push({ field: 'newOrUsedEquipment', message: 'Please select new or used equipment' });
    }

    if (!formData.averageTicketLowPrice.trim()) {
      newErrors.push({ field: 'averageTicketLowPrice', message: 'Low price is required' });
    }

    if (!formData.averageTicketHighPrice.trim()) {
      newErrors.push({ field: 'averageTicketHighPrice', message: 'High price is required' });
    }

    if (!formData.manufacturerInformation) {
      newErrors.push({ field: 'manufacturerInformation', message: 'Manufacturer information is required' });
    }

    if (!formData.currentlyOfferFinancing) {
      newErrors.push({ field: 'currentlyOfferFinancing', message: 'Please indicate if you currently offer financing' });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleInputChange = (field: keyof NewVendorPartnerData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    setErrors(prev => prev.filter(error => error.field !== field));
  };

  // Phone number formatting function
  const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, '');
    return digits.length > 0
      ? digits.length <= 3
        ? `${digits}`
        : digits.length <= 6
        ? `${digits.slice(0, 3)}-${digits.slice(3)}`
        : `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`
      : '';
  };

  // Phone change handler with formatting
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phoneNumber: formatted }));
    // Clear error for this field when user starts typing
    setErrors(prev => prev.filter(error => error.field !== 'phoneNumber'));
  };

  const handleCurrencyChange = (field: keyof NewVendorPartnerData, value: string) => {
    const formattedValue = formatCurrency(value);
    handleInputChange(field, formattedValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSubmitStatus({});

    try {
      // Prepare data for submission - parse currency fields
      const submissionData = {
        ...formData,
        averageTicketLowPrice: parseCurrency(formData.averageTicketLowPrice),
        averageTicketHighPrice: parseCurrency(formData.averageTicketHighPrice),
      };

      // Send data to API with team member information
      const response = await fetch('/api/submit-vendor-partnership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...submissionData,
          submissionAgent: teamMember
        }),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccessModal(true);
        
        // Reset form
        setFormData({
          businessName: '',
          contactPersonFirstName: '',
          contactPersonLastName: '',
          businessAddress: '',
          phoneNumber: '',
          emailAddress: '',
          websiteUrl: '',
          yearsInBusiness: '',
          numberOfSalesReps: '',
          typesOfEquipmentSold: '',
          newOrUsedEquipment: '',
          averageTicketLowPrice: '',
          averageTicketHighPrice: '',
          manufacturerInformation: '',
          averageLeadTime: '',
          termsOfPayment: '',
          currentlyOfferFinancing: '',
          financingDescription: '',
          currentCustomerLookingForFinancing: false,
          lookingForInformationAboutPrograms: false,
          wantToAddFinancingTabToWebsite: false,
          lookingForCoBranding: false,
          lookingForMeetingWithSalesStaff: false,
          additionalInformation: ''
        });
      } else {
        setSubmitStatus({ success: false, message: result.message || 'An error occurred while submitting your application. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting vendor partnership application:', error);
      setSubmitStatus({ success: false, message: 'An error occurred while submitting your application. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const getFieldError = (field: string): string | undefined => {
    return errors.find(error => error.field === field)?.message;
  };

  return (
    <div className="max-w-4xl mx-auto print:max-w-none">
      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body { 
            background: white !important; 
            margin: 0 !important;
            padding: 0 !important;
          }
          .print\\:hidden { display: none !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:border-none { border: none !important; }
          .print\\:rounded-none { border-radius: 0 !important; }
          .print\\:p-2 { padding: 0.5rem !important; }
        }
      `}</style>

      <SuccessModal
        isVisible={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        isVendorForm={true}
        customMessage="Thank you, your application is being assigned to a Vista Pacific Capital representative and someone will reach out within one business day."
      />

      {/* Print Button */}
      <div className="mb-4 text-right print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-[#0EB5B2] text-white px-4 py-2 rounded-lg hover:bg-[#0D3853] transition-colors text-sm font-medium"
        >
          🖨️ Print Form
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-[#0EB5B2]/10 p-6 md:p-8 print:shadow-none print:border-none print:rounded-none print:p-2">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0D3853] mb-4">Vendor Partner Form</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Company Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#0D3853] border-b border-[#0EB5B2]/20 pb-2">Company Information</h3>
            
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-[#0D3853] mb-2">
                Business Name *
              </label>
              <input
                type="text"
                id="businessName"
                value={formData.businessName}
                onChange={(e) => handleInputChange('businessName', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                  getFieldError('businessName') ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your business name"
              />
              {getFieldError('businessName') && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {getFieldError('businessName')}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contactPersonFirstName" className="block text-sm font-medium text-[#0D3853] mb-2">
                  Contact Person (First Name) *
                </label>
                <input
                  type="text"
                  id="contactPersonFirstName"
                  value={formData.contactPersonFirstName}
                  onChange={(e) => handleInputChange('contactPersonFirstName', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                    getFieldError('contactPersonFirstName') ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="First name"
                />
                {getFieldError('contactPersonFirstName') && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {getFieldError('contactPersonFirstName')}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contactPersonLastName" className="block text-sm font-medium text-[#0D3853] mb-2">
                  Contact Person (Last Name) *
                </label>
                <input
                  type="text"
                  id="contactPersonLastName"
                  value={formData.contactPersonLastName}
                  onChange={(e) => handleInputChange('contactPersonLastName', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                    getFieldError('contactPersonLastName') ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Last name"
                />
                {getFieldError('contactPersonLastName') && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {getFieldError('contactPersonLastName')}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="businessAddress" className="block text-sm font-medium text-[#0D3853] mb-2">
                Business Address *
              </label>
              <textarea
                id="businessAddress"
                value={formData.businessAddress}
                onChange={(e) => handleInputChange('businessAddress', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                  getFieldError('businessAddress') ? 'border-red-500' : 'border-gray-300'
                }`}
                rows={3}
                placeholder="Full business address including street, city, state, and zip code"
              />
              {getFieldError('businessAddress') && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {getFieldError('businessAddress')}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#0D3853] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handlePhoneChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                    getFieldError('phoneNumber') ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="555-123-4567"
                />
                {getFieldError('phoneNumber') && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {getFieldError('phoneNumber')}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="emailAddress" className="block text-sm font-medium text-[#0D3853] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  value={formData.emailAddress}
                  onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                    getFieldError('emailAddress') ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@company.com"
                />
                {getFieldError('emailAddress') && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {getFieldError('emailAddress')}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="websiteUrl" className="block text-sm font-medium text-[#0D3853] mb-2">
                Website URL
              </label>
              <input
                type="text"
                id="websiteUrl"
                value={formData.websiteUrl}
                onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853]"
                placeholder="www.yourcompany.com or https://www.yourcompany.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-[#0D3853] mb-2">
                  Years in Business *
                </label>
                <input
                  type="number"
                  id="yearsInBusiness"
                  value={formData.yearsInBusiness}
                  onChange={(e) => handleInputChange('yearsInBusiness', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                    getFieldError('yearsInBusiness') ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter years in business"
                  min="0"
                />
                {getFieldError('yearsInBusiness') && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {getFieldError('yearsInBusiness')}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="numberOfSalesReps" className="block text-sm font-medium text-[#0D3853] mb-2">
                  Number of Sales Representatives *
                </label>
                <select
                  id="numberOfSalesReps"
                  value={formData.numberOfSalesReps}
                  onChange={(e) => handleInputChange('numberOfSalesReps', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                    getFieldError('numberOfSalesReps') ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select number of sales reps</option>
                  {salesRepsOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {getFieldError('numberOfSalesReps') && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {getFieldError('numberOfSalesReps')}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Equipment Sales Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#0D3853] border-b border-[#0EB5B2]/20 pb-2">Equipment Sales Information</h3>
            
            <div>
              <label htmlFor="typesOfEquipmentSold" className="block text-sm font-medium text-[#0D3853] mb-2">
                Types of Equipment Sold *
              </label>
              <textarea
                id="typesOfEquipmentSold"
                value={formData.typesOfEquipmentSold}
                onChange={(e) => handleInputChange('typesOfEquipmentSold', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                  getFieldError('typesOfEquipmentSold') ? 'border-red-500' : 'border-gray-300'
                }`}
                rows={3}
                placeholder="Describe the types of equipment your business sells"
              />
              {getFieldError('typesOfEquipmentSold') && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {getFieldError('typesOfEquipmentSold')}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="newOrUsedEquipment" className="block text-sm font-medium text-[#0D3853] mb-2">
                New or Used Equipment *
              </label>
              <select
                id="newOrUsedEquipment"
                value={formData.newOrUsedEquipment}
                onChange={(e) => handleInputChange('newOrUsedEquipment', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                  getFieldError('newOrUsedEquipment') ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select equipment type</option>
                {newOrUsedOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {getFieldError('newOrUsedEquipment') && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {getFieldError('newOrUsedEquipment')}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0D3853] mb-2">
                Average Ticket Size *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="averageTicketLowPrice" className="block text-xs font-medium text-[#0D3853]/70 mb-1">
                    Low Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0D3853] font-medium pointer-events-none select-none">$</span>
                    <input
                      type="text"
                      id="averageTicketLowPrice"
                      value={formData.averageTicketLowPrice}
                      onChange={(e) => handleCurrencyChange('averageTicketLowPrice', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                        getFieldError('averageTicketLowPrice') ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="50,000"
                    />
                  </div>
                  {getFieldError('averageTicketLowPrice') && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {getFieldError('averageTicketLowPrice')}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="averageTicketHighPrice" className="block text-xs font-medium text-[#0D3853]/70 mb-1">
                    High Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0D3853] font-medium pointer-events-none select-none">$</span>
                    <input
                      type="text"
                      id="averageTicketHighPrice"
                      value={formData.averageTicketHighPrice}
                      onChange={(e) => handleCurrencyChange('averageTicketHighPrice', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                        getFieldError('averageTicketHighPrice') ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="500,000"
                    />
                  </div>
                  {getFieldError('averageTicketHighPrice') && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {getFieldError('averageTicketHighPrice')}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="manufacturerInformation" className="block text-sm font-medium text-[#0D3853] mb-2">
                Manufacturer Information *
              </label>
              <select
                id="manufacturerInformation"
                value={formData.manufacturerInformation}
                onChange={(e) => handleInputChange('manufacturerInformation', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853] ${
                  getFieldError('manufacturerInformation') ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select type</option>
                {manufacturerOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {getFieldError('manufacturerInformation') && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {getFieldError('manufacturerInformation')}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="averageLeadTime" className="block text-sm font-medium text-[#0D3853] mb-2">
                  Average Lead Time
                </label>
                <input
                  type="text"
                  id="averageLeadTime"
                  value={formData.averageLeadTime}
                  onChange={(e) => handleInputChange('averageLeadTime', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853]"
                  placeholder="e.g., 1–2 weeks, 30 days"
                />
              </div>

              <div>
                <label htmlFor="termsOfPayment" className="block text-sm font-medium text-[#0D3853] mb-2">
                  Terms of Payment
                </label>
                <input
                  type="text"
                  id="termsOfPayment"
                  value={formData.termsOfPayment}
                  onChange={(e) => handleInputChange('termsOfPayment', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853]"
                  placeholder="e.g., 50% upfront, COD"
                />
              </div>
            </div>
          </div>

          {/* Financing Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#0D3853] border-b border-[#0EB5B2]/20 pb-2">Financing Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-[#0D3853] mb-3">
                Do you currently offer financing? *
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="currentlyOfferFinancing"
                    value="Yes"
                    checked={formData.currentlyOfferFinancing === 'Yes'}
                    onChange={(e) => handleInputChange('currentlyOfferFinancing', e.target.value)}
                    className="mr-3 text-[#0EB5B2] focus:ring-[#0EB5B2]"
                  />
                  <span className="text-[#0D3853]">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="currentlyOfferFinancing"
                    value="No"
                    checked={formData.currentlyOfferFinancing === 'No'}
                    onChange={(e) => handleInputChange('currentlyOfferFinancing', e.target.value)}
                    className="mr-3 text-[#0EB5B2] focus:ring-[#0EB5B2]"
                  />
                  <span className="text-[#0D3853]">No</span>
                </label>
              </div>
              {getFieldError('currentlyOfferFinancing') && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {getFieldError('currentlyOfferFinancing')}
                </p>
              )}
            </div>

            {formData.currentlyOfferFinancing === 'Yes' && (
              <div>
                <label htmlFor="financingDescription" className="block text-sm font-medium text-[#0D3853] mb-2">
                  If yes, brief description
                </label>
                <textarea
                  id="financingDescription"
                  value={formData.financingDescription}
                  onChange={(e) => handleInputChange('financingDescription', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853]"
                  rows={3}
                  placeholder="Briefly describe your current financing offerings"
                />
              </div>
            )}
          </div>

          {/* Vendor Interest Options */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#0D3853] border-b border-[#0EB5B2]/20 pb-2">Vendor Interest Options</h3>
            
            <div className="space-y-3">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.currentCustomerLookingForFinancing}
                  onChange={(e) => handleInputChange('currentCustomerLookingForFinancing', e.target.checked)}
                  className="mt-1 mr-3 text-[#0EB5B2] focus:ring-[#0EB5B2] rounded"
                />
                <span className="text-[#0D3853]">Current customer looking for financing</span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.lookingForInformationAboutPrograms}
                  onChange={(e) => handleInputChange('lookingForInformationAboutPrograms', e.target.checked)}
                  className="mt-1 mr-3 text-[#0EB5B2] focus:ring-[#0EB5B2] rounded"
                />
                <span className="text-[#0D3853]">Looking for information about financing programs</span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.wantToAddFinancingTabToWebsite}
                  onChange={(e) => handleInputChange('wantToAddFinancingTabToWebsite', e.target.checked)}
                  className="mt-1 mr-3 text-[#0EB5B2] focus:ring-[#0EB5B2] rounded"
                />
                <span className="text-[#0D3853]">Want to add financing tab to website</span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.lookingForCoBranding}
                  onChange={(e) => handleInputChange('lookingForCoBranding', e.target.checked)}
                  className="mt-1 mr-3 text-[#0EB5B2] focus:ring-[#0EB5B2] rounded"
                />
                <span className="text-[#0D3853]">Looking for co-branding</span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.lookingForMeetingWithSalesStaff}
                  onChange={(e) => handleInputChange('lookingForMeetingWithSalesStaff', e.target.checked)}
                  className="mt-1 mr-3 text-[#0EB5B2] focus:ring-[#0EB5B2] rounded"
                />
                <span className="text-[#0D3853]">Looking for meeting with sales staff</span>
              </label>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#0D3853] border-b border-[#0EB5B2]/20 pb-2">Additional Information</h3>
            
            <div>
              <label htmlFor="additionalInformation" className="block text-sm font-medium text-[#0D3853] mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                id="additionalInformation"
                value={formData.additionalInformation}
                onChange={(e) => handleInputChange('additionalInformation', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent transition-all text-[#0D3853]"
                rows={4}
                placeholder="Any additional information you'd like to share about your business or partnership needs"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 print:hidden">
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
                'Submit Partnership Application'
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
                <AlertCircle className={`h-5 w-5 mr-2 ${submitStatus.success ? 'text-green-600' : 'text-red-600'}`} />
                {submitStatus.message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
