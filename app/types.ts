interface Equipment {
    name: string;
    description?: string;
  }
  
  interface Benefit {
    title: string;
    description: string;
  }
  
  interface FinancingType {
    title: string;
    slug: string;
    description: string;
    icon: React.ElementType;
    image: string;
    equipment: Equipment[];
    benefits: Benefit[];
    minAmount?: number;
    maxAmount?: number;
  }
  
  interface Stats {
    label: string;
    value: string;
    suffix?: string;
  }