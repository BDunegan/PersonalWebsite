// app/resume/page.tsx
"use client";

/**
 * Resume
 * ------
 * Displays a PDF resume in an embed. Sections for Projects and Skills 
 * are spaced out with theme spacing, while also adjusting embed height for mobile.
 */

import styled from "styled-components";

const ResumeContainer = styled.section`
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
  max-width: 1000px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  embed {
    width: 100%;
    height: 60vh; /* Smaller by default for mobile */

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 80vh; /* Taller for desktops/tablets */
    }
  }

  .projects,
  .skills {
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
`;

export default function Resume() {
  return (
    <ResumeContainer>
      <h1>Resume</h1>
      <embed src="/resume.pdf" type="application/pdf" />

      <div className="projects">
        <h2>Projects</h2>
        <p>List of projects goes here.</p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <p>List of skills goes here.</p>
      </div>
    </ResumeContainer>
  );
}
