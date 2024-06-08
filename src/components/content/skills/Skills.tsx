"use client";

import InfiniteCarousel from "@/components/division/infiniteCarousel/InfiniteCarousel";
import Section from "@/components/division/section/Section";
import RandomFont from "@/components/text/randomFont/RandomFont";
import skills from "@/model/Skills";

import styles from "./Skills.module.css";
import SubHeader from "@/components/text/subHeader/SubHeader";
import AnimateOnVisible from "@/components/layout/animateOnVisible/AnimateOnVisible";
import usePrefersReducedMotion from "@/hook/usePrefersReducedMotion";
import { useEffect, useState } from "react";
import Image from "next/image";
import SlideShow from "@/components/division/slideShow/SlideShow";
import SplineWrapper from "../spline/SplineWrapper";
import Spline from "@splinetool/react-spline";

const Skills = () => {
  let prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Section id="habilidades" stack>
      <div className={styles.media_container}>
        {prefersReducedMotion ? (
          <Image
            src="/splineFallback/Pula Pula@1-2073x1102.png"
            alt=""
            fill
            objectFit="contain"
          />
        ) : (
          <SplineWrapper>
            <Spline scene="https://prod.spline.design/qhQyuppLnqF4RGmN/scene.splinecode" />
          </SplineWrapper>
        )}
      </div>
      <div className={styles.content_container}>
        <AnimateOnVisible animationType="fadeInLeft">
          <SubHeader>Habilidades</SubHeader>
        </AnimateOnVisible>
        {prefersReducedMotion ? (
          <SlideShow>
            {skills.map((skill) => (
              <RandomFont key={skill}>{skill}</RandomFont>
              ))}
            </SlideShow>
        ) : (
          <AnimateOnVisible animationType="fadeInBottom">
            <InfiniteCarousel className={styles.carousel} direction="right">
              {skills.map((skill) => (
                <RandomFont key={skill}>{skill}</RandomFont>
                ))}
            </InfiniteCarousel>
          </AnimateOnVisible>
        )}
      </div>
    </Section>
  );
};

export default Skills;
