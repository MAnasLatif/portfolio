import LuLoaderCircle from "@mal-icons/react/lu/LuLoaderCircle";

export default function Loading() {
  return (
    <main className="relative z-10 grid min-h-svh place-items-center px-5 pt-16">
      <div role="status" className="text-center">
        <LuLoaderCircle className="mx-auto animate-spin" size={40} />
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">
          Loading portfolio
        </p>
      </div>
    </main>
  );
}
