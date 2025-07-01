'use client';

import { CheckCircle } from 'lucide-react';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { useEffect, useState } from 'react';
import Toast from '../components/Toast'; // Add this import

// Define types for form data
interface BusinessFormData {
  amountNeeded: string;
  email: string;
  businessName: string;
  businessType: string;
  businessPhone: string;
  businessAddress: string;
  businessSuite: string;
  city: string;
  state: string;
  zip: string;
  yearsInBusiness: string;
  annualRevenue: string;
  federalTaxId: string; // Added federalTaxId to business data
}

// Add Agent interface
interface TeamMember {
  name: string;
  email: string;
  phone: string;
  endpoint: string;
}

interface OwnerFormData {
  firstName: string;
  lastName: string;
  socialSecurityNumber: string;
  ownershipPercentage: string;
  dateOfBirth: string;
  homeAddress: string;
  homeSuite: string;
  homeCity: string;
  homeState: string;
  homeZip: string;
  agreeToTerms: boolean;
}

interface AdditionalOwner {
  firstName: string;
  lastName: string;
  socialSecurityNumber: string;
  ownershipPercentage: string;
  dateOfBirth: string;
  homeAddress: string;
  homeSuite: string;
  homeCity: string;
  homeState: string;
  homeZip: string;
}

interface FormError {
  field: string;
  message: string;
}

interface SubmitStatus {
  success?: boolean;
  message?: string;
}

