/**
 * Checks if the browser is running on reduced motion
 * @returns true if the browser is running on reduced motion
 */
const usePrefersReducedMotion = (): boolean => {
    return window.matchMedia("(prefers-reduced-motion: reduce").matches;
}

export default usePrefersReducedMotion;