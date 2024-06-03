import Logo from "../logo/Logo";
import styles from "./Navbar.module.css";

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
