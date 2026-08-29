"use client";

import LuRefreshCw from "@mal-icons/react/lu/LuRefreshCw";
import SiGithub from "@mal-icons/react/si/SiGithub";
import { useEffect } from "react";

type GlobalErrorProps = Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>;

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="m-0 bg-[#03050a] text-white">
        <main className="grid min-h-screen place-items-center px-5 font-sans">
          <div className="w-full max-w-3xl border-t border-white/15 pt-8">
            <p className="text-xs uppercase tracking-widest text-white/40">
              Portfolio unavailable
            </p>
            <h1 className="mt-8 text-4xl font-black uppercase leading-none sm:text-6xl">
              Something interrupted the site.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/50">
              Retry the application. If the problem continues, the public work
              remains available on GitHub.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-bold text-[#080a0f]"
              >
                <LuRefreshCw size={16} />
                Try again
              </button>
              <a
                href="https://github.com/MAnasLatif"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-sm font-bold text-white"
              >
                <SiGithub size={16} />
                Open GitHub
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
