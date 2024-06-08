"use client";

import { Suspense } from "react";
import Image from "next/image";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const SplineWrapper = ({ children }: Props) => {
  return (
    <Suspense
      fallback={
        <Image alt="" fill src="/splineFallback/Escorrega@1-2073x1102.png" />
      }
    >
      {children}
    </Suspense>
  );
};

export default SplineWrapper;
