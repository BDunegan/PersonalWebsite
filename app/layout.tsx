// app/layout.tsx
"use client";

/**
 * Layout
 * ------
 * Wraps all pages with a ThemeProvider and GlobalStyle. 
 * Provides the universal theme (color palette, breakpoints, etc.)
 * and conditionally displays StickyNavbar for non-home routes.
 */

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global-styles";
import StickyNavbar from "./components/StickyNavbar";

const theme = {
  colors: {
    primary: "#4285F4",      // Google-style bright primary
    secondary: "#DB4437",    // Complementary accent (red)
    background: "#F9FAFB",   // Light background
    surface: "#FFFFFF",      // Surface color for cards, navbars, etc.
    text: "#333333",         // Default text color
    textInverse: "#FFFFFF",  // Text color on dark backgrounds
  },
  spacing: (factor: number) => `${0.25 * factor}rem`, // e.g. spacing(8) -> '2rem'
  borderRadius: "6px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  /** 
   * Common breakpoints: 
   *  sm: up to 480px (mobile), 
   *  md: up to 768px (small tablet), 
   *  lg: up to 1024px (desktop).
   */
  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
  },
};



type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {/* Show a sticky navbar if not on the home page */}
          {!isHome && <StickyNavbar />}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
