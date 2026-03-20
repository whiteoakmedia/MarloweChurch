"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      // mailto fallback — no backend needed
      const subject = encodeURIComponent(`Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`
      );
      window.location.href = `mailto:marloweag@gmail.com?subject=${subject}&body=${body}`;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-church-dark mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-church-dark placeholder:text-church-gray/50 focus:border-church-green focus:ring-2 focus:ring-church-green/20 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-church-dark mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-church-dark placeholder:text-church-gray/50 focus:border-church-green focus:ring-2 focus:ring-church-green/20 transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-church-dark mb-2">
          Phone <span className="text-church-gray/60 font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-church-dark placeholder:text-church-gray/50 focus:border-church-green focus:ring-2 focus:ring-church-green/20 transition-colors"
          placeholder="(304) 555-1234"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-church-dark mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-church-dark placeholder:text-church-gray/50 focus:border-church-green focus:ring-2 focus:ring-church-green/20 transition-colors resize-none"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto px-10 py-3.5 bg-church-green text-white font-semibold rounded-full hover:bg-church-green-dark transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "sent" && (
        <p className="text-church-green font-medium text-sm">
          Your email client should open with a pre-filled message. If it didn&apos;t, please email us directly at marloweag@gmail.com.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-medium text-sm">
          Something went wrong. Please email us directly at marloweag@gmail.com.
        </p>
      )}
    </form>
  );
}
