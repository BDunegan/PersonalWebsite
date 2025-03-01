"use client";

import styled from "styled-components";
import GlobalStyles from "../globalStyles"
import VerticalNavbar from "./VerticalNavbar"; // Use the new navbar

const PageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 2rem;
  background: rgba(240, 234, 214, 0.1); /* Light transparency to match Landing */
  backdrop-filter: blur(5px);
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      <VerticalNavbar />
      <PageContainer>
        {children}
      </PageContainer>
    </>
  );
}
