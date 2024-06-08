"use client";

import styles from "../Navbar.module.css";

import LinkButton from "@/components/text/linkButton/LinkButton";
import NavbarLink from "../navbarLink/NavbarLink";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "../../button/Button";

const Links = () => {
  const [open, setOpen] = useState(false);

  const handleMobileNavbarLinkClick = () => {
    setOpen(false);
  }

  return (
    <>
      <ul className={styles.links}>
        <li key="sobre">
          <NavbarLink href="#sobre">sobre</NavbarLink>
        </li>
        <li key="projetos">
          <NavbarLink href="#projetos">projetos</NavbarLink>
        </li>
        <li key="contato">
          <NavbarLink href="#contato">contato</NavbarLink>
        </li>
        <li key="habilidades">
          <NavbarLink href="#habilidades">habilidades</NavbarLink>
        </li>
        <li key="curriculo">
          <LinkButton href="\cv\curriculum-vitae.pdf" isPdf>
            Currículo
          </LinkButton>
        </li>
      </ul>
      <Button
        className={styles.mobile_links_button}
        onClick={handleMobileNavbarLinkClick}
      >
        <AiOutlineMenu />
      </Button>
        <div className={styles.mobile_links_container} style={{ right: (open ? "0" : "-100%") }}>
          <ul className={styles.mobile_links}>
            <li key="menu_button">
              <Button
                className={styles.mobile_links_button}
                onClick={() => setOpen(!open)}
              >
                <AiOutlineMenu />
              </Button>
            </li>
            <li key="sobre">
              <NavbarLink href="#sobre" onClick={handleMobileNavbarLinkClick}>sobre</NavbarLink>
            </li>
            <li key="projetos">
              <NavbarLink href="#projetos" onClick={handleMobileNavbarLinkClick}>projetos</NavbarLink>
            </li>
            <li key="contato">
              <NavbarLink href="#contato" onClick={handleMobileNavbarLinkClick}>contato</NavbarLink>
            </li>
            <li key="habilidades">
              <NavbarLink href="#habilidades" onClick={handleMobileNavbarLinkClick}>habilidades</NavbarLink>
            </li>
            <li key="curriculo">
              <LinkButton href="\cv\curriculum-vitae.pdf" isPdf>
                Currículo
              </LinkButton>
            </li>
          </ul>
        </div>
    </>
  );
};

export default Links;
