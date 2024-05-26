import LinkButton from "@/components/text/linkButton/LinkButton";
import styles from "./ProjectCard.module.css";

import Image from "next/image";

import Project from "@/model/Project";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={project.projectImageURL} alt={`${project.imageAlt}`} fill objectFit="cover" />
      </div>
      <div className={styles.descriptionContainer}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div style={{ display: "flex", justifyContent: "center", padding: "1.625rem 0"}}>
          <LinkButton href={project.anchor} targetBlank>
            Conferir
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
