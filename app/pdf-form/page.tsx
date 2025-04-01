'use client';

import FinanceApplication from '../components/FinanceApplication';
import { TEAM_MEMBERS } from '../utils/team-members';

export default function FinanceApplicationPage() {
  // Pages in Next.js App Router shouldn't accept props
  // Instead, we render our component with a default value
  return <FinanceApplication teamMember={TEAM_MEMBERS.alan} />;
}