export default function FinanceApplicationPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [businessData, setBusinessData] = useState<BusinessFormData>({
    amountNeeded: '',
    email: '',
    businessName: '',
    businessType: '',
    businessPhone: '',
    businessAddress: '',
    businessSuite: '',
    city: '',
    state: '',
    zip: '',
    yearsInBusiness: '',
    annualRevenue: '',
    federalTaxId: '' // Initialize federalTaxId in business data
  });

  const [ownerData, setOwnerData] = useState<OwnerFormData>({
    firstName: '',
    lastName: '',
    socialSecurityNumber: '',
    ownershipPercentage: '100',
    dateOfBirth: '',
    homeAddress: '',
    homeSuite: '',
    homeCity: '',
    homeState: '',
    homeZip: '',
    agreeToTerms: false
  });

  // Add state for agent info
  const [agent, setAgent] = useState<TeamMember | null>(null);

  // Load form data from session storage if available
  useEffect(() => {
    // Get data from session storage
    try {
      const storedBusinessData = sessionStorage.getItem('businessData');
      const storedOwnerData = sessionStorage.getItem('ownerData');
      const storedTeamMember = sessionStorage.getItem('teamMember');
      
      if (storedBusinessData) {
        const parsedBusinessData = JSON.parse(storedBusinessData);
        setBusinessData(prev => ({
          ...prev,
          amountNeeded: parsedBusinessData.amountNeeded || prev.amountNeeded,
          email: parsedBusinessData.email || prev.email,
          businessName: parsedBusinessData.businessName || prev.businessName,
          businessPhone: parsedBusinessData.businessPhone || prev.businessPhone
        }));
      }
      
      if (storedOwnerData) {
        const parsedOwnerData = JSON.parse(storedOwnerData);
        setOwnerData(prev => ({
          ...prev,
          firstName: parsedOwnerData.firstName || prev.firstName,
          lastName: parsedOwnerData.lastName || prev.lastName,
          dateOfBirth: parsedOwnerData.dateOfBirth || prev.dateOfBirth,
          ownershipPercentage: parsedOwnerData.ownershipPercentage || prev.ownershipPercentage
        }));
      }

      if (storedTeamMember) {
        setAgent(JSON.parse(storedTeamMember));
      }
    } catch (error) {
      console.error('Error loading data from session storage:', error);
    }
  }, []);

  const [additionalOwners, setAdditionalOwners] = useState<AdditionalOwner[]>([]);
  const [businessErrors, setBusinessErrors] = useState<FormError[]>([]);
  const [ownerErrors, setOwnerErrors] = useState<FormError[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({});
  const [focused, setFocused] = useState<string>('');

  // State for tracking completion status
  const [businessComplete, setBusinessComplete] = useState<boolean>(false);
  const [ownerComplete, setOwnerComplete] = useState<boolean>(false);

  // Add this after the state declarations (around line 61)
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Business types dropdown options
  const businessTypes = [
    "LLC",
    "Corporation",
    "Sole Proprietorship",
    "Partnership",
    "S-Corporation",
    "Non-Profit"
  ];

  // States dropdown options
  const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  // Years in business options
  const yearsOptions = [
    "Less than 1 year",
    "1-2 years",
    "3-5 years",
    "6-10 years",
    "More than 10 years"
  ];

  // Annual revenue options
  const revenueOptions = [
    "Less than $100,000",
    "$100,000 - $500,000",
    "$500,001 - $1 million",
    "$1 million - $5 million",
    "More than $5 million"
  ];

  // Validate business form
  const validateBusinessForm = (): boolean => {
    const errors: FormError[] = [];

    if (!businessData.amountNeeded) {
      errors.push({ field: 'amountNeeded', message: 'Amount needed is required' });
    }

    if (!businessData.email) {
      errors.push({ field: 'email', message: 'Email is required' });
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(businessData.email)) {
        errors.push({ field: 'email', message: 'Please enter a valid email address' });
      }
    }

    if (!businessData.businessName) {
      errors.push({ field: 'businessName', message: 'Business name is required' });
    }

    if (!businessData.businessType) {
      errors.push({ field: 'businessType', message: 'Business type is required' });
    }

    if (!businessData.businessPhone) {
      errors.push({ field: 'businessPhone', message: 'Business phone is required' });
    } else {
      const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (!phoneRegex.test(formatPhoneNumber(businessData.businessPhone))) {
        errors.push({ field: 'businessPhone', message: 'Please enter a valid phone number' });
      }
    }

    if (!businessData.businessAddress) {
      errors.push({ field: 'businessAddress', message: 'Business address is required' });
    }

    if (!businessData.city) {
      errors.push({ field: 'city', message: 'City is required' });
    }

    if (!businessData.state) {
      errors.push({ field: 'state', message: 'State is required' });
    }

    if (!businessData.zip) {
      errors.push({ field: 'zip', message: 'ZIP code is required' });
    } else {
      const zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
      if (!zipRegex.test(businessData.zip)) {
        errors.push({ field: 'zip', message: 'Please enter a valid ZIP code' });
      }
    }

    if (!businessData.yearsInBusiness) {
      errors.push({ field: 'yearsInBusiness', message: 'Years in business is required' });
    }

    if (!businessData.annualRevenue) {
      errors.push({ field: 'annualRevenue', message: 'Annual revenue is required' });
    }

    setBusinessErrors(errors);
    setBusinessComplete(errors.length === 0);
    return errors.length === 0;
  };

  // Validate owner form
  const validateOwnerForm = (): boolean => {
    const errors: FormError[] = [];

    if (!ownerData.firstName) {
      errors.push({ field: 'firstName', message: 'First name is required' });
    }

    if (!ownerData.lastName) {
      errors.push({ field: 'lastName', message: 'Last name is required' });
    }

    if (!ownerData.socialSecurityNumber) {
      errors.push({ field: 'socialSecurityNumber', message: 'Social Security Number is required' });
    } else {
      const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/;
      if (!ssnRegex.test(ownerData.socialSecurityNumber)) {
        errors.push({ field: 'socialSecurityNumber', message: 'Please enter a valid SSN' });
      }
    }

    if (!ownerData.ownershipPercentage) {
      errors.push({ field: 'ownershipPercentage', message: 'Ownership percentage is required' });
    } else {
      const percentage = parseInt(ownerData.ownershipPercentage);
      if (isNaN(percentage) || percentage <= 0 || percentage > 100) {
        errors.push({ field: 'ownershipPercentage', message: 'Please enter a valid percentage (1-100)' });
      }
    }

    if (!ownerData.dateOfBirth) {
      errors.push({ field: 'dateOfBirth', message: 'Date of birth is required' });
    }

    if (!ownerData.homeAddress) {
      errors.push({ field: 'homeAddress', message: 'Home address is required' });
    }

    if (!ownerData.homeCity) {
      errors.push({ field: 'homeCity', message: 'City is required' });
    }

    if (!ownerData.homeState) {
      errors.push({ field: 'homeState', message: 'State is required' });
    }

    if (!ownerData.homeZip) {
      errors.push({ field: 'homeZip', message: 'ZIP code is required' });
    } else {
      const zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
      if (!zipRegex.test(ownerData.homeZip)) {
        errors.push({ field: 'homeZip', message: 'Please enter a valid ZIP code' });
      }
    }

    // Add validation for additional owners if any exist
    const additionalOwnersErrors = validateAdditionalOwners();
    if (additionalOwnersErrors.length > 0) {
      // We have errors in additional owners - fail validation
      errors.push(...additionalOwnersErrors);
    }

    setOwnerErrors(errors);
    setOwnerComplete(errors.length === 0);
    return errors.length === 0;
  };

  // Validate additional owners
  const validateAdditionalOwners = (): FormError[] => {
    const errors: FormError[] = [];
    
    additionalOwners.forEach((owner, index) => {
      if (!owner.firstName) {
        errors.push({ field: `additionalOwner${index}_firstName`, message: `Additional owner ${index + 1}: First name is required` });
      }
      
      if (!owner.lastName) {
        errors.push({ field: `additionalOwner${index}_lastName`, message: `Additional owner ${index + 1}: Last name is required` });
      }
      
      if (!owner.socialSecurityNumber) {
        errors.push({ field: `additionalOwner${index}_ssn`, message: `Additional owner ${index + 1}: SSN is required` });
      } else {
        const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/;
        if (!ssnRegex.test(owner.socialSecurityNumber)) {
          errors.push({ field: `additionalOwner${index}_ssn`, message: `Additional owner ${index + 1}: Please enter a valid SSN` });
        }
      }
      
      // Add more validations as needed for additional owners
    });
    
    return errors;
  };

  // Format phone number
  const formatPhoneNumber = (value: string): string => {
    const phone = value.replace(/\D/g, '');
    if (phone.length < 4) return phone;
    if (phone.length < 7) return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  };

  // Format SSN
  const formatSSN = (value: string): string => {
    const ssn = value.replace(/\D/g, '');
    if (ssn.length < 4) return ssn;
    if (ssn.length < 6) return `${ssn.slice(0, 3)}-${ssn.slice(3)}`;
    return `${ssn.slice(0, 3)}-${ssn.slice(3, 5)}-${ssn.slice(5, 9)}`;
  };

  // Format currency
  const formatCurrency = (value: string): string => {
    // Remove any non-digit characters
    const digits = value.replace(/\D/g, '');
    
    // Add commas for every three digits and dollar sign
    return `$${digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  // Handle phone input change
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, formType: 'business' | 'owner') => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    if (formType === 'business') {
      setBusinessData({ ...businessData, businessPhone: formattedPhone });
    }
  };

  // Handle SSN input change
  const handleSSNChange = (e: React.ChangeEvent<HTMLInputElement>, formType: 'owner' | 'additional', index?: number) => {
    const formattedSSN = formatSSN(e.target.value);
    
    if (formType === 'owner') {
      setOwnerData({ ...ownerData, socialSecurityNumber: formattedSSN });
    } else if (formType === 'additional' && typeof index === 'number') {
      const updatedOwners = [...additionalOwners];
      updatedOwners[index] = { ...updatedOwners[index], socialSecurityNumber: formattedSSN };
      setAdditionalOwners(updatedOwners);
    }
  };

  // Handle currency input change
  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCurrency(e.target.value.replace(/^\$/, ''));
    // Set the value without the dollar sign in the input field to avoid duplication
    const valueForInput = formattedValue.replace(/^\$/, '');
    
    // Update the corresponding state
    setBusinessData({
      ...businessData,
      amountNeeded: valueForInput
    });
  };

  // Handle ownership percentage change
  const handleOwnershipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) >= 0 && parseInt(value) <= 100)) {
      setOwnerData({ ...ownerData, ownershipPercentage: value });
      
      // Add additional owner field if percentage is less than 100
      if (value !== '' && parseInt(value) < 100 && additionalOwners.length === 0) {
        setAdditionalOwners([{
          firstName: '',
          lastName: '',
          socialSecurityNumber: '',
          ownershipPercentage: (100 - parseInt(value)).toString(),
          dateOfBirth: '',
          homeAddress: '',
          homeSuite: '',
          homeCity: '',
          homeState: '',
          homeZip: ''
        }]);
      } else if (value === '100' && additionalOwners.length === 1 && additionalOwners[0].ownershipPercentage !== '0') {
        // Only remove the first additional owner if it's based on ownership percentage
        setAdditionalOwners([]);
      } else if (additionalOwners.length > 0 && value !== '') {
        // Update the first additional owner's ownership percentage
        const updatedOwners = [...additionalOwners];
        updatedOwners[0] = { 
          ...updatedOwners[0], 
          ownershipPercentage: (100 - parseInt(value)).toString() 
        };
        setAdditionalOwners(updatedOwners);
      }
    }
  };

  // Handle ownership percentage change for additional owners
  const handleAdditionalOwnershipChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) >= 0 && parseInt(value) <= 100)) {
      const updatedOwners = [...additionalOwners];
      updatedOwners[index] = { ...updatedOwners[index], ownershipPercentage: value };
      setAdditionalOwners(updatedOwners);
    }
  };

  // Navigate to next step
  const goToNextStep = () => {
    if (currentStep === 1) {
      if (validateBusinessForm()) {
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      if (validateOwnerForm()) {
        setCurrentStep(3);
      }
    }
  };

  // Navigate to previous step
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Generate PDF
  const generatePDF = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    
    // Add header to PDF
    page.drawText('Vista Pacific Capital - Finance Application', {
      x: 50,
      y: height - 50,
      size: 24,
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

    // Add agent information if available
    if (agent) {
      page.drawText(`Assigned Agent: ${agent.name}`, {
        x: 50,
        y: height - 100,
        size: 12,
        font,
        color: rgb(0.3, 0.3, 0.3),
      });
    }
    
    // Business Information Header
    page.drawText('Business Information', {
      x: 50,
      y: height - 120,
      size: 16,
      font: boldFont,
      color: rgb(0, 0.5, 0),
    });
    
    // Business Information Fields - Updated to include federalTaxId
    const businessFields = [
      { label: 'Amount Needed ', value: `$${businessData.amountNeeded}` },
      { label: 'Business Name', value: businessData.businessName },
      { label: 'Business Type', value: businessData.businessType },
      { label: 'Business Phone', value: businessData.businessPhone },
      { label: 'Email', value: businessData.email },
      { label: 'Federal Tax ID', value: businessData.federalTaxId || 'N/A' },
      { label: 'Business Address', value: `${businessData.businessAddress}, ${businessData.businessSuite ? 'Suite ' + businessData.businessSuite + ', ' : ''}${businessData.city}, ${businessData.state} ${businessData.zip}` },
      { label: 'Years in Business', value: businessData.yearsInBusiness },
      { label: 'Annual Revenue', value: businessData.annualRevenue },
    ];
    
    businessFields.forEach((field, index) => {
      page.drawText(`${field.label}:`, {
        x: 50,
        y: height - 150 - (index * 25),
        size: 12,
        font: boldFont,
        color: rgb(0.3, 0.3, 0.3),
      });
      
      page.drawText(field.value, {
        x: 220,
        y: height - 150 - (index * 25),
        size: 12,
        font,
        color: rgb(0, 0, 0),
      });
    });
    
    // Owner Information Header
    page.drawText('Owner Information', {
      x: 50,
      y: height - 150 - (businessFields.length * 25) - 30,
      size: 16,
      font: boldFont,
      color: rgb(0, 0.5, 0),
    });
    
    // Owner Information Fields
    const ownerFields = [
      { label: 'Name', value: `${ownerData.firstName} ${ownerData.lastName}` },
      { label: 'Social Security Number', value: ownerData.socialSecurityNumber },
      { label: 'Ownership Percentage', value: `${ownerData.ownershipPercentage}%` },
      { label: 'Date of Birth', value: ownerData.dateOfBirth },
      { label: 'Home Address', value: `${ownerData.homeAddress}, ${ownerData.homeSuite ? 'Suite ' + ownerData.homeSuite + ', ' : ''}${ownerData.homeCity}, ${ownerData.homeState} ${ownerData.homeZip}` },
    ];
    
    const ownerStartY = height - 150 - (businessFields.length * 25) - 60;
    
    ownerFields.forEach((field, index) => {
      page.drawText(`${field.label}:`, {
        x: 50,
        y: ownerStartY - (index * 25),
        size: 12,
        font: boldFont,
        color: rgb(0.3, 0.3, 0.3),
      });
      
      page.drawText(field.value, {
        x: 220,
        y: ownerStartY - (index * 25),
        size: 12,
        font,
        color: rgb(0, 0, 0),
      });
    });
    
    // Additional Owners (if any)
    if (additionalOwners.length > 0) {
      // Add a new page if needed
      let currentPage = page;
      let currentY = ownerStartY - (ownerFields.length * 25) - 30;
      
      if (currentY < 100) {
        currentPage = pdfDoc.addPage();
        currentY = height - 50;
      }
      
      currentPage.drawText('Additional Owners', {
        x: 50,
        y: currentY,
        size: 16,
        font: boldFont,
        color: rgb(0, 0.5, 0),
      });
      
      additionalOwners.forEach((owner, ownerIndex) => {
        currentPage.drawText(`Additional Owner ${ownerIndex + 1}:`, {
          x: 50,
          y: currentY - 30,
          size: 14,
          font: boldFont,
          color: rgb(0.3, 0.3, 0.3),
        });
        
        const additionalOwnerFields = [
          { label: 'Name', value: `${owner.firstName} ${owner.lastName}` },
          { label: 'Social Security Number', value: owner.socialSecurityNumber },
          { label: 'Ownership Percentage', value: `${owner.ownershipPercentage}%` },
          { label: 'Date of Birth', value: owner.dateOfBirth },
          { label: 'Home Address', value: `${owner.homeAddress}, ${owner.homeSuite ? 'Suite ' + owner.homeSuite + ', ' : ''}${owner.homeCity}, ${owner.homeState} ${owner.homeZip}` },
        ];
        
        additionalOwnerFields.forEach((field, index) => {
          currentPage.drawText(`${field.label}:`, {
            x: 50,
            y: currentY - 60 - (index * 25),
            size: 12,
            font: boldFont,
            color: rgb(0.3, 0.3, 0.3),
          });
          
          currentPage.drawText(field.value, {
            x: 220,
            y: currentY - 60 - (index * 25),
            size: 12,
            font,
            color: rgb(0, 0, 0),
          });
        });
        
        currentY = currentY - 60 - (additionalOwnerFields.length * 25) - 30;
        
        if (currentY < 100 && ownerIndex < additionalOwners.length - 1) {
          currentPage = pdfDoc.addPage();
          currentY = height - 50;
        }
      });
    }
    
    // Add footer
    const lastPage = pdfDoc.getPages()[pdfDoc.getPageCount() - 1];
    lastPage.drawText('Thank you for your application.', {
      x: 50,
      y: 50,
      size: 10,
      font: boldFont,
      color: rgb(0.3, 0.3, 0.3),
    });
    
    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!ownerData.agreeToTerms) {
      setSubmitStatus({
        success: false,
        message: 'You must agree to the terms and conditions to proceed.'
      });
      return;
    }

    setLoading(true);
    setSubmitStatus({});

    try {
      // Generate PDF
      const pdfBytes = await generatePDF();
      
      // Convert PDF bytes to base64
      const pdfBase64 = Buffer.from(pdfBytes).toString('base64');
      
      // Prepare form data for submission
      const completeFormData = {
        business: {
          ...businessData,
          // Format the needed amount as currency for API
          amountNeeded: businessData.amountNeeded ? 
            businessData.amountNeeded.startsWith('$') ? 
              businessData.amountNeeded : 
              `$${businessData.amountNeeded}` : '',
          // Include federalTaxId here now
          federalTaxId: businessData.federalTaxId || '',
        },
        primaryOwner: {
          ...ownerData,
          // Construct full name for API
          fullName: `${ownerData.firstName} ${ownerData.lastName}`,
          // Format ownership percentage with % symbol for API
          ownershipPercentage: ownerData.ownershipPercentage ? 
            ownerData.ownershipPercentage.endsWith('%') ? 
              ownerData.ownershipPercentage : 
              `${ownerData.ownershipPercentage}%` : '',
        },
        additionalOwners: additionalOwners.map(owner => ({
          ...owner,
          // Construct full name for each additional owner
          fullName: `${owner.firstName} ${owner.lastName}`,
          // Format ownership percentage with % symbol for API
          ownershipPercentage: owner.ownershipPercentage ? 
            owner.ownershipPercentage.endsWith('%') ? 
              owner.ownershipPercentage : 
              `${owner.ownershipPercentage}%` : '',
        })),
        pdfAttachment: pdfBase64,
        // Include agent information in the submission if available
        agent: agent ? {
          name: agent.name,
          email: agent.email,
          phone: agent.phone
        } : null
      };
      
      // Submit form data and PDF
      const response = await fetch('/api/submit-finance-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(completeFormData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          success: true,
          message: 'Thank you! Your finance application has been submitted successfully. A copy has been sent to your email.',
        });
        
        // Show success toast
        setShowSuccessToast(true);
        
        // Reset form
        setCurrentStep(1);
        setBusinessData({
          amountNeeded: '',
          email: '',
          businessName: '',
          businessType: '',
          businessPhone: '',
          businessAddress: '',
          businessSuite: '',
          city: '',
          state: '',
          zip: '',
          yearsInBusiness: '',
          annualRevenue: '',
          federalTaxId: '' // Reset federalTaxId
        });
        setOwnerData({
          firstName: '',
          lastName: '',
          socialSecurityNumber: '',
          ownershipPercentage: '100',
          dateOfBirth: '',
          homeAddress: '',
          homeSuite: '',
          homeCity: '',
          homeState: '',
          homeZip: '',
          agreeToTerms: false
        });
        setAdditionalOwners([]);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: error.message || 'There was an error submitting your application. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  // CSS Classes
  const inputClasses = `
    w-full px-3 py-3 rounded-lg
    border border-gray-300
    bg-white text-gray-900 placeholder-gray-400
    focus:outline-none focus:ring-1 focus:ring-[#0EB5B2] focus:border-[#0EB5B2]
    hover:bg-gray-50 transition-all duration-200
    text-sm leading-tight
  `;

  const selectClasses = `
    w-full px-3 py-2.5 rounded-lg
    border border-gray-300
    bg-white text-gray-900 placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-[#0EB5B2] focus:border-transparent
    hover:bg-gray-50 transition-all duration-200
    text-sm leading-tight
    shadow-sm
    appearance-none
  `;

  const labelClasses = "block text-xs font-medium text-gray-700 mb-1";

  const buttonClasses = `
    px-4 py-3 rounded-lg font-semibold text-base
    shadow-lg 
    transform transition-all duration-300
    flex items-center justify-center space-x-2
  `;

  // Add this button to add additional owners regardless of ownership percentage
  const addGuarantor = () => {
    setAdditionalOwners([
      ...additionalOwners,
      {
        firstName: '',
        lastName: '',
        socialSecurityNumber: '',
        ownershipPercentage: '',
        dateOfBirth: '',
        homeAddress: '',
        homeSuite: '',
        homeCity: '',
        homeState: '',
        homeZip: '',
      },
    ]);
  };

  // Add this function to remove an additional owner
  const removeAdditionalOwner = (index: number) => {
    const updatedOwners = [...additionalOwners];
    updatedOwners.splice(index, 1);
    setAdditionalOwners(updatedOwners);
  };

  // Render form based on current step
  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-1">
                <label className={labelClasses}>
                  Amount Needed <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={businessData.amountNeeded}
                  onChange={handleCurrencyChange}
                  onFocus={() => setFocused('amountNeeded')}
                  onBlur={() => setFocused('')}
                  placeholder="$50,000"
                  className={`${inputClasses} ${focused === 'amountNeeded' ? 'ring-2 ring-green-500' : ''} ${
                    businessErrors.some(error => error.field === 'amountNeeded') ? 'border-red-500' : ''
                  }`}
                  required
                />
                {businessErrors.some(error => error.field === 'amountNeeded') && (
                  <p className="text-red-500 text-xs mt-1">
                    {businessErrors.find(error => error.field === 'amountNeeded')?.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-1">
                <label className={labelClasses}>
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={businessData.email}
                  onChange={(e) => setBusinessData({...businessData, email: e.target.value})}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                  placeholder="you@example.com"
                  className={`${inputClasses} ${focused === 'email' ? 'ring-2 ring-green-500' : ''} ${
                    businessErrors.some(error => error.field === 'email') ? 'border-red-500' : ''
                  }`}
                  required
                />
                {businessErrors.some(error => error.field === 'email') && (
                  <p className="text-red-500 text-xs mt-1">
                    {businessErrors.find(error => error.field === 'email')?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={labelClasses}>
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={businessData.businessName}
                  onChange={(e) => setBusinessData({...businessData, businessName: e.target.value})}
                  onFocus={() => setFocused('businessName')}
                  onBlur={() => setFocused('')}
                  placeholder="Business Name"
                  className={`${inputClasses} ${focused === 'businessName' ? 'ring-2 ring-green-500' : ''} ${
                    businessErrors.some(error => error.field === 'businessName') ? 'border-red-500' : ''
                  }`}
                  required
                />
                {businessErrors.some(error => error.field === 'businessName') && (
                  <p className="text-red-500 text-xs mt-1">
                    {businessErrors.find(error => error.field === 'businessName')?.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  Business Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={businessData.businessType}
                    onChange={(e) => setBusinessData({...businessData, businessType: e.target.value})}
                    onFocus={() => setFocused('businessType')}
                    onBlur={() => setFocused('')}
                    className={`${selectClasses} ${focused === 'businessType' ? 'ring-2 ring-green-500' : ''} ${
                      businessErrors.some(error => error.field === 'businessType') ? 'border-red-500' : ''
                    }`}
                    required
                  >
                    <option value="">Select Business Type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {businessErrors.some(error => error.field === 'businessType') && (
                  <p className="text-red-500 text-xs mt-1">
                    {businessErrors.find(error => error.field === 'businessType')?.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  Business Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={businessData.businessPhone}
                  onChange={(e) => handlePhoneChange(e, 'business')}
                  onFocus={() => setFocused('businessPhone')}
                  onBlur={() => setFocused('')}
                  placeholder="(555) 123-4567"
                  className={`${inputClasses} ${focused === 'businessPhone' ? 'ring-2 ring-green-500' : ''} ${
                    businessErrors.some(error => error.field === 'businessPhone') ? 'border-red-500' : ''
                  }`}
                  required
                />
                {businessErrors.some(error => error.field === 'businessPhone') && (
                  <p className="text-red-500 text-xs mt-1">
                    {businessErrors.find(error => error.field === 'businessPhone')?.message}
                  </p>
                )}
              </div>
            </div>

            {/* Added Federal Tax ID to business information */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div>
                <label className={labelClasses}>
                  Federal Tax ID Number (if available)
                </label>
                <input
                  type="text"
                  value={businessData.federalTaxId}
                  onChange={(e) => setBusinessData({...businessData, federalTaxId: e.target.value})}
                  onFocus={() => setFocused('federalTaxId')}
                  onBlur={() => setFocused('')}
                  placeholder="Tax ID Number"
                  className={`${inputClasses} ${focused === 'federalTaxId' ? 'ring-1 ring-[#0EB5B2]' : ''}`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-3">
                <label className={labelClasses}>
                  Business Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={businessData.businessAddress}
                  onChange={(e) => setBusinessData({...businessData, businessAddress: e.target.value})}
                  onFocus={() => setFocused('businessAddress')}
                  onBlur={() => setFocused('')}
                  placeholder="123 Business St"
                  className={`${inputClasses} ${focused === 'businessAddress' ? 'ring-2 ring-green-500' : ''} ${
                    businessErrors.some(error => error.field === 'businessAddress') ? 'border-red-500' : ''
                  }`}
                  required
                />
                {businessErrors.some(error => error.field === 'businessAddress') && (
                  <p className="text-red-500 text-xs mt-1">
                    {businessErrors.find(error => error.field === 'businessAddress')?.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className={labelClasses}>
                  Suite #
                </label>
                <input
                  type="text"
                  value={businessData.businessSuite}
                  onChange={(e) => setBusinessData({...businessData, businessSuite: e.target.value})}
                  onFocus={() => setFocused('businessSuite')}
                  onBlur={() => setFocused('')}
                  placeholder="Suite 100"
                  className={`${inputClasses} ${focused === 'businessSuite' ? 'ring-2 ring-green-500' : ''}`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={labelClasses}>
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={businessData.city}
                  onChange={(e) => setBusinessData({...businessData, city: e.target.value})}
                  onFocus={() => setFocused('city')}
                  onBlur={() => setFocused('')}
                  placeholder="City"
                  className={`${inputClasses} ${focused === 'city' ? 'ring-2 ring-green-500' : ''} ${
                    businessErrors.some(error => error.field === 'city') ? 'border-red-500' : ''
                  }`}
                  required
                />
                {businessErrors.some(error => error.field === 'city') && (
                  <p className="text-red-500 text-xs mt-1">
                    {businessErrors.find(error => error.field === 'city')?.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  State <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={businessData.state}
                    onChange={(e) => setBusinessData({...businessData, state: e.target.value})}
                    onFocus={() => setFocused('state')}
                    onBlur={() => setFocused('')}
                    className={`${selectClasses} ${focused === 'state' ? 'ring-2 ring-green-500' : ''} ${
                      businessErrors.some(error => error.field === 'state') ? 'border-red-500' : ''
                    }`}
                    required
                  >
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {businessErrors.some(error => error.field === 'state') && (
                  <p className="text-red-500 text-xs mt-1">
                    {businessErrors.find(error => error.field === 'state')?.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  Zip <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={businessData.zip}
                  onChange={(e) => setBusinessData({...businessData, zip: e.target.value})}
                  onFocus={() => setFocused('zip')}
                  onBlur={() => setFocused('')}
                  placeholder="12345"
                  className={`${inputClasses} ${focused === 'zip' ? 'ring-2 ring-green-500' : ''} ${
                    businessErrors.some(error => error.field === 'zip') ? 'border-red-500' : ''
                  }`}
                  required
                />
                {businessErrors.some(error => error.field === 'zip') && (
                  <p className="text-red-500 text-xs mt-1">
                    {businessErrors.find(error => error.field === 'zip')?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>
                  Years in Business <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={businessData.yearsInBusiness}
                    onChange={(e) => setBusinessData({...businessData, yearsInBusiness: e.target.value})}
                    onFocus={() => setFocused('yearsInBusiness')}
                    onBlur={() => setFocused('')}
                    className={`${selectClasses} ${focused === 'yearsInBusiness' ? 'ring-2 ring-green-500' : ''} ${
                      businessErrors.some(error => error.field === 'yearsInBusiness') ? 'border-red-500' : ''
                    }`}
                    required
                  >
                    <option value="">Select Years</option>
                    {yearsOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {businessErrors.some(error => error.field === 'yearsInBusiness') && (
                  <p className="text-red-500 text-xs mt-1">
                    {businessErrors.find(error => error.field === 'yearsInBusiness')?.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  Annual Revenue <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={businessData.annualRevenue}
                    onChange={(e) => setBusinessData({...businessData, annualRevenue: e.target.value})}
                    onFocus={() => setFocused('annualRevenue')}
                    onBlur={() => setFocused('')}
                    className={`${selectClasses} ${focused === 'annualRevenue' ? 'ring-2 ring-green-500' : ''} ${
                      businessErrors.some(error => error.field === 'annualRevenue') ? 'border-red-500' : ''
                    }`}
                    required
                  >
                    <option value="">Select Revenue</option>
                    {revenueOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {businessErrors.some(error => error.field === 'annualRevenue') && (
                  <p className="text-red-500 text-xs mt-1">
                    {businessErrors.find(error => error.field === 'annualRevenue')?.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            {/* First row - First Name / Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={ownerData.firstName}
                  onChange={(e) => setOwnerData({...ownerData, firstName: e.target.value})}
                  onFocus={() => setFocused('firstName')}
                  onBlur={() => setFocused('')}
                  placeholder="First Name"
                  className={`${inputClasses} ${focused === 'firstName' ? 'ring-1 ring-[#0EB5B2]' : ''} ${
                    ownerErrors.some(error => error.field === 'firstName') ? 'border-red-500' : ''
                  }`}
                  required
                />
                {ownerErrors.some(error => error.field === 'firstName') && (
                  <p className="text-red-500 text-xs mt-1">
                    {ownerErrors.find(error => error.field === 'firstName')?.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={ownerData.lastName}
                  onChange={(e) => setOwnerData({...ownerData, lastName: e.target.value})}
                  onFocus={() => setFocused('lastName')}
                  onBlur={() => setFocused('')}
                  placeholder="Last Name"
                  className={`${inputClasses} ${focused === 'lastName' ? 'ring-1 ring-[#0EB5B2]' : ''} ${
                    ownerErrors.some(error => error.field === 'lastName') ? 'border-red-500' : ''
                  }`}
                  required
                />
                {ownerErrors.some(error => error.field === 'lastName') && (
                  <p className="text-red-500 text-xs mt-1">
                    {ownerErrors.find(error => error.field === 'lastName')?.message}
                  </p>
                )}
              </div>
            </div>

            {/* Second row - Social Security Number / Ownership Percentage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>
                  Social Security Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={ownerData.socialSecurityNumber}
                  onChange={(e) => handleSSNChange(e, 'owner')}
                  onFocus={() => setFocused('socialSecurityNumber')}
                  onBlur={() => setFocused('')}
                  placeholder="123-45-6789"
                  className={`${inputClasses} ${focused === 'socialSecurityNumber' ? 'ring-2 ring-green-500' : ''} ${
                    ownerErrors.some(error => error.field === 'socialSecurityNumber') ? 'border-red-500' : ''
                  }`}
                  required
                />
                {ownerErrors.some(error => error.field === 'socialSecurityNumber') && (
                  <p className="text-red-500 text-xs mt-1">
                    {ownerErrors.find(error => error.field === 'socialSecurityNumber')?.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  % Ownership <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={ownerData.ownershipPercentage}
                  onChange={handleOwnershipChange}
                  onFocus={() => setFocused('ownershipPercentage')}
                  onBlur={() => setFocused('')}
                  placeholder="100"
                  className={`${inputClasses} ${focused === 'ownershipPercentage' ? 'ring-2 ring-green-500' : ''} ${
                    ownerErrors.some(error => error.field === 'ownershipPercentage') ? 'border-red-500' : ''
                  }`}
                  required
                />
                {ownerErrors.some(error => error.field === 'ownershipPercentage') && (
                  <p className="text-red-500 text-xs mt-1">
                    {ownerErrors.find(error => error.field === 'ownershipPercentage')?.message}
                  </p>
                )}
              </div>
            </div>

            {/* Add Date of Birth field - THIS WAS MISSING */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div>
                <label className={labelClasses}>
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={ownerData.dateOfBirth}
                  onChange={(e) => setOwnerData({...ownerData, dateOfBirth: e.target.value})}
                  onFocus={() => setFocused('dateOfBirth')}
                  onBlur={() => setFocused('')}
                  className={`${inputClasses} ${focused === 'dateOfBirth' ? 'ring-2 ring-green-500' : ''} ${
                    ownerErrors.some(error => error.field === 'dateOfBirth') ? 'border-red-500' : ''
                  }`}
                  required
                />
                {ownerErrors.some(error => error.field === 'dateOfBirth') && (
                  <p className="text-red-500 text-xs mt-1">
                    {ownerErrors.find(error => error.field === 'dateOfBirth')?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-3">
                <label className={labelClasses}>
                  Home Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={ownerData.homeAddress}
                  onChange={(e) => setOwnerData({...ownerData, homeAddress: e.target.value})}
                  onFocus={() => setFocused('homeAddress')}
                  onBlur={() => setFocused('')}
                  placeholder="123 Main St"
                  className={`${inputClasses} ${focused === 'homeAddress' ? 'ring-2 ring-green-500' : ''} ${
                    ownerErrors.some(error => error.field === 'homeAddress') ? 'border-red-500' : ''
                  }`}
                  required
                />
                {ownerErrors.some(error => error.field === 'homeAddress') && (
                  <p className="text-red-500 text-xs mt-1">
                    {ownerErrors.find(error => error.field === 'homeAddress')?.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className={labelClasses}>
                  Suite #
                </label>
                <input
                  type="text"
                  value={ownerData.homeSuite}
                  onChange={(e) => setOwnerData({...ownerData, homeSuite: e.target.value})}
                  onFocus={() => setFocused('homeSuite')}
                  onBlur={() => setFocused('')}
                  placeholder="Apt 101"
                  className={`${inputClasses} ${focused === 'homeSuite' ? 'ring-2 ring-green-500' : ''}`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={labelClasses}>
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={ownerData.homeCity}
                  onChange={(e) => setOwnerData({...ownerData, homeCity: e.target.value})}
                  onFocus={() => setFocused('homeCity')}
                  onBlur={() => setFocused('')}
                  placeholder="City"
                  className={`${inputClasses} ${focused === 'homeCity' ? 'ring-2 ring-green-500' : ''} ${
                    ownerErrors.some(error => error.field === 'homeCity') ? 'border-red-500' : ''
                  }`}
                  required
                />
                {ownerErrors.some(error => error.field === 'homeCity') && (
                  <p className="text-red-500 text-xs mt-1">
                    {ownerErrors.find(error => error.field === 'homeCity')?.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  State <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={ownerData.homeState}
                    onChange={(e) => setOwnerData({...ownerData, homeState: e.target.value})}
                    onFocus={() => setFocused('homeState')}
                    onBlur={() => setFocused('')}
                    className={`${selectClasses} ${focused === 'homeState' ? 'ring-2 ring-green-500' : ''} ${
                      ownerErrors.some(error => error.field === 'homeState') ? 'border-red-500' : ''
                    }`}
                    required
                  >
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {ownerErrors.some(error => error.field === 'homeState') && (
                  <p className="text-red-500 text-xs mt-1">
                    {ownerErrors.find(error => error.field === 'homeState')?.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  Zip <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={ownerData.homeZip}
                  onChange={(e) => setOwnerData({...ownerData, homeZip: e.target.value})}
                  onFocus={() => setFocused('homeZip')}
                  onBlur={() => setFocused('')}
                  placeholder="12345"
                  className={`${inputClasses} ${focused === 'homeZip' ? 'ring-2 ring-green-500' : ''} ${
                    ownerErrors.some(error => error.field === 'homeZip') ? 'border-red-500' : ''
                  }`}
                  required
                />
                {ownerErrors.some(error => error.field === 'homeZip') && (
                  <p className="text-red-500 text-xs mt-1">
                    {ownerErrors.find(error => error.field === 'homeZip')?.message}
                  </p>
                )}
              </div>
            </div>

            {/* Additional Owners (shown if primary owner has less than 100% ownership) */}
            {additionalOwners.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Additional Guarantors</h3>
                
                {additionalOwners.map((owner, index) => (
                  <div key={index} className="mb-10 pb-8 border-b border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-md font-medium">
                        {owner.ownershipPercentage === '0' 
                          ? `Guarantor #${index + 1}`
                          : `Additional Owner #${index + 1} (${owner.ownershipPercentage}%)`}
                      </h4>
                      <button
                        type="button"
                        onClick={() => removeAdditionalOwner(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClasses}>
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={owner.firstName}
                          onChange={(e) => {
                            const updatedOwners = [...additionalOwners];
                            updatedOwners[index] = { ...updatedOwners[index], firstName: e.target.value };
                            setAdditionalOwners(updatedOwners);
                          }}
                          placeholder="First Name"
                          className={inputClasses}
                          required
                        />
                      </div>

                      <div>
                        <label className={labelClasses}>
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={owner.lastName}
                          onChange={(e) => {
                            const updatedOwners = [...additionalOwners];
                            updatedOwners[index] = { ...updatedOwners[index], lastName: e.target.value };
                            setAdditionalOwners(updatedOwners);
                          }}
                          placeholder="Last Name"
                          className={inputClasses}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClasses}>
                          Social Security Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={owner.socialSecurityNumber}
                          onChange={(e) => handleSSNChange(e, 'additional', index)}
                          placeholder="123-45-6789"
                          className={inputClasses}
                          required
                        />
                      </div>

                      <div>
                        <label className={labelClasses}>
                          % Ownership <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={owner.ownershipPercentage}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (value === '' || (/^\d+$/.test(value) && parseInt(value) >= 0 && parseInt(value) <= 100)) {
                              const updatedOwners = [...additionalOwners];
                              updatedOwners[index] = { ...updatedOwners[index], ownershipPercentage: value };
                              setAdditionalOwners(updatedOwners);
                            }
                          }}
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        value={owner.dateOfBirth}
                        onChange={(e) => {
                          const updatedOwners = [...additionalOwners];
                          updatedOwners[index] = { ...updatedOwners[index], dateOfBirth: e.target.value };
                          setAdditionalOwners(updatedOwners);
                        }}
                        className={inputClasses}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      <div className="md:col-span-3">
                        <label className={labelClasses}>
                          Home Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={owner.homeAddress}
                          onChange={(e) => {
                            const updatedOwners = [...additionalOwners];
                            updatedOwners[index] = { ...updatedOwners[index], homeAddress: e.target.value };
                            setAdditionalOwners(updatedOwners);
                          }}
                          placeholder="123 Main St"
                          className={inputClasses}
                          required
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className={labelClasses}>
                          Suite #
                        </label>
                        <input
                          type="text"
                          value={owner.homeSuite}
                          onChange={(e) => {
                            const updatedOwners = [...additionalOwners];
                            updatedOwners[index] = { ...updatedOwners[index], homeSuite: e.target.value };
                            setAdditionalOwners(updatedOwners);
                          }}
                          placeholder="Apt 101"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className={labelClasses}>
                          City <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={owner.homeCity}
                          onChange={(e) => {
                            const updatedOwners = [...additionalOwners];
                            updatedOwners[index] = { ...updatedOwners[index], homeCity: e.target.value };
                            setAdditionalOwners(updatedOwners);
                          }}
                          placeholder="City"
                          className={inputClasses}
                          required
                        />
                      </div>

                      <div>
                        <label className={labelClasses}>
                          State <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={owner.homeState}
                            onChange={(e) => {
                              const updatedOwners = [...additionalOwners];
                              updatedOwners[index] = { ...updatedOwners[index], homeState: e.target.value };
                              setAdditionalOwners(updatedOwners);
                            }}
                            className={selectClasses}
                            required
                          >
                            <option value="">Select State</option>
                            {states.map((state) => (
                              <option key={state} value={state}>{state}</option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className={labelClasses}>
                          Zip <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={owner.homeZip}
                          onChange={(e) => {
                            const updatedOwners = [...additionalOwners];
                            updatedOwners[index] = { ...updatedOwners[index], homeZip: e.target.value };
                            setAdditionalOwners(updatedOwners);
                          }}
                          placeholder="12345"
                          className={inputClasses}
                          required
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add Guarantor Button */}
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={addGuarantor}
                className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg border border-gray-300 transition-all duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Additional Guarantor
              </button>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            {/* Business Information Review */}
            <div className="bg-[#F2F2F2] rounded-lg p-5 border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-[#0D3853]">Business Information</h3>
              
              <div className="grid grid-cols-1 gap-y-2">
                <div className="flex">
                  <span className="font-medium w-40 text-[#0D3853] mr-2">Amount Needed:</span>
                  <span className="text-[#0D3853]">{businessData.amountNeeded}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-40 text-[#0D3853] mr-2">Email:</span>
                  <span className="text-[#0D3853]">{businessData.email}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-40 text-[#0D3853] mr-2">Business Name:</span>
                  <span className="text-[#0D3853]">{businessData.businessName}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-40 text-[#0D3853] mr-2">Business Type:</span>
                  <span className="text-[#0D3853]">{businessData.businessType}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-40 text-[#0D3853] mr-2">Business Phone:</span>
                  <span className="text-[#0D3853]">{businessData.businessPhone}</span>
                </div>
                {/* Show Federal Tax ID in business section if it exists */}
                {businessData.federalTaxId && (
                  <div className="flex">
                    <span className="font-medium w-40 text-[#0D3853] mr-2">Federal Tax ID:</span>
                    <span className="text-[#0D3853]">{businessData.federalTaxId}</span>
                  </div>
                )}
                <div className="flex">
                  <span className="font-medium w-40 text-[#0D3853] mr-2">Years in Business:</span>
                  <span className="text-[#0D3853]">{businessData.yearsInBusiness}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-40 text-[#0D3853] mr-2">Annual Revenue:</span>
                  <span className="text-[#0D3853]">{businessData.annualRevenue}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-40 text-[#0D3853] mr-2">Business Address:</span>
                  <span className="text-[#0D3853]">
                    {businessData.businessAddress}
                    {businessData.businessSuite && `, Suite ${businessData.businessSuite}`}
                    {`, ${businessData.city}, ${businessData.state} ${businessData.zip}`}
                  </span>
                </div>
              </div>
            </div>

            {/* Owner Information Review */}
            <div className="bg-[#F2F2F2] rounded-lg p-5 border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-[#0D3853]">Owner Information</h3>
              
              <div className="grid grid-cols-1 gap-y-2">
                <div className="flex">
                  <span className="font-medium w-40 text-[#0D3853] mr-2">Name:</span>
                  <span className="text-[#0D3853]">{ownerData.firstName} {ownerData.lastName}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-40 text-[#0D3853] mr-2">Social Security #:</span>
                  <span className="text-[#0D3853]">{ownerData.socialSecurityNumber}</span>
                </div>
                {/* Removed Federal Tax ID from here as it's now in the business section */}
                <div className="flex">
                  <span className="font-medium w-40 text-[#0D3853] mr-2">Ownership:</span>
                  <span className="text-[#0D3853]">{ownerData.ownershipPercentage}%</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-40 text-[#0D3853] mr-2">Date of Birth:</span>
                  <span className="text-[#0D3853]">{ownerData.dateOfBirth}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-40 text-[#0D3853] mr-2">Home Address:</span>
                  <span className="text-[#0D3853]">
                    {ownerData.homeAddress}
                    {ownerData.homeSuite && `, Suite ${ownerData.homeSuite}`}
                    {`, ${ownerData.homeCity}, ${ownerData.homeState} ${ownerData.homeZip}`}
                  </span>
                </div>
              </div>
            </div>

            {/* Additional Owners Review (if any) */}
            {additionalOwners.length > 0 && additionalOwners.map((owner, index) => (
              <div key={index} className="bg-[#F2F2F2] rounded-lg p-5 border border-gray-200">
                <h3 className="text-lg font-semibold mb-3 text-[#0D3853]">
                  {owner.ownershipPercentage !== '0' 
                    ? `Additional Owner ${index + 1} (${owner.ownershipPercentage}%)` 
                    : `Additional Guarantor ${index + 1}`}
                </h3>
                
                <div className="grid grid-cols-1 gap-y-2">
                  <div className="flex">
                    <span className="font-medium w-40 text-[#0D3853] mr-2">Name:</span>
                    <span className="text-[#0D3853]">{owner.firstName} {owner.lastName}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-40 text-[#0D3853] mr-2">Social Security #:</span>
                    <span className="text-[#0D3853]">{owner.socialSecurityNumber}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-40 text-[#0D3853] mr-2">Ownership:</span>
                    <span className="text-[#0D3853]">{owner.ownershipPercentage}%</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-40 text-[#0D3853] mr-2">Date of Birth:</span>
                    <span className="text-[#0D3853]">{owner.dateOfBirth}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-40 text-[#0D3853] mr-2">Home Address:</span>
                    <span className="text-[#0D3853]">
                      {owner.homeAddress}
                      {owner.homeSuite && `, Suite ${owner.homeSuite}`}
                      {`, ${owner.homeCity}, ${owner.homeState} ${owner.homeZip}`}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Terms and Conditions */}
            <div className="bg-[#F2F2F2] rounded-lg p-5 border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-[#0D3853]">Agreement</h3>
              
              <div className="flex items-start mb-4">
                <div className="flex items-center h-5 mt-1">
                  <input
                    id="agreement"
                    name="agreement"
                    type="checkbox"
                    checked={ownerData.agreeToTerms}
                    onChange={(e) => setOwnerData({...ownerData, agreeToTerms: e.target.checked})}
                    className="h-4 w-4 text-[#0EB5B2] focus:ring-[#0EB5B2] border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreement" className={`font-medium ${!ownerData.agreeToTerms ? 'text-red-700' : 'text-[#0D3853]'}`}>
                    I AGREE <span className="text-red-500">*</span>
                  </label>
                  <p className="text-gray-600 mt-1 text-xs leading-relaxed">
                    I understand that by checking the I AGREE box, I am providing 'written instructions' to Vista Pacific Capital under the Fair Credit Reporting Act authorizing Vista Pacific Capital to obtain such information from my personal credit profile or other information from credit bureaus. I authorize Vista Pacific Capital to obtain such information solely to prequalify me for equipment financing/leases or small business finance/working capital, and I acknowledge that I am the business owner and I am personally liable for the business.
                    <br /><br />
                    By submitting this form, you agree to receive occasional emails and reoccurring automated text messages from Vista Pacific Capital regarding your application. You acknowledge you have read and agree the Terms of Service and Privacy Policy. You can opt-out at any time by sending STOP. Send HELP for more information. Message frequency may vary. Msg & Data rates may apply.
                    <br /><br />
                    <strong>Notice:</strong> The Federal Equal Credit Opportunity Act prohibits creditors from discriminating against credit applicants on the basis of race, color, religion, national origin, sex, marital status, age (provided the applicant has the capacity to enter into a binding contract); because all or part of the applicant's income derives from any public assistance program; or because the applicant has in good faith exercised any right under the Consumer Credit Protection Act.
                  </p>
                </div>
              </div>
              
              {submitStatus.message && (
                <div
                  className={`mb-4 p-3 rounded-lg text-sm ${
                    submitStatus.success
                      ? 'bg-[#0EB5B2]/10 border border-[#0EB5B2] text-[#0D3853]'
                      : 'bg-red-50 border border-red-500 text-red-700'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-4 px-4">
      {/* Add the Toast component here */}
      {showSuccessToast && (
        <Toast
          message="Your application was submitted successfully!"
          type="success"
          isVisible={showSuccessToast}
          onClose={() => setShowSuccessToast(false)}
          duration={5000}
        />
      )}
      
      <div className="w-full bg-white shadow-xl rounded-xl p-4 md:p-6 border border-gray-100">
        <div className="mb-6 text-center">
          <h1 className="text-xl font-bold text-gray-800 mb-1">Small Business Finance Application</h1>
          <p className="text-[#0EB5B2] text-sm font-medium">Complete the application to apply for financing</p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex justify-between">
            <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-[#0EB5B2]' : 'text-gray-400'}`}>
              <div className={`flex items-center justify-center w-6 h-6 rounded-full mb-1 ${
                currentStep >= 1 ? 'bg-[#0EB5B2] text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {businessComplete ? <CheckCircle size={14} /> : 1}
              </div>
              <span className="text-xs font-medium">Business Information</span>
            </div>
            
            <div className="flex-1 flex items-center mx-2">
              <div className={`h-1 w-full rounded-full ${
                currentStep >= 2 ? 'bg-[#0EB5B2]' : 'bg-gray-200'
              }`}></div>
            </div>
            
            <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-[#0EB5B2]' : 'text-gray-400'}`}>
              <div className={`flex items-center justify-center w-6 h-6 rounded-full mb-1 ${
                currentStep >= 2 ? 'bg-[#0EB5B2] text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {ownerComplete ? <CheckCircle size={14} /> : 2}
              </div>
              <span className="text-xs font-medium">Owner Information</span>
            </div>
            
            <div className="flex-1 flex items-center mx-2">
              <div className={`h-1 w-full rounded-full ${
                currentStep >= 3 ? 'bg-[#0EB5B2]' : 'bg-gray-200'
              }`}></div>
            </div>
            
            <div className={`flex flex-col items-center ${currentStep >= 3 ? 'text-[#0EB5B2]' : 'text-gray-400'}`}>
              <div className={`flex items-center justify-center w-6 h-6 rounded-full mb-1 ${
                currentStep >= 3 ? 'bg-[#0EB5B2] text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                3
              </div>
              <span className="text-xs font-medium">Review & Submit</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {renderForm()}
          
          <div className="mt-6 flex justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={goToPreviousStep}
                className={`${buttonClasses} bg-[#F2F2F2] text-[#0D3853] border border-[#B3B3B3] hover:bg-gray-100 px-6`}
              >
                Back
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={goToNextStep}
                className={`${buttonClasses} bg-[#0EB5B2] text-white hover:bg-[#0D3853] hover:shadow-[#0EB5B2]/30 hover:-translate-y-1 px-8`}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading || !ownerData.agreeToTerms}
                className={`
                  ${buttonClasses}
                  ${loading
                    ? 'bg-[#B3B3B3] text-white cursor-not-allowed'
                    : !ownerData.agreeToTerms
                    ? 'bg-[#B3B3B3] text-white cursor-not-allowed'
                    : 'bg-[#0EB5B2] text-white hover:bg-[#0D3853] hover:shadow-[#0EB5B2]/30 hover:-translate-y-1'
                  }
                  px-8
                `}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  'Sign & Submit Application'
                )}
              </button>
            )}
          </div>
        </form>

        <p className="text-xs text-gray-600 text-center mt-4">
          Your information is secure and protected by industry-standard encryption.
        </p>
      </div>
    </div>
  );
}