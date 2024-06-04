"use client";

import styles from "./AnimateOnVisible.module.css";

import useOnScreen from "@/hook/useOnScreen";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  delay?: number;
  animationType: "fadeInLeft" | "fadeInBottom";
  key?: string;
}

const AnimateOnVisible = ({ children, delay: stagger, animationType, key }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  const [className, setClassName] = useState(styles.hidden);

  let hiddenClassName: string;

  if (animationType === "fadeInLeft") {
    hiddenClassName = styles.hiddenFadeInLeft;
  } else if (animationType === "fadeInBottom") {
    hiddenClassName = styles.fadeInBottom;
  }

  useEffect(() => {
    setTimeout(() => {
      if (isVisible) {
        setClassName(`${hiddenClassName} ${styles[animationType]}`);
      } else {
        setClassName(hiddenClassName);
      }
    }, stagger);
  }, [isVisible]);

  return (
    <div ref={ref} className={`${styles.container} ${className}`} key={key}>
      {children}
    </div>
  );
};

export default AnimateOnVisible;
