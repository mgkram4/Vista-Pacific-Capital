'use client';

import { useEffect, useState } from 'react';
import { TEAM_MEMBERS, TeamMember } from '../utils/team-members';

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
  federalTaxId: string;
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

interface FinanceApplicationProps {
  teamMember?: TeamMember;
}

export default function FinanceApplication({ teamMember = TEAM_MEMBERS.alan }: FinanceApplicationProps) {
  // Use the PDF form component directly with the team member pre-set
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set the team member in session storage when component mounts
    if (teamMember) {
      sessionStorage.setItem('teamMember', JSON.stringify(teamMember));
    }
    setMounted(true);
  }, [teamMember]);

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <div className="max-w-4xl mx-auto pb-10 px-4">
        <div className="w-full bg-white shadow-xl rounded-xl p-5 md:p-8 border border-gray-100">
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0EB5B2] mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading application...</p>
          </div>
        </div>
      </div>
    );
  }

  // Redirect to the PDF form which has the full functionality
  if (typeof window !== 'undefined') {
    window.location.href = '/pdf-form';
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto pb-10 px-4">
      <div className="w-full bg-white shadow-xl rounded-xl p-5 md:p-8 border border-gray-100">
        <div className="text-center py-8">
          <p className="text-gray-600">Redirecting to application form...</p>
        </div>
      </div>
    </div>
  );
} 