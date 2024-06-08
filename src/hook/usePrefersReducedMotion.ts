/**
 * Checks if the browser is running on reduced motion
 * @returns true if the browser is running on reduced motion
 */
const usePrefersReducedMotion = (): boolean => {
    if (typeof window !== "undefined") {
        return window.matchMedia("(prefers-reduced-motion: reduce").matches;
    }

    return false;
}

export default usePrefersReducedMotion;