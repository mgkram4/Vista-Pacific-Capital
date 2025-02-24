import IndustryCard from '../components/IndustryCard';

export default function UsedEquipmentPage() {
  const pageData = {
    title: "Used Equipment Financing",
    description: "For a more affordable and economical route, used equipment may be the right direction for you. With excellent quality equipment and machinery, get your company rolling with our quick approvals and tailored terms.",
    features: [
      "Financing from $20,000 and up",
      "Flexible terms up to 84 months",
      "All types of used equipment",
      "Quick approval process"
    ],
    equipmentList: [
      "Construction Equipment",
      "Medical Equipment",
      "Manufacturing Equipment",
      "Transportation Equipment",
      "Industrial Machinery",
      "Restaurant Equipment"
    ],
    benefits: [
      "Lower initial investment",
      "Flexible payment options",
      "Quick approval process",
      "Competitive terms",
      "Expert guidance"
    ]
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <IndustryCard {...pageData} />
    </div>
  );
} 