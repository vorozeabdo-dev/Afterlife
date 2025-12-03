
import { PricingRow, SectorData, Game } from './types';

export const SECTORS: Record<string, SectorData> = {
  lenina: {
    id: 'lenina',
    name: 'СЕКТОР ЛЕНИНА',
    address: 'ПРОСПЕКТ ЛЕНИНА, 112',
    phone: '+7 993 536-96-85',
    description: 'PC / VIP / BOOTCAMP / XBOX'
  },
  demonstratsii: {
    id: 'demonstratsii',
    name: 'СЕКТОР ДЕМОНСТРАЦИИ',
    address: 'ДЕМОНСТРАЦИИ, 27К1',
    phone: '+7 995 293-31-65',
    description: 'STANDARD / VIP / BOOTCAMP / SOLO / XBOX'
  }
};

export const SECTOR_PRICING: Record<string, PricingRow[]> = {
  lenina: [
    {
      id: 'pc_lenina',
      title: 'PC',
      specs: [
        'i5-11400F / 16GB RAM', 
        'RTX 3060 12GB', 
        '24" 144Hz IPS',
        'SteelSeries Rival 3',
        'ASUS TUF H3',
        'Dark Project KD87A',
        'Cougar Armor One'
      ],
      prices: {
        hourMorning: 100,
        hourStandard: 120,
        packMorning: 300,
        packStandard: 450,
        packNight: 550
      },
      special: {
        label: 'НЕСГОРАЕМЫЙ ПАКЕТ',
        value: '30 ЧАСОВ [PC] 2950 РУБ',
        highlight: true
      }
    },
    {
      id: 'bootcamp_lenina',
      title: 'BOOT CAMP',
      specs: [
        'Ryzen 7-5800X / 16GB', 
        'RTX 3080 10GB', 
        '24" 360Hz IPS',
        'SteelSeries Rival 5',
        'SteelSeries Arctis 5',
        'Dark Project KD87A',
        'Cougar Armor One'
      ],
      prices: {
        hourMorning: 130,
        hourStandard: 150,
        packMorning: 400,
        packStandard: 550,
        packNight: 650
      },
      special: {
        label: 'НЕСГОРАЕМЫЙ ПАКЕТ',
        value: '30 ЧАСОВ [BC] 2950 РУБ',
        highlight: true
      }
    },
    {
      id: 'vip_lenina',
      title: 'VIP',
      specs: [
        'Ryzen 7-7700 / 32GB', 
        'RTX 4060Ti 16GB', 
        '24" 240Hz IPS',
        'SteelSeries Rival 3',
        'SteelSeries Arctis 5',
        'Dark Project KD87A',
        'Cougar Armor One'
      ],
      prices: {
        hourMorning: 140,
        hourStandard: 180,
        packMorning: 450,
        packStandard: 650,
        packNight: 750
      },
      special: {
        label: 'БОНУС ПОПОЛНЕНИЯ',
        value: '500+100 / 900+200',
        highlight: true
      }
    },
    {
      id: 'tv_lenina',
      title: 'TV',
      specs: ['TV 65" 4K', 'XBOX SERIES X'],
      prices: {
        hourStandard: 300,
        pack3h: 700,
        packNight: 1200
      }
    }
  ],
  demonstratsii: [
    {
      id: 'pc_demo',
      title: 'PC',
      specs: [
        'i5-12400F / 32GB RAM', 
        'RTX 4070Ti 12GB', 
        '24" 144Hz',
        'SteelSeries Rival 3',
        'ASUS TUF H3',
        'Dark Project KD87A',
        'Cougar Armor One'
      ],
      prices: {
        hourMorning: 100,
        hourStandard: 120,
        packMorning: 300,
        packStandard: 450,
        packNight: 550
      },
      special: {
        label: 'НЕСГОРАЕМЫЙ ПАКЕТ',
        value: '30 ЧАСОВ [PC] 2950 РУБ',
        highlight: true
      }
    },
    {
      id: 'vip_demo',
      title: 'VIP',
      specs: [
        'i5-12400F / 32GB RAM', 
        'RTX 4070Ti 12GB', 
        '24" 240Hz',
        'SteelSeries Rival 5',
        'SteelSeries Arctis 5',
        'Dark Project KD87A',
        'Cougar Armor One'
      ],
      prices: {
        hourMorning: 130,
        hourStandard: 150,
        packMorning: 400,
        packStandard: 550,
        packNight: 650
      },
      special: {
        label: 'НЕСГОРАЕМЫЙ ПАКЕТ',
        value: '30 ЧАСОВ [VIP] 2950 РУБ',
        highlight: true
      }
    },
    {
      id: 'bootcamp_demo',
      title: 'BOOTCAMP',
      specs: [
        'i7-12700F / 32GB RAM', 
        'RTX 4070Ti 12GB', 
        '24" 360Hz',
        'SteelSeries Rival 5',
        'SteelSeries Arctis 5',
        'Dark Project KD87A',
        'Cougar Armor One'
      ],
      prices: {
        hourMorning: 140,
        hourStandard: 180,
        packMorning: 450,
        packStandard: 650,
        packNight: 750
      },
      special: {
        label: 'БОНУС ПОПОЛНЕНИЯ',
        value: '500+100 / 900+200',
        highlight: true
      }
    },
    {
      id: 'solo_room_demo',
      title: 'SOLO ROOM',
      specs: [
        'i7-12700F / 32GB RAM', 
        'RTX 4070Ti 12GB', 
        '24" 500Hz',
        'SteelSeries Rival 5',
        'SteelSeries Arctis 5',
        'Dark Project KD87A',
        'Cougar Armor One'
      ],
      prices: {
        hourMorning: 180,
        hourStandard: 230,
        packMorning: 550,
        packStandard: 750,
        packNight: 850
      },
      special: {
        label: 'ПОЛУЧИ 30 МИНУТ',
        value: 'ЗА ОТЗЫВ!',
        highlight: true
      }
    },
    {
      id: 'tv_demo',
      title: 'TV',
      specs: [
        'TV 65" 4K', 
        'XBOX SERIES X'
      ],
      prices: {
        hourStandard: 300,
        pack3h: 700,
        packNight: 1200
      }
    }
  ]
};

