"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Websites that earn attention",
    label: "Web development",
    description:
      "High-performance, conversion-focused websites for businesses that need to look established and be easy to choose.",
    details: "Next.js / Responsive / SEO-ready",
  },
  {
    number: "02",
    title: "Products that simplify work",
    label: "Full-stack development",
    description:
      "Custom applications, dashboards, and workflows built around how your team actually operates.",
    details: "React / APIs / Databases / Admin systems",
  },
  {
    number: "03",
    title: "Interfaces people understand",
    label: "UI/UX design",
    description:
      "Clear user journeys and polished interface systems that reduce friction and strengthen trust.",
    details: "UX flows / UI design / Design systems",
  },
  {
    number: "04",
    title: "Content with a sharper point of view",
    label: "Video editing",
    description:
      "Video content with intentional pacing, structure, captions, and visual rhythm for brands and campaigns.",
    details: "Social edits / Launch content / Motion",
  },
];

export default function ServicesSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="relative border-t border-white/10 bg-transparent py-24 text-[#F4F6F8] md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Deliberately asymmetric heading */}
        <div className="grid gap-8 border-b border-white/10 pb-12 md:grid-cols-12 md:items-end md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#00F2FE]">
              Capabilities / 01—04
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="md:col-span-8"
          >
            <h2 className="max-w-4xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl lg:text-7xl">
              Design, technology, and content—built around the next move your
              business needs to make.
            </h2>
          </motion.div>
        </div>

        {/* Not a card grid: editorial service rows */}
        <div>
          {services.map((service, index) => (
            <motion.button
              key={service.number}
              type="button"
              onClick={scrollToContact}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group grid w-full gap-5 border-b border-white/10 py-8 text-left transition md:grid-cols-12 md:items-start md:gap-8 md:py-10"
            >
              <span className="font-mono text-xs tracking-[0.16em] text-[#00F2FE] md:col-span-1">
                {service.number}
              </span>

              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#8E9AAF]">
                  {service.label}
                </p>

                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.035em] text-[#F4F6F8] transition group-hover:text-[#00F2FE] md:text-3xl">
                  {service.title}
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="max-w-xl text-sm leading-7 text-[#8E9AAF] md:text-base">
                  {service.description}
                </p>

                <p className="mt-5 text-xs tracking-[0.08em] text-slate-300">
                  {service.details}
                </p>
              </div>

              <div className="flex justify-start md:col-span-2 md:justify-end">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#F4F6F8] transition duration-300 group-hover:border-[#00F2FE] group-hover:bg-[#00F2FE] group-hover:text-[#0B0C10]">
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <p className="max-w-xl text-sm leading-6 text-[#8E9AAF]">
            Need more than one service? We shape a focused delivery plan around
            your goals, timeline, and current stage.
          </p>

          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex w-fit items-center gap-2 border-b border-[#00F2FE] pb-1 text-sm font-medium text-[#00F2FE] transition hover:gap-3"
          >
            Discuss your project
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}