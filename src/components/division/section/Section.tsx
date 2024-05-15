import styles from "./Section.module.css";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  id: string;
}

const Section = ({ children, id }: Props) => {
  return <section className={styles.container} id={id}>{children}</section>;
};

export default Section;
