// app/contact/page.tsx
"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const ContactContainer = styled.section`
  padding: 2rem 1rem;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    margin-top: 0.5rem;
  }
`;

const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    align-self: flex-start;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;
    padding: 0.75rem 1.25rem;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #4338ca;
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
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </ContactFormContainer>
      {message && <p>{message}</p>}
    </ContactContainer>
  );
}
