import { useEffect, useRef, useState } from "react";

/**
 * Checks if the browser is running on reduced motion
 * @returns true if the browser is running on reduced motion
 * @deprecated this does not work actually
 */
const usePrefersReducedMotion = (): boolean => {
    return false;
}

export default usePrefersReducedMotion;