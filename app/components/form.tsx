import { useState } from 'react';

interface FormData {
  equipmentType: string;
  equipmentCost: string;
  businessType: string;
  timeInBusiness: string;
  creditScore: string;
  name: string;
  email: string;
  phone: string;
}

interface SubmitStatus {
  success?: boolean;
  message?: string;
}

interface TeamMember {
  name: string;
  email: string;
  phone: string;
  endpoint: string;
}

interface QuickQuoteFormProps {
  title?: string;
  teamMember?: TeamMember;
}

// Default team members
const TEAM_MEMBERS = {
  alan: {
    name: "Alan Johnson",
    email: "alanj@vistapacificcapital.com",
    phone: "(714)500-7017",
    endpoint: "/api/submit-quote"
  },
};

const QuickQuoteForm = ({ 
  title = "Apply NOW", 
  teamMember = TEAM_MEMBERS.alan 
}: QuickQuoteFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    equipmentType: '',
    equipmentCost: '',
    businessType: '',
    timeInBusiness: '',
    creditScore: '',
    name: '',
    email: '',
    phone: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({});
  const [focused, setFocused] = useState<string>('');

  const validateForm = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid email address.'
      });
      return false;
    }

    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid phone number.'
      });
      return false;
    }

    const cost = parseFloat(formData.equipmentCost.replace(/[^0-9.]/g, ''));
    if (isNaN(cost) || cost <= 0) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid equipment cost.'
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSubmitStatus({});

    try {
      const response = await fetch(teamMember.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          success: true,
          message: 'Thank you! Check your email for confirmation.',
        });
        setFormData({
          equipmentType: '',
          equipmentCost: '',
          businessType: '',
          timeInBusiness: '',
          creditScore: '',
          name: '',
          email: '',
          phone: ''
        });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your request. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const formatPhoneNumber = (value: string) => {
    const phone = value.replace(/\D/g, '');
    if (phone.length < 4) return phone;
    if (phone.length < 7) return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formattedPhone });
  };

  const formatCurrency = (value: string) => {
    const number = value.replace(/[^0-9.]/g, '');
    if (number === '') return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Number(number));
  };

  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCost = formatCurrency(e.target.value);
    setFormData({ ...formData, equipmentCost: formattedCost });
  };

  // Industry options based on your navigation menu
  const industryOptions = [
    { value: "Construction", label: "Construction Equipment" },
    { value: "Medical", label: "Medical Equipment" },
    { value: "Restaurant", label: "Restaurant Equipment" },
    { value: "Used", label: "Used Equipment" },
    { value: "Brewery", label: "Brewery Equipment" },
    { value: "Crane", label: "Crane Financing" },
    { value: "Dental", label: "Dental Equipment" },
    { value: "Excavator", label: "Excavator Financing" },
    { value: "DumpTruck", label: "Dump Truck Financing" },
    { value: "BoxTruck", label: "Box Truck Financing" },
    { value: "CNC", label: "CNC Machine Financing" },
    { value: "Other", label: "Other Equipment" }
  ];

  const inputClasses = `
    w-full px-3 py-2.5 rounded-lg
    border border-gray-300
    bg-white text-gray-900 placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    hover:bg-gray-50 transition-all duration-200
    text-sm leading-tight
    shadow-sm
  `;

  const labelClasses = "block text-xs font-medium text-gray-700 mb-1";

  return (
    <div className="w-full bg-white shadow-xl rounded-xl p-5 md:p-6 border border-gray-100">
      <div className="mb-4 text-center">
        <h2 className="text-xl font-bold text-indigo-dye mb-1.5">{title}</h2>
        <p className="text-light-sea-green text-xs font-medium">Free quote • No obligations • 2 minutes</p>
      </div>

      {submitStatus.message && (
        <div
          className={`mb-4 p-2.5 rounded-lg text-sm ${
            submitStatus.success
              ? 'bg-green-50 border border-green-500 text-green-700'
              : 'bg-red-50 border border-red-500 text-red-700'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="equipmentType" className={labelClasses}>
                Equipment Type
              </label>
              <select
                id="equipmentType"
                name="equipmentType"
                value={formData.equipmentType}
                onChange={(e) => setFormData({...formData, equipmentType: e.target.value})}
                onFocus={() => setFocused('equipmentType')}
                onBlur={() => setFocused('')}
                className={`${inputClasses} ${focused === 'equipmentType' ? 'ring-2 ring-blue-500' : ''}`}
              >
                <option value="" disabled>Select type</option>
                {industryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="equipmentCost" className={labelClasses}>
                Equipment Cost
              </label>
              <input
                id="equipmentCost"
                name="equipmentCost"
                type="text"
                value={formData.equipmentCost}
                onChange={handleCostChange}
                onFocus={() => setFocused('equipmentCost')}
                onBlur={() => setFocused('')}
                placeholder="$50,000"
                className={`${inputClasses} ${focused === 'equipmentCost' ? 'ring-2 ring-blue-500' : ''}`}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="businessType" className={labelClasses}>
              Business Type
            </label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={(e) => setFormData({...formData, businessType: e.target.value})}
              onFocus={() => setFocused('businessType')}
              onBlur={() => setFocused('')}
              className={`${inputClasses} ${focused === 'businessType' ? 'ring-2 ring-blue-500' : ''}`}
            >
              <option value="" disabled>Select type</option>
              <option value="Sole Proprietorship">Sole Proprietorship</option>
              <option value="Partnership">Partnership</option>
              <option value="LLC">LLC</option>
              <option value="S-Corporation">S-Corporation</option>
              <option value="C-Corporation">C-Corporation</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="timeInBusiness" className={labelClasses}>
                Time in Business
              </label>
              <select
                id="timeInBusiness"
                name="timeInBusiness"
                value={formData.timeInBusiness}
                onChange={(e) => setFormData({...formData, timeInBusiness: e.target.value})}
                onFocus={() => setFocused('timeInBusiness')}
                onBlur={() => setFocused('')}
                className={`${inputClasses} ${focused === 'timeInBusiness' ? 'ring-2 ring-blue-500' : ''}`}
              >
                <option value="" disabled>Select range</option>
                <option value="0-1">0-1 years</option>
                <option value="1-2">1-2 years</option>
                <option value="2-5">2-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>

            <div>
              <label htmlFor="creditScore" className={labelClasses}>
                Credit Score
              </label>
              <select
                id="creditScore"
                name="creditScore"
                value={formData.creditScore}
                onChange={(e) => setFormData({...formData, creditScore: e.target.value})}
                onFocus={() => setFocused('creditScore')}
                onBlur={() => setFocused('')}
                className={`${inputClasses} ${focused === 'creditScore' ? 'ring-2 ring-blue-500' : ''}`}
              >
                <option value="" disabled>Select range</option>
                <option value="<600">Below 600</option>
                <option value="600-680">600-680</option>
                <option value="680-720">680-720</option>
                <option value="720+">Above 720</option>
              </select>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-200"></div>

        <div className="space-y-3">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused('')}
              placeholder="Alex Johnson"
              className={`${inputClasses} ${focused === 'name' ? 'ring-2 ring-blue-500' : ''}`}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused('')}
              placeholder="you@company.com"
              className={`${inputClasses} ${focused === 'email' ? 'ring-2 ring-blue-500' : ''}`}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              onFocus={() => setFocused('phone')}
              onBlur={() => setFocused('')}
              placeholder="(555) 123-4567"
              className={`${inputClasses} ${focused === 'phone' ? 'ring-2 ring-blue-500' : ''}`}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`
            w-full px-4 py-3 rounded-lg font-semibold text-base
            ${loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] hover:-translate-y-1'
            }
            text-white shadow-lg hover:shadow-orange-500/30
            transform transition-all duration-300
            flex items-center justify-center space-x-2 mt-3
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B35]
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
            'Apply NOW'
          )}
        </button>

        <p className="text-xs text-gray-600 text-center mt-2">
          Your information is secure and will never be shared.
        </p>
      </form>
    </div>
  );
};

export { TEAM_MEMBERS };
export default QuickQuoteForm;