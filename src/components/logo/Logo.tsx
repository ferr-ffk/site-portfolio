import localFont from "next/font/local";
import Image from "next/image";

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
    <div className={styles.container}>
      <Image src="/logo/logo_feh_fritas.png" alt="logo" fill objectFit="contain"/>
    </div>
  );
};

export default Logo;
