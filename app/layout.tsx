/**
 * layout.tsx
 * ----------
 * - Wraps the app in a ThemeProvider.
 * - Loads GlobalStyles.
 * - Includes the VerticalNavbar with the theme toggle.
 */

'use client';

import { ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles';
import { defaultTheme, altTheme } from './themes';
import VerticalNavbar from './components/VerticalNavbar';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isAltTheme, setIsAltTheme] = useState(false);
  const handleThemeToggle = () => setIsAltTheme((prev) => !prev);
  const activeTheme = isAltTheme ? altTheme : defaultTheme;

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={activeTheme}>
          <GlobalStyles />
          <VerticalNavbar toggleTheme={handleThemeToggle} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
