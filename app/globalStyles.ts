/**
 * globalStyles.ts
 * ---------------
 * Provides a global reset and references the theme for backgrounds/colors.
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

  /* Global body styling references the theme for background & text color */
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

  /* Remove default list styles */
  ul, li {
    list-style: none;
  }

  /* Remove default link styles */
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
