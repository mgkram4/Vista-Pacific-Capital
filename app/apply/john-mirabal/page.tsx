'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import FinanceApplicationPage from "../../pdf-form/page";

export default function ApplyJohnMirabal() {
  useEffect(() => {
    // Set John's team member data in session storage when the page loads
    const johnMirabal = {
      name: "John Mirabal",
      email: "johnm@vistapacificcapital.com",
      phone: "(714) 551-9955",
      endpoint: "/api/submit-finance-application"
    };
    
    sessionStorage.setItem('teamMember', JSON.stringify(johnMirabal));
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
