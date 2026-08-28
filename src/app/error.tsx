"use client";

import { useEffect } from "react";

type ErrorBoundaryProps = Readonly<{
  error: Error & { digest?: string };
}>;

export default function ErrorBoundary({ error }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return null;
}
