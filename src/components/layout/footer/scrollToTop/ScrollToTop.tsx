"use client";

import { useState } from "react";
import styles from "./ScrollToTop.module.css";

import { IoIosArrowUp } from "react-icons/io";

/**
 * @author GeeksForGeeks // https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/
 * @returns ScrollToTop Component
 */
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <div className={styles.container}>
      <a
        href="#"
        id="scrollToTop"
        title="Ir para o topo"
        style={{ visibility: visible ? "visible" : "hidden" }}
        className={styles.link}
      >
        <IoIosArrowUp />
      </a>
    </div>
  );
};

export default ScrollToTop;
