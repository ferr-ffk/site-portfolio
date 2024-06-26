import styles from "./Section.module.css";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  id: string;
  stack?: boolean;
  vertical?: boolean;
  disableAnimation?: boolean;
  delayIncrease?: number;
}

const Section = ({ children, id, vertical = false, stack = false }: Props) => {
  return (
    <section
      id={id}
      key={id}
      className={`${styles.container} ${id === "hero" && styles.hero}
                  ${vertical && styles.vertical}
                  ${id == "projetos" && styles.projects}
                  ${id == "habilidades" && styles.skills}
                  ${stack && styles.stack}
                `}
    >
      {children}
    </section>
  );
};

export default Section;
