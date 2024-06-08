"use client";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import styles from "./SlideShow.module.css";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode[];
  className?: string;
}

const SlideShow = ({ children, className }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const temp1 = [...children];
  let [onScreenChildren, setOnScreenChildren] = useState(
    temp1.splice(currentIndex, 3)
  );

  function onLeftArrowClick(event: any): void {
    setCurrentIndex(currentIndex - 3);

    if (currentIndex < 0) {
      setCurrentIndex(children.length - 3);
    }
  }

  function onRightArrowClick(event: any): void {
    setCurrentIndex(currentIndex + 3);

    if (currentIndex > children.length - 3) {
      setCurrentIndex(0);
    }
  }

  useEffect(() => {
    const temp = [...children];
    setOnScreenChildren(temp.splice(currentIndex, 3));
  }, [currentIndex, children]);

  return (
    <div className={`${styles.container} ${className}`}>
      <FaAngleLeft className={styles.arrow_icon} onClick={onLeftArrowClick} />
      {onScreenChildren}
      <FaAngleRight className={styles.arrow_icon} onClick={onRightArrowClick} />
    </div>
  );
};

export default SlideShow;
