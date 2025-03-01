// app/contact/page.tsx
"use client";

/**
 * Contact
 * -------
 * Contains a contact form for emailing via EmailJS. 
 * Uses responsive design for the form layout and button sizes.
 */

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const ContactContainer = styled.section`
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
  max-width: 800px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};

  h1 {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    font-size: 1.5rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 2rem;
    }
  }
`;

const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  input,
  textarea {
    width: 100%;
    padding: ${({ theme }) => theme.spacing(3)};
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  button {
    align-self: flex-start;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textInverse};
    border: none;
    padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(5)};
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: 1rem;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const emailInput = form.current.elements.namedItem("email") as HTMLInputElement;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput || !emailRegex.test(emailInput.value)) {
        setMessage("Please enter a valid email");
        return;
      }

      emailjs
        .sendForm("service_p0j8na4", "template_kyy6kam", form.current, "t3ClDFpRX8kqY_t6O")
        .then(() => {
          setMessage("Message sent successfully!");
          form.current?.reset();
        })
        .catch(() => setMessage("Failed to send message. Please try again."));
    }
  };

  return (
    <ContactContainer>
      <h1>Contact Me</h1>
      <ContactFormContainer ref={form} onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows={6} required />
        <button type="submit">Send</button>
      </ContactFormContainer>
      {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
    </ContactContainer>
  );
}
