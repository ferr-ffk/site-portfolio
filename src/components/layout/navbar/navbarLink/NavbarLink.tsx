import { Oswald } from "next/font/google";
import { MouseEventHandler } from "react";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const NavbarLink = ({ children, href, onClick }: Props) => {
  return (
    <a href={href} className={oswald.className} onClick={onClick}>
      {children}
    </a>
  );
};

export default NavbarLink;
