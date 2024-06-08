"use client";

import Section from "@/components/division/section/Section";
import SubHeader from "@/components/text/subHeader/SubHeader";
import usePrefersReducedMotion from "@/hook/usePrefersReducedMotion";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import { useEffect } from "react";

import styles from "./About.module.css";
import AnimateOnVisible from "@/components/layout/animateOnVisible/AnimateOnVisible";

const About = () => {
  let prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    prefersReducedMotion = usePrefersReducedMotion();
  }, [window]);

  return (
    <Section id="sobre">
      <div className={styles.media_container}>
        {prefersReducedMotion ? (
          <Image
            src="/splineFallback/Escorrega@1-2073x1102.png"
            alt=""
            fill
            style={{ zIndex: "-1", objectFit: "contain" }}
          />
        ) : (
          <Spline scene="https://prod.spline.design/afqunuhRJDW5Ogwc/scene.splinecode" />
        )}
      </div>
      <AnimateOnVisible animationType="fadeInLeft">
        <div className={styles.content_container}>
          <SubHeader>Sobre mim</SubHeader>
          <p>
            Eu me chamo Fernando. Eu tenho 17 anos e atualmente estou estudando
            o ensino médio integrado ao técnico em informática no Instituto
            Federal de São Paulo. No meu tempo livre gosto de passar ouvindo
            música e jogando. Eu amo aprender, e estou sempre aprimorando minhas
            habilidades em coisas que gosto como tecnologia e cozinhar, tópicos
            estou sempre tentando algo novo. Gosto de compartilhar com os outros
            estes meus conhecimnetos, como já fui monitor de salas de estudo de
            lógica de programação onde eu estudo, ajudando alunos com
            conhecimentos em lógica de programação. Aguardo um dia no futuro em
            que posso prestar assistência a quem mais precisa, principalmente na
            área de TI.
          </p>
        </div>
      </AnimateOnVisible>
    </Section>
  );
};

export default About;
