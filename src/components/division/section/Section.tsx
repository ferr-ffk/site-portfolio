import FadeIn from "@/components/layout/fadeIn/FadeIn";
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
            <FadeIn delay={(delay += delayIncrease)}>{child}</FadeIn>
          ))}
    </section>
  );
};

export default Section;
