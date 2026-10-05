"use client";

import { ArrowUpRight, Heart, Mail } from "lucide-react";

const links = [
  { label: "Services", id: "services" },
  { label: "Product partner", id: "product" },
  { label: "Selected work", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-white/10 bg-[#0d0b10] px-6 py-12 text-[#fffaf3] md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.25fr_0.75fr_0.75fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em]">TEAM SHERIYA</p>
            <p className="mt-5 max-w-sm text-lg leading-7 text-[#c8c0d1]">Digital experiences, products, and content with a clear purpose.</p>
            <div className="mt-7 flex gap-3">
              <a href="mailto:contact@teamsheriya.com" aria-label="Email Team Sheriya" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#c8c0d1] transition hover:border-[#ffb56b] hover:bg-[#ffb56b] hover:text-[#20181f]"><Mail size={17} /></a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb56b]">Explore</p>
            <div className="mt-5 flex flex-col items-start gap-3">
              {links.map((link) => <button key={link.id} type="button" onClick={() => scrollTo(link.id)} className="text-sm text-[#c8c0d1] transition hover:text-white">{link.label}</button>)}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb56b]">Have an idea?</p>
            <a href="mailto:contact@teamsheriya.com" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#ffb56b]">contact@teamsheriya.com <ArrowUpRight size={16} /></a>
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="mt-8 block text-sm text-[#c8c0d1] underline decoration-[#ffb56b]/50 underline-offset-4 transition hover:text-white">Back to top</button>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[#958b9f] md:flex-row">
          <p>© {new Date().getFullYear()} Team Sheriya. All rights reserved.</p>
          <p className="flex items-center gap-1">Made with <Heart size={12} className="fill-[#ffb56b] text-[#ffb56b]" /> for ambitious ideas.</p>
        </div>
      </div>
    </footer>
  );
}
