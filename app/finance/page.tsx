'use client';

import dynamic from 'next/dynamic';
import { TEAM_MEMBERS } from '../utils/team-members';

// Dynamically import the Finance Application component with no SSR
const FinanceApplication = dynamic(
  () => import('../components/FinanceApplication'),
  { ssr: false }
);

export default function FinancePage() {
  return (
    <div>
      {/* Always default to Alan's form if accessed via the main /finance URL */}
      <FinanceApplication teamMember={TEAM_MEMBERS.alan} />
    </div>
  );
} 