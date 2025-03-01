// app/about/page.tsx
"use client";

/**
 * About
 * -----
 * Displays background info. Uses breakpoints to maintain comfortable 
 * text sizing and layout across mobile and desktop.
 */

import styled from "styled-components";

const AboutContainer = styled.section`
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
  max-width: 800px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  h1 {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    font-size: 1.5rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 2rem;
    }
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <h1>About Me</h1>
      <p>
        This is the About Me section. Add information about your background, 
        experience, or interests here.
      </p>
    </AboutContainer>
  );
}
