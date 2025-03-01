/**
 * ThemeToggle.tsx
 * ---------------
 * An optional component that demonstrates toggling between two themes:
 * "defaultTheme" and "altTheme".
 */

'use client';

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../globalStyles';
import { defaultTheme, altTheme } from '../themes';

export default function ThemeToggle({ children }: { children: React.ReactNode }) {
  const [isAltTheme, setIsAltTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsAltTheme((prev) => !prev);
  };

  const activeTheme = isAltTheme ? altTheme : defaultTheme;

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyles />
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 9999 }}>
        <button
          onClick={handleThemeToggle}
          style={{
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Toggle Theme
        </button>
      </div>
      {children}
    </ThemeProvider>
  );
}
