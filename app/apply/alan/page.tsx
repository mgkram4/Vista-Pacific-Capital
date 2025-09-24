'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import FinanceApplicationPage from "../../pdf-form/page";

export default function ApplyAlan() {
  useEffect(() => {
    // Set Alan's team member data in session storage when the page loads
    const alan = {
      name: "Alan Johnson",
      email: "alanj@vistapacificcapital.com",
      phone: "(714) 500-7017",
      endpoint: "/api/submit-finance-application"
    };
    
    sessionStorage.setItem('teamMember', JSON.stringify(alan));
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.1
      }}
    >
      <FinanceApplicationPage />
    </motion.div>
  );
}
