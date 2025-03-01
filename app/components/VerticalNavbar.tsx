/**
 * VerticalNavbar.tsx
 * ------------------
 * - Now always **stays above everything else** (highest `z-index`).
 * - Still smoothly slides in/out.
 * - Retains **rounded corners** for the pop-out effect.
 */

'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 1rem; /* Keeps a small gap from the top */
  left: 0;
  width: 220px;
  background: #1a001f;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  z-index: 9999; /* Ensures it's always on top of everything */

  /* Rounded corners for the pop-out effect */
  border-radius: 0 15px 15px 0;

  /* Sidebar slides in and out */
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-220px')});
  transition: transform 0.3s ease;

  /* Height dynamically adjusts to content */
  height: auto;
  max-height: 400px; /* Prevents it from getting too large */
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
  z-index: 10000; /* Ensures the button is always above content */

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

export default function VerticalNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

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
      </Sidebar>

      <MonogramButton onClick={toggleSidebar} aria-label="Toggle Menu" $isOpen={isOpen}>
        <Image
          src="/monogram.png"
          alt="Toggle Menu"
          width={40}
          height={40}
        />
      </MonogramButton>
    </>
  );
}
