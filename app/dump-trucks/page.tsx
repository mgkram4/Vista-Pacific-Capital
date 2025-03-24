import IndustryCard from '../components/IndustryCard';

export default function DumpTrucksPage() {
  const pageData = {
    title: "Dump Truck Financing",
    description: "Get the power to haul more, with financing that works for you. With specialized dump truck financing to fit your needs. whether you are trying to upgrade your equipment or expand your fleet, we can make the process easy without breaking the bank.",
    features: [
      "Financing from $20,000 and up",
      "Flexible terms up to 84 months",
      "New and used equipment options",
      "Quick approval process"
    ],
    equipmentList: [
      "Standard Dump Trucks",
      "Transfer Dump Trucks",
      "Side Dump Trucks",
      "Super Dump Trucks",
      "Bottom Dump Trucks",
      "End Dump Trucks"
    ],
    benefits: [
      "Preserve working capital",
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