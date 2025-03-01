/**
 * layout.tsx
 * ----------
 * - No longer wraps content in a styled container.
 * - Each individual page handles its own layout.
 * - Still provides global styles and the VerticalNavbar.
 */

'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles';
import VerticalNavbar from './components/VerticalNavbar';

const theme = {
  colors: {
    primary: '#F0EAD6',     // Egg-shell
    secondary: '#9B59B6',   // Lighter purple
    text: '#F0EAD6',        // Egg-shell text
    textInverse: '#2c2c2c', // Dark text when needed
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  borderRadius: '12px',
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)',
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
  },
};

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <VerticalNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
