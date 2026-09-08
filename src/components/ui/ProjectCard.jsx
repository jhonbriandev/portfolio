import "./ProjectCard.css";

function ProjectCard({ title, description, stack, image, repoUrl, demoUrl }) {
  return (
    <article className="project-card">
      <img
        src={image}
        alt={`Captura de pantalla de ${title}`}
        className="project-image"
      />

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-stack">
          {/* un array de strings, convertido en badges. */}
          {stack.map((technology) => (
            <span key={technology} className="tech-badge">
              {technology}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Ver código
          </a>
          {/* Si existe demo mostrar el boton sino existe no mostrarlo */}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Ver demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
