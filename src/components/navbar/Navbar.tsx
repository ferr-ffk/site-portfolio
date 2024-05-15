import localFont from "next/font/local";
import styles from "./Navbar.module.css";
import NavbarLink from "./navbarLink/NavbarLink";
import LinkButton from "../text/linkButton/LinkButton";

const Contour_Generator = localFont({
  src: "../../../public/font/CONTOUR-GENERATOR.ttf",
});

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div>
        <NavbarLink href="/">
            <p className={`${Contour_Generator.className} ${styles.logo}`}>fern</p>
        </NavbarLink>
      </div>
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
