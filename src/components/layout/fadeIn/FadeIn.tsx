"use client";

import styles from "./FadeIn.module.css";

import useOnScreen from "@/hook/useOnScreen";
import { useRef } from "react";

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

const FadeIn = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className={`${styles.hidden} ${isVisible ? styles.show : ""}`}>
      {children}
    </div>
  );
};

export default FadeIn;
