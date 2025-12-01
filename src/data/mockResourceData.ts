export interface ResourceData {
  id: string;
  type: 'water' | 'food' | 'medical' | 'shelter' | 'power' | 'transport';
  name: string;
  available: number;
  allocated: number;
  required: number;
  unit: string;
  location: string;
  coordinates: [number, number];
  priority: 'high' | 'medium' | 'low';
  lastUpdated: string;
}

export const mockResourceData: ResourceData[] = [
  {
    id: '1',
    type: 'water',
    name: 'Bottled Water',
    available: 25000,
    allocated: 15000,
    required: 50000,
    unit: 'bottles',
    location: 'New Delhi',
    coordinates: [28.6139, 77.2090],
    priority: 'high',
    lastUpdated: '10 minutes ago'
  },
  {
    id: '2',
    type: 'food',
    name: 'Ration Packets',
    available: 8500,
    allocated: 5200,
    required: 10000,
    unit: 'packages',
    location: 'New Delhi',
    coordinates: [28.6139, 77.2090],
    priority: 'medium',
    lastUpdated: '15 minutes ago'
  },
  {
    id: '3',
    type: 'medical',
    name: 'First Aid Kits',
    available: 1200,
    allocated: 950,
    required: 2000,
    unit: 'kits',
    location: 'New Delhi',
    coordinates: [28.6139, 77.2090],
    priority: 'high',
    lastUpdated: '20 minutes ago'
  },
  {
    id: '7',
    type: 'water',
    name: 'Chlorine Tablets',
    available: 15000,
    allocated: 8000,
    required: 20000,
    unit: 'tablets',
    location: 'Mumbai, MH',
    coordinates: [19.0760, 72.8777],
    priority: 'medium',
    lastUpdated: '40 minutes ago'
  },
  {
    id: '8',
    type: 'food',
    name: 'Canned/Dry Food',
    available: 12000,
    allocated: 9800,
    required: 15000,
    unit: 'cans',
    location: 'Mumbai, MH',
    coordinates: [19.0760, 72.8777],
    priority: 'medium',
    lastUpdated: '45 minutes ago'
  },
  {
    id: '12',
    type: 'transport',
    name: 'NDRF Rescue Boats',
    available: 25,
    allocated: 22,
    required: 40,
    unit: 'boats',
    location: 'Mumbai, MH',
    coordinates: [19.0760, 72.8777],
    priority: 'high',
    lastUpdated: '1.1 hours ago'
  },
  {
    id: '13',
    type: 'water',
    name: 'Water Tankers',
    available: 15,
    allocated: 12,
    required: 20,
    unit: 'tankers',
    location: 'Guwahati, Assam',
    coordinates: [26.1445, 91.7362],
    priority: 'high',
    lastUpdated: '1.2 hours ago'
  },
  {
    id: '14',
    type: 'food',
    name: 'Baby Formula',
    available: 1800,
    allocated: 1500,
    required: 2500,
    unit: 'containers',
    location: 'Guwahati, Assam',
    coordinates: [26.1445, 91.7362],
    priority: 'high',
    lastUpdated: '1.3 hours ago'
  },
  {
    id: '15',
    type: 'medical',
    name: 'Mobile Health Vans',
    available: 5,
    allocated: 4,
    required: 8,
    unit: 'vans',
    location: 'Guwahati, Assam',
    coordinates: [26.1445, 91.7362],
    priority: 'high',
    lastUpdated: '1.4 hours ago'
  }
];

export const resourceAllocationByRegion = [
  { region: 'New Delhi', allocated: 45, required: 72 },
  { region: 'Mumbai, MH', allocated: 38, required: 58 },
  { region: 'Guwahati, Assam', allocated: 30, required: 45 },
  { region: 'Chennai, TN', allocated: 25, required: 30 },
  { region: 'Lucknow, UP', allocated: 20, required: 22 },
  { region: 'Amritsar, Punjab', allocated: 15, required: 18 }
];