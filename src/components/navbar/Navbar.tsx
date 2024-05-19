import styles from "./Navbar.module.css";

import NavbarLink from "./navbarLink/NavbarLink";
import LinkButton from "../text/linkButton/LinkButton";
import Logo from "../logo/Logo";


const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Logo />
      <ul className={styles.links}>
        <li key="sobre">
          <NavbarLink href="#sobre">sobre</NavbarLink>
        </li>
        <li key="projeto">
          <NavbarLink href="#projeto">projetos</NavbarLink>
        </li>
        <li key="contato">
          <NavbarLink href="#contato">contato</NavbarLink>
        </li>
        <li key="curriculo">
            <LinkButton href="\cv\curriculum-vitae.pdf" isPdf>Currículo</LinkButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
