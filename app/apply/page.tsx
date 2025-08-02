'use client';

import { motion } from 'framer-motion';
import FinanceApplicationPage from "../pdf-form/page";

export default function Apply() {
  return (
    <motion.div 
      className="pt-24"
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