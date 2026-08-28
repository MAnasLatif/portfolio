import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/blogs" },
  { label: "GitHub", href: "https://github.com/MAnasLatif" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manaslatif/" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#03050a]/85">
      <div className="mx-auto grid max-w-360 gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] lg:px-12">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
            M. Anas Latif / Pakistan
          </p>
          <p className="mt-4 max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl">
            Building useful software with product judgment and design care.
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3"
        >
          {footerLinks.map((link) =>
            link.href.startsWith("http") ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
      <div className="mx-auto flex max-w-360 flex-col gap-2 border-t border-white/8 px-5 py-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/25 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>Software engineer / Product builder / UX designer</p>
        <p>© {new Date().getFullYear()} M. Anas Latif</p>
      </div>
    </footer>
  );
}
