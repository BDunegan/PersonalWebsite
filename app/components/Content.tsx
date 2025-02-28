// app/components/Content.tsx
"use client";

import styled from "styled-components";

const ContentContainer = styled.section`
  padding: 2rem 1rem;
  line-height: 1.6;
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
