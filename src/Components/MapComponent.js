import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const containerStyle = {
  width: '100%',
  height: '400px',
  marginBottom: '20px',
};

const center = [20.5937, 78.9629]; 

const MapComponent = () => {
  return (
    <MapContainer center={center} zoom={5} style={containerStyle}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>
          This is a sample location.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
