import localFont from "next/font/local";

import styles from "./Logo.module.css";

const Contour_Generator = localFont({
  src: "../../../public/font/CONTOUR-GENERATOR.ttf",
});

const Logo = () => {
  return (
    <div className={`${styles.container} ${Contour_Generator.className}`}>
      ferdev
    </div>
  );
};

export default Logo;
