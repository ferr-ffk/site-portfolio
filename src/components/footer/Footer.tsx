import { FaGithub, FaItchIo, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import Logo from "../logo/Logo";

import styles from "./Footer.module.css";

const links = [
  {
    href: "https://github.com/ferr-ffk",
    icon: <FaGithub />,
  },
  {
    href: "mailto:freitaslira18@gmail.com",
    icon: <MdOutlineMail />,
  },
  {
    href: "https://feh1000000.itch.io",
    icon: <FaItchIo />,
  },
  {
    href: "https://www.linkedin.com/in/fernandoflira/",
    icon: <FaLinkedinIn />,
  },
];

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Logo />
      <ul className={styles.links} id="links">
        {links.map((link) => (
          <li>
            <a target="_blank" href={link.href}>{link.icon}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
