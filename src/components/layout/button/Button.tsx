import styles from "./Button.module.css";

import { MouseEventHandler } from "react";

import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button
      className={`${styles.container} ${oswald.className} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
