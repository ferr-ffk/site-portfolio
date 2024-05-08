import styles from "./SubHeader.module.css";

import localFont from "next/font/local";

const Varien = localFont({ src: "../../../../public/font/VARIEN.ttf" });

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const SubHeader = ({ children }: Props) => {
  return <h2 className={`${Varien.className} ${styles.container}`}>{children}</h2>;
};

export default SubHeader;
