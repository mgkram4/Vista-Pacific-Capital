'use client';

import HomePageApplicationForm, { TEAM_MEMBERS } from '../components/HomePageApplicationForm';

export default function NoahPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 md:mt-0 mt-20 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Equipment Financing Quote</h1>
          <p className="text-gray-600">Fill out the form below to get your free quote</p>
        </div>
        <HomePageApplicationForm teamMember={TEAM_MEMBERS.noah} />
        <a href="https://dev.vistapacificcapital.com/noah" className="inline-block px-5 py-3 bg-[#0EB5B2] text-white font-bold rounded-md no-underline">Apply Now</a>
      </div>
    </div>
  );
} 