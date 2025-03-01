/**
 * page.tsx (Contact Page)
 * -------------------
 * - Uses a **consistent font across all text fields**.
 * - **Adds a spacer** between the ContactTitle and the ContactForm for better structure.
 * - Retains the **Eggshell input fields** for a clean, high-contrast design.
 * - Keeps only **Phone & LinkedIn** in the contact row.
 * - Features structured spacing, shadows, and rounded corners for a polished look.
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
  background: linear-gradient(135deg, #6a0dad, #a349a4); /* Deep Purple to Lighter Purple */
  border-radius: 20px;
  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.5);
  text-align: center;
  color: ${({ theme }) => theme.colors.primary}; /* Eggshell */
  margin: 10vh auto;
  font-family: 'Inter', sans-serif; /* Ensuring consistent font */
`;

const ContactTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Spacer = styled.div`
  height: 1.5rem; /* Space between title and form */
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
  color: #2c2c2c; /* Dark text */
  background: #F0EAD6; /* Eggshell background */
  box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.2); /* Soft inner shadow */
  font-family: 'Inter', sans-serif; /* Consistent font */
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  color: #2c2c2c; /* Dark text */
  background: #F0EAD6; /* Eggshell background */
  box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.2); /* Soft inner shadow */
  resize: vertical;
  min-height: 120px;
  font-family: 'Inter', sans-serif; /* Consistent font */
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary}; /* Eggshell */
  color: ${({ theme }) => theme.colors.textInverse}; /* Dark text */
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  box-shadow: ${({ theme }) => theme.boxShadow};
  font-family: 'Inter', sans-serif; /* Consistent font */

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}; /* Lighter Purple */
  }
`;

/** Contact Cards Row */
const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
`;

/** Individual Contact Card */
const LinkCard = styled.a`
  background: rgba(44, 44, 44, 0.85); /* Semi-transparent dark grey */
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
  font-family: 'Inter', sans-serif; /* Consistent font */

  &:hover {
    transform: translateY(-3px);
    background: rgba(44, 44, 44, 1); /* Slightly darker on hover */
  }
`;

/** Icons for Contact Cards */
const Icon = styled(Image)`
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;

const PseudoText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif; /* Consistent font */
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
      .sendForm('service_p0j8na4', 'template_kyy6kam', formRef.current, 't3ClDFpRX8kqY_t6O')
      .then(() => {
        setMessage('Message sent successfully!');
        formRef.current?.reset();
      })
      .catch(() => setMessage('Failed to send message. Please try again.'));
  };

  return (
    <ContactCard>
      <ContactTitle>Let's get in touch!</ContactTitle>
      <Spacer /> {/* Spacer added for better visual separation */}

      {/* Contact Form */}
      <ContactForm ref={formRef} onSubmit={sendEmail}>
        <Input type="text" name="from_name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <TextArea name="message" placeholder="Your Message" rows={6} required />
        <SubmitButton type="submit">Send</SubmitButton>
      </ContactForm>

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}

      {/* Contact Cards (Only Phone & LinkedIn) */}
      <CardRow>
        <LinkCard href="/" aria-label="Phone">
          <Icon src="/icons/phone.png" alt="Phone Icon" width={32} height={32} />
          <PseudoText>+1 (281)-614-9518</PseudoText>
        </LinkCard>

        <LinkCard href="https://www.linkedin.com/in/brandon-dunegan-bb935029b" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Icon src="/icons/linkedin.png" alt="LinkedIn Icon" width={32} height={32} />
          <PseudoText>LinkedIn</PseudoText>
        </LinkCard>
      </CardRow>
    </ContactCard>
  );
}
