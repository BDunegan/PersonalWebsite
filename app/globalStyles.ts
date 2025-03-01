/**
 * globalStyles.ts
 * -------------------
 * - Adds mobile-friendly styles.
 * - Ensures text, buttons, and layouts are fully responsive.
 */

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset & Box-Sizing */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Global body styling */
  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Inter', sans-serif;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.bkgDark},
      ${({ theme }) => theme.colors.bkgLight}
    );
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;
  }

  /* Responsive Typography */
  h1 {
    font-size: 2.2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  p, button, input {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p, button, input {
      font-size: 0.9rem;
    }
  }
`;

export default GlobalStyles;
