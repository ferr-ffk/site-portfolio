import styles from "./LinkButton.module.css";

import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode | React.ReactNode[];
  href: string;
}

const LinkButton = ({ children, href }: Props) => {
  const text = (children as string).toUpperCase();

  return (
    <a href={href} className={`${styles.container} ${oswald.className}`}>
      {text}
    </a>
  );
};

export default LinkButton;
