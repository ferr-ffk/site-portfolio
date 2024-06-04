"use client";

import styles from "./AnimateOnVisible.module.css";

import useOnScreen from "@/hook/useOnScreen";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  delay?: number;
  animationType: "fade_in_left" | "fade_in_bottom";
}

const AnimateOnVisible = ({ children, delay: stagger, animationType }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  const [className, setClassName] = useState(styles.hidden);

  let hiddenClassName: string;

  if (animationType === "fade_in_left") {
    hiddenClassName = styles.hidden_fade_in_left;
  } else if (animationType === "fade_in_bottom") {
    hiddenClassName = styles.hidden_fade_in_bottom;
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
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default AnimateOnVisible;
