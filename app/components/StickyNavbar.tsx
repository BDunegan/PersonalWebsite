// app/components/StickyNavbar.tsx
"use client";

import Link from "next/link";
import styled from "styled-components";

const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999; /* keep it above other elements */
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem;

  ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 0;
  }

  a {
    color: #333;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default function StickyNavbar() {
  return (
    <NavWrapper>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/resume">Resume</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </NavWrapper>
  );
}
