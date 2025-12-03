
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
  // PC
  { id: 'cs2', title: 'Counter Strike 2', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg' },
  { id: 'dota2', title: 'Dota 2', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/0/08/Dota_2_official_art.jpg' },
  { id: 'pubg', title: 'PUBG', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Pubg_mobile_game_logo.jpg' },
  { id: 'apex', title: 'Apex Legends', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg' },
  { id: 'valorant', title: 'Valorant', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Valorant_cover_art.jpg/220px-Valorant_cover_art.jpg' },
  { id: 'fortnite', title: 'Fortnite', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Fortnite_Box_Art.jpg' },
  { id: 'wot', title: 'World of Tanks', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/8/87/World_of_Tanks_logo.svg' },
  { id: 'lol', title: 'League of Legends', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/c/c2/League_of_Legends_logo.png' },
  { id: 'warface', title: 'Warface', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/9/90/Warface_box_artwork.png' },
  { id: 'gta5', title: 'Grand Theft Auto V', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png' },
  { id: 'rdr2', title: 'Red Dead Redemption 2', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg' },
  { id: 'cyberpunk', title: 'Cyberpunk 2077', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg' },
  { id: 'minecraft', title: 'Minecraft', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png' },
  { id: 'roblox', title: 'Roblox', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Roblox_Logo_2022.jpg' },
  { id: 'genshin', title: 'Genshin Impact', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Genshin_Impact_cover.jpg' },
  { id: 'l4d2', title: 'Left 4 Dead 2', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Left_4_Dead_2_Cover.jpg' },
  { id: 'rust', title: 'Rust', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/7/77/Rust_Videogame_Cover.jpg' },
  { id: 'phasmophobia', title: 'Phasmophobia', category: 'pc', image: 'https://upload.wikimedia.org/wikipedia/en/7/76/Phasmophobia_cover_art.jpg' },

  // Console
  { id: 'fc25', title: 'FC 25', category: 'console', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/EA_Sports_FC_25_cover_art.jpg/220px-EA_Sports_FC_25_cover_art.jpg' },
  { id: 'ufc5', title: 'UFC 5', category: 'console', image: 'https://upload.wikimedia.org/wikipedia/en/2/29/EA_Sports_UFC_5_cover_art.jpg' },
  { id: 'mk1', title: 'Mortal Kombat 1', category: 'console', image: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Mortal_Kombat_1_Key_Art.jpeg' },
  { id: 'nhl25', title: 'NHL 25', category: 'console', image: 'https://upload.wikimedia.org/wikipedia/en/7/71/NHL_24_cover_art.jpg' },
  { id: 'nba2k25', title: 'NBA 2K25', category: 'console', image: 'https://upload.wikimedia.org/wikipedia/en/4/4c/NBA_2K24_cover_art.jpg' },
  { id: 'forza5', title: 'Forza Horizon 5', category: 'console', image: 'https://upload.wikimedia.org/wikipedia/en/8/86/Forza_Horizon_5_cover_art.jpg' }
];

export const SOCIAL_LINKS = {
  instagram: "#",
  telegram: "#",
  vk: "#"
};
