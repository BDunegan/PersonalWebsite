// app/global-styles.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset / base rules */
  *, *::before, *::after {
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #333;
    background-color: #f9fafb;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Headings (responsive sizing as an example) */
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.75rem;
    }
  }
`;
