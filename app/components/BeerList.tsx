"use client";

import { useState } from "react";
import styled from "styled-components";

// Sample beer data
const beerData = [
  { beer: "Samuel Adams Boston Lager", rating: 7.0, notes: "Balanced Basic Lager", date: "??" },
  { beer: "Altstadt Lager", rating: 8.0, notes: "Quality German Lager", date: "??" },
  { beer: "Altstadt Helles", rating: 8.5, notes: "Quality German Helles", date: "??" },
  { beer: "Altstadt Hefeweizen", rating: 7.0, notes: "Quality German Hefeweizen; Very full", date: "??" },
  { beer: "Blue Moon Belgian White", rating: 6.5, notes: "Light and refreshing; Goes great with orange!", date: "??" },
];

// Sort beers by rating (highest first)
const sortedBeers = beerData.sort((a, b) => b.rating - a.rating);

// Styled components
const BeerContainer = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 3rem auto 0;
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
  font-family: 'Inter', sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary};
`;

const BeerListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BeerItem = styled.div<{ expanded: boolean }>`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textInverse};
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryLight};
    transform: scale(1.02);
  }

  h3 {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
  }

  span {
    font-size: 1rem;
    font-weight: bold;
    opacity: 0.8;
  }
`;

const BeerDetails = styled.div<{ expanded: boolean }>`
  max-height: ${({ expanded }) => (expanded ? "100px" : "0")};
  overflow: hidden;
  opacity: ${({ expanded }) => (expanded ? "1" : "0")};
  transition: max-height 0.3s ease, opacity 0.2s ease;
  padding-top: ${({ expanded }) => (expanded ? "0.5rem" : "0")};
  border-top: ${({ expanded }) => (expanded ? "1px solid rgba(255,255,255,0.3)" : "none")};
  margin-top: ${({ expanded }) => (expanded ? "0.5rem" : "0")};
  font-size: 0.9rem;
`;

const ToggleButton = styled.button`
  margin-top: 1rem;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.secondaryLight};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryDark};
    transform: scale(1.05);
  }
`;

export default function BeerList() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Display only top 3 beers by default, expand when toggled
  const displayedBeers = showAll ? sortedBeers : sortedBeers.slice(0, 3);

  return (
    <BeerContainer>
      <SectionTitle>Good work requires good beer!</SectionTitle>
      <BeerListWrapper>
        {displayedBeers.map((beer, index) => (
          <BeerItem
            key={index}
            expanded={expandedIndex === index}
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <h3>
              {beer.beer} <span>{beer.rating}⭐</span>
            </h3>
            <BeerDetails expanded={expandedIndex === index}>
              <p><strong>Notes:</strong> {beer.notes}</p>
              <p><strong>Date Tried:</strong> {beer.date}</p>
            </BeerDetails>
          </BeerItem>
        ))}
      </BeerListWrapper>

      {/* Toggle Button */}
      <ToggleButton onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "Show More"}
      </ToggleButton>
    </BeerContainer>
  );
}
