// app/page.tsx
"use client";

/**
 * This page ensures the user sees only the Landing (full screen) on initial load. 
 * The HomeNavbar is placed "below" the viewport. Once the user scrolls even slightly, 
 * the navbar snaps to the top and remains pinned.
 */

import styled from "styled-components";
import Landing from "./components/Landing";
import HomeNavbar from "./components/HomeNavbar";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * The Landing section occupies the entire viewport (100vh) so 
 * it's all that is seen initially.
 */
const LandingSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #dbeafe 0%,rgb(42, 73, 175) 100%);
`;

/**
 * SnapNavWrapper:
 * - position: sticky
 * - top: calc(100vh + 1px);
 *
 * At page load, the navbar sits 1px below the bottom of the screen 
 * (completely out of view). The moment you scroll that 1px, 
 * the sticky positioning snaps it to top: 0.
 */
const SnapNavWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  background: #fff; /* Ensure a solid background when it snaps atop content */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

/**
 * Additional content so there's room to scroll 
 * and observe the snapping behavior.
 */
const ContentSection = styled.section`
  min-height: 150vh;
  background: #f9fafb;
  padding: 2rem 1rem;
`;

export default function Home() {
  return (
    <HomeWrapper>
      {/* Full-screen Landing, filling initial viewport */}
      <LandingSection>
        <h1>Welcome to My Site</h1>
      </LandingSection>

      {/* Navbar initially below the viewport, snapping to top after a tiny scroll */}
      <SnapNavWrapper>
        <HomeNavbar />
      </SnapNavWrapper>

      {/* Extra content to allow scrolling */}
      <ContentSection>
        <h2>Page Content</h2>
        <p>
          As soon as you scroll past the Landing by 1px, the navbar
          appears at the top of the screen and remains pinned.
        </p>
      </ContentSection>
    </HomeWrapper>
  );
}
