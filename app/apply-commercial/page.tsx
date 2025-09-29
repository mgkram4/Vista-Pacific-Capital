'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { useState } from 'react';
import SuccessModal from '../components/SuccessModal';

// Define types for form data
interface CommercialFormData {
  // Owner Information (moved to top as required)
  ownerFirstName: string;
  ownerLastName: string;
  email: string;
  phone: string;
  
  // Business Information
  businessName: string;
  businessType: string;
  yearsInBusiness: string;
  annualRevenue: string;
  ein: string;
  businessAddress: string;
  city: string;
  state: string;
  zip: string;
  
  // Financing Details
  equipmentType: string;
  equipmentCost: string;
  equipmentDescription: string;
  vendor: string;
  
  // Additional Information
  additionalInfo: string;
  agreeToTerms: boolean;
}

interface FormError {
  field: string;
  message: string;
}

export default function ApplyCommercialPage() {
  const [formData, setFormData] = useState<CommercialFormData>({
    ownerFirstName: '',
    ownerLastName: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    yearsInBusiness: '',
    annualRevenue: '',
    ein: '',
    businessAddress: '',
    city: '',
    state: '',
    zip: '',
    equipmentType: '',
    equipmentCost: '',
    equipmentDescription: '',
    vendor: '',
    additionalInfo: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<FormError[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submissionDate, setSubmissionDate] = useState<string>('');
  const [focused, setFocused] = useState<string>('');

  // States dropdown options
  const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  // Business types dropdown options
  const businessTypes = [
    "LLC",
    "Corporation",
    "Sole Proprietorship",
    "Partnership",
    "S-Corporation",
    "Non-Profit"
  ];

  // Format phone number
  const formatPhoneNumber = (value: string): string => {
    const phone = value.replace(/\D/g, '');
    if (phone.length < 4) return phone;
    if (phone.length < 7) return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  };

  // Format currency
  const formatCurrency = (value: string): string => {
    const digits = value.replace(/\D/g, '');
    return `$${digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  // Format EIN (XX-XXXXXXX)
  const formatEIN = (value: string): string => {
    const ein = value.replace(/\D/g, '');
    if (ein.length < 3) return ein;
    return `${ein.slice(0, 2)}-${ein.slice(2, 9)}`;
  };

  // Generate PDF for commercial application
  const generateCommercialPDF = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    
    // Add header to PDF
    page.drawText('Vista Pacific Capital - Commercial Finance Application', {
      x: 50,
      y: height - 50,
      size: 20,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.4),
    });
    
    // Add submission date
    const currentDate = new Date().toLocaleDateString();
    page.drawText(`Submission Date: ${currentDate}`, {
      x: 50,
      y: height - 80,
      size: 12,
      font,
      color: rgb(0.3, 0.3, 0.3),
    });

    let currentY = height - 120;
    
    // Add assigned agent information (always Alan for commercial applications)
    page.drawText('Assigned Agent: Alan Johnson', {
      x: 50,
      y: currentY,
      size: 14,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.4),
    });
    currentY -= 25;
    
    const agentInfo = [
      'Direct Phone: (714) 500-7017',
      'Email: alanj@vistapacificcapital.com',
    ];

    agentInfo.forEach((info) => {
      page.drawText(info, {
        x: 50,
        y: currentY,
        size: 11,
        font,
        color: rgb(0.2, 0.2, 0.2),
      });
      currentY -= 18;
    });

    currentY -= 20;
    
    // Add Vista Pacific Capital contact information
    page.drawText('Vista Pacific Capital Contact Information', {
      x: 50,
      y: currentY,
      size: 14,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.4),
    });
    currentY -= 25;
    
    const contactInfo = [
      'Main Phone: (714) 500-7017',
      'Website: www.vistapacificcapital.com',
      'Email: info@vistapacificcapital.com',
      'Office Hours: Monday - Friday, 8 AM - 5 PM (Pacific Time)'
    ];

    contactInfo.forEach((info) => {
      page.drawText(info, {
        x: 50,
        y: currentY,
        size: 11,
        font,
        color: rgb(0.2, 0.2, 0.2),
      });
      currentY -= 18;
    });

    currentY -= 20;

    // Contact Information Section
    page.drawText('Contact Information', {
      x: 50,
      y: currentY,
      size: 16,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.4),
    });
    currentY -= 25;

    const contactData = [
      ['Owner Name:', `${formData.ownerFirstName} ${formData.ownerLastName}`],
      ['Email:', formData.email],
      ['Phone:', formData.phone],
    ];

    contactData.forEach(([label, value]) => {
      page.drawText(`${label} ${value}`, {
        x: 50,
        y: currentY,
        size: 12,
        font,
        color: rgb(0, 0, 0),
      });
      currentY -= 20;
    });

    currentY -= 10;

    // Business Information Section
    page.drawText('Business Information', {
      x: 50,
      y: currentY,
      size: 16,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.4),
    });
    currentY -= 25;

    const businessData = [
      ['Business Name:', formData.businessName],
      ['Business Type:', formData.businessType],
      ['Years in Business:', formData.yearsInBusiness],
      ['Annual Revenue:', formData.annualRevenue],
      ['EIN:', formData.ein],
      ['Address:', `${formData.businessAddress}, ${formData.city}, ${formData.state} ${formData.zip}`],
    ];

    businessData.forEach(([label, value]) => {
      page.drawText(`${label} ${value}`, {
        x: 50,
        y: currentY,
        size: 12,
        font,
        color: rgb(0, 0, 0),
      });
      currentY -= 20;
    });

    currentY -= 10;

    // Equipment Information Section
    page.drawText('Equipment Information', {
      x: 50,
      y: currentY,
      size: 16,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.4),
    });
    currentY -= 25;

    const equipmentData = [
      ['Equipment Type:', formData.equipmentType],
      ['Equipment Cost:', formData.equipmentCost],
      ['Vendor:', formData.vendor],
      ['Description:', formData.equipmentDescription],
    ];

    equipmentData.forEach(([label, value]) => {
      if (label === 'Description:' && value.length > 50) {
        // Handle long descriptions by wrapping text
        page.drawText(`${label}`, {
          x: 50,
          y: currentY,
          size: 12,
          font,
          color: rgb(0, 0, 0),
        });
        currentY -= 20;
        
        const words = value.split(' ');
        let line = '';
        words.forEach((word) => {
          if (line.length + word.length > 70) {
            page.drawText(line, {
              x: 70,
              y: currentY,
              size: 12,
              font,
              color: rgb(0, 0, 0),
            });
            currentY -= 20;
            line = word + ' ';
          } else {
            line += word + ' ';
          }
        });
        if (line.trim()) {
          page.drawText(line.trim(), {
            x: 70,
            y: currentY,
            size: 12,
            font,
            color: rgb(0, 0, 0),
          });
          currentY -= 20;
        }
      } else {
        page.drawText(`${label} ${value}`, {
          x: 50,
          y: currentY,
          size: 12,
          font,
          color: rgb(0, 0, 0),
        });
        currentY -= 20;
      }
    });

    if (formData.additionalInfo) {
      currentY -= 10;
      page.drawText('Additional Information:', {
        x: 50,
        y: currentY,
        size: 16,
        font: boldFont,
        color: rgb(0.1, 0.1, 0.4),
      });
      currentY -= 25;

      // Handle long additional info by wrapping text
      const words = formData.additionalInfo.split(' ');
      let line = '';
      words.forEach((word) => {
        if (line.length + word.length > 70) {
          page.drawText(line, {
            x: 50,
            y: currentY,
            size: 12,
            font,
            color: rgb(0, 0, 0),
          });
          currentY -= 20;
          line = word + ' ';
        } else {
          line += word + ' ';
        }
      });
      if (line.trim()) {
        page.drawText(line.trim(), {
          x: 50,
          y: currentY,
          size: 12,
          font,
          color: rgb(0, 0, 0),
        });
      }
    }

    const pdfBytes = await pdfDoc.save();
    return Buffer.from(pdfBytes).toString('base64');
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormError[] = [];

    // Required fields validation
    if (!formData.ownerFirstName) newErrors.push({ field: 'ownerFirstName', message: 'Owner first name is required' });
    if (!formData.ownerLastName) newErrors.push({ field: 'ownerLastName', message: 'Owner last name is required' });
    if (!formData.email) newErrors.push({ field: 'email', message: 'Email is required' });
    if (!formData.phone) newErrors.push({ field: 'phone', message: 'Phone is required' });
    if (!formData.businessName) newErrors.push({ field: 'businessName', message: 'Business name is required' });
    if (!formData.equipmentType) newErrors.push({ field: 'equipmentType', message: 'Equipment type is required' });
    if (!formData.equipmentCost) newErrors.push({ field: 'equipmentCost', message: 'Equipment cost is required' });
    if (!formData.businessType) newErrors.push({ field: 'businessType', message: 'Business type is required' });
    if (!formData.yearsInBusiness) newErrors.push({ field: 'yearsInBusiness', message: 'Years in business is required' });
    if (!formData.agreeToTerms) newErrors.push({ field: 'agreeToTerms', message: 'You must agree to the terms' });

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.push({ field: 'email', message: 'Please enter a valid email address' });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);

    try {
      // Generate PDF for commercial application
      const pdfBase64 = await generateCommercialPDF();

      const response = await fetch('/api/submit-finance-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          isCommercial: true,
          amountNeeded: formData.equipmentCost,
          name: `${formData.ownerFirstName} ${formData.ownerLastName}`,
          businessPhone: formData.phone,
          address: formData.businessAddress,
          zipCode: formData.zip,
          timeInBusiness: formData.yearsInBusiness,
          equipmentType: formData.equipmentType,
          additionalInfo: `Commercial Application - ${formData.additionalInfo}`,
          pdfAttachment: pdfBase64, // Include PDF for email attachment
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        const submissionDate = new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
        setSubmissionDate(submissionDate);
        setShowSuccessModal(true);
        
        // Reset form
        setFormData({
          ownerFirstName: '',
          ownerLastName: '',
          email: '',
          phone: '',
          businessName: '',
          businessType: '',
          yearsInBusiness: '',
          annualRevenue: '',
          ein: '',
          businessAddress: '',
          city: '',
          state: '',
          zip: '',
          equipmentType: '',
          equipmentCost: '',
          equipmentDescription: '',
          vendor: '',
          additionalInfo: '',
          agreeToTerms: false
        });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      // Show error toast or message
    } finally {
      setLoading(false);
    }
  };

  // CSS Classes
  const inputClasses = `
    w-full px-3 py-2.5 rounded-lg
    border border-gray-300
    bg-white text-gray-900 placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
    hover:bg-gray-50 transition-all duration-200
    text-sm leading-tight
    shadow-sm
  `;

  const selectClasses = `
    w-full px-3 py-2.5 rounded-lg
    border border-gray-300
    bg-white text-gray-900
    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
    hover:bg-gray-50 transition-all duration-200
    text-sm leading-tight
    shadow-sm appearance-none
  `;

  const labelClasses = "block text-sm font-semibold text-gray-700 mb-1.5";

  return (
    <div className="bg-white font-sans min-h-screen">
      {/* Success Modal */}
      <SuccessModal
        isVisible={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        submissionDate={submissionDate}
        customMessage="Thank you for your commercial financing application. Alan Johnson will personally review your application and contact you within one business day."
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0D3853] to-[#0EB5B2] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Finance Application $500,000 to $50 million
            </h1>
            <p className="text-xl text-white/90">
              Complete the application to start the financing process
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white shadow-xl rounded-xl p-6 md:p-8 border border-gray-100"
        >
          <div className="flex items-center mb-8">
            <Image
              src="/Images/logo-NO-BG.png"
              alt="Vista Pacific Capital Logo"
              width={60}
              height={60}
              className="mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold text-[#113E59]">Vista Pacific Capital</h2>
              <p className="text-[#0EB5B2] text-sm font-medium">Commercial Financing Application</p>
            </div>
          </div>

          {/* Required Information Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              <span className="text-red-500 font-bold">*</span> Required information for application submission
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information - Moved to Top */}
            <section>
              <h3 className="text-xl font-bold text-[#0D3853] mb-6 border-b border-gray-200 pb-2">
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="ownerFirstName" className={labelClasses}>
                    Owner First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="ownerFirstName"
                    type="text"
                    value={formData.ownerFirstName}
                    onChange={(e) => setFormData({...formData, ownerFirstName: e.target.value})}
                    onFocus={() => setFocused('ownerFirstName')}
                    onBlur={() => setFocused('')}
                    placeholder="John"
                    className={`${inputClasses} ${focused === 'ownerFirstName' ? 'ring-2 ring-green-500' : ''} ${
                      errors.some(error => error.field === 'ownerFirstName') ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.some(error => error.field === 'ownerFirstName') && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.find(error => error.field === 'ownerFirstName')?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="ownerLastName" className={labelClasses}>
                    Owner Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="ownerLastName"
                    type="text"
                    value={formData.ownerLastName}
                    onChange={(e) => setFormData({...formData, ownerLastName: e.target.value})}
                    onFocus={() => setFocused('ownerLastName')}
                    onBlur={() => setFocused('')}
                    placeholder="Smith"
                    className={`${inputClasses} ${focused === 'ownerLastName' ? 'ring-2 ring-green-500' : ''} ${
                      errors.some(error => error.field === 'ownerLastName') ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.some(error => error.field === 'ownerLastName') && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.find(error => error.field === 'ownerLastName')?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    placeholder="john@company.com"
                    className={`${inputClasses} ${focused === 'email' ? 'ring-2 ring-green-500' : ''} ${
                      errors.some(error => error.field === 'email') ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.some(error => error.field === 'email') && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.find(error => error.field === 'email')?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      const formatted = formatPhoneNumber(e.target.value);
                      setFormData({...formData, phone: formatted});
                    }}
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setFocused('')}
                    placeholder="(555) 123-4567"
                    className={`${inputClasses} ${focused === 'phone' ? 'ring-2 ring-green-500' : ''} ${
                      errors.some(error => error.field === 'phone') ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.some(error => error.field === 'phone') && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.find(error => error.field === 'phone')?.message}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Business Information */}
            <section>
              <h3 className="text-xl font-bold text-[#0D3853] mb-6 border-b border-gray-200 pb-2">
                Business Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="businessName" className={labelClasses}>
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    onFocus={() => setFocused('businessName')}
                    onBlur={() => setFocused('')}
                    placeholder="Your Business Name"
                    className={`${inputClasses} ${focused === 'businessName' ? 'ring-2 ring-green-500' : ''} ${
                      errors.some(error => error.field === 'businessName') ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.some(error => error.field === 'businessName') && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.find(error => error.field === 'businessName')?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="businessType" className={labelClasses}>
                    Business Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="businessType"
                    value={formData.businessType}
                    onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                    onFocus={() => setFocused('businessType')}
                    onBlur={() => setFocused('')}
                    className={`${selectClasses} ${focused === 'businessType' ? 'ring-2 ring-green-500' : ''} ${
                      errors.some(error => error.field === 'businessType') ? 'border-red-500' : ''
                    }`}
                    required
                  >
                    <option value="">Select Business Type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.some(error => error.field === 'businessType') && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.find(error => error.field === 'businessType')?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="yearsInBusiness" className={labelClasses}>
                    Years in Business <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="yearsInBusiness"
                    type="text"
                    value={formData.yearsInBusiness}
                    onChange={(e) => setFormData({...formData, yearsInBusiness: e.target.value})}
                    onFocus={() => setFocused('yearsInBusiness')}
                    onBlur={() => setFocused('')}
                    placeholder="5"
                    className={`${inputClasses} ${focused === 'yearsInBusiness' ? 'ring-2 ring-green-500' : ''} ${
                      errors.some(error => error.field === 'yearsInBusiness') ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.some(error => error.field === 'yearsInBusiness') && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.find(error => error.field === 'yearsInBusiness')?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="annualRevenue" className={labelClasses}>
                    Annual Revenue
                  </label>
                  <input
                    id="annualRevenue"
                    type="text"
                    value={formData.annualRevenue}
                    onChange={(e) => {
                      const formatted = formatCurrency(e.target.value);
                      setFormData({...formData, annualRevenue: formatted});
                    }}
                    onFocus={() => setFocused('annualRevenue')}
                    onBlur={() => setFocused('')}
                    placeholder="$1,000,000"
                    className={`${inputClasses} ${focused === 'annualRevenue' ? 'ring-2 ring-green-500' : ''}`}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="ein" className={labelClasses}>
                  Employer Identification Number (EIN)
                </label>
                <input
                  id="ein"
                  type="text"
                  value={formData.ein}
                  onChange={(e) => {
                    const formatted = formatEIN(e.target.value);
                    setFormData({...formData, ein: formatted});
                  }}
                  onFocus={() => setFocused('ein')}
                  onBlur={() => setFocused('')}
                  placeholder="XX-XXXXXXX"
                  className={`${inputClasses} ${focused === 'ein' ? 'ring-2 ring-green-500' : ''} max-w-xs`}
                />
              </div>
            </section>

            {/* Equipment Information */}
            <section>
              <h3 className="text-xl font-bold text-[#0D3853] mb-6 border-b border-gray-200 pb-2">
                Equipment Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="equipmentType" className={labelClasses}>
                    Equipment Type <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="equipmentType"
                    type="text"
                    value={formData.equipmentType}
                    onChange={(e) => setFormData({...formData, equipmentType: e.target.value})}
                    onFocus={() => setFocused('equipmentType')}
                    onBlur={() => setFocused('')}
                    placeholder="Manufacturing Equipment, Medical Equipment, etc."
                    className={`${inputClasses} ${focused === 'equipmentType' ? 'ring-2 ring-green-500' : ''} ${
                      errors.some(error => error.field === 'equipmentType') ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.some(error => error.field === 'equipmentType') && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.find(error => error.field === 'equipmentType')?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="equipmentCost" className={labelClasses}>
                    Equipment Cost <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="equipmentCost"
                    type="text"
                    value={formData.equipmentCost}
                    onChange={(e) => {
                      const formatted = formatCurrency(e.target.value);
                      setFormData({...formData, equipmentCost: formatted});
                    }}
                    onFocus={() => setFocused('equipmentCost')}
                    onBlur={() => setFocused('')}
                    placeholder="$500,000"
                    className={`${inputClasses} ${focused === 'equipmentCost' ? 'ring-2 ring-green-500' : ''} ${
                      errors.some(error => error.field === 'equipmentCost') ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.some(error => error.field === 'equipmentCost') && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.find(error => error.field === 'equipmentCost')?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="vendor" className={labelClasses}>
                    Equipment Vendor/Dealer
                  </label>
                  <input
                    id="vendor"
                    type="text"
                    value={formData.vendor}
                    onChange={(e) => setFormData({...formData, vendor: e.target.value})}
                    onFocus={() => setFocused('vendor')}
                    onBlur={() => setFocused('')}
                    placeholder="Vendor Company Name"
                    className={`${inputClasses} ${focused === 'vendor' ? 'ring-2 ring-green-500' : ''}`}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="equipmentDescription" className={labelClasses}>
                  Equipment Description
                </label>
                <textarea
                  id="equipmentDescription"
                  value={formData.equipmentDescription}
                  onChange={(e) => setFormData({...formData, equipmentDescription: e.target.value})}
                  onFocus={() => setFocused('equipmentDescription')}
                  onBlur={() => setFocused('')}
                  placeholder="Detailed description of the equipment, manufacturer, model, year, etc."
                  rows={4}
                  className={`${inputClasses} ${focused === 'equipmentDescription' ? 'ring-2 ring-green-500' : ''}`}
                />
              </div>
            </section>

            {/* Additional Information */}
            <section>
              <h3 className="text-xl font-bold text-[#0D3853] mb-6 border-b border-gray-200 pb-2">
                Additional Information
              </h3>
              
              <div>
                <label htmlFor="additionalInfo" className={labelClasses}>
                  Additional Comments or Requirements
                </label>
                <textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                  onFocus={() => setFocused('additionalInfo')}
                  onBlur={() => setFocused('')}
                  placeholder="Any additional information that would help us process your application..."
                  rows={4}
                  className={`${inputClasses} ${focused === 'additionalInfo' ? 'ring-2 ring-green-500' : ''}`}
                />
              </div>
            </section>

            {/* Terms and Conditions */}
            <section className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start mb-4">
                <div className="flex items-center h-5 mt-1">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                    className="h-4 w-4 text-[#0EB5B2] focus:ring-[#0EB5B2] border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className={`font-medium ${!formData.agreeToTerms ? 'text-red-700' : 'text-[#0D3853]'}`}>
                    I AGREE <span className="text-red-500">*</span>
                  </label>
                  <p className="text-gray-600 mt-1 text-xs leading-relaxed">
                    I understand that by checking the I AGREE box, I am providing 'written instructions' to Vista Pacific Capital under the Fair Credit Reporting Act authorizing Vista Pacific Capital to obtain such information from my personal credit profile or other information from credit bureaus. I authorize Vista Pacific Capital to obtain such information solely to prequalify me for equipment financing/leases or small business finance/working capital, and I acknowledge that I am the business owner and I am personally liable for the business.
                  </p>
                </div>
              </div>
              
              {errors.some(error => error.field === 'agreeToTerms') && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.find(error => error.field === 'agreeToTerms')?.message}
                </p>
              )}
            </section>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={loading || !formData.agreeToTerms}
                className={`
                  px-8 py-4 rounded-lg font-semibold text-lg
                  shadow-lg transform transition-all duration-300
                  flex items-center justify-center space-x-2 mx-auto
                  ${loading
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : !formData.agreeToTerms
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-[#0EB5B2] text-white hover:bg-[#0D3853] hover:shadow-xl hover:-translate-y-1'
                  }
                `}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
