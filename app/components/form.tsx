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

interface QuickQuoteFormProps {
  title?: string;
}

const QuickQuoteForm = ({ title = "Get Your Rate" }: QuickQuoteFormProps) => {
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
      const response = await fetch('/api/submit-quote', {
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

  const inputClasses = `
    w-full px-3 py-2 rounded-lg
    border border-gray-300
    bg-white text-gray-900 placeholder-gray-500
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    hover:bg-gray-50 transition-all duration-200
    text-base leading-relaxed
  `;

  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="w-full bg-white shadow-lg rounded-xl p-4 md:p-6">
      <div className="mb-4 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-1">{title}</h2>
        <p className="text-blue-600 text-sm font-medium">Free quote • No obligations • 2 minutes</p>
      </div>

      {submitStatus.message && (
        <div
          className={`mb-4 p-3 rounded-lg ${
            submitStatus.success
              ? 'bg-green-100 border border-green-500 text-green-700'
              : 'bg-red-100 border border-red-500 text-red-700'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <div>
            <label className={labelClasses}>
              Equipment Cost
            </label>
            <input
              type="text"
              value={formData.equipmentCost}
              onChange={handleCostChange}
              onFocus={() => setFocused('cost')}
              onBlur={() => setFocused('')}
              placeholder="Estimated Cost"
              className={`${inputClasses} ${focused === 'cost' ? 'ring-2 ring-blue-500' : ''}`}
              required
            />
          </div>

          <div>
            <label className={labelClasses}>
              Business Type
            </label>
            <input
              type="text"
              value={formData.businessType}
              onChange={(e) => setFormData({...formData, businessType: e.target.value})}
              onFocus={() => setFocused('business')}
              onBlur={() => setFocused('')}
              placeholder="Type of Business"
              className={`${inputClasses} ${focused === 'business' ? 'ring-2 ring-blue-500' : ''}`}
              required
            />
          </div>

          <div>
            <label className={labelClasses}>
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused('')}
              placeholder="Full Name"
              className={`${inputClasses} ${focused === 'name' ? 'ring-2 ring-blue-500' : ''}`}
              required
            />
          </div>

          <div>
            <label className={labelClasses}>
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused('')}
              placeholder="Email Address"
              className={`${inputClasses} ${focused === 'email' ? 'ring-2 ring-blue-500' : ''}`}
              required
            />
          </div>

          <div>
            <label className={labelClasses}>
              Phone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              onFocus={() => setFocused('phone')}
              onBlur={() => setFocused('')}
              placeholder="(555) 555-5555"
              className={`${inputClasses} ${focused === 'phone' ? 'ring-2 ring-blue-500' : ''}`}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`
            w-full px-4 py-3 rounded-xl font-semibold text-base
            ${loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#FF6B35] hover:bg-[#ff825c] hover:-translate-y-1'
            }
            text-white shadow-lg hover:shadow-[#FF6B35]/20
            transform transition-all duration-300
            flex items-center justify-center space-x-2
          `}
        >
          {loading ? 'Sending...' : 'Get Your Quote Now'}
        </button>

        <p className="text-xs text-gray-600 text-center">
          Your information is secure and will never be shared. By submitting,
          you agree to our Privacy Policy and Terms of Service.
        </p>
      </form>
    </div>
  );
};

export default QuickQuoteForm;