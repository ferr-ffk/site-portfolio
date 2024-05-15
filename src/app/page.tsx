import Image from "next/image";
import styles from "./page.module.css";
import SubHeader from "@/components/text/subHeader/SubHeader";
import Header from "@/components/text/header/Header";
import Section from "@/components/division/section/Section";

export default function Home() {
  return (
    <main id="main">
      <SubHeader>SubHeader is a very nice type of tag!</SubHeader>
      <Section id="section1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          nisi illo, ratione doloremque provident quos ipsam ex libero et quod
          minima voluptates unde dolore sequi veritatis magnam earum suscipit at
          hic, eius odit. Libero natus doloribus delectus amet labore
          accusantium, tempore itaque reprehenderit magni mollitia, ex cum error
          blanditiis odit.
        </p>
      </Section>
      <Section id="section2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          nisi illo, ratione doloremque provident quos ipsam ex libero et quod
          minima voluptates unde dolore sequi veritatis magnam earum suscipit at
          hic, eius odit. Libero natus doloribus delectus amet labore
          accusantium, tempore itaque reprehenderit magni mollitia, ex cum error
          blanditiis odit.
        </p>
      </Section>
      <Section id="section3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          nisi illo, ratione doloremque provident quos ipsam ex libero et quod
          minima voluptates unde dolore sequi veritatis magnam earum suscipit at
          hic, eius odit. Libero natus doloribus delectus amet labore
          accusantium, tempore itaque reprehenderit magni mollitia, ex cum error
          blanditiis odit.
        </p>
      </Section>
    </main>
  );
}
