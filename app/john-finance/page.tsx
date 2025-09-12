'use client';

import { motion } from 'framer-motion';
import FinanceApplication from '../components/FinanceApplication';
import { TEAM_MEMBERS } from '../utils/team-members';

export default function JohnFinancePage() {
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
      <FinanceApplication teamMember={TEAM_MEMBERS.johnMirabal} />
    </motion.div>
  );
}
