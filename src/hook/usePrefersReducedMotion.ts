const usePrefersReducedMotion = (): boolean => {
    return !window.matchMedia("(prefers-reduced-motion: reduce").matches;
}

export default usePrefersReducedMotion;