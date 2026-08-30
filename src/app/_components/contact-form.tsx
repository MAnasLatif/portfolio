"use client";

import TbSend from "@mal-icons/react/tb/TbSend";
import type { FormEvent } from "react";

const contactEmail = "m.anaslatif.dev@gmail.com";

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const body = [
      `From: ${firstName} ${lastName}`,
      `Email: ${senderEmail}`,
      "",
      message,
    ].join("\n");
    const params = new URLSearchParams({ subject, body });

    window.location.assign(`mailto:${contactEmail}?${params.toString()}`);
  };

  const fieldClassName =
    "w-full border-b border-white/18 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-white/55";
  const labelClassName =
    "block font-mono text-[9px] uppercase tracking-[0.24em] text-white/30";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-x-8 gap-y-6 sm:grid-cols-2"
    >
      <label className={labelClassName}>
        First name
        <input
          className={fieldClassName}
          name="firstName"
          type="text"
          autoComplete="given-name"
          placeholder="Your first name"
          required
        />
      </label>
      <label className={labelClassName}>
        Last name
        <input
          className={fieldClassName}
          name="lastName"
          type="text"
          autoComplete="family-name"
          placeholder="Your last name"
          required
        />
      </label>
      <label className={`${labelClassName} sm:col-span-2`}>
        Email address
        <input
          className={fieldClassName}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
      </label>
      <label className={`${labelClassName} sm:col-span-2`}>
        Subject
        <input
          className={fieldClassName}
          name="subject"
          type="text"
          placeholder="Project discussion"
          required
        />
      </label>
      <label className={`${labelClassName} sm:col-span-2`}>
        Message
        <textarea
          className={`${fieldClassName} min-h-36 resize-y`}
          name="message"
          placeholder="Tell me about your project or idea..."
          required
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 border border-white/55 px-6 text-xs font-bold text-white transition-colors hover:bg-white hover:text-[#080a0f]"
        >
          Send message
          <TbSend size={15} />
        </button>
        <p className="mt-4 font-mono text-[8px] uppercase leading-5 tracking-[0.18em] text-white/20">
          Submitting opens your email app. Your information is not stored by
          this site.
        </p>
      </div>
    </form>
  );
}
