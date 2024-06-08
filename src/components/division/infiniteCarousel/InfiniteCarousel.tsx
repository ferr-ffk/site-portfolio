"use client";

import usePrefersReducedMotion from "@/hook/usePrefersReducedMotion";
import styles from "./InfiniteCarousel.module.css";

interface Props {
  children: React.ReactNode[];
  direction: "left" | "right";
  duration?: "slow" | "fast"
  className?: string;
}

const InfiniteCarousel = ({ children, direction, duration = "fast", className }: Props) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (typeof window !== "undefined") {
    if (!prefersReducedMotion) {
      addAnimation();
    }
  }

  return (
    <div className={`${styles.container} ${className}`} data-direction={direction || "left"} data-duration={duration} data-animated="true">
      <span className={styles.scroller}>
        {children}
        {children}
      </span>
    </div>
  );
};

export default InfiniteCarousel;

function addAnimation() {
  const container = document.querySelector<HTMLDivElement>(
    `.${styles.container}`
  );

  container?.setAttribute("data-animated", "true");
}
