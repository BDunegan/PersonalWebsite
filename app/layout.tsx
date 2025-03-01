'use client';

import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles';
import { defaultTheme, altTheme } from './themes';
import VerticalNavbar from './components/VerticalNavbar';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isAltTheme, setIsAltTheme] = useState(false);

  // ✅ Ensure the theme persists across refreshes
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsAltTheme(storedTheme === 'alt');
    }
  }, []);

  const handleThemeToggle = () => {
    setIsAltTheme((prev) => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'alt' : 'default');
      return newTheme;
    });
  };

  const activeTheme = isAltTheme ? altTheme : defaultTheme;

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={activeTheme}>
          <GlobalStyles />
          {/* ✅ Pass toggleTheme to VerticalNavbar */}
          <VerticalNavbar toggleTheme={handleThemeToggle} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
