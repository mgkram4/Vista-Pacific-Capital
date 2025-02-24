import IndustryCard from '../components/IndustryCard';

export default function ConstructionEquipmentPage() {
  const pageData = {
    title: "Construction Equipment Financing",
    description: "When it comes to construction projects, having the right equipment can make all the difference. With flexible financing options, from forklifts to bulldozers, our quick approvals and flexible terms ensure you get the equipment you need without breaking your budget.",
    features: [
      "Financing from $20,000 and up",
      "Flexible terms up to 84 months",
      "New and used equipment options",
      "Quick approval process"
    ],
    equipmentList: [
      "Excavators",
      "Bulldozers",
      "Backhoes",
      "Wheel Loaders",
      "Skid Steers",
      "Cranes",
      "Forklifts",
      "Compactors"
    ],
    benefits: [
      "Preserve working capital",
      "Seasonal payment options",
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