import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getResources } from '../api/apiService'; // Import the API function

const HomePage = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Fetch resources from the backend when the component mounts
    const fetchResources = async () => {
      try {
        const data = await getResources();
        setResources(data); // Set the resources in the state
      } catch (error) {
        console.error('Failed to fetch resources:', error);
      }
    };

    fetchResources();
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <h1>Community Resource Map</h1>
      {/* Initialize the MapContainer */}
      <MapContainer
        center={[40.7128, -74.006]} // Centered on New York City as an example
        zoom={12}
        style={{ height: '80vh', width: '100%' }}
      >
        {/* Add the OpenStreetMap tile layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Display markers for each resource */}
        {resources.map((resource) => (
          <Marker
            key={resource.id}
            position={[resource.latitude, resource.longitude]}
          >
            <Popup>
              <strong>{resource.name}</strong>
              <br />
              {resource.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HomePage;
