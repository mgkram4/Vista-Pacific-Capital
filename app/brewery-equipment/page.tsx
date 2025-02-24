import IndustryCard from '../components/IndustryCard';

export default function BreweryEquipmentPage() {
  const pageData = {
    title: "Brewery Equipment Financing",
    description: "Craft your success with state of the art equipment from kegging equipment, to brewhouses. Whether you are looking for new or used equipment we make it easy to keep your focus on crafting excellent brews.",
    features: [
      "Maximum financing $20 million",
      "Flexible terms up to 84 months",
      "New and used equipment options",
      "Quick approval process"
    ],
    equipmentList: [
      "Brewhouses",
      "Fermentation Tanks",
      "Kegging Systems",
      "Bottling Lines",
      "Refrigeration Systems",
      "Storage Tanks",
      "Canning Lines",
      "Mash Tuns",
      "Brew Kettles",
      "Filtration Systems"
    ],
    benefits: [
      "Preserve working capital",
      "Tax advantages available",
      "Upgrade equipment as needed",
      "Flexible payment structures",
      "Quick funding process",
      "Financing from $20,000 and up"
    ]
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <IndustryCard {...pageData} />
    </div>
  );
} 