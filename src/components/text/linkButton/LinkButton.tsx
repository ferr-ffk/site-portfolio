import styles from "./LinkButton.module.css";

import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode | React.ReactNode[];
  href: string;
  isPdf?: boolean;
}

const LinkButton = ({ children, href, isPdf }: Props) => {
  const text = (children as string).toUpperCase();

  const target = isPdf ? "_blank" : "";
  const rel = isPdf ? "noopener noreferrer" : "";

  return (
    <a
      href={href}
      className={`${styles.container} ${oswald.className}`}
      target={target}
      rel={rel}
    >
      {text}
    </a>
  );
};

export default LinkButton;
