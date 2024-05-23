import styles from "./Section.module.css";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  id: string;
  vertical?: boolean;
}

const Section = ({ children, id, vertical = false }: Props) => {
  return (
    <section
      className={`${styles.container} ${id == "hero" ? styles.hero : ""} ${
        vertical ? styles.vertical : ""
      }`}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
