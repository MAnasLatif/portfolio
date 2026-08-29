import TbHome from "@mal-icons/react/tb/TbHome";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative z-10 grid min-h-svh place-items-center px-5 pt-16">
      <div className="w-full max-w-4xl border-t border-white/15 pt-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
          404 / Coordinate not found
        </p>
        <p className="mt-8 text-[clamp(6rem,24vw,14rem)] font-black leading-[0.75] text-white/8">
          404
        </p>
        <h1 className="mt-8 text-4xl font-black uppercase leading-none text-white sm:text-6xl">
          Nothing is published here.
        </h1>
        <p className="mt-6 max-w-xl leading-7 text-white/45">
          The address may have moved, or it may never have existed. Continue
          with the portfolio index.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-bold text-[#080a0f]"
        >
          <TbHome size={16} />
          Return home
        </Link>
      </div>
    </main>
  );
}
