// app/components/Content.tsx
"use client";

/**
 * Content
 * -------
 * A reusable container for page content. 
 * Adjusts font size on mobile vs. desktop for improved readability.
 */

import styled from "styled-components";

const ContentContainer = styled.section`
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
  line-height: 1.6;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  font-size: 0.95rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export default function Content() {
  return (
    <ContentContainer>
      <p>This is the body content of the website. It should be scrollable and responsive.</p>
      <p>More content here...</p>
      <p>Even more content to demonstrate scrolling...</p>
    </ContentContainer>
  );
}
