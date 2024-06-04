import ParallaxBackground from "@/components/division/parallaxBackground/ParallaxBackground";
import Section from "@/components/division/section/Section";
import Header from "@/components/text/header/Header";

const hero = () => {
  return (
    <Section id="hero" disableAnimation>
      <ParallaxBackground
        frontUrl={"/hero/foreground.png"}
        backUrl={"/hero/background.jpg"}
      >
        <Header>fernando f. de lira</Header>
        <p>
          Designer e desenvolvedor front end,
          desenvolver indie,
          e cursando informática
        </p>
      </ParallaxBackground>
    </Section>
  );
};

export default hero;
