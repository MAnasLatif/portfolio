"use client";

import {
  type AnimationPlaybackControls,
  useAnimate,
  useReducedMotion,
} from "motion/react";
import { useEffect, useRef } from "react";

import { favoriteTechnologies } from "@/lib/portfolio-content";

import { TechnologyIcon } from "./technology-icon";

function TechnologyGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0" aria-hidden={hidden || undefined}>
      {favoriteTechnologies.map((technology) => (
        <li
          key={technology}
          className="flex shrink-0 items-center gap-2 border-r border-white/10 px-5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/38"
        >
          <TechnologyIcon name={technology} />
          {technology}
        </li>
      ))}
    </ul>
  );
}

export function TechnologyMarquee() {
  const [scope, animate] = useAnimate();
  const controls = useRef<AnimationPlaybackControls>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    controls.current = animate(
      scope.current,
      { x: ["0%", "-50%"] },
      { duration: 24, ease: "linear", repeat: Number.POSITIVE_INFINITY },
    );

    return () => controls.current?.stop();
  }, [animate, prefersReducedMotion, scope]);

  const pause = () => controls.current?.pause();
  const play = () => controls.current?.play();

  return (
    <section
      aria-label="Featured technologies"
      className="scrollbar-none overflow-x-auto overscroll-x-contain border-b border-white/12 py-3"
      onMouseEnter={pause}
      onMouseLeave={play}
      onFocusCapture={pause}
      onBlurCapture={play}
      onPointerDown={pause}
      onPointerUp={play}
      onPointerCancel={play}
    >
      <div ref={scope} className="flex w-max will-change-transform">
        <TechnologyGroup />
        <TechnologyGroup hidden />
      </div>
    </section>
  );
}
