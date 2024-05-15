import localFont from "next/font/local";
import NavbarLink from "../navbar/navbarLink/NavbarLink";

import styles from "./Logo.module.css";

interface Props {
  header?: boolean;
}

const Contour_Generator = localFont({
  src: "../../../public/font/CONTOUR-GENERATOR.ttf",
});

const Logo = ({ header }: Props) => {
  return (
    <div>
      <NavbarLink href="/">
        <p
          className={`${Contour_Generator.className} ${styles.logo} ${
            header ? styles.header : ""
          }`}
        >
          fern
        </p>
      </NavbarLink>
    </div>
  );
};

export default Logo;
