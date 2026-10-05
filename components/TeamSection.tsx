"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Tarunkumar S",
    role: "Founder · Full-Stack Developer",
    image: "/images/team/tarun.jpeg",
    bio: "Builds scalable web products, backend systems, and automation workflows that help businesses operate with clarity.",
    skills: ["Full-Stack", "Backend", "Automation"],
    github: "#",
    linkedin: "#",
    email: "mailto:contact@teamsheriya.com",
  },
  {
    name: "Shantakumari S J",
    role: "Co-Founder · UI/UX Designer",
    image: "/images/team/shantakumari.jpeg",
    bio: "Designs thoughtful, user-friendly interfaces that make digital products feel clear, distinctive, and easy to trust.",
    skills: ["UI/UX", "Frontend", "Brand Systems"],
    github: "#",
    linkedin: "#",
    email: "mailto:contact@teamsheriya.com",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative border-t border-[#DBC3A8]/15 bg-transparent py-24 text-[#F7F2EC] md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 border-b border-[#DBC3A8]/15 pb-12 md:grid-cols-12 md:items-end md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="md:col-span-4"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#DBC3A8]">
              The studio
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
              A small studio with a clear standard for how digital work should
              feel.
            </h2>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-[#DBC3A8]/15 bg-[#2A2433]/55 p-5 transition duration-300 hover:border-[#DBC3A8]/35 hover:bg-[#2A2433]/75 md:p-6"
            >
              <div className="flex items-start gap-5">
                {/* Medium profile photo */}
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-[#DBC3A8]/20 bg-[#362E42] shadow-lg md:h-28 md:w-28">
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    width={224}
                    height={224}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="min-w-0 pt-1">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#B9AFC2]">
                    {index === 0 ? "01 / Founder" : "02 / Co-Founder"}
                  </p>

                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.035em] text-[#F7F2EC]">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#DBC3A8]">{member.role}</p>
                </div>
              </div>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#B9AFC2]">
                {member.bio}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#DBC3A8]/15 bg-[#201C26]/25 px-3 py-1.5 text-[11px] text-[#EFE0CD]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-[#DBC3A8]/10 pt-5">
                <div className="flex gap-2.5">
                  <a
                    href={member.github}
                    aria-label={`${member.name} GitHub`}
                    className="rounded-full border border-[#DBC3A8]/15 p-2.5 text-[#B9AFC2] transition hover:border-[#DBC3A8]/50 hover:bg-[#DBC3A8]/10 hover:text-[#DBC3A8]"
                  >
                    <Github size={16} />
                  </a>

                  <a
                    href={member.linkedin}
                    aria-label={`${member.name} LinkedIn`}
                    className="rounded-full border border-[#DBC3A8]/15 p-2.5 text-[#B9AFC2] transition hover:border-[#DBC3A8]/50 hover:bg-[#DBC3A8]/10 hover:text-[#DBC3A8]"
                  >
                    <Linkedin size={16} />
                  </a>

                  <a
                    href={member.email}
                    aria-label={`Email ${member.name}`}
                    className="rounded-full border border-[#DBC3A8]/15 p-2.5 text-[#B9AFC2] transition hover:border-[#DBC3A8]/50 hover:bg-[#DBC3A8]/10 hover:text-[#DBC3A8]"
                  >
                    <Mail size={16} />
                  </a>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-[#B9AFC2] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#DBC3A8]"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}