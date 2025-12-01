export interface WeatherAlert {
  id: string;
  type: 'hurricane' | 'flood' | 'tornado' | 'wildfire' | 'winter' | 'heatwave' | 'thunderstorm';
  severity: 'extreme' | 'severe' | 'moderate' | 'minor';
  title: string;
  description: string;
  region: string;
  coordinates: [number, number];
  startTime: string;
  endTime: string;
  issuedBy: string;
}

export interface WeatherForecast {
  date: string;
  location: string;
  coordinates: [number, number];
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  precipitation: number;
  disasterRisk: number; // 0-100%
  disasterType: 'hurricane' | 'flood' | 'tornado' | 'wildfire' | 'winter' | null;
  weatherIcon: string;
}

export const mockWeatherAlerts: WeatherAlert[] = [
  {
    id: '1',
    type: 'hurricane',
    severity: 'extreme',
    title: 'Cyclone Warning',
    description: 'Severe Cyclonic Storm approaching the coast with wind speeds of 120 km/h. Fishermen advised not to venture into the sea.',
    region: 'Tamil Nadu Coast',
    coordinates: [13.0827, 80.2707], // Chennai
    startTime: '2025-06-10T08:00:00',
    endTime: '2025-06-12T20:00:00',
    issuedBy: 'India Meteorological Department (IMD)'
  },
  {
    id: '2',
    type: 'flood',
    severity: 'severe',
    title: 'Severe Flood Alert',
    description: 'Brahmaputra river levels rising above danger mark. Low-lying areas in Kaziranga and Guwahati at risk.',
    region: 'Assam Region',
    coordinates: [26.1445, 91.7362], // Guwahati
    startTime: '2025-06-10T12:00:00',
    endTime: '2025-06-11T12:00:00',
    issuedBy: 'Central Water Commission'
  },
  {
    id: '3',
    type: 'heatwave',
    severity: 'severe',
    title: 'Severe Heatwave Warning',
    description: 'Temperatures expected to cross 47°C. Loo winds likely. Avoid outdoor exposure during noon.',
    region: 'New Delhi NCR',
    coordinates: [28.6139, 77.2090], // New Delhi
    startTime: '2025-06-10T09:00:00',
    endTime: '2025-06-12T21:00:00',
    issuedBy: 'IMD New Delhi'
  },
  {
    id: '4',
    type: 'thunderstorm',
    severity: 'severe',
    title: 'Heavy Rainfall Alert',
    description: 'Monsoon fury: Continuous heavy rains expected causing waterlogging in suburban areas. Orange alert issued.',
    region: 'Mumbai, Maharashtra',
    coordinates: [19.0760, 72.8777], // Mumbai
    startTime: '2025-06-09T10:00:00',
    endTime: '2025-06-13T20:00:00',
    issuedBy: 'IMD Mumbai'
  },
  {
    id: '5',
    type: 'tornado', // Using for Dust Storm/Andhi
    severity: 'moderate',
    title: 'Dust Storm Warning',
    description: 'High velocity dust storms (Andhi) expected to hit agricultural belts. Visibility may drop below 500m.',
    region: 'Punjab',
    coordinates: [31.6340, 74.8723], // Amritsar
    startTime: '2025-06-10T15:30:00',
    endTime: '2025-06-10T18:30:00',
    issuedBy: 'IMD Chandigarh'
  },
  {
    id: '6',
    type: 'wildfire',
    severity: 'moderate',
    title: 'Forest Fire Alert',
    description: 'Dry vegetation catching fire in localized areas due to extreme heat.',
    region: 'Uttar Pradesh Border',
    coordinates: [26.8467, 80.9462], // Lucknow
    startTime: '2025-06-10T18:00:00',
    endTime: '2025-06-11T18:00:00',
    issuedBy: 'State Forest Department'
  }
];

export const mockWeatherForecasts: WeatherForecast[] = [
  {
    date: '2025-06-10',
    location: 'Chennai, TN',
    coordinates: [13.0827, 80.2707],
    temperature: 34, // Celsius
    feelsLike: 38,
    humidity: 85,
    windSpeed: 65,
    windDirection: 'SE',
    precipitation: 80,
    disasterRisk: 75,
    disasterType: 'hurricane',
    weatherIcon: 'hurricane'
  },
  {
    date: '2025-06-11',
    location: 'Chennai, TN',
    coordinates: [13.0827, 80.2707],
    temperature: 32,
    feelsLike: 36,
    humidity: 90,
    windSpeed: 85,
    windDirection: 'SE',
    precipitation: 95,
    disasterRisk: 90,
    disasterType: 'hurricane',
    weatherIcon: 'hurricane'
  },
  {
    date: '2025-06-10',
    location: 'Guwahati, Assam',
    coordinates: [26.1445, 91.7362],
    temperature: 29,
    feelsLike: 33,
    humidity: 92,
    windSpeed: 15,
    windDirection: 'S',
    precipitation: 90,
    disasterRisk: 70,
    disasterType: 'flood',
    weatherIcon: 'cloud-rain'
  },
  {
    date: '2025-06-10',
    location: 'New Delhi',
    coordinates: [28.6139, 77.2090],
    temperature: 45,
    feelsLike: 48,
    humidity: 30,
    windSpeed: 12,
    windDirection: 'NW',
    precipitation: 0,
    disasterRisk: 65,
    disasterType: null,
    weatherIcon: 'sun'
  },
  {
    date: '2025-06-10',
    location: 'Mumbai, MH',
    coordinates: [19.0760, 72.8777],
    temperature: 28,
    feelsLike: 32,
    humidity: 95,
    windSpeed: 25,
    windDirection: 'SW',
    precipitation: 100,
    disasterRisk: 80,
    disasterType: 'flood',
    weatherIcon: 'cloud-rain'
  }
];