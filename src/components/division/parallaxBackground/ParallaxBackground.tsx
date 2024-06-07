"use client";

import styles from "./ParallaxBackground.module.css";

interface Props {
  frontUrl: string;
  backUrl: string;
  children?: React.ReactNode | React.ReactNode[];
}

const ParallaxBackground = ({ frontUrl, backUrl, children }: Props) => {
  if (typeof addEventListener === "function") {
    addEventListener("scroll", handleScroll);
  }

  return (
    <span className={styles.parallax}>
      <img
        id="parallax-back"
        src={backUrl}
        alt=""
        className={`${styles.parallax__back} unselectable`}
      />
      <img
        id="parallax-front"
        src={frontUrl}
        alt=""
        className={`${styles.parallax__front} unselectable`}
      />
      <div id="hero-text" className={`${styles.parallax__hero} unselectable`}>
        {children}
      </div>
    </span>
  );
};

export default ParallaxBackground;

function handleScroll(this: HTMLElement, ev: Event) {
  const scrollTop = document.documentElement.scrollTop;

  const background =
    document.documentElement.querySelector<HTMLImageElement>("#parallax-back")!;
  const foreground =
    document.documentElement.querySelector<HTMLImageElement>(
      "#parallax-front"
    )!;
  const hero =
    document.documentElement.querySelector<HTMLDivElement>("#hero-text")!;

  const backgroundSpeed = -0.2;
  const foregroundSpeed = 0.3;
  const heroSpeed = 0.5;

  if (background) {
    if (background.style.getPropertyValue("object-fit") !== "none") {
      background.style.objectPosition = `0 ${scrollTop * backgroundSpeed}px`;
    }
  }

  if (foreground) {
    foreground.style.objectPosition = `0 ${scrollTop * foregroundSpeed}px`;
  }

  if (hero) {
    hero.style.bottom = `${scrollTop * heroSpeed}px`;
  }
}
