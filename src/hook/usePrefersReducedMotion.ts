import { useEffect, useRef, useState } from "react";

/**
 * Checks if the browser is running on reduced motion
 * @returns true if the browser is running on reduced motion
 */
const usePrefersReducedMotion = (): boolean => {
  const windowRef = useRef<Window | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(
      windowRef.current!.matchMedia("(prefers-reduced-motion: reduce").matches
    );
  }, []);

  return prefersReducedMotion;
};

export default usePrefersReducedMotion;
