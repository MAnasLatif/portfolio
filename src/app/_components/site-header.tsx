"use client";

import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "GitHub", href: "https://github.com/MAnasLatif" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manaslatif/" },
  { label: "Contact", href: "https://www.linkedin.com/in/manaslatif/" },
] as const;

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#03050a]/88 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="/"
          aria-label="M. Anas Latif, home"
          className="group flex items-center gap-3"
        >
          <span className="grid size-9 place-items-center border border-white/35 font-black text-sm text-white transition-colors group-hover:border-white">
            ML
          </span>
          <span className="hidden text-sm font-bold uppercase tracking-[0.16em] text-white/80 sm:block">
            M. Anas Latif
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center md:flex"
        >
          {navigation.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target={isExternalLink(item.href) ? "_blank" : undefined}
              rel={isExternalLink(item.href) ? "noreferrer" : undefined}
              className={`relative px-4 py-2 text-sm font-semibold transition-colors ${
                index === 0
                  ? "text-white after:absolute after:inset-x-4 after:-bottom-[13px] after:h-px after:bg-white"
                  : "text-white/55 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/manaslatif/"
            target="_blank"
            rel="noreferrer"
            className="hidden border border-white/18 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/75 transition-colors hover:border-white/50 hover:text-white sm:block"
          >
            Let's talk
          </a>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="grid size-9 place-items-center border border-white/18 text-white md:hidden"
          >
            <span className="relative block h-3.5 w-4" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform ${
                  isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-px w-4 bg-current transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-px w-4 bg-current transition-transform ${
                  isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`border-t border-white/8 bg-[#03050a] px-5 transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-80 opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-[1440px] py-3">
          {navigation.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target={isExternalLink(item.href) ? "_blank" : undefined}
              rel={isExternalLink(item.href) ? "noreferrer" : undefined}
              onClick={() => setIsMenuOpen(false)}
              className={`border-b border-white/8 py-4 text-sm font-bold uppercase tracking-[0.14em] last:border-0 ${
                index === 0 ? "text-white" : "text-white/55"
              }`}
            >
              <span className="mr-4 font-mono text-[10px] text-white/25">
                0{index + 1}
              </span>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
