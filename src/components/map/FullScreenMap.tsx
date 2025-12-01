import { 
  MapContainer, 
  TileLayer, 
  CircleMarker, 
  Popup, 
  Tooltip,
  LayerGroup,
  Polygon
} from 'react-leaflet';
import { WeatherAlert } from '../../data/mockWeatherData';
import { SocialPost } from '../../data/mockSocialPosts';
import { ResourceData } from '../../data/mockResourceData';
import { 
  Droplets, 
  Wind, 
  Flame, 
  CloudSnow, 
  Thermometer, 
  CloudLightning,
  MessageSquare,
  Package,
  AlertTriangle
} from 'lucide-react';
import { LatLngExpression } from 'leaflet';

interface FullScreenMapProps {
  weatherAlerts: WeatherAlert[];
  socialPosts: SocialPost[];
  resources: ResourceData[];
  showEvacuationRoutes: boolean;
  showRiskZones: boolean;
}

// Mock evacuation routes (Updated for India)
const evacuationRoutes = [
  {
    id: '1',
    name: 'Mumbai Coastal Evacuation Route',
    path: [
      [19.0760, 72.8777], // Mumbai Center
      [19.1760, 72.9777], // Moving towards Thane (Inland)
      [19.2760, 73.0777],
      [19.3760, 73.1777],
    ] as LatLngExpression[],
  },
  {
    id: '2',
    name: 'Chennai Cyclone Evacuation Route',
    path: [
      [13.0827, 80.2707], // Chennai Center
      [13.0000, 80.1000], // Moving inland towards Kanchipuram
      [12.9000, 80.0000],
      [12.8000, 79.9000],
    ] as LatLngExpression[],
  },
  {
    id: '3',
    name: 'Assam Flood Relief Corridor',
    path: [
      [26.1445, 91.7362], // Guwahati
      [26.0000, 91.8000], // Moving to higher ground
      [25.9000, 91.9000],
      [25.8000, 92.0000], // Towards Shillong hills
    ] as LatLngExpression[],
  },
];

// Mock risk zones (Updated for India)
const riskZones = [
  {
    id: '1',
    name: 'Mumbai Flood Risk Zone',
    path: [
      [19.0760, 72.8777],
      [18.9500, 72.8000], // South Mumbai
      [19.0000, 72.9500],
      [19.2000, 72.8500],
    ] as LatLngExpression[],
    level: 'high',
  },
  {
    id: '2',
    name: 'New Delhi Heatwave/Seismic Zone',
    path: [
      [28.6139, 77.2090],
      [28.7000, 77.1000],
      [28.8000, 77.3000],
      [28.5000, 77.4000],
    ] as LatLngExpression[],
    level: 'moderate',
  },
  {
    id: '3',
    name: 'Chennai Cyclone Impact Zone',
    path: [
      [13.0827, 80.2707],
      [13.2000, 80.3500],
      [12.9000, 80.3000],
      [13.0000, 80.1500],
    ] as LatLngExpression[],
    level: 'extreme',
  },
];

