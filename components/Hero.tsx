"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Play,
  Sparkles,
} from "lucide-react";

const stats = [
  { number: "15+", label: "Projects delivered" },
  { number: "10+", label: "Clients supported" },
  { number: "1+", label: "Years building" },
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    const navbarHeight = 88;
    const top =
      section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-transparent pb-16 pt-28 text-[#F7F2EC] md:pb-20 md:pt-36"
    >
      {/* Soft premium background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(168,155,190,0.20),transparent_28%),radial-gradient(circle_at_12%_78%,rgba(219,195,168,0.13),transparent_30%)]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#DBC3A8_1px,transparent_1px),linear-gradient(to_bottom,#DBC3A8_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="absolute left-1/2 top-[8%] h-72 w-72 -translate-x-1/2 rounded-full bg-[#A89BBE]/15 blur-3xl md:h-[30rem] md:w-[30rem]" />

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#201C26] to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Hero copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#A89BBE]/35 bg-[#A89BBE]/15 px-3 py-1.5 text-xs font-medium text-[#EFE0CD]"
            >
              <Sparkles size={15} />
              Premium web, product, and creative studio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.055em] text-[#F7F2EC] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Build a digital presence your customers trust at first glance.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-6 max-w-xl text-base leading-7 text-[#B9AFC2] md:text-lg"
            >
              TEAM SHERIYA designs and builds premium websites, full-stack
              applications, UI/UX systems, and video content for businesses
              ready to grow with confidence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DBC3A8] px-5 py-3 text-sm font-semibold text-[#201C26] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EFE0CD] hover:shadow-[0_0_28px_rgba(219,195,168,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBC3A8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#201C26]"
              >
                Start a project
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#DBC3A8]/25 px-5 py-3 text-sm font-medium text-[#F7F2EC] transition duration-300 hover:border-[#DBC3A8]/70 hover:bg-[#DBC3A8]/10 hover:text-[#EFE0CD] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBC3A8]"
              >
                <Play
                  size={16}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                View selected work
              </button>
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#B9AFC2]"
            >
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#DBC3A8]" />
                Strategy-led design
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#DBC3A8]" />
                Clean, scalable code
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#DBC3A8]" />
                Clear communication
              </span>
            </motion.div>
          </div>

          {/* Custom product visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18 }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div className="absolute -inset-8 rounded-[2.5rem] bg-[#A89BBE]/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-[#DBC3A8]/15 bg-[#2A2433]/80 p-4 shadow-2xl shadow-black/30 backdrop-blur-sm">
              {/* Browser header */}
              <div className="flex items-center justify-between border-b border-[#DBC3A8]/15 px-2 pb-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#B89A7B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#DBC3A8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#A89BBE]" />
                </div>

                <span className="rounded-full border border-[#DBC3A8]/15 px-3 py-1 text-[10px] tracking-[0.16em] text-[#B9AFC2]">
                  TEAM SHERIYA / DIGITAL STUDIO
                </span>
              </div>

              {/* Interface visual */}
              <div className="mt-4 rounded-2xl border border-[#DBC3A8]/15 bg-gradient-to-br from-[#2A2433] via-[#362E42] to-[#201C26] p-5 md:p-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#DBC3A8]">
                      Digital system
                    </p>

                    <div className="mt-3 h-4 w-40 rounded bg-[#F7F2EC]/90 md:w-52" />
                    <div className="mt-2 h-3 w-28 rounded bg-[#F7F2EC]/25 md:w-36" />
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DBC3A8]/20 bg-[#A89BBE]/15 text-[#DBC3A8]">
                    <Code2 size={19} />
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  {[
                    { label: "Design", value: "92%" },
                    { label: "Build", value: "76%" },
                    { label: "Launch", value: "Ready" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-[#DBC3A8]/10 bg-[#201C26]/45 p-3"
                    >
                      <p className="text-[10px] text-[#B9AFC2]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#F7F2EC]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-[#DBC3A8]/10 bg-[#201C26]/35 p-4">
                  <div className="flex h-24 items-end gap-2">
                    {[35, 56, 45, 74, 61, 88, 70, 96].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 8, opacity: 0 }}
                          animate={{ height, opacity: 1 }}
                          transition={{
                            duration: 0.65,
                            delay: 0.6 + index * 0.07,
                          }}
                          className="flex-1 rounded-t bg-gradient-to-t from-[#A89BBE]/35 to-[#DBC3A8]"
                        />
                      )
                    )}
                  </div>

                  <div className="mt-4 h-2 w-2/3 rounded-full bg-[#F7F2EC]/10" />
                </div>
              </div>

              {/* Availability card */}
              <motion.div
                initial={{ opacity: 0, x: 14, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-7 right-7 rounded-2xl border border-[#DBC3A8]/15 bg-[#201C26]/90 p-3.5 shadow-xl backdrop-blur"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#B9AFC2]">
                  Availability
                </p>

                <p className="mt-1.5 flex items-center gap-2 text-xs font-medium text-[#DBC3A8]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#DBC3A8]" />
                  Taking selected projects
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48 }}
          className="mt-14 grid max-w-3xl grid-cols-3 divide-x divide-[#DBC3A8]/15 border-y border-[#DBC3A8]/15 py-6 md:mt-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="px-3 text-center md:px-6">
              <p className="text-2xl font-semibold tracking-[-0.03em] text-[#DBC3A8] md:text-3xl">
                {stat.number}
              </p>

              <p className="mt-1 text-[11px] leading-4 text-[#B9AFC2] md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}