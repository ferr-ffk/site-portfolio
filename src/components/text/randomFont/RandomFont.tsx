import localFont from "next/font/local";
import React from "react";

const Integral = localFont({ src: "../../../../public/font/Fontspring-DEMO-integralcf-regular.otf" });
const Manolo = localFont({ src: "../../../../public/font/manolo-mono.ttf" });
const Auge = localFont({ src: "../../../../public/font/Auge-Trial-Regular.otf" });

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

const RandomFont = ({children}: Props) => {
  const randomNumber = Math.random();

  let className: string;

  if (randomNumber < 0.33) {
    className = Integral.className;
  } else if (randomNumber < 0.66) {
    className = Manolo.className;
  } else {
    className = Auge.className;
  }

  return (
    <p className={className}>{children}</p>
  );
}

export default RandomFont;