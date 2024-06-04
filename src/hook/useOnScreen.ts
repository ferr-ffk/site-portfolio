import { useEffect, useState, useRef, RefObject } from 'react';

/**
 * Check if a desired component is visible on the screen
 * @param ref The ref object of the component
 * @returns true if visible, false otherwise
 * @author Filip Szczepanski (Stack Overflow)
 */
export default function useOnScreen(ref: RefObject<HTMLElement>): boolean {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    observerRef.current!.observe(ref.current!);

    return () => {
      observerRef.current!.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}