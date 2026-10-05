"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Layers3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const productViews = [
  {
    id: "launch",
    label: "Launchpad",
    eyebrow: "For a clearer first release",
    title: "Turn the idea into a product people can actually use.",
    copy: "We bring the offer, user journey, interface, and technical plan into one build-ready direction—so your first version has a job to do, not just screens to fill.",
    points: ["Product positioning", "Core user flows", "Clickable UI direction"],
    metric: "01",
    metricLabel: "Focused release",
  },
  {
    id: "system",
    label: "System",
    eyebrow: "For teams outgrowing quick fixes",
    title: "Replace scattered tools with one calm operating system.",
    copy: "From internal dashboards to customer portals, we map the handoffs and build the workflows that make the everyday work feel simpler.",
    points: ["Role-based dashboards", "Automation-ready workflows", "Scalable technical foundation"],
    metric: "02",
    metricLabel: "Connected workflows",
  },
  {
    id: "growth",
    label: "Growth",
    eyebrow: "For what happens after go-live",
    title: "Keep learning from the product after launch.",
    copy: "We help turn early feedback into practical improvements: clearer conversion paths, new features, content updates, and a roadmap worth following.",
    points: ["Conversion improvements", "Feature iteration", "Reliable ongoing support"],
    metric: "03",
    metricLabel: "Build, learn, evolve",
  },
];

export default function ProductPlatformSection() {
  const [activeId, setActiveId] = useState("launch");
  const active = productViews.find((view) => view.id === activeId) ?? productViews[0];

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="product" className="relative overflow-hidden border-y border-white/10 bg-[#16131d]/70 py-24 text-[#fffaf3] md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,174,92,0.17),transparent_26rem),radial-gradient(circle_at_12%_90%,rgba(192,149,255,0.14),transparent_27rem)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-4">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffb56b]">
              <Sparkles size={14} /> Product partnership
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-6xl lg:text-7xl">
              More than a website. A partner for the product you are growing.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#c8c0d1]">
              Inspired by the clarity of a product platform, Sheriya Product Partner combines strategy, design and engineering in one focused team.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-3 backdrop-blur-sm">
            {productViews.map((view) => {
              const isActive = activeId === view.id;
              return (
                <button
                  type="button"
                  key={view.id}
                  onClick={() => setActiveId(view.id)}
                  className={`w-full rounded-2xl px-5 py-5 text-left transition ${isActive ? "bg-[#ffb56b] text-[#20181f] shadow-[0_12px_36px_rgba(255,181,107,0.16)]" : "text-[#ddd5e5] hover:bg-white/[0.06]"}`}
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] opacity-70">0{productViews.indexOf(view) + 1}</span>
                  <span className="mt-2 block text-xl font-semibold tracking-[-0.03em]">{view.label}</span>
                  <span className="mt-1 block text-sm opacity-75">{view.eyebrow}</span>
                </button>
              );
            })}
          </div>

          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#221d2a] p-6 shadow-2xl shadow-black/20 md:p-9"
          >
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#b58cff]/15 blur-3xl" />
            <div className="relative grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb56b]">{active.eyebrow}</p>
                <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-5xl">{active.title}</h3>
                <p className="mt-6 max-w-xl text-sm leading-7 text-[#c8c0d1] md:text-base">{active.copy}</p>
                <ul className="mt-8 space-y-3">
                  {active.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-[#f5eefb]">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ffb56b] text-[#20181f]"><Check size={13} strokeWidth={3} /></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#17131d]/80 p-5 backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#b58cff]/20 text-[#d8c7ff]"><Layers3 size={17} /></span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#aaa0b7]">Sheriya / product</span>
                </div>
                <p className="mt-7 text-5xl font-semibold tracking-[-0.07em] text-[#ffb56b]">{active.metric}</p>
                <p className="mt-2 text-sm font-medium text-white">{active.metricLabel}</p>
                <div className="mt-8 space-y-3">
                  {[82, 64, 92].map((width, index) => <div key={index} className="h-2 rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-[#ffb56b] to-[#b58cff]" style={{ width: `${width}%` }} /></div>)}
                </div>
              </div>
            </div>
            <button type="button" onClick={scrollToContact} className="relative mt-10 inline-flex items-center gap-2 rounded-full border border-[#ffb56b]/40 px-5 py-3 text-sm font-semibold text-[#ffca96] transition hover:bg-[#ffb56b] hover:text-[#20181f]">
              Explore a product build <ArrowUpRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
