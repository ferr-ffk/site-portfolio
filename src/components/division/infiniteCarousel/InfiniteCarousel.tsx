"use client";

import styles from "./InfiniteCarousel.module.css";

interface Props {
  children?: React.ReactNode[];
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
      <div className={styles.scroller}>{children}</div>
    </div>
  );
};

export default InfiniteCarousel;

function addAnimation() {
  const container = document.querySelector<HTMLDivElement>(
    `.${styles.container}`
  );

  container?.setAttribute("data-animated", "true");

  const scroller = document.querySelector<HTMLDivElement>(
    `.${styles.scroller}`
  );

  const scrollerContent = Array.from(scroller!.children);

  scrollerContent.forEach(item => {
    const duplicatedItem = item.cloneNode(true) as HTMLDivElement;

    duplicatedItem.setAttribute('aria-hidden', 'true');

    scroller?.appendChild(duplicatedItem)
  })
}
