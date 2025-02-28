// app/layout.tsx
"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global-styles"; // optional, if you have a global-styles file
import StickyNavbar from "./components/StickyNavbar"; // a navbar that will appear at the top

const theme = {
  colors: {
    primary: "#4f46e5",
    background: "#f9fafb",
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
          {!isHome && <StickyNavbar />}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
