'use client';

import dynamic from 'next/dynamic';
import { TEAM_MEMBERS } from '../components/form';

// Dynamically import the PDF form component with no SSR
const FinanceApplicationPage = dynamic(
  () => import('../pdf-form/page'),
  { ssr: false }
);

export default function FinancePage() {
  return (
    <div>
      {/* Always default to Alan's form if accessed via the main /finance URL */}
      <FinanceApplicationPage teamMember={TEAM_MEMBERS.alan} />
    </div>
  );
} 