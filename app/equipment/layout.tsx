import type { Metadata } from 'next';
import ImagePreloader from './ImagePreloader';


export const metadata: Metadata = {
  title: {
    template: '%s | Vista Pacific Capital',
    default: 'Equipment Financing Solutions | Vista Pacific Capital',
  },
  description: 'Specialized equipment financing solutions from Vista Pacific Capital. Find competitive rates and flexible terms for your industry-specific equipment needs.',
};

export default function EquipmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="equipment-layout">
      {/* Client component to preload images */}
      <ImagePreloader />
      <div className="equipment-content">
        {children}
      </div>
    </div>
  );
}