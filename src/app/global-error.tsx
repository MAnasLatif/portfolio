"use client";

import { useEffect } from "react";

type GlobalErrorProps = Readonly<{
  error: Error & { digest?: string };
}>;

export default function GlobalError({ error }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body />
    </html>
  );
}
