import Image from "next/image";
import styles from "./page.module.css";
import SubHeader from "@/components/text/SubHeader/SubHeader";
import Header from "@/components/text/Header/Header";

export default function Home() {
  return (
    <main>
      <Header>
        Header
      </Header>
      
      <SubHeader>
        SubHeader
      </SubHeader>
      <p>Olá mundooo</p>
    </main>
  );
}