export const GAMES_LIBRARY: Game[] = [
  // --- PC GAMES ---
  { id: '1', title: "Counter-Strike 2", category: 'pc', image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/library_600x900.jpg" },
  { id: '2', title: "Dota 2", category: 'pc', image: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/library_600x900.jpg" },
  { id: '3', title: "Valorant", category: 'pc', image: "https://static-cdn.jtvnw.net/ttv-boxart/516575-600x800.jpg" },
  { id: '4', title: "Apex Legends", category: 'pc', image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/library_600x900.jpg" },
  { id: '5', title: "PUBG: BATTLEGROUNDS", category: 'pc', image: "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/library_600x900.jpg" },
  { id: '6', title: "Fortnite", category: 'pc', image: "https://static-cdn.jtvnw.net/ttv-boxart/33214-600x800.jpg" },
  { id: '7', title: "World of Tanks", category: 'pc', image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1407200/library_600x900.jpg" },
  { id: '8', title: "League of Legends", category: 'pc', image: "https://static-cdn.jtvnw.net/ttv-boxart/21779-600x800.jpg" },
  { id: '9', title: "Warface", category: 'pc', image: "https://cdn.cloudflare.steamstatic.com/steam/apps/291480/library_600x900.jpg" },
  { id: '10', title: "Genshin Impact", category: 'pc', image: "https://static-cdn.jtvnw.net/ttv-boxart/513181-600x800.jpg" },
  { id: '11', title: "Minecraft", category: 'pc', image: "https://static-cdn.jtvnw.net/ttv-boxart/27471-600x800.jpg" },

  // --- CONSOLE GAMES (Hybrid Stable Links) ---
  { id: '12', title: "EA Sports FC 25", category: 'console', image: "https://static-cdn.jtvnw.net/ttv-boxart/1436475816-600x800.jpg" },
  { id: '13', title: "EA Sports FC 24", category: 'console', image: "https://static-cdn.jtvnw.net/ttv-boxart/1186735138-600x800.jpg" },
  { id: '14', title: "FIFA 22", category: 'console', image: "https://static-cdn.jtvnw.net/ttv-boxart/517273-600x800.jpg" },
  
  // UPDATED: Microsoft Store CDN for UFC
  { id: '15', title: "UFC 5", category: 'console', image: "https://store-images.s-microsoft.com/image/apps.43943.14157068063319808.8a655297-380d-4521-88c9-0a68817208d1.1965615d-8311-4470-820d-833446df643c?q=90&w=480&h=720" },
  { id: '16', title: "UFC 4", category: 'console', image: "https://store-images.s-microsoft.com/image/apps.10492.69749462479956485.4a282937-234b-449e-9988-12d46e3e5077.5855734e-0c14-4861-9c02-d961a868f042?q=90&w=480&h=720" },
  
  { id: '17', title: "Mortal Kombat 1", category: 'console', image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1971870/library_600x900.jpg" },
  
  // UPDATED: Microsoft Store CDN for NHL
  { id: '18', title: "NHL 25", category: 'console', image: "https://store-images.s-microsoft.com/image/apps.38139.14378864708781320.6e202534-118d-4b89-a2e6-7913531c360e.4367303d-d12c-462f-8a56-83427771765c?q=90&w=480&h=720" },
  
  { id: '19', title: "NBA 2K25", category: 'console', image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2878980/library_600x900.jpg" },
  { id: '20', title: "Forza Horizon 5", category: 'console', image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/library_600x900.jpg" },
  { id: '21', title: "A Way Out", category: 'console', image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1222700/library_600x900.jpg" },
  { id: '22', title: "It Takes Two", category: 'console', image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/library_600x900.jpg" }
];

export const SOCIAL_LINKS = {
  vk: "https://vk.com/afterlife71"
};
