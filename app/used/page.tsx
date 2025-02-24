// app/used/page.tsx

"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function UsedRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/used-equipment');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Redirecting...</h1>
        <p>Please wait while we redirect you to our used equipment financing page.</p>
      </div>
    </div>
  );
}