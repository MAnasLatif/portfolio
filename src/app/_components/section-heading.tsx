type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-8 border-t border-white/12 pt-8 lg:grid-cols-[0.55fr_1.45fr]">
      <div className="flex items-start gap-4 font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div>
        <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] text-white sm:text-6xl">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/48">
          {description}
        </p>
      </div>
    </div>
  );
}
