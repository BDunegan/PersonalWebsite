"use client";

/**
 * Landing
 * -------
 * - Full-page black→purple gradient background.
 * - All content (monogram, name, link cards) centered horizontally & vertically.
 * - Link cards have a grey/dark background with subtle hover effect.
 * - No external theme references—colors are defined inline.
 */

import styled from "styled-components";
import Image from "next/image";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh; /* Ensures full viewport height */
  height: auto; /* Expands beyond 100vh if needed */

  /* Black to purple gradient */
  background: linear-gradient(
    135deg,
rgb(44, 44, 44) 0%,
rgb(83, 22, 158) 100%
  );

  /* Center content horizontally and vertically */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Some padding so content doesn't touch screen edges */
  padding: 2rem;
`;

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

/* Name displayed beneath the monogram */
const NameText = styled.h1`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #eaeaea; /* Light grey text on dark background */
  font-weight: 700;
`;

/**
 * A flex container for the link cards. 
 * We can still wrap the cards if they don't fit on one line.
 */
const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 1rem;
`;

/**
 * Each link card has a grey/dark background, 
 * a subtle shadow, and a small hover lift.
 */
const LinkCard = styled.a`
  background: #2c2c2c;
  color: #eaeaea;
  min-width: 180px; /* Allows cards to expand based on text length */
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s ease;
  white-space: nowrap; /* Ensures text stays on a single line */
  text-align: center;

  &:hover {
    transform: translateY(-3px);
  }
`;

/** 
 * The icon at the top of each card. 
 * We fix width/height so it's nicely scaled.
 */
const Icon = styled(Image)`
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;

/** 
 * The short link text (pseudonym) below the icon. 
 */
const PseudoText = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

const PhoneNumberText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: #bdbdbd; /* Slightly lighter grey */
`;

export default function Landing() {
  return (
    <PageContainer>
      {/* Monogram + Name */}
      <HeaderWrapper>
        <Image
          src="/monogram.png"
          alt="Monogram Logo"
          width={300}
          height={300}
          priority
        />
        <NameText>Brandon Dunegan</NameText>
      </HeaderWrapper>

      {/* Row of Link Cards */}
      <CardRow>
        
                {/* Email */}
                <LinkCard
          href="mailto:bidunegan@gmail.com"
          aria-label="Email"
        >
          <Icon
            src="/icons/email.png"
            alt="Mail Icon"
            width={32}
            height={32}
          />
          <PseudoText>bidunegan@gmail.com</PseudoText>
        </LinkCard>

        {/* Telephone Card (links to the main page, but displays the number) */}
        <LinkCard href="/" aria-label="Main Page">
          <Icon
            src="/icons/phone.png"
            alt="Phone Icon"
            width={32}
            height={32}
          />
          <PseudoText>+1 (281)-614-9518</PseudoText>
        </LinkCard>
        {/* Website */}
        <LinkCard
          href="https://bidunegan.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Website"
        >
          <Icon
            src="/monogram.png"
            alt="Website Icon"
            width={60}
            height={60}
          />
          <PseudoText>Personal</PseudoText>
        </LinkCard>

        {/* Alma Mater: Boston University */}
        <LinkCard
          href="https://www.bu.edu/"
          target="_blank"
          rel="noreferrer"
          aria-label="Boston University"
        >
          <Icon
            src="/icons/bu.png"
            alt="Boston University Icon"
            width={60}
            height={60}
          />
          <PseudoText>Alma Mater</PseudoText>
        </LinkCard>

        {/* LinkedIn */}
        <LinkCard
          href="https://www.linkedin.com/in/brandon-dunegan-bb935029b"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Icon
            src="/icons/linkedin.png"
            alt="LinkedIn Icon"
            width={32}
            height={32}
          />
          <PseudoText>LinkedIn</PseudoText>
        </LinkCard>

        {/* GitHub */}
        <LinkCard
          href="https://github.com/BDunegan"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Icon
            src="/icons/github.png"
            alt="GitHub Icon"
            width={32}
            height={32}
          />
          <PseudoText>Github</PseudoText>
        </LinkCard>
      </CardRow>
    </PageContainer>
  );
}
