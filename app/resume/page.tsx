// app/resume/page.tsx
"use client";

import styled from "styled-components";

const ResumeContainer = styled.section`
  padding: 2rem 1rem;
  max-width: 1000px;
  margin: 0 auto;

  embed {
    width: 100%;
    height: 600px;
    border: none;
  }

  .projects,
  .skills {
    margin-top: 2rem;
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
