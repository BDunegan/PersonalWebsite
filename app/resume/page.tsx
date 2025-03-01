/**
 * page.tsx (Resume Page)
 * -------------------
 * - Uses a **Content Card** design with the same gradient as Contact & Blog.
 * - Embeds the full resume as a PDF.
 * - No "My Resume" title for cleaner flow.
 * - Fully responsive and visually cohesive.
 */

'use client';

import styled from 'styled-components';

const ResumeCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  max-width: 900px;
  padding: 3rem;
  background: linear-gradient(135deg, #8e44ad, #9B59B6); /* Same Gradient as Contact */
  border-radius: 20px;
  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.colors.primary}; /* Eggshell */
  margin: 10vh auto;
  font-family: 'Inter', sans-serif;
`;

const ResumeViewer = styled.embed`
  width: 100%;
  height: 120vh;
  border-radius: 12px;
  background: #F0EAD6; /* Eggshell Background */
  box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.2);
`;

export default function Resume() {
  return (
    <ResumeCard>
      {/* Resume Embed Viewer */}
      <ResumeViewer src="/resume.pdf" type="application/pdf" />
    </ResumeCard>
  );
}
