"use client";

import Image from "next/image"
import styles from "./ParallaxBackground.module.css";

interface Props {
  frontUrl: string;
  backUrl: string;
  children?: React.ReactNode | React.ReactNode[];
}

const ParallaxBackground = ({ frontUrl, backUrl, children }: Props) => {
  if (typeof addEventListener === "function") {
    addEventListener("scroll", useScroll);
  }

  function useScroll(this: HTMLElement, ev: Event) {
    const scrollTop = document.documentElement.scrollTop;
  
    const background =
      document.documentElement.querySelector<HTMLImageElement>("#parallax-back")!;
    const foreground =
      document.documentElement.querySelector<HTMLImageElement>(
        "#parallax-front"
      )!;
    const hero =
      document.documentElement.querySelector<HTMLDivElement>("#hero-text")!;
  
    let backgroundSpeed = 0.1;
    let foregroundSpeed = 0.4;
    let heroSpeed = 0.5;
  
    const prefersReducedMotion = false;
  
    if (prefersReducedMotion) {
      backgroundSpeed = 0;
      foregroundSpeed = 0;
      heroSpeed = 0;
    }
  
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

  return (
    <span className={styles.parallax}>
      <Image
        id="parallax-back"
        src={backUrl}
        alt=""
        className={`${styles.parallax__back} unselectable`}
        fill
      />
      <Image
        id="parallax-front"
        src={frontUrl}
        alt=""
        className={`${styles.parallax__front} unselectable`}
        fill
      />
      <div id="hero-text" className={`${styles.parallax__hero} unselectable`}>
        {children}
      </div>
    </span>
  );
};

export default ParallaxBackground;