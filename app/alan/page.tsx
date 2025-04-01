"use client";

import { useRouter } from 'next/navigation';
import HomePageApplicationForm, { TEAM_MEMBERS } from '../components/HomePageApplicationForm';

export default function AlanPage() {
  const router = useRouter();
  
  // Custom submit handler to redirect to the PDF form
  const handleFormSubmit = () => {
    // Store the team member in session storage
    sessionStorage.setItem('teamMember', JSON.stringify(TEAM_MEMBERS.alan));
    router.push('/pdf-form');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Equipment Financing Quote</h1>
          <p className="text-gray-600">Fill out the form below to get your free quote</p>
        </div>
        <HomePageApplicationForm 
          teamMember={TEAM_MEMBERS.alan} 
          onSubmit={handleFormSubmit} 
        />
      </div>
    </div>
  );
} 