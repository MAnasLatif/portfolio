"use client";

import TbMenu2 from "@mal-icons/react/tb/TbMenu2";
import TbSend from "@mal-icons/react/tb/TbSend";
import TbX from "@mal-icons/react/tb/TbX";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blogs" },
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
          <span className="grid size-9 place-items-center border border-white/35 transition-colors group-hover:border-white">
            <Image
              src="/mal.svg"
              alt=""
              width={28}
              height={28}
              priority
              className="size-7"
            />
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
            className="hidden items-center gap-2 border border-white/18 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/75 transition-colors hover:border-white/50 hover:text-white sm:inline-flex"
          >
            Let's talk
            <TbSend size={14} />
          </a>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="grid size-9 place-items-center border border-white/18 text-white lg:hidden"
          >
            {isMenuOpen ? <TbX size={18} /> : <TbMenu2 size={18} />}
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
