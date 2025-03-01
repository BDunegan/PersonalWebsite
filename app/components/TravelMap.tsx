"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import L from "leaflet";

// Custom icon for city markers
const markerIcon = new L.Icon({
  iconUrl: "/icons/map-marker.png", // Ensure this icon exists in the public folder
  iconSize: [20, 20],
  popupAnchor: [1, -34],
  tooltipAnchor: [12, -28],
});

// Hardcoded list of cities visited
const cities: { name: string; coords: [number, number]; dates: string }[] = [
  { name: "Boston, USA", coords: [42.3555, -71.0565], dates: "University (2021 - 2025)" },
  { name: "Houston, USA", coords: [29.7601, -95.3701], dates: "Residence (2008 - 2021)" },
  { name: "Miami, USA", coords: [25.7617, -80.1918], dates: "Vacation 2025" },
  { name: "New Orleans, USA", coords: [29.9509, -90.0758], dates: "Vacation 2016" },
  { name: "Santa Fe, USA", coords: [35.6894, -105.9382], dates: "Vacation 2021" },
  { name: "San Francisco, USA", coords: [37.7749, -122.4194], dates: "Vacation 2019" },
  { name: "Austin, USA", coords: [30.2672, -97.7431], dates: "SXSW 2025" },
  { name: "Munich, DE", coords: [48.1351, 11.5820], dates: "Vacation 2024" },
  { name: "Milan, IT", coords: [45.4685, 9.1824], dates: "Rotary Exchange 2018" },
  { name: "Rome, IT", coords: [41.8967, 12.4822], dates: "Rotary Exchange 2018" },
  { name: "Dublin, IE", coords: [53.3498, -6.2603], dates: "Vacation 2020" },
  { name: "Cancun, MX", coords: [21.1619, -86.8515], dates: "Vacation 2022" },
  { name: "Belize City, BZ", coords: [17.1899, -88.4976], dates: "Vacation 2019" }, // Fixed duplicate Cancun entry
];

// Wrapper expands dynamically
const MapContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95vw;
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondaryDark},
    ${({ theme }) => theme.colors.secondaryLight}
  );
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    width: 90vw;
    padding: 1rem;
    margin: 1.5rem auto;
  }

  @media (max-width: 480px) {
    width: 95vw;
    padding: 0.8rem;
    margin: 1rem auto;
  }
`;

// Ensures the title does not overlap the map
const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

// Ensures the map always takes up its available space inside the wrapper
const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

export default function TravelMap() {
  const [selectedCity, setSelectedCity] = useState<number | null>(null);

  return (
    <MapContainerWrapper>
      <SectionTitle>Places I've Been</SectionTitle>
      <StyledMapContainer center={[30, -20]} zoom={2}>
        {/* Map Tile Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* City Markers */}
        {cities.map((city, index) => (
          <Marker
            key={index}
            position={city.coords}
            icon={markerIcon}
            eventHandlers={{
              click: () => setSelectedCity(index),
            }}
          >
            {selectedCity === index && (
              <Popup
                position={city.coords}
                eventHandlers={{
                  remove: () => setSelectedCity(null),
                }}
              >
                <strong>{city.name}</strong>
                <br />
                {city.dates}
              </Popup>
            )}
          </Marker>
        ))}
      </StyledMapContainer>
    </MapContainerWrapper>
  );
}
