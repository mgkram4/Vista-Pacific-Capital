'use client';

import dynamic from 'next/dynamic';
import { TEAM_MEMBERS } from '../utils/team-members';

// Dynamically import the Finance Application component with no SSR
const FinanceApplication = dynamic(
  () => import('../components/FinanceApplication'),
  { ssr: false }
);

export default function NoahFinancePage() {
  return (
    <div>
      <FinanceApplication teamMember={TEAM_MEMBERS.noah} />
    </div>
  );
} 