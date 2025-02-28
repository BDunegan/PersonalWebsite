// app/components/Landing.tsx
"use client";

import styled from "styled-components";

const LandingSection = styled.section`
  width: 100%;
  height: 100vh; /* Full screen height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
  text-align: center;
`;

export default function Landing() {
  return (
    <LandingSection>
      <h1>Welcome to My Site</h1>
      <p>Scroll down to see the Navbar stick.</p>
    </LandingSection>
  );
}
