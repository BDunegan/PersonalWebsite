/**
 * Landing.tsx
 * -----------
 * - Styled as a Business Card.
 * - Uses theme-based gradient for background.
 * - Centers the monogram, name, and contact cards.
 * - Now includes an Instagram LinkCard in the CardRow.
 */

'use client';

import styled from 'styled-components';
import Image from 'next/image';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 90vh;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondaryDark},
    ${({ theme }) => theme.colors.secondaryLight}
  );
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.4);
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin: auto;
  margin-top: 5vh;
  position: relative;
`;

const NameText = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
`;

const LinkCard = styled.a`
  background: rgba(44, 44, 44, 0.85);
  color: #eaeaea;
  min-width: 160px;
  padding: 1rem 1.2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s ease;
  text-align: center;

  &:hover {
    transform: translateY(-3px);
    background: rgba(44, 44, 44, 1);
  }
`;

const Icon = styled(Image)`
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;

const PseudoText = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export default function Landing() {
  return (
    <CardContainer>
      {/* Monogram & Name */}
      <Image src="/monogram.png" alt="Monogram Logo" width={120} height={120} priority />
      <NameText>Brandon Dunegan</NameText>

      {/* Contact Links */}
      <CardRow>
        <LinkCard href="mailto:bidunegan@gmail.com" aria-label="Email">
          <Icon src="/icons/email.png" alt="Mail Icon" width={32} height={32} />
          <PseudoText>bidunegan@gmail.com</PseudoText>
        </LinkCard>

        <LinkCard href="/" aria-label="Phone">
          <Icon src="/icons/phone.png" alt="Phone Icon" width={32} height={32} />
          <PseudoText>+1 (281)-614-9518</PseudoText>
        </LinkCard>

        <LinkCard href="https://bidunegan.com" target="_blank" rel="noreferrer" aria-label="Website">
          <Icon src="/monogram.png" alt="Website Icon" width={60} height={60} />
          <PseudoText>Personal</PseudoText>
        </LinkCard>

        <LinkCard href="https://www.bu.edu/" target="_blank" rel="noreferrer" aria-label="Boston University">
          <Icon src="/icons/bu.png" alt="Boston University Icon" width={60} height={60} />
          <PseudoText>Alma Mater</PseudoText>
        </LinkCard>

        <LinkCard href="https://www.linkedin.com/in/brandon-dunegan-bb935029b" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Icon src="/icons/linkedin.png" alt="LinkedIn Icon" width={32} height={32} />
          <PseudoText>LinkedIn</PseudoText>
        </LinkCard>

        <LinkCard href="https://github.com/BDunegan" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Icon src="/icons/github.png" alt="GitHub Icon" width={32} height={32} />
          <PseudoText>GitHub</PseudoText>
        </LinkCard>

        {/* New Instagram Card */}
        <LinkCard href="https://www.instagram.com/brandondunegan/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <Icon src="/icons/instagram.png" alt="Instagram Icon" width={32} height={32} />
          <PseudoText>Instagram</PseudoText>
        </LinkCard>
      </CardRow>
    </CardContainer>
  );
}
