// app/components/HomeNavbar.tsx
"use client";

/**
 * HomeNavbar.tsx
 * This component is a sticky navigation bar displayed on the home page.
 * It stays at the top of the screen when the user scrolls.
 */

import Link from "next/link";
import styled from "styled-components";

const HomeNavWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999; /* Keep it above other elements */
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #333;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default function HomeNavbar() {
  return (
    <HomeNavWrapper>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </HomeNavWrapper>
  );
}
