import AnimateOnVisible from "@/components/layout/animateOnVisible/AnimateOnVisible";
import styles from "./Section.module.css";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  id: string;
  vertical?: boolean;
  disableAnimation?: boolean;
  delayIncrease?: number;
}

const Section = ({
  children,
  id,
  vertical = false,
  disableAnimation,
  delayIncrease = 250,
}: Props) => {
  let delay = 0;

  return (
    <section
      id={id}
      className={`${styles.container} ${id === "hero" && styles.hero}
                  ${vertical && styles.vertical}
                  ${id == "projetos" && styles.projects}
                `}
    >
      {!Array.isArray(children) || disableAnimation
        ? children
        : children.map((child) => (
            <AnimateOnVisible animationType="fade_in_left" delay={(delay += delayIncrease)}>{child}</AnimateOnVisible>
          ))}
    </section>
  );
};

export default Section;
