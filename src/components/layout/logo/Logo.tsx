import localFont from "next/font/local";

import styles from "./Logo.module.css";
import Link from "next/link";

const Contour_Generator = localFont({
  src: "./contour-generator.ttf",
});

const Logo = () => {
  return (
    <div className={`${styles.container} ${Contour_Generator.className}`}>
      <Link className={styles.link} href="/">ferdev</Link>
    </div>
  );
};

export default Logo;
