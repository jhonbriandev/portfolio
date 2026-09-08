import ProjectCard from "../ui/ProjectCard";
import { projectsData } from "../../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Proyectos</h2>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
