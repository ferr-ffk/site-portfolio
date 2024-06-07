import localFont from "next/font/local";
import React from "react";

const Integral = localFont({
  src: "../../../../public/font/Fontspring-DEMO-integralcf-regular.otf",
});
const Manolo = localFont({ src: "../../../../public/font/manolo-mono.ttf" });
const Auge = localFont({
  src: "../../../../public/font/Auge-Trial-Regular.otf",
});

interface Props {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

const RandomFont = ({ children, className }: Props) => {
  const randomNumber = Math.random();

  let randomClassName: string;

  if (randomNumber < 0.33) {
    randomClassName = Integral.className;
  } else if (randomNumber < 0.66) {
    randomClassName = Manolo.className;
  } else {
    randomClassName = Auge.className;
  }

  return <p className={`${randomClassName} ${className}`}>{children}</p>;
};

export default RandomFont;
