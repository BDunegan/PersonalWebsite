/**
 * page.tsx (Home Page)
 * -------------------
 * - Landing business card appears at the top and scrolls up normally.
 * - Content starts immediately after the Landing card (no overlap).
 * - Fully responsive and smooth scrolling.
 */

'use client';

import styled from 'styled-components';
import Landing from './components/Landing';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LandingContainer = styled.div`
  width: 100%;
  height: 90vh; /* Takes up most of the viewport before scrolling */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.section`
  width: 90%;
  max-width: 1200px;
  padding: 3rem;
  background: linear-gradient(135deg, #8e44ad, #9B59B6); /* Lighter purple gradient */
  border-radius: 16px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.4);
  color: ${({ theme }) => theme.colors.primary}; /* Egg-shell text */
  text-align: center;
  margin-top: 2rem; /* Pushes content below Landing naturally */
  min-height: 60vh; /* Ensures enough space for scrolling */
`;

export default function Home() {
  return (
    <HomeWrapper>
      {/* Landing Business Card at the Top, now scrolls away naturally */}
      <LandingContainer>
        <Landing />
      </LandingContainer>

      {/* Scrollable Content Below */}
      {/* <ContentWrapper>
        <h2>About Me</h2>
        <p>Welcome to my personal website! Here, you'll find my portfolio, projects, and contact information.</p>

        <h2>Projects</h2>
        <p>Check out some of my latest work in software development, web applications, and more.</p>

        <h2>Contact</h2>
        <p>Feel free to reach out via email or connect with me on social media.</p>
      </ContentWrapper> */}
    </HomeWrapper>
  );
}
