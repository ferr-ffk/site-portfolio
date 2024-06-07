"use client";

import styles from "./InfiniteCarousel.module.css";

interface Props {
  children: React.ReactNode[];
  direction: "left" | "right";
  duration?: "slow" | "fast"
}

const InfiniteCarousel = ({ children, direction, duration = "fast" }: Props) => {
  if (typeof window !== "undefined") {
    if (!window.matchMedia("(prefers-reduced-motion: reduce").matches) {
      addAnimation();
    }
  }

  return (
    <div className={styles.container} data-direction={direction || "left"} data-duration={duration}>
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
