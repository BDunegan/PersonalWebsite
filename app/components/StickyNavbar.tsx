// app/components/StickyNavbar.tsx
"use client";

/**
 * StickyNavbar
 * ------------
 * Nav items are now displayed as "cards" in a horizontal row, centered.
 * The monogram remains on the right side (using absolute positioning).
 */

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: ${({ theme }) => theme.spacing(4)};

  /* Set relative so we can absolutely-position the monogram on the right */
  position: relative;
  display: flex;
  justify-content: center; /* center the nav links horizontally */
  align-items: center;
  height: 60px; /* optional fixed height */
`;

/**
 * A list that displays cards side by side.
 */
const NavList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  list-style: none;
  margin: 0;
  padding: 0;
`;

/**
 * Each nav item is styled to look like a card:
 * - Rounded corners
 * - Subtle shadow
 * - Padding around the text
 */
const NavItem = styled.li`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: transform 0.2s ease;
  
  /* Make the entire li clickable? Typically we only style the anchor. */
  a {
    display: block;
    padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(5)};
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  &:hover {
    transform: translateY(-2px);
  }
  &:hover a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/**
 * Monogram is absolutely positioned on the right side of the navbar.
 */
const LogoContainer = styled.div`
  position: absolute;
  right: 1rem; /* adjust as needed */
  top: 50%;
  transform: translateY(-50%); /* center vertically */
`;

export default function StickyNavbar() {
  return (
    <NavWrapper>
      {/* Centered Nav Links */}
      <NavList>
        <NavItem>
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link href="/resume">Resume</Link>
        </NavItem>
        <NavItem>
          <Link href="/blog">Blog</Link>
        </NavItem>
        <NavItem>
          <Link href="/contact">Contact</Link>
        </NavItem>
      </NavList>

      {/* Monogram on the right */}
      <LogoContainer>
        <Link href="/" aria-label="Home">
          <Image
            src="/monogram.png"
            alt="Monogram Logo"
            width={40}
            height={40}
          />
        </Link>
      </LogoContainer>
    </NavWrapper>
  );
}
