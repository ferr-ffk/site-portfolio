import styles from "./Header.module.css";

import localFont from "next/font/local";

const Varien = localFont({ src: "../../../../public/font/CONTOUR-GENERATOR.ttf" });

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Header = ({ children }: Props) => {
  return <h1 className={`${Varien.className} ${styles.container}`}>{children}</h1>;
};

export default Header;
