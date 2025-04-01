import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

// Import team members from our shared form component
interface TeamMember {
  name: string;
  email: string;
  phone: string;
  endpoint: string;
}

// Team members data (matching what we have in the form.tsx)
export const TEAM_MEMBERS = {
  alan: {
    name: "Alan Johnson",
    email: "alanj@vistapacificcapital.com",
    phone: "(949)677-1167",
    endpoint: "/api/submit-quote"
  },
  noah: {
    name: "Noah Miller",
    email: "noahm@vistapacificcapital.com",
    phone: "(949)413-5942",
    endpoint: "/api/submit-quote-noah"
  }
};

interface BusinessFormData {
  amountNeeded: string;
  email: string;
  businessName: string;
  businessPhone: string;
}

interface OwnerFormData {
  firstName: string;
  lastName: string;
  socialSecurityNumber: string;
  ownershipPercentage: string;
}

interface FormError {
  field: string;
  message: string;
}

interface SubmitStatus {
  success?: boolean;
  message?: string;
}

interface HomePageApplicationFormProps {
  teamMember?: TeamMember;
}

export default function HomePageApplicationForm({ teamMember = TEAM_MEMBERS.alan }: HomePageApplicationFormProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormError[]>([]);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({});
  
  const [businessData, setBusinessData] = useState<BusinessFormData>({
    amountNeeded: '',
    email: '',
    businessName: '',
    businessPhone: '',
  });
  
  const [ownerData, setOwnerData] = useState<OwnerFormData>({
    firstName: '',
    lastName: '',
    socialSecurityNumber: '',
    ownershipPercentage: '100',
  });

  // Utility functions
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

  const formatSSN = (value: string): string => {
    const digits = value.replace(/\D/g, '');
    return digits.length > 0
      ? digits.length <= 3
        ? `${digits}`
        : digits.length <= 5
        ? `${digits.slice(0, 3)}-${digits.slice(3)}`
        : `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5, 9)}`
      : '';
  };

  const formatCurrency = (value: string): string => {
    const digits = value.replace(/\D/g, '');
    return digits ? `$${parseInt(digits).toLocaleString()}` : '';
  };

  // Event handlers
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setBusinessData({ ...businessData, businessPhone: formatted });
  };

  const handleSSNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatSSN(e.target.value);
    setOwnerData({ ...ownerData, socialSecurityNumber: formatted });
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);
    setBusinessData({ ...businessData, amountNeeded: formatted });
  };

  // Form validation
  const validateBusinessForm = (): boolean => {
    const newErrors: FormError[] = [];
    
    if (!businessData.amountNeeded) {
      newErrors.push({ field: 'amountNeeded', message: 'Amount needed is required' });
    }
    
    if (!businessData.email) {
      newErrors.push({ field: 'email', message: 'Email is required' });
    } else if (!/\S+@\S+\.\S+/.test(businessData.email)) {
      newErrors.push({ field: 'email', message: 'Email is invalid' });
    }
    
    if (!businessData.businessName) {
      newErrors.push({ field: 'businessName', message: 'Business name is required' });
    }
    
    if (!businessData.businessPhone) {
      newErrors.push({ field: 'businessPhone', message: 'Business phone is required' });
    } else if (businessData.businessPhone.replace(/\D/g, '').length !== 10) {
      newErrors.push({ field: 'businessPhone', message: 'Please enter a valid 10-digit phone number' });
    }
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };
  
  const validateOwnerForm = (): boolean => {
    const newErrors: FormError[] = [];
    
    if (!ownerData.firstName) {
      newErrors.push({ field: 'firstName', message: 'First name is required' });
    }
    
    if (!ownerData.lastName) {
      newErrors.push({ field: 'lastName', message: 'Last name is required' });
    }
    
    if (!ownerData.socialSecurityNumber) {
      newErrors.push({ field: 'socialSecurityNumber', message: 'Social Security Number is required' });
    } else if (ownerData.socialSecurityNumber.replace(/\D/g, '').length !== 9) {
      newErrors.push({ field: 'socialSecurityNumber', message: 'Please enter a valid 9-digit SSN' });
    }
    
    if (!ownerData.ownershipPercentage) {
      newErrors.push({ field: 'ownershipPercentage', message: 'Ownership percentage is required' });
    } else if (parseInt(ownerData.ownershipPercentage) <= 0 || parseInt(ownerData.ownershipPercentage) > 100) {
      newErrors.push({ field: 'ownershipPercentage', message: 'Ownership percentage must be between 1 and 100' });
    }
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };
  
  // Navigation functions
  const goToNextStep = () => {
    if (step === 1 && validateBusinessForm()) {
      setStep(2);
      window.scrollTo(0, 0);
    }
  };
  
  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 2 && validateOwnerForm()) {
      setLoading(true);
      
      try {
        // Determine which finance page to redirect to based on the team member
        const redirectPath = teamMember === TEAM_MEMBERS.noah ? '/noah-finance' : '/alan-finance';
        
        // Save form data to session storage for pre-filling the full form
        sessionStorage.setItem('businessData', JSON.stringify(businessData));
        sessionStorage.setItem('ownerData', JSON.stringify(ownerData));
        
        // Redirect to the appropriate finance page
        setSubmitStatus({
          success: true,
          message: 'Your application has been started! Redirecting to complete the full form...'
        });
        
        // Small delay to show the success message before redirecting
        setTimeout(() => {
          router.push(redirectPath);
        }, 1500);
        
      } catch (error) {
        setSubmitStatus({
          success: false,
          message: 'There was an error starting your application. Please try again.'
        });
      } finally {
        setLoading(false);
      }
    }
  };

  // Styling
  const inputClasses = "w-full px-3 py-1.5 text-sm text-gray-900 border border-gray-300 rounded focus:outline-none focus:border-[#0EB5B2] focus:ring-1 focus:ring-[#0EB5B2] bg-gray-50";
  const buttonClasses = "flex items-center justify-center py-1.5 px-3 text-sm font-medium rounded transition-all duration-200 ease-in-out";
  const errorMessage = "text-red-500 text-xs";

  // Render form
  return (
    <div className="bg-white rounded-lg shadow p-3 max-w-md mx-auto">
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-base font-bold text-[#0D3853]">
            {step === 1 ? 'Business Information' : 'Owner Information'}
          </h2>
          <div className="flex items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium ${step >= 1 ? 'bg-[#0EB5B2]' : 'bg-gray-300'}`}>1</div>
            <div className={`w-8 h-0.5 ${step >= 2 ? 'bg-[#0EB5B2]' : 'bg-gray-300'}`}></div>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium ${step >= 2 ? 'bg-[#0EB5B2]' : 'bg-gray-300'}`}>2</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 ? (
            <div className="space-y-2">
              <div>
                <label htmlFor="amountNeeded" className="block text-xs font-medium text-gray-700">
                  Amount Needed <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="amountNeeded"
                  value={businessData.amountNeeded}
                  onChange={handleCurrencyChange}
                  className={inputClasses}
                  placeholder="$50,000"
                  required
                />
                {errors.find(e => e.field === 'amountNeeded') && (
                  <p className={errorMessage}>{errors.find(e => e.field === 'amountNeeded')?.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="businessName" className="block text-xs font-medium text-gray-700">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  value={businessData.businessName}
                  onChange={(e) => setBusinessData({ ...businessData, businessName: e.target.value })}
                  className={inputClasses}
                  placeholder="Your Business Name LLC"
                  required
                />
                {errors.find(e => e.field === 'businessName') && (
                  <p className={errorMessage}>{errors.find(e => e.field === 'businessName')?.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="businessPhone" className="block text-xs font-medium text-gray-700">
                  Business Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="businessPhone"
                  value={businessData.businessPhone}
                  onChange={handlePhoneChange}
                  className={inputClasses}
                  placeholder="555-123-4567"
                  required
                />
                {errors.find(e => e.field === 'businessPhone') && (
                  <p className={errorMessage}>{errors.find(e => e.field === 'businessPhone')?.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={businessData.email}
                  onChange={(e) => setBusinessData({ ...businessData, email: e.target.value })}
                  className={inputClasses}
                  placeholder="you@business.com"
                  required
                />
                {errors.find(e => e.field === 'email') && (
                  <p className={errorMessage}>{errors.find(e => e.field === 'email')?.message}</p>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={ownerData.firstName}
                    onChange={(e) => setOwnerData({ ...ownerData, firstName: e.target.value })}
                    className={inputClasses}
                    placeholder="First Name"
                    required
                  />
                  {errors.find(e => e.field === 'firstName') && (
                    <p className={errorMessage}>{errors.find(e => e.field === 'firstName')?.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-gray-700">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={ownerData.lastName}
                    onChange={(e) => setOwnerData({ ...ownerData, lastName: e.target.value })}
                    className={inputClasses}
                    placeholder="Last Name"
                    required
                  />
                  {errors.find(e => e.field === 'lastName') && (
                    <p className={errorMessage}>{errors.find(e => e.field === 'lastName')?.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="socialSecurityNumber" className="block text-xs font-medium text-gray-700">
                  Social Security Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="socialSecurityNumber"
                  value={ownerData.socialSecurityNumber}
                  onChange={handleSSNChange}
                  className={inputClasses}
                  placeholder="123-45-6789"
                  required
                />
                {errors.find(e => e.field === 'socialSecurityNumber') && (
                  <p className={errorMessage}>{errors.find(e => e.field === 'socialSecurityNumber')?.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="ownershipPercentage" className="block text-xs font-medium text-gray-700">
                  % Ownership <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="ownershipPercentage"
                  min="1"
                  max="100"
                  value={ownerData.ownershipPercentage}
                  onChange={(e) => setOwnerData({ ...ownerData, ownershipPercentage: e.target.value })}
                  className={inputClasses}
                  placeholder="100"
                  required
                />
                {errors.find(e => e.field === 'ownershipPercentage') && (
                  <p className={errorMessage}>{errors.find(e => e.field === 'ownershipPercentage')?.message}</p>
                )}
              </div>
            </div>
          )}

          {submitStatus.message && (
            <div className={`mt-2 p-2 rounded text-xs ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              {submitStatus.message}
            </div>
          )}

          <div className="flex justify-between mt-3">
            {step === 1 ? (
              <div></div>
            ) : (
              <button
                type="button"
                onClick={goToPreviousStep}
                className={`${buttonClasses} border border-[#0EB5B2] text-[#0EB5B2] hover:bg-[#0EB5B2]/10 px-4`}
              >
                Back
              </button>
            )}

            {step === 1 ? (
              <button
                type="button"
                onClick={goToNextStep}
                className={`${buttonClasses} bg-[#0EB5B2] text-white hover:bg-[#0D3853] px-4`}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className={`
                  ${buttonClasses}
                  ${loading
                    ? 'bg-[#B3B3B3] text-white cursor-not-allowed'
                    : 'bg-[#0EB5B2] text-white hover:bg-[#0D3853]'
                  }
                  px-4
                `}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  'Get Approved'
                )}
              </button>
            )}
          </div>
        </form>
      </div>

      <p className="text-xxs text-gray-600 text-center">
        Your information is secure and protected.
      </p>
    </div>
  );
} 