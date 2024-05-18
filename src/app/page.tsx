import Image from "next/image";
import styles from "./page.module.css";
import SubHeader from "@/components/text/subHeader/SubHeader";
import Header from "@/components/text/header/Header";
import Section from "@/components/division/section/Section";

export default function Home() {
  return (
    <main id="main">
      <Section id="section">
        <SubHeader>SubHeader is a very nice type of tag!</SubHeader>
      </Section>
      <Section id="sobre">
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
      <Section id="contato">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          reprehenderit ex sapiente ipsam amet voluptas commodi illum voluptatem
          fugit, tempora a atque sequi saepe perspiciatis optio quod rerum
          exercitationem eius maiores ullam? Voluptate quos optio sapiente.
          Ratione aperiam enim ipsum eligendi accusantium voluptatibus
          repellendus nobis? Nihil dolores nostrum sint dicta eos ex, voluptates
          eveniet! Enim nulla, doloribus tempore ipsam ea veritatis pariatur
          perferendis iste! Asperiores vero dolores dolor, distinctio nisi illo,
          quibusdam quidem, dignissimos aspernatur ipsum necessitatibus neque
          ducimus quam non possimus. Reprehenderit repellendus molestias impedit
          placeat corporis. Aut unde facilis corrupti voluptas dolor at harum
          iste nemo ea! Numquam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          repellendus beatae rerum quos maxime placeat perferendis adipisci,
          quis expedita nulla ipsum corrupti enim excepturi omnis cum deleniti,
          fuga nihil nisi voluptate officiis ea officia minima commodi!
          Architecto magnam vitae cumque inventore et quia molestiae
          necessitatibus distinctio. Id labore eum alias maiores nostrum! A
          mollitia fugiat facere eum in tempora, dolorem adipisci inventore,
          repellat pariatur alias repudiandae, blanditiis libero odio
          voluptatem. Praesentium error quidem itaque dicta cum voluptate omnis
          enim adipisci qui obcaecati? Quae laudantium quis animi dicta rem
          numquam tenetur culpa, eum quo veniam fuga ullam iusto possimus.
          Adipisci, dolorum!
        </p>
      </Section>
    </main>
  );
}
