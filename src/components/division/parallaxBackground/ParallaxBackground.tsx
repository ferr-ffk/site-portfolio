"use client";

import styles from "./ParallaxBackground.module.css";

interface Props {
  frontUrl: string;
  backUrl: string;
  children?: React.ReactNode | React.ReactNode[];
}

const ParallaxBackground = ({ frontUrl, backUrl, children }: Props) => {
  addEventListener("scroll", handleScroll);

  return (
    <div className={styles.parallax}>
      <img
        id="parallax-back"
        src={backUrl}
        alt=""
        className={styles.parallax__back}
      />
      <img
        id="parallax-front"
        src={frontUrl}
        alt=""
        className={styles.parallax__front}
      />
      <div id="hero-text" className={styles.parallax__hero}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;

function handleScroll(this: HTMLElement, ev: Event) {
  const scrollTop = document.documentElement.scrollTop;

  const background = document.documentElement.querySelector<HTMLImageElement>("#parallax-back")!;
  const foreground = document.documentElement.querySelector<HTMLImageElement>("#parallax-front")!;
  const hero = document.documentElement.querySelector<HTMLDivElement>("#hero-text")!;

  if (background) {
    if (background.style.getPropertyValue('object-fit') !== "none") {
      background.style.objectPosition = `0 ${scrollTop * -0.2}px`;
    }
  }

  if (foreground) {
    foreground.style.objectPosition = `0 ${scrollTop * 0.3}px`;
  }

  if (hero) {
    hero.style.bottom = `${scrollTop * 0.5}px`;
  }
}