const FullScreenMap = ({ 
  weatherAlerts, 
  socialPosts, 
  resources, 
  showEvacuationRoutes,
  showRiskZones
}: FullScreenMapProps) => {
  
  const getWeatherAlertColor = (severity: string) => {
    switch (severity) {
      case 'extreme':
        return '#ff0000';
      case 'severe':
        return '#ff8800';
      case 'moderate':
        return '#ffcc00';
      case 'minor':
        return '#0066ff';
      default:
        return '#0066ff';
    }
  };
  
  const getSocialPostColor = (urgency: string) => {
    switch (urgency) {
      case 'urgent':
        return '#ff0000';
      case 'warning':
        return '#ffd700';
      case 'info':
        return '#0066ff';
      default:
        return '#0066ff';
    }
  };
  
  const getResourceColor = (type: string) => {
    switch (type) {
      case 'water':
        return '#0066ff';
      case 'food':
        return '#ffd700';
      case 'medical':
        return '#ff0000';
      case 'shelter':
        return '#0073ff';
      case 'power':
        return '#00ff00';
      case 'transport':
        return '#00c3ff';
      default:
        return '#888888';
    }
  };
  
  const getRiskZoneColor = (level: string) => {
    switch (level) {
      case 'extreme':
        return { color: '#ff0000', fillColor: 'rgba(255, 0, 0, 0.3)' };
      case 'high':
        return { color: '#ff8800', fillColor: 'rgba(255, 136, 0, 0.3)' };
      case 'moderate':
        return { color: '#ffd700', fillColor: 'rgba(255, 215, 0, 0.3)' };
      case 'low':
        return { color: '#0066ff', fillColor: 'rgba(0, 102, 255, 0.3)' };
      default:
        return { color: '#0066ff', fillColor: 'rgba(0, 102, 255, 0.3)' };
    }
  };
  
  const getWeatherAlertIcon = (type: string) => {
    switch (type) {
      case 'hurricane':
        return <Wind size={16} className="text-white" />;
      case 'flood':
        return <Droplets size={16} className="text-white" />;
      case 'tornado':
        return <Wind size={16} className="text-white" />;
      case 'wildfire':
        return <Flame size={16} className="text-white" />;
      case 'winter':
        return <CloudSnow size={16} className="text-white" />;
      case 'heatwave':
        return <Thermometer size={16} className="text-white" />;
      case 'thunderstorm':
        return <CloudLightning size={16} className="text-white" />;
      default:
        return <AlertTriangle size={16} className="text-white" />;
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-IN', { // Changed locale to India
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <MapContainer 
      center={[20.5937, 78.9629]} // Center of India
      zoom={5} // Adjusted zoom to fit India
      zoomControl={true}
      dragging={true}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* Weather alerts layer */}
      <LayerGroup>
        {weatherAlerts.map((alert) => (
          <CircleMarker
            key={`weather-${alert.id}`}
            center={[alert.coordinates[0], alert.coordinates[1]]}
            radius={alert.severity === 'extreme' ? 25 : 
                   alert.severity === 'severe' ? 20 : 
                   alert.severity === 'moderate' ? 15 : 10}
            pathOptions={{ 
              fillColor: getWeatherAlertColor(alert.severity),
              color: getWeatherAlertColor(alert.severity),
              fillOpacity: 0.4,
              weight: 2,
            }}
          >
            <Tooltip>
              <div className="font-bold">{alert.title}</div>
              <div>{alert.region}</div>
              <div className="text-xs">{alert.severity.toUpperCase()}</div>
            </Tooltip>
            <Popup>
              <div className="p-2">
                <div className="flex items-center">
                  {getWeatherAlertIcon(alert.type)}
                  <h3 className="font-bold ml-1">{alert.title}</h3>
                </div>
                <p className="text-sm my-2">{alert.description}</p>
                <div className="text-xs">
                  <p><strong>Region:</strong> {alert.region}</p>
                  <p><strong>Severity:</strong> {alert.severity}</p>
                  <p><strong>Time Period:</strong> {formatDate(alert.startTime)} - {formatDate(alert.endTime)}</p>
                  <p><strong>Issued By:</strong> {alert.issuedBy}</p>
                </div>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </LayerGroup>
      
      {/* Social posts layer */}
      <LayerGroup>
        {socialPosts.map((post) => (
          <CircleMarker
            key={`social-${post.id}`}
            center={[post.coordinates[0], post.coordinates[1]]}
            radius={post.urgency === 'urgent' ? 8 : 
                   post.urgency === 'warning' ? 6 : 4}
            pathOptions={{ 
              fillColor: getSocialPostColor(post.urgency),
              color: getSocialPostColor(post.urgency),
              fillOpacity: 0.8,
              weight: 1,
            }}
          >
            <Tooltip>
              <div className="font-bold">{post.username}</div>
              <div className="text-xs">{post.urgency.toUpperCase()} - #{post.needType}</div>
            </Tooltip>
            <Popup>
              <div className="p-2 max-w-xs">
                <div className="flex items-start">
                  <MessageSquare size={16} className="mt-1 mr-1 text-primary-500" />
                  <div>
                    <div className="flex items-center">
                      <span className="font-bold text-sm">{post.username}</span>
                      {post.verified && (
                        <span className="ml-1 bg-primary-500 rounded-full w-4 h-4 flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">@{post.handle} · {post.timestamp}</div>
                    <p className="text-sm mt-1">{post.content}</p>
                    <div className="mt-2 text-xs">
                      <span className="font-semibold">Need:</span> #{post.needType}
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </LayerGroup>
      
      {/* Resources layer */}
      <LayerGroup>
        {resources.map((resource) => (
          <CircleMarker
            key={`resource-${resource.id}`}
            center={[resource.coordinates[0], resource.coordinates[1]]}
            radius={resource.priority === 'high' ? 10 : 
                   resource.priority === 'medium' ? 8 : 6}
            pathOptions={{ 
              fillColor: getResourceColor(resource.type),
              color: getResourceColor(resource.type),
              fillOpacity: 0.6,
              weight: 1,
            }}
          >
            <Tooltip>
              <div className="font-bold">{resource.name}</div>
              <div className="text-xs">{resource.type.toUpperCase()} - {resource.location}</div>
            </Tooltip>
            <Popup>
              <div className="p-2">
                <div className="flex items-start">
                  <Package size={16} className="mt-1 mr-1 text-warning-500" />
                  <div>
                    <h3 className="font-bold">{resource.name}</h3>
                    <div className="text-xs text-gray-500">{resource.type} · {resource.priority} priority</div>
                    <div className="text-sm mt-1">
                      <div><strong>Available:</strong> {resource.available.toLocaleString()} {resource.unit}</div>
                      <div><strong>Allocated:</strong> {resource.allocated.toLocaleString()} / {resource.required.toLocaleString()}</div>
                      <div className="mt-1"><strong>Location:</strong> {resource.location}</div>
                      <div className="text-xs mt-1 text-gray-500">Last updated: {resource.lastUpdated}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </LayerGroup>
      
      {/* Evacuation routes layer */}
      {showEvacuationRoutes && (
        <LayerGroup>
          {evacuationRoutes.map((route) => (
            <Polygon
              key={`route-${route.id}`}
              positions={route.path}
              pathOptions={{
                color: '#00cc00',
                weight: 5,
                opacity: 0.7,
                dashArray: '10, 5',
              }}
            >
              <Tooltip>
                <div className="font-bold">{route.name}</div>
                <div className="text-xs">Evacuation Route</div>
              </Tooltip>
            </Polygon>
          ))}
        </LayerGroup>
      )}
      
      {/* Risk zones layer */}
      {showRiskZones && (
        <LayerGroup>
          {riskZones.map((zone) => {
            const zoneColors = getRiskZoneColor(zone.level);
            return (
              <Polygon
                key={`zone-${zone.id}`}
                positions={zone.path}
                pathOptions={{
                  color: zoneColors.color,
                  fillColor: zoneColors.fillColor,
                  weight: 2,
                  opacity: 0.8,
                  fillOpacity: 0.4,
                }}
              >
                <Tooltip>
                  <div className="font-bold">{zone.name}</div>
                  <div className="text-xs">{zone.level.toUpperCase()} Risk Level</div>
                </Tooltip>
                <Popup>
                  <div className="p-2">
                    <div className="flex items-start">
                      <AlertTriangle size={16} className="mt-1 mr-1 text-emergency-500" />
                      <div>
                        <h3 className="font-bold">{zone.name}</h3>
                        <div className="text-xs text-gray-500">Risk Level: {zone.level.toUpperCase()}</div>
                        <div className="text-sm mt-1">
                          <p>This area is currently under {zone.level} risk. Please follow local authority guidance.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Polygon>
            );
          })}
        </LayerGroup>
      )}
    </MapContainer>
  );
};

export default FullScreenMap;