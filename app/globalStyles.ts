/**
 * globalStyles.ts
 * ---------------
 * Global reset and universal black-to-purple gradient background.
 * Uses Google styling conventions for consistency.
 */

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset & Box-Sizing */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Global body styling */
  html, body {
    width: 100%;
    height: 100%;
    font-family: sans-serif;
    background: linear-gradient(135deg, #000000 0%, #4B0082 100%); /* Black to deep purple */
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

  /* Headings and paragraphs spacing */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export default GlobalStyles;
