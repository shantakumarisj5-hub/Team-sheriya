"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Compass,
  PenTool,
  Rocket,
  TrendingUp,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    label: "Discover",
    title: "Find the real problem before designing the solution.",
    description:
      "We start by understanding your business, audience, goals, current challenges, and the decision your visitor or user needs to make.",
    detail: "Goals / audience / scope",
    icon: Compass,
  },
  {
    number: "02",
    label: "Design",
    title: "Turn the right strategy into a clear experience.",
    description:
      "We shape content hierarchy, user flows, interface direction, and the visual system before development starts.",
    detail: "Structure / UI / user journeys",
    icon: PenTool,
  },
  {
    number: "03",
    label: "Build",
    title: "Engineer the experience with care.",
    description:
      "We build responsive, maintainable pages and product systems with performance, accessibility, and future updates in mind.",
    detail: "Next.js / systems / performance",
    icon: Code2,
  },
  {
    number: "04",
    label: "Launch",
    title: "Ship with confidence, not crossed fingers.",
    description:
      "Before going live, we check the important details: content, responsiveness, interactions, forms, SEO basics, and the launch path.",
    detail: "QA / deployment / handoff",
    icon: Rocket,
  },
  {
    number: "05",
    label: "Evolve",
    title: "Keep improving what the market responds to.",
    description:
      "After launch, we can refine the experience, add features, improve conversion paths, and support your next stage of growth.",
    detail: "Iteration / growth / support",
    icon: TrendingUp,
  },
];

export default function ProcessSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="process"
      className="relative border-t border-white/10 bg-transparent py-24 text-[#F4F6F8] md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Editorial section introduction */}
        <div className="grid gap-8 border-b border-white/10 pb-12 md:grid-cols-12 md:items-end md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="md:col-span-4"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#00F2FE]">
              Working together / 01—05
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="md:col-span-8"
          >
            <h2 className="max-w-4xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl lg:text-7xl">
              A process with enough structure to move fast—and enough thinking
              to move in the right direction.
            </h2>
          </motion.div>
        </div>

        {/* Process line */}
        <div className="relative mt-12 md:mt-16">
          {/* Desktop vertical line */}
          <div className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-gradient-to-b from-[#00F2FE]/40 via-white/10 to-transparent md:block" />

          <div className="space-y-0">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group relative grid gap-6 border-b border-white/10 py-10 last:border-b-0 md:grid-cols-12 md:gap-8 md:py-12"
                >
                  {/* Number and node */}
                  <div className="relative flex items-start gap-4 md:col-span-3">
                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#00F2FE]/30 bg-[#0B0C10] text-[#00F2FE] shadow-[0_0_24px_rgba(0,242,254,0.08)]">
                      <Icon size={18} />
                    </span>

                    <div className="pt-1.5">
                      <p className="font-mono text-xs tracking-[0.18em] text-[#00F2FE]">
                        {step.number}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#8E9AAF]">
                        {step.label}
                      </p>
                    </div>
                  </div>

                  {/* Main process title */}
                  <div className="md:col-span-5">
                    <h3 className="max-w-lg font-[family-name:var(--font-display)] text-2xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#F4F6F8] transition duration-300 group-hover:text-[#00F2FE] md:text-3xl">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col justify-between gap-5 md:col-span-4">
                    <p className="text-sm leading-7 text-[#8E9AAF]">
                      {step.description}
                    </p>

                    <p className="text-xs uppercase tracking-[0.14em] text-slate-300">
                      {step.detail}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* End CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 md:mt-16 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#00F2FE]">
              Start at step one
            </p>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#8E9AAF]">
              You do not need to arrive with every answer. Bring the goal, the
              context, and the problem you want to solve—we will help shape the
              right route forward.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToContact}
            className="group inline-flex w-fit items-center gap-2 border-b border-[#00F2FE] pb-1 text-sm font-medium text-[#00F2FE] transition hover:gap-3"
          >
            Start the conversation
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </motion.div>

        {/* Small transition mark */}
        <div className="mt-14 flex justify-center md:mt-20">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#00F2FE]">
            <ArrowDownRight size={17} />
          </span>
        </div>
      </div>
    </section>
  );
}