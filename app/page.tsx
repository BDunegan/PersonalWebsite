// app/page.tsx
"use client";

/**
 * Home (Landing) Page
 * -------------------
 * Displays a full-screen landing section, 
 * a navbar snapping after scroll, and extra content.
 * Uses breakpoints to adjust heading font sizes for smaller screens.
 */

import styled from "styled-components";
import Landing from "./components/Landing";
import HomeNavbar from "./components/HomeNavbar";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LandingSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textInverse};
  text-align: center;
  padding: 0;

  h1 {
    font-size: 2rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 2.5rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 3rem;
    }
  }
`;

const SnapNavWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const ContentSection = styled.section`
  min-height: 150vh;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
`;

export default function Home() {
  return (
    <HomeWrapper>
      <LandingSection>
        <Landing/>
      </LandingSection>

      <SnapNavWrapper>
        <HomeNavbar />
      </SnapNavWrapper>

      <ContentSection>
        <h2>Page Content</h2>
        <p>
          Scroll down to see the navbar snap to the top and remain pinned.
        </p>
      </ContentSection>
    </HomeWrapper>
  );
}
