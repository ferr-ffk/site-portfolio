import styles from "./SubHeader.module.css";

import localFont from "next/font/local";

const Varien = localFont({ src: "../../../../public/font/VARIEN.ttf" });

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const SubHeader = ({ children }: Props) => {
  let id: string = "";

  // sets the id based on the text of the SubHeader
  if (typeof children == "string") {
    let text: string = children;

    id = text.split(' ').join('-').toLowerCase();
  }
  
  return <h2 id={id} className={`${Varien.className} ${styles.container}`}>{children}</h2>;
};

export default SubHeader;
