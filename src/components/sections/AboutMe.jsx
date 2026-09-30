import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="sobre-mi" className="about">
      <div className="about-grid">
        <div className="about-image-wrapper">
          <img
            src="/public/images/devallday.jpg"
            alt="Foto de perfil de Jhon"
            className="about-image"
          />
        </div>

        <div className="about-content">
          <h2 className="section-title">Sobre mí</h2>

          <p className="about-text">
            Soy estudiante de Ingeniería de Sistemas en Perú, formándome como
            desarrollador Full Stack a través de un roadmap estructurado y
            acumulativo — cada proyecto construido sobre lo aprendido en el
            anterior, sin saltarme fundamentos.
          </p>

          <p className="about-text">
            Mi enfoque de aprendizaje prioriza{" "}
            <strong>entender antes que copiar</strong>: uso herramientas de IA
            como apoyo, no como atajo, y documento mi propio proceso de
            razonamiento en cada proyecto.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-number">3</span>
              <span className="about-stat-label">Proyectos completos</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">40+</span>
              <span className="about-stat-label">Tests automatizados</span>
            </div>
          </div>

          <p className="about-text">
            Actualmente busco mi primera oportunidad como
            <strong> desarrollador Junior</strong>, donde pueda seguir
            aprendiendo con el mismo nivel de exigencia con el que construí
            estos proyectos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
