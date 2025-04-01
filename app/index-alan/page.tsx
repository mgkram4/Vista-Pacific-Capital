'use client';

import HomePageApplicationForm, { TEAM_MEMBERS } from '../components/HomePageApplicationForm';

export default function AlanHomePage() {
  return (
    <main className="min-h-screen p-4 sm:p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0D3853] mb-2">Vista Pacific Capital</h1>
          <p className="text-gray-600">Fast and simple equipment financing with Alan Johnson</p>
        </div>
        
        <HomePageApplicationForm teamMember={TEAM_MEMBERS.alan} />
        
        <div className="mt-10 text-center text-sm text-gray-500">
          <p>Need to speak with Alan directly? Contact at <a href="mailto:alanj@vistapacificcapital.com" className="text-[#0EB5B2] hover:underline">alanj@vistapacificcapital.com</a> or {TEAM_MEMBERS.alan.phone}</p>
        </div>
      </div>
    </main>
  );
} 