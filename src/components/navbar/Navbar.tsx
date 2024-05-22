import styles from "./Navbar.module.css";

import NavbarLink from "./navbarLink/NavbarLink";
import LinkButton from "../text/linkButton/LinkButton";
import Logo from "../logo/Logo";
import Links from "./links/Links";


const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Logo />
      <Links />
    </nav>
  );
};

export default Navbar;
