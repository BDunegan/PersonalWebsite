/**
 * resume/page.tsx
 * ---------------
 * - Displays a full-page PDF or a content card, referencing theme colors.
 * - Here, we embed the PDF in an eggshell card with the same gradient background.
 */

'use client';

import styled from 'styled-components';
import BeerList from "../components/BeerList";

const ResumeCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  max-width: 900px;
  padding: 3rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondaryDark},
    ${({ theme }) => theme.colors.secondaryLight}
  );
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.colors.primary};
  margin: 10vh auto;
  font-family: 'Inter', sans-serif;
`;

const ResumeViewer = styled.iframe`
  width: 100%;
  height: 120vh;
  border-radius: 12px;
  border: none;
  background: ${({ theme }) => theme.colors.primary}; /* Eggshell behind PDF */
  box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.2);
`;

export default function Resume() {
  return (
    <>
    <ResumeCard>
      {/* Resume PDF View */}
      <ResumeViewer src="/resume.pdf" />
    </ResumeCard>
    <BeerList />
    </>
  );
}
