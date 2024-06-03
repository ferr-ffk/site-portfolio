import styles from "./Footer.module.css";

import { FaGithub, FaItchIo, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

import localFont from "next/font/local";
import Logo from "../logo/Logo";

const links = [
  {
    href: "https://github.com/ferr-ffk",
    icon: <FaGithub />,
    key: "github",
  },
  {
    href: "mailto:freitaslira18@gmail.com",
    icon: <MdOutlineMail />,
    key: "email",
  },
  {
    href: "https://feh1000000.itch.io",
    icon: <FaItchIo />,
    key: "itch",
  },
  {
    href: "https://www.linkedin.com/in/fernandoflira/",
    icon: <FaLinkedinIn />,
    key: "linkedin",
  },
];

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Logo />
      <ul className={styles.links} id="links">
        {links.map((link) => (
          <li key={link.key}>
            <a target="_blank" href={link.href} className={styles.link}>
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
