"use client";

import Image from "next/image";
import { type SyntheticEvent, useEffect, useRef, useState } from "react";

type ProgressivePortraitProps = {
  sizes: string;
};

export function ProgressivePortrait({ sizes }: ProgressivePortraitProps) {
  const [shouldLoadHighQuality, setShouldLoadHighQuality] = useState(false);
  const [isHighQualityReady, setIsHighQualityReady] = useState(false);
  const idleCallback = useRef<number>(null);
  const fallbackTimer = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(
    () => () => {
      if (idleCallback.current !== null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleCallback.current);
      }
      if (fallbackTimer.current !== null) clearTimeout(fallbackTimer.current);
    },
    [],
  );

  const queueHighQualityImage = (event: SyntheticEvent<HTMLImageElement>) => {
    if (
      shouldLoadHighQuality ||
      event.currentTarget.getClientRects().length === 0
    ) {
      return;
    }

    if ("requestIdleCallback" in window) {
      idleCallback.current = window.requestIdleCallback(
        () => setShouldLoadHighQuality(true),
        { timeout: 2000 },
      );
      return;
    }

    fallbackTimer.current = setTimeout(
      () => setShouldLoadHighQuality(true),
      500,
    );
  };

  return (
    <>
      <Image
        src="/manaslatif.jpeg"
        alt="M. Anas Latif working at his laptop"
        fill
        quality={45}
        sizes={sizes}
        onLoad={queueHighQualityImage}
        className="object-cover object-[58%_center]"
      />
      {shouldLoadHighQuality ? (
        <Image
          src="/manaslatif.jpeg"
          alt=""
          aria-hidden="true"
          fill
          loading="eager"
          quality={90}
          sizes={sizes}
          onLoad={() => setIsHighQualityReady(true)}
          className={`object-cover object-[58%_center] transition-opacity duration-500 ${
            isHighQualityReady ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : null}
    </>
  );
}
