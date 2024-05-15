import styles from "./Header.module.css";

import localFont from "next/font/local";

const Contour_Generator = localFont({ src: "../../../../public/font/CONTOUR-GENERATOR.ttf" });

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Header = ({ children }: Props) => {
  let id: string = "";

  // sets the id based on the text of the SubHeader
  if (typeof children == "string") {
    let text: string = children;

    id = text.split(' ').join('-').toLowerCase();
  }

  return <h1 id={id} className={`${Contour_Generator.className} ${styles.container}`}>{children}</h1>;
};

export default Header;
