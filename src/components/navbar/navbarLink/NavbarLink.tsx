import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
  href: string;
}

const NavbarLink = ({ children, href }: Props) => {
  return (
    <a href={href} className={oswald.className}>
      {children}
    </a>
  );
};

export default NavbarLink;
