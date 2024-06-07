import InfiniteCarousel from "@/components/division/infiniteCarousel/InfiniteCarousel";
import Section from "@/components/division/section/Section";
import RandomFont from "@/components/text/randomFont/RandomFont";
import skills from "@/model/Skills";

import styles from "./Skills.module.css";
import SubHeader from "@/components/text/subHeader/SubHeader";
import Spline from "@splinetool/react-spline";
import AnimateOnVisible from "@/components/layout/animateOnVisible/AnimateOnVisible";

const Skills = () => {
  return (
    <Section id="habilidades" stack>
      <div className={styles.media_container}>
        <Spline scene="https://prod.spline.design/qhQyuppLnqF4RGmN/scene.splinecode" />
      </div>
      <div className={styles.content_container}>
        <AnimateOnVisible animationType="fadeInLeft">
          <SubHeader>Habilidades</SubHeader>
        </AnimateOnVisible>
        <div>
          <InfiniteCarousel direction="right" className={styles.scroller_container}>
            {skills.map(skill => <RandomFont>{skill}</RandomFont>)}
          </InfiniteCarousel>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
