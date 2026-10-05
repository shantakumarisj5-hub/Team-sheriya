"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Services", id: "services" },
  { label: "Product", id: "product" },
  { label: "Projects", id: "projects" },
  { label: "Team", id: "team" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 88;
      const top =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", `/#${id}`);
    }

    setIsOpen(false);
  };

  const goHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", "/");
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0b0c10]/85 shadow-[0_12px_32px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          type="button"
          onClick={goHome}
          className="group text-left focus:outline-none"
          aria-label="Go to homepage"
        >
          <span className="block text-sm font-semibold tracking-[0.18em] text-white transition group-hover:text-[#ffb56b]">
            TEAM SHERIYA
          </span>
          <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
            Digital Studio
          </span>
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-slate-300 transition hover:text-[#ffb56b] focus:outline-none focus-visible:text-[#ffb56b]"
            >
              {item.label}
            </button>
          ))}

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 rounded-full bg-[#ffb56b] px-4 py-2.5 text-sm font-semibold text-[#20181f] transition hover:bg-[#ffd0a3] hover:shadow-[0_0_28px_rgba(255,181,107,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb56b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c10]"
          >
            Start a project
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2.5 text-white transition hover:border-[#ffb56b]/40 hover:text-[#ffb56b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb56b] md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0b0c10]/95 px-6 pb-6 pt-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-[#ffb56b]"
              >
                {item.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[#ffb56b] px-4 py-3 text-sm font-semibold text-[#20181f] transition hover:bg-[#ffd0a3]"
            >
              Start a project
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
