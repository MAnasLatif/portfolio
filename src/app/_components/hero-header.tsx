import TbBrandGithub from "@mal-icons/react/tb/TbBrandGithub";
import TbExternalLink from "@mal-icons/react/tb/TbExternalLink";
import TbSend from "@mal-icons/react/tb/TbSend";
import Image from "next/image";

function HeroPortrait({
  className,
  sizes,
}: {
  className: string;
  sizes: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-3 border border-dashed border-white/18 sm:inset-6 lg:inset-8" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />
      <div className="absolute inset-6 overflow-hidden border border-white/14 bg-[#080a0f]/72 backdrop-blur-sm sm:inset-10 lg:inset-16">
        <Image
          src="/manaslatif.jpeg"
          alt="M. Anas Latif working at his laptop"
          fill
          priority
          sizes={sizes}
          className="object-cover object-[58%_center]"
        />
      </div>
      <p className="absolute bottom-1 left-1 font-mono text-[9px] uppercase tracking-[0.22em] text-white/30 sm:bottom-3 sm:left-3 sm:text-[10px] sm:tracking-[0.3em] lg:bottom-4 lg:left-4">
        Engineering / Product / Design
      </p>
      <p className="absolute right-1 top-1 font-mono text-[9px] uppercase tracking-[0.22em] text-white/30 [writing-mode:vertical-rl] sm:right-3 sm:top-3 sm:text-[10px] sm:tracking-[0.3em] lg:right-4 lg:top-4">
        M. Anas Latif
      </p>
    </div>
  );
}

export function HeroHeader() {
  return (
    <section className="relative z-10 mx-auto grid min-h-svh max-w-360 items-center gap-14 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:px-12 lg:pb-20 lg:pt-32">
      <div className="max-w-4xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.36em] text-white/38 sm:text-sm">
          Hi, I'm
        </p>
        <h1 className="text-[clamp(4.25rem,11vw,9.5rem)] font-black uppercase leading-[0.78] text-[#f2f3f5]">
          <span className="block">M. Anas</span>
          <span className="block text-white/28">Latif</span>
        </h1>

        <div className="mt-10 flex items-center gap-5 sm:mt-12">
          <p className="shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 sm:text-xs">
            Software engineer
          </p>
          <span className="h-px w-full max-w-md bg-white/16" />
        </div>

        <p className="mt-8 max-w-2xl border-l border-white/25 pl-5 text-base leading-7 text-white/52 sm:text-lg sm:leading-8">
          I build thoughtful digital products where engineering, product
          strategy, and user experience meet.
        </p>

        <HeroPortrait
          className="mt-10 aspect-4/3 sm:aspect-16/10 lg:hidden"
          sizes="(max-width: 639px) calc(100vw - 88px), calc(100vw - 144px)"
        />

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://github.com/MAnasLatif"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2 bg-white px-7 text-sm font-bold text-[#080a0f] transition-colors hover:bg-white/80"
          >
            <TbBrandGithub size={18} />
            Explore GitHub
          </a>
          <a
            href="#contact"
            className="inline-flex h-14 items-center justify-center gap-2 border border-white/20 px-7 text-sm font-bold text-white transition-colors hover:border-white/55"
          >
            <TbSend size={18} />
            Get in touch
          </a>
        </div>

        <div className="mt-10 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.24em] text-white/30">
          <span>Connect</span>
          <span className="h-px w-8 bg-white/16" />
          <a
            href="https://www.linkedin.com/in/manaslatif/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            LinkedIn
            <TbExternalLink size={11} />
          </a>
          <a
            href="https://github.com/MAnasLatif"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            GitHub
            <TbBrandGithub size={11} />
          </a>
        </div>
      </div>

      <HeroPortrait className="hidden min-h-140 lg:block" sizes="22vw" />
    </section>
  );
}
