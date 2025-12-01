export interface SocialPost {
  id: string;
  username: string;
  handle: string;
  avatar: string;
  content: string;
  timestamp: string;
  location: string;
  coordinates: [number, number];
  urgency: 'urgent' | 'warning' | 'info';
  needType: 'water' | 'food' | 'shelter' | 'medical' | 'rescue' | 'power' | 'other'; 
  likes: number;
  retweets: number;
  verified: boolean;
}

export const mockSocialPosts: SocialPost[] = [
  {
    id: '1',
    username: 'Rahul Verma',
    handle: 'RahulV_Help',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    content: 'URGENT: Need drinking water in Dharavi, Mumbai. Water logging has contaminated local supplies. #MumbaiRains #WaterNeed',
    timestamp: '10 minutes ago',
    location: 'Mumbai, MH',
    coordinates: [19.0760, 72.8777],
    urgency: 'urgent',
    needType: 'water',
    likes: 128,
    retweets: 342,
    verified: true
  },
  {
    id: '2',
    username: 'NDRF HQ',
    handle: 'NDRFIndia',
    avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
    content: 'Rescue teams deployed in flood-hit areas of Assam. Helpline number: 1078. Stay safe. #AssamFloods #NDRF',
    timestamp: '15 minutes ago',
    location: 'Guwahati, Assam',
    coordinates: [26.1445, 91.7362],
    urgency: 'urgent',
    needType: 'rescue',
    likes: 589,
    retweets: 1215,
    verified: true
  },
  {
    id: '3',
    username: 'Priya Iyer',
    handle: 'ChennaiVolunteer',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    content: 'Shelter open at Loyola College, Chennai for those affected by the cyclone. Food available. #ChennaiRains #Shelter',
    timestamp: '25 minutes ago',
    location: 'Chennai, TN',
    coordinates: [13.0827, 80.2707],
    urgency: 'info',
    needType: 'shelter',
    likes: 232,
    retweets: 540,
    verified: true
  },
  {
    id: '4',
    username: 'Amit Singh',
    handle: 'AmitS',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'Heatstroke patients increasing in LNJP Hospital. Need more ORS and IV fluids immediately. #DelhiHeatwave #Medical',
    timestamp: '32 minutes ago',
    location: 'New Delhi',
    coordinates: [28.6139, 77.2090],
    urgency: 'urgent',
    needType: 'medical',
    likes: 342,
    retweets: 687,
    verified: false
  },
  {
    id: '5',
    username: 'UP Government',
    handle: 'UPGovt',
    avatar: 'https://randomuser.me/api/portraits/lego/2.jpg',
    content: 'Food distribution centers now open in Lucknow at: Charbagh Station and Gomti Nagar Community Hall. #UPRelief',
    timestamp: '45 minutes ago',
    location: 'Lucknow, UP',
    coordinates: [26.8467, 80.9462],
    urgency: 'info',
    needType: 'food',
    likes: 198,
    retweets: 421,
    verified: true
  },
  {
    id: '6',
    username: 'Gurpreet Kaur',
    handle: 'GuriK',
    avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    content: 'WARNING: Heavy dust storm crossing Amritsar. Visibility zero on highway. Drivers please stop! #PunjabWeather #Safety',
    timestamp: '1 hour ago',
    location: 'Amritsar, Punjab',
    coordinates: [31.6340, 74.8723],
    urgency: 'warning',
    needType: 'other',
    likes: 511,
    retweets: 1029,
    verified: false
  },
  {
    id: '7',
    username: 'BMC Disaster Mgmt',
    handle: 'BMC_Mumbai',
    avatar: 'https://randomuser.me/api/portraits/lego/3.jpg',
    content: 'High tide warning at 2:00 PM. Avoid Marine Drive and Juhu Beach. #MumbaiMonsoon',
    timestamp: '1.5 hours ago',
    location: 'Mumbai, MH',
    coordinates: [19.0760, 72.8777],
    urgency: 'warning',
    needType: 'other',
    likes: 621,
    retweets: 845,
    verified: true
  },
  {
    id: '8',
    username: 'Dr. Anjali Das',
    handle: 'DrAnjali',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    content: 'Medical camp set up in Silchar for flood victims. We need general medicines and bandages. #AssamHelp',
    timestamp: '1.8 hours ago',
    location: 'Silchar, Assam',
    coordinates: [24.8333, 92.7789],
    urgency: 'urgent',
    needType: 'medical',
    likes: 378,
    retweets: 904,
    verified: true
  },
  {
    id: '9',
    username: 'Delhi Traffic Police',
    handle: 'dtptraffic',
    avatar: 'https://randomuser.me/api/portraits/lego/4.jpg',
    content: 'Traffic Alert: Water logging at Minto Bridge. Please use alternate routes. #DelhiTraffic',
    timestamp: '2 hours ago',
    location: 'New Delhi',
    coordinates: [28.6139, 77.2090],
    urgency: 'warning',
    needType: 'other',
    likes: 210,
    retweets: 589,
    verified: true
  },
  {
    id: '10',
    username: 'Chennai Corp',
    handle: 'chennaicorp',
    avatar: 'https://randomuser.me/api/portraits/lego/5.jpg',
    content: 'Community Kitchens active in Velachery and Adyar. Free food for all affected by rain. #ChennaiHelp',
    timestamp: '2.5 hours ago',
    location: 'Chennai, TN',
    coordinates: [13.0827, 80.2707],
    urgency: 'info',
    needType: 'food',
    likes: 412,
    retweets: 735,
    verified: true
  },
  {
    id: '11',
    username: 'Vikram Singh',
    handle: 'VikramS',
    avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    content: 'URGENT: Stuck in car near Noida Sector 18 underpass. Water level rising fast! #Noida #Rescue',
    timestamp: '3 hours ago',
    location: 'Noida, UP',
    coordinates: [28.5355, 77.3910],
    urgency: 'urgent',
    needType: 'rescue',
    likes: 523,
    retweets: 1156,
    verified: false
  },
  {
    id: '12',
    username: 'Punjab Kesari',
    handle: 'PunjabKesari',
    avatar: 'https://randomuser.me/api/portraits/lego/6.jpg',
    content: 'Power lines down in Ludhiana industrial area due to storm. PSPCL working on restoration. #Ludhiana',
    timestamp: '3.5 hours ago',
    location: 'Ludhiana, Punjab',
    coordinates: [30.9010, 75.8573],
    urgency: 'info',
    needType: 'power',
    likes: 187,
    retweets: 241,
    verified: true
  },
  {
    id: '13',
    username: 'Sneha Patil',
    handle: 'SnehaP',
    avatar: 'https://randomuser.me/api/portraits/women/58.jpg',
    content: 'Pune river bridge closed due to overflow. Please stay safe Punekars! #PuneRains',
    timestamp: '4 hours ago',
    location: 'Pune, Maharashtra',
    coordinates: [18.5204, 73.8567],
    urgency: 'warning',
    needType: 'other',
    likes: 894,
    retweets: 2156,
    verified: false
  },
  {
    id: '14',
    username: 'Indian Red Cross',
    handle: 'IndianRedCross',
    avatar: 'https://randomuser.me/api/portraits/lego/7.jpg',
    content: 'Blood donation drive for accident victims in Kanpur. Please visit Civil Hospital. #Kanpur #DonateBlood',
    timestamp: '4.5 hours ago',
    location: 'Kanpur, UP',
    coordinates: [26.4499, 80.3319],
    urgency: 'info',
    needType: 'medical',
    likes: 321,
    retweets: 578,
    verified: true
  },
  {
    id: '15',
    username: 'Ravi Kumar',
    handle: 'RaviK',
    avatar: 'https://randomuser.me/api/portraits/men/79.jpg',
    content: 'URGENT: Need milk and biscuits for kids at relief camp in Kaziranga. #AssamFloods',
    timestamp: '5 hours ago',
    location: 'Kaziranga, Assam',
    coordinates: [26.5775, 93.1711],
    urgency: 'urgent',
    needType: 'food',
    likes: 267,
    retweets: 894,
    verified: false
  }
];