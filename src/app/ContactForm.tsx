"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      {status === "success" && (
        <p className="notice" role="status">Message sent. I&apos;ll reply by email.</p>
      )}
      {status === "error" && (
        <p className="notice bad" role="alert">The message didn&apos;t send. Please try again.</p>
      )}
      <div className="row">
        <label className="field">Name
          <input name="name" required autoComplete="name" />
        </label>
        <label className="field">Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <label className="field">Subject
        <input name="subject" placeholder="Project inquiry" />
      </label>
      <label className="field">Message
        <textarea name="message" rows={4} required />
      </label>
      <button className="btn" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
