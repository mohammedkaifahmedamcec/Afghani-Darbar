"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1F1611]/95 backdrop-blur-md py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="/"
            className="font-serif text-2xl font-semibold tracking-wide text-[#FDFBF7]"
          >
            Afghan <span className="text-[#B89B72]">Darbar</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[#FDFBF7]/80 transition-colors hover:text-[#B89B72]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#location"
              className="inline-flex items-center justify-center rounded-full bg-[#C05A3E] px-6 py-3 text-xs font-medium tracking-wide text-[#FDFBF7] transition-all duration-300 hover:bg-[#A8492F]"
            >
              Order Now
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-[#FDFBF7] md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-[#1F1611] transition-transform duration-500 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <span className="font-serif text-2xl font-semibold text-[#FDFBF7]">
            Afghan <span className="text-[#B89B72]">Darbar</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-[#FDFBF7]"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <ul className="mt-8 flex flex-col gap-2 px-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-[#B89B72]/10 py-4 font-serif text-3xl text-[#FDFBF7] transition-colors hover:text-[#B89B72]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 px-5">
          <a
            href="#location"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-full bg-[#C05A3E] px-7 py-3.5 text-sm font-medium tracking-wide text-[#FDFBF7]"
          >
            Order Now
          </a>
        </div>
      </div>
    </>
  );
}