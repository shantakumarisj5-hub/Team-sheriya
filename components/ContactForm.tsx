"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  Mail,
  Send,
} from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "Web Development",
  projectType: "Business Website",
  budget: "Not sure yet",
  timeline: "Flexible",
  message: "",
  privacyConsent: false,
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Unable to send your enquiry.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative border-t border-[#DBC3A8]/15 bg-transparent py-24 text-[#F7F2EC] md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-48 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#A89BBE]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          {/* Contact introduction */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#DBC3A8]">
              Start a conversation
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#F7F2EC] md:text-6xl">
              Bring the idea. We will help you give it direction.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#B9AFC2] md:text-base">
              Tell us what you are building, what it needs to achieve, and
              where you need support. We will respond with thoughtful next
              steps—not a generic sales reply.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:contact@teamsheriya.com"
                className="group flex items-center gap-4 border-b border-[#DBC3A8]/15 py-4 transition hover:border-[#DBC3A8]/50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#DBC3A8]/15 bg-[#A89BBE]/10 text-[#DBC3A8]">
                  <Mail size={18} />
                </span>

                <span>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-[#B9AFC2]">
                    Email us
                  </span>
                  <span className="mt-1 block text-sm font-medium text-[#F7F2EC] transition group-hover:text-[#DBC3A8]">
                    contact@teamsheriya.com
                  </span>
                </span>
              </a>

            </div>

            <p className="mt-8 text-xs leading-5 text-[#B9AFC2]">
              Please do not include passwords, payment information, or
              confidential credentials in this form.
            </p>
          </motion.div>

          {/* Form panel */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="border border-[#DBC3A8]/15 bg-[#2A2433]/65 p-5 shadow-2xl shadow-black/20 backdrop-blur-sm md:rounded-2xl md:p-8"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[480px] flex-col items-center justify-center text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#DBC3A8]/30 bg-[#DBC3A8]/10 text-[#DBC3A8]">
                  <CheckCircle2 size={32} />
                </span>

                <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-[#F7F2EC]">
                  Your enquiry is on its way.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#B9AFC2]">
                  Thank you for reaching out. TEAM SHERIYA will review your
                  details and respond as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-7 inline-flex items-center gap-2 border-b border-[#DBC3A8] pb-1 text-sm font-medium text-[#DBC3A8] transition hover:gap-3"
                >
                  Send another enquiry
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#DBC3A8]">
                    Project enquiry
                  </p>

                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.035em] text-[#F7F2EC]">
                    Tell us what you need.
                  </h3>

                  <p className="mt-2 text-sm text-[#B9AFC2]">
                    Fields marked with{" "}
                    <span className="text-[#DBC3A8]">*</span> are required.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <FieldLabel label="Your name" required htmlFor="name" />
                  <FieldLabel label="Work email" required htmlFor="email" />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={updateField}
                    placeholder="Your full name"
                    className="form-input"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={updateField}
                    placeholder="you@company.com"
                    className="form-input"
                  />

                  <FieldLabel label="Company or brand" htmlFor="company" />
                  <FieldLabel label="Service needed" htmlFor="service" />

                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={updateField}
                    placeholder="Your company name"
                    className="form-input"
                  />

                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={updateField}
                    className="form-input"
                  >
                    <option>Web Development</option>
                    <option>Full-Stack Development</option>
                    <option>UI/UX Design</option>
                    <option>Video Editing</option>
                    <option>Multiple services</option>
                    <option>Not sure yet</option>
                  </select>

                  <FieldLabel label="Project type" htmlFor="projectType" />
                  <FieldLabel label="Estimated budget" htmlFor="budget" />

                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={updateField}
                    className="form-input"
                  >
                    <option>Business Website</option>
                    <option>Landing Page</option>
                    <option>Web Application</option>
                    <option>Dashboard / Internal Tool</option>
                    <option>UI/UX Design System</option>
                    <option>Video / Content Campaign</option>
                    <option>Other</option>
                  </select>

                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={updateField}
                    className="form-input"
                  >
                    <option>Not sure yet</option>
                    <option>Under ₹25,000</option>
                    <option>₹25,000 – ₹50,000</option>
                    <option>₹50,000 – ₹1,00,000</option>
                    <option>₹1,00,000+</option>
                  </select>

                  <div className="md:col-span-2">
                    <FieldLabel label="Ideal timeline" htmlFor="timeline" />

                    <select
                      id="timeline"
                      name="timeline"
                      value={form.timeline}
                      onChange={updateField}
                      className="form-input"
                    >
                      <option>Flexible</option>
                      <option>As soon as possible</option>
                      <option>Within 2–4 weeks</option>
                      <option>Within 1–3 months</option>
                      <option>More than 3 months</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <FieldLabel
                      label="Tell us about the project"
                      required
                      htmlFor="message"
                    />

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={form.message}
                      onChange={updateField}
                      placeholder="What are you building? What should it achieve? Include important features, references, or deadlines."
                      className="form-input resize-y leading-6"
                    />
                  </div>
                </div>

                {status === "error" && (
                  <div
                    role="alert"
                    className="mt-5 flex items-start gap-3 border border-red-300/25 bg-red-400/10 p-4 text-sm text-red-100"
                  >
                    <CircleAlert size={18} className="mt-0.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <label className="mt-6 flex cursor-pointer items-start gap-3 text-xs leading-5 text-[#B9AFC2]">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    required
                    checked={form.privacyConsent}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        privacyConsent: event.target.checked,
                      }))
                    }
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#DBC3A8]"
                  />
                  <span>
                    I agree that Team Sheriya may use my enquiry details to reply
                    to this request, as described in the{" "}
                    <a href="/privacy-policy" className="text-[#DBC3A8] underline">
                      Privacy Policy
                    </a>.
                  </span>
                </label>

                <div className="mt-8 flex flex-col gap-5 border-t border-[#DBC3A8]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs leading-5 text-[#B9AFC2]">
                    We only use this form to respond to your project enquiry.
                  </p>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#DBC3A8] px-5 py-3 text-sm font-semibold text-[#201C26] transition hover:-translate-y-0.5 hover:bg-[#EFE0CD] hover:shadow-[0_0_28px_rgba(219,195,168,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending..." : "Send enquiry"}
                    <Send
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FieldLabel({
  label,
  htmlFor,
  required = false,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-[-8px] block text-sm font-medium text-[#EFE0CD]"
    >
      {label} {required && <span className="text-[#DBC3A8]">*</span>}
    </label>
  );
}
