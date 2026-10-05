"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Layers3,
  Palette,
  Video,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web Development",
    description:
      "High-performance websites built to make your business credible, discoverable, and easy to choose.",
    outcomes: [
      "Fast, responsive Next.js websites",
      "SEO-ready technical foundation",
      "Clear conversion-focused pages",
    ],
    accent: "from-blue-500/20 to-cyan-400/5",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Full-Stack Development",
    description:
      "Reliable web applications, dashboards, and internal tools designed around the way your business works.",
    outcomes: [
      "Secure frontend and backend systems",
      "Admin dashboards and workflows",
      "Scalable databases and integrations",
    ],
    accent: "from-cyan-500/20 to-emerald-400/5",
  },
  {
    number: "03",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interfaces that turn complexity into clarity and make your product feel trustworthy from the first click.",
    outcomes: [
      "User flows and wireframes",
      "High-fidelity interface design",
      "Reusable design systems",
    ],
    accent: "from-violet-500/20 to-blue-400/5",
  },
  {
    number: "04",
    icon: Video,
    title: "Video Editing",
    description:
      "Sharp, purposeful video content for launches, social channels, campaigns, and brand storytelling.",
    outcomes: [
      "Short-form and social video edits",
      "Product and promotional videos",
      "Pacing, captions, and motion graphics",
    ],
    accent: "from-fuchsia-500/20 to-violet-400/5",
  },
];


export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b0f14] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:56px_56px]" />
          <div className="absolute -top-48 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-cyan-300"
          >
            Services / 01—04
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="max-w-5xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl lg:text-7xl"
          >
            Digital work that makes your business easier to trust, use, and grow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-7 max-w-2xl text-base leading-7 text-slate-400 md:text-lg"
          >
            From premium marketing sites to full-stack products and creative
            content, TEAM SHERIYA brings strategy, design, and development
            together in one focused team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 hover:shadow-[0_0_28px_rgba(103,232,249,0.28)]"
            >
              Discuss your project
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.06] md:p-8"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                        <Icon size={22} />
                      </div>

                      <span className="text-xs font-medium tracking-[0.2em] text-slate-500">
                        {service.number}
                      </span>
                    </div>

                    <h2 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">
                      {service.title}
                    </h2>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                      {service.description}
                    </p>

                    <ul className="mt-7 space-y-3">
                      {service.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-3 text-sm text-slate-300"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-cyan-300"
                          />
                          {outcome}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200"
                    >
                      Discuss this service
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-white/10 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-transparent p-8 md:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Have a specific project?
            </p>

            <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                  Let’s build something your customers remember.
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-400 md:text-base">
                  Tell us what you are planning. We will help you identify the
                  fastest, highest-impact way to move forward.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Start a project
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
