export interface PricingRow {
  id: string;
  title: string;
  specs: string[];
  prices: {
    hourMorning?: number;
    hourStandard: number;
    packMorning?: number;
    packStandard?: number;
    packNight?: number;
    pack3h?: number; // Specific for TV
  };
  special?: {
    label: string;
    value: string;
    highlight?: boolean;
  };
}

export interface Game {
  id: string;
  title: string;
  image: string;
  category: 'pc' | 'console';
}

export interface SectorData {
  id: string;
  name: string;
  address: string;
  phone: string;
  description: string;
}
