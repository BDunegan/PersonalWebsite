/**
 * VerticalNavbar.tsx
 * ------------------
 * - Always stays above content.
 * - Renders navigation links.
 * - Includes a Theme Toggle button within the sidebar that calls the provided toggle function.
 */

'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

type VerticalNavbarProps = {
  toggleTheme?: () => void;
};

const Sidebar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 1rem;
  left: 0;
  width: 220px;
  background: ${({ theme }) => theme.colors.secondaryDark};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  z-index: 9999;
  border-radius: 0 15px 15px 0;
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-220px')});
  transition: transform 0.3s ease;
  height: auto;
  max-height: 400px;
`;

const MonogramButton = styled.button<{ $isOpen: boolean }>`
  position: fixed;
  top: 1rem;
  left: ${({ $isOpen }) => ($isOpen ? '230px' : '10px')};
  background: transparent;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  outline: none;
  transition: left 0.3s ease;
  z-index: 10000;
  &:hover {
    opacity: 0.8;
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const NavItem = styled.li`
  margin: 0.5rem 0;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.2s ease;
  a {
    display: block;
    padding: 0.75rem 1rem;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateX(5px);
    a {
      color: ${({ theme }) => theme.colors.textInverse};
    }
  }
`;

const ToggleButton = styled.button`
  margin-top: 2rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: 'Inter', sans-serif;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textInverse};
  }
`;

export default function VerticalNavbar({ toggleTheme }: VerticalNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);
  return (
    <>
      <Sidebar $isOpen={isOpen}>
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
        <ToggleButton onClick={toggleTheme ? toggleTheme : () => {}}>
           Toggle Theme
        </ToggleButton>
      </Sidebar>
      <MonogramButton onClick={toggleSidebar} aria-label="Toggle Menu" $isOpen={isOpen}>
        <Image src="/monogram.png" alt="Toggle Menu" width={40} height={40} />
      </MonogramButton>
    </>
  );
}
