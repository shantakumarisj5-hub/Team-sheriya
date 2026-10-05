"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "Web Development",
    title: "A sharper digital front door for a growing business.",
    summary:
      "A premium website experience designed to make the brand feel established, communicate value quickly, and turn attention into enquiries.",
    tags: ["Strategy", "UI/UX", "Next.js"],
    visual: "website",
  },
  {
    number: "02",
    category: "Full-Stack Product",
    title: "A calmer system for complex operations.",
    summary:
      "A custom dashboard and workflow experience that brings fragmented work into one clear, usable product environment.",
    tags: ["Product Design", "Dashboard", "Development"],
    visual: "product",
  },
  {
    number: "03",
    category: "Creative Content",
    title: "Video content built for momentum, not noise.",
    summary:
      "A flexible content system for launches, social media, and campaigns—built around clear narrative, pacing, and brand recall.",
    tags: ["Video Editing", "Motion", "Campaigns"],
    visual: "video",
  },
];

function WebsiteVisual() {
  return (
    <div className="relative h-full min-h-[300px] overflow-hidden bg-[#111820] p-5 md:p-7">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#00F2FE]/10 blur-3xl" />

      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c10]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/80" />
            <span className="h-2 w-2 rounded-full bg-amber-300/80" />
            <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
          </div>

          <span className="text-[9px] tracking-[0.16em] text-[#8E9AAF]">
            WEB EXPERIENCE
          </span>
        </div>

        <div className="relative px-6 pb-6 pt-9 md:px-9 md:pt-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#00F2FE]">
            Brand system
          </p>

          <div className="mt-5 max-w-[80%]">
            <div className="h-5 w-full rounded-sm bg-[#F4F6F8]" />
            <div className="mt-3 h-5 w-4/5 rounded-sm bg-[#F4F6F8]/65" />
            <div className="mt-3 h-5 w-3/5 rounded-sm bg-[#F4F6F8]/25" />
          </div>

          <div className="mt-10 flex items-end gap-3">
            <div className="h-20 flex-1 rounded-lg bg-gradient-to-tr from-[#00F2FE]/25 to-[#00F2FE]/65" />
            <div className="h-32 flex-[1.4] rounded-lg border border-white/10 bg-white/[0.04]" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-7 text-[10px] uppercase tracking-[0.18em] text-[#8E9AAF]">
        2026 / Digital identity
      </div>
    </div>
  );
}

function ProductVisual() {
  return (
    <div className="relative h-full min-h-[300px] overflow-hidden bg-[#0e151d] p-5 md:p-7">
      <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#00F2FE]/10 blur-3xl" />

      <div className="relative rounded-2xl border border-white/10 bg-[#0b0c10] p-4 md:p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="h-2.5 w-24 rounded-full bg-white/25" />

          <div className="flex gap-2">
            <div className="h-6 w-6 rounded-lg bg-white/[0.05]" />
            <div className="h-6 w-6 rounded-lg bg-[#00F2FE]/15" />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {["23", "84%", "12"].map((value, index) => (
            <div
              key={value}
              className="rounded-xl border border-white/10 bg-white/[0.035] p-3"
            >
              <p className="text-[9px] uppercase tracking-[0.14em] text-[#8E9AAF]">
                {["Tasks", "Progress", "Teams"][index]}
              </p>
              <p className="mt-3 text-xl font-semibold text-[#F4F6F8]">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex h-28 items-end gap-2">
            {[28, 42, 38, 62, 54, 82, 70, 94].map((height, index) => (
              <div
                key={index}
                style={{ height: `${height}%` }}
                className="flex-1 rounded-t bg-gradient-to-t from-[#00F2FE]/20 to-[#00F2FE]/75"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-7 text-[10px] uppercase tracking-[0.18em] text-[#8E9AAF]">
        Product system / 02
      </div>
    </div>
  );
}

function VideoVisual() {
  return (
    <div className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden bg-[#12181e]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,242,254,0.18),transparent_28%),radial-gradient(circle_at_78%_76%,rgba(0,160,180,0.18),transparent_30%)]" />

      <div className="relative w-[46%] min-w-[150px] overflow-hidden rounded-2xl border border-white/15 bg-[#0b0c10] shadow-2xl">
        <div className="aspect-[9/16] bg-gradient-to-b from-[#00F2FE]/40 via-[#16303b] to-[#0b0c10]">
          <div className="p-4">
            <div className="h-2 w-16 rounded-full bg-white/65" />
            <div className="mt-3 h-2 w-24 rounded-full bg-white/30" />
          </div>

          <div className="absolute bottom-8 left-4 right-4">
            <div className="h-2 w-4/5 rounded-full bg-white/70" />
            <div className="mt-2 h-2 w-3/5 rounded-full bg-white/35" />
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-white/10 p-3">
          <Play size={13} className="fill-[#00F2FE] text-[#00F2FE]" />
          <div className="h-1.5 flex-1 rounded-full bg-white/15">
            <div className="h-full w-2/5 rounded-full bg-[#00F2FE]" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-7 text-[10px] uppercase tracking-[0.18em] text-[#8E9AAF]">
        Motion / Storytelling
      </div>
    </div>
  );
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "product") return <ProductVisual />;
  if (type === "video") return <VideoVisual />;
  return <WebsiteVisual />;
}

export default function ProjectsSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="relative border-t border-white/10 bg-transparent py-24 text-[#F4F6F8] md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Editorial heading */}
        <div className="grid gap-8 border-b border-white/10 pb-12 md:grid-cols-12 md:items-end md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="md:col-span-4"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#00F2FE]">
              Selected work / 2026
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
              Work made to clarify the offer, strengthen the brand, and create
              momentum.
            </h2>
          </motion.div>
        </div>

        {/* Large editorial work rows */}
        <div className="mt-12 space-y-16 md:mt-16 md:space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
              className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Media / visual */}
              <div
                className={`group overflow-hidden rounded-2xl border border-white/10 bg-[#11131A]/70 shadow-2xl shadow-black/20 lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="transition duration-700 group-hover:scale-[1.02]">
                  <ProjectVisual type={project.visual} />
                </div>
              </div>

              {/* Text */}
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs tracking-[0.16em] text-[#00F2FE]">
                    {project.number}
                  </span>

                  <span className="text-xs uppercase tracking-[0.16em] text-[#8E9AAF]">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#F4F6F8] md:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-[#8E9AAF] md:text-base">
                  {project.summary}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={scrollToContact}
                  className="group mt-8 inline-flex items-center gap-2 border-b border-[#00F2FE] pb-1 text-sm font-medium text-[#00F2FE] transition hover:gap-3"
                >
                  Build something like this
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing proof line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 md:mt-28 md:flex-row md:items-center"
        >
          <p className="max-w-xl text-sm leading-6 text-[#8E9AAF]">
            These are representative project directions. Every engagement is
            tailored to the brand, business objective, and audience in front of
            us.
          </p>

          <div className="inline-flex items-center gap-2 text-sm text-[#00F2FE]">
            <Sparkles size={16} />
            Available for selected new projects
          </div>
        </motion.div>
      </div>
    </section>
  );
}