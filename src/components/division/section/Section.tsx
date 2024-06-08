import AnimateOnVisible from "@/components/layout/animateOnVisible/AnimateOnVisible";
import styles from "./Section.module.css";
import usePrefersReducedMotion from "@/hook/usePrefersReducedMotion";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  id: string;
  stack?: boolean;
  vertical?: boolean;
  disableAnimation?: boolean;
  delayIncrease?: number;
}

const Section = ({
  children,
  id,
  vertical = false,
  stack = false,
  disableAnimation,
  delayIncrease = 250,
}: Props) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  let delay = 0;

  return (
    <section 
      id={id} 
      key={id} 
      className={`${styles.container} ${id === "hero" && styles.hero}
                  ${vertical && styles.vertical}
                  ${id == "projetos" && styles.projects}
                  ${stack && styles.stack}
                `}
    >
      {children}
    </section>
  );
};

export default Section;
