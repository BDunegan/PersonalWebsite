/**
 * contact/page.tsx
 * ----------------
 * - Uses a themed Content Card design.
 * - Displays a contact form along with a CardRow that includes contact options.
 * - Now includes an Instagram LinkCard along with Phone and LinkedIn.
 */

'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Image from 'next/image';

const ContactCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  max-width: 800px;
  padding: 3rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondaryDark},
    ${({ theme }) => theme.colors.secondaryLight}
  );
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin: 10vh auto;
  font-family: 'Inter', sans-serif;
`;

const ContactTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Spacer = styled.div`
  height: 1.5rem;
`;

const ContactSubtitle = styled.p`
  font-size: 1rem;
  max-width: 600px;
  opacity: 0.85;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.textInverse};
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.2);
  font-family: 'Inter', sans-serif;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.textInverse};
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.2);
  resize: vertical;
  min-height: 120px;
  font-family: 'Inter', sans-serif;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textInverse};
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  box-shadow: ${({ theme }) => theme.boxShadow};
  font-family: 'Inter', sans-serif;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
    color: ${({ theme }) => theme.colors.primary};
  }
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
  font-family: 'Inter', sans-serif;

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
  font-family: 'Inter', sans-serif;
`;

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const emailInput = formRef.current.elements.namedItem('email') as HTMLInputElement;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput || !emailRegex.test(emailInput.value)) {
      setMessage('Please enter a valid email');
      return;
    }

    emailjs
      .sendForm('service_p0j8na4', 'template_kyy6kam', formRef.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setMessage('Message sent successfully!');
        formRef.current?.reset();
      })
      .catch(() => setMessage('Failed to send message. Please try again.'));
  };

  return (
    <ContactCard>
      <ContactTitle>Let's Get in Touch</ContactTitle>
      <Spacer />
      <ContactSubtitle>
        Feel free to reach out using the form below or via my LinkedIn, phone, or Instagram.
      </ContactSubtitle>

      {/* Contact Form */}
      <ContactForm ref={formRef} onSubmit={sendEmail}>
        <Input type="text" name="from_name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <TextArea name="message" placeholder="Your Message" rows={6} required />
        <SubmitButton type="submit">Send</SubmitButton>
      </ContactForm>

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}

      {/* Contact Cards */}
      <CardRow>
        <LinkCard href="/" aria-label="Phone">
          <Icon src="/icons/phone.png" alt="Phone Icon" width={32} height={32} />
          <PseudoText>+1 (281)-614-9518</PseudoText>
        </LinkCard>

        <LinkCard
          href="https://www.linkedin.com/in/brandon-dunegan-bb935029b"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Icon src="/icons/linkedin.png" alt="LinkedIn Icon" width={32} height={32} />
          <PseudoText>LinkedIn</PseudoText>
        </LinkCard>

        {/* New Instagram Card */}
        <LinkCard
          href="https://www.instagram.com/brandondunegan/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <Icon src="/icons/instagram.png" alt="Instagram Icon" width={32} height={32} />
          <PseudoText>Instagram</PseudoText>
        </LinkCard>
      </CardRow>
    </ContactCard>
  );
}
