"use client"

import InfiniteCarousel from "@/components/division/infiniteCarousel/InfiniteCarousel";
import Section from "@/components/division/section/Section";
import RandomFont from "@/components/text/randomFont/RandomFont";
import skills from "@/model/Skills";

import styles from "./Skills.module.css";
import SubHeader from "@/components/text/subHeader/SubHeader";
import Spline from "@splinetool/react-spline";
import AnimateOnVisible from "@/components/layout/animateOnVisible/AnimateOnVisible";
import usePrefersReducedMotion from "@/hook/usePrefersReducedMotion";
import { useEffect } from "react";
import Image from "next/image"
import SlideShow from "@/components/division/slideShow/SlideShow";

const Skills = () => {
  let prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    prefersReducedMotion = usePrefersReducedMotion();
  }, [window])

  return (
    <Section id="habilidades" stack>
      <div className={styles.media_container}>
        {prefersReducedMotion ? (
          <Image src="/splineFallback/Pula Pula@1-2073x1102.png" alt="" fill objectFit="contain"/>
        ) : (
          <Spline scene="https://prod.spline.design/qhQyuppLnqF4RGmN/scene.splinecode" />
        )}
      </div>
      <div className={styles.content_container}>
        <AnimateOnVisible animationType="fadeInLeft">
          <SubHeader>Habilidades</SubHeader>
        </AnimateOnVisible>
        <div className={styles.skills_container}>
            {
              prefersReducedMotion ? (
                <SlideShow>
                  {skills.map(skill => <RandomFont key={skill}>{skill}</RandomFont>)}
                </SlideShow>
              ) : (
                <InfiniteCarousel direction="right" className={styles.scroller_container}>
                  {skills.map(skill => <RandomFont key={skill}>{skill}</RandomFont>)}
                </InfiniteCarousel>
              )
            }
        </div>
      </div>
    </Section>
  );
};

export default Skills;
