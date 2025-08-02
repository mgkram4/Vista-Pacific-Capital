import IndustryCard from '../components/IndustryCard';

export default function MedicalEquipmentPage() {
  const pageData = {
    title: "Medical Equipment Financing",
    description: "Specialized medical equipment from imaging systems to surgical equipment, for delivering exceptional patient care. Whether you're upgrading existing equipment, expanding your practice, or opening a new facility, our financing options provide you with the resources to meet your needs without compromising your budget.",
    features: [
      "Maximum financing $50 million",
      "Flexible terms up to 84 months",
      "New and used equipment options",
      "Quick approval process"
    ],
    equipmentList: [
      "Imaging Systems",
      "Surgical Equipment",
      "Diagnostic Equipment",
      "Patient Monitoring Systems",
      "Laboratory Equipment",
      "Medical Office Furniture"
    ],
    benefits: [
      "Preserve working capital",
      "Tax advantages available",
      "Upgrade equipment as needed",
      "Flexible payment structures",
      "Quick funding process"
    ]
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <IndustryCard {...pageData} />
    </div>
  );
} 