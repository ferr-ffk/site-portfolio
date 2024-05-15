import styles from "./Navbar.module.css";
import NavbarLink from "./navbarLink/NavbarLink";
import LinkButton from "../text/linkButton/LinkButton";
import Logo from "../logo/Logo";


const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Logo header />
      <ul className={styles.links}>
        <li>
          <NavbarLink href="#sobre">sobre</NavbarLink>
        </li>
        <li>
          <NavbarLink href="#projeto">projetos</NavbarLink>
        </li>
        <li>
          <NavbarLink href="#contato">contato</NavbarLink>
        </li>
        <li>
            <LinkButton href="\cv\curriculum-vitae.pdf" isPdf>Currículo</LinkButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
