import type { ReactNode } from "react";

type PageIntroProps = {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageIntro({
  index,
  eyebrow,
  title,
  description,
  children,
}: PageIntroProps) {
  return (
    <header className="mx-auto max-w-360 px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:px-12 lg:pb-24">
      <div className="pt-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
          {index} / {eyebrow}
        </p>
        <div className="mt-10">
          <h1 className="text-[clamp(3.5rem,9vw,8rem)] font-black uppercase leading-[0.8] text-white">
            {title}
          </h1>
          <p className="mt-8 max-w-3xl border-l border-white/20 pl-5 text-base leading-7 text-white/48 sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>
        {children}
      </div>
    </header>
  );
}
