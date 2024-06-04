import Section from "@/components/division/section/Section";
import SubHeader from "@/components/text/subHeader/SubHeader";
import ProjectsContainer from "./projectsContainer/ProjectsContainer";
import Project from "@/model/Project";

const Projects = () => {
  const projects: Project[] = [
    {
      name: "Justa Arena",
      description: "Um jogo estilo Vampire Survivor feito em Godot 4.2",
      anchor: "https://github.com/ferr-ffk/survivor-firebelley",
      projectImageURL: "/projectThumbnails/justa-arena.png"
    },
    {
      name: "Bolsa de Valores em Java",
      description: "Projeto da disciplina de LG2-2023 que simula uma bolsa de valores.",
      projectImageURL: "/projectThumbnails/bolsa-valores.jpg",
      anchor: "https://github.com/ferr-ffk/bolsa-valores-serializavel",
      imageAlt: "Foto de Anna Nekrashevich: https://www.pexels.com/pt-br/foto/anonimo-fundo-segundo-plano-experiencia-6801647/"
    },
    {
      name: "Quickmotors",
      description: "Plataforma de resolução de dúvidas automotivas, por proporcionar um blog contendo dúvidas de usuários.",
      projectImageURL: "/projectThumbnails/quickmotors.png",
      anchor: "https://github.com/ferr-ffk/Site-oficial-QuickMotors"
    },
    {
      name: "Gerenciador de Tarefas Escolares",
      description: "Projeto de JavaFX para criação e manejo de tarefas escolares.",
      projectImageURL: "/projectThumbnails/gerenciador-tarefas.png",
      anchor: "https://github.com/ferr-ffk/gerenciador-tarefas-escolares",
    }
  ]

  return (
    <Section id="projetos" vertical disableAnimation>
      <SubHeader>Projetos</SubHeader>
      <ProjectsContainer projects={projects} />
    </Section>
  );
};

export default Projects;
