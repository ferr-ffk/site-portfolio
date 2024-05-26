import Project from "@/model/Project";
import styles from "./ProjectsContainer.module.css";
import ProjectCard from "@/components/layout/projectCard/ProjectCard";

interface Props {
    projects: Project[];
}

const ProjectsContainer = ({projects}: Props) => {
  return (
    <div className={styles.scrollContainer}>
        <div className={styles.container}>
            {projects.map(project => (
              <div>
                <ProjectCard project={project} />
              </div>
            ))}
        </div>
    </div>
  );
}

export default ProjectsContainer;