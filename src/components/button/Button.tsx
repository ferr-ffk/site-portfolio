import styles from "./Button.module.css";

import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

const Button = ({ children, className }: Props) => {
  return (
    <button className={`${styles.container} ${oswald.className} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
