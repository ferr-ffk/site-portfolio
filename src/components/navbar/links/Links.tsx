"use client";

import styles from "../Navbar.module.css";

import LinkButton from "@/components/text/linkButton/LinkButton";
import NavbarLink from "../navbarLink/NavbarLink";
import { useState } from "react";
import Button from "@/components/button/Button";
import { AiOutlineMenu } from "react-icons/ai";

const links = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
          <LinkButton href="\cv\curriculum-vitae.pdf" isPdf>
            Currículo
          </LinkButton>
        </li>
      </ul>
      <Button
        className={styles.mobile_links_button}
        onClick={() => setOpen(!open)}
      >
        <AiOutlineMenu />
      </Button>
      {open && (
        <div className={styles.mobile_links_container}>
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
              <NavbarLink href="#sobre">sobre</NavbarLink>
            </li>
            <li key="projeto">
              <NavbarLink href="#projeto">projetos</NavbarLink>
            </li>
            <li key="contato">
              <NavbarLink href="#contato">contato</NavbarLink>
            </li>
            <li key="curriculo">
              <LinkButton href="\cv\curriculum-vitae.pdf" isPdf>
                Currículo
              </LinkButton>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default links;
