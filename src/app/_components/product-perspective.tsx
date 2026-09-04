const productPrinciples = [
  {
    title: "Shape the right problem",
    description:
      "Align user needs, product intent, and technical reality before the build grows.",
  },
  {
    title: "Design the whole experience",
    description:
      "Turn complex workflows into interactions that feel clear, coherent, and purposeful.",
  },
  {
    title: "Engineer for what comes next",
    description:
      "Build dependable foundations that teams can ship, operate, and extend with confidence.",
  },
] as const;

export function ProductPerspective() {
  return (
    <section
      aria-labelledby="product-perspective-title"
      className="relative z-10 border-t border-white/8 bg-[#03050a]/85 text-white"
    >
      <div className="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(420px,1.2fr)] lg:items-end lg:gap-20">
          <div>
            <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
              <span>00</span>
              <span className="h-px w-8 bg-white/16" />
              <span>Product perspective</span>
            </div>

            <h2
              id="product-perspective-title"
              className="mt-8 max-w-3xl text-4xl font-black uppercase leading-[0.92] sm:text-6xl"
            >
              Product engineer, end to end.
            </h2>
          </div>

          <p className="max-w-3xl border-l border-white/15 pl-5 text-base leading-8 text-white/52 sm:text-lg">
            I take products from an unclear need to a dependable release:
            defining the right problem, shaping an intuitive experience, and
            engineering the full-stack system behind it. The goal is software
            that stays useful, clear, and reliable as it grows.
          </p>
        </div>

        <ol className="mt-14 grid border-t border-white/10 lg:grid-cols-3">
          {productPrinciples.map((principle, index) => (
            <li
              key={principle.title}
              className="grid min-h-44 grid-cols-[36px_1fr] gap-3 border-b border-white/10 py-7 lg:border-r lg:pr-7 lg:last:border-r-0 lg:not-first:pl-7"
            >
              <span className="font-mono text-[10px] text-white/25">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-lg font-bold text-white/88">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/42">
                  {principle.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
