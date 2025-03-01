// app/components/HomeNavbar.tsx
"use client";

/**
 * HomeNavbar
 * ----------
 * Similar styling to StickyNavbar, with card-like link items centered.
 * The monogram remains on the right.
 */

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const HomeNavWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: ${({ theme }) => theme.spacing(4)};

  position: relative;
  display: flex;
  justify-content: center; /* center the nav links horizontally */
  align-items: center;
  height: 60px; /* optional fixed height */
`;

const NavList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: transform 0.2s ease;

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

const LogoContainer = styled.div`
  position: absolute;
  right: 1rem; 
  top: 50%;
  transform: translateY(-50%);
`;

export default function HomeNavbar() {
  return (
    <HomeNavWrapper>
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

      <LogoContainer>
        <Link href="/" aria-label="Home">
          <Image
            src="/monogram.png"
            alt="Monogram Logo"
            width={60}
            height={60}
          />
        </Link>
      </LogoContainer>
    </HomeNavWrapper>
  );
}
