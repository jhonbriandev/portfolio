import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="hero-badge">
          <span className="hero-badge-dot" aria-hidden="true"></span>
          Disponible para posiciones Junior
        </span>

        <h1 className="hero-title">
          Hola, soy Jhon <span className="hero-title-accent">👋</span>
        </h1>

        <p className="hero-subtitle">
          Construyo APIs REST con Django y las conecto con interfaces en React.
          Busco mi primera oportunidad como Junior Developer.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Ver proyectos
          </a>
          <a
            href="/CV_PRACTICAS_2026.pdf"
            download="CV_JHON.pdf"
            className="btn btn-secondary"
          >
            Descargar CV
          </a>
        </div>

        <div className="hero-socials">
          {/*target="_blank" abre el link en pestaña nueva 
            rel="noopener noreferrer es una medida de seguridad 
            evita que la segunda ventana tenga acceso al origen*/}
          <a
            href="https://github.com/jhonbriandev"
            target="_blank"
            rel="noopener
          noreferrer"
            aria-label="Ver perfil de GitHub"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jhon-brian-ac"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver perfil de LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
