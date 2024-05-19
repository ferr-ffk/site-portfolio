import SubHeader from "@/components/text/subHeader/SubHeader";
import Section from "@/components/division/section/Section";
import ParallaxBackground from "@/components/division/parallaxBackground/ParallaxBackground";
import Header from "@/components/text/header/Header";

export default function Home() {
  return (
    <>
      <Section id="hero">
        <ParallaxBackground
          frontUrl={"/hero/foreground.png"}
          backUrl={"/hero/background.jpg"}
        >
          <Header>ola pessoal lorem20</Header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            magni cupiditate ea fuga, blanditiis expedita tenetur error, ipsum
            earum natus voluptate perferendis amet quaerat ipsam.
          </p>
        </ParallaxBackground>
      </Section>
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
          veritatis excepturi earum vero laborum quisquam eum quod quidem
          doloremque, nesciunt qui nostrum ipsum? Enim voluptatum, quisquam nemo
          cupiditate voluptates deleniti reiciendis a aspernatur nisi hic
          pariatur omnis rem perferendis saepe adipisci cumque ab dignissimos
          quo dolorem similique ea illum! Omnis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          facere voluptatem iste quam quaerat consequatur distinctio? Et facere
          quos veritatis. Asperiores quia, qui enim itaque dolore nesciunt neque
          distinctio laboriosam adipisci quam odio et voluptates, quisquam
          molestias dolores fugiat harum inventore, corporis dolor libero.
          Molestias alias pariatur assumenda laborum iste?
        </p>
      </Section>
    </>
  );
}
