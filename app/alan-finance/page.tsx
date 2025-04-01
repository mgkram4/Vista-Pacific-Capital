'use client';

import dynamic from 'next/dynamic';
import { TEAM_MEMBERS } from '../components/form';

// Dynamically import the PDF form component with no SSR
const FinanceApplicationPage = dynamic(
  () => import('../pdf-form/page'),
  { ssr: false }
);

export default function AlanFinancePage() {
  return (
    <div>
      <FinanceApplicationPage teamMember={TEAM_MEMBERS.alan} />
    </div>
  );
} 