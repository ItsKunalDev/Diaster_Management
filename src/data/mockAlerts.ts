import { Alert, Notification } from '../contexts/AlertContext';

export const getMockAlerts = (): Alert[] => {
  return [
    {
      id: '1',
      type: 'emergency',
      message: 'Flash flood warning in effect for Thane & Mumbai',
      location: 'Mumbai, Maharashtra',
      timestamp: new Date()
    },
    {
      id: '2',
      type: 'warning',
      message: 'Heavy rainfall expected in coastal districts',
      location: 'Chennai, Tamil Nadu',
      timestamp: new Date()
    }
  ];
};

export const getMockNotifications = (): Notification[] => {
  return [
    {
      id: '1',
      type: 'emergency',
      message: 'Red Alert: Heavy rains issued for Mumbai City',
      location: 'Mumbai, MH',
      time: '10 min ago',
      read: false
    },
    {
      id: '2',
      type: 'warning',
      message: 'Cyclone warning signal hoisted at port',
      location: 'Chennai, TN',
      time: '25 min ago',
      read: false
    },
    {
      id: '3',
      type: 'info',
      message: 'Evacuation routes updated for Kaziranga region',
      location: 'Assam',
      time: '1 hour ago',
      read: true
    },
    {
      id: '4',
      type: 'emergency',
      message: 'Heatwave warning: Stay indoors during afternoon',
      location: 'New Delhi',
      time: '2 hours ago',
      read: true
    },
    {
      id: '5',
      type: 'warning',
      message: 'High wind advisory for wheat harvesting areas',
      location: 'Punjab',
      time: '3 hours ago',
      read: true
    }
  ];
};