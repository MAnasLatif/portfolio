export function HeroHeader() {
  return (
    <section className="relative z-10 mx-auto grid min-h-svh max-w-360 items-center gap-14 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:px-12 lg:pb-20 lg:pt-32">
      <div className="max-w-4xl">
        <div className="mb-9 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/4 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-xs">
          <span className="size-1.5 rounded-full bg-emerald-300" />
          Software / Product / Experience
        </div>

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

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://github.com/MAnasLatif"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-14 items-center justify-center bg-white px-7 text-sm font-bold text-[#080a0f] transition-colors hover:bg-white/80"
          >
            Explore GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/manaslatif/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-14 items-center justify-center border border-white/20 px-7 text-sm font-bold text-white transition-colors hover:border-white/55"
          >
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
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/MAnasLatif"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="relative hidden min-h-140 lg:block" aria-hidden="true">
        <div className="absolute inset-8 border border-dashed border-white/18" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />
        <div className="absolute inset-16 grid place-items-center border border-white/14 bg-[#080a0f]/72 backdrop-blur-sm">
          <span className="text-[11rem] font-black leading-none text-white/5.5">
            ML
          </span>
        </div>
        <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
          Engineering / Product / Design
        </p>
        <p className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 [writing-mode:vertical-rl]">
          M. Anas Latif
        </p>
      </div>
    </section>
  );
}
