"use client";

import { useEffect } from "react";

type ErrorBoundaryProps = Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>;

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative z-10 grid min-h-svh place-items-center px-5 pt-16">
      <div className="w-full max-w-3xl border-t border-white/15 pt-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
          Error / Route unavailable
        </p>
        <h1 className="mt-8 text-4xl font-black uppercase leading-none text-white sm:text-6xl">
          This page could not load.
        </h1>
        <p className="mt-6 max-w-xl leading-7 text-white/45">
          The rest of the portfolio is still available. Retry this route, or
          return to the home page.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="bg-white px-6 py-3 text-sm font-bold text-[#080a0f]"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-white/20 px-6 py-3 text-sm font-bold text-white"
          >
            Return home
          </a>
        </div>
      </div>
    </main>
  );
}
