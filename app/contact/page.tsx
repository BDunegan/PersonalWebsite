// app/contact/page.tsx
"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
        emailjs.sendForm("service_p0j8na4", "template_kyy6kam", form.current, "t3ClDFpRX8kqY_t6O")
        .then(() => {
        setMessage("Message sent successfully!");
        form.current?.reset(); // Clear form fields after submission
        })
      .catch(() => setMessage("Failed to send message. Please try again."));
    }
  };

  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
}