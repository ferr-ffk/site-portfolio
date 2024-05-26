import styles from "./ProjectsContainer.module.css";

interface Props {
    children?: React.ReactNode | React.ReactNode[];
}

const ProjectsContainer = ({children}: Props) => {
  return (
    <div className={styles.scrollContainer}>
        <div className={styles.container}>
            {children}
        </div>
    </div>
  );
}

export default ProjectsContainer;