"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const initialForm = { name: "", email: "", service: "Web Development", budget: "Not sure yet", message: "", privacyConsent: false };

export default function SheriyaEnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const update = (key: keyof typeof form, value: string | boolean) => setForm({ ...form, [key]: value });

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setStatus("sending"); setError("");
    try {
      const response = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "We could not send your enquiry.");
      setForm(initialForm); setStatus("success");
    } catch (reason) { setStatus("error"); setError(reason instanceof Error ? reason.message : "We could not send your enquiry."); }
  };

  if (status === "success") return <div className="sheriya-enquiry-success" role="status"><CheckCircle2 size={34} /><h3>Your enquiry is on its way.</h3><p>Thank you. Team Sheriya will review the details and get back to you shortly.</p><button type="button" onClick={() => setStatus("idle")}>Send another enquiry</button></div>;

  return <form className="sheriya-enquiry-form" onSubmit={submit}>
    <div className="sheriya-enquiry-grid">
      <label>Your name<input required name="name" value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></label>
      <label>Work email<input required type="email" name="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" /></label>
      <label>What do you need?<select name="service" value={form.service} onChange={(e) => update("service", e.target.value)}><option>Web Development</option><option>Full-Stack Development</option><option>UI/UX Design</option><option>Video Editing</option><option>Multiple services</option></select></label>
      <label>Estimated budget<select name="budget" value={form.budget} onChange={(e) => update("budget", e.target.value)}><option>Not sure yet</option><option>Under ₹25,000</option><option>₹25,000 – ₹50,000</option><option>₹50,000 – ₹1,00,000</option><option>₹1,00,000+</option></select></label>
      <label className="sheriya-enquiry-message">Tell us about the project<textarea required name="message" rows={5} minLength={10} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="What are you building and what should it achieve?" /></label>
    </div>
    <label className="sheriya-enquiry-consent"><input required type="checkbox" checked={form.privacyConsent} onChange={(e) => update("privacyConsent", e.target.checked)} /><span>I agree that Team Sheriya may use these details to reply to my enquiry, as described in the <a href="/privacy-policy">Privacy Policy</a>.</span></label>
    {status === "error" && <p className="sheriya-enquiry-error" role="alert">{error}</p>}
    <button className="sheriya-enquiry-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry"} <ArrowRight size={17} /></button>
  </form>;
}
