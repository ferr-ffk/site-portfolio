import Section from "@/components/division/section/Section";
import SubHeader from "@/components/text/subHeader/SubHeader";
import ProjectsContainer from "./projectsContainer/ProjectsContainer";
import ProjectCard from "@/components/layout/projectCard/ProjectCard";

const Projects = () => {
  return (
    <Section id="projetos" vertical>
      <SubHeader>Projetos</SubHeader>
      <ProjectsContainer>
        <ProjectCard project={{
          name: "Justa Arena",
          description: "Um jogo estilo Vampire Survivor feito em Godot 4.2",
          anchor: "https://github.com/ferr-ffk/survivor-firebelley",
          projectImageURL: "/hero/background.jpg"
        }} />
        <ProjectCard project={{
          name: "Justa Arena",
          description: "Um jogo estilo Vampire Survivor feito em Godot 4.2",
          anchor: "https://github.com/ferr-ffk/survivor-firebelley",
          projectImageURL: "/hero/background.jpg"
        }} />
        <ProjectCard project={{
          name: "Justa Arena",
          description: "Um jogo estilo Vampire Survivor feito em Godot 4.2",
          anchor: "https://github.com/ferr-ffk/survivor-firebelley",
          projectImageURL: "/hero/background.jpg"
        }} />
        <ProjectCard project={{
          name: "Justa Arena",
          description: "Um jogo estilo Vampire Survivor feito em Godot 4.2",
          anchor: "https://github.com/ferr-ffk/survivor-firebelley",
          projectImageURL: "/hero/background.jpg"
        }} />
        <ProjectCard project={{
          name: "Justa Arena",
          description: "Um jogo estilo Vampire Survivor feito em Godot 4.2",
          anchor: "https://github.com/ferr-ffk/survivor-firebelley",
          projectImageURL: "/hero/background.jpg"
        }} />
        <ProjectCard project={{
          name: "Justa Arena",
          description: "Um jogo estilo Vampire Survivor feito em Godot 4.2",
          anchor: "https://github.com/ferr-ffk/survivor-firebelley",
          projectImageURL: "/hero/background.jpg"
        }} />
      </ProjectsContainer>
    </Section>
  );
};

export default Projects;
