"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Stats", href: "/stats" },
  { label: "Utilities", href: "/utilities" },
  { label: "Blogs", href: "/blogs" },
  { label: "Books", href: "/books" },
  { label: "Certificates", href: "/certificates" },
  { label: "Projects", href: "/projects" },
] as const;

function isCurrentRoute(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#03050a]/88 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-360 items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="M. Anas Latif, home"
          className="group flex shrink-0 items-center gap-3"
        >
          <span className="grid size-9 place-items-center border border-white/35 text-sm font-black text-white transition-colors group-hover:border-white">
            ML
          </span>
          <span className="hidden text-sm font-bold uppercase tracking-[0.16em] text-white/80 2xl:block">
            M. Anas Latif
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center lg:flex"
        >
          {navigation.map((item) => {
            const isCurrent = isCurrentRoute(pathname, item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`relative px-3 py-2 text-[13px] font-semibold transition-colors xl:px-4 ${
                  isCurrent
                    ? "text-white after:absolute after:inset-x-3 after:-bottom-3.25 after:h-px after:bg-white xl:after:inset-x-4"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
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
            className="grid size-9 place-items-center border border-white/18 text-white lg:hidden"
          >
            <span className="relative block h-3.5 w-4" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-4 bg-current transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-3 h-px w-4 bg-current transition-transform ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
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
        className={`border-t border-white/8 bg-[#03050a] px-5 transition-[max-height,opacity] duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-160 overflow-y-auto opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-360 grid-cols-1 py-3 sm:grid-cols-2 sm:gap-x-8">
          {navigation.map((item, index) => {
            const isCurrent = isCurrentRoute(pathname, item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
                className={`border-b border-white/8 py-4 text-sm font-bold uppercase tracking-[0.14em] ${
                  isCurrent ? "text-white" : "text-white/50"
                }`}
              >
                <span className="mr-4 font-mono text-[10px] text-white/25">
                  0{index + 1}
                </span>
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
