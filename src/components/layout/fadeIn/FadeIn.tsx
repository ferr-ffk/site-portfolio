"use client";

import styles from "./FadeIn.module.css";

import useOnScreen from "@/hook/useOnScreen";
import { useEffect, useRef, useState } from "react";

interface Props {
  children?: React.ReactNode | React.ReactNode[];
  delay?: number;
}

const FadeIn = ({ children, delay: stagger }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  const [className, setClassName] = useState(styles.hidden);

  useEffect(() => {
    setTimeout(() => {
      if (isVisible) {
        setClassName(`${styles.hidden} ${styles.show}`);
      } else {
        setClassName(styles.hidden);
      }
    }, stagger);
  }, [isVisible]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default FadeIn;
