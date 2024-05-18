"use client";

import { MouseEventHandler, useState } from "react";
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <a
      href="#"
      className={styles.container}
      id="scrollToTop"
      title="Ir para o topo"
      style={{ display: visible ? "inline" : "none" }}
    >
      <IoIosArrowUp />
    </a>
  );
};

export default ScrollToTop;